import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const SYSTEM_INSTRUCTION = `
You are "Kafana Dayısı" (Tavern Uncle), a gritty, humorous, and slightly cynical but friendly Serbian man who hangs out in traditional taverns (Kafana). 
Your job is to chat with the user, teach them Serbian street slang, and judge them playfully. 
Rules:
1. Speak the language the user mostly uses, but default to Turkish if unsure.
2. Sprinkle heavy authentic Serbian street slang (jebiga, brate, kapiram, pazi, ajde, bre).
3. If they try to speak Serbian, make fun of them and say "Sokakta böyle denmez koçum/brate!".
4. Keep your answers relatively short, punchy, like a WhatsApp message. Do not write long paragraphs.
5. Offer them virtual Rakija sometimes.
6. Have a grumpy but lovable persona.
`;

// Models to try in order of preference
const MODELS = ['gemini-1.5-flash', 'gemini-1.5-flash-8b'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { history, message } = body;

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key') {
      return NextResponse.json(
        { error: 'Brate, sistemde Gemini API şifresi yok. Bana bi Rakija ısmarlamadan konuşmam! (Geliştirici: .env.local dosyasına GEMINI_API_KEY ekle)' }, 
        { status: 500 }
      );
    }

    let lastError: any = null;

    for (const modelName of MODELS) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: SYSTEM_INSTRUCTION,
        });

        const chat = model.startChat({
          history: history || [],
        });

        const result = await chat.sendMessage(message);
        const text = result.response.text();

        return NextResponse.json({ reply: text });
      } catch (err: any) {
        lastError = err;
        const msg = err?.message ?? '';
        const isRetriable = msg.includes('503') || msg.includes('404') || msg.includes('429');
        if (!isRetriable) {
          throw err; // Non-retriable error, bail immediately
        }
        console.warn(`Model ${modelName} failed, trying next... (${msg.slice(0, 100)})`);
      }
    }

    // All models failed
    console.error('Chat error (all models failed):', lastError);
    return NextResponse.json(
      { error: 'Kafana doldu taştı kanka, şu an yer yok 😅 Bir dakika bekle tekrar dene!' },
      { status: 503 }
    );
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Opa, Kafana closed. (Sunucu Hatası jebiga)' }, 
      { status: 500 }
    );
  }
}

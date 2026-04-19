import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { userAnswer, correctAnswer, question, streetMode = false } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const tone = streetMode
      ? 'You are a sarcastic but encouraging Belgrade local. Use phrases like "jebiga", "brate", "kapiram", "ajde". Max 2 sentences. Be funny.'
      : 'You are an encouraging Serbian tutor. Max 2 sentences. Be warm.';

    const prompt = `${tone}
The student was asked: "${question}"
Correct answer: "${correctAnswer}"
Student answered: "${userAnswer}"
Give them brief, witty feedback on why they were wrong and what the correct answer means.`;

    const result = await model.generateContent(prompt);
    return NextResponse.json({ feedback: result.response.text() });
  } catch {
    return NextResponse.json({ feedback: 'Jebiga — check your Gemini API key, brate!' }, { status: 500 });
  }
}

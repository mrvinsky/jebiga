import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { topic, difficulty = 'beginner', streetMode = false } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const tone = streetMode
      ? 'You are a witty Belgrade local teaching Serbian in street style. Use slang like "brate", "jebiga", "kapiram", "ajde", "vopi". Be funny but educational.'
      : 'You are a friendly Serbian language tutor. Be encouraging and clear.';

    const prompt = `${tone}
Generate a JSON lesson about "${topic}" at ${difficulty} level.
Return ONLY valid JSON in this exact format:
{
  "title": "lesson title",
  "questions": [
    {"id": "q1", "type": "multiple-choice", "prompt": "question text", "answer": "correct answer", "options": ["A","B","C","D"]},
    {"id": "q2", "type": "translate", "prompt": "translate this", "answer": "Serbian translation", "hint": "optional hint"}
  ]
}
Include 4 questions. Mix multiple-choice and translate types.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json\n?|\n?```/g, '').trim();
    const lesson = JSON.parse(text);
    return NextResponse.json({ lesson });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate lesson. Check your GEMINI_API_KEY.' }, { status: 500 });
  }
}

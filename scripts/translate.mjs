import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Get API Key from .env.local
const envFile = fs.readFileSync(path.resolve('.env.local'), 'utf-8');
const keyMatch = envFile.match(/GEMINI_API_KEY=(.*)/);
const apiKey = keyMatch ? keyMatch[1] : '';

if (!apiKey) {
  console.error("GEMINI_API_KEY missing");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function translateFile(filePath) {
  console.log(`Translating ${filePath}...`);
  const code = fs.readFileSync(filePath, 'utf-8');
  
  const prompt = `Yapay Zeka olarak amacın aşağıdaki TypeScript kod dosyasını (Sırpça dil öğrenme uygulaması altyapısı) İNGİLİZCE'DEN TÜRKÇE'YE çevirmektir.
Dosyadaki İngilizce olan tüm "description, prompt, title, streetTitle, streetDescription, hint, answer (EĞER İNGİLİZCE CEVAP İSTENİYORSA), explanation, culturalTip, grammarNote, scenario, vocabulary translation, example translation" gibi eğitim metinlerini TÜRKÇEYE çevirmelisin. 
Sırpça kelimelere/cümlelere DOKUNMA (Ör: "Kako si", "Zdravo", "vopi" bunlar Sırpça kalmalıdır).
Çeviride SÜREKLİ SOKAK AĞZI VE KANKA YAKLAŞIMI KULLAN (Türkçe metne "Brate", "koçum", "kanka", "falan" gibi şeyler ekle). 
TypeScript KOD YAPISINI ASLA BOZMA. GERİYE SADECE KOD DÖNDÜR, markdown veya ek metin yazma, sadece saf kodu JSON/TypeScript formatında döndür. (Örn \`\`\`typescript yok, dümdüz TS kodu).

KOD:
${code}`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  try {
    const result = await model.generateContent(prompt);
    let output = result.response.text();
    output = output.replace(/```typescript\n?|\n?```/g, ''); // Remove markdown if present
    
    fs.writeFileSync(filePath, output.trim() + '\n', 'utf-8');
    console.log(`✅ Success: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error on ${filePath}:`, err);
  }
}

async function run() {
  const files = [
    'data/lessonContent.ts',
    'data/lessonContentA.ts',
    'data/lessonContentB.ts',
    'data/lessonContentC.ts',
    'data/lessonContentD.ts'
  ];

  for (const f of files) {
    const fullPath = path.resolve(f);
    if(fs.existsSync(fullPath)) {
      await translateFile(fullPath);
    } else {
      console.log(`Skipping ${f}, not found.`);
    }
  }
}

run();

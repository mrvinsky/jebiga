// ─── VOCAB ITEM ──────────────────────────────────────────────────────────────
export interface VocabItem {
  word: string;
  pronunciation: string;
  translation: string;
  translationEn?: string; // 🇬🇧 English translation
  streetTranslation?: string; // 🔥 Street mode translation (often more slangy/raw)
  example?: string;
  exampleEn?: string;     // 🇬🇧 English example
  streetExample?: string;  // 🔥 Street mode example
  // 🔊 Ses altyapısı — bir sonraki sürümde dolacak
  audioUrl?: string;       // Firebase Storage URL: gs://jebiga/audio/vocab/{word}.mp3
  audioSlug?: string;      // dosya adı için normalize edilmiş slug (boşluksuz, küçük harf)
}

// ─── DIALOGUE LINE ────────────────────────────────────────────────────────────
export interface DialogueLine {
  speaker: 'A' | 'B';
  serbian: string;
  translation: string;
  translationEn?: string; // 🇬🇧 English translation
  streetTranslation?: string; // 🔥 Street mode translation
  // 🔊 Diyalog sesi
  audioUrl?: string;       // Firebase Storage URL
}

// ─── GRAMMAR RULE ─────────────────────────────────────────────────────────────
// Dilbilgisi kuralı — serbest yapılı, başlık + açıklama + örnekler
export interface GrammarRule {
  title: string;
  titleEn?: string;   // 🇬🇧 English title
  streetTitle?: string; // 🔥 Street mode title
  body: string;
  bodyEn?: string;    // 🇬🇧 English body
  streetBody?: string; // 🔥 Street mode body
  examples?: { 
    serbian: string; 
    translation: string; 
    translationEn?: string;
    streetTranslation?: string;
  }[];
}

// ─── LESSON CONTENT ───────────────────────────────────────────────────────────
export interface LessonContent {
  scenario: string;
  scenarioEn?: string; // 🇬🇧 English scenario
  streetScenario?: string; // 🔥 Street mode scenario
  vocabulary: VocabItem[];

  // Basit dilbilgisi notu (tek kural, eski yapı — geriye uyumlu)
  grammarNote?: { 
    title: string; 
    body: string; 
    titleEn?: string; 
    bodyEn?: string;
    streetTitle?: string;
    streetBody?: string;
  };

  // Genişletilmiş dilbilgisi kuralları listesi (yeni — çoklu kural desteği)
  grammarRules?: GrammarRule[];

  culturalTip?: string;
  culturalTipEn?: string; // 🇬🇧 English cultural tip
  streetCulturalTip?: string; // 🔥 Street mode cultural tip
  dialogue?: DialogueLine[];

  // 🔊 Ders sesi — gelecekte ders başı okuma kaydı
  introAudioUrl?: string;
}

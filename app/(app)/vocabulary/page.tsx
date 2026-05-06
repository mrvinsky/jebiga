'use client';
import { useState, useCallback, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useStreetMode } from '@/context/StreetModeContext';
import { curriculum } from '@/data/curriculum';

// ─── Extract all vocabulary from curriculum ───────────────────────────────────
type WordEntry = {
  serbian: string;
  turkish: string;
  english: string;
  category: string;
  categoryEn: string;
  emoji: string;
};

/** True if text looks like a Turkish word (contains Turkish-only chars) */
function isTurkish(text: string): boolean {
  return /[ıİğĞ]/.test(text) || /^\d+$/.test(text);
}

/** Extract the quoted word/phrase from prompts like «"Kako si?" ne anlama gelir?» */
function extractQuoted(text: string): string | null {
  const m = text.match(/["""«»]([^"""«»]+)["""«»]/);
  return m ? m[1].trim() : null;
}

/** Strip Turkish question boilerplate from prompts to get a short meaning */
function extractMeaningTR(prompt: string): string {
  return prompt
    .replace(/["""«»][^"""«»]+["""«»]\s*/g, '') // remove quoted Serbian part
    .replace(/nasıl denir\??|ne anlama gelir\??|kelimesini çevir|cümlesini çevir|sayısını Sırpçaya çevir|Sırpçada .* kelimesi .* dir\.?|Boşluğu doldur.*\??|sorusu nasıl sorulur\??|demek için .* deriz\./gi, '')
    .replace(/Sırpçada|Türkçede|demektir\.?|anlamına gelir\.?/gi, '')
    .trim()
    .replace(/^[".\s]+|[".\s]+$/g, '')
    .trim();
}

function extractMeaningEN(prompt: string): string {
  return prompt
    .replace(/["""«»][^"""«»]+["""«»]\s*/g, '')
    .replace(/How do you say\??|What does .* mean\??|Translate( the (word|phrase|question|number))?|How do you ask\??|in Serbian( is| means)?\.?|The word for .* in Serbian is/gi, '')
    .trim()
    .replace(/^[".\s]+|[".\s]+$/g, '')
    .trim();
}

function extractVocabulary(): WordEntry[] {
  const seen = new Set<string>();
  const words: WordEntry[] = [];

  for (const set of curriculum) {
    for (const lesson of set.lessons) {
      for (const q of lesson.questions) {
        const prompt = q.prompt || '';
        const promptEn = q.promptEn || '';
        const type = q.type;

        let serbian = '';
        let turkish = '';
        let english = '';

        if (type === 'translate') {
          // answer is always the Serbian phrase; meaning comes from prompt
          if (!isTurkish(q.answer) && q.answer.length > 1) {
            serbian = q.answer.trim();
            turkish = extractMeaningTR(prompt) || prompt.replace(/kelimesini çevir|cümlesini çevir/gi, '').replace(/["""]/g, '').trim();
            english = extractMeaningEN(promptEn) || promptEn.replace(/Translate( the (word|phrase|question|number))?/gi, '').replace(/["""]/g, '').trim();
          }

        } else if (type === 'fill-blank') {
          // answer is the missing Serbian word/particle
          if (!isTurkish(q.answer) && q.answer.length > 1) {
            serbian = q.answer.trim();
            // Use hint as meaning if available, else extract from prompt
            turkish = q.hint || extractMeaningTR(prompt);
            english = q.hintEn || extractMeaningEN(promptEn);
          }

        } else if (type === 'multiple-choice') {
          const isMeaningQ = /ne anlama gelir|what does.*mean|hangi sayı|kaçtır|kaç eder|nedir\?/i.test(prompt + promptEn);
          const isHowToSayQ = /nasıl denir|how do you say|how do you ask/i.test(prompt + promptEn);

          if (isMeaningQ) {
            // Serbian word is inside quotes in prompt; answer is the TR/EN meaning
            const quoted = extractQuoted(prompt) || extractQuoted(promptEn);
            if (quoted && !isTurkish(quoted) && quoted.length > 1) {
              serbian = quoted;
              turkish = q.answer;      // answer = Turkish meaning
              english = q.answerEn || q.answer;
            }
          } else if (isHowToSayQ) {
            // answer IS the Serbian word
            if (!isTurkish(q.answer) && q.answer.length > 1) {
              serbian = q.answer.trim();
              const quoted = extractQuoted(prompt);
              turkish = quoted || extractMeaningTR(prompt);
              const quotedEn = extractQuoted(promptEn);
              english = quotedEn || extractMeaningEN(promptEn);
            }
          }
          // other MC question types → skip (too ambiguous)
        }

        // Deduplicate + filter noise
        if (!serbian) continue;
        const key = serbian.toLowerCase().replace(/[^a-zšđčćžа-я0-9]/gi, '');
        if (key.length < 2) continue;
        if (seen.has(key)) continue;
        seen.add(key);

        words.push({
          serbian,
          turkish: turkish || serbian,
          english: english || q.answerEn || serbian,
          category: set.title,
          categoryEn: set.titleEn || set.title,
          emoji: set.emoji,
        });
      }
    }
  }

  return words;
}


// ─── Category colors ──────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  'Selamlaşma': '#c0392b',
  'Greetings': '#c0392b',
  'Sayılar': '#003da5',
  'Numbers': '#003da5',
  'Yemek ve İçecek': '#e67e22',
  'Food and Drinks': '#e67e22',
  'Yol Bulma': '#8e44ad',
  'Directions': '#8e44ad',
  'Sokak Ağzı 🔥': '#39ff14',
  'Street Slang': '#39ff14',
  'Günlük Hayat': '#16a085',
  'Daily Life': '#16a085',
  'Duygular': '#e91e63',
  'Emotions': '#e91e63',
};

function getCatColor(cat: string): string {
  return CATEGORY_COLORS[cat] || '#888';
}

// ─── TTS ─────────────────────────────────────────────────────────────────────
function speakSerbian(text: string, onStart?: () => void, onEnd?: () => void) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);

  // Try to find a Serbian or Croatian voice (both use similar phonetics)
  const voices = window.speechSynthesis.getVoices();
  const serbianVoice =
    voices.find(v => v.lang.startsWith('sr')) ||
    voices.find(v => v.lang.startsWith('hr')) ||  // Croatian — close enough
    voices.find(v => v.lang.startsWith('bs')) ||  // Bosnian
    voices.find(v => v.lang.startsWith('sl')) ||  // Slovenian
    voices.find(v => v.lang.startsWith('cs')) ||  // Czech — Slavic fallback
    voices.find(v => v.lang.startsWith('pl'));     // Polish — Slavic fallback

  if (serbianVoice) utter.voice = serbianVoice;
  utter.lang = serbianVoice?.lang || 'sr-RS';
  utter.rate = 0.85;
  utter.pitch = 1;

  utter.onstart = onStart || null;
  utter.onend = onEnd || null;
  utter.onerror = onEnd || null;

  window.speechSynthesis.speak(utter);
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VocabularyPage() {
  const lang = useLanguage();
  const { streetMode } = useStreetMode();

  const allWords = extractVocabulary();

  // Categories
  const categories = ['all', ...Array.from(new Set(allWords.map(w => lang === 'en' ? w.categoryEn : w.category)))];

  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [speaking, setSpeaking] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const filteredWords = allWords.filter(w => {
    const catMatch = activeCategory === 'all' || (lang === 'en' ? w.categoryEn : w.category) === activeCategory;
    const searchLower = search.toLowerCase();
    const searchMatch = !search ||
      w.serbian.toLowerCase().includes(searchLower) ||
      w.turkish.toLowerCase().includes(searchLower) ||
      w.english.toLowerCase().includes(searchLower);
    return catMatch && searchMatch;
  });

  const handleSpeak = useCallback((word: string) => {
    setSpeaking(word);
    speakSerbian(word, undefined, () => setSpeaking(null));
  }, []);

  const toggleFlip = (serbian: string) => {
    setFlipped(prev => {
      const next = new Set(prev);
      if (next.has(serbian)) next.delete(serbian);
      else next.add(serbian);
      return next;
    });
  };

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>

      {/* ── Header ── */}
      <div style={{
        padding: '28px 24px 24px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 20,
        marginBottom: 24,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,61,165,0.12) 0%, transparent 65%)',
        }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>📖</div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 900, letterSpacing: '-0.03em',
            margin: '0 0 8px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #003da5, #0050d5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              {lang === 'en' ? 'Vocabulary Review' : 'Kelime Tekrarı'}
            </span>
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.88rem', margin: '0 0 20px' }}>
            {lang === 'en'
              ? `${allWords.length} words · Click any card to flip · 🔊 to hear pronunciation`
              : `${allWords.length} kelime · Kartı çevirmek için tıkla · 🔊 ile telaffuzu dinle`
            }
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 400, margin: '0 auto' }}>
            <span style={{
              position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--color-muted)', fontSize: '1rem', pointerEvents: 'none'
            }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={lang === 'en' ? 'Search words...' : 'Kelime ara...'}
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '10px 14px 10px 40px',
                background: 'var(--color-surface-2)',
                border: '1.5px solid var(--color-border)',
                borderRadius: 12,
                color: 'var(--color-foreground)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = '#003da5'}
              onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
            />
          </div>
        </div>
      </div>

      {/* ── Category Filter ── */}
      <div style={{
        display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20, paddingBottom: 4,
        overflowX: 'auto',
      }}>
        {categories.map(cat => {
          const color = cat === 'all' ? '#888' : getCatColor(cat);
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: 20,
                border: `1.5px solid ${isActive ? color : 'var(--color-border)'}`,
                background: isActive ? `${color}18` : 'var(--color-surface)',
                color: isActive ? color : 'var(--color-muted)',
                fontSize: '0.78rem', fontWeight: 700,
                cursor: 'pointer', whiteSpace: 'nowrap',
                transition: 'all 0.15s',
                fontFamily: 'var(--font-display)',
              }}
            >
              {cat === 'all' ? (lang === 'en' ? '🌍 All' : '🌍 Tümü') : cat}
              {cat !== 'all' && (
                <span style={{ marginLeft: 6, fontSize: '0.7rem', opacity: 0.7 }}>
                  ({allWords.filter(w => (lang === 'en' ? w.categoryEn : w.category) === cat).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Word count ── */}
      <div style={{ marginBottom: 16, fontSize: '0.8rem', color: 'var(--color-muted)', fontWeight: 600 }}>
        {lang === 'en' ? `Showing ${filteredWords.length} words` : `${filteredWords.length} kelime gösteriliyor`}
        {search && <span style={{ marginLeft: 8, color: '#003da5' }}>· "{search}"</span>}
      </div>

      {/* ── Word Grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 12,
        marginBottom: 40,
      }}>
        {filteredWords.map(word => {
          const color = getCatColor(lang === 'en' ? word.categoryEn : word.category);
          const isFlipped = flipped.has(word.serbian);
          const isSpeaking = speaking === word.serbian;

          return (
            <div
              key={word.serbian}
              onClick={() => toggleFlip(word.serbian)}
              style={{
                borderRadius: 16,
                border: `1.5px solid ${isFlipped ? color + '60' : 'var(--color-border)'}`,
                background: isFlipped ? `${color}0e` : 'var(--color-surface)',
                padding: '16px 16px 14px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                boxShadow: isFlipped ? `0 4px 20px ${color}22` : '0 2px 8px rgba(0,0,0,0.02)',
                position: 'relative',
                animation: isSpeaking ? 'pulse 0.6s ease-in-out infinite' : 'none',
              }}
            >
              {/* Category dot */}
              <div style={{
                position: 'absolute', top: 10, left: 12,
                width: 6, height: 6, borderRadius: '50%',
                background: color,
              }} />

              {/* Speak button */}
              <button
                onClick={e => { e.stopPropagation(); handleSpeak(word.serbian); }}
                style={{
                  position: 'absolute', top: 8, right: 8,
                  background: isSpeaking ? `${color}20` : 'var(--color-surface-2)',
                  border: `1px solid ${isSpeaking ? color : 'var(--color-border)'}`,
                  borderRadius: 8, padding: '4px 7px',
                  cursor: 'pointer', fontSize: '0.85rem',
                  transition: 'all 0.2s',
                  color: isSpeaking ? color : 'var(--color-muted)',
                  boxShadow: isSpeaking ? `0 0 12px ${color}40` : 'none',
                }}
                title={lang === 'en' ? 'Listen to pronunciation' : 'Telaffuzu dinle'}
              >
                {isSpeaking ? '🔊' : '🔈'}
              </button>

              {/* Serbian word — always shown */}
              <div style={{ marginTop: 12, marginBottom: 8, paddingRight: 32 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem', fontWeight: 800,
                  color: isFlipped ? color : 'var(--color-foreground)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  transition: 'color 0.2s',
                }}>
                  {word.serbian}
                </div>

                {/* Category label */}
                <div style={{
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em',
                  color: color, opacity: 0.7, marginTop: 2, textTransform: 'uppercase',
                }}>
                  {word.emoji} {lang === 'en' ? word.categoryEn : word.category}
                </div>
              </div>

              {/* Translation — shown when flipped */}
              <div style={{
                overflow: 'hidden',
                maxHeight: isFlipped ? 80 : 0,
                opacity: isFlipped ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
              }}>
                <div style={{
                  borderTop: `1px solid ${color}30`,
                  paddingTop: 8,
                  display: 'flex', flexDirection: 'column', gap: 4,
                }}>
                  {lang === 'en' ? (
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-foreground)', fontWeight: 600 }}>
                      🇬🇧 {word.english}
                    </div>
                  ) : (
                    <>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-foreground)', fontWeight: 600 }}>
                        🇹🇷 {word.turkish}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                        🇬🇧 {word.english}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Flip hint */}
              {!isFlipped && (
                <div style={{
                  fontSize: '0.65rem', color: 'var(--color-muted)',
                  marginTop: 6, opacity: 0.6,
                }}>
                  {lang === 'en' ? 'Tap to reveal' : 'Tıkla → anlam'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredWords.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-muted)' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 700 }}>
            {lang === 'en' ? 'No words found' : 'Kelime bulunamadı'}
          </div>
        </div>
      )}

      {/* pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}

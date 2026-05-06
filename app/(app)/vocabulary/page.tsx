'use client';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/hooks/useLanguage';
import { useStreetMode } from '@/context/StreetModeContext';
import { useAuth } from '@/context/AuthContext';
import { curriculum } from '@/data/curriculum';

// ─── Types ────────────────────────────────────────────────────────────────────
type WordEntry = {
  serbian: string;
  turkish: string;
  english: string;
  category: string;
  categoryEn: string;
  emoji: string;
  isPro: boolean;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function isTurkish(text: string): boolean {
  return /[ıİğĞ]/.test(text) || /^\d+$/.test(text);
}

function extractQuoted(text: string): string | null {
  const m = text.match(/["""«»]([^"""«»]+)["""«»]/);
  return m ? m[1].trim() : null;
}

function extractMeaningTR(prompt: string): string {
  return prompt
    .replace(/["""«»][^"""«»]+["""«»]\s*/g, '')
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
    const isProSet = !!set.isPro;

    for (const lesson of set.lessons) {
      for (const q of lesson.questions) {
        const prompt = q.prompt || '';
        const promptEn = q.promptEn || '';
        const type = q.type;

        let serbian = '';
        let turkish = '';
        let english = '';

        if (type === 'translate') {
          if (!isTurkish(q.answer) && q.answer.length > 1) {
            serbian = q.answer.trim();
            turkish = extractMeaningTR(prompt) || prompt.replace(/kelimesini çevir|cümlesini çevir/gi, '').replace(/["""]/g, '').trim();
            english = extractMeaningEN(promptEn) || promptEn.replace(/Translate( the (word|phrase|question|number))?/gi, '').replace(/["""]/g, '').trim();
          }
        } else if (type === 'fill-blank') {
          if (!isTurkish(q.answer) && q.answer.length > 1) {
            serbian = q.answer.trim();
            turkish = q.hint || extractMeaningTR(prompt);
            english = q.hintEn || extractMeaningEN(promptEn);
          }
        } else if (type === 'multiple-choice') {
          const isMeaningQ = /ne anlama gelir|what does.*mean|hangi sayı|kaçtır|kaç eder|nedir\?/i.test(prompt + promptEn);
          const isHowToSayQ = /nasıl denir|how do you say|how do you ask/i.test(prompt + promptEn);

          if (isMeaningQ) {
            const quoted = extractQuoted(prompt) || extractQuoted(promptEn);
            if (quoted && !isTurkish(quoted) && quoted.length > 1) {
              serbian = quoted;
              turkish = q.answer;
              english = q.answerEn || q.answer;
            }
          } else if (isHowToSayQ) {
            if (!isTurkish(q.answer) && q.answer.length > 1) {
              serbian = q.answer.trim();
              const quoted = extractQuoted(prompt);
              turkish = quoted || extractMeaningTR(prompt);
              const quotedEn = extractQuoted(promptEn);
              english = quotedEn || extractMeaningEN(promptEn);
            }
          }
        }

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
          isPro: isProSet,
        });
      }
    }
  }

  return words;
}

// ─── Category colors ──────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  'Selamlaşma': '#c0392b', 'Greetings': '#c0392b',
  'Sayılar': '#003da5',    'Numbers': '#003da5',
  'Yemek ve İçecek': '#e67e22', 'Food and Drinks': '#e67e22',
  'Yol Bulma': '#8e44ad',  'Directions': '#8e44ad',
  'Sokak Ağzı 🔥': '#39ff14', 'Street Slang': '#39ff14',
  'Günlük Yaşam': '#16a085', 'Daily Life': '#16a085',
  'Duygular': '#e91e63',   'Emotions': '#e91e63',
};
function getCatColor(cat: string): string { return CATEGORY_COLORS[cat] || '#888'; }

// ─── TTS ─────────────────────────────────────────────────────────────────────
function speakSerbian(text: string, onEnd?: () => void) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();
  const voice =
    voices.find(v => v.lang.startsWith('sr')) ||
    voices.find(v => v.lang.startsWith('hr')) ||
    voices.find(v => v.lang.startsWith('bs')) ||
    voices.find(v => v.lang.startsWith('sl')) ||
    voices.find(v => v.lang.startsWith('cs')) ||
    voices.find(v => v.lang.startsWith('pl'));
  if (voice) utter.voice = voice;
  utter.lang = voice?.lang || 'sr-RS';
  utter.rate = 0.85;
  utter.onend = onEnd || null;
  utter.onerror = onEnd || null;
  window.speechSynthesis.speak(utter);
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VocabularyPage() {
  const lang = useLanguage();
  const { streetMode } = useStreetMode();
  const { userData } = useAuth();
  const router = useRouter();

  const isPro = userData?.subscription === 'pro' || userData?.role === 'admin';

  const allWords = extractVocabulary();
  const freeWords = allWords.filter(w => !w.isPro);
  const proWords  = allWords.filter(w => w.isPro);

  const categories = ['all', ...Array.from(new Set(allWords.map(w => lang === 'en' ? w.categoryEn : w.category)))];

  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [speaking, setSpeaking] = useState<string | null>(null);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const matchesFilter = (w: WordEntry) => {
    const catMatch = activeCategory === 'all' || (lang === 'en' ? w.categoryEn : w.category) === activeCategory;
    const s = search.toLowerCase();
    const searchMatch = !search ||
      w.serbian.toLowerCase().includes(s) ||
      w.turkish.toLowerCase().includes(s) ||
      w.english.toLowerCase().includes(s);
    return catMatch && searchMatch;
  };

  const filteredFree = freeWords.filter(matchesFilter);
  const filteredPro  = proWords.filter(matchesFilter);

  const handleSpeak = useCallback((word: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSpeaking(word);
    speakSerbian(word, () => setSpeaking(null));
  }, []);

  const toggleFlip = (serbian: string) => {
    setFlipped(prev => {
      const next = new Set(prev);
      if (next.has(serbian)) next.delete(serbian); else next.add(serbian);
      return next;
    });
  };

  // ── Word card component ────────────────────────────────────────────────────
  const WordCard = ({ word, locked = false }: { word: WordEntry; locked?: boolean }) => {
    const color = getCatColor(lang === 'en' ? word.categoryEn : word.category);
    const isFlipped = !locked && flipped.has(word.serbian);
    const isSpeaking = speaking === word.serbian;

    return (
      <div
        onClick={() => locked ? router.push('/pro') : toggleFlip(word.serbian)}
        style={{
          borderRadius: 16,
          border: `1.5px solid ${locked ? 'rgba(241,196,15,0.25)' : isFlipped ? color + '60' : 'var(--color-border)'}`,
          background: locked ? 'rgba(241,196,15,0.04)' : isFlipped ? `${color}0e` : 'var(--color-surface)',
          padding: '16px 16px 14px',
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: locked ? 'none' : isFlipped ? `0 4px 20px ${color}22` : '0 2px 8px rgba(0,0,0,0.02)',
          position: 'relative',
          animation: isSpeaking ? 'vocab-pulse 0.6s ease-in-out infinite' : 'none',
          overflow: 'hidden',
        }}
      >
        {/* Category dot */}
        <div style={{
          position: 'absolute', top: 10, left: 12,
          width: 6, height: 6, borderRadius: '50%',
          background: locked ? '#f1c40f' : color,
        }} />

        {/* Locked overlay */}
        {locked && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(6px)',
            borderRadius: 14,
            gap: 6,
          }}>
            <span style={{ fontSize: '1.3rem' }}>⭐</span>
            <span style={{
              fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em',
              background: 'linear-gradient(135deg,#f5c518,#ff8c00)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              PRO
            </span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
              {lang === 'en' ? 'Tap to unlock' : 'Aç'}
            </span>
          </div>
        )}

        {/* Speak button */}
        {!locked && (
          <button
            onClick={e => handleSpeak(word.serbian, e)}
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
        )}

        {/* Serbian word */}
        <div style={{ marginTop: 12, marginBottom: 8, paddingRight: 32, filter: locked ? 'blur(5px)' : 'none', userSelect: locked ? 'none' : 'auto' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem', fontWeight: 800,
            color: isFlipped ? color : 'var(--color-foreground)',
            letterSpacing: '-0.01em', lineHeight: 1.2,
            transition: 'color 0.2s',
          }}>
            {word.serbian}
          </div>
          <div style={{
            fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em',
            color: locked ? '#f1c40f' : color, opacity: 0.7, marginTop: 2, textTransform: 'uppercase',
          }}>
            {word.emoji} {lang === 'en' ? word.categoryEn : word.category}
          </div>
        </div>

        {/* Translation — shown when flipped */}
        {!locked && (
          <div style={{
            overflow: 'hidden',
            maxHeight: isFlipped ? 80 : 0,
            opacity: isFlipped ? 1 : 0,
            transition: 'max-height 0.3s ease, opacity 0.3s ease',
          }}>
            <div style={{
              borderTop: `1px solid ${color}30`, paddingTop: 8,
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
        )}

        {/* Flip hint */}
        {!locked && !isFlipped && (
          <div style={{ fontSize: '0.65rem', color: 'var(--color-muted)', marginTop: 6, opacity: 0.6 }}>
            {lang === 'en' ? 'Tap to reveal' : 'Tıkla → anlam'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 860, margin: '0 auto' }}>

      {/* ── Header ── */}
      <div style={{
        padding: '28px 24px 24px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 20, marginBottom: 24,
        position: 'relative', overflow: 'hidden',
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
            fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 8px',
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #003da5, #0050d5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {lang === 'en' ? 'Vocabulary Review' : 'Kelime Tekrarı'}
            </span>
          </h1>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
            <div style={{
              padding: '6px 16px', borderRadius: 20,
              background: 'rgba(0,61,165,0.08)', border: '1px solid rgba(0,61,165,0.2)',
              fontSize: '0.78rem', fontWeight: 700, color: '#003da5',
            }}>
              📚 {freeWords.length} {lang === 'en' ? 'free words' : 'ücretsiz kelime'}
            </div>
            {!isPro && (
              <div
                onClick={() => router.push('/pro')}
                style={{
                  padding: '6px 16px', borderRadius: 20,
                  border: '1px solid rgba(241,196,15,0.35)',
                  fontSize: '0.78rem', fontWeight: 700,
                  background: 'linear-gradient(135deg,#f5c518,#ff8c00)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  cursor: 'pointer',
                }}
              >
                ⭐ {proWords.length} {lang === 'en' ? 'pro words locked' : 'pro kelime kilitli'}
              </div>
            )}
            {isPro && (
              <div style={{
                padding: '6px 16px', borderRadius: 20,
                background: 'rgba(57,255,20,0.08)', border: '1px solid rgba(57,255,20,0.2)',
                fontSize: '0.78rem', fontWeight: 700, color: '#27ae60',
              }}>
                ✓ {lang === 'en' ? 'Full access' : 'Tam erişim'} — {allWords.length} {lang === 'en' ? 'words' : 'kelime'}
              </div>
            )}
          </div>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 400, margin: '0 auto' }}>
            <span style={{
              position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--color-muted)', fontSize: '1rem', pointerEvents: 'none',
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
                fontSize: '0.9rem', outline: 'none',
                fontFamily: 'var(--font-sans)',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target.style.borderColor = '#003da5')}
              onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
            />
          </div>
        </div>
      </div>

      {/* ── Category Filter ── */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20, overflowX: 'auto' }}>
        {categories.map(cat => {
          const color = cat === 'all' ? '#888' : getCatColor(cat);
          const isActive = activeCategory === cat;
          const catIsPro = !isPro && allWords.some(w => (lang === 'en' ? w.categoryEn : w.category) === cat && w.isPro)
            && !allWords.some(w => (lang === 'en' ? w.categoryEn : w.category) === cat && !w.isPro);
          return (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '6px 14px', borderRadius: 20,
              border: `1.5px solid ${isActive ? color : 'var(--color-border)'}`,
              background: isActive ? `${color}18` : 'var(--color-surface)',
              color: isActive ? color : 'var(--color-muted)',
              fontSize: '0.78rem', fontWeight: 700,
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'all 0.15s',
              fontFamily: 'var(--font-display)',
              opacity: catIsPro ? 0.6 : 1,
            }}>
              {catIsPro && '⭐ '}{cat === 'all' ? (lang === 'en' ? '🌍 All' : '🌍 Tümü') : cat}
              {cat !== 'all' && (
                <span style={{ marginLeft: 5, fontSize: '0.7rem', opacity: 0.7 }}>
                  ({allWords.filter(w => (lang === 'en' ? w.categoryEn : w.category) === cat).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Free words ── */}
      {filteredFree.length > 0 && (
        <>
          <div style={{ marginBottom: 12, fontSize: '0.8rem', color: 'var(--color-muted)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#003da5', display: 'inline-block' }} />
            {lang === 'en' ? `Free — ${filteredFree.length} words` : `Ücretsiz — ${filteredFree.length} kelime`}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12, marginBottom: 32,
          }}>
            {filteredFree.map(word => <WordCard key={word.serbian} word={word} locked={false} />)}
          </div>
        </>
      )}

      {/* ── Pro words ── */}
      {filteredPro.length > 0 && (
        <>
          <div style={{
            marginBottom: 12, fontSize: '0.8rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg,#f5c518,#ff8c00)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            ⭐ {lang === 'en' ? `Pro — ${filteredPro.length} words` : `Pro — ${filteredPro.length} kelime`}
            {!isPro && (
              <span
                onClick={() => router.push('/pro')}
                style={{
                  fontSize: '0.7rem', fontWeight: 700,
                  padding: '2px 8px', borderRadius: 6,
                  background: 'linear-gradient(135deg,#f5c518,#ff8c00)',
                  color: '#000', cursor: 'pointer',
                  WebkitTextFillColor: '#000',
                }}
              >
                {lang === 'en' ? 'Upgrade →' : 'Pro\'ya Geç →'}
              </span>
            )}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 12, marginBottom: 40,
          }}>
            {filteredPro.map(word => (
              <WordCard key={word.serbian} word={word} locked={!isPro} />
            ))}
          </div>
        </>
      )}

      {filteredFree.length === 0 && filteredPro.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--color-muted)' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 700 }}>
            {lang === 'en' ? 'No words found' : 'Kelime bulunamadı'}
          </div>
        </div>
      )}

      {/* Pro upsell banner — shown only for free users */}
      {!isPro && (
        <div
          onClick={() => router.push('/pro')}
          style={{
            marginBottom: 40, padding: '20px 24px',
            background: 'linear-gradient(135deg, rgba(245,197,24,0.08), rgba(255,140,0,0.08))',
            border: '1.5px solid rgba(241,196,15,0.3)',
            borderRadius: 16, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 16,
            transition: 'all 0.2s',
          }}
        >
          <span style={{ fontSize: '2rem' }}>⭐</span>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem',
              background: 'linear-gradient(135deg,#f5c518,#ff8c00)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              marginBottom: 4,
            }}>
              {lang === 'en' ? `Unlock ${proWords.length} more words with Pro` : `Pro ile ${proWords.length} kelimeye daha eriş`}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
              {lang === 'en'
                ? 'Street slang, emotions, daily life vocabulary + pronunciation'
                : 'Sokak ağzı, duygular, günlük yaşam kelimeleri + telaffuz'}
            </div>
          </div>
          <span style={{ fontSize: '1.2rem', color: 'var(--color-muted)' }}>›</span>
        </div>
      )}

      <style>{`
        @keyframes vocab-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}

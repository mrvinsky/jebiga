'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, UI_TEXT } from '@/hooks/useLanguage';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export default function KafanaBot() {
  const lang = useLanguage();
  const t = UI_TEXT[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      parts: [{ text: t.botGreeting }]
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Update greeting when language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].role === 'model') {
        return [{ role: 'model', parts: [{ text: t.botGreeting }] }];
      }
      return prev;
    });
  }, [t.botGreeting]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg: Message = { role: 'user', parts: [{ text: input }] };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          history: messages.slice(1) // Skip the first model greeting, history must start with user
        }),
      });

      const data = await res.json();
      if (data.error) {
        setMessages([...newMessages, { role: 'model', parts: [{ text: `⚠️ ${data.error}` }] }]);
      } else {
        setMessages([...newMessages, { role: 'model', parts: [{ text: data.reply }] }]);
      }
    } catch (err) {
      setMessages([...newMessages, { role: 'model', parts: [{ text: t.botError }] }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '0',
              width: '320px',
              height: '420px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--color-surface)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ background: 'rgba(192, 57, 43, 0.05)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>🧔🏻‍♂️</span>
                <div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--color-foreground)' }}>{t.botTitle}</h3>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--color-red)' }}>{t.botSubtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--color-muted)', cursor: 'pointer', fontSize: '1.2rem' }}
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    background: m.role === 'user' ? 'var(--color-surface-2)' : 'rgba(192, 57, 43, 0.08)',
                    border: m.role === 'user' ? '1px solid var(--color-border)' : '1px solid rgba(192, 57, 43, 0.2)',
                    color: 'var(--color-foreground)',
                    borderBottomRightRadius: m.role === 'user' ? '4px' : '14px',
                    borderBottomLeftRadius: m.role === 'model' ? '4px' : '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  }}>
                    {m.parts[0].text}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ padding: '8px 12px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.8rem', color: '#888' }}>
                    {t.botThinking}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '8px', background: 'var(--color-surface)' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t.botPlaceholder}
                style={{
                  flex: 1, padding: '10px 12px', borderRadius: '10px',
                  background: 'var(--color-surface-2)', border: '1px solid var(--color-border)',
                  color: 'var(--color-foreground)', fontSize: '0.85rem', outline: 'none'
                }}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{
                  background: '#ff1744', color: '#000', border: 'none',
                  borderRadius: '10px', padding: '0 14px', fontWeight: 700,
                  cursor: (loading || !input.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (loading || !input.trim()) ? 0.5 : 1
                }}
              >
                {t.botSend}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'var(--color-surface)', border: '2px solid var(--color-red)',
          boxShadow: '0 8px 24px rgba(192, 57, 43, 0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: '2rem', padding: 0
        }}
      >
        <motion.div
           animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
           transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
        >
          🧔🏻‍♂️
        </motion.div>
      </motion.button>
    </div>
  );
}

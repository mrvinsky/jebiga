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
              background: '#111',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
              border: '1px solid rgba(255, 23, 68, 0.3)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ background: 'rgba(255, 23, 68, 0.1)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem', textShadow: '0 0 10px rgba(255, 23, 68, 0.8)' }}>🧔🏻‍♂️</span>
                <div>
                  <h3 style={{ margin: 0, fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 800 }}>{t.botTitle}</h3>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: '#ff1744' }}>{t.botSubtitle}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1.2rem' }}
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
                    background: m.role === 'user' ? '#111' : 'rgba(255, 23, 68, 0.15)',
                    border: m.role === 'user' ? '1px solid #333' : '1px solid rgba(255, 23, 68, 0.3)',
                    color: m.role === 'user' ? '#eee' : '#fff',
                    borderBottomRightRadius: m.role === 'user' ? '4px' : '14px',
                    borderBottomLeftRadius: m.role === 'model' ? '4px' : '14px',
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
            <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '8px', background: '#0d0d0d' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t.botPlaceholder}
                style={{
                  flex: 1, padding: '10px 12px', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff', fontSize: '0.85rem', outline: 'none'
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
          background: '#0a0a0a', border: '2px solid #ff1744',
          boxShadow: '0 0 20px rgba(255, 23, 68, 0.4)',
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

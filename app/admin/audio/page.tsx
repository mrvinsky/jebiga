'use client';

import { useEffect, useState, useRef } from 'react';
import { curriculum, Question } from '@/data/curriculum';
import { uploadAudioForQuestion, getAllAudioUrls } from '@/lib/audioManager';

export default function AdminAudio() {
  const [audioUrls, setAudioUrls] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [filter, setFilter] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUrls = async () => {
      const urls = await getAllAudioUrls();
      setAudioUrls(urls);
      setLoading(false);
    };
    fetchUrls();
  }, []);

  const allQuestions = curriculum.flatMap(set => 
    set.lessons.flatMap(lesson => 
      lesson.questions.map(q => ({
        ...q,
        lessonTitle: lesson.title,
        setId: set.id
      }))
    )
  );

  const filteredQuestions = allQuestions.filter(q => 
    q.id.toLowerCase().includes(filter.toLowerCase()) || 
    q.prompt.toLowerCase().includes(filter.toLowerCase()) ||
    q.answer.toLowerCase().includes(filter.toLowerCase())
  );

  const handleUploadClick = (qId: string) => {
    setActiveQuestionId(qId);
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeQuestionId) return;

    setUploadingId(activeQuestionId);
    setProgress(0);

    try {
      const url = await uploadAudioForQuestion(activeQuestionId, file, (p) => setProgress(p));
      setAudioUrls(prev => ({ ...prev, [activeQuestionId]: url }));
    } catch (err) {
      alert("Yükleme başarısız oldu.");
    } finally {
      setUploadingId(null);
      setActiveQuestionId(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const playAudio = (url: string) => {
    new Audio(url).play();
  };

  if (loading) return <div>Loading audio files...</div>;

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 16, fontFamily: 'var(--font-display)', fontWeight: 900 }}>Audio Management</h1>
      <p style={{ color: '#888', marginBottom: 32 }}>Upload MP3 pronunciation files for each question.</p>
      
      <input 
        type="file" 
        accept="audio/*" 
        ref={fileInputRef} 
        style={{ display: 'none' }} 
        onChange={handleFileChange} 
      />

      <input 
        type="text" 
        placeholder="Search questions by ID, prompt or answer..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ width: '100%', padding: '16px', borderRadius: '8px', background: '#111', border: '1px solid #333', color: '#fff', marginBottom: 24, fontSize: '1rem' }}
      />

      <div style={{ background: '#111', borderRadius: 16, border: '1px solid #333', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#222', borderBottom: '1px solid #333' }}>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Lesson</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Prompt & Answer</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Audio Status</th>
              <th style={{ padding: '16px 24px', color: '#888', fontWeight: 600 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((q) => {
              const hasAudio = !!audioUrls[q.id];
              const isUploading = uploadingId === q.id;

              return (
                <tr key={q.id} style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '16px 24px', fontWeight: 700, color: '#aaa' }}>{q.id}</td>
                  <td style={{ padding: '16px 24px', color: '#888', fontSize: '0.9rem' }}>{q.lessonTitle}</td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>{q.prompt}</div>
                    <div style={{ color: 'var(--color-neon)', fontSize: '0.9rem' }}>{q.answer}</div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    {hasAudio ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--color-neon)', fontSize: '1.2rem' }}>✅</span>
                        <button onClick={() => playAudio(audioUrls[q.id])} style={{ background: 'none', border: 'none', color: '#3498db', cursor: 'pointer', textDecoration: 'underline' }}>
                          Play
                        </button>
                      </div>
                    ) : (
                      <span style={{ color: '#ff4757', fontWeight: 600 }}>Missing</span>
                    )}
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    {isUploading ? (
                      <div style={{ color: '#f1c40f', fontWeight: 600 }}>{Math.round(progress)}%</div>
                    ) : (
                      <button 
                        onClick={() => handleUploadClick(q.id)}
                        style={{ background: '#333', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                      >
                        {hasAudio ? 'Replace' : 'Upload'}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

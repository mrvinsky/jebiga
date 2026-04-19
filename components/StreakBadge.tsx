'use client';

interface StreakBadgeProps {
  streak: number;
  className?: string;
}

export default function StreakBadge({ streak, className = '' }: StreakBadgeProps) {
  return (
    <div className={`streak-badge ${className}`}>
      <span className="animate-fire" style={{ display: 'inline-block' }}>🔥</span>
      <span className="animate-streak-glow" style={{ color: '#ff6b00' }}>{streak}</span>
    </div>
  );
}

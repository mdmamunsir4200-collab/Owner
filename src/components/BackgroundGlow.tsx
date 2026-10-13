import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base tech grid pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />

      {/* Primary soft radial glow - Top right (Cyan / Blue) */}
      <div 
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #35D6E8 0%, #4F8CFF 60%, transparent 80%)'
        }}
      />

      {/* Secondary soft radial glow - Middle left (Violet / Blue) */}
      <div 
        className="absolute top-[35%] -left-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B5CF6 0%, #4F8CFF 50%, transparent 80%)'
        }}
      />

      {/* Tertiary soft radial glow - Bottom right (Cyan / Deep Navy) */}
      <div 
        className="absolute -bottom-[10%] right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #4F8CFF 0%, #35D6E8 40%, transparent 75%)'
        }}
      />

      {/* Extremely subtle floating ambient node dots */}
      <div className="absolute top-[18%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#35D6E8]/40 blur-[0.5px] animate-pulse" />
      <div className="absolute top-[42%] right-[28%] w-2 h-2 rounded-full bg-[#4F8CFF]/30 blur-[0.5px] animate-pulse" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[68%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/35 blur-[0.5px] animate-pulse" style={{ animationDelay: '2.4s' }} />
      <div className="absolute top-[82%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#35D6E8]/30 blur-[0.5px] animate-pulse" style={{ animationDelay: '1.8s' }} />
    </div>
  );
};

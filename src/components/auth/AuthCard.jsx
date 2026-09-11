import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function AuthCard() {
  const [isRegister, setIsRegister] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const handleFlip = () => {
    if (isAnimating) return; // Prevent spamming
    
    if (prefersReducedMotion) {
      setIsRegister(!isRegister);
      return;
    }

    setIsAnimating(true);
    setIsRegister(!isRegister);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className={`relative w-full perspective-1200 ${isAnimating ? 'is-tossing' : ''}`}>
      <div 
        className={`w-full h-full relative preserve-3d shadow-xl bg-white rounded-3xl
          ${isAnimating && isRegister ? 'animate-toss-to-back animate-shadow-toss' : ''}
          ${isAnimating && !isRegister ? 'animate-toss-to-front animate-shadow-toss' : ''}
          ${!isAnimating && isRegister ? 'rotate-y-180' : ''}
        `}
      >
        <div className="coin-edge"></div>

        {/* FRONT: Login Side */}
        <div className="w-full h-full backface-hidden bg-white rounded-3xl p-8 border border-border/40 relative z-20">
          <LoginForm onFlip={handleFlip} isVisible={!isRegister || isAnimating} />
        </div>

        {/* BACK: Register Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl p-8 border border-border/40 rotate-y-180 z-20">
          <RegisterForm onFlip={handleFlip} isVisible={isRegister || isAnimating} />
        </div>
      </div>
    </div>
  );
}

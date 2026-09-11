import React from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../components/auth/AuthCard';

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center font-arabic overflow-hidden bg-background">
      {/* Background with decorative academic elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background to-[#EFEAE0]">
        
        {/* Subtle decorative elements */}
        <div className="absolute top-[15%] left-[10%] text-[8rem] font-serif font-bold text-primary/5 select-none pointer-events-none transform -rotate-12">
          A
        </div>
        <div className="absolute bottom-[20%] right-[15%] text-[6rem] font-serif font-bold text-accent/5 select-none pointer-events-none transform rotate-12">
          "
        </div>
        <div className="absolute top-[40%] right-[10%] text-2xl font-serif text-primary/5 select-none pointer-events-none">
          Grammar
        </div>
        <div className="absolute bottom-[30%] left-[20%] text-3xl font-serif text-primary/5 select-none pointer-events-none">
          Unit 03
        </div>
        <div className="absolute top-[20%] right-[30%] text-8xl font-serif text-primary/5 select-none pointer-events-none">
          (
        </div>
        
        {/* Notebook lines effect (subtle) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 95%, var(--color-primary) 100%)', backgroundSize: '100% 40px' }}></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[450px] px-4 md:px-0 py-12 flex flex-col items-center">
        {/* Small Logo outside card */}
        <Link to="/" className="mb-8 font-heading font-bold text-2xl text-primary flex items-baseline hover:scale-105 transition-transform">
          Stander<span className="text-accent text-3xl leading-none">.</span>
        </Link>
        
        <AuthCard />
      </div>
    </div>
  );
}

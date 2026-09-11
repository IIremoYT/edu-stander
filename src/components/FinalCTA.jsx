import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Reveal from './Reveal';
import AcademicParticles from './AcademicParticles';

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-24 md:py-32 bg-hero-bg overflow-hidden flex items-center justify-center">
      <AcademicParticles count={12} className="opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            ابدأ رحلتك في الإنجليزي دلوقتي
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-hero-muted font-serif italic text-xl md:text-2xl mb-10" dir="ltr">
            Start your English journey today.
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <a 
            href="#courses" 
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            اكتشف الكورسات
            <ArrowLeft size={20} strokeWidth={2.5} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

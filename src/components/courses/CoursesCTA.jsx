import React from 'react';
import { HelpCircle, ArrowLeft, BookOpen } from 'lucide-react';
import Reveal from '../Reveal';
import AcademicParticles from '../AcademicParticles';

export default function CoursesCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-hero-bg to-hero-bg-end overflow-hidden">
      <AcademicParticles count={10} className="opacity-30" />
      
      {/* Subtle decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-[20%] w-48 h-48 rounded-full bg-accent/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <HelpCircle size={28} className="text-accent" strokeWidth={1.5} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-3">
            مش عارف تبدأ منين؟
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-hero-muted text-base md:text-lg mb-10 max-w-md">
            نساعدك تختار الكورس المناسب ليك.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              ساعدني أختار
              <ArrowLeft size={18} />
            </a>
            <a
              href="#courses-discovery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-medium text-hero-text hover:bg-white/5 transition-colors border border-white/10"
            >
              <BookOpen size={18} />
              تصفح الكورسات
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

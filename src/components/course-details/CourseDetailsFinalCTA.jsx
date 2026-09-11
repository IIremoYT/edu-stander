import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AcademicParticles from '../AcademicParticles';

export default function CourseDetailsFinalCTA({ onPurchaseClick }) {
  return (
    <section className="relative py-16 md:py-24 bg-hero-bg overflow-hidden flex items-center justify-center mt-12">
      <AcademicParticles count={10} className="opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
          جاهز تبدأ الكورس؟
        </h2>
        
        <p className="text-hero-muted text-lg md:text-xl mb-8 max-w-xl">
          ابدأ دلوقتي وخلي مذاكرتك للإنجليزي أكثر تنظيمًا.
        </p>

        <div className="text-white font-heading font-bold text-4xl mb-8">
          600 <span className="text-2xl font-arabic">ج.م</span>
        </div>
        
        <button 
          onClick={onPurchaseClick}
          className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          اشتري الكورس
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}

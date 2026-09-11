import React, { useEffect, useRef } from 'react';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { motion, animate } from 'framer-motion';
import AcademicParticles from './AcademicParticles';

export default function Hero() {
  const numbersRef = useRef([]);

  // Store number elements
  const addToRefs = (el) => {
    if (el && !numbersRef.current.includes(el)) {
      numbersRef.current.push(el);
    }
  };

  const toArabicNumerals = (num) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return String(num).replace(/[0-9]/g, (d) => arabicDigits[parseInt(d)]);
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      numbersRef.current.forEach(el => {
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals) || 0;
        const prefix = target >= 1000 ? '+' : '';
        const formatted = decimals > 0 ? target.toFixed(decimals) : Math.round(target).toString();
        el.textContent = toArabicNumerals(prefix + formatted);
      });
      return;
    }

    // Number count up animation
    numbersRef.current.forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals) || 0;
      const prefix = target >= 1000 ? '+' : '';
      
      animate(0, target, {
        duration: 1.8,
        ease: 'easeOut',
        delay: 0.8,
        onUpdate: (latest) => {
          const current = decimals > 0 
            ? latest.toFixed(decimals) 
            : Math.round(latest).toString();
          if (el) el.textContent = toArabicNumerals(prefix + current);
        }
      });
    });

  }, []);

  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-br from-hero-bg to-hero-bg-end pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      <AcademicParticles count={25} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-start flex flex-col items-center lg:items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 bg-white/10 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
            >
              <GraduationCap size={16} className="text-accent" />
              <span>المرحلة الثانوية — إنجليزي</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-hero-text leading-[1.15] mb-4 text-balance"
            >
              منهجك في الإنجليزي <br className="hidden md:block" />
              <span className="text-accent relative inline-block">
                بشكل أوضح وأسهل
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5.5C45.3333 2.5 138.8 -1.7 198 6.5" stroke="#C8872B" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
              dir="ltr"
              className="text-lg md:text-xl text-hero-muted font-serif italic mb-10"
            >
              Your English Curriculum, Simplified.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="#courses" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2"
              >
                اكتشف الكورسات
                <ArrowLeft size={18} />
              </a>
              <a 
                href="#how-works" 
                className="w-full sm:w-auto px-8 py-3.5 rounded-md font-medium text-hero-text hover:bg-white/5 transition-colors text-center"
              >
                إزاي بنتعلم؟
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="relative w-[300px] h-[380px] sm:w-[400px] sm:h-[500px]"
            >
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <img 
                  src="/assets/teacher-hero.jpg" 
                  alt="مستر عبدالمعبود — مدرس اللغة الإنجليزية" 
                  className="w-full h-full object-cover object-center opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                />
                
                {/* Academic overlay hints */}
                <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between" aria-hidden="true">
                  <div className="w-16 h-[1px] bg-accent/50"></div>
                  <div className="self-end w-24 h-[1px] bg-accent/30"></div>
                  <div className="w-12 h-[1px] bg-white/20"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Bar */}
        <div 
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start"
          >
            <span 
              ref={addToRefs} 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-1" 
              data-count="5000"
            >
              ٠
            </span>
            <span className="text-sm text-hero-muted font-medium">طالب مسجّل</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start"
          >
            <span 
              ref={addToRefs} 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-1" 
              data-count="120"
            >
              ٠
            </span>
            <span className="text-sm text-hero-muted font-medium">درس متاح</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start"
          >
            <span 
              ref={addToRefs} 
              className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1 flex items-center gap-1" 
              data-count="4.9" 
              data-decimals="1"
            >
              ٠ 
              <span className="text-xl">★</span>
            </span>
            <span className="text-sm text-hero-muted font-medium">تقييم الطلبة</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start"
          >
            <span 
              ref={addToRefs} 
              className="text-3xl md:text-4xl font-heading font-bold text-white mb-1" 
              data-count="10"
            >
              ٠
            </span>
            <span className="text-sm text-hero-muted font-medium">سنوات خبرة</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

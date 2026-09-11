import React from 'react';
import { BookOpen, LayoutList, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import AcademicParticles from '../AcademicParticles';

const benefits = [
  { icon: <BookOpen size={16} />, text: 'محتوى منهجي' },
  { icon: <LayoutList size={16} />, text: 'شرح مبسط ومنظم' },
  { icon: <HeadphonesIcon size={16} />, text: 'متابعة مستمرة' },
];

export default function CoursesHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section
      className="relative bg-gradient-to-br from-hero-bg to-hero-bg-end pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden"
    >
      <AcademicParticles count={12} className="opacity-40" />

      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full bg-accent/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[15%] w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center lg:text-start lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-hero-text leading-[1.2] mb-4"
          >
            كل كورساتك في{' '}
            <span className="text-accent relative inline-block">
              مكان واحد
              <svg className="absolute -bottom-1.5 right-0 w-full" viewBox="0 0 200 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C45.3333 1.5 138.8 -0.7 198 4.5" stroke="#C8872B" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            className="text-base md:text-lg text-hero-muted leading-relaxed mb-8 max-w-xl lg:max-w-none"
          >
            اختار الكورس المناسب ليك وابدأ رحلتك في الإنجليزي بخطة واضحة.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            {benefits.map((benefit, idx) => (
              <motion.span
                key={idx}
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-white/8 text-hero-muted px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-accent/30 hover:text-accent-light transition-colors duration-300"
              >
                <span className="text-accent">{benefit.icon}</span>
                {benefit.text}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

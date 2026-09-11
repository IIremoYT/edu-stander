import React from 'react';
import { UserPlus, Play, PenLine, BookOpenCheck, FileCheck2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const steps = [
  { num: '١', icon: <UserPlus className="w-6 h-6" />, title: 'اشترك في الكورس', subtitle: 'Subscribe' },
  { num: '٢', icon: <Play className="w-6 h-6" />, title: 'شوف الشرح', subtitle: 'Watch Lesson' },
  { num: '٣', icon: <PenLine className="w-6 h-6" />, title: 'حل الواجب', subtitle: 'Practice' },
  { num: '٤', icon: <BookOpenCheck className="w-6 h-6" />, title: 'شوف شرح الواجب', subtitle: 'Review' },
  { num: '٥', icon: <FileCheck2 className="w-6 h-6" />, title: 'امتحن نفسك', subtitle: 'Test Yourself' }
];

export default function HowItWorks() {
  return (
    <section id="how-works" className="py-20 md:py-28 bg-hero-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <SectionHeading 
            title={<span className="text-white">إزاي بنتعلم؟</span>} 
            subtitle={<span className="text-hero-muted">Your Learning Journey</span>} 
            centered={true}
          />
        </div>

        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/10" aria-hidden="true">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 right-0 h-full bg-accent w-full origin-right"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.15} className="flex flex-col items-center text-center relative group">
                
                {/* Mobile Connector Line (Vertical) */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 bottom-[-40px] left-1/2 w-[2px] -translate-x-1/2 bg-white/10" aria-hidden="true"></div>
                )}

                <div className="w-8 h-8 rounded-full bg-accent text-hero-bg font-heading font-bold flex items-center justify-center mb-4 z-10 shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-accent/20 group-hover:text-accent group-hover:border-accent/30 transition-all duration-300 z-10 backdrop-blur-sm">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-hero-muted font-serif italic text-sm" dir="ltr">{step.subtitle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

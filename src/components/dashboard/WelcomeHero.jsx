import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { mockStudent, mockOverallProgress } from '../../data/mockDashboardData';

export default function WelcomeHero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-accent-light rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 shadow-sm border border-accent/20"
    >
      {/* Subtle Background Pattern (Notebook Aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-50" style={{ 
        backgroundImage: 'linear-gradient(#d4cfc5 1px, transparent 1px)',
        backgroundSize: '100% 24px',
        backgroundPositionY: '8px'
      }}></div>
      
      {/* Decorative English Watermark */}
      <div className="absolute top-4 left-6 pointer-events-none opacity-[0.03] select-none text-primary">
        <span className="font-serif text-6xl md:text-8xl italic font-bold">Stander.</span>
      </div>

      <div className="relative z-10 flex-1 w-full text-center md:text-right">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
          أهلاً يا {mockStudent.name} 👋
        </h2>
        <p className="text-lg text-primary/80 mb-1 font-medium">
          جاهز تكمل رحلتك في الإنجليزي؟
        </p>
        <p className="text-sm font-serif text-accent italic mb-6">
          "Better English. A brighter you."
        </p>
        
        <NavLink 
          to="/learning"
          className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg group"
        >
          <span>كمل التعلم</span>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </NavLink>
      </div>

      {/* Progress Visualization */}
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white max-w-[240px] w-full text-center shrink-0">
        <span className="text-sm font-bold text-muted-foreground mb-4 block">إجمالي التقدم</span>
        
        {/* Circular Progress (Simplified SVG) */}
        <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-border" />
            <motion.circle 
              cx="50" cy="50" r="40" 
              stroke="currentColor" 
              strokeWidth="8" 
              fill="transparent" 
              className="text-accent"
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * mockOverallProgress.percentage) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-primary font-heading">{mockOverallProgress.percentage}%</span>
          </div>
        </div>
        
        <p className="text-xs text-primary font-medium leading-relaxed">
          {mockOverallProgress.message}
        </p>
      </div>
    </motion.section>
  );
}

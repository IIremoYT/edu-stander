import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function MotivationalCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-primary text-white rounded-3xl p-8 md:p-12 text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-lg mt-8"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-primary to-primary"></div>
      
      <div className="relative z-10 flex-1">
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3">
          مستواك بيتحسن خطوة بخطوة
        </h3>
        <p className="text-white/80 font-medium text-lg md:text-xl">
          الالتزام النهارده بيصنع فرق كبير بكرة.
        </p>
      </div>

      <div className="relative z-10 shrink-0 w-full md:w-auto">
        <NavLink 
          to="/learning"
          className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg group text-lg"
        >
          <span>كمل رحلتك الآن</span>
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </NavLink>
      </div>
    </motion.section>
  );
}

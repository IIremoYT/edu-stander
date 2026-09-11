import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background font-arabic text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[15%] left-[10%] text-[10rem] font-heading font-bold text-primary/[0.03] select-none pointer-events-none transform -rotate-12">
          404
        </div>
        <div className="absolute bottom-[20%] right-[15%] text-[6rem] font-serif font-bold text-accent/[0.05] select-none pointer-events-none transform rotate-12">
          ?
        </div>
        {/* Notebook lines effect */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(transparent 95%, var(--color-primary) 100%)',
            backgroundSize: '100% 40px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="relative mb-6">
            <span className="text-[8rem] md:text-[10rem] font-heading font-bold text-primary/10 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                <BookOpen className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">
            الصفحة مش موجودة
          </h1>

          {/* English subtitle */}
          <p className="text-muted-foreground font-serif italic mb-2" dir="ltr">
            Page Not Found
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            الصفحة اللي بتدور عليها مش موجودة أو تم نقلها.
            <br />
            ممكن ترجع للصفحة الرئيسية أو تتصفح الكورسات.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-md w-full sm:w-auto justify-center"
            >
              <Home size={18} />
              الصفحة الرئيسية
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-medium text-primary border border-border hover:bg-muted transition-colors w-full sm:w-auto justify-center"
            >
              تصفح الكورسات
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

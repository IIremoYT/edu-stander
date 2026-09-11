import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Play } from 'lucide-react';
import { mockContinueLearning } from '../../data/mockDashboardData';

export default function ContinueLearning() {
  const data = mockContinueLearning;
  
  if (!data) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-border shadow-sm flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold mb-2">لسه مفيش كورسات عندك</h3>
        <NavLink to="/courses" className="text-accent font-bold hover:underline">اكتشف الكورسات</NavLink>
      </div>
    );
  }

  return (
    <section>
      <div className="mb-4">
        <h3 className="text-2xl font-heading font-bold text-primary">تابع التعلم</h3>
        <p className="text-sm text-muted-foreground">كمل من حيث ما وقفت</p>
      </div>

      <motion.div 
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border flex flex-col md:flex-row group"
      >
        {/* Thumbnail Image */}
        <div className="relative w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
          <img 
            src={data.thumbnail} 
            alt={data.courseName} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-lg">
              <Play className="w-5 h-5 ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-3">
              الدرس الحالي
            </span>
            <h4 className="text-xl font-bold text-primary mb-1">{data.lastLesson}</h4>
            <p className="text-sm text-muted-foreground font-serif">{data.courseName}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-primary">نسبة الإنجاز</span>
              <span className="text-sm font-bold text-accent">{data.progress}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${data.progress}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          <NavLink 
            to="/learning"
            className="mt-auto flex items-center justify-between w-full md:w-auto bg-primary hover:bg-secondary text-white px-6 py-3 rounded-xl font-bold transition-colors group/btn"
          >
            <span>كمل من حيث توقفت</span>
            <ArrowLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
          </NavLink>
        </div>
      </motion.div>
    </section>
  );
}

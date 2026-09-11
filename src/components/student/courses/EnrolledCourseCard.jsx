import React from 'react';
import { PlayCircle, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EnrolledCourseCard({ course, index }) {
  const isCompleted = course.status === 'مكتمل';
  const isExpired = course.status === 'منتهي';

  const statusColors = {
    'قيد التعلم': 'bg-blue-100 text-blue-800 border-blue-200',
    'مكتمل': 'bg-green-100 text-green-800 border-green-200',
    'ينتهي قريبًا': 'bg-orange-100 text-orange-800 border-orange-200',
    'منتهي': 'bg-gray-100 text-gray-800 border-gray-200'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group bg-white rounded-3xl overflow-hidden border ${isExpired ? 'border-border/50 opacity-75 grayscale-[50%]' : 'border-border'} hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-bold border shadow-sm backdrop-blur-md ${statusColors[course.status]}`}>
            {course.status}
          </span>
        </div>
        
        {/* Progress Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
          <div>
            <p className="text-white/80 text-xs font-medium mb-1">{course.completedLessons} من {course.totalLessons} درس</p>
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-xl">{course.progressPercent}%</div>
              <span className="text-white/90 text-sm">مكتمل</span>
            </div>
          </div>
          {isCompleted && <CheckCircle2 className="text-green-400 w-8 h-8" />}
        </div>
      </div>

      {/* Progress Bar (Attached to bottom of image) */}
      <div className="h-1.5 w-full bg-gray-100">
        <div 
          className={`h-full ${isCompleted ? 'bg-green-500' : 'bg-accent'} transition-all duration-1000 ease-out`}
          style={{ width: `${course.progressPercent}%` }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-heading font-bold text-primary mb-2 line-clamp-1">{course.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
          {course.shortDescription}
        </p>

        {/* Current Lesson Info */}
        {!isCompleted && !isExpired && course.currentLesson && (
          <div className="bg-background rounded-xl p-3 mb-6 border border-border">
            <p className="text-xs text-muted-foreground font-medium mb-1">آخر درس توقفت عنده:</p>
            <div className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-accent" />
              <p className="text-sm font-bold text-primary truncate" dir="ltr">{course.currentLesson.title}</p>
            </div>
          </div>
        )}

        {/* Expiration warning */}
        {course.expiresIn && (
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.expiresIn}</span>
          </div>
        )}

        {/* Action Button */}
        {isExpired ? (
          <button disabled className="w-full py-3 rounded-xl bg-gray-100 text-gray-500 font-bold text-sm cursor-not-allowed">
            انتهت صلاحية الكورس
          </button>
        ) : (
          <Link 
            to="/learning" 
            className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
              isCompleted 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-accent text-white hover:bg-accent-hover'
            }`}
          >
            {isCompleted ? 'مراجعة الكورس' : 'كمل التعلم'}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </motion.div>
  );
}

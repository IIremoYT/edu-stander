import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, FileText, Star, Heart, ArrowLeft } from 'lucide-react';

export default function CourseCard({ course }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const {
    grade,
    title,
    description,
    units,
    lessons,
    exams,
    rating,
    ratingCount,
    price,
    badge,
    headerAccent,
  } = course;

  const badgeColors = {
    'الأكثر طلبًا': 'bg-accent text-white',
    'جديد': 'bg-emerald-500 text-white',
    'مراجعة نهائية': 'bg-primary text-white',
  };

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 hover:border-accent/40 flex flex-col">
      {/* Header Visual */}
      <div className={`relative h-32 bg-gradient-to-br ${headerAccent} p-5 overflow-hidden`}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_50%)]"></div>
        
        {/* Faint English text overlay */}
        <div className="absolute -bottom-3 -left-3 text-white/[0.04] font-serif font-bold text-7xl pointer-events-none select-none" dir="ltr" aria-hidden="true">
          ENG
        </div>
        <div className="absolute top-3 left-4 text-white/[0.06] font-serif italic text-xs pointer-events-none select-none" dir="ltr" aria-hidden="true">
          Grammar • Vocabulary • Reading
        </div>

        {/* Notebook lines decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-2 left-4 right-4 h-px bg-white/[0.06]"></div>
          <div className="absolute bottom-5 left-4 right-4 h-px bg-white/[0.04]"></div>
        </div>

        {/* Grade badge */}
        <div className="relative z-10 flex items-start justify-between">
          <span className="bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {grade}
          </span>

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorited(!isFavorited);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
              isFavorited 
                ? 'bg-red-500/20 text-red-400' 
                : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
            }`}
            aria-label={isFavorited ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
          >
            <Heart size={14} fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Status badge */}
        {badge && (
          <div className="absolute bottom-3 right-5 z-10">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm ${badgeColors[badge] || 'bg-accent text-white'}`}>
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-heading font-bold text-primary mb-2 leading-snug line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
          {units && (
            <div className="flex items-center gap-1.5 text-primary font-medium">
              <BookOpen size={14} className="text-accent" />
              <span>{units} وحدات</span>
            </div>
          )}
          {lessons && (
            <div className="flex items-center gap-1.5 text-primary font-medium">
              <PlayCircle size={14} className="text-accent" />
              <span>{lessons} درس</span>
            </div>
          )}
          {exams && (
            <div className="flex items-center gap-1.5 text-primary font-medium">
              <FileText size={14} className="text-accent" />
              <span>{exams} امتحان</span>
            </div>
          )}
        </div>

        {/* Rating + Price row */}
        <div className="flex items-center justify-between mb-4 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-sm font-bold text-primary">{rating}</span>
            <span className="text-xs text-muted-foreground">({ratingCount})</span>
          </div>
          <div className="text-left">
            <span className="text-xl font-heading font-bold text-primary">{price}</span>
            <span className="text-xs text-muted-foreground mr-1">ج.م</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          to="/course-details"
          className="block w-full text-center bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-accent transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
        >
          عرض التفاصيل
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover/btn:-translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

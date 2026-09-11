import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

export default function EmptyCoursesState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {/* Illustrated icon */}
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <SearchX size={40} className="text-muted-foreground" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-heading font-bold text-primary mb-2">
        مش لاقيين كورسات بالشكل ده
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
        جرّب تغيّر الفلاتر أو البحث عشان تلاقي الكورس المناسب ليك.
      </p>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-sm"
      >
        <RotateCcw size={16} />
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
}

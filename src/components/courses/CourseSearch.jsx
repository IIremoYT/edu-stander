import React from 'react';
import { Search } from 'lucide-react';

export default function CourseSearch({ value, onChange }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
        />
        <input
          type="text"
          placeholder="ابحث عن كورس..."
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full bg-card border border-border rounded-xl py-3 px-4 pr-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 font-arabic text-sm"
          id="course-search"
        />
      </div>
      <p className="text-xs text-muted-foreground mt-1.5 pr-1">
        مثال: الصف الثالث الثانوي، Grammar...
      </p>
    </div>
  );
}

import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const sortOptions = [
  { value: 'popular', label: 'الأكثر شيوعًا' },
  { value: 'price-low', label: 'السعر: من الأقل للأعلى' },
  { value: 'price-high', label: 'السعر: من الأعلى للأقل' },
  { value: 'rating', label: 'الأعلى تقييمًا' },
  { value: 'newest', label: 'الأحدث' },
];

export default function CourseSort({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="course-sort" className="text-sm text-muted-foreground whitespace-nowrap font-medium flex items-center gap-1.5">
        <ArrowUpDown size={14} className="text-accent" />
        ترتيب حسب
      </label>
      <select
        id="course-sort"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-card border border-border rounded-lg py-2 px-3 text-sm text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 cursor-pointer appearance-none font-arabic min-w-[160px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'left 0.5rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.25rem 1.25rem',
          paddingLeft: '2rem',
        }}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

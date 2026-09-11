import React from 'react';
import { Check } from 'lucide-react';

export default function WhoIsThisFor() {
  const points = [
    'طالب في الصف الثالث الثانوي تبحث عن التفوق.',
    'عايز تذاكر المنهج بشكل منظم ومبسط من الصفر.',
    'محتاج نظام متكامل: شرح + واجب + امتحان.',
    'عايز تتابع مستواك باستمرار وتعرف نقاط ضعفك لمعالجتها.',
  ];

  return (
    <div className="mb-16 bg-primary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-heading font-bold text-white mb-8">الكورس ده مناسب ليك لو...</h2>
        <ul className="space-y-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="mt-1 bg-accent/20 text-accent p-1.5 rounded-full flex-shrink-0">
                <Check size={20} strokeWidth={3} />
              </div>
              <span className="text-xl text-white/90 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

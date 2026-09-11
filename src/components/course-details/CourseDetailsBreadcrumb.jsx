import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CourseDetailsBreadcrumb() {
  return (
    <div className="bg-white border-b border-border py-4 mt-20 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm font-medium text-muted-foreground whitespace-nowrap overflow-x-auto pb-1 scrollbar-hide">
          <Link to="/" className="hover:text-accent transition-colors">
            الرئيسية
          </Link>
          <ChevronLeft size={16} className="mx-2 flex-shrink-0" />
          <Link to="/courses" className="hover:text-accent transition-colors">
            الكورسات
          </Link>
          <ChevronLeft size={16} className="mx-2 flex-shrink-0" />
          <span className="text-primary font-bold">كورس اللغة الإنجليزية الكامل</span>
        </div>
      </div>
    </div>
  );
}

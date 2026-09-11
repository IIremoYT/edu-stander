import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function CoursesBreadcrumb() {
  return (
    <nav aria-label="مسار التنقل" className="bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              الرئيسية
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronLeft size={14} className="text-border" />
          </li>
          <li>
            <span className="text-primary font-medium">الكورسات</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}

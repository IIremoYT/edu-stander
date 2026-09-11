import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { coursesData } from '../../data/coursesData';
import CourseSearch from './CourseSearch';
import CourseSort from './CourseSort';
import CourseFilters from './CourseFilters';
import CourseGrid from './CourseGrid';

export default function CoursesDiscovery() {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <section id="courses-discovery" className="py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Controls */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-4">
            <div className="flex-grow max-w-xl">
              <CourseSearch value={searchValue} onChange={setSearchValue} />
            </div>
            
            {/* Desktop sort + count */}
            <div className="hidden lg:flex items-center gap-6 mr-auto">
              <CourseSort value={sortValue} onChange={setSortValue} />
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                تم العثور على <span className="font-bold text-primary">{coursesData.length}</span> كورسات
              </span>
            </div>
          </div>

          {/* Mobile controls row */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-lg py-2.5 px-4 text-sm font-medium text-primary hover:border-accent/50 transition-colors"
            >
              <SlidersHorizontal size={16} className="text-accent" />
              الفلاتر
            </button>
            <div className="flex-1">
              <select
                value={sortValue}
                onChange={(e) => setSortValue(e.target.value)}
                className="w-full bg-card border border-border rounded-lg py-2.5 px-4 text-sm text-primary font-medium focus:outline-none focus:border-accent transition-colors cursor-pointer appearance-none font-arabic"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'left 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.25rem 1.25rem',
                  paddingLeft: '2rem',
                }}
              >
                <option value="popular">الأكثر شيوعًا</option>
                <option value="price-low">السعر: الأقل</option>
                <option value="price-high">السعر: الأعلى</option>
                <option value="rating">الأعلى تقييمًا</option>
              </select>
            </div>
          </div>

          {/* Mobile result count */}
          <div className="lg:hidden text-sm text-muted-foreground">
            تم العثور على <span className="font-bold text-primary">{coursesData.length}</span> كورسات
          </div>
        </div>

        {/* Main content: Sidebar + Grid */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <CourseFilters isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
          
          {/* Mobile Filter Drawer */}
          <CourseFilters
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            isMobile={true}
          />

          {/* Course Grid */}
          <div className="flex-grow min-w-0">
            <CourseGrid courses={coursesData} />
          </div>
        </div>
      </div>
    </section>
  );
}

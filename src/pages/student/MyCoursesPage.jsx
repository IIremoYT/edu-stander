import React, { useState } from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { Search, BookOpen } from 'lucide-react';
import EnrolledCourseCard from '../../components/student/courses/EnrolledCourseCard';
import { motion } from 'framer-motion';

export default function MyCoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filters = ['الكل', 'قيد التعلم', 'مكتمل', 'ينتهي قريبًا'];

  const filteredCourses = mockStudentData.enrolledCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'الكل' || course.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">كورساتي</h1>
            <p className="text-muted-foreground text-lg">كل الكورسات اللي بتتعلمها في مكان واحد</p>
          </div>
          
          {/* Summary Cards */}
          <div className="flex gap-4">
            <div className="bg-white px-4 py-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
              <div className="bg-accent/10 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">كورسات نشطة</p>
                <p className="text-xl font-bold text-primary">{mockStudentData.stats.activeCourses}</p>
              </div>
            </div>
            <div className="bg-white px-4 py-3 rounded-xl border border-border shadow-sm flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">متوسط التقدم</p>
                <p className="text-xl font-bold text-primary">{mockStudentData.stats.averageProgress}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-2 md:p-3 rounded-2xl border border-border shadow-sm">
          <div className="flex overflow-x-auto w-full md:w-auto hide-scrollbar gap-2 pb-2 md:pb-0">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-transparent text-muted-foreground hover:bg-black/5 hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="ابحث في كورساتك..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredCourses.map((course, index) => (
              <EnrolledCourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-border border-dashed">
            <BookOpen className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">لا توجد كورسات مطابقة</h3>
            <p className="text-muted-foreground">جرب تغيير فلتر البحث أو ابحث بكلمة أخرى.</p>
          </div>
        )}
      </div>
    </StudentLayout>
  );
}

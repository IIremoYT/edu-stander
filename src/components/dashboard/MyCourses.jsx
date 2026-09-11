import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { mockMyCourses } from '../../data/mockDashboardData';

export default function MyCourses() {
  const courses = mockMyCourses;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-bold text-primary">كورساتي</h3>
        <NavLink to="/courses" className="text-sm font-bold text-accent hover:text-primary transition-colors flex items-center gap-1">
          عرض الكل <ArrowLeft className="w-4 h-4" />
        </NavLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <NavLink 
            key={course.id} 
            to="/course-details"
            className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={course.thumbnail} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full shadow-sm backdrop-blur-md ${
                  course.status === 'active' ? 'bg-green-100 text-green-700' :
                  course.status === 'starts_soon' ? 'bg-blue-100 text-blue-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {course.statusText}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2">
                {course.title}
              </h4>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-muted-foreground font-medium">التقدم</span>
                  <span className="text-xs font-bold text-primary">{course.progress}% مكتمل</span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary/60 rounded-full group-hover:bg-accent transition-colors"
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

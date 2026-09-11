import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PlayCircle, FileText } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const courses = [
  {
    grade: 'الصف الأول الثانوي',
    title: 'اللغة الإنجليزية — الترم الأول',
    desc: 'شرح كامل لمنهج الإنجليزي للصف الأول الثانوي الترم الأول — Grammar, Vocabulary, Reading',
    units: '٦ وحدات',
    lessons: '٣٦ درس',
    exams: '٦ امتحانات'
  },
  {
    grade: 'الصف الثاني الثانوي',
    title: 'اللغة الإنجليزية — الترم الأول',
    desc: 'شرح كامل لمنهج الإنجليزي للصف الثاني الثانوي الترم الأول — Grammar, Vocabulary, Reading',
    units: '٦ وحدات',
    lessons: '٤٢ درس',
    exams: '٦ امتحانات'
  },
  {
    grade: 'الصف الثالث الثانوي',
    title: 'اللغة الإنجليزية — الترم الأول',
    desc: 'شرح كامل لمنهج الإنجليزي للصف الثالث الثانوي الترم الأول — Grammar, Vocabulary, Reading',
    units: '٦ وحدات',
    lessons: '٤٨ درس',
    exams: '٨ امتحانات'
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="الكورسات المتاحة" 
          subtitle="Available Courses" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {courses.map((course, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-accent">
                
                {/* Header Strip */}
                <div className="h-24 bg-gradient-to-br from-primary to-secondary relative p-6 flex items-start overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_50%)]"></div>
                  <span className="bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full relative z-10 shadow-sm">
                    {course.grade}
                  </span>
                  
                  {/* Decorative faint text */}
                  <div className="absolute -bottom-4 -left-4 text-white/5 font-serif font-bold text-6xl pointer-events-none" dir="ltr" aria-hidden="true">
                    ENG
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                      <BookOpen size={16} className="text-accent" />
                      <span>{course.units}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                      <PlayCircle size={16} className="text-accent" />
                      <span>{course.lessons}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
                      <FileText size={16} className="text-accent" />
                      <span>{course.exams}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/course-details/${idx + 1}`}
                    className="block w-full text-center bg-transparent text-primary border border-border font-semibold py-2.5 rounded-md hover:bg-accent hover:text-white hover:border-accent transition-colors"
                  >
                    اشترك الآن
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, FileText, Lock, FileEdit, ClipboardList } from 'lucide-react';

const sections = [
  {
    id: 1,
    title: 'الوحدة الأولى — Grammar Foundations',
    lessonCount: 4,
    lessons: [
      { id: '1-1', title: 'الدرس الأول', type: 'video', isPreview: true },
      { id: '1-2', title: 'واجب الدرس الأول', type: 'homework', isPreview: false },
      { id: '1-3', title: 'امتحان قصير', type: 'exam', isPreview: false },
      { id: '1-4', title: 'ملخص الوحدة (PDF)', type: 'pdf', isPreview: false },
    ],
  },
  {
    id: 2,
    title: 'الوحدة الثانية — Tenses & Vocabulary',
    lessonCount: 3,
    lessons: [
      { id: '2-1', title: 'الدرس الأول', type: 'video', isPreview: false },
      { id: '2-2', title: 'واجب الدرس الأول', type: 'homework', isPreview: false },
      { id: '2-3', title: 'مذكرة الكلمات', type: 'pdf', isPreview: false },
    ],
  },
  {
    id: 3,
    title: 'الوحدة الثالثة — Reading Comprehension',
    lessonCount: 2,
    lessons: [
      { id: '3-1', title: 'كيف تحل قطعة الفهم', type: 'video', isPreview: false },
      { id: '3-2', title: 'تدريبات على القطعة', type: 'homework', isPreview: false },
    ],
  },
  {
    id: 4,
    title: 'الوحدة الرابعة — Advanced Grammar',
    lessonCount: 3,
    lessons: [],
  },
  {
    id: 5,
    title: 'الوحدة الخامسة — Writing Skills',
    lessonCount: 2,
    lessons: [],
  },
  {
    id: 6,
    title: 'الوحدة السادسة — Final Review',
    lessonCount: 5,
    lessons: [],
  },
];

export default function CourseCurriculum() {
  const [expandedSections, setExpandedSections] = useState([1]); // Expand first section by default

  const toggleSection = (id) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((secId) => secId !== id) : [...prev, id]
    );
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'video': return <PlayCircle size={16} />;
      case 'homework': return <FileEdit size={16} />;
      case 'exam': return <ClipboardList size={16} />;
      case 'pdf': return <FileText size={16} />;
      default: return <FileText size={16} />;
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-primary mb-8">محتوى الكورس</h2>
      <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
        {sections.map((section, index) => (
          <div key={section.id} className={`${index !== sections.length - 1 ? 'border-b border-border' : ''}`}>
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-6 bg-card hover:bg-muted/30 transition-colors text-right focus:outline-none"
            >
              <div className="flex items-center gap-4">
                {expandedSections.includes(section.id) ? (
                  <ChevronUp size={24} className="text-muted-foreground" />
                ) : (
                  <ChevronDown size={24} className="text-muted-foreground" />
                )}
                <h3 className="font-bold text-lg md:text-xl text-primary">{section.title}</h3>
              </div>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-4 py-1.5 rounded-full">
                {section.lessonCount} دروس
              </span>
            </button>

            {expandedSections.includes(section.id) && section.lessons.length > 0 && (
              <div className="bg-muted/10 p-4 md:p-6 border-t border-border border-dashed space-y-3">
                {section.lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    className="flex items-center justify-between p-4 md:p-5 rounded-xl bg-white border border-border/50 hover:border-accent/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lesson.isPreview ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {getIconForType(lesson.type)}
                      </div>
                      <span className={`text-base font-medium ${lesson.isPreview ? 'text-primary' : 'text-muted-foreground'}`}>
                        {lesson.title}
                      </span>
                    </div>

                    <div>
                      {lesson.isPreview ? (
                        <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-md shadow-sm flex items-center gap-1.5 cursor-pointer hover:bg-emerald-200 transition-colors">
                          <PlayCircle size={14} /> معاينة مجانية
                        </span>
                      ) : (
                        <span className="text-muted-foreground flex items-center justify-center w-8 h-8 bg-muted rounded-full">
                          <Lock size={14} />
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {expandedSections.includes(section.id) && section.lessons.length === 0 && (
              <div className="bg-muted/10 p-6 text-center text-sm text-muted-foreground border-t border-border border-dashed">
                سيتم إضافة الدروس قريبًا
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

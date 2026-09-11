import React from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { PlayCircle, FileText, CheckCircle2, Lock, ChevronDown, MonitorPlay, Pencil } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stepIcons = {
  'VIDEO': MonitorPlay,
  'HOMEWORK': Pencil,
  'EXAM': FileText,
  'FILE': FileText,
};

const statusColors = {
  'COMPLETED': 'text-green-500 bg-green-50 border-green-200',
  'IN_PROGRESS': 'text-accent bg-accent/10 border-accent/30',
  'AVAILABLE': 'text-primary bg-white border-border hover:border-primary/30',
  'LOCKED': 'text-muted-foreground bg-gray-50 border-gray-100 opacity-70',
};

function LearningStep({ step, isLast }) {
  const Icon = stepIcons[step.type] || FileText;
  const isCompleted = step.status === 'COMPLETED';
  const isLocked = step.status === 'LOCKED';
  const isActive = step.status === 'IN_PROGRESS' || step.status === 'AVAILABLE';

  return (
    <div className="relative pl-6 sm:pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className={`absolute left-[11px] sm:left-[15px] top-8 bottom-[-16px] w-0.5 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`} />
      )}
      
      {/* Step node */}
      <div className={`absolute left-0 sm:left-1 top-2.5 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 bg-white z-10 ${
        isCompleted ? 'border-green-500 text-green-500' : 
        isActive ? 'border-accent text-accent' : 
        'border-gray-200 text-gray-300'
      }`}>
        {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : 
         isLocked ? <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : 
         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full" />}
      </div>

      <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${statusColors[step.status]} ${isActive ? 'shadow-sm cursor-pointer' : ''}`}>
        <div className={`p-2 rounded-lg ${isCompleted ? 'bg-green-100' : isActive ? 'bg-white shadow-sm' : 'bg-gray-100'}`}>
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-sm sm:text-base">{step.title}</h5>
          <p className="text-xs text-opacity-80 mt-0.5 font-medium" dir="ltr">{step.type}</p>
        </div>
        {isActive && (
          <button className="px-3 sm:px-4 py-1.5 bg-accent text-white rounded-lg text-xs font-bold hover:bg-accent-hover transition-colors">
            ابدأ
          </button>
        )}
      </div>
    </div>
  );
}

function LearningLesson({ lesson }) {
  const [isOpen, setIsOpen] = React.useState(lesson.status === 'IN_PROGRESS' || lesson.status === 'COMPLETED');
  
  return (
    <div className="border border-border rounded-2xl overflow-hidden mb-4 bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50/50 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            lesson.status === 'COMPLETED' ? 'bg-green-100 text-green-600' :
            lesson.status === 'IN_PROGRESS' ? 'bg-accent/20 text-accent' :
            'bg-gray-100 text-gray-400'
          }`}>
            {lesson.status === 'COMPLETED' ? <CheckCircle2 className="w-5 h-5" /> :
             lesson.status === 'LOCKED' ? <Lock className="w-4 h-4" /> :
             <PlayCircle className="w-5 h-5" />}
          </div>
          <h4 className="font-bold text-primary text-right" dir="ltr">{lesson.title}</h4>
        </div>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-6 space-y-4" dir="rtl">
              {lesson.steps.map((step, idx) => (
                <LearningStep key={step.id} step={step} isLast={idx === lesson.steps.length - 1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LearningPage() {
  const { learningPath } = mockStudentData;

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Page Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">التعلم</h1>
          <p className="text-muted-foreground text-lg">كمل رحلتك التعليمية من حيث ما وقفت</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Learning Content Area (Left/Main col) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Current Course Prominent Card */}
            <div className="bg-gradient-to-br from-primary to-deep-navy rounded-3xl p-1 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="bg-background/95 backdrop-blur-sm rounded-[22px] p-6 sm:p-8 h-full flex flex-col md:flex-row gap-6 relative z-10">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold text-xs rounded-full mb-4">تابع التعلم</span>
                  <h2 className="text-2xl font-bold text-primary mb-2" dir="ltr">{learningPath.currentCourse}</h2>
                  <div className="mb-6 flex items-center gap-2">
                    <p className="text-muted-foreground font-medium">الدرس الحالي:</p>
                    <p className="text-primary font-bold" dir="ltr">{learningPath.sections[1].lessons[0].title}</p>
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-primary">التقدم العام</span>
                      <span className="text-accent">{learningPath.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-accent" style={{ width: `${learningPath.progress}%` }}></div>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-8 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 flex items-center justify-center gap-2">
                    <PlayCircle className="w-5 h-5" />
                    كمل من حيث توقفت
                  </button>
                </div>
              </div>
            </div>

            {/* Sections & Lessons Accordion */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 px-1">محتوى الكورس</h3>
              <div className="space-y-6">
                {learningPath.sections.map(section => (
                  <div key={section.id}>
                    <h4 className="font-bold text-lg text-primary mb-3 bg-white p-3 rounded-xl border border-border shadow-sm inline-block w-full">{section.title}</h4>
                    <div className="pr-2 sm:pr-4">
                      {section.lessons.map(lesson => (
                        <LearningLesson key={lesson.id} lesson={lesson} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area (Right col) */}
          <div className="space-y-6">
            
            {/* Next Up Section */}
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-accent rounded-full"></span>
                التالي
              </h3>
              <div className="space-y-3">
                {learningPath.nextSteps.map((step) => {
                  const Icon = stepIcons[step.type] || FileText;
                  return (
                    <div key={step.id} className={`flex items-start gap-3 p-3 rounded-xl border ${step.isLocked ? 'bg-gray-50 border-transparent opacity-60' : 'bg-background border-border hover:border-accent/50 cursor-pointer transition-colors'}`}>
                      <div className={`p-2 rounded-lg ${step.isLocked ? 'bg-gray-200' : 'bg-accent/10 text-accent'}`}>
                        {step.isLocked ? <Lock className="w-4 h-4 text-gray-500" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${step.isLocked ? 'text-muted-foreground' : 'text-primary'}`} dir="ltr">{step.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{step.isLocked ? 'مغلق حالياً' : 'متاح الآن'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Other Active Courses Quick Switch */}
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">كورسات أخرى</h3>
              <div className="space-y-4">
                {mockStudentData.enrolledCourses.filter(c => c.status === 'قيد التعلم' && c.title !== learningPath.currentCourse).map(course => (
                  <div key={course.id} className="flex gap-3 items-center group cursor-pointer p-2 hover:bg-gray-50 rounded-xl transition-colors">
                    <img src={course.thumbnail} alt={course.title} className="w-14 h-14 rounded-lg object-cover border border-border group-hover:border-accent transition-colors" />
                    <div className="flex-1 overflow-hidden">
                      <p className="font-bold text-primary text-sm truncate" dir="ltr">{course.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${course.progressPercent}%` }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground">{course.progressPercent}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

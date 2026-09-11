import React, { useState } from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { FileText, Clock, Trophy, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function ExamCard({ exam, index }) {
  const isCompleted = exam.status === 'مكتمل';
  const isPending = exam.status === 'قيد التصحيح';
  const isAvailable = exam.status === 'متاح';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`bg-white rounded-3xl p-6 border ${isAvailable ? 'border-accent/30 shadow-md shadow-accent/5' : 'border-border'} flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
    >
      {/* Decorative background element for available exams */}
      {isAvailable && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
      )}

      {/* Header info */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <span className="inline-block px-2.5 py-1 bg-gray-100 text-muted-foreground font-bold text-[10px] rounded-lg mb-2" dir="ltr">
            {exam.courseName}
          </span>
          <h3 className="text-xl font-heading font-bold text-primary" dir="ltr">{exam.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{exam.sectionName}</p>
        </div>
        
        {/* Status Badge */}
        <div className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
          isCompleted ? 'bg-green-50 text-green-700 border-green-200' :
          isPending ? 'bg-orange-50 text-orange-700 border-orange-200' :
          'bg-accent/10 text-accent border-accent/20'
        }`}>
          {isCompleted && <Trophy className="w-3.5 h-3.5" />}
          {isPending && <Clock className="w-3.5 h-3.5" />}
          {isAvailable && <PlayCircle className="w-3.5 h-3.5" />}
          <span>{exam.status}</span>
        </div>
      </div>

      {/* Details (Duration & Questions) */}
      <div className="flex items-center gap-4 py-4 mb-4 border-y border-gray-50 relative z-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <FileText className="w-4 h-4 text-gray-400" />
          <span>{exam.questionsCount} سؤال</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>{exam.durationMinutes} دقيقة</span>
        </div>
      </div>

      {/* Action / Result Area */}
      <div className="mt-auto pt-2 relative z-10">
        {isCompleted ? (
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground font-medium mb-1">النتيجة</span>
              <span className="text-2xl font-bold text-primary" dir="ltr">{exam.score}%</span>
            </div>
            <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-primary font-bold text-sm rounded-xl transition-colors">
              عرض التفاصيل
            </button>
          </div>
        ) : isPending ? (
          <div className="flex items-center justify-between opacity-80">
            <p className="text-sm text-muted-foreground font-medium italic">في انتظار تصحيح المعلم...</p>
            <button disabled className="px-5 py-2.5 bg-gray-50 text-gray-400 font-bold text-sm rounded-xl cursor-not-allowed">
              النتيجة قريباً
            </button>
          </div>
        ) : (
          <button className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold text-sm rounded-xl transition-colors shadow-sm shadow-accent/20 flex items-center justify-center gap-2">
            <PlayCircle className="w-4 h-4" />
            ابدأ الامتحان
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState('الكل');
  const tabs = ['الكل', 'متاح', 'قيد التصحيح', 'مكتمل'];

  const filteredExams = mockStudentData.exams.filter(exam => {
    if (activeTab === 'الكل') return true;
    return exam.status === activeTab;
  });

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">الامتحانات</h1>
            <p className="text-muted-foreground text-lg">راجع امتحاناتك، نتائجك، ومستواك</p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex gap-3">
            <div className="bg-white px-4 py-2 rounded-xl border border-border shadow-sm flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Trophy className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium">متوسط الدرجات</p>
                <p className="text-lg font-bold text-primary">89.5%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-muted-foreground border border-border hover:bg-gray-50 hover:text-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Exams Grid */}
        {filteredExams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam, idx) => (
              <ExamCard key={exam.id} exam={exam} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-border border-dashed flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">مفيش امتحانات دلوقتي</h3>
            <p className="text-muted-foreground">لما تخلص دروس جديدة وتوصل لامتحان هيظهر هنا.</p>
          </div>
        )}

      </div>
    </StudentLayout>
  );
}

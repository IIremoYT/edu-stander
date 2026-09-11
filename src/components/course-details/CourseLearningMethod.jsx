import React from 'react';
import { BookOpen, FileEdit, ClipboardCheck, ArrowDown } from 'lucide-react';

export default function CourseLearningMethod() {
  const steps = [
    {
      title: "شرح",
      desc: "فيديوهات مسجلة بجودة عالية تشرح كل جزء في المنهج بتفصيل وبساطة.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-primary",
      delay: 0
    },
    {
      title: "واجب",
      desc: "تطبيق فوري على ما تعلمته من خلال واجبات رقمية تفاعلية لتثبيت المعلومة.",
      icon: <FileEdit className="w-8 h-8 text-white" />,
      color: "bg-secondary",
      delay: 100
    },
    {
      title: "مراجعة",
      desc: "مذكرات PDF ملخصة للمراجعة السريعة قبل الانتقال للخطوة التالية.",
      icon: <BookOpen className="w-8 h-8 text-white" />, // Reusing BookOpen as a placeholder for review
      color: "bg-accent",
      delay: 200
    },
    {
      title: "امتحان",
      desc: "اختبارات دورية لقياس مستواك وتدريبك على شكل أسئلة الامتحان النهائي.",
      icon: <ClipboardCheck className="w-8 h-8 text-white" />,
      color: "bg-[#162a45]",
      delay: 300
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">دورة التعلم في الكورس</h2>
      
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 lg:gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Card */}
            <div className="relative group w-full lg:max-w-[240px]">
              <div className="bg-white rounded-3xl p-8 text-center border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-accent/30 z-10 relative">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-base shadow-md">
                  {index + 1}
                </div>
                
                {/* Icon Container */}
                <div className={`w-20 h-20 mx-auto rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-inner transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Connecting Arrow (Desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center pt-24">
                <div className="h-[2px] w-10 xl:w-14 bg-border relative">
                  <div className="absolute left-0 -top-1.5 w-3 h-3 border-l-2 border-b-2 border-border rotate-45 transform origin-bottom-left"></div>
                </div>
              </div>
            )}

            {/* Connecting Arrow (Mobile) */}
            {index < steps.length - 1 && (
              <div className="lg:hidden flex justify-center py-4 text-border">
                <ArrowDown size={32} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

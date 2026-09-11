import React from 'react';
import { Video, PenTool, ClipboardCheck, FileDown, TrendingUp, Smartphone } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: <Video className="w-6 h-6" strokeWidth={1.5} />,
    title: 'فيديوهات شرح عالية الجودة',
    desc: 'شرح مفصل لكل درس بالفيديو مع أمثلة واضحة وتطبيقات عملية'
  },
  {
    icon: <PenTool className="w-6 h-6" strokeWidth={1.5} />,
    title: 'واجبات رقمية تفاعلية',
    desc: 'واجبات بعد كل درس مع تصحيح فوري وشرح للإجابات الصحيحة'
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: 'امتحانات شاملة',
    desc: 'امتحانات على كل وحدة وامتحانات شاملة على المنهج كله'
  },
  {
    icon: <FileDown className="w-6 h-6" strokeWidth={1.5} />,
    title: 'ملفات PDF ومراجعات',
    desc: 'ملفات جاهزة للتحميل — ملخصات، قواعد، وأوراق عمل'
  },
  {
    icon: <TrendingUp className="w-6 h-6" strokeWidth={1.5} />,
    title: 'متابعة التقدم',
    desc: 'تابع أداءك ودرجاتك في كل درس وامتحان بشكل مستمر'
  },
  {
    icon: <Smartphone className="w-6 h-6" strokeWidth={1.5} />,
    title: 'متاح على كل الأجهزة',
    desc: 'ادخل على المنصة من الموبايل أو التابلت أو الكمبيوتر في أي وقت'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="مميزات المنصة" 
          subtitle="Platform Features" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="bg-card border border-border border-s-4 border-s-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

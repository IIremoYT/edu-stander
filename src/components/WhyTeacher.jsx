import React from 'react';
import { Award, LayoutList, Users, Trophy } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const points = [
  {
    icon: <Award className="text-primary w-6 h-6" strokeWidth={1.5} />,
    title: 'خبرة أكثر من ١٠ سنوات',
    desc: 'في تدريس مناهج اللغة الإنجليزية للمرحلة الثانوية'
  },
  {
    icon: <LayoutList className="text-primary w-6 h-6" strokeWidth={1.5} />,
    title: 'شرح مبسط ومنظم',
    desc: 'كل درس مقسم لخطوات واضحة: شرح، تطبيق، مراجعة'
  },
  {
    icon: <Users className="text-primary w-6 h-6" strokeWidth={1.5} />,
    title: 'متابعة مستمرة للطالب',
    desc: 'واجبات رقمية وامتحانات مع تقييم فوري لأداء الطالب'
  },
  {
    icon: <Trophy className="text-primary w-6 h-6" strokeWidth={1.5} />,
    title: 'نتائج مثبتة',
    desc: 'آلاف الطلبة حققوا درجات مميزة مع مستر عبدالمعبود'
  }
];

export default function WhyTeacher() {
  return (
    <section id="why-teacher" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="ليه تتعلم مع مستر عبدالمعبود؟" 
          subtitle="A Trusted English Educator" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform -rotate-3 -translate-x-2 translate-y-4 blur-sm"></div>
              
              <div className="relative bg-card rounded-2xl p-2 pb-6 shadow-xl border border-border">
                <div className="rounded-xl overflow-hidden mb-4 border border-border/50">
                  <img 
                    src="/assets/teacher-hero.jpg" 
                    alt="مستر عبدالمعبود" 
                    className="w-full aspect-[4/5] object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p className="font-heading font-bold text-primary text-xl">مستر عبدالمعبود</p>
                  <p className="text-muted-foreground text-sm">مدرس أول لغة إنجليزية</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="space-y-6">
              {points.map((point, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-light/50 border border-accent/20 flex items-center justify-center">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary text-lg">{point.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <blockquote className="relative ps-6 border-s-4 border-accent mt-4 bg-background/50 p-6 rounded-e-xl" dir="ltr">
                <p className="font-serif italic text-xl text-primary leading-relaxed">
                  "Teaching English isn't about memorizing rules — it's about building confidence in every student."
                </p>
                <footer className="mt-3 font-heading font-medium text-muted-foreground text-sm" dir="rtl">
                  — مستر عبدالمعبود
                </footer>
              </blockquote>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

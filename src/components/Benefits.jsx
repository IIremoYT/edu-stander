import React from 'react';
import { BookOpen, CheckCircle2, BarChart3 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const benefits = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: 'محتوى منهجي ١٠٠٪',
    subtitle: 'Curriculum-Based Content'
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: 'شرح + واجب + امتحان',
    subtitle: 'Complete Learning Cycle'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    title: 'متابعة مستمرة لأداءك',
    subtitle: 'Track Your Progress'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="ليه Stander؟" 
          subtitle="Structured Curriculum Learning" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-accent-light/50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-serif italic" dir="ltr">
                  {benefit.subtitle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

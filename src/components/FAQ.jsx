import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'إزاي أشترك في الكورس؟',
    a: 'اختار الكورس المناسب لسنتك الدراسية، اضغط على "اشترك الآن"، وسجل حساب جديد. بعد الدفع هتقدر تدخل على كل الدروس والواجبات والامتحانات فوراً.'
  },
  {
    q: 'هل الكورسات بتغطي المنهج كله؟',
    a: 'أيوا، كل كورس بيغطي المنهج كامل — Grammar, Vocabulary, Reading, Writing — مع شرح مفصل لكل وحدة ودرس.'
  },
  {
    q: 'أقدر أتواصل مع المدرس لو عندي سؤال؟',
    a: 'طبعاً! تقدر تتواصل مع مستر عبدالمعبود من خلال المنصة أو من خلال صفحات التواصل الاجتماعي الرسمية.'
  },
  {
    q: 'الدفع بيكون إزاي؟',
    a: 'متاح الدفع عن طريق فودافون كاش، أو تحويل بنكي، أو الدفع الإلكتروني. كل الطرق آمنة وسهلة.'
  },
  {
    q: 'الكورس مدته قد إيه؟',
    a: 'الاشتراك بيكون للفصل الدراسي كامل. تقدر تدخل على المحتوى في أي وقت خلال فترة الاشتراك وتراجع الدروس أكثر من مرة.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <SectionHeading 
          title="أسئلة شائعة" 
          subtitle="Frequently Asked Questions" 
          centered={true}
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className={`border border-border rounded-lg overflow-hidden transition-colors duration-300 ${isOpen ? 'border-accent/50 bg-accent-light/10' : 'bg-card'}`}>
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-start px-6 py-5 flex items-center justify-between focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-primary text-lg pr-2">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-muted-foreground leading-relaxed pr-2">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

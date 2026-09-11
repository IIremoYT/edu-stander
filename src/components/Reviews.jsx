import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const reviews = [
  {
    initial: 'أ',
    name: 'أحمد محمد',
    grade: 'الصف الثاني الثانوي',
    text: 'الشرح بتاع مستر عبدالمعبود ممتاز جداً — كل حاجة مرتبة ومنظمة وبيفهمك من الأول للآخر. الواجبات بتساعدك تثبت المعلومة.'
  },
  {
    initial: 'ن',
    name: 'نورهان علي',
    grade: 'الصف الثالث الثانوي',
    text: 'أحسن منصة اتعلمت عليها إنجليزي. المنهج مشروح بطريقة سهلة والامتحانات بتخليك تعرف مستواك فعلاً. أنصح بيها لكل طالب ثانوي.'
  },
  {
    initial: 'م',
    name: 'محمد إبراهيم',
    grade: 'الصف الأول الثانوي',
    text: 'كنت ضعيف جداً في الـ Grammar بس بعد ما اشتركت مع مستر عبدالمعبود، مستواي اتحسن بشكل واضح. الشرح ميسّر وبيوصل المعلومة بسهولة.'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="آراء الطلبة" 
          subtitle="What Students Say" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-card border border-border rounded-xl p-8 relative shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div 
                  className="absolute top-4 right-6 text-6xl text-accent opacity-20 font-serif leading-none" 
                  aria-hidden="true"
                >
                  "
                </div>
                
                <div className="flex gap-1 mb-4 text-accent" aria-label="5 من 5 نجوم">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow relative z-10">
                  {review.text}
                </p>
                
                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {review.initial}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.grade}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

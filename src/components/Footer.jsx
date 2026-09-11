import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0b1320] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-heading font-bold text-3xl text-white mb-4 block">
              Stander<span className="text-accent">.</span>
            </Link>
            <p className="text-hero-muted text-sm leading-relaxed mb-6 pe-4">
              منصة تعليمية متخصصة في مناهج اللغة الإنجليزية للمرحلة الثانوية مع مستر عبدالمعبود.
            </p>
            <div className="flex items-center gap-4">
              {/* Social Icons — to be replaced with real URLs */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-hero-muted hover:text-accent hover:border-accent/50 transition-colors" aria-label="فيسبوك">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-hero-muted hover:text-accent hover:border-accent/50 transition-colors" aria-label="يوتيوب">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-hero-muted hover:text-accent hover:border-accent/50 transition-colors" aria-label="واتساب">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">روابط سريعة</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-hero-muted hover:text-accent transition-colors w-fit">الرئيسية</Link>
              <Link to="/courses" className="text-hero-muted hover:text-accent transition-colors w-fit">الكورسات</Link>
              <a href="/#why-teacher" className="text-hero-muted hover:text-accent transition-colors w-fit">عن المدرس</a>
              <a href="/#how-works" className="text-hero-muted hover:text-accent transition-colors w-fit">كيف نتعلم</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">الدعم</h4>
            <div className="flex flex-col gap-3">
              <a href="/#faq" className="text-hero-muted hover:text-accent transition-colors w-fit">أسئلة شائعة</a>
              <Link to="/support" className="text-hero-muted hover:text-accent transition-colors w-fit">تواصل معنا</Link>
              <a href="#" className="text-hero-muted hover:text-accent transition-colors w-fit">سياسة الخصوصية</a>
              <a href="#" className="text-hero-muted hover:text-accent transition-colors w-fit">الشروط والأحكام</a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">الكورسات</h4>
            <div className="flex flex-col gap-3">
              <Link to="/course-details/1" className="text-hero-muted hover:text-accent transition-colors w-fit">الصف الأول الثانوي</Link>
              <Link to="/course-details/2" className="text-hero-muted hover:text-accent transition-colors w-fit">الصف الثاني الثانوي</Link>
              <Link to="/course-details/3" className="text-hero-muted hover:text-accent transition-colors w-fit">الصف الثالث الثانوي</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-hero-muted flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© ٢٠٢٦ Stander Edu — جميع الحقوق محفوظة</p>
          <div className="font-serif italic opacity-50" dir="ltr">Built with Academic Rigor</div>
        </div>
      </div>
    </footer>
  );
}

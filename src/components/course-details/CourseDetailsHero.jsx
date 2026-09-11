import React from 'react';
import { Star, BookOpen, PlayCircle, FileText, ArrowLeft, Play } from 'lucide-react';
import AcademicParticles from '../AcademicParticles';

export default function CourseDetailsHero({ onPurchaseClick }) {
  return (
    <section className="relative bg-hero-bg overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decor */}
      <AcademicParticles count={8} className="opacity-30" />
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-accent/5 blur-[120px]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-primary/20 blur-[100px]"></div>
      </div>
      
      {/* English faint text */}
      <div className="absolute top-10 left-10 text-white/[0.03] font-serif font-bold text-9xl pointer-events-none select-none" dir="ltr" aria-hidden="true">
        ENG
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Right column: Course Information */}
          <div className="order-2 lg:order-1">
          {/* Breadcrumb-style category/grade */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
              الأكثر طلبًا
            </span>
            <span className="text-accent-light text-sm font-medium">
              الصف الثالث الثانوي
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            كورس اللغة الإنجليزية الكامل
          </h1>

          <p className="text-hero-muted text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            شرح منهج اللغة الإنجليزية كاملًا بطريقة منظمة وواضحة. يتضمن الكورس مراجعات شاملة، تدريبات مكثفة، وامتحانات دورية لضمان تفوقك.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-accent fill-accent" />
              <span className="text-white font-bold text-lg">4.9</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-white/10"></div>
            
            <div className="flex items-center gap-2 text-hero-muted">
              <BookOpen size={18} className="text-accent-light" />
              <span>6 وحدات</span>
            </div>
            
            <div className="flex items-center gap-2 text-hero-muted">
              <PlayCircle size={18} className="text-accent-light" />
              <span>48 درس</span>
            </div>
            
            <div className="flex items-center gap-2 text-hero-muted">
              <FileText size={18} className="text-accent-light" />
              <span>8 امتحانات</span>
            </div>
          </div>

          {/* Price & CTA (Visible mainly on mobile/tablet if sidebar is hidden, or as secondary on desktop) */}
          <div className="flex flex-wrap items-center gap-6 lg:hidden">
            <div>
              <div className="text-white font-heading font-bold text-3xl">
                600 <span className="text-xl">ج.م</span>
              </div>
              <div className="text-hero-muted line-through text-sm">
                750 ج.م
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <button 
                onClick={onPurchaseClick}
                className="bg-accent text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                اشتري الكورس
                <ArrowLeft size={18} />
              </button>
              
              <button className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-md font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Play size={18} />
                شاهد المعاينة
              </button>
            </div>
          </div>

          {/* Desktop Preview Button (Hidden as we have the visual now, but keeping if needed) */}
          {/* <div className="hidden lg:block">
            <button className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-md font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <Play size={18} />
              شاهد المعاينة
            </button>
          </div> */}

          </div>

          {/* Left column: Course Visual (Desktop only) */}
          <div className="hidden lg:block order-1 lg:order-2 relative">
            <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary to-secondary border border-white/10 shadow-2xl overflow-hidden relative group cursor-pointer">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_60%)] opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* English faint text */}
              <div className="absolute -bottom-4 -left-4 text-white/[0.04] font-serif font-bold text-9xl pointer-events-none select-none" dir="ltr" aria-hidden="true">
                ENG
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-[#0F1B2D]/80 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play size={36} fill="currentColor" className="ml-1.5" />
              </div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md border border-white/10">
                معاينة الكورس
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

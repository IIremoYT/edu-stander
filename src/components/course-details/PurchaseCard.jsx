import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

export default function PurchaseCard({ onPurchaseClick }) {
  const benefits = [
    'شرح كامل للمنهج',
    'فيديوهات شرح عالية الجودة',
    'واجبات رقمية وتفاعلية',
    'امتحانات دورية وشاملة',
    'ملفات PDF للمراجعة',
    'متابعة مستمرة للتقدم',
  ];

  return (
    <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden sticky top-28 xl:top-32">
      {/* Header / Price */}
      <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
        
        <div className="relative z-10">
          <div className="text-white/80 text-base font-medium mb-2">
            كورس اللغة الإنجليزية الكامل
          </div>
          
          <div className="flex items-end gap-3 mb-3">
            <div className="font-heading font-bold text-4xl xl:text-5xl">
              600 <span className="text-2xl xl:text-3xl">ج.م</span>
            </div>
            <div className="text-white/60 line-through text-lg xl:text-xl mb-1.5">
              750 ج.م
            </div>
          </div>
          
          <div className="inline-block bg-red-500/20 text-red-100 border border-red-500/30 text-sm font-bold px-3 py-1 rounded">
            خصم 20%
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <button 
          onClick={onPurchaseClick}
          className="w-full bg-accent text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#b07524] transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          اشتري الكورس
        </button>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>دفع آمن ومضمون 100%</span>
        </div>

        <div className="h-px bg-border"></div>

        <div>
          <h4 className="font-bold text-lg text-primary mb-5">هذا الكورس يشمل:</h4>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 text-emerald-600 p-1 rounded-full flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-base text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

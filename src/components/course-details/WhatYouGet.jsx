import React from 'react';
import { PlayCircle, FileEdit, ClipboardList, FileText, TrendingUp, RefreshCw } from 'lucide-react';

export default function WhatYouGet() {
  const items = [
    { icon: <PlayCircle size={24} />, text: 'فيديوهات شرح', desc: 'بجودة عالية وتفصيل كامل' },
    { icon: <FileEdit size={24} />, text: 'واجبات رقمية', desc: 'تفاعلية بعد كل درس' },
    { icon: <ClipboardList size={24} />, text: 'امتحانات', desc: 'دورية وشاملة للتدريب' },
    { icon: <FileText size={24} />, text: 'ملفات PDF', desc: 'مذكرات جاهزة للطباعة' },
    { icon: <TrendingUp size={24} />, text: 'متابعة التقدم', desc: 'تقارير مستمرة لمستواك' },
    { icon: <RefreshCw size={24} />, text: 'مراجعات', desc: 'مكثفة قبل الامتحانات' },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-heading font-bold text-primary mb-8">إيه اللي هتاخده؟</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-md transition-all flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 bg-primary/5 text-accent rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-primary text-lg mb-2">{item.text}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

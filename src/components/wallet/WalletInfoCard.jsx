import React from 'react';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WalletInfoCard() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
          <Lightbulb size={18} className="text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-blue-900 mb-1">
            طريقتك الأسهل لشراء الكورسات
          </h3>
          <p className="text-sm text-blue-800/80 leading-relaxed">
            اشحن محفظتك مرة واحدة واستخدم رصيدك لشراء الكورسات بسهولة.
          </p>
        </div>
      </div>
      
      <Link 
        to="/courses"
        className="flex items-center justify-center gap-2 w-full mt-4 py-2.5 bg-white text-blue-600 rounded-lg font-bold text-sm border border-blue-200 hover:bg-blue-50 transition-colors shadow-sm"
      >
        تصفح الكورسات
        <ArrowLeft size={16} />
      </Link>
    </div>
  );
}

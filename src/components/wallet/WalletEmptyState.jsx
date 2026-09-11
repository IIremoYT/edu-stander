import React from 'react';
import { Receipt } from 'lucide-react';

export default function WalletEmptyState() {
  return (
    <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-gray-200">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Receipt size={32} className="text-gray-300" />
      </div>
      <h3 className="font-bold text-lg text-primary mb-2">لسه مفيش عمليات</h3>
      <p className="text-gray-500 text-sm max-w-xs mx-auto">
        عمليات شحن المحفظة وشراء الكورسات هتظهر هنا.
      </p>
    </div>
  );
}

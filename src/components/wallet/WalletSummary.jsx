import React from 'react';
import { TrendingUp, ShoppingBag, Clock } from 'lucide-react';

export default function WalletSummary({ transactions }) {
  const totalDeposits = transactions
    .filter(t => t.type === 'deposit')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalPurchases = transactions
    .filter(t => t.type === 'purchase')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const lastTransaction = transactions[0];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
      <h3 className="font-bold text-primary mb-4">ملخص المحفظة</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
              <TrendingUp size={16} className="text-green-600" />
            </div>
            <span className="text-sm font-medium">إجمالي الإيداعات</span>
          </div>
          <span className="font-bold text-gray-900">{totalDeposits} ج.م</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
              <ShoppingBag size={16} className="text-blue-600" />
            </div>
            <span className="text-sm font-medium">إجمالي المشتريات</span>
          </div>
          <span className="font-bold text-gray-900">{totalPurchases} ج.م</span>
        </div>

        {lastTransaction && (
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={16} className="text-gray-400" />
              <span className="text-sm font-medium">آخر عملية</span>
            </div>
            <span className="text-sm text-gray-500">{lastTransaction.date}</span>
          </div>
        )}
      </div>
    </div>
  );
}

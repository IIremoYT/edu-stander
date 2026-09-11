import React from 'react';
import { Wallet, PlusCircle } from 'lucide-react';
import WalletLowBalance from './WalletLowBalance';
import WalletEmptyState from './WalletEmptyState';

export default function WalletBalanceCard({ balance, onAddClick }) {
  const isZero = balance === 0;
  const isLow = balance > 0 && balance < 200;

  return (
    <div className="bg-primary text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-accent opacity-20 rounded-br-full -z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6 opacity-90">
          <Wallet size={24} className="text-accent" />
          <h2 className="font-bold text-lg">رصيد المحفظة</h2>
        </div>
        
        <div className="mb-8">
          <div className="flex items-end gap-2">
            <span className="text-4xl md:text-5xl font-heading font-bold">{balance}</span>
            <span className="text-xl text-accent font-bold mb-1">ج.م</span>
          </div>
          <p className="text-sm opacity-80 mt-2 bg-white/10 inline-block px-3 py-1 rounded-full">
            متاح للاستخدام
          </p>
        </div>

        {isZero ? (
          <div className="mb-6">
            <p className="text-sm opacity-90 mb-4">اشحن محفظتك وابدأ أول خطوة في رحلتك.</p>
          </div>
        ) : null}

        <button 
          onClick={onAddClick}
          className="w-full bg-accent text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#b07524] transition-colors shadow-md"
        >
          <PlusCircle size={20} />
          شحن المحفظة
        </button>

        {isLow && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <WalletLowBalance balance={balance} />
          </div>
        )}
      </div>
    </div>
  );
}

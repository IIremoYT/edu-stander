import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, Wallet } from 'lucide-react';

export default function PurchaseModal({ isOpen, onClose }) {
  // states: 'confirm' | 'insufficient' | 'success'
  const [modalState, setModalState] = useState('confirm');

  if (!isOpen) {
    // Reset state when closed
    if (modalState !== 'confirm') {
      setTimeout(() => setModalState('confirm'), 300);
    }
    return null;
  }

  const handlePurchaseClick = () => {
    // For prototype purposes, toggle between success and insufficient balance
    // In a real app, this would depend on the actual wallet balance
    const randomOutcome = Math.random() > 0.5 ? 'success' : 'insufficient';
    setModalState(randomOutcome);
  };

  const handleBackToConfirm = () => {
    setModalState('confirm');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-card w-full max-w-md rounded-2xl shadow-2xl border border-border overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
          <h3 className="font-heading font-bold text-lg text-primary">
            {modalState === 'confirm' && 'تأكيد شراء الكورس'}
            {modalState === 'insufficient' && 'رصيد المحفظة غير كافي'}
            {modalState === 'success' && 'تم الشراء بنجاح'}
          </h3>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {modalState === 'confirm' && (
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">الكورس:</div>
                <div className="font-bold text-primary text-lg">كورس اللغة الإنجليزية الكامل</div>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">السعر:</span>
                  <span className="font-bold text-primary">600 ج.م</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">رصيد المحفظة:</span>
                  <span className="font-bold text-emerald-600">750 ج.م</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">المتبقي بعد الشراء:</span>
                  <span className="font-bold text-primary">150 ج.م</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  onClick={handlePurchaseClick}
                  className="flex-1 bg-accent text-white font-semibold py-2.5 rounded-lg hover:bg-[#b07524] transition-colors"
                >
                  تأكيد الشراء
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 bg-white border border-border text-primary font-semibold py-2.5 rounded-lg hover:bg-muted transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}

          {modalState === 'insufficient' && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertTriangle size={32} />
              </div>
              
              <div className="bg-muted/50 rounded-xl p-4 space-y-3 text-right">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">السعر:</span>
                  <span className="font-bold text-primary">600 ج.م</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">الرصيد الحالي:</span>
                  <span className="font-bold text-red-500">300 ج.م</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  className="flex-1 bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2"
                >
                  <Wallet size={18} />
                  شحن المحفظة
                </button>
                <button 
                  onClick={handleBackToConfirm}
                  className="flex-1 bg-white border border-border text-primary font-semibold py-2.5 rounded-lg hover:bg-muted transition-colors"
                >
                  رجوع
                </button>
              </div>
            </div>
          )}

          {modalState === 'success' && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle size={32} />
              </div>
              
              <div className="text-muted-foreground text-sm">
                تم إضافة كورس <span className="font-bold text-primary">اللغة الإنجليزية الكامل</span> إلى حسابك بنجاح. يمكنك الآن البدء في التعلم.
              </div>

              <div className="pt-2">
                <button 
                  onClick={onClose}
                  className="w-full bg-accent text-white font-semibold py-2.5 rounded-lg hover:bg-[#b07524] transition-colors"
                >
                  ابدأ التعلم الآن
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

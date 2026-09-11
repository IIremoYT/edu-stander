import React, { useState } from 'react';
import { X, CreditCard, Smartphone, CheckCircle2 } from 'lucide-react';

export default function AddBalanceModal({ isOpen, onClose, onSuccess }) {
  const [step, setStep] = useState(1); // 1: Amount & Method, 2: Confirmation, 3: Success
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [method, setMethod] = useState('visa');

  if (!isOpen) return null;

  const amounts = [100, 250, 500, 1000];
  const methods = [
    { id: 'visa', name: 'Visa / Mastercard', icon: <CreditCard size={20} /> },
    { id: 'vodafone', name: 'Vodafone Cash', icon: <Smartphone size={20} /> },
    { id: 'fawry', name: 'Fawry', icon: <CreditCard size={20} /> },
  ];

  const handleAmountClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val) setAmount(Number(val));
  };

  const handleContinue = () => {
    if (amount > 0) setStep(2);
  };

  const handleConfirm = () => {
    setStep(3);
  };

  const handleClose = () => {
    if (step === 3) onSuccess(amount);
    setStep(1);
    setAmount(500);
    setCustomAmount('');
    setMethod('visa');
    onClose();
  };

  const renderStep1 = () => (
    <>
      <div className="mb-6">
        <h4 className="font-bold text-primary mb-3 text-sm">اختار المبلغ</h4>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {amounts.map(val => (
            <button
              key={val}
              onClick={() => handleAmountClick(val)}
              className={`py-3 rounded-lg border font-bold transition-all ${
                amount === val && !customAmount
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border text-gray-600 hover:border-gray-300'
              }`}
            >
              +{val} ج.م
            </button>
          ))}
        </div>
        <div className="relative">
          <input
            type="number"
            placeholder="مبلغ آخر..."
            value={customAmount}
            onChange={handleCustomAmountChange}
            className={`w-full py-3 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent/20 text-right ${
              customAmount ? 'border-accent' : 'border-border'
            }`}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">ج.م</span>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-bold text-primary mb-3 text-sm">طريقة الدفع</h4>
        <div className="space-y-3">
          {methods.map(m => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${
                method === m.id
                  ? 'border-accent bg-accent/5 ring-1 ring-accent'
                  : 'border-border hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method === m.id ? 'bg-accent/20 text-accent' : 'bg-gray-100 text-gray-500'}`}>
                  {m.icon}
                </div>
                <span className="font-bold text-gray-800">{m.name}</span>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === m.id ? 'border-accent' : 'border-gray-300'}`}>
                {method === m.id && <div className="w-2.5 h-2.5 bg-accent rounded-full"></div>}
              </div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleContinue}
        disabled={amount <= 0}
        className="w-full bg-accent text-white py-3.5 rounded-lg font-bold hover:bg-[#b07524] transition-colors disabled:opacity-50"
      >
        متابعة الدفع
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="bg-gray-50 rounded-xl p-6 mb-8 text-center">
        <p className="text-gray-500 mb-2">المبلغ</p>
        <div className="text-4xl font-heading font-bold text-primary mb-6">
          {amount} <span className="text-xl text-accent">ج.م</span>
        </div>
        
        <div className="flex items-center justify-between py-3 border-t border-b border-gray-200">
          <span className="text-gray-500">طريقة الدفع</span>
          <span className="font-bold text-primary">{methods.find(m => m.id === method)?.name}</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleConfirm}
          className="flex-1 bg-accent text-white py-3.5 rounded-lg font-bold hover:bg-[#b07524] transition-colors"
        >
          تأكيد الدفع
        </button>
        <button
          onClick={() => setStep(1)}
          className="flex-1 bg-gray-100 text-gray-700 py-3.5 rounded-lg font-bold hover:bg-gray-200 transition-colors"
        >
          رجوع
        </button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <div className="text-center py-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 size={40} className="text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-primary mb-2">تم شحن المحفظة بنجاح</h3>
      <p className="text-gray-500 mb-6">تم إضافة {amount} ج.م لرصيدك</p>
      
      <button
        onClick={handleClose}
        className="w-full bg-accent text-white py-3.5 rounded-lg font-bold hover:bg-[#b07524] transition-colors"
      >
        العودة للمحفظة
      </button>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm" dir="rtl">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="font-bold text-xl text-primary">
              {step === 1 ? 'شحن المحفظة' : step === 2 ? 'تأكيد شحن المحفظة' : 'تم بنجاح'}
            </h3>
            {step === 1 && <p className="text-sm text-gray-500 mt-1">اختار المبلغ وطريقة الدفع المناسبة ليك.</p>}
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>

      </div>
    </div>
  );
}

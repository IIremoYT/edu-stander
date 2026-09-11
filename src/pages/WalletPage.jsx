import React, { useState } from 'react';
import StudentLayout from '../components/student/StudentLayout';
import WalletBalanceCard from '../components/wallet/WalletBalanceCard';
import WalletSummary from '../components/wallet/WalletSummary';
import AddBalanceModal from '../components/wallet/AddBalanceModal';
import TransactionList from '../components/wallet/TransactionList';
import WalletInfoCard from '../components/wallet/WalletInfoCard';

export default function WalletPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [balance, setBalance] = useState(750); // Mock balance
  
  // Mock transactions
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 1000, desc: 'شحن المحفظة', date: 'اليوم' },
    { id: 2, type: 'purchase', amount: -600, desc: 'شراء كورس اللغة الإنجليزية', date: 'أمس' },
    { id: 3, type: 'purchase', amount: -300, desc: 'شراء كورس المراجعة', date: 'منذ 3 أيام' },
    { id: 4, type: 'deposit', amount: 500, desc: 'شحن المحفظة', date: 'منذ أسبوع' },
  ]);

  const handleAddBalance = (amount) => {
    setBalance(prev => prev + amount);
    setTransactions([{
      id: Date.now(),
      type: 'deposit',
      amount: amount,
      desc: 'شحن المحفظة',
      date: 'الآن'
    }, ...transactions]);
  };

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Breadcrumb & Header */}
        <div>
          <div className="text-sm text-gray-500 mb-2 font-medium" dir="rtl">
            <span className="cursor-pointer hover:text-accent transition-colors">الرئيسية</span> / <span className="text-primary font-bold">المحفظة</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div dir="rtl">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">المحفظة</h1>
              <p className="text-gray-600">رصيدك جاهز عشان تبدأ الكورس اللي يناسبك.</p>
            </div>
            <div className="text-gray-400 font-medium text-sm hidden md:block">
              Your Learning Wallet
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" dir="rtl">
          {/* Right Column: Balance & Actions */}
          <div className="lg:col-span-1 space-y-6">
            <WalletBalanceCard balance={balance} onAddClick={() => setIsAddModalOpen(true)} />
            <WalletSummary transactions={transactions} />
            <WalletInfoCard />
          </div>

          {/* Left Column: Transactions */}
          <div className="lg:col-span-2 space-y-6">
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>

      <AddBalanceModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        onSuccess={handleAddBalance}
      />
    </StudentLayout>
  );
}

import React, { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, Filter } from 'lucide-react';
import WalletEmptyState from './WalletEmptyState';

export default function TransactionList({ transactions }) {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'الكل' },
    { id: 'deposit', label: 'الإيداعات' },
    { id: 'purchase', label: 'المشتريات' }
  ];

  const filteredTransactions = transactions.filter(t => {
    if (filter === 'all') return true;
    return t.type === filter;
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="font-bold text-xl text-primary">آخر العمليات</h2>
        
        {/* Simple Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          <Filter size={16} className="text-gray-400 mr-1 shrink-0" />
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-0">
        {filteredTransactions.length === 0 ? (
          <div className="p-8">
            <WalletEmptyState />
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredTransactions.map((tx) => (
              <div key={tx.id} className="p-4 sm:p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    tx.type === 'deposit' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {tx.type === 'deposit' ? <ArrowDownLeft size={24} /> : <ArrowUpRight size={24} />}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{tx.desc}</h4>
                    <p className="text-sm text-gray-500 mt-1">{tx.date}</p>
                  </div>
                </div>

                <div className={`font-bold whitespace-nowrap text-lg ${
                  tx.type === 'deposit' ? 'text-green-600' : 'text-gray-900'
                }`}>
                  <span dir="ltr">
                    {tx.type === 'deposit' ? '+' : ''}{tx.amount}
                  </span> ج.م
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { HelpCircle, Plus, Search, MessageSquare, AlertCircle, FileQuestion, BookOpen, CreditCard, Monitor, Wallet, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const supportCategories = [
  { id: 'مشكلة تقنية', icon: Monitor, label: 'مشكلة تقنية' },
  { id: 'الكورس', icon: BookOpen, label: 'محتوى الكورس' },
  { id: 'الامتحان', icon: FileQuestion, label: 'الامتحانات' },
  { id: 'الواجب', icon: MessageSquare, label: 'الواجبات' },
  { id: 'الدفع', icon: CreditCard, label: 'الدفع' },
  { id: 'المحفظة', icon: Wallet, label: 'المحفظة' },
  { id: 'الكوبون', icon: Tag, label: 'الكوبونات' },
  { id: 'الحساب', icon: AlertCircle, label: 'الحساب' },
];

const statusStyles = {
  'مفتوح': 'bg-blue-50 text-blue-700 border-blue-200',
  'قيد المتابعة': 'bg-orange-50 text-orange-700 border-orange-200',
  'في انتظار ردك': 'bg-purple-50 text-purple-700 border-purple-200',
  'تم الحل': 'bg-green-50 text-green-700 border-green-200',
  'مغلق': 'bg-gray-100 text-gray-600 border-gray-200',
};

function SupportTicket({ ticket, index }) {
  const Icon = supportCategories.find(c => c.id === ticket.category)?.icon || HelpCircle;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white p-5 rounded-2xl border border-border hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-50 text-muted-foreground rounded-xl group-hover:bg-accent/10 group-hover:text-accent transition-colors shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs font-bold text-muted-foreground bg-gray-100 px-2 py-0.5 rounded-md" dir="ltr">{ticket.id}</span>
            <span className="text-xs font-medium text-muted-foreground">• {ticket.category}</span>
          </div>
          <h4 className="font-bold text-primary text-base group-hover:text-accent transition-colors">{ticket.subject}</h4>
          <p className="text-xs text-muted-foreground mt-2">{ticket.lastUpdate}</p>
        </div>
      </div>
      
      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100 w-full sm:w-auto">
        <span className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap ${statusStyles[ticket.status] || statusStyles['مفتوح']}`}>
          {ticket.status}
        </span>
        <button className="text-sm font-bold text-accent hover:text-accent-hover sm:mt-2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
          عرض التفاصيل ←
        </button>
      </div>
    </motion.div>
  );
}

export default function SupportPage() {
  const { supportTickets } = mockStudentData;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = supportTickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Area with CTA */}
        <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0F1B2D] rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 text-center md:text-right flex-1">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">مركز الدعم</h1>
            <p className="text-white/80 text-lg max-w-xl">محتاج مساعدة؟ إحنا هنا عشان نساعدك في أي مشكلة تواجهك في المنصة.</p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button className="w-full md:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-3 group">
              <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              <span>إنشاء طلب دعم</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Area: Tickets List */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold text-primary">طلباتي</h3>
              
              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  placeholder="ابحث برقم الطلب أو العنوان..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-border rounded-xl py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence>
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket, idx) => (
                    <SupportTicket key={ticket.id} ticket={ticket} index={idx} />
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 bg-white rounded-3xl border border-border border-dashed flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      <HelpCircle className="w-8 h-8 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">مفيش طلبات دعم</h3>
                    <p className="text-muted-foreground">لو واجهتك أي مشكلة، لا تتردد في طلب المساعدة.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar Area: Categories */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-4">مواضيع شائعة</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {supportCategories.map((cat) => (
                  <button key={cat.id} className="flex items-center gap-3 p-3 text-right hover:bg-gray-50 rounded-xl transition-colors group border border-transparent hover:border-gray-100">
                    <div className="p-2 bg-gray-50 text-gray-500 group-hover:bg-accent/10 group-hover:text-accent rounded-lg transition-colors">
                      <cat.icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-primary group-hover:text-accent transition-colors">{cat.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-muted-foreground mb-3">مش لاقي اللي بتدور عليه؟</p>
                <button className="text-accent font-bold text-sm hover:underline">
                  تصفح الأسئلة الشائعة
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </StudentLayout>
  );
}

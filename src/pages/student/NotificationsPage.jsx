import React, { useState } from 'react';
import StudentLayout from '../../components/student/StudentLayout';
import { mockStudentData } from '../../data/mockStudentData';
import { Bell, FileText, BookOpen, CreditCard, User, Check, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getIconForType = (type) => {
  switch (type) {
    case 'EXAM': return <FileText className="w-5 h-5 text-purple-600" />;
    case 'COURSE': return <BookOpen className="w-5 h-5 text-accent" />;
    case 'PAYMENT': return <CreditCard className="w-5 h-5 text-green-600" />;
    case 'ACCOUNT': return <User className="w-5 h-5 text-blue-600" />;
    default: return <Bell className="w-5 h-5 text-gray-600" />;
  }
};

const getBgForType = (type) => {
  switch (type) {
    case 'EXAM': return 'bg-purple-100';
    case 'COURSE': return 'bg-orange-100';
    case 'PAYMENT': return 'bg-green-100';
    case 'ACCOUNT': return 'bg-blue-100';
    default: return 'bg-gray-100';
  }
};

function NotificationItem({ notification, index }) {
  const { isUnread, title, description, timestamp, type } = notification;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex gap-4 ${
        isUnread 
          ? 'bg-blue-50/50 border-blue-100 shadow-sm' 
          : 'bg-white border-border hover:bg-gray-50 hover:border-gray-300'
      }`}
    >
      {/* Unread indicator */}
      {isUnread && (
        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-2 h-2 rounded-full bg-blue-500" />
      )}

      {/* Icon */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${getBgForType(type)}`}>
        {getIconForType(type)}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-1">
          <h4 className={`text-base font-bold truncate ${isUnread ? 'text-primary' : 'text-primary/90'}`}>
            {title}
          </h4>
          <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
            {timestamp}
          </span>
        </div>
        <p className={`text-sm leading-relaxed ${isUnread ? 'text-gray-700 font-medium' : 'text-muted-foreground'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState('الكل');
  
  const filters = [
    { id: 'الكل', label: 'الكل' },
    { id: 'UNREAD', label: 'غير مقروءة' },
    { id: 'EXAM', label: 'الامتحانات' },
    { id: 'COURSE', label: 'الكورسات' },
    { id: 'PAYMENT', label: 'المدفوعات' },
  ];

  const filteredNotifications = mockStudentData.notifications.filter(n => {
    if (activeFilter === 'الكل') return true;
    if (activeFilter === 'UNREAD') return n.isUnread;
    return n.type === activeFilter;
  });

  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">الإشعارات</h1>
            <p className="text-muted-foreground text-lg">كل التحديثات المهمة الخاصة بحسابك</p>
          </div>
          
          <button className="flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors px-4 py-2 bg-accent/5 hover:bg-accent/10 rounded-xl">
            <CheckCheck className="w-4 h-4" />
            تحديد الكل كمقروء
          </button>
        </div>

        {/* Filters */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 border-b border-border">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`whitespace-nowrap px-4 py-3 text-sm font-bold transition-all relative ${
                activeFilter === filter.id 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {filter.label}
              {activeFilter === filter.id && (
                <motion.div 
                  layoutId="notification-filter" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification, idx) => (
                <NotificationItem key={notification.id} notification={notification} index={idx} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-3xl border border-border border-dashed flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">مفيش إشعارات جديدة</h3>
                <p className="text-muted-foreground">كل حاجة تمام، تقدر ترجع تكمل مذاكرة.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </StudentLayout>
  );
}

import React from 'react';
import { FileText, Edit3, Clock, AlertCircle } from 'lucide-react';
import { mockUpcomingTasks } from '../../data/mockDashboardData';

const iconMap = {
  FileText: FileText,
  Edit3: Edit3,
  Clock: Clock,
};

export default function UpcomingTasks() {
  const tasks = mockUpcomingTasks;

  return (
    <section className="bg-white rounded-2xl p-6 border border-border shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-heading font-bold text-primary mb-6">المهام القادمة</h3>
      
      {tasks.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground py-8">
          <p className="font-bold mb-2">مفيش مهام قريبة 🎉</p>
          <p className="text-sm">كل أمورك تمام!</p>
        </div>
      ) : (
        <div className="space-y-5 flex-1">
          {tasks.map((task) => {
            const Icon = iconMap[task.iconType] || AlertCircle;
            const isExpiration = task.type === 'expiration';
            
            return (
              <div key={task.id} className="flex items-start gap-4 group">
                <div className={`mt-1 p-2 rounded-xl shrink-0 ${
                  isExpiration ? 'bg-orange-100 text-orange-600' : 'bg-primary/10 text-primary'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm mb-1 group-hover:text-accent transition-colors ${
                    isExpiration ? 'text-orange-700' : 'text-primary'
                  }`}>
                    {task.title}
                  </h4>
                  <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded-md inline-block">
                    {task.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

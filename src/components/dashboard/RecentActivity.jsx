import React from 'react';
import { CheckCircle, Edit, PlusCircle, Wallet, Clock } from 'lucide-react';
import { mockRecentActivity } from '../../data/mockDashboardData';

const iconMap = {
  CheckCircle: CheckCircle,
  Edit: Edit,
  PlusCircle: PlusCircle,
  Wallet: Wallet,
};

export default function RecentActivity() {
  const activities = mockRecentActivity;

  return (
    <section className="bg-white rounded-2xl p-6 border border-border shadow-sm h-full flex flex-col">
      <h3 className="text-xl font-heading font-bold text-primary mb-6">نشاطك الأخير</h3>
      
      {activities.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center text-muted-foreground py-8">
          <p className="font-bold mb-2">لسه مفيش نشاط نعرضه هنا</p>
        </div>
      ) : (
        <div className="relative pl-2 pr-4 space-y-6 flex-1">
          {/* Vertical Line */}
          <div className="absolute right-[19px] top-4 bottom-4 w-px bg-muted" />

          {activities.map((activity) => {
            const Icon = iconMap[activity.iconType] || Clock;
            
            return (
              <div key={activity.id} className="relative flex items-start gap-4">
                {/* Timeline Node */}
                <div className="relative z-10 w-10 h-10 bg-white border-2 border-muted rounded-full flex items-center justify-center text-muted-foreground shrink-0 shadow-sm">
                  <Icon className="w-4 h-4" />
                </div>
                
                {/* Content */}
                <div className="pt-1 pb-2">
                  <p className="text-sm font-medium text-primary">
                    <span className="text-muted-foreground ml-1">{activity.action}</span>
                    <span className="font-bold">{activity.target}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

import React from 'react';
import { BookOpen, CheckCircle, Award, TrendingUp } from 'lucide-react';
import { mockStatistics } from '../../data/mockDashboardData';

const iconMap = {
  BookOpen: BookOpen,
  CheckCircle: CheckCircle,
  Award: Award,
  TrendingUp: TrendingUp,
};

export default function QuickStatistics() {
  const stats = mockStatistics;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = iconMap[stat.iconType] || BookOpen;
        
        return (
          <div key={stat.id} className="bg-white p-4 rounded-2xl border border-border flex items-center gap-4 hover:border-accent/30 transition-colors">
            <div className="p-3 bg-muted rounded-xl text-primary shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-primary font-heading leading-tight">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import StudentLayout from '../components/student/StudentLayout';
import WelcomeHero from '../components/dashboard/WelcomeHero';
import ContinueLearning from '../components/dashboard/ContinueLearning';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import MyCourses from '../components/dashboard/MyCourses';
import QuickStatistics from '../components/dashboard/QuickStatistics';
import RecentActivity from '../components/dashboard/RecentActivity';
import MotivationalCTA from '../components/dashboard/MotivationalCTA';

export default function StudentDashboardPage() {
  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-8">
        
        {/* Priority 1 & 2: Welcome and Overall Progress */}
        <WelcomeHero />

        {/* Priority 1 & 3: Continue Learning + Upcoming Tasks (Side by Side on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <ContinueLearning />
          </div>
          <div className="lg:col-span-1">
            <UpcomingTasks />
          </div>
        </div>

        {/* Priority 4: My Courses */}
        <MyCourses />

        {/* Priority 5: Statistics & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-heading font-bold text-primary px-1">نظرة سريعة</h3>
            <QuickStatistics />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>

        {/* Bottom: Motivational CTA */}
        <MotivationalCTA />
      </div>
    </StudentLayout>
  );
}

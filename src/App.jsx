import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import WhyTeacher from './components/WhyTeacher';
import Courses from './components/Courses';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Lazy-loaded pages for code splitting
const CoursesPage = React.lazy(() => import('./pages/CoursesPage'));
const CourseDetailsPage = React.lazy(() => import('./pages/CourseDetailsPage'));
const WalletPage = React.lazy(() => import('./pages/WalletPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const StudentDashboardPage = React.lazy(() => import('./pages/StudentDashboardPage'));
const MyCoursesPage = React.lazy(() => import('./pages/student/MyCoursesPage'));
const LearningPage = React.lazy(() => import('./pages/student/LearningPage'));
const ExamsPage = React.lazy(() => import('./pages/student/ExamsPage'));
const NotificationsPage = React.lazy(() => import('./pages/student/NotificationsPage'));
const ProfilePage = React.lazy(() => import('./pages/student/ProfilePage'));
const SupportPage = React.lazy(() => import('./pages/student/SupportPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Loading spinner shown while lazy-loaded pages are being fetched
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
        <p className="text-muted-foreground font-arabic text-sm">جاري التحميل...</p>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-arabic text-foreground overflow-x-hidden">
      <Navbar activePage="home" />
      <main>
        <Hero />
        <Benefits />
        <WhyTeacher />
        <Courses />
        <HowItWorks />
        <Features />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course-details/:courseId?" element={<CourseDetailsPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-dashboard" element={<StudentDashboardPage />} />
          
          {/* Student Platform Pages */}
          <Route path="/my-courses" element={<MyCoursesPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/support" element={<SupportPage />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

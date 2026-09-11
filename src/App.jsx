import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import CoursesPage from './pages/CoursesPage';

import CourseDetailsPage from './pages/CourseDetailsPage';
import WalletPage from './pages/WalletPage';
import LoginPage from './pages/LoginPage';
import StudentDashboardPage from './pages/StudentDashboardPage';
import MyCoursesPage from './pages/student/MyCoursesPage';
import LearningPage from './pages/student/LearningPage';
import ExamsPage from './pages/student/ExamsPage';
import NotificationsPage from './pages/student/NotificationsPage';
import ProfilePage from './pages/student/ProfilePage';
import SupportPage from './pages/student/SupportPage';

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
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
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
      </Routes>
    </>
  );
}

export default App;

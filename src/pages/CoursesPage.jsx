import React from 'react';
import Navbar from '../components/Navbar';
import CoursesHero from '../components/courses/CoursesHero';
import CoursesBreadcrumb from '../components/courses/CoursesBreadcrumb';
import CoursesDiscovery from '../components/courses/CoursesDiscovery';
import CoursesCTA from '../components/courses/CoursesCTA';
import Footer from '../components/Footer';

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background font-arabic text-foreground overflow-x-hidden">
      <Navbar activePage="courses" />
      <main>
        <CoursesHero />
        <CoursesBreadcrumb />
        <CoursesDiscovery />
        <CoursesCTA />
      </main>
      <Footer />
    </div>
  );
}

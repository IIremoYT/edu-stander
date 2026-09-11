import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseDetailsBreadcrumb from '../components/course-details/CourseDetailsBreadcrumb';
import CourseDetailsHero from '../components/course-details/CourseDetailsHero';
import PurchaseCard from '../components/course-details/PurchaseCard';
import CourseDescription from '../components/course-details/CourseDescription';
import WhatYouGet from '../components/course-details/WhatYouGet';
import CourseCurriculum from '../components/course-details/CourseCurriculum';
import WhoIsThisFor from '../components/course-details/WhoIsThisFor';
import CourseLearningMethod from '../components/course-details/CourseLearningMethod';
import CourseDetailsFinalCTA from '../components/course-details/CourseDetailsFinalCTA';
import PurchaseModal from '../components/course-details/PurchaseModal';
import StickyMobilePurchase from '../components/course-details/StickyMobilePurchase';

export default function CourseDetailsPage() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-arabic text-foreground overflow-x-hidden pb-16 md:pb-0">
      <Navbar 
        activePage="courses" 
        onCtaClick={handleOpenModal} 
        ctaText="اشترك الآن" 
      />
      
      <main>
        <CourseDetailsBreadcrumb />
        <CourseDetailsHero onPurchaseClick={handleOpenModal} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Main Content Area */}
            <div className="flex-1 order-2 lg:order-1 min-w-0">
              <CourseDescription />
              <WhatYouGet />
              <CourseCurriculum />
              <WhoIsThisFor />
              <CourseLearningMethod />
            </div>

            {/* Sidebar / Purchase Card (Desktop only, hidden on mobile) */}
            <div className="w-full lg:w-[320px] xl:w-[380px] flex-shrink-0 order-1 lg:order-2 hidden lg:block">
              <PurchaseCard onPurchaseClick={handleOpenModal} />
            </div>

          </div>
        </div>

        <div id="final-cta-section">
          <CourseDetailsFinalCTA onPurchaseClick={handleOpenModal} />
        </div>
      </main>

      <Footer />

      {/* Sticky Mobile CTA (visible < 768px) */}
      <StickyMobilePurchase onPurchaseClick={handleOpenModal} />

      {/* Purchase Modal */}
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

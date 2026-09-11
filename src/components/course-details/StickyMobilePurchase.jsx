import React, { useState, useEffect } from 'react';

export default function StickyMobilePurchase({ onPurchaseClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit to not cover the initial hero CTA immediately
      // and hide when nearing the footer or FinalCTA
      const heroBottom = 400; // rough estimate of hero height
      
      const finalCTAElement = document.getElementById('final-cta-section');
      let finalCTATop = Infinity;
      if (finalCTAElement) {
        finalCTATop = finalCTAElement.getBoundingClientRect().top + window.scrollY;
      }
      
      const scrolled = window.scrollY;
      
      // Hide on desktop (>=768px handled by CSS classes but we can check window.innerWidth too)
      if (window.innerWidth >= 768) {
         setIsVisible(false);
         return;
      }

      if (scrolled > heroBottom && scrolled < (finalCTATop - window.innerHeight + 100)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-border z-40 md:hidden pb-safe animate-in slide-in-from-bottom-full duration-300">
      <button 
        onClick={onPurchaseClick}
        className="w-full bg-accent text-white py-3.5 rounded-lg font-bold text-lg hover:bg-[#b07524] transition-colors shadow-lg flex items-center justify-center gap-2"
      >
        اشتري الكورس — 600 ج.م
      </button>
    </div>
  );
}

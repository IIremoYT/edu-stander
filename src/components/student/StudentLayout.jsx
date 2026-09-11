import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Topbar from '../dashboard/Topbar';
import MobileBottomNav from '../dashboard/MobileBottomNav';
import { motion, AnimatePresence } from 'framer-motion';

export default function StudentLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-arabic text-foreground flex overflow-hidden dir-rtl">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Topbar onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto pb-24 md:pb-8">
          {children}
        </main>

        {/* Mobile Navigation */}
        <MobileBottomNav />

        {/* Mobile Sidebar Overlay (Drawer) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: '100%' }} // RTL means slide from right
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 bottom-0 right-0 w-[80%] max-w-sm bg-[#0F1B2D] z-50 md:hidden overflow-y-auto shadow-2xl"
              >
                <div className="h-full [&>aside]:w-full [&>aside]:flex [&>aside]:min-h-full">
                  <Sidebar />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

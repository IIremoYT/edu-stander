import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet, PlusCircle } from 'lucide-react';

export default function Navbar({ activePage, onCtaClick, ctaText = 'ابدأ دلوقتي' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCoursesPage = location.pathname === '/courses';

  // Mock balance for visual prototype (can be changed to 300 or 0 to see other states)
  const mockBalance = 750;
  
  const getBalanceColor = (balance) => {
    if (balance === 0) return 'text-red-500';
    if (balance < 500) return 'text-amber-500';
    return 'text-primary';
  };
  const getBalanceBg = (balance) => {
    if (balance === 0) return 'bg-red-50 border-red-200';
    if (balance < 500) return 'bg-amber-50 border-amber-200';
    return 'bg-white border-border/80';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'الرئيسية', href: isCoursesPage ? '/' : '#hero', isRoute: isCoursesPage },
    { name: 'الكورسات', href: '/courses', isRoute: true, isActive: activePage === 'courses' },
    { name: 'عن المدرس', href: isCoursesPage ? '/#why-teacher' : '#why-teacher', isRoute: isCoursesPage },
    { name: 'كيف نتعلم', href: isCoursesPage ? '/#how-works' : '#how-works', isRoute: isCoursesPage },
    { name: 'أسئلة شائعة', href: isCoursesPage ? '/#faq' : '#faq', isRoute: isCoursesPage },
  ];

  const renderNavLink = (link, isMobile = false) => {
    const activeClass = link.isActive ? 'text-accent' : '';
    
    if (isMobile) {
      if (link.isRoute) {
        return (
          <Link
            key={link.name}
            to={link.href}
            onClick={closeMenu}
            className={`text-lg text-primary font-medium border-b border-border pb-3 ${activeClass}`}
          >
            {link.name}
          </Link>
        );
      }
      return (
        <a
          key={link.name}
          href={link.href}
          onClick={closeMenu}
          className={`text-lg text-primary font-medium border-b border-border pb-3 ${activeClass}`}
        >
          {link.name}
        </a>
      );
    }

    // Desktop
    if (link.isRoute) {
      return (
        <Link
          key={link.name}
          to={link.href}
          className={`font-medium hover:text-accent transition-colors relative group ${link.isActive ? 'text-accent' : 'text-primary'}`}
        >
          {link.name}
          <span className={`absolute -bottom-1 right-0 h-0.5 bg-accent transition-all duration-300 ${link.isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
      );
    }
    return (
      <a
        key={link.name}
        href={link.href}
        className="text-primary font-medium hover:text-accent transition-colors relative group"
      >
        {link.name}
        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
      </a>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading font-bold text-2xl text-primary flex items-baseline">
          Stander<span className="text-accent text-3xl leading-none">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => renderNavLink(link, false))}
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Wallet Balance Chip */}
          <Link 
            to="/wallet" 
            className={`flex items-center gap-2.5 px-4 py-2 rounded-md font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5 border ${getBalanceBg(mockBalance)}`}
          >
            <Wallet size={18} className="text-accent" />
            <span dir="rtl" className={getBalanceColor(mockBalance)}>
              رصيدك: {mockBalance} ج.م
            </span>
          </Link>

          {/* Main CTA Button */}
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="bg-accent text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            >
              {ctaText}
            </button>
          ) : (
            <Link
              to={isCoursesPage ? '/courses' : '/#final-cta'}
              className="bg-accent text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#b07524] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              {ctaText}
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-primary p-2 focus:outline-none"
          aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 pb-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex-1 flex flex-col gap-6">
          {navLinks.map((link) => renderNavLink(link, true))}
        </div>
        
        <div className="mt-auto pt-6 flex flex-col gap-4">
          {/* Mobile Wallet Widget */}
          <div className={`border rounded-xl p-4 flex flex-col gap-3 shadow-sm ${getBalanceBg(mockBalance)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Wallet size={20} className="text-accent" />
                <span>رصيد المحفظة</span>
              </div>
              <span className={`font-heading font-bold text-lg ${getBalanceColor(mockBalance)}`} dir="rtl">
                {mockBalance} ج.م
              </span>
            </div>
            <Link 
              to="/wallet" 
              onClick={closeMenu} 
              className="flex items-center justify-center gap-2 text-sm font-semibold text-accent hover:text-white hover:bg-accent transition-colors text-center w-full bg-white/50 border border-accent/20 py-2 rounded-md shadow-sm"
            >
              <PlusCircle size={16} />
              شحن المحفظة
            </Link>
          </div>

          {/* Mobile Main CTA */}
          {onCtaClick ? (
            <button
              onClick={() => {
                closeMenu();
                onCtaClick();
              }}
              className="bg-accent text-white text-center px-6 py-3.5 rounded-md font-semibold shadow-md cursor-pointer w-full text-lg"
            >
              {ctaText}
            </button>
          ) : (
            <Link
              to={isCoursesPage ? '/courses' : '/#final-cta'}
              onClick={closeMenu}
              className="bg-accent text-white text-center px-6 py-3.5 rounded-md font-semibold shadow-md w-full block text-lg"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}


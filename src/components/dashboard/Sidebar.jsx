import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  PlayCircle, 
  FileText, 
  Wallet, 
  Bell, 
  User, 
  HelpCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/student-dashboard', label: 'الرئيسية', icon: Home },
  { path: '/my-courses', label: 'كورساتي', icon: BookOpen },
  { path: '/learning', label: 'التعلم', icon: PlayCircle },
  { path: '/exams', label: 'الامتحانات', icon: FileText },
  { path: '/wallet', label: 'المحفظة', icon: Wallet },
  { path: '/notifications', label: 'الإشعارات', icon: Bell },
  { path: '/profile', label: 'الملف الشخصي', icon: User },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#0F1B2D] text-[#F0EDE6] min-h-screen sticky top-0 h-screen overflow-y-auto border-l border-white/10 shadow-2xl z-20">
      {/* Logo */}
      <div className="p-8 pb-4">
        <NavLink to="/" className="inline-block">
          <h1 className="text-3xl font-heading font-bold tracking-wider text-white">
            STANDER
            <span className="text-accent text-4xl leading-none">.</span>
          </h1>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                isActive
                  ? 'bg-white/10 text-accent font-semibold shadow-inner'
                  : 'text-[#8B9DB8] hover:text-white hover:bg-white/5'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute right-0 w-1.5 h-8 bg-accent rounded-l-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Divider */}
      <div className="px-8 py-4">
        <div className="h-px bg-white/10 w-full rounded-full"></div>
      </div>

      {/* Support / Bottom Actions */}
      <div className="px-4 pb-8">
        <NavLink 
          to="/support"
          className={({ isActive }) =>
            `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors font-medium ${
              isActive
                ? 'bg-white/10 text-accent font-semibold shadow-inner'
                : 'text-[#8B9DB8] hover:text-white hover:bg-white/5'
            }`
          }
        >
          <HelpCircle className="w-5 h-5" strokeWidth={2} />
          <span>الدعم</span>
        </NavLink>
      </div>
    </aside>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, PlayCircle, User } from 'lucide-react';

const mobileNavItems = [
  { path: '/student-dashboard', label: 'الرئيسية', icon: Home },
  { path: '/my-courses', label: 'كورساتي', icon: BookOpen },
  { path: '/learning', label: 'التعلم', icon: PlayCircle },
  { path: '/profile', label: 'الملف', icon: User },
];

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border pb-safe pt-2 px-4 flex justify-around items-center z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {mobileNavItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 min-w-[64px] transition-colors ${
              isActive ? 'text-accent' : 'text-muted-foreground hover:text-primary'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <item.icon
                className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : 'scale-100'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';
import { mockStudent } from '../../data/mockDashboardData';

export default function Topbar({ onMobileMenuToggle }) {
  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border py-4 px-6 flex items-center justify-between">
      {/* Mobile Menu Button & Brand */}
      <div className="flex items-center gap-4 md:hidden">
        <button 
          onClick={onMobileMenuToggle}
          className="text-foreground p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="font-heading font-bold text-xl text-primary">STANDER<span className="text-accent">.</span></span>
      </div>

      {/* Search - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:flex flex-1 max-w-md relative">
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="ابحث في كورساتك أو الدروس..."
          className="w-full bg-white border border-border rounded-full py-2.5 pr-12 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 md:gap-6 ml-0 md:ml-auto">
        {/* Wallet Balance */}
        <NavLink 
          to="/wallet"
          className="hidden sm:flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-full hover:shadow-md transition-shadow"
        >
          <span className="text-sm font-medium text-muted-foreground">رصيدك</span>
          <span className="text-sm font-bold text-primary">{mockStudent.walletBalance} ج.م</span>
        </NavLink>

        {/* Notifications */}
        <NavLink 
          to="/notifications"
          className="relative p-2 text-foreground hover:bg-black/5 rounded-full transition-colors"
        >
          <Bell className="w-6 h-6" />
          {mockStudent.notificationsCount > 0 && (
            <span className="absolute top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
              {mockStudent.notificationsCount}
            </span>
          )}
        </NavLink>

        {/* Profile */}
        <NavLink to="/profile" className="flex items-center gap-3 pl-2 border-r border-border md:border-none md:pl-0">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-sm font-bold text-primary">{mockStudent.name}</span>
            <span className="text-xs text-muted-foreground">{mockStudent.grade}</span>
          </div>
          <img 
            src={mockStudent.avatar} 
            alt="Profile Avatar" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
          />
        </NavLink>
      </div>
    </header>
  );
}

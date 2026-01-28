import React from 'react';
import { Home, Users, Cpu, Handshake, Mail } from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: Page.HOME, label: '首页', icon: <Home size={20} strokeWidth={1.5} /> },
    { id: Page.ABOUT, label: '关于我们', icon: <Users size={20} strokeWidth={1.5} /> },
    { id: Page.PRODUCT, label: '产品技术', icon: <Cpu size={20} strokeWidth={1.5} /> },
    { id: Page.COOPERATION, label: '合作与服务', icon: <Handshake size={20} strokeWidth={1.5} /> },
    { id: Page.CONTACT, label: '联系我们', icon: <Mail size={20} strokeWidth={1.5} /> },
  ];

  return (
    <aside className="fixed z-50 flex flex-col bg-stone-100/80 backdrop-blur-md w-[70px] h-screen border-stone-200 border-r pt-8 pb-8 top-0 left-0 items-center justify-between transition-all duration-300">
      {/* Logo */}
      <div 
        className="flex flex-col items-center gap-1 cursor-pointer group"
        onClick={() => onNavigate(Page.HOME)}
      >
        <div className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center text-white font-heading font-bold text-xs tracking-tighter transition-transform group-hover:scale-110">
          CA
        </div>
        <span className="text-[9px] tracking-widest font-heading font-light opacity-0 group-hover:opacity-100 transition-opacity absolute top-16 text-stone-600">
          CASI
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-6 w-full items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group relative p-3 rounded-xl transition-all duration-300 ${
              activePage === item.id 
                ? 'bg-stone-200 text-stone-900' 
                : 'text-stone-500 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            {item.icon}
            
            {/* Tooltip PBLK Style */}
            <span className="tooltip absolute left-14 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50 font-medium tracking-wide">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Status Placeholder - Removed "System Operational" as requested */}
      <div className="flex flex-col items-center gap-4">
        {/* Empty placeholder or remove entirely */}
      </div>
    </aside>
  );
};
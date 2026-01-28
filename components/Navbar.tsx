import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: Page.HOME, label: '首页' },
    { id: Page.ABOUT, label: '关于我们' },
    { id: Page.PRODUCT, label: '产品技术' },
    { id: Page.COOPERATION, label: '合作与服务' },
  ];

  const handleNavClick = (id: Page) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || mobileMenuOpen
            ? 'bg-stone-100/80 backdrop-blur-md border-stone-200 py-3' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick(Page.HOME)}
          >
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              CA
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading font-medium text-stone-900 text-sm tracking-tight leading-none">中科重仪</span>
              <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase leading-none mt-1">CASInstruments</span>
            </div>
          </div>

          {/* Desktop Navigation (Right Side) */}
          <div className="hidden md:flex items-center gap-8">
             {navItems.map(item => (
               <button
                 key={item.id}
                 onClick={() => handleNavClick(item.id)}
                 className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    activePage === item.id ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
                 }`}
               >
                 {item.label}
                 <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-stone-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                    activePage === item.id ? 'scale-x-100' : ''
                 }`}></span>
               </button>
             ))}
             
             {/* CTA Button: Dark Tech Card Button Style (Dynamic Beam) */}
             <button 
                onClick={() => handleNavClick(Page.CONTACT)}
                className="ml-6 group relative flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(28,25,23,0.2)]"
             >
                {/* Spinning Border Beam */}
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                
                {/* Default Border */}
                <span className="absolute inset-0 rounded-full bg-stone-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                
                {/* Button Content */}
                <span className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-stone-800 to-stone-950 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-colors duration-300">
                  联系我们
                </span>
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-stone-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-100/95 backdrop-blur-xl transition-transform duration-300 md:hidden flex flex-col justify-center items-center ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
         <div className="flex flex-col gap-8 text-center">
            {navItems.map(item => (
               <button
                 key={item.id}
                 onClick={() => handleNavClick(item.id)}
                 className={`text-2xl font-heading font-light tracking-tight ${
                    activePage === item.id ? 'text-stone-900 scale-110' : 'text-stone-500'
                 }`}
               >
                 {item.label}
               </button>
            ))}
            {/* Minimal Mono Link Style for Mobile CTA */}
            <button 
               onClick={() => handleNavClick(Page.CONTACT)}
               className="mt-8 group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-300"
            >
               <span className="relative">
                  Get in touch
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
               </span>
               <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
         </div>
      </div>
    </>
  );
};
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { CooperationPage } from './pages/CooperationPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === activePage) return;
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setActivePage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const renderPage = () => {
    switch (activePage) {
      case Page.HOME: return <HomePage onNavigate={handleNavigate} />;
      case Page.ABOUT: return <AboutPage />;
      case Page.PRODUCT: return <ProductPage />;
      case Page.COOPERATION: return <CooperationPage />;
      case Page.CONTACT: return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f4] flex flex-col font-sans text-stone-900 selection:bg-stone-300 selection:text-stone-900">
      {/* Top Navbar */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      {/* Main Content Area */}
      <main className="flex-grow w-full relative flex flex-col">
        <div 
          className={`flex-grow transition-opacity duration-500 ease-out ${
            isTransitioning ? 'opacity-0 blur-sm translate-y-4' : 'opacity-100 blur-0 translate-y-0'
          }`}
        >
          {renderPage()}
        </div>
        
        <Footer onNavigate={handleNavigate} />
      </main>
    </div>
  );
};

export default App;
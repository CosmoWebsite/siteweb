import React, { useState, useEffect } from 'react';
import { Menu, UtensilsCrossed, Star, Clock, MapPin, Phone, MessageSquare, ChevronRight, ExternalLink } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ClickCollect from './components/ClickCollect';
import Reviews from './components/Reviews';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import MenuHighlights from './components/MenuHighlights';
import Values from './components/Values';
import Restaurant from './components/Restaurant';
import Map from './components/Map';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    fr: [
      { label: 'Accueil', href: '#home' },
      { label: 'Menu', href: '#menu' },
      { label: 'Restaurant', href: '#restaurant' },
      { label: 'Click & Collect', href: '#click-collect' },
      { label: 'Contact', href: '#contact' }
    ],
    en: [
      { label: 'Home', href: '#home' },
      { label: 'Menu', href: '#menu' },
      { label: 'Restaurant', href: '#restaurant' },
      { label: 'Click & Collect', href: '#click-collect' },
      { label: 'Contact', href: '#contact' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const navHeight = 80; // Hauteur de la barre de navigation
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczPfVEvULcTDfcgvT51mw1wQwx00jNnFsDsV1EUoQ-5MAwvCYWl9cmu9Q_f11-f3JwoIlaf6g1tuBBjzdq96C787atv1JiufVIXDyitI30UqHLg24J0kSnos0sfFSw_au_cPK30W_QRQQJALGylSlnJ4=w394-h352-s-no-gm?authuser=0"
                alt="COSMO BURGER"
                className="h-16 w-auto cursor-pointer"
                onClick={handleLogoClick}
              />
              {/* Navigation pour desktop */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems[language].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-[#41522f] hover:text-[#707c62] transition-colors text-sm font-medium"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageToggle language={language} setLanguage={setLanguage} />
              {/* Bouton menu mobile */}
              <button
                className="md:hidden text-[#41522f] hover:text-[#707c62] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="hidden md:block bg-[#41522f] text-white px-4 py-2 rounded-md hover:bg-[#707c62] transition-colors"
              >
                {language === 'fr' ? 'Réserver' : 'Book a Table'}
              </a>
            </div>
          </div>
          
          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {navItems[language].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-[#41522f] hover:text-[#707c62] transition-colors text-sm font-medium"
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="text-[#41522f] hover:text-[#707c62] transition-colors text-sm font-medium"
                >
                  {language === 'fr' ? 'Réserver' : 'Book a Table'}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home">
          <HeroSection language={language} />
        </section>
        <Values language={language} />
        <section id="menu">
          <MenuHighlights language={language} />
        </section>
        <section id="click-collect">
          <ClickCollect language={language} />
        </section>
        <section id="restaurant">
          <Restaurant language={language} />
        </section>
        <Delivery language={language} />
        <Reviews language={language} />
        <section id="contact">
          <Contact language={language} />
          <Map language={language} />
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
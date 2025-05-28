import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header: React.FC = () => {
  // Opção de efeito ao rolar (scroll)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
      
       

        {/* Navegação desktop */}
        <div className="hidden md:flex items-center space-x-8">
          
          <Button href="#comprar" size="sm">
            GARANTIR MINHA VAGA
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

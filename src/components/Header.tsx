import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.defaultMessage)}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-crema/95 backdrop-blur-md shadow-sm border-b border-gris-perla/20 py-1'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <button
              id="logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center transition-transform hover:scale-[1.02] duration-300"
              aria-label="CREALIA Inicio"
            >
              <Logo className={`text-taupe-dark transition-all duration-300 ${isScrolled ? 'w-[110px] md:w-[130px]' : 'w-[130px] md:w-[165px]'}`} />
            </button>
          </div>

          {/* DESKTOP NAV */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('coleccion')}
              className="text-sm tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 font-medium"
            >
              Colección
            </button>
            <button
              onClick={() => scrollToSection('sobre-crealia')}
              className="text-sm tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 font-medium"
            >
              Sobre Crealia
            </button>
            <button
              onClick={() => scrollToSection('cuidados')}
              className="text-sm tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 font-medium"
            >
              Cuidados
            </button>
            <button
              onClick={() => scrollToSection('como-comprar')}
              className="text-sm tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 font-medium"
            >
              Contacto
            </button>
          </nav>

          {/* WHATSAPP CTA */}
          <div className="hidden md:flex items-center">
            <a
              id="header-wa-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <MessageCircle size={14} />
              Comprar por WhatsApp
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-soft hover:text-taupe-dark p-2 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden absolute top-full left-0 right-0 bg-crema border-b border-gris-perla/30 shadow-lg py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4 items-center">
            <button
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('coleccion')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded transition-colors"
            >
              Colección
            </button>
            <button
              onClick={() => scrollToSection('sobre-crealia')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded transition-colors"
            >
              Sobre Crealia
            </button>
            <button
              onClick={() => scrollToSection('cuidados')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded transition-colors"
            >
              Cuidados
            </button>
            <button
              onClick={() => scrollToSection('como-comprar')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded transition-colors"
            >
              Contacto
            </button>
            <a
              id="mobile-wa-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-colors"
            >
              <MessageCircle size={16} />
              Comprar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

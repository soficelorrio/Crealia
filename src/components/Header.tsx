import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ShoppingBag, Search, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollectionSubmenuOpen, setIsCollectionSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, openCart } = useCart();

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

  useEffect(() => {
    const handleSyncSearch = (e: CustomEvent<{ query: string }>) => {
      if (e.detail?.query !== undefined) {
        setSearchQuery(e.detail.query);
      }
    };
    window.addEventListener('search-query-changed', handleSyncSearch as EventListener);
    return () => window.removeEventListener('search-query-changed', handleSyncSearch as EventListener);
  }, []);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    window.dispatchEvent(new CustomEvent('search-query-changed', { detail: { query: val } }));
    
    // Auto scroll to collection if user starts typing and isn't at collection section yet
    if (val.trim()) {
      const col = document.getElementById('coleccion');
      if (col && window.scrollY < col.offsetTop - 250) {
        col.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const clearHeaderSearch = () => {
    handleSearchChange('');
  };

  const scrollToSection = (id: string, tab?: string) => {
    setIsOpen(false);
    setIsCollectionSubmenuOpen(false);
    if (tab) {
      window.dispatchEvent(new CustomEvent('set-category-tab', { detail: tab }));
    }
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
          ? 'bg-crema/95 backdrop-blur-md shadow-sm border-b border-gris-perla/20 py-2'
          : 'bg-crema/80 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          {/* LOGO & INICIO */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <button
              id="logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center transition-transform hover:scale-[1.02] duration-300"
              aria-label="CREALIA Inicio"
            >
              <Logo className={`text-taupe-dark transition-all duration-300 ${isScrolled ? 'w-[95px] sm:w-[110px] md:w-[130px]' : 'w-[110px] sm:w-[130px] md:w-[150px]'}`} />
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden lg:inline-block text-xs font-medium tracking-wider font-sans text-dark-soft/80 hover:text-taupe-dark transition-colors duration-300 uppercase cursor-pointer"
            >
              Inicio
            </button>
          </div>

          {/* CENTER SEARCH BAR (LARGO Y ESTÉTICO) */}
          <div className="flex-1 max-w-2xl mx-1 sm:mx-3 md:mx-6">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3.5 sm:pl-4 flex items-center pointer-events-none text-taupe group-focus-within:text-taupe-dark transition-colors">
                <Search size={17} />
              </div>
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim()) {
                    const col = document.getElementById('coleccion');
                    if (col && window.scrollY < col.offsetTop - 250) {
                      col.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                placeholder="Buscar collar o producto (ej: Electra, Corazón, Halo, Volt...)"
                className="w-full pl-9 sm:pl-11 pr-8 sm:pr-10 py-2 sm:py-2.5 bg-blanco-roto/90 backdrop-blur-md border border-gris-perla/50 hover:border-taupe/40 rounded-full text-xs sm:text-sm text-dark-soft placeholder:text-dark-soft/45 focus:outline-none focus:ring-2 focus:ring-taupe/30 focus:border-taupe focus:bg-blanco-roto shadow-sm focus:shadow-md transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={clearHeaderSearch}
                  className="absolute inset-y-0 right-0 pr-2.5 sm:pr-3.5 flex items-center text-dark-soft/50 hover:text-dark-soft transition-colors cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT CTAS, CART & HAMBURGER MENU BUTTON */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
            <button
              id="header-cart-btn"
              onClick={openCart}
              className="relative inline-flex items-center gap-1.5 bg-blanco-roto/90 hover:bg-blanco-roto text-taupe-dark px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-medium tracking-wider uppercase border border-gris-perla/30 transition-all duration-300 hover:shadow-sm cursor-pointer"
              aria-label="Ver carrito"
            >
              <ShoppingBag size={15} />
              <span className="hidden sm:inline">Carrito</span>
              {totalItems > 0 && (
                <span className="bg-taupe text-blanco-roto text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-sans">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              id="header-wa-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden xl:inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            {/* BOTÓN DE MENÚ 3 LÍNEAS (HAMBURGER MENU) */}
            <button
              id="menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 text-dark-soft hover:text-taupe-dark hover:bg-blanco-roto/60 rounded-full transition-colors cursor-pointer flex items-center justify-center border border-transparent hover:border-gris-perla/30 ml-0.5"
              aria-label="Abrir menú de navegación"
              title="Menú"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY DE NAVEGACIÓN DROPDOWN */}
      {isOpen && (
        <div id="main-nav-overlay" className="absolute top-full left-0 right-0 bg-crema/98 backdrop-blur-lg border-b border-gris-perla/30 shadow-xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="max-w-md mx-auto flex flex-col space-y-2.5 items-center">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsCollectionSubmenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer"
            >
              Inicio
            </button>

            {/* SUBMENÚ DE COLECCIÓN */}
            <div className="w-full">
              <button
                onClick={() => setIsCollectionSubmenuOpen(!isCollectionSubmenuOpen)}
                className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Colección</span>
                <ChevronDown size={18} className={`transition-transform duration-200 text-taupe ${isCollectionSubmenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCollectionSubmenuOpen && (
                <div className="bg-blanco-roto/90 rounded-2xl my-1 p-2 space-y-1 border border-gris-perla/40 shadow-inner flex flex-col items-center animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => scrollToSection('coleccion', 'all')}
                    className="text-sm font-sans text-dark-soft hover:text-taupe-dark font-medium py-2 px-4 w-full text-center hover:bg-crema/60 rounded-xl transition-colors cursor-pointer"
                  >
                    Todos los productos
                  </button>
                  <button
                    onClick={() => scrollToSection('coleccion', 'necklace')}
                    className="text-sm font-sans text-dark-soft hover:text-taupe-dark font-medium py-2 px-4 w-full text-center hover:bg-crema/60 rounded-xl transition-colors cursor-pointer"
                  >
                    Collares
                  </button>
                  <button
                    onClick={() => scrollToSection('coleccion', 'bracelet')}
                    className="text-sm font-sans text-dark-soft hover:text-taupe-dark font-medium py-2 px-4 w-full text-center hover:bg-crema/60 rounded-xl transition-colors cursor-pointer"
                  >
                    Pulseras
                  </button>
                  <button
                    onClick={() => scrollToSection('coleccion', 'men')}
                    className="text-sm font-sans text-dark-soft hover:text-taupe-dark font-medium py-2 px-4 w-full text-center hover:bg-crema/60 rounded-xl transition-colors cursor-pointer"
                  >
                    Hombres
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('sobre-crealia')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer"
            >
              Sobre Crealia
            </button>
            <button
              onClick={() => scrollToSection('cuidados')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer"
            >
              Cuidados
            </button>
            <button
              onClick={() => scrollToSection('resenas')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer"
            >
              Reseñas
            </button>
            <button
              onClick={() => scrollToSection('como-comprar')}
              className="text-base tracking-wider font-sans text-dark-soft py-2 w-full text-center hover:bg-blanco-roto rounded-lg transition-colors font-medium cursor-pointer"
            >
              Contacto
            </button>
            <a
              id="mobile-wa-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center inline-flex items-center justify-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase transition-colors mt-2"
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

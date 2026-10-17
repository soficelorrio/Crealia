import { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Flame,
  Sparkles,
  ShoppingBag,
  Check,
  Eye,
  Camera,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductDetailModal from './ProductDetailModal';

// Curated list of all-time community top favorites
const FEATURED_ITEMS_CONFIG = [
  { id: 'pulsera-mystery', tag: '✨ Edición Especial', badgeColor: 'bg-amber-100 text-amber-900 border-amber-300' },
  { id: 'collar-nara', tag: '1º Más Pedido', badgeColor: 'bg-amber-100 text-amber-900 border-amber-300' },
  { id: 'choker-cosmo', tag: 'Choker Estrella', badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  { id: 'collar-volans', tag: 'Favorito del Mes', badgeColor: 'bg-rose-100 text-rose-900 border-rose-300' },
  { id: 'choker-desire', tag: 'Top Elegancia', badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  { id: 'collar-lunna', tag: 'Top Trending', badgeColor: 'bg-purple-100 text-purple-900 border-purple-300' },
  { id: 'choker-night', tag: 'Nuevo Favorito', badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300' },
  { id: 'collar-alaska', tag: 'El Infaltable', badgeColor: 'bg-stone-200 text-stone-900 border-stone-300' },
  { id: 'choker-sunshine', tag: 'Brillo Radiante', badgeColor: 'bg-amber-100 text-amber-900 border-amber-300' },
];

const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per page

export default function FeaturedNecklaces() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const touchStartX = useRef<number | null>(null);
  const { addToCart } = useCart();

  // Find featured products from PRODUCTS list
  const featuredProducts = FEATURED_ITEMS_CONFIG.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return product ? { ...product, tag: item.tag, badgeColor: item.badgeColor } : null;
  }).filter((p): p is (Product & { tag: string; badgeColor: string }) => p !== null);

  // Responsive items per page: 4 on desktop, 2 on tablet, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);

  // Clamp current page if total pages change
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Auto-rotation timer (pauses on hover)
  useEffect(() => {
    if (isHovered || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovered, totalPages, currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleAddToCart = (e: MouseEvent, product: Product) => {
    e.stopPropagation();
    if (product.outOfStock) return;
    addToCart(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // Touch swipe support on mobile
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const currentProducts = featuredProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="mas-pedidos"
      className="py-14 sm:py-20 bg-blanco-roto/70 border-y border-gris-perla/20 relative overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-taupe/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-taupe/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CLEAN, CENTERED SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-11">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-taupe/10 border border-taupe/20 text-taupe-dark text-[10px] font-semibold tracking-[0.2em] uppercase mb-2.5">
            <Flame size={11} className="text-amber-600 fill-amber-500" />
            <span>Los Favoritos de la Comunidad</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" title="Rotación en vivo" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-taupe-dark font-light tracking-wide">
            Los Más Pedidos
          </h2>
          <p className="font-sans text-xs sm:text-sm text-dark-soft/75 max-w-md mx-auto mt-1 leading-relaxed">
            Modelos destacados que van rotando automáticamente entre los collares y chokers más elegidos.
          </p>
        </div>

        {/* DYNAMIC ROTATING GRID WITH SMOOTH ANIMATEPRESENCE TRANSITION */}
        <div className="min-h-[360px] sm:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${itemsPerPage}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            >
              {currentProducts.map((product, idx) => {
                const isAdded = !!addedIds[product.id];

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group relative flex flex-col bg-crema/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-taupe/15 shadow-sm hover:shadow-xl hover:shadow-taupe/10 transition-all duration-300 cursor-pointer"
                  >
                    {/* IMAGE & BADGE */}
                    <div className="relative aspect-square overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-3">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-contain ${product.imagePosition || 'object-center'} transform group-hover:scale-108 transition-transform duration-500 ease-out`}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-crema/40 rounded-xl border border-dashed border-taupe/30">
                          <Camera className="w-8 h-8 text-taupe/50 mb-2" />
                          <span className="text-xs font-serif text-taupe-dark font-medium">Foto en actualización</span>
                          <span className="text-[10px] text-dark-soft/60 mt-1 font-sans">Próximamente nueva imagen</span>
                        </div>
                      )}

                      {/* BEST SELLER BADGE */}
                      <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-sm ${product.badgeColor} flex items-center gap-1`}>
                          <Star size={10} className="fill-current" />
                          {product.tag}
                        </span>
                      </div>

                      {/* QUICK VIEW HOVER OVERLAY */}
                      <div className="absolute inset-0 bg-taupe-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="bg-blanco-roto/95 text-taupe-dark px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <Eye size={14} />
                          Ver Detalles
                        </span>
                      </div>
                    </div>

                    {/* INFO CONTENT */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-serif text-base sm:text-lg text-taupe-dark font-semibold group-hover:text-taupe transition-colors">
                            {product.name}
                          </h3>
                          <Sparkles size={14} className="text-amber-500/80" />
                        </div>
                        <p className="font-sans text-xs text-dark-soft/75 line-clamp-2 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* PRICE & ADD ACTION */}
                      <div className="pt-3 border-t border-gris-perla/20 flex items-center justify-between">
                        <div>
                          <span className="block text-[9px] tracking-widest text-dark-soft/50 uppercase font-sans">Precio</span>
                          <span className="font-sans text-xs sm:text-sm font-bold text-taupe uppercase tracking-wide">
                            {product.pricePlaceholder}
                          </span>
                        </div>

                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-700 text-white shadow-sm'
                              : 'bg-taupe hover:bg-taupe-dark text-blanco-roto shadow-sm'
                          }`}
                        >
                          {isAdded ? <Check size={13} /> : <ShoppingBag size={13} />}
                          <span>{isAdded ? 'Agregado' : 'Agregar'}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* COMPACT BOTTOM CONTROLS (ARROWS, NUMBERS & PROGRESS - DISCREET & MOBILE-OPTIMIZED) */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-6 sm:mt-8">
          {/* COMPACT PREV BUTTON */}
          <button
            onClick={handlePrev}
            className="p-1 sm:p-1.5 rounded-full text-dark-soft/60 hover:text-taupe-dark hover:bg-blanco-roto/90 border border-gris-perla/40 transition-colors cursor-pointer"
            aria-label="Anterior tanda"
            title="Anterior"
          >
            <ChevronLeft size={14} />
          </button>

          {/* COMPACT PROGRESS PILL DOTS */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => {
              const isActive = idx === currentPage;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`relative h-1.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive ? 'w-5 sm:w-6 bg-taupe/30' : 'w-1.5 bg-gris-perla/60 hover:bg-taupe/40'
                  }`}
                  aria-label={`Ir a la tanda ${idx + 1}`}
                >
                  {isActive && !isHovered && (
                    <motion.div
                      key={`progress-${currentPage}`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                      className="absolute inset-y-0 left-0 bg-taupe rounded-full"
                    />
                  )}
                  {isActive && isHovered && (
                    <div className="w-full h-full bg-taupe rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* COMPACT NUMBERS COUNTER */}
          <span className="text-[10px] font-mono font-medium text-dark-soft/50 tracking-wider px-0.5">
            0{currentPage + 1} / 0{totalPages}
          </span>

          {/* COMPACT NEXT BUTTON */}
          <button
            onClick={handleNext}
            className="p-1 sm:p-1.5 rounded-full text-dark-soft/60 hover:text-taupe-dark hover:bg-blanco-roto/90 border border-gris-perla/40 transition-colors cursor-pointer"
            aria-label="Siguiente tanda"
            title="Siguiente"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* DETALLE DE PRODUCTO EXPANDIDO (MODAL) */}
        <AnimatePresence>
          {selectedProduct && (
            <ProductDetailModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

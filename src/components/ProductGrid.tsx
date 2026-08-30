import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Search, X, RotateCcw } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'necklace' | 'bracelet' | 'men'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleSetTab = (e: CustomEvent<string>) => {
      if (e.detail === 'men' || e.detail === 'necklace' || e.detail === 'bracelet' || e.detail === 'all') {
        setActiveTab(e.detail as any);
      }
    };
    window.addEventListener('set-category-tab', handleSetTab as EventListener);
    return () => window.removeEventListener('set-category-tab', handleSetTab as EventListener);
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

  const updateSearch = (query: string) => {
    setSearchQuery(query);
    window.dispatchEvent(new CustomEvent('search-query-changed', { detail: { query } }));
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    // Category tab filter
    const matchesTab =
      activeTab === 'all'
        ? true
        : activeTab === 'men'
        ? product.forMen === true
        : product.category === activeTab;

    if (!matchesTab) return false;

    // Search query filter
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const nameMatch = product.name.toLowerCase().includes(query);
    const descMatch = product.description.toLowerCase().includes(query);
    const catMatch = (product.category === 'necklace' ? 'collar collares' : 'pulsera pulseras').includes(query);
    const detailsMatch = product.details.some((d) => d.toLowerCase().includes(query));

    return nameMatch || descMatch || catMatch || detailsMatch;
  });

  const clearSearch = () => {
    updateSearch('');
  };

  return (
    <section id="coleccion" className="py-16 sm:py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blanco-roto border border-gris-perla/30 text-taupe text-[10px] font-medium tracking-[0.2em] uppercase mb-4">
            <Sparkles size={10} />
            Nueva Colección
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-3">
            Nuestra Selección
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-lg mx-auto leading-relaxed">
            Diseños plateados minimalistas pensados para complementarse y formar parte de tu historia diaria.
          </p>
        </div>

        {/* CATEGORY TABS & POPULAR TAGS CONTAINER */}
        <div className="max-w-4xl mx-auto mb-10 space-y-5">
          {/* CATEGORY TABS */}
          <div className="flex justify-center">
            <div className="bg-blanco-roto/80 backdrop-blur-sm p-1 rounded-full border border-gris-perla/40 flex items-center space-x-1 overflow-x-auto max-w-full shadow-sm">
              <button
                onClick={() => setActiveTab('all')}
                className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'all' ? 'text-blanco-roto' : 'text-dark-soft/75 hover:text-taupe'
                }`}
              >
                {activeTab === 'all' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-taupe rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                Todas
              </button>
              <button
                onClick={() => setActiveTab('necklace')}
                className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'necklace' ? 'text-blanco-roto' : 'text-dark-soft/75 hover:text-taupe'
                }`}
              >
                {activeTab === 'necklace' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-taupe rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                Collares
              </button>
              <button
                onClick={() => setActiveTab('bracelet')}
                className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'bracelet' ? 'text-blanco-roto' : 'text-dark-soft/75 hover:text-taupe'
                }`}
              >
                {activeTab === 'bracelet' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-taupe rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                Pulseras
              </button>
              <button
                onClick={() => setActiveTab('men')}
                className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'men' ? 'text-blanco-roto' : 'text-dark-soft/75 hover:text-taupe'
                }`}
              >
                {activeTab === 'men' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-taupe rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                Hombres
              </button>
            </div>
          </div>

          {/* POPULAR SEARCH QUICK TAGS */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-dark-soft/75">
            <span className="font-medium text-taupe-dark mr-1">Búsquedas populares:</span>
            {['Flash', 'Venom', 'Soul', 'Summer', 'Alma', 'Nara', 'Atlas'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  if (tag === 'Hombres') {
                    setActiveTab('men');
                    updateSearch('');
                  } else {
                    updateSearch(tag);
                  }
                }}
                className={`px-3 py-1 rounded-full border text-xs transition-all cursor-pointer font-medium ${
                  searchQuery.toLowerCase() === tag.toLowerCase() || (tag === 'Hombres' && activeTab === 'men')
                    ? 'bg-taupe text-blanco-roto border-taupe shadow-sm'
                    : 'bg-blanco-roto/80 border-gris-perla/50 hover:border-taupe/50 hover:text-taupe-dark text-dark-soft/80'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* ACTIVE SEARCH STATUS INDICATOR */}
          {searchQuery && (
            <div className="flex items-center justify-between px-3 py-2 bg-blanco-roto/60 rounded-xl border border-gris-perla/30 text-xs text-dark-soft/80">
              <span>
                Buscando: "<strong className="text-taupe-dark">{searchQuery}</strong>" — <strong className="text-taupe-dark">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </span>
              <button
                onClick={clearSearch}
                className="text-taupe hover:underline text-xs flex items-center gap-1 cursor-pointer font-medium ml-2"
              >
                <RotateCcw size={12} />
                Limpiar
              </button>
            </div>
          )}
        </div>

        {/* PRODUCTS GRID OR EMPTY STATE */}
        <div className="min-h-[350px]">
          {filteredProducts.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${searchQuery}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-16 px-4 bg-blanco-roto/40 rounded-3xl border border-dashed border-gris-perla max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-taupe/10 text-taupe mx-auto flex items-center justify-center mb-4">
                <Search size={22} />
              </div>
              <h3 className="font-serif text-lg text-taupe-dark font-medium mb-2">
                No encontramos productos
              </h3>
              <p className="text-xs text-dark-soft/70 mb-6 leading-relaxed">
                No hay resultados para "<span className="font-semibold">{searchQuery}</span>". Probá buscar otro nombre o limpiar los filtros.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTab('all');
                }}
                className="inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
              >
                <RotateCcw size={14} />
                Ver toda la colección
              </button>
            </div>
          )}
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

        {/* BOTTOM INFORMAL FOOTNOTE */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs italic text-dark-soft/50">
            ¿Tenés dudas sobre las medidas o materiales? Hacé clic en "Consultar" y te asesoramos en el momento.
          </p>
        </div>
      </div>
    </section>
  );
}

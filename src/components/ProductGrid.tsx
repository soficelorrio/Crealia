import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductDetailModal from './ProductDetailModal';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'necklace' | 'bracelet'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeTab === 'all') return true;
    return product.category === activeTab;
  });

  return (
    <section id="coleccion" className="py-20 sm:py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blanco-roto border border-gris-perla/30 text-taupe text-[10px] font-medium tracking-[0.2em] uppercase mb-4">
            <Sparkles size={10} />
            Nueva Colección
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-4">
            Nuestra Selección
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-lg mx-auto leading-relaxed">
            Diseños plateados minimalistas pensados para complementarse y formar parte de tu historia diaria.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="bg-blanco-roto/60 backdrop-blur-sm p-1 rounded-full border border-gris-perla/30 flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
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
              className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
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
              className={`relative px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 cursor-pointer ${
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
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="min-h-[400px]">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onSelect={setSelectedProduct} />
              ))}
            </AnimatePresence>
          </motion.div>
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

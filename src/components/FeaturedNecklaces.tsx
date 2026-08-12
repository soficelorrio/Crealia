import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame, Sparkles, ShoppingBag, Check, Eye } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductDetailModal from './ProductDetailModal';

// List of top requested items
const FEATURED_NECKLACE_IDS = [
  { id: 'collar-nara', tag: '1º Más Pedido', badgeColor: 'bg-amber-100 text-amber-900 border-amber-300' },
  { id: 'collar-alaska', tag: 'Favorito del Mes', badgeColor: 'bg-rose-100 text-rose-900 border-rose-300' },
  { id: 'collar-halo', tag: 'El Infaltable', badgeColor: 'bg-stone-200 text-stone-900 border-stone-300' },
  { id: 'pulsera-travel', tag: 'Top Trending', badgeColor: 'bg-purple-100 text-purple-900 border-purple-300' },
];

export default function FeaturedNecklaces() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();

  // Find featured products from PRODUCTS list
  const featuredProducts = FEATURED_NECKLACE_IDS.map((item) => {
    const product = PRODUCTS.find((p) => p.id === item.id);
    return product ? { ...product, tag: item.tag, badgeColor: item.badgeColor } : null;
  }).filter((p): p is (Product & { tag: string; badgeColor: string }) => p !== null);

  const handleAddToCart = (e: MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="mas-pedidos" className="py-16 sm:py-20 bg-blanco-roto/70 border-y border-gris-perla/20 relative overflow-hidden">
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-taupe/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-taupe/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-taupe/10 border border-taupe/20 text-taupe-dark text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
            <Flame size={12} className="text-amber-600 fill-amber-500" />
            Los Favoritos de la Comunidad
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-3">
            Los Más Pedidos
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-xl mx-auto leading-relaxed">
            Descubrí los modelos más consultados y elegidos por nuestras clientas. Diseños versátiles que transforman cualquier look.
          </p>
        </div>

        {/* FEATURED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => {
            const isAdded = !!addedIds[product.id];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedProduct(product)}
                className="group relative flex flex-col bg-crema/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-taupe/15 shadow-sm hover:shadow-xl hover:shadow-taupe/10 transition-all duration-300 cursor-pointer"
              >
                {/* IMAGE & BADGE */}
                <div className="relative aspect-square overflow-hidden bg-blanco-roto">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover ${product.imagePosition || 'object-center'} transform group-hover:scale-108 transition-transform duration-700 ease-out`}
                  />

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
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-lg text-taupe-dark font-semibold group-hover:text-taupe transition-colors">
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
                      <span className="font-sans text-sm font-bold text-taupe uppercase tracking-wide">
                        {product.pricePlaceholder}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
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

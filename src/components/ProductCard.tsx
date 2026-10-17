import { motion } from 'motion/react';
import { MessageCircle, Info, ShoppingBag, Check, Camera, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { useState, MouseEvent } from 'react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addToCart } = useCart();

  const queryMessage = BRAND_CONFIG.productInquiryMessage(product.name);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(queryMessage)}`;

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    if (product.outOfStock || product.isUpcoming) return;
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const isMystery = product.id === 'pulsera-mystery';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      onClick={() => onSelect(product)}
      className={`group relative flex ${
        isMystery
          ? 'col-span-1 sm:col-span-2 lg:col-span-2 flex-col sm:flex-row bg-gradient-to-br from-[#FFFDF9] via-blanco-roto to-[#FAF5EB] border-2 border-amber-400/60 shadow-xl shadow-amber-900/10 ring-1 ring-amber-400/30'
          : 'flex-col bg-blanco-roto border border-gris-perla/20 hover:shadow-xl hover:shadow-taupe/5'
      } rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer`}
    >
      {/* PRODUCT IMAGE CONTAINER */}
      <div className={`relative ${isMystery ? 'w-full sm:w-1/2 aspect-square flex-shrink-0' : 'w-full aspect-square'} overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-3`}>
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain ${product.imagePosition || 'object-center'} transform group-hover:scale-105 transition-transform duration-500 ease-out`}
          />
        ) : product.isUpcoming ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-crema/60 to-taupe/10 rounded-xl border border-taupe/20">
            <Sparkles className="w-7 h-7 text-taupe mb-2 animate-pulse" />
            <span className="text-xs font-serif text-taupe-dark font-medium tracking-wide">Próximo Lanzamiento</span>
            <span className="text-[10px] text-dark-soft/70 mt-1 font-sans">Exclusivo nueva colección</span>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-crema/40 rounded-xl border border-dashed border-taupe/30">
            <Camera className="w-8 h-8 text-taupe/50 mb-2" />
            <span className="text-xs font-serif text-taupe-dark font-medium">Foto en actualización</span>
            <span className="text-[10px] text-dark-soft/60 mt-1 font-sans">Próximamente nueva imagen</span>
          </div>
        )}
        
        {/* CATEGORY TAG OR MYSTERY BADGE */}
        {isMystery ? (
          <span className="absolute top-4 left-4 bg-amber-500 text-white font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1.5 animate-pulse z-10 border border-white/30">
            <Sparkles size={11} className="fill-current" />
            ¡Edición Sorpresa!
          </span>
        ) : (
          <span className="absolute top-4 left-4 bg-crema/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase text-taupe-dark border border-blanco-roto/50">
            {product.category === 'necklace' ? 'Collar' : 'Pulsera'}
            {product.forMen && <span className="text-taupe font-semibold ml-1">· Hombre</span>}
          </span>
        )}

        {/* OUT OF STOCK OR UPCOMING BADGE */}
        {product.outOfStock ? (
          <span className="absolute top-4 right-4 bg-stone-900/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-sm border border-white/20 z-10">
            Sin Stock
          </span>
        ) : product.isUpcoming ? (
          <span className="absolute top-4 right-4 bg-taupe/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase text-blanco-roto shadow-sm border border-blanco-roto/20 z-10">
            Próximamente
          </span>
        ) : null}

        {/* DETAILS BUTTON OVERLAY */}
        {product.details && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
            className={`absolute bottom-4 right-4 bg-blanco-roto/95 hover:bg-taupe hover:text-blanco-roto transition-colors p-2 rounded-full shadow shadow-dark-soft/5 text-taupe duration-300 cursor-pointer z-10`}
            title="Ver especificaciones"
          >
            <Info size={16} />
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className={`flex-1 ${isMystery ? 'p-5 sm:p-7' : 'p-5'} flex flex-col justify-between`}>
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              {isMystery && (
                <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-amber-800 bg-amber-100/90 px-2.5 py-0.5 rounded-full mb-1.5 border border-amber-300">
                  ✨ Nuevo Ingreso Destacado
                </span>
              )}
              <h3 className={`font-serif ${isMystery ? 'text-xl sm:text-2xl text-taupe-dark font-semibold' : 'text-lg text-taupe-dark font-medium'} group-hover:text-taupe transition-colors duration-300`}>
                {product.name}
              </h3>
            </div>
            {product.outOfStock && (
              <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                Agotado
              </span>
            )}
          </div>
          <p className={`font-sans ${isMystery ? 'text-xs sm:text-sm text-dark-soft/90 mb-3' : 'text-xs sm:text-sm text-dark-soft/85 mb-4'} leading-relaxed min-h-[40px]`}>
            {product.description}
          </p>

          {isMystery && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-taupe-dark">
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-amber-600">🎁</span>
                <span>Modelo sorpresa exclusivo</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-amber-600">✨</span>
                <span>Acero quirúrgico inalterable</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-amber-600">📏</span>
                <span>Largo adaptable con extensor</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="text-amber-600">💛</span>
                <span>Packaging listo para regalo</span>
              </div>
            </div>
          )}

          {/* SLIDE-OUT PRODUCT DETAILS SPECS */}
          {showDetails && product.details && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 pt-3 border-t border-gris-perla/30 text-[11px] text-dark-soft/75 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-taupe" />
                  <span>{detail}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* FOOTER CONTROLS */}
        <div className={`pt-3 border-t ${isMystery ? 'border-amber-200/60' : 'border-gris-perla/10'} flex items-center justify-between`}>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-dark-soft/55 uppercase font-sans">Precio</span>
            <span className={`font-sans ${isMystery ? 'text-base sm:text-lg font-bold text-amber-900' : 'text-xs font-semibold text-taupe'} uppercase tracking-wider`}>
              {product.pricePlaceholder}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {product.outOfStock ? (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase bg-stone-100 text-stone-500 border border-stone-200">
                Sin stock
              </span>
            ) : product.isUpcoming ? (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase bg-taupe/15 text-taupe-dark border border-taupe/30">
                Próximamente
              </span>
            ) : (
              <button
                onClick={handleAddToCart}
                className={`inline-flex items-center gap-1.5 ${
                  isMystery ? 'px-4 sm:px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-900/10' : 'px-3.5 py-2 bg-taupe hover:bg-taupe-dark text-blanco-roto shadow-sm'
                } rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer`}
                title="Agregar al carrito"
              >
                {added ? <Check size={15} /> : <ShoppingBag size={15} />}
                <span>{added ? 'Agregado' : 'Agregar'}</span>
              </button>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 bg-blanco-roto hover:bg-taupe/10 text-taupe-dark border border-taupe/20 rounded-full transition-colors duration-300"
              title={product.outOfStock ? "Consultar reposición por WhatsApp" : "Consultar por WhatsApp"}
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

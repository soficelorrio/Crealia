import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, Check, MessageCircle, Eye, Gift, ShieldCheck, Ruler, Heart } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { useCart } from '../context/CartContext';

interface MysteryBraceletSpotlightProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function MysteryBraceletSpotlight({ product, onSelect }: MysteryBraceletSpotlightProps) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const queryMessage = BRAND_CONFIG.productInquiryMessage(product.name);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(queryMessage)}`;

  const handleAddToCart = (e: MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={() => onSelect(product)}
      className="relative w-full rounded-3xl overflow-hidden mb-10 bg-gradient-to-br from-[#FFFDF9] via-[#FAF4EA] to-[#F3E8D7] border-2 border-amber-400/60 shadow-2xl shadow-amber-900/10 ring-2 ring-amber-300/40 cursor-pointer group"
    >
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-taupe/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-7 lg:p-9 items-center relative z-10">
        
        {/* LEFT: PROMINENT LARGE IMAGE */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/90 shadow-md border border-amber-200/60 p-2 sm:p-3 flex items-center justify-center">
            <img
              src={product.image || '/images/mystery_bracelet.jpg'}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* FLOATING SPARKLE BADGE */}
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-amber-500 text-white font-bold px-3 py-1.5 rounded-full text-[10px] sm:text-xs tracking-wider uppercase shadow-lg flex items-center gap-1.5 border border-white/30 animate-pulse">
                <Sparkles size={13} className="fill-current text-amber-200" />
                ¡Edición Especial Sorpresa!
              </span>
            </div>

            {/* QUICK VIEW HOVER OVERLAY */}
            <div className="absolute inset-0 bg-taupe-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl pointer-events-none">
              <span className="bg-white/95 text-taupe-dark px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
                <Eye size={14} />
                Ver Detalles
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT & CALL TO ACTIONS */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            {/* TOP PILL BADGE */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2">
              <Sparkles size={11} className="text-amber-600 fill-amber-500" />
              <span>Novedad Destacada · Crealia Joyas</span>
            </div>

            {/* TITLE & PRICE */}
            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-taupe-dark font-normal tracking-tight group-hover:text-amber-900 transition-colors">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-1.5 bg-amber-200/50 px-3.5 py-1 rounded-2xl border border-amber-300/60">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-900/70">Precio</span>
                <span className="font-sans text-xl sm:text-2xl font-bold text-amber-950">
                  {product.pricePlaceholder}
                </span>
              </div>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-taupe font-normal mb-3">
              Una pulsera sorpresa seleccionada exclusivamente para vos
            </p>

            <p className="font-sans text-xs sm:text-sm text-dark-soft/85 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* KEY FEATURES PILLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-amber-200/50 text-xs text-taupe-dark">
                <Gift size={15} className="text-amber-600 flex-shrink-0" />
                <span className="font-medium">Modelo sorpresa seleccionado con amor</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-amber-200/50 text-xs text-taupe-dark">
                <ShieldCheck size={15} className="text-amber-600 flex-shrink-0" />
                <span className="font-medium">Acero quirúrgico inalterable</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-amber-200/50 text-xs text-taupe-dark">
                <Ruler size={15} className="text-amber-600 flex-shrink-0" />
                <span className="font-medium">Largo regulable de 18 cm con extensor</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-amber-200/50 text-xs text-taupe-dark">
                <Heart size={15} className="text-amber-600 flex-shrink-0" />
                <span className="font-medium">Packaging especial listo para regalo</span>
              </div>
            </div>
          </div>

          {/* ACTIONS ROW */}
          <div className="pt-3 border-t border-amber-200/60 flex flex-wrap items-center gap-3">
            <button
              onClick={handleAddToCart}
              className={`inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer ${
                added
                  ? 'bg-emerald-700 text-white shadow-emerald-900/20'
                  : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-900/15 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {added ? <Check size={16} /> : <ShoppingBag size={16} />}
              <span>{added ? '¡Agregada al Carrito!' : 'Agregar al Carrito — $10.000'}</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect(product);
              }}
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/80 hover:bg-white text-taupe-dark border border-amber-300/70 transition-all cursor-pointer shadow-sm"
            >
              <Eye size={14} />
              <span>Ver Detalles</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white/80 hover:bg-white text-emerald-700 border border-emerald-300/60 rounded-full transition-colors shadow-sm ml-auto"
              title="Consultar por WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Instagram, Ruler, Sparkles, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/products';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [copied, setCopied] = useState(false);
  const queryMessage = BRAND_CONFIG.productInquiryMessage(product.name);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(queryMessage)}`;
  const instagramDirectUrl = `https://ig.me/m/${BRAND_CONFIG.instagram}`;

  const handleInstagramClick = async () => {
    try {
      await navigator.clipboard.writeText(queryMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error('Error al copiar el texto:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* BACKDROP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-dark-soft/40 backdrop-blur-md"
      />

      {/* MODAL CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="relative bg-crema w-full max-w-4xl h-auto max-h-[90vh] md:h-[650px] md:max-h-[85vh] rounded-3xl shadow-2xl overflow-y-auto md:overflow-hidden border border-blanco-roto/60 flex flex-col md:flex-row z-10"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-blanco-roto/90 hover:bg-taupe hover:text-blanco-roto text-taupe-dark p-2 rounded-full transition-colors duration-300 z-20 cursor-pointer shadow-sm border border-gris-perla/20"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>

        {/* LEFT COLUMN: IMAGE */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-auto md:h-full relative bg-blanco-roto/40 flex items-center justify-center p-6 sm:p-8 md:p-12 border-b md:border-b-0 md:border-r border-gris-perla/20 flex-shrink-0">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm border border-gris-perla/10 relative group">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* FLOATING CATEGORY TAG */}
            <span className="absolute top-4 left-4 bg-crema/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase text-taupe-dark border border-blanco-roto/50">
              {product.category === 'necklace' ? 'Collar' : 'Pulsera'}
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: INFORMATION */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-between md:h-full md:overflow-y-auto">
          <div>
            {/* CATEGORY PATH */}
            <div className="flex items-center gap-1 text-[10px] font-sans tracking-widest text-dark-soft/50 uppercase mb-3">
              <span>Colección</span>
              <ChevronRight size={10} />
              <span>{product.category === 'necklace' ? 'Collares' : 'Pulseras'}</span>
            </div>

            {/* PRODUCT NAME */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-taupe-dark font-medium tracking-wide mb-2">
              {product.name}
            </h2>

            {/* PRICE */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-[10px] tracking-widest text-dark-soft/45 uppercase font-sans">Precio:</span>
              <span className="font-sans text-xl font-semibold text-taupe tracking-wider">
                {product.pricePlaceholder}
              </span>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-6">
              <p className="font-sans text-sm sm:text-base text-dark-soft/85 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* SPECIFICATIONS GRID */}
            <div className="space-y-4 py-5 border-t border-b border-gris-perla/20 mb-6">
              {/* MATERIAL */}
              {product.material && (
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blanco-roto border border-gris-perla/20 text-taupe mt-0.5">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-sans tracking-wider text-dark-soft/50 uppercase">Material</span>
                    <span className="font-sans text-xs sm:text-sm text-taupe-dark font-medium">
                      {product.material}
                    </span>
                  </div>
                </div>
              )}

              {/* DIMENSIONS */}
              {product.dimensions && (
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-blanco-roto border border-gris-perla/20 text-taupe mt-0.5">
                    <Ruler size={14} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-sans tracking-wider text-dark-soft/50 uppercase">Medidas</span>
                    <span className="font-sans text-xs sm:text-sm text-taupe-dark font-medium">
                      {product.dimensions}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* ADDITIONAL HIGHLIGHTS */}
            {product.details && product.details.length > 0 && (
              <div className="mb-8">
                <span className="block text-[10px] font-sans tracking-widest text-dark-soft/50 uppercase mb-3">Detalles del diseño</span>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-dark-soft/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-taupe/60 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="space-y-3 pt-4 border-t border-gris-perla/10">
            <span className="block text-center text-[10px] tracking-wider text-dark-soft/55 uppercase font-sans mb-1">
              ¿Te encanta? Consultanos sin compromiso:
            </span>

            {/* COPIED TOAST FOR INSTAGRAM */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 5 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 5 }}
                  className="bg-taupe/10 border border-taupe/20 text-taupe-dark text-center py-2 px-3 rounded-2xl text-[11px] font-medium leading-normal tracking-wide overflow-hidden"
                >
                  ✨ ¡Mensaje de consulta copiado! Podés pegarlo en el chat de Instagram.
                </motion.div>
              )}
            </AnimatePresence>

            {/* WHATSAPP CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md shadow-taupe/10 cursor-pointer"
            >
              <MessageCircle size={16} />
              Consultar por WhatsApp
            </a>

            {/* INSTAGRAM CTA */}
            <a
              href={instagramDirectUrl}
              target="_blank"
              rel="noreferrer"
              onClick={handleInstagramClick}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-blanco-roto hover:bg-taupe/5 text-taupe-dark border border-taupe/30 px-6 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              <Instagram size={16} />
              Consultar por Instagram
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

import { motion } from 'motion/react';
import { MessageCircle, Info } from 'lucide-react';
import { Product } from '../types';
import { BRAND_CONFIG } from '../data/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  key?: string | number;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const queryMessage = BRAND_CONFIG.productInquiryMessage(product.name);
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(queryMessage)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onSelect(product)}
      className="group relative flex flex-col bg-blanco-roto rounded-2xl overflow-hidden border border-gris-perla/20 transition-all duration-300 hover:shadow-xl hover:shadow-taupe/5 cursor-pointer"
    >
      {/* PRODUCT IMAGE CONTAINER */}
      <div className="relative aspect-square overflow-hidden bg-crema">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* CATEGORY TAG */}
        <span className="absolute top-4 left-4 bg-crema/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase text-taupe-dark border border-blanco-roto/50">
          {product.category === 'necklace' ? 'Collar' : 'Pulsera'}
        </span>

        {/* DETAILS BUTTON OVERLAY */}
        {product.details && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }}
            className="absolute bottom-4 right-4 bg-blanco-roto/95 hover:bg-taupe hover:text-blanco-roto transition-colors p-2 rounded-full shadow shadow-dark-soft/5 text-taupe duration-300 cursor-pointer z-10"
            title="Ver especificaciones"
          >
            <Info size={16} />
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg text-taupe-dark font-medium group-hover:text-taupe transition-colors duration-300 mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-dark-soft/85 leading-relaxed mb-4 min-h-[40px]">
            {product.description}
          </p>

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
        <div className="pt-3 border-t border-gris-perla/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-dark-soft/55 uppercase font-sans">Precio</span>
            <span className="font-sans text-xs font-semibold text-taupe uppercase tracking-wider">
              {product.pricePlaceholder}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-taupe hover:bg-taupe-dark text-blanco-roto px-4 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300"
          >
            <MessageCircle size={14} />
            Consultar
          </a>
        </div>
      </div>
    </motion.div>
  );
}

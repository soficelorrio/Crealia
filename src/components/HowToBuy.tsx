import { motion } from 'motion/react';
import { MessageCircle, Instagram, ShoppingBag, Truck } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function HowToBuy() {
  const steps = [
    {
      number: 1,
      icon: <ShoppingBag className="w-5 h-5 text-taupe-dark" />,
      title: 'Elegí tu producto favorito',
      description: 'Navegá nuestro catálogo online y seleccioná los collares o pulseras que querés sumar a tus looks.'
    },
    {
      number: 2,
      icon: <MessageCircle className="w-5 h-5 text-taupe-dark" />,
      title: 'Consultá por WhatsApp o Instagram',
      description: 'Hacé clic en el botón de consulta de la joya para enviarnos un chat directo, o escribinos por mensaje privado en Instagram.'
    },
    {
      number: 3,
      icon: <ShoppingBag className="w-5 h-5 text-taupe-dark" />, // Wait, let's use a wallet or card icon for pay
      title: 'Coordinamos pago y entrega',
      description: 'Te confirmamos la disponibilidad de stock al instante, y coordinamos el pago (por transferencia) y la opción de entrega que prefieras.'
    },
    {
      number: 4,
      icon: <Truck className="w-5 h-5 text-taupe-dark" />,
      title: 'Recibí tu joya lista para usar',
      description: 'Preparamos tu pedido con un packaging delicado y perfumado, listo para obsequiar a esa persona especial o regalarte a vos misma.'
    }
  ];

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.defaultMessage)}`;
  const instagramUrl = `https://instagram.com/${BRAND_CONFIG.instagram}`;

  return (
    <section id="como-comprar" className="py-20 sm:py-24 bg-blanco-roto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] text-taupe uppercase mb-3 block">
            Guía de Compra
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-4">
            Cómo Comprar
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-lg mx-auto leading-relaxed">
            Te ofrecemos un proceso súper simple y personalizado, sin la frialdad de un carrito automático. Te asesoramos en cada paso.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* HORIZONTAL LINE (DESKTOP) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-taupe/15 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center z-10 group"
            >
              {/* STEP NUMBER BADGE */}
              <div className="w-12 h-12 rounded-full bg-crema border border-taupe/20 flex items-center justify-center font-serif text-base text-taupe-dark font-medium shadow-sm group-hover:bg-taupe group-hover:text-blanco-roto group-hover:border-taupe transition-all duration-300 mb-5">
                {step.number}
              </div>

              {/* STEP DETAILS */}
              <h3 className="font-serif text-base text-taupe-dark font-medium mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-dark-soft/75 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CONVENIENT ACTION BOX */}
        <div className="mt-16 bg-crema p-8 rounded-3xl border border-gris-perla/20 max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-lg text-taupe-dark font-medium mb-3">
            ¿Tenés alguna consulta rápida?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-dark-soft/70 mb-6 max-w-md mx-auto">
            Hablemos directo por la plataforma que te resulte más cómoda. Estamos en línea para ayudarte a elegir.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300 shadow-sm"
            >
              <MessageCircle size={14} />
              Escribir a WhatsApp
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blanco-roto hover:bg-blanco-roto/80 text-taupe-dark border border-taupe/20 px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase transition-colors duration-300"
            >
              <Instagram size={14} />
              Escribir a Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

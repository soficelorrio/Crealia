import { motion } from 'motion/react';
import { ArrowRight, Instagram } from 'lucide-react';
import { BRAND_CONFIG } from '../data/products';

export default function Hero() {
  const instagramUrl = `https://instagram.com/${BRAND_CONFIG.instagram}`;

  const handleScrollToCollection = () => {
    const element = document.getElementById('coleccion');
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

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-crema pt-24 pb-16 overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-blanco-roto rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gris-perla/30 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-xs font-semibold tracking-[0.3em] text-taupe uppercase mb-4 block">
                CREALIA JOYERÍA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-taupe-dark font-light leading-tight sm:leading-none tracking-tight mb-6"
            >
              Joyas delicadas <br />
              <span className="italic font-normal font-serif">para todos los días</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-base sm:text-lg text-dark-soft/90 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Joyas para llevar un poco de magia todos los días.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={handleScrollToCollection}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
              >
                Ver colección
                <ArrowRight size={16} />
              </button>
              
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-taupe/40 hover:border-taupe text-taupe-dark hover:bg-blanco-roto px-8 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
              >
                <Instagram size={16} />
                Consultar por Instagram
              </a>
            </motion.div>
          </div>

          {/* FEATURED IMAGE */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-taupe/10 border border-blanco-roto"
            >
              <img
                src="/src/assets/images/collares_mixtos.png"
                alt="Joyas delicadas CREALIA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-soft/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

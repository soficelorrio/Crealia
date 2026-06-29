import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre-crealia" className="py-20 sm:py-24 bg-blanco-roto overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* PHOTO SIDE */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-crema"
            >
              <img
                src="/src/assets/images/joyas_detalle_1782771929275.jpg"
                alt="Detalle de joyería CREALIA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-taupe-dark/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 bg-crema/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-medium tracking-[0.15em] text-taupe-dark">
                FILOSOFÍA SIMPLE
              </div>
            </motion.div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto lg:mx-0"
            >
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-taupe uppercase mb-3 block">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-6">
                Sobre Crealia
              </h2>
              <div className="h-0.5 w-12 bg-taupe/30 mb-8 mx-auto lg:mx-0" />
              
              <p className="font-sans text-base sm:text-lg text-dark-soft/90 leading-relaxed mb-6">
                Crealia nace como una marca de joyas pensadas para acompañar lo cotidiano. Piezas delicadas, simples y con personalidad, diseñadas para combinarse, regalarse y usarse todos los días.
              </p>
              
              <p className="font-sans text-sm text-dark-soft/70 leading-relaxed mb-8">
                Creemos que la joyería no tiene que ser reservada únicamente para ocasiones especiales. Cada una de nuestras piezas está seleccionada con el propósito de aportar luminosidad y sutileza a tus días comunes, convirtiéndolos en algo único.
              </p>

              {/* BRAND BULLET TRAITS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-crema text-taupe-dark mt-0.5">
                    <Heart size={14} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-taupe-dark">Diseños Diarios</h4>
                    <p className="font-sans text-xs text-dark-soft/65">Estética informal y delicada.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-crema text-taupe-dark mt-0.5">
                    <Heart size={14} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-taupe-dark">Ideal para Regalar</h4>
                    <p className="font-sans text-xs text-dark-soft/65">Vienen listas para obsequiar.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

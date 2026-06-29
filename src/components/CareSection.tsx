import { motion } from 'motion/react';
import { Droplets, Inbox, Sparkles, ShieldAlert } from 'lucide-react';

export default function CareSection() {
  const cares = [
    {
      id: 'care-1',
      icon: <Droplets className="w-5 h-5 text-taupe" />,
      title: 'Evitá Líquidos',
      description: 'Evitá el contacto directo con agua, perfumes, cremas, aceites o cloro para preservar el brillo.'
    },
    {
      id: 'care-2',
      icon: <Inbox className="w-5 h-5 text-taupe" />,
      title: 'Guardado Seco',
      description: 'Guardá cada pieza en su bolsita individual o un joyero cerrado, protegido de la humedad.'
    },
    {
      id: 'care-3',
      icon: <Sparkles className="w-5 h-5 text-taupe" />,
      title: 'Limpieza Delicada',
      description: 'Frotá suavemente tu joya con un paño de microfibra o algodón seco para retirar impurezas.'
    },
    {
      id: 'care-4',
      icon: <ShieldAlert className="w-5 h-5 text-taupe" />,
      title: 'Evitá Tirones o Golpes',
      description: 'Tratalas con suavidad al ponértelas y sacártelas, cuidando de no darles tirones fuertes.'
    }
  ];

  return (
    <section id="cuidados" className="py-20 sm:py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] text-taupe uppercase mb-3 block">
            Larga Durabilidad
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-4">
            Cuidados de tus Joyas
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-lg mx-auto leading-relaxed">
            Nuestras piezas están pensadas para usarse todos los días. Con estos simples hábitos, vas a lograr mantener su brillo por mucho más tiempo.
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cares.map((care, index) => (
            <motion.div
              key={care.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blanco-roto/80 p-6 rounded-2xl border border-gris-perla/20 hover:border-taupe/30 hover:bg-blanco-roto hover:shadow-lg hover:shadow-taupe/5 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-crema rounded-full mb-4 border border-gris-perla/20">
                {care.icon}
              </div>
              <h3 className="font-serif text-base text-taupe-dark font-medium mb-2">
                {care.title}
              </h3>
              <p className="font-sans text-xs text-dark-soft/75 leading-relaxed">
                {care.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

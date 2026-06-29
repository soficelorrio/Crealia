import { BRAND_CONFIG } from '../data/products';
import { Instagram, MessageCircle, Mail, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const instagramUrl = `https://instagram.com/${BRAND_CONFIG.instagram}`;
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(BRAND_CONFIG.defaultMessage)}`;

  return (
    <footer id="footer" className="bg-crema border-t border-gris-perla/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAIN FOOTER LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-gris-perla/20">
          
          {/* COLUMN 1: BRAND LOGO & MOTTO */}
          <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">
            <Logo size="140px" className="text-taupe-dark mb-2 -ml-3" />
            <p className="font-sans text-xs sm:text-sm text-dark-soft/70 mb-6 max-w-sm mx-auto md:mx-0 leading-relaxed text-center md:text-left">
              Joyas delicadas para todos los días. Diseños simples, femeninos e informales pensados para complementar tu personalidad cotidiana.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blanco-roto hover:bg-taupe hover:text-blanco-roto text-taupe-dark flex items-center justify-center border border-gris-perla/20 transition-all duration-300"
                aria-label="Seguinos en Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blanco-roto hover:bg-taupe hover:text-blanco-roto text-taupe-dark flex items-center justify-center border border-gris-perla/20 transition-all duration-300"
                aria-label="Contactanos por WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-serif text-sm font-medium text-taupe-dark tracking-wider uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('coleccion')}
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors duration-200"
                >
                  Colección
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre-crealia')}
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors duration-200"
                >
                  Sobre Crealia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cuidados')}
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors duration-200"
                >
                  Cuidados de Joyas
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFORMATION WITH PLACEHOLDERS */}
          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-medium text-taupe-dark tracking-wider uppercase mb-5">
              Contacto y Consultas
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Instagram size={16} className="text-taupe shrink-0" />
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors"
                >
                  @{BRAND_CONFIG.instagram}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <MessageCircle size={16} className="text-taupe shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors"
                >
                  +{BRAND_CONFIG.whatsappNumber} <span className="text-[10px] text-dark-soft/40">(WhatsApp)</span>
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail size={16} className="text-taupe shrink-0" />
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  className="font-sans text-xs sm:text-sm text-dark-soft/75 hover:text-taupe transition-colors break-all"
                >
                  {BRAND_CONFIG.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 font-sans text-[10px] text-dark-soft/40 italic">
              * Hacé clic en cualquiera de los datos para comunicarte directo.
            </p>
          </div>

        </div>

        {/* BOTTOM METADATA & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dark-soft/50 flex items-center gap-1">
            &copy; {new Date().getFullYear()} CREALIA. Hecho con
            <Heart size={10} className="text-taupe fill-taupe" /> para acompañar tu día a día.
          </p>

          <button
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-1.5 font-sans text-xs font-medium text-taupe hover:text-taupe-dark transition-colors py-1 cursor-pointer"
            aria-label="Volver arriba"
          >
            Volver arriba
            <ArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

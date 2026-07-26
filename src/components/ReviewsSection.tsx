import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, CheckCircle2, HeartHandshake, Quote, Send, X } from 'lucide-react';
import { Review } from '../types';
import { PRODUCTS } from '../data/products';

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sofía M.',
    rating: 5,
    comment: 'Me encantó la calidad. Es delicada, cómoda y queda hermosa para todos los días.',
    date: '2026-07-10',
    status: 'approved'
  },
  {
    id: 'rev-2',
    name: 'Martina R.',
    rating: 5,
    comment: 'Compré un collar y llegó divino. La presentación es muy cuidada y se nota el detalle.',
    date: '2026-07-14',
    status: 'approved'
  }
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const stored = localStorage.getItem('crealia_reviews');
      if (stored) {
        const parsed: Review[] = JSON.parse(stored);
        // Combine initial sample reviews with any stored ones ensuring no duplicates
        const initialIds = new Set(INITIAL_REVIEWS.map((r) => r.id));
        const userSaved = parsed.filter((r) => !initialIds.has(r.id));
        return [...INITIAL_REVIEWS, ...userSaved];
      }
    } catch {
      // Fallback
    }
    return INITIAL_REVIEWS;
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  
  // Validation state
  const [errors, setErrors] = useState<{ name?: string; rating?: string; comment?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('crealia_reviews', JSON.stringify(reviews));
    } catch (e) {
      console.error('Error saving reviews to localStorage:', e);
    }
  }, [reviews]);

  const validate = () => {
    const newErrors: { name?: string; rating?: string; comment?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor, ingresá tu nombre.';
    }
    if (!rating || rating < 1 || rating > 5) {
      newErrors.rating = 'Por favor, seleccioná una calificación de 1 a 5 estrellas.';
    }
    if (!comment.trim()) {
      newErrors.comment = 'Por favor, escribí un comentario.';
    } else if (comment.length > 300) {
      newErrors.comment = 'El comentario no puede superar los 300 caracteres.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newReview: Review = {
      id: 'rev-' + Date.now(),
      name: name.trim(),
      product: selectedProduct ? selectedProduct : undefined,
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending' // Pending approval requirement
    };

    setReviews((prev) => [newReview, ...prev]);

    // Reset Form & Show confirmation message
    setName('');
    setSelectedProduct('');
    setRating(5);
    setComment('');
    setErrors({});
    setIsSubmitted(true);

    // Auto-hide success message after 6 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsFormOpen(false);
    }, 6000);
  };

  // Only show approved reviews in the public grid
  const approvedReviews = reviews.filter((r) => r.status === 'approved');

  return (
    <section id="resenas" className="py-20 sm:py-24 bg-blanco-roto/40 border-t border-b border-gris-perla/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-sans text-xs font-semibold tracking-[0.25em] text-taupe uppercase mb-3 block">
            Experiencias Reales
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-taupe-dark font-light tracking-wide mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="font-sans text-sm text-dark-soft/75 max-w-lg mx-auto leading-relaxed mb-6">
            Cada detalle de nuestras joyas está pensado para acompañarte en tu día a día. Conocé la opinión de quienes ya eligen Crealia.
          </p>

          {/* RATING SUMMARY BADGE */}
          <div className="inline-flex items-center gap-3 bg-crema px-5 py-2.5 rounded-full border border-gris-perla/30 shadow-xs mb-8">
            <div className="flex text-amber-700/80 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <span className="font-serif text-sm font-medium text-taupe-dark">
              5.0 / 5.0
            </span>
            <span className="text-[11px] font-sans text-dark-soft/50 border-l border-gris-perla/40 pl-3">
              Valoración promedio
            </span>
          </div>

          {/* CTA BUTTON TO TOGGLE FORM */}
          <div>
            {!isFormOpen && (
              <button
                onClick={() => {
                  setIsFormOpen(true);
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5"
              >
                <MessageSquarePlus size={16} />
                Dejá tu reseña
              </button>
            )}
          </div>
        </div>

        {/* REVIEW FORM COLLAPSIBLE / MODAL PANEL */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto mb-16 overflow-hidden"
            >
              <div className="bg-crema p-6 sm:p-8 rounded-3xl border border-gris-perla/30 shadow-md relative">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full text-dark-soft/50 hover:text-taupe-dark hover:bg-blanco-roto transition-colors"
                  aria-label="Cerrar formulario"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-full bg-taupe/10 text-taupe-dark">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-taupe-dark font-medium">
                      Queremos saber tu opinión
                    </h3>
                    <p className="text-xs font-sans text-dark-soft/60">
                      Tu experiencia nos ayuda a seguir cuidando cada detalle.
                    </p>
                  </div>
                </div>

                {/* SUCCESS NOTIFICATION */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 border border-emerald-200/80 text-emerald-900 p-6 rounded-2xl text-center space-y-3"
                  >
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="font-serif text-lg font-medium text-emerald-950">
                      ¡Muchas gracias por compartir tu experiencia!
                    </h4>
                    <p className="font-sans text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Gracias por tu reseña. Será revisada antes de publicarse.
                    </p>
                    <button
                      onClick={() => setIsFormOpen(false)}
                      className="inline-block mt-2 text-xs font-sans font-semibold text-emerald-900 underline hover:text-emerald-950"
                    >
                      Cerrar
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NOMBRE */}
                    <div>
                      <label className="block font-sans text-xs font-semibold text-taupe-dark uppercase tracking-wider mb-2">
                        Nombre <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Ej: Sofía M."
                        className={`w-full bg-blanco-roto px-4 py-3 rounded-xl border font-sans text-sm text-dark-soft placeholder:text-dark-soft/30 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                            : 'border-gris-perla/40 focus:border-taupe focus:ring-1 focus:ring-taupe/30'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-500 mt-1.5 font-sans">{errors.name}</p>
                      )}
                    </div>

                    {/* PRODUCTO COMPRADO (OPCIONAL) */}
                    <div>
                      <label className="block font-sans text-xs font-semibold text-taupe-dark uppercase tracking-wider mb-2">
                        Producto comprado <span className="text-dark-soft/40 font-normal lowercase">(opcional)</span>
                      </label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        className="w-full bg-blanco-roto px-4 py-3 rounded-xl border border-gris-perla/40 font-sans text-sm text-dark-soft focus:outline-none focus:border-taupe focus:ring-1 focus:ring-taupe/30 transition-all cursor-pointer"
                      >
                        <option value="">Seleccionar producto (opcional)</option>
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.name}>
                            {prod.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* CALIFICACIÓN CON ESTRELLAS */}
                    <div>
                      <label className="block font-sans text-xs font-semibold text-taupe-dark uppercase tracking-wider mb-2">
                        Calificación <span className="text-rose-500">*</span>
                      </label>
                      <div className="flex items-center gap-2 pt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => {
                              setRating(star);
                              if (errors.rating) setErrors((prev) => ({ ...prev, rating: undefined }));
                            }}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
                            aria-label={`Calificar con ${star} estrellas`}
                          >
                            <Star
                              size={26}
                              className={
                                star <= (hoverRating || rating)
                                  ? 'text-amber-700/80 fill-amber-700/80 transition-colors'
                                  : 'text-gris-perla/60 fill-transparent transition-colors'
                              }
                            />
                          </button>
                        ))}
                        <span className="ml-2 font-sans text-xs text-dark-soft/60 font-medium">
                          {hoverRating || rating} de 5 estrellas
                        </span>
                      </div>
                      {errors.rating && (
                        <p className="text-xs text-rose-500 mt-1.5 font-sans">{errors.rating}</p>
                      )}
                    </div>

                    {/* COMENTARIO */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-sans text-xs font-semibold text-taupe-dark uppercase tracking-wider">
                          Comentario <span className="text-rose-500">*</span>
                        </label>
                        <span
                          className={`text-[11px] font-sans ${
                            comment.length > 280 ? 'text-amber-600 font-bold' : 'text-dark-soft/40'
                          }`}
                        >
                          {comment.length} / 300
                        </span>
                      </div>
                      <textarea
                        rows={4}
                        maxLength={300}
                        value={comment}
                        onChange={(e) => {
                          setComment(e.target.value);
                          if (errors.comment) setErrors((prev) => ({ ...prev, comment: undefined }));
                        }}
                        placeholder="Contanos qué te pareció tu joya, la atención o el envío..."
                        className={`w-full bg-blanco-roto p-4 rounded-xl border font-sans text-sm text-dark-soft placeholder:text-dark-soft/30 focus:outline-none transition-all resize-none ${
                          errors.comment
                            ? 'border-rose-400 focus:ring-1 focus:ring-rose-400'
                            : 'border-gris-perla/40 focus:border-taupe focus:ring-1 focus:ring-taupe/30'
                        }`}
                      />
                      {errors.comment && (
                        <p className="text-xs text-rose-500 mt-1.5 font-sans">{errors.comment}</p>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-5 py-2.5 rounded-full text-xs font-medium font-sans text-dark-soft/70 hover:text-taupe-dark transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
                      >
                        <Send size={14} />
                        Enviar reseña
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* VISIBLE APPROVED REVIEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {approvedReviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-blanco-roto/90 p-6 rounded-2xl border border-gris-perla/20 hover:border-taupe/30 hover:bg-blanco-roto hover:shadow-lg hover:shadow-taupe/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* QUOTE ICON & STARS */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-700/80 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote size={20} className="text-taupe/20" />
                </div>

                {/* COMMENT */}
                <p className="font-sans text-xs text-dark-soft/85 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              {/* REVIEWER INFO */}
              <div className="pt-4 border-t border-gris-perla/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-medium text-taupe-dark">
                    {rev.name}
                  </h4>
                  {rev.product && (
                    <span className="block text-[10px] font-sans text-taupe uppercase tracking-wider">
                      {rev.product}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-sans text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50">
                  <CheckCircle2 size={10} /> Compra verificada
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

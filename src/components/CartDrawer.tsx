import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../data/products';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, closeCart, totalPrice, totalItems, clearCart } = useCart();

  const generateWhatsAppMessage = () => {
    const itemsList = cart
      .map((item) => `• ${item.product.name} × ${item.quantity}`)
      .join('\n');

    return `Hola, quiero consultar por los siguientes productos:\n\n${itemsList}\n\nMuchas gracias.`;
  };

  const handleFinishOrder = () => {
    if (cart.length === 0) return;
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const formattedTotal = '$' + totalPrice.toLocaleString('es-AR');

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-dark-soft/40 backdrop-blur-sm transition-opacity"
          />

          {/* SLIDE-OVER PANEL */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-crema shadow-2xl border-l border-gris-perla/20 flex flex-col justify-between"
            >
              {/* DRAWER HEADER */}
              <div className="p-6 border-b border-gris-perla/20 flex items-center justify-between bg-blanco-roto/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-taupe/10 text-taupe-dark">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-taupe-dark font-medium">
                      Tu Carrito
                    </h2>
                    <span className="text-[11px] font-sans text-dark-soft/50">
                      {totalItems} {totalItems === 1 ? 'producto seleccionado' : 'productos seleccionados'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={closeCart}
                  className="p-2 rounded-full bg-blanco-roto hover:bg-taupe hover:text-blanco-roto text-taupe-dark transition-colors duration-300 border border-gris-perla/20 cursor-pointer"
                  aria-label="Cerrar carrito"
                >
                  <X size={18} />
                </button>
              </div>

              {/* DRAWER BODY: ITEMS LIST */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-blanco-roto border border-gris-perla/20 flex items-center justify-center text-taupe/40 mb-4">
                      <ShoppingBag size={28} />
                    </div>
                    <h3 className="font-serif text-lg text-taupe-dark font-medium mb-2">
                      Tu carrito está vacío
                    </h3>
                    <p className="font-sans text-xs text-dark-soft/60 max-w-xs mb-6 leading-relaxed">
                      Explorá nuestra colección de collares y pulseras para elegir tus piezas favoritas.
                    </p>
                    <button
                      onClick={() => {
                        closeCart();
                        const element = document.getElementById('coleccion');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-taupe hover:bg-taupe-dark text-blanco-roto px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-colors"
                    >
                      Ver colección
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-[10px] uppercase tracking-widest font-sans text-dark-soft/50">
                        Detalle del pedido
                      </span>
                      <button
                        onClick={clearCart}
                        className="text-[10px] text-dark-soft/40 hover:text-rose-600 transition-colors underline"
                      >
                        Vaciar carrito
                      </button>
                    </div>

                    {cart.map((item) => {
                      const numericUnitPrice = parseInt(item.product.pricePlaceholder.replace(/[^0-9]/g, ''), 10) || 0;
                      const itemSubtotal = '$' + (numericUnitPrice * item.quantity).toLocaleString('es-AR');

                      return (
                        <div
                          key={item.product.id}
                          className="flex gap-3 bg-blanco-roto p-3.5 rounded-2xl border border-gris-perla/20 items-center shadow-sm"
                        >
                          {/* PRODUCT IMAGE */}
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 object-cover rounded-xl border border-gris-perla/10 bg-crema flex-shrink-0"
                          />

                          {/* PRODUCT DETAILS */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-sm text-taupe-dark font-medium truncate">
                              {item.product.name}
                            </h4>
                            <span className="block text-xs text-taupe font-sans font-semibold mb-2">
                              {item.product.pricePlaceholder}
                            </span>

                            {/* QUANTITY SELECTOR */}
                            <div className="flex items-center gap-2">
                              <div className="inline-flex items-center bg-crema border border-gris-perla/30 rounded-lg p-0.5">
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                  className="p-1 hover:bg-blanco-roto rounded text-dark-soft/70 hover:text-taupe-dark transition-colors"
                                  aria-label="Disminuir cantidad"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="px-2.5 text-xs font-sans font-medium text-dark-soft">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                  className="p-1 hover:bg-blanco-roto rounded text-dark-soft/70 hover:text-taupe-dark transition-colors"
                                  aria-label="Aumentar cantidad"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* SUBTOTAL & REMOVE */}
                          <div className="flex flex-col items-end justify-between h-full py-1">
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-dark-soft/30 hover:text-rose-600 transition-colors p-1"
                              title="Eliminar producto"
                            >
                              <Trash2 size={14} />
                            </button>
                            <span className="text-xs font-sans font-medium text-dark-soft/80 mt-2">
                              {itemSubtotal}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              {/* DRAWER FOOTER */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-gris-perla/20 bg-blanco-roto/60 space-y-4">
                  {/* TOTAL ESTIMATION */}
                  <div className="flex items-center justify-between font-sans">
                    <span className="text-xs uppercase tracking-widest text-dark-soft/60">
                      Total estimado:
                    </span>
                    <span className="font-serif text-2xl font-medium text-taupe-dark">
                      {formattedTotal}
                    </span>
                  </div>

                  {/* WHATSAPP CTA */}
                  <button
                    onClick={handleFinishOrder}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-taupe hover:bg-taupe-dark text-blanco-roto py-3.5 px-6 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-md shadow-taupe/10 cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    Finalizar pedido por WhatsApp
                  </button>

                  <p className="text-[11px] text-center text-dark-soft/50 font-sans leading-tight">
                    Se abrirá tu WhatsApp con el mensaje listo para enviarnos tu pedido y coordinar pago y envío.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

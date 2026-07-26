import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import CareSection from './components/CareSection';
import ReviewsSection from './components/ReviewsSection';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div id="app-root" className="min-h-screen bg-crema text-dark-soft overflow-x-hidden selection:bg-taupe/10 selection:text-taupe-dark">
        {/* HEADER */}
        <Header />

        {/* CORE LAYOUT */}
        <main id="main-content">
          {/* HERO */}
          <Hero />

          {/* CATALOG / PRODUCTS GRID */}
          <ProductGrid />

          {/* ABOUT US */}
          <About />

          {/* JEWELRY CARE */}
          <CareSection />

          {/* CUSTOMER REVIEWS */}
          <ReviewsSection />

          {/* GUIDED STEPS ON HOW TO BUY */}
          <HowToBuy />
        </main>

        {/* FOOTER */}
        <Footer />

        {/* SHOPPING CART DRAWER */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

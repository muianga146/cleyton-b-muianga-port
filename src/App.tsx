import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white selection:bg-brand-orange selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

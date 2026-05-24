import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import BillingSoftwareChennai from './pages/BillingSoftwareChennai';
import WebDevelopmentTamilNadu from './pages/WebDevelopmentTamilNadu';
import AIAutomationIndia from './pages/AIAutomationIndia';

const RouteChangeTracker = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/billing-software-in-chennai" element={<BillingSoftwareChennai />} />
        <Route path="/website-development-in-tamil-nadu" element={<WebDevelopmentTamilNadu />} />
        <Route path="/ai-automation-services-india" element={<AIAutomationIndia />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="bg-brand-dark min-h-screen text-brand-white font-sans selection:bg-brand-blue selection:text-brand-white relative">
        <div className="noise-bg"></div>
        <CustomCursor />
        <Navbar />
        
        <main>
          <RouteChangeTracker />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Impressum } from './pages/Impressum';
import { Terms } from './pages/Terms';
import { CookiePolicy } from './pages/CookiePolicy';

function App() {
    return (
        <Router>
            <CookieBanner />
            <ScrollToTop />
            <div className="min-h-screen bg-white">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/cookies" element={<CookiePolicy />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
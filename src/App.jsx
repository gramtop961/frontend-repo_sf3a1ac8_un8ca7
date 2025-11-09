import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased">
      {/* Hero with Spline background and clear CTA */}
      <Hero />

      {/* About with mission, vision, values and stats */}
      <About />

      {/* Service grid with icons */}
      <Services />

      {/* Filterable gallery with images and videos */}
      <Portfolio />

      {/* Testimonials carousel/grid */}
      <Testimonials />

      {/* Contact section with form and map */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

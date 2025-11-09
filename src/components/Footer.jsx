import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/80">© {year} StudioFrame Creative. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

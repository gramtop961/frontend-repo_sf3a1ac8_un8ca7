import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-white/90 ring-1 ring-white/20 backdrop-blur">
            Premium Photography & Videography
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Visual stories that move people and grow brands
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            We craft cinematic films and timeless imagery for weddings, lifestyle, and corporate campaigns. Fast, modern, and meticulously edited for impact across web and social.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View Our Work
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

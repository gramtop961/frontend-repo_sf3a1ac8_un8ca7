import React, { useMemo, useState } from 'react';

const items = [
  { id: 1, category: 'Events', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop', type: 'image' },
  { id: 2, category: 'Corporate', src: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop', type: 'image' },
  { id: 3, category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1600&auto=format&fit=crop', type: 'image' },
  { id: 4, category: 'Events', src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', type: 'video' },
  { id: 5, category: 'Corporate', src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2OTY2NDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', type: 'image' },
  { id: 6, category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop', type: 'image' },
];

const categories = ['All', 'Events', 'Corporate', 'Lifestyle'];

const Portfolio = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return items;
    return items.filter((i) => i.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === c
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`${item.category} shot`}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={item.src}
                  className="h-64 w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-xs font-medium text-gray-900">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

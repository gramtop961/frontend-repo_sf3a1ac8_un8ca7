import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava Thompson',
    role: 'Bride — Summer Wedding',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote:
      'Every moment felt cinematic. The edits were stunning and we received the previews the very next day. Could not recommend more!',
  },
  {
    name: 'Marcus Nguyen',
    role: 'Brand Director, North & Co.',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
    quote:
      'Professional from pitch to post. They delivered a cohesive visual system across photo and video that elevated our entire campaign.',
  },
  {
    name: 'Sofia Ramirez',
    role: 'Event Producer, Lumen Events',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop',
    quote:
      'Fast, flexible, and detail-oriented. Our clients loved the energy and the final cuts looked incredible on the big screen.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Client Stories
          </h2>
          <p className="mt-3 text-gray-600">Real words from teams and couples we were honored to capture.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <figcaption className="text-sm font-semibold text-gray-900">{t.name}</figcaption>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <blockquote className="mt-4 text-sm text-gray-700">“{t.quote}”</blockquote>
              <div className="mt-4 flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

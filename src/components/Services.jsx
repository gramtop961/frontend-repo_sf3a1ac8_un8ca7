import React from 'react';
import { Camera, Video, Drone, Wand2, Briefcase, Heart } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    desc: 'Documentary-style coverage with editorial portraits and same-day selects.',
  },
  {
    icon: Video,
    title: 'Commercial Videography',
    desc: 'Concept-to-delivery video ads, brand stories, and product launches.',
  },
  {
    icon: Drone,
    title: 'Aerial & Drone',
    desc: 'Licensed pilots capturing stabilized 4K aerials for real estate and events.',
  },
  {
    icon: Wand2,
    title: 'Retouching & Editing',
    desc: 'Color grading, skin retouching, and motion graphics tuned to your brand.',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Headshots',
    desc: 'On-site studio setups with consistent lighting and fast delivery.',
  },
  {
    icon: Heart,
    title: 'Lifestyle & Events',
    desc: 'Candid coverage with an eye for emotion and detail.',
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Services
          </h2>
          <p className="mt-3 text-gray-600">
            Flexible packages tailored for brands, agencies, and couples. Scale from a single creator to a full production crew.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

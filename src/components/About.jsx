import React from 'react';

const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Delivered', value: '1,200+' },
  { label: 'Client Satisfaction', value: '99%' },
  { label: 'Average Turnaround', value: '72h' },
];

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600">
              We are a boutique studio specializing in high-end photography and cinematic videography. Our mission is to tell authentic stories with precision and style. We value creativity, clarity, and consistency—delivering visuals that feel effortless and look unforgettable.
            </p>
            <p className="mt-4 text-gray-600">
              From Fortune 500 campaigns to intimate weddings, our team blends artistry with technical mastery. We use industry-leading equipment, streamlined workflows, and color-accurate editing to ensure every deliverable meets broadcast and brand standards.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="text-3xl font-semibold text-gray-900">{s.value}</div>
                <div className="mt-1 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

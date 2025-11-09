import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Let’s create something memorable</h2>
            <p className="mt-3 text-gray-600">
              Tell us about your project, timeline, and vision. We’ll reply within one business day with availability and a tailored quote.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-700">
              <a href="mailto:hello@studioframe.co" className="flex items-center gap-3 hover:underline">
                <Mail size={18} /> hello@studioframe.co
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:underline">
                <Phone size={18} /> +1 (234) 567-890
              </a>

              <div className="mt-4 flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="YouTube" className="rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95373531531558!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e7d1d9c0!2sPhotography%20Studio!5e0!3m2!1sen!2sus!4v1616173456789!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm text-gray-700">First name</label>
                <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-400" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-gray-700">Last name</label>
                <input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-gray-700">How can we help?</label>
                <textarea rows="5" className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-gray-400" />
              </div>
            </div>
            <button type="submit" className="mt-4 w-full rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90">
              Send message
            </button>
            <p className="mt-2 text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

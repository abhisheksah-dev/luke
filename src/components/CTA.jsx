import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold">Start your holistic journey today</h2>
            <p className="text-emerald-100 mt-2">Join thousands who’ve improved their life with consistent, personalized guidance.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
               className="rounded-full bg-white px-5 py-3 font-semibold text-emerald-700 shadow hover:scale-[1.02] transition-transform">
              Chat on WhatsApp
            </a>
            <a href="#services" className="rounded-full bg-white/10 px-5 py-3 text-white font-semibold border border-white/20 hover:bg-white/20 transition">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

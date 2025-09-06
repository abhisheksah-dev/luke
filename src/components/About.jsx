import React from "react";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-16 items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop" alt="Luke" className="rounded-3xl shadow-2xl object-cover w-full h-[420px]" />
          <div className="absolute -left-6 -top-6 bg-white/80 backdrop-blur rounded-2xl p-3 shadow">
            <div className="text-xs text-gray-500">ROOTED IN CARE</div>
            <div className="text-lg font-extrabold text-emerald-600">13+ years</div>
          </div>
        </div>

        <div>
          <p className="text-emerald-600 font-semibold mb-2">Luke’s Story</p>
          <h2 className="text-3xl font-extrabold mb-4">Integrative lifestyle medicine with compassionate support</h2>
          <p className="text-gray-600 mb-6">For over 13 years, Luke has guided thousands to transform their health by addressing root causes with holistic lifestyle changes. This Digital Twin brings his approach to you 24/7.</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-1" />
              <span className="text-gray-700">27,000+ lives transformed</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-1" />
              <span className="text-gray-700">Personalized holistic plans</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-1" />
              <span className="text-gray-700">Private and secure</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-1" />
              <span className="text-gray-700">Available on WhatsApp and app</span>
            </li>
          </ul>

          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-5 py-2 text-white font-semibold shadow hover:scale-[1.02] transition-transform">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

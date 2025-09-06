import React from "react";
import { services } from "../data/services";
import { Heart, Shield, Salad, Brain } from "lucide-react";

const iconMap = { Heart, Shield, Salad, Brain };

const Services = () => {
  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-emerald-600 font-semibold mb-2">What We Offer</p>
        <div className="grid lg:grid-cols-[1fr,2fr] gap-10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Our wellness support services
            </h3>
            <p className="text-gray-600 mb-6">
              Practical, trustworthy guidance that adapts to your lifestyle. All private and secure.
            </p>
            <a href="#cta" className="inline-flex rounded-full bg-purple-600 px-5 py-2.5 text-white font-semibold hover:bg-purple-700">
              All Services
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                  <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-600">{s.description}</p>
                  <div className="mt-4 h-1 w-full bg-purple-200 rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

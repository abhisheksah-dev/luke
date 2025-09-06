import React from "react";
import { services } from "../data/services";
import { Heart, Brain, Shield, Camera } from "lucide-react";

const iconMap = { Heart, Brain, Shield, Camera };

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-8">
          <p className="text-emerald-600 font-semibold">What we do</p>
          <h3 className="text-3xl font-extrabold">Practical services to support lasting change</h3>
          <p className="text-gray-600 max-w-2xl">Personalized plans, stress & sleep support, meal planning and secure conversations that adapt to you.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all">
                <div className="h-12 w-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

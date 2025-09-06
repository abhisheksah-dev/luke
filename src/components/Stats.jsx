import React from "react";
import { stats } from "../data/stats";
import { Youtube, Instagram, MessageCircle, Twitter } from "lucide-react";

const iconMap = { Youtube, Instagram, MessageCircle, Twitter };

const Stats = () => {
  return (
    <section id="stats" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.label} className="bg-white/70 backdrop-blur rounded-2xl p-6 text-center shadow-sm">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-100 to-sky-100">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from "react";
import { stats } from "../data/stats";
import { Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";

const iconMap = { Youtube, Instagram, Twitter, MessageCircle };

const Stats = () => {
  return (
    <section id="stats" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <Icon className="h-6 w-6 text-gray-400" />
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

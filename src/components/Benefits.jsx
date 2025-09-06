import React from "react";
import { benefits } from "../data/benefits";
import { Clock, Heart, Zap, Users, MessageCircle, Shield } from "lucide-react";

const iconMap = {
  Clock,
  Heart,
  Zap,
  Users,
  MessageCircle,
  Shield,
};

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Luke's Digital Twin?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience personalized wellness support that adapts to your lifestyle and grows with your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

import React from "react";
import { MessageCircle, Heart, Shield } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What is the Digital Twin?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It's like a virtual version of me – a smart, friendly health assistant that understands your unique needs 
            and provides personalized wellness guidance through natural conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Conversations</h3>
            <p className="text-gray-600">
              Chat naturally about your health concerns, goals, and daily challenges just like talking to a friend.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Approach</h3>
            <p className="text-gray-600">
              Addresses your complete wellbeing - nutrition, exercise, sleep, stress, and emotional health.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Private & Secure</h3>
            <p className="text-gray-600">
              Your conversations are completely confidential and protected with enterprise-grade security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

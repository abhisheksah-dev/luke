import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Your Holistic Journey Now 
        </h2>
        <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
          Join thousands who have transformed their health with personalized AI wellness guidance. 
          Your journey to better health starts with a single conversation.
        </p>
        <button className="bg-white text-emerald-600 px-10 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
          Begin Your Transformation
        </button>
      </div>
    </section>
  );
};

export default CTA;

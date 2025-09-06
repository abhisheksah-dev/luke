import React from "react";

const Story = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&auto=format" 
              alt="Luke Coutinho - Wellness Coach" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hi, I'm Luke Coutinho</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 13 years, I've devoted my life to integrative and lifestyle medicine, helping over 27,000 people 
              transform their health naturally. As part of the Fit India Movement, I believe in holistic wellness that 
              addresses mind, body, and spirit.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My Digital Twin carries forward this philosophy, offering you the same compassionate, personalized guidance 
              I provide my clients - available whenever you need it most.
            </p>
            <div className="flex items-center space-x-4 text-sm text-emerald-600 font-medium">
              <span>✓ 13+ Years Experience</span>
              <span>✓ 27,000+ Lives Transformed</span>
              <span>✓ Fit India Movement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;

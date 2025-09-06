import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 items-center">
        {/* Left */}
        <div>
          <p className="text-emerald-600 font-semibold mb-3">Holistic Wellness • 24/7</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Find the right <span className="text-emerald-600">guidance</span> for your health
          </h1>
          <p className="mt-5 text-gray-600 max-w-xl">
            Luke’s Digital Twin offers personalized nutrition, sleep, stress and movement advice through natural chat on app and WhatsApp.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#cta" className="rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">
              Discover More
            </a>
            <span className="text-sm text-gray-500">99.99% satisfied users</span>
          </div>
        </div>

        {/* Right mosaic */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <img className="rounded-2xl shadow-lg h-44 w-full object-cover bg-purple-200" 
              src="https://media.istockphoto.com/id/498768793/photo/doctor-protecting-a-heart.jpg?s=612x612&w=0&k=20&c=lDHc220ZyAN3_r2LOQDZFHEUmfU1nxhMf6Evk0_5OwU=" alt="hhb" />
            <img className="rounded-2xl shadow-lg h-44 w-full object-cover bg-emerald-200" 
              src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fHww" alt="" />
            <img className="rounded-2xl shadow-lg h-44 w-full object-cover bg-blue-200" 
              src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRofGVufDB8fDB8fHww" alt="" />
            <img className="rounded-2xl shadow-lg h-44 w-full object-cover bg-pink-200" 
              src="https://media.istockphoto.com/id/2227586936/photo/group-of-seniors-exercising-together-outdoors-in-a-green-park.jpg?s=612x612&w=0&k=20&c=W9kdl72ut5V7XA_gvfUy8CxVZ9zCnRBiiB77KBfN6HA=" alt="" />
          </div>

          {/* badges */}
          <div className="absolute -top-3 right-8 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-semibold">
            412k+ users
          </div>
          <div className="absolute -bottom-4 left-8 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-semibold">
            99.99% satisfaction
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 py-20 items-center">
        {/* left content */}
        <div className="space-y-6">
          <p className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-600">Holistic • 24/7</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Meet your <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500">Digital Twin</span> for better health
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Luke’s Digital Twin gives personalized nutrition, movement, sleep and stress guidance via natural chat. Private. Compassionate. Available anytime.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-6 py-3 text-white font-semibold shadow-lg hover:scale-[1.02] transition-transform"
            >
              Get Started
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-700 px-3 py-2 rounded-full border border-gray-200 hover:shadow-sm"
            >
              <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5L3.5 20.5l.5 3.5 3.3-.9A10 10 0 1 0 20.5 3.5z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>24/7 availability</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-sky-500" />
              <span>Personalized plans</span>
            </div>
          </div>
        </div>

        {/* right mosaic */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            <img src="https://media.istockphoto.com/id/498768793/photo/doctor-protecting-a-heart.jpg?s=612x612&w=0&k=20&c=lDHc220ZyAN3_r2LOQDZFHEUmfU1nxhMf6Evk0_5OwU=" alt="hhb" className="object-cover w-full h-44 rounded-2xl shadow-xl" />
            <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fHww" alt="" className="object-cover w-full h-44 rounded-2xl shadow-xl" />
            <img src="https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRofGVufDB8fDB8fHww" alt="" className="object-cover w-full h-44 rounded-2xl shadow-xl" />
            <img src="https://media.istockphoto.com/id/2227586936/photo/group-of-seniors-exercising-together-outdoors-in-a-green-park.jpg?s=612x612&w=0&k=20&c=W9kdl72ut5V7XA_gvfUy8CxVZ9zCnRBiiB77KBfN6HA=" alt="" className="object-cover w-full h-44 rounded-2xl shadow-xl" />
          </div>

          <div className="absolute -top-4 right-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow">
            <span className="text-xs text-gray-600 font-semibold">412k+ users</span>
          </div>

          <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow">
            <span className="text-xs text-gray-600 font-semibold">99.9% satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

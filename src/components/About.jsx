import React from "react";
import { Check } from "lucide-react";

const bullets = [
  "13+ years in integrative and lifestyle medicine",
  "27,000+ lives transformed naturally",
  "Member, Fit India Movement",
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop"
            alt="Luke Coutinho"
            className="rounded-2xl shadow-xl w-full object-cover h-[380px]"
          />
          <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-lg px-4 py-3 text-center">
            <div className="text-xs text-gray-500">TOTAL INSIGHT</div>
            <div className="text-2xl font-extrabold text-emerald-600">24/7</div>
          </div>
        </div>

        <div>
          <p className="text-emerald-600 font-semibold mb-2">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Get ahead of your health with personalized guidance
          </h2>
          <p className="text-gray-600 mb-6">
            My Digital Twin carries forward my philosophy. It provides compassionate, practical advice across nutrition, sleep, movement, and stress through natural conversations.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-700">{b}</span>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-purple-600 px-5 py-2.5 text-white font-semibold hover:bg-purple-700"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

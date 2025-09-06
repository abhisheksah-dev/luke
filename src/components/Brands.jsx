import React from "react";
import { brands } from "../data/brands";

const Brands = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by users and partners</p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((b) => (
            <img key={b.name} src={b.logo} alt={b.name} className="h-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

import React from "react";
import { brands } from "../data/brands";

const Brands = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-sm text-gray-600 mb-6">
          Trusted by thousands of users worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
          {brands.map((b) => (
            <img key={b.name} src={b.logo} alt={b.name} className="h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

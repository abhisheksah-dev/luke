import React from "react";
import { pricingPlans } from "../data/pricingPlans";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Wellness Plan</h2>
          <p className="text-xl text-gray-600">Flexible pricing to fit your commitment to better health.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? "bg-emerald-600 text-white transform scale-105" : "bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-emerald-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-emerald-100" : "text-gray-600"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`w-5 h-5 mr-3 ${plan.popular ? "text-emerald-200" : "text-emerald-600"}`}
                    />
                    <span className={plan.popular ? "text-emerald-100" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-white text-emerald-600 hover:bg-gray-100"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

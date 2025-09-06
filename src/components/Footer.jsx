import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-emerald-400 mb-4">Luke's Digital Twin</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your 24/7 AI-powered wellness companion, bringing personalized holistic health guidance 
              to your fingertips whenever you need it most.
            </p>
            <div className="flex space-x-4">
              <a
  href="https://wa.me/8250505226"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
>
  Chat on WhatsApp
</a>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Luke</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>support@lukedigitaltwin.com</li>
              <li>+91 98765 43210</li>
              <li>Available 24/7 via WhatsApp</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Luke's Digital Twin. All rights reserved. Transforming lives through holistic wellness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
                <defs>
                  <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path fill="url(#logoGrad2)" d="M50,25 C25,0 0,20 0,40 C0,60 25,80 50,55 C75,80 100,60 100,40 C100,20 75,0 50,25 Z M50,45 C40,50 30,50 25,40 C20,30 25,20 35,20 C45,20 50,30 50,35 C50,30 55,20 65,20 C75,20 80,30 75,40 C70,50 60,50 50,45 Z"/>
              </svg>
              <span className="text-xl font-extrabold">Luke<span className="text-emerald-400">Twin</span></span>
            </div>
            <p className="max-w-md text-gray-300">Your 24/7 AI wellness companion. Personalized, private and practical guidance for daily health.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#stats" className="hover:underline">Stats</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@lukedigitaltwin.com</li>
              <li>+91 98765 43210</li>
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:underline">Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Luke’s Digital Twin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

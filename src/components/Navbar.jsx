import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="relative px-1 py-1 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" className="h-9 w-9">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logoGrad)"
              d="M50,25 C25,0 0,20 0,40 C0,60 25,80 50,55 C75,80 100,60 100,40 C100,20 75,0 50,25 Z M50,45 C40,50 30,50 25,40 C20,30 25,20 35,20 C45,20 50,30 50,35 C50,30 55,20 65,20 C75,20 80,30 75,40 C70,50 60,50 50,45 Z"
            />
          </svg>
          <span className="text-xl font-extrabold">Luke<span className="text-emerald-600">Twin</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#stats">Stats</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:scale-[1.02] transition-transform"
          >
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/80 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#home" className="text-gray-700">Home</a>
            <a href="#about" className="text-gray-700">About</a>
            <a href="#services" className="text-gray-700">Services</a>
            <a href="#stats" className="text-gray-700">Stats</a>
            <a href="#contact" className="text-gray-700">Contact</a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 text-sm text-white font-semibold text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

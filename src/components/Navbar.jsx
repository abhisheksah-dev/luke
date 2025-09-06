import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const LinkEl = ({ href, children }) => (
    <a
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-emerald-600"
    >
      {children}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 100 80"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
          >
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#logoGradient)"
              d="M50,25 C25,0 0,20 0,40 C0,60 25,80 50,55 C75,80 100,60 100,40 C100,20 75,0 50,25 Z M50,45 C40,50 30,50 25,40 C20,30 25,20 35,20 C45,20 50,30 50,35 C50,30 55,20 65,20 C75,20 80,30 75,40 C70,50 60,50 50,45 Z"
            />
          </svg>
          <span className="font-extrabold text-xl">
            Luke<span className="text-emerald-600">Twin</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <LinkEl href="#home">Home</LinkEl>
          <LinkEl href="#about">About</LinkEl>
          <LinkEl href="#services">Services</LinkEl>
          <LinkEl href="#stats">Stats</LinkEl>
          <LinkEl href="#contact">Contact</LinkEl>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Services
            </a>
            <a
              href="#stats"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Stats
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Contact
            </a>
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white"
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

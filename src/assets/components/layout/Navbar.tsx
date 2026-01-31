import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Cases');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Cases', 'About', 'Contact'];

  return (
<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#f4f4f4] px-6 py-2 md:px-12 md:py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <div className="shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]">
            ZAYQ
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className="relative group py-1 text-[#333] font-medium transition-colors hover:text-black"
            >
              {item}
              {/* Animated Underline - visible if active or on hover */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Action Button Section */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-[#1a1a1a] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-[#333] transition-colors shadow-sm">
            Buy Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveItem(item);
                setIsMobileMenuOpen(false);
              }}
              className={`text-lg font-medium ${activeItem === item ? 'text-black border-b-2 border-black' : 'text-gray-600'}`}
            >
              {item}
            </button>
          ))}
          <button className="w-full max-w-50 bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-semibold text-sm">
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
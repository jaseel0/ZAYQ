import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f4f4f4] pt-16 pb-8 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-[#1a1a1a] mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Cases</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="font-bold text-[#1a1a1a] mb-6">Info</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-bold text-[#1a1a1a] mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Instagram Icon */}
              <a
                href="#"
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Twitter/X Icon */}
              <a
                href="#"
                className="text-gray-800 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 font-medium">
          <div className="order-2 md:order-1">
            © 2024 ZAYQ. All rights reserved.
          </div>
          <div className="flex space-x-8 order-1 md:order-2">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

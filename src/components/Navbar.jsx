import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // ⬇️ Reduced height and tightened the padding
    <nav className="fixed w-full z-50 top-0 bg-slate-900 border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* ⬇️ Changed to h-16 (64px) */}
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {/* ⬇️ Scaled down the logo box */}
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-2 shadow-lg shadow-orange-500/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <span className="text-xl font-black tracking-tight text-white uppercase"> {/* ⬇️ Scaled text to text-xl */}
              Pro<span className="text-orange-500">Service</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#services" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#reviews" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Reviews</a>
            
            {/* ⬇️ Made the button slightly more compact */}
            <a href="tel:5550198" className="bg-orange-500 hover:bg-orange-400 text-slate-900 px-5 py-2 rounded-sm text-sm font-black tracking-wide transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (555) 123-4567
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-orange-500 hover:text-orange-400 focus:outline-none">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-3 text-sm font-bold text-slate-200 hover:bg-slate-700 rounded">Services</a>
            <a href="#reviews" className="block px-3 py-3 text-sm font-bold text-slate-200 hover:bg-slate-700 rounded">Reviews</a>
            <a href="tel:5550198" className="mt-4 flex items-center justify-center gap-2 w-full bg-orange-500 text-slate-900 px-4 py-3 rounded-sm text-base font-black shadow-lg">
              CALL NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
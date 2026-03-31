import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-sm">
             <span className="text-2xl font-black tracking-tight text-white uppercase mb-4 block">
              Pro<span className="text-orange-500">Service</span>
            </span>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Serving the greater metropolitan area for over 25 years. Licensed, insured, and committed to excellence in every job we take.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Service Areas</h4>
              <ul className="text-slate-500 text-sm space-y-2 font-medium">
                <li>Downtown</li>
                <li>Westside</li>
                <li>Oak Park</li>
                <li>North Heights</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Company</h4>
              <ul className="text-slate-500 text-sm space-y-2 font-medium">
                <li>License #8829-11</li>
                <li>Emergency 24/7</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            © 2026 ProService Plumbing & HVAC. Portfolio Sample Project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
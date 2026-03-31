import React from 'react';

const Hero = () => {
  return (
    // ⬇️ Reduced min-height and padding so it fits standard screens better
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 flex items-center min-h-[70vh]">
      
      {/* Background Image with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Plumber" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/85"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl"> {/* ⬇️ Constrained the text width more */}
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-orange-400 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            24/7 Emergency Dispatch
          </div>
          
          {/* ⬇️ Scaled the text down from 7xl to 5xl */}
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
            Plumbing or HVAC Emergency? <span className="text-orange-500">We're On It.</span>
          </h1>
          
          {/* ⬇️ Scaled description down to text-base/text-lg */}
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-xl font-medium leading-relaxed">
            Licensed, insured, and ready to roll. Fast response times and upfront pricing. Don't let a leak ruin your day.
          </p>
          
          {/* Call to Action Group */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* ⬇️ Tightened the padding on the buttons */}
            <a href="#book" className="bg-orange-500 hover:bg-orange-400 text-slate-900 text-center px-6 py-3 rounded-sm font-black text-base tracking-wide transition-all shadow-lg transform hover:-translate-y-0.5">
              Book Service Online
            </a>
            <a href="tel:5550198" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-center px-6 py-3 rounded-sm font-bold text-base transition-all flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              (555) 123-4567
            </a>
          </div>

          {/* Mini Trust Signals */}
          <div className="mt-8 flex items-center gap-5 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Fully Licensed
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Upfront Pricing
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
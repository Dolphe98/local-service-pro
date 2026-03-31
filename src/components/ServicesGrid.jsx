import React from 'react';
import { services } from '../data/services';

const ServicesGrid = () => {

  // 🎨 DYNAMIC UI: Return a specific SVG based on the data string
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'alert':
        return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>;
      case 'fire':
        return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path></svg>;
      case 'water':
        return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>;
      case 'wind':
        return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>;
      default:
        return <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Fast, Reliable <span className="text-orange-500">Expertise.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            From minor leaks to complete HVAC overhauls, our master technicians are equipped to handle any residential or commercial issue.
          </p>
        </div>

        {/* The Grid mapping over our data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50 border border-slate-100 p-8 rounded shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer hover:border-orange-500/30"
            >
              {/* Dynamic Icon Wrapper */}
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {getIcon(item.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
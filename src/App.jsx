import React from 'react';

// 🔌 COMPONENT IMPORTS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm'; // 🆕 Final Action Piece
import Footer from './components/Footer';           // 🆕 Professional Anchor

function App() {
  return (
    /**
     * 🎨 UI ARCHITECTURE:
     * We use 'bg-slate-50' as our canvas to make the white cards pop.
     * 'selection:bg-orange-500' ensures even the text highlighting matches our brand.
     */
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      
      {/* 🧭 NAVIGATION: Sticky, high-contrast, and always accessible */}
      <Navbar />
      
      <main>
        {/* 🚀 HERO: Captures immediate attention and creates urgency */}
        <Hero />
        
        {/* 🛠️ SERVICES: Confirms the expertise and maps our mock data */}
        <ServicesGrid />

        {/* ⭐ TESTIMONIALS: Builds massive social proof and trust */}
        <Testimonials />

        {/* 📝 BOOKING FORM: The conversion point where leads are captured */}
        <BookingForm /> 
      </main>

      {/* ⚓ FOOTER: Professional closure with license info and service areas */}
      <Footer />
      
    </div>
  );
}

export default App;
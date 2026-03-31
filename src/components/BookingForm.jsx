import React, { useState } from 'react';

const BookingForm = () => {
  // 🧠 STATE: Managing form inputs and the "Demo Mode" message
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Plumbing',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send 'formData' to an API here.
    console.log("Form Data Collected:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="book" className="py-24 bg-white text-center px-4">
        <div className="max-w-md mx-auto p-10 bg-emerald-50 border border-emerald-200 rounded-sm">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
          <p className="text-slate-600 font-medium mb-6">
            <span className="font-bold text-orange-600 uppercase text-xs block mb-2 tracking-widest">Demo Mode Notice</span>
            In a live production environment, this data would be sent to a CRM or dispatched to a technician's mobile app.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-orange-600 font-bold hover:underline"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Info & Urgency */}
          <div className="lg:w-1/3 bg-orange-500 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">
              Ready to fix the problem?
            </h2>
            <p className="text-slate-900/80 font-bold mb-8">
              Fill out the form and a specialist will call you back within 15 minutes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-900 font-black">
                <div className="w-8 h-8 bg-slate-900 text-orange-500 rounded flex items-center justify-center">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                (555) 123-4567
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <form onSubmit={handleSubmit} className="lg:w-2/3 p-10 lg:p-16 bg-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-sm px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  className="w-full bg-slate-800 border border-slate-700 rounded-sm px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                  placeholder="(555) 000-0000"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Service Needed</label>
              <select 
                className="w-full bg-slate-800 border border-slate-700 rounded-sm px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option>Emergency Plumbing</option>
                <option>Water Heater Issue</option>
                <option>Drain Cleaning</option>
                <option>HVAC / AC Repair</option>
              </select>
            </div>
            <div className="mb-8">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">How can we help?</label>
              <textarea 
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 rounded-sm px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                placeholder="Briefly describe the issue..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-400 text-slate-900 font-black py-4 rounded-sm transition-all shadow-lg shadow-orange-500/20 uppercase tracking-widest">
              Request Professional Service
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;
import React from 'react';
import { reviews } from '../data/reviews';

const Testimonials = () => {
  return (
    // We'll use a slightly different background color (slate-100) to separate it from the white Services section
    <section id="reviews" className="py-24 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Don't Just Take Our <span className="text-orange-500">Word For It.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            We've helped thousands of homeowners in the area get back to their normal lives. Here is what they have to say.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-sm shadow-md border-b-4 border-orange-500 flex flex-col justify-between"
            >
              <div>
                {/* ⭐ The Star Row */}
                <div className="flex mb-4 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">{review.name}</h4>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Trust Signal */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 font-black text-slate-900">
            <span className="text-xl">4.9 / 5.0 Rating</span>
          </div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-tighter">Based on 500+ Verified Customer Reviews</p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
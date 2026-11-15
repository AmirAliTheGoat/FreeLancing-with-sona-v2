import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
           <h2 className="text-4xl font-black text-[#2e1065] mb-6">داستان‌های واقعی</h2>
           <p className="text-gray-500 text-lg font-light">
             نتایج دانشجویان ما، بهترین تبلیغ برای کیفیت مسیر ماست.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
             <div key={testimonial.id} className="relative bg-[#fdfbf7] p-10 rounded-[2rem] hover:bg-[#2e1065] hover:text-white group transition-all duration-500 ease-out border border-transparent hover:border-[#2e1065]">
                <Quote className="absolute top-10 left-10 text-violet-200 group-hover:text-white/20 transition-colors" size={48} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-gray-700 font-light leading-loose text-lg mb-8 group-hover:text-gray-100 transition-colors">
                        "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 pt-8 border-t border-violet-100 group-hover:border-white/10 transition-colors">
                       <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white group-hover:border-white/30">
                          <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                       </div>
                       <div>
                         <h4 className="font-bold text-base text-[#2e1065] group-hover:text-white transition-colors">{testimonial.author}</h4>
                         <p className="text-xs text-gray-500 font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">{testimonial.position}</p>
                       </div>
                    </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
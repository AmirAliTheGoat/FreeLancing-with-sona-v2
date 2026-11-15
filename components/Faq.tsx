import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#fdfbf7]" id="faq">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#2e1065]">سوالات متداول</h2>
        </div>

        <div className="space-y-0 divide-y divide-violet-200">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="py-6">
              <button 
                className="w-full flex items-center justify-between text-right font-medium text-lg text-gray-800 focus:outline-none hover:text-[#4c1d95] transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <span className="mr-4 text-gray-400">
                    {openIndex === index ? <Minus size={18} className="text-[#f97316]" /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
              >
                <div className="text-gray-600 leading-relaxed font-light pl-8">
                    {item.answer.map((paragraph, i) => (
                        <p key={i} className="mb-2 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
import React from 'react';
import { PRICING_PACKAGES } from '../constants';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
           <h2 className="text-4xl font-black text-[#2e1065] mb-6">سرمایه‌گذاری روی آینده</h2>
           <p className="text-gray-500 font-light text-lg">
             شروع فعالیت بین‌المللی هزینه نیست، سرمایه‌گذاری است. <br/>
             <span className="text-[#f97316] font-medium">بازگشت سرمایه معمولاً در پروژه اول اتفاق می‌افتد.</span>
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div 
                key={idx} 
                className={`flex flex-col p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2
                  ${pkg.recommended 
                    ? 'bg-[#2e1065] text-white shadow-2xl shadow-violet-900/40' 
                    : 'bg-white border border-gray-100 hover:border-violet-200 hover:shadow-xl'
                  }`}
            >
              <div className="mb-8">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${pkg.recommended ? 'text-[#facc15]' : 'text-gray-400'}`}>
                  {pkg.recommended ? 'پیشنهاد ویژه' : 'پکیج پایه'}
                </p>
                <h3 className={`text-2xl font-bold mb-2 ${pkg.recommended ? 'text-white' : 'text-[#2e1065]'}`}>{pkg.title}</h3>
                <p className={`text-sm opacity-70 leading-relaxed ${pkg.recommended ? 'text-gray-300' : 'text-gray-500'}`}>{pkg.subtitle}</p>
              </div>

              <div className={`mb-8 pb-8 border-b ${pkg.recommended ? 'border-white/10' : 'border-gray-100'}`}>
                 <div className="text-3xl font-black tracking-tight">{pkg.price}</div>
                 <div className={`text-xs mt-2 opacity-50`}>پرداخت یک‌مرحله‌ای</div>
              </div>

              <ul className="space-y-4 flex-1 mb-10">
                  {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-light">
                          <Check size={16} className={`mt-0.5 flex-shrink-0 ${pkg.recommended ? 'text-[#facc15]' : 'text-gray-400'}`} />
                          <span className={pkg.recommended ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                      </li>
                  ))}
              </ul>

              <Button 
                variant={pkg.recommended ? 'secondary' : 'outline'} 
                className={`w-full py-4 rounded-xl ${!pkg.recommended && 'border-gray-200 text-[#2e1065] hover:bg-[#2e1065] hover:text-white hover:border-[#2e1065]'}`}
              >
                  سفارش پکیج
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
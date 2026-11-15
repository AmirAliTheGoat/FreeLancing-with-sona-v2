import React from 'react';
import { SERVICES } from '../constants';

const Categories: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="text-4xl font-black text-[#2e1065] tracking-tight">خدمات تخصصی</h2>
            <p className="text-gray-500 font-light mt-2 md:mt-0">هر آنچه برای جهانی شدن نیاز دارید</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-100">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 border-r border-b border-gray-100 bg-white hover:bg-violet-50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1 h-0 bg-[#4c1d95] group-hover:h-full transition-all duration-300 ease-in-out"></div>
              
              <div className="mb-6 text-gray-400 group-hover:text-[#4c1d95] transition-all duration-300 ease-in-out transform group-hover:scale-110 origin-center">
                <service.icon size={40} strokeWidth={1} />
              </div>
              
              <h4 className="font-bold text-lg text-[#2e1065] mb-2">{service.title}</h4>
              <p className="text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors">
                {service.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
import React from 'react';
import { Button } from './ui/Button';
import { ShieldCheck, Globe, CreditCard } from 'lucide-react';

const FeatureHighlight: React.FC = () => {
  return (
    <section className="py-32 bg-[#2e1065] text-white relative">
      
      {/* Abstract Background Shapes - Wrapped in overflow-hidden container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#7c3aed] rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#db2777] rounded-full filter blur-[100px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                   <Globe className="text-[#facc15] mb-4 group-hover:scale-110 transition-transform" size={32} />
                   <h3 className="font-bold text-lg mb-2">هویت جهانی</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed">وریفای با مدارک معتبر انگلیس بدون ریسک.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors mt-8 group">
                   <CreditCard className="text-[#f97316] mb-4 group-hover:scale-110 transition-transform" size={32} />
                   <h3 className="font-bold text-lg mb-2">نقد کردن درآمد</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed">حساب پی‌پل و ویزاکارت اختصاصی به نام شما.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                   <ShieldCheck className="text-[#db2777] mb-4 group-hover:scale-110 transition-transform" size={32} />
                   <h3 className="font-bold text-lg mb-2">امنیت حساب</h3>
                   <p className="text-gray-300 text-sm font-light leading-relaxed">IP ثابت خانگی و VPS برای جلوگیری از لیمیت.</p>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              فقط روی <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#db2777]">تخصص خود</span> تمرکز کنید.
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-loose font-light">
              بزرگترین ترس فریلنسرهای ایرانی، مسدود شدن حساب و بلوکه شدن درآمد است. 
              ما این ریسک را به صفر رسانده‌ایم. زیرساختی که برای شما فراهم می‌کنیم، 
              دقیقاً همان چیزی است که خودمان سال‌هاست استفاده می‌کنیم.
            </p>
            
            <Button className="bg-white text-[#2e1065] hover:bg-violet-50 px-8 py-4 text-lg">
              شروع کنید
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
import React from 'react';
import { ArrowLeft, Star, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 lg:pt-40 overflow-hidden bg-[#fdfbf7]">
      
      {/* Animated Aurora Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[10%] w-[600px] h-[600px] bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start text-right">
            
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <span className="px-4 py-1.5 bg-white/50 backdrop-blur-sm border border-violet-200 rounded-full text-xs font-bold text-[#db2777] shadow-sm uppercase tracking-wider flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-[#db2777] animate-pulse"></span>
                 نسخه جدید دوره ۲۰۲۵
              </span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black text-[#2e1065] leading-[1.05] tracking-tighter mb-8 animate-fade-in-up delay-100 drop-shadow-sm">
              درآمد دلاری<br />
              <span className="relative inline-block text-[#4c1d95]">
                بدون مرز
                {/* SVG Underline */}
                <svg className="absolute w-[110%] h-4 -bottom-3 -right-[5%] text-[#facc15]" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[#db2777]">.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed font-light mb-12 animate-fade-in-up delay-200">
              من <span className="font-bold text-[#2e1065]">سونا</span> هستم. 
              اینجا مسیر واقعی فریلنسری را یاد می‌گیرید. 
              <br className="hidden sm:block"/>
              بدون رویافروشی، با ابزارهای واقعی و تجربه بین‌المللی.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in-up delay-300">
              <Button size="lg" className="group text-lg px-10 py-5 rounded-2xl shadow-xl shadow-violet-900/20 hover:shadow-violet-900/30 transition-all duration-300 bg-[#2e1065] hover:scale-105 active:scale-95">
                شروع مسیر
                <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-5 rounded-2xl border-2 hover:bg-violet-50 transition-all duration-300">
                <PlayCircle size={20} className="ml-2 text-[#db2777]" />
                دیدن نتایج
              </Button>
            </div>
            
            <div className="mt-14 flex items-center gap-4 animate-fade-in-up delay-500">
                <div className="flex -space-x-4 space-x-reverse">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-[#fdfbf7] shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                          <img src={`https://picsum.photos/100/100?random=${i+20}`} alt="Student" className="w-full h-full object-cover" />
                      </div>
                    ))}
                 </div>
                 <div className="flex flex-col mr-2">
                    <div className="flex gap-1 text-[#f97316]">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold text-gray-500 mt-1">اعتماد بیش از ۵۰۰ فریلنسر</span>
                 </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in-up delay-300 perspective-1000">
            <div className="relative mx-auto max-w-md lg:max-w-none transform transition-transform hover:rotate-y-2 hover:rotate-x-2 duration-500">
                {/* Decorative Elements */}
                <div className="absolute top-10 -left-10 w-24 h-24 bg-[#facc15] rounded-full blur-2xl opacity-60 animate-bounce delay-700"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#db2777] rounded-full blur-3xl opacity-40"></div>

                <div className="relative">
                   {/* Frame */}
                   <div className="absolute inset-0 border-[3px] border-[#2e1065] rounded-[2rem] transform translate-x-5 translate-y-5 -z-10 hidden sm:block opacity-20"></div>
                   
                   {/* Image Container */}
                   <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-violet-900/20 bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/60 to-transparent opacity-40 z-10"></div>
                      <img 
                        src="/sona.jpg" 
                        alt="Sona Portrait" 
                        className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-[2s] ease-out"
                        onError={(e) => {
                           e.currentTarget.style.display = 'none'; 
                           e.currentTarget.parentElement?.classList.add('bg-violet-100', 'flex', 'items-center', 'justify-center');
                           if(e.currentTarget.parentElement) {
                             e.currentTarget.parentElement.innerHTML = '<span class="text-[#2e1065] font-bold text-4xl tracking-tighter">Sona.</span>';
                           }
                        }}
                      />
                      
                      {/* Floating Card */}
                      <div className="absolute bottom-8 right-8 left-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/60 shadow-lg transform translate-y-2 hover:translate-y-0 transition-transform duration-300 z-20">
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#db2777] flex items-center justify-center text-white shadow-lg">
                             <Star size={24} fill="currentColor" />
                           </div>
                           <div>
                              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Top Rated Plus</p>
                              <p className="text-[#2e1065] font-black text-lg">منتور برگزیده سال</p>
                           </div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
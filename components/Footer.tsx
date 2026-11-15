import React from 'react';
import { Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2e1065] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Footer Pattern - Palette Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#db2777] via-[#facc15] to-[#f97316]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Pre-footer CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-16 mb-16">
           <div className="text-center md:text-right">
              <h2 className="text-3xl font-bold mb-2">خبرنامه تخصصی فریلنسرها</h2>
              <p className="text-violet-200 font-light">آخرین تغییرات قوانین آپورک و فایور را در ایمیل خود دریافت کنید.</p>
           </div>
           <div className="flex gap-3 w-full md:w-auto max-w-md">
              <div className="relative flex-1">
                 <input 
                    type="email" 
                    placeholder="ایمیل خود را وارد کنید..." 
                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:border-[#f97316] focus:bg-white/10 transition-all placeholder:text-gray-400"
                 />
              </div>
              <Button className="h-12 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 rounded-xl shadow-lg shadow-orange-900/20">
                 عضویت
              </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-right mb-16">
          
          <div className="md:col-span-2 space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-white/5 p-0.5">
                    <img 
                        src="/sona.jpg" 
                        alt="Sona" 
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if(e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                                e.currentTarget.parentElement.innerHTML = '<span class="text-white font-bold text-lg">S</span>';
                            }
                        }} 
                    />
                </div>
                <div>
                    <span className="block text-xl font-bold tracking-tight">Sona.</span>
                    <span className="text-xs text-violet-300 uppercase tracking-widest">Global Freelancing</span>
                </div>
             </div>
             <p className="text-gray-300 font-light text-sm leading-loose max-w-md">
               ماموریت ما ساده است: <br/>
               <span className="text-white">حذف مرزهای جغرافیایی برای استعدادهای ایرانی.</span> <br/>
               ما زیرساخت، دانش و تجربه لازم برای درآمد دلاری امن را در اختیار شما قرار می‌دهیم.
             </p>
          </div>

          <div>
             <h4 className="font-bold text-sm mb-6 text-white border-b border-white/10 pb-2 inline-block">دسترسی سریع</h4>
             <ul className="space-y-4 text-sm text-gray-300 font-light">
               <li><a href="#" className="hover:text-[#f97316] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400"></span>خدمات ما</a></li>
               <li><a href="#" className="hover:text-[#f97316] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400"></span>داستان موفقیت</a></li>
               <li><a href="#" className="hover:text-[#f97316] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400"></span>پکیج‌های قیمتی</a></li>
               <li><a href="#" className="hover:text-[#f97316] transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-400"></span>سوالات متداول</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-sm mb-6 text-white border-b border-white/10 pb-2 inline-block">تماس با ما</h4>
             <ul className="space-y-4 text-sm text-gray-300 font-light">
               <li className="hover:text-white transition-colors">info@sonafreelance.com</li>
               <li className="hover:text-white transition-colors">@sona_support</li>
               <li className="hover:text-white transition-colors">تهران، مرکز نوآوری آزادی</li>
             </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs font-light pt-8 border-t border-white/10">
           <p>© ۱۴۰۴ تمامی حقوق محفوظ است.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={18} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
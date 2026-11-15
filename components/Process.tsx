import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "گواهینامه و هویت",
      desc: "دریافت گواهینامه معتبر انگلیس و ایجاد هویت دیجیتال برای عبور از تحریم‌ها.",
    },
    {
      id: "02",
      title: "زیرساخت فنی",
      desc: "راه‌اندازی سرور مجازی (VPS) و سیم‌کارت دائمی برای دسترسی امن و پایدار.",
    },
    {
      id: "03",
      title: "اکانت و رزومه",
      desc: "ساخت اکانت‌های آپورک/فایور و بهینه‌سازی پروفایل با استانداردهای جهانی.",
    },
    {
      id: "04",
      title: "نقد کردن درآمد",
      desc: "اتصال به شبکه بانکی جهانی و دریافت ریال در ایران با کمترین کارمزد.",
    }
  ];

  return (
    <section className="py-32 bg-[#fdfbf7] relative overflow-hidden" id="process">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-violet-100 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="lg:sticky lg:top-32 h-fit">
             <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-6">
                مراحل اجرایی
             </div>
             <h2 className="text-5xl lg:text-7xl font-black text-[#2e1065] mb-8 leading-none tracking-tight">
               نقشه راه <br />
               <span className="text-[#f97316]">آزادی مالی</span>
             </h2>
             <p className="text-xl text-gray-600 leading-relaxed font-light mb-8 max-w-md">
               این مسیر پیچیده نیست، اگر راهنما داشته باشید. 
               ما تمام موانع فنی و قانونی را برای شما برطرف کرده‌ایم تا شما فقط روی تخصصتان تمرکز کنید.
             </p>
             
             {/* Abstract Line decoration */}
             <div className="h-1 w-24 bg-[#2e1065] rounded-full"></div>
          </div>

          <div className="relative space-y-0 pt-8 lg:pt-0">
            {/* Connecting Line */}
            <div className="absolute top-8 bottom-8 right-[3.25rem] w-0.5 bg-violet-200 border-r border-dashed border-violet-300 hidden sm:block"></div>

            {steps.map((step, index) => (
              <div key={step.id} className="group relative pr-0 sm:pr-24 pb-16 last:pb-0">
                 {/* Number Bubble - Mobile */}
                 <div className="sm:hidden mb-4 text-4xl font-black text-violet-200">
                    {step.id}
                 </div>

                 {/* Circle Marker - Desktop */}
                 <div className="hidden sm:flex absolute right-[2.5rem] top-1 w-6 h-6 rounded-full bg-[#fdfbf7] border-4 border-violet-200 z-10 group-hover:border-[#f97316] group-hover:scale-125 transition-all duration-300 items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2e1065] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 
                 <div className="relative p-8 bg-white rounded-3xl border border-violet-100 shadow-sm group-hover:shadow-xl group-hover:border-orange-200 transition-all duration-300 transform group-hover:-translate-x-2">
                   <h3 className="text-2xl font-bold text-[#2e1065] mb-3 group-hover:text-[#4c1d95] transition-colors">
                     {step.title}
                   </h3>
                   <p className="text-gray-600 font-light leading-relaxed">
                     {step.desc}
                   </p>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
import React from 'react';

const LOGOS = [
  { name: 'Upwork', color: '#14a800' },
  { name: 'Fiverr', color: '#1dbf73' },
  { name: 'Freelancer', color: '#29b2fe' },
  { name: 'Payoneer', color: '#ff4800' },
  { name: 'PayPal', color: '#003087' },
  { name: 'Toptal', color: '#204ecf' },
  { name: 'Guru', color: '#00b2bd' },
  { name: 'PeoplePerHour', color: '#ff7300' },
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="w-full bg-white border-y border-violet-100 overflow-hidden py-10 relative">
      {/* Fade Gradients for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
        {/* First Set */}
        <div className="flex justify-around min-w-[50%] gap-16 items-center px-16">
          {LOGOS.map((logo, idx) => (
            <div key={`${logo.name}-1-${idx}`} className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
               <span className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
                 {logo.name}
               </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate Set for Seamless Loop */}
        <div className="flex justify-around min-w-[50%] gap-16 items-center px-16">
          {LOGOS.map((logo, idx) => (
            <div key={`${logo.name}-2-${idx}`} className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
               <span className="text-3xl font-black tracking-tighter" style={{ fontFamily: 'sans-serif' }}>
                 {logo.name}
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
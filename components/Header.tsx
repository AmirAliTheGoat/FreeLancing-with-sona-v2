import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border-violet-100 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
           <div className="w-10 h-10 bg-[#2e1065] text-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#4c1d95] transition-colors duration-300">
             <span className="font-bold text-xl font-serif italic">S</span>
           </div>
           <span className="text-xl font-bold text-[#2e1065] tracking-tight group-hover:text-[#4c1d95] transition-colors duration-300">Sona.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/60 px-2 py-1.5 rounded-full border border-violet-100 backdrop-blur-md shadow-sm">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-[#2e1065] hover:bg-violet-50 rounded-full transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
           <Button variant="ghost" size="sm" className="font-normal text-gray-600">ورود</Button>
           <Button variant="primary" size="sm" className="rounded-xl shadow-lg shadow-violet-900/10 transition-all duration-300 transform hover:-translate-y-0.5">مشاوره رایگان</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#2e1065]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-6 border-t border-violet-100 z-50 h-[calc(100vh-80px)] overflow-y-auto">
           {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-[#2e1065] text-2xl font-bold tracking-tight py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-auto pb-8">
            <Button variant="ghost" className="w-full justify-start text-lg">ورود به پنل</Button>
            <Button variant="primary" className="w-full text-lg py-4">رزرو وقت مشاوره</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
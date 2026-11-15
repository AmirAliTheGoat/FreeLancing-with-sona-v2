import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import Categories from './components/Categories';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FeatureHighlight from './components/FeatureHighlight';
import RecentProjects from './components/RecentProjects';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-surface text-ink" dir="rtl">
      <Header />
      <main>
        <Hero />
        <LogoMarquee />
        <Categories />
        <FeatureHighlight />
        <Process />
        <Pricing />
        <RecentProjects />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

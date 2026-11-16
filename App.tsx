import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import HeroBento from './components/HeroBento';
import StraightTalkBento from './components/StraightTalkBento';
import RealityRegister from './components/RealityRegister';
import PackageLedger from './components/PackageLedger';
import FieldRecords from './components/FieldRecords';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen font-sans bg-surface text-ink">
        <Header />
        <main>
          <HeroBento />
          <StraightTalkBento />
          <RealityRegister />
          <PackageLedger />
          <FieldRecords />
          <Faq />
        </main>
        <Footer />
        <ConsultationModal />
      </div>
    </AppProvider>
  );
}

export default App;

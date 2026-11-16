import React, { Suspense, useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import HeroBento from './components/HeroBento';
import StraightTalkBento from './components/StraightTalkBento';
import RealityRegister from './components/RealityRegister';
import PackageLedger from './components/PackageLedger';
import FieldRecords from './components/FieldRecords';
import ClosingBanner from './components/ClosingBanner';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';

const ConsultationModal = React.lazy(() => import('./components/ConsultationModal'));

const AppShell: React.FC = () => {
  const { t, bookingModal } = useApp();
  const [hasOpenedModal, setHasOpenedModal] = useState(false);

  useEffect(() => {
    if (bookingModal.isOpen) {
      setHasOpenedModal(true);
    }
  }, [bookingModal.isOpen]);

  return (
    <div className="min-h-screen font-sans bg-surface text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[80] focus:min-h-[44px] focus:inline-flex focus:items-center focus:px-4 focus:py-2 focus:rounded-control focus:bg-accent focus:text-white focus:text-sm focus:font-semibold focus:shadow-lift"
      >
        {t.a11y.skipToContent}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroBento />
        <StraightTalkBento />
        <RealityRegister />
        <PackageLedger />
        <FieldRecords />
        <ClosingBanner />
        <Faq />
      </main>
      <Footer />
      <StickyCta />
      {hasOpenedModal && (
        <Suspense fallback={null}>
          <ConsultationModal />
        </Suspense>
      )}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}

export default App;

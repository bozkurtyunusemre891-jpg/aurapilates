/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ClassesPage } from './pages/ClassesPage';
import { SchedulePage } from './pages/SchedulePage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ScheduleSlot } from './data/pilatesData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState<string | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (classOrPackageId?: string, slot?: ScheduleSlot) => {
    if (slot) {
      setSelectedSlot(slot);
      setSelectedClassId(slot.classId);
      setSelectedPackageId(undefined);
    } else if (classOrPackageId?.includes('session') || classOrPackageId?.includes('monthly') || classOrPackageId?.includes('private-') || classOrPackageId?.includes('duet-') || classOrPackageId?.includes('flexible-')) {
      setSelectedPackageId(classOrPackageId);
      setSelectedSlot(null);
    } else {
      setSelectedClassId(classOrPackageId);
      setSelectedSlot(null);
      setSelectedPackageId(undefined);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedClassId(undefined);
    setSelectedSlot(null);
    setSelectedPackageId(undefined);
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenBooking={(classId) => handleOpenBooking(classId)}
          />
        );
      case 'classes':
        return (
          <ClassesPage
            onOpenBooking={(classId) => handleOpenBooking(classId)}
            setActiveTab={setActiveTab}
          />
        );
      case 'schedule':
        return (
          <SchedulePage
            onOpenBooking={(classId, slot) => handleOpenBooking(classId, slot)}
          />
        );
      case 'pricing':
        return (
          <PricingPage
            onOpenBooking={(packageId) => handleOpenBooking(packageId)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
            setActiveTab={setActiveTab}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenBooking={(classId) => handleOpenBooking(classId)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#292524] selection:bg-[#EADBCE] selection:text-[#52291E]">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Container with Smooth Animation */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Universal Booking & Inquiries Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialClassId={selectedClassId}
        initialSlot={selectedSlot}
        initialPackageId={selectedPackageId}
      />
    </div>
  );
}

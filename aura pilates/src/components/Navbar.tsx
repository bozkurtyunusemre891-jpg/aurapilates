import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'classes', label: 'Dersler' },
    { id: 'schedule', label: 'Program & Saatler' },
    { id: 'pricing', label: 'Fiyatlar' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#EADBCE]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element in luxury display face) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl lg:text-3xl font-serif-luxury font-normal tracking-[0.18em] text-[#292524] hover:text-[#B85D43] transition-colors whitespace-nowrap shrink-0 text-left"
          >
            AURA PILATES
          </button>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-xs uppercase tracking-[0.15em] transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#B85D43] font-semibold'
                      : 'text-[#57534E] hover:text-[#292524]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B85D43] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs uppercase tracking-[0.12em] font-medium text-white bg-[#B85D43] hover:bg-[#A04A32] rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Randevu Al</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#57534E] hover:text-[#292524] hover:bg-[#EADBCE]/50 rounded-lg transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5EFEB] border-b border-[#EADBCE] px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-[0.15em] rounded-xl transition-colors ${
                  isActive
                    ? 'bg-[#B85D43] text-white font-medium'
                    : 'text-[#57534E] hover:bg-[#EADBCE]/60 hover:text-[#292524]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, WORKING_HOURS } from '../data/pilatesData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#262220] text-[#EADBCE] border-t border-[#3E3835] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Studio Identity */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif-luxury tracking-[0.2em] text-[#FAF7F2]">
              AURA PILATES
            </h3>
            <p className="text-sm text-[#C4B7AC] font-light leading-relaxed">
              Modern yaşamın omurgada bıraktığı yükü hafifleten, bedeninizin doğal zarafetini ve derin merkez kuvvetini yeniden uyandıran butik pilates atölyesi.
            </p>
            <div className="text-xs text-[#A89C92] pt-2 space-y-1">
              <p>Joseph Pilates Klasik Metodolojisi</p>
              <p>Balanced Body® Allegro 2 Ekipmanları</p>
            </div>
          </div>

          {/* Col 2: Çalışma Saatleri (Prominent hours breakdown) */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#B85D43]" /> Çalışma Saatleri
            </h4>
            <div className="space-y-3 text-xs text-[#C4B7AC]">
              <div className="border-b border-[#3E3835] pb-2">
                <span className="text-[#FAF7F2] font-medium block">Hafta İçi (Pzt – Cum)</span>
                <span className="text-[#DFC6B1] font-mono tabular-nums text-sm">07:00 – 21:30</span>
              </div>
              <div className="border-b border-[#3E3835] pb-2">
                <span className="text-[#FAF7F2] font-medium block">Cumartesi</span>
                <span className="text-[#DFC6B1] font-mono tabular-nums text-sm">08:30 – 19:00</span>
              </div>
              <div>
                <span className="text-[#FAF7F2] font-medium block">Pazar</span>
                <span className="text-[#DFC6B1] font-mono tabular-nums text-sm">09:30 – 16:30</span>
              </div>
            </div>
          </div>

          {/* Col 3: Hızlı Gezinme */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">
              Sayfalar
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C4B7AC]">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('classes'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Dersler & Metotlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('schedule'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Haftalık Program & Saatler
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('pricing'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Fiyatlar & Paketler
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('about'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  Hakkımızda & Eğitmenler
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('contact'); scrollToTop(); }}
                  className="hover:text-white transition-colors"
                >
                  İletişim & Konum
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: İletişim & Lokasyon */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">
              Stüdyo Bilgileri
            </h4>
            <div className="space-y-3 text-xs text-[#C4B7AC]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B85D43] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B85D43] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B85D43] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#B85D43] shrink-0" />
                <span className="hover:text-white cursor-pointer transition-colors">
                  {STUDIO_INFO.instagram}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.15em] font-medium rounded-xl transition-colors text-center"
              >
                Deneme Seansı Ayırt
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-[#3E3835] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7E74]">
          <div className="flex items-center gap-3">
            <span>© 2026 AURA Pilates Studio</span>
            <span aria-hidden="true">·</span>
            <span>Tüm Hakları Saklıdır</span>
            <span aria-hidden="true">·</span>
            <span>Nişantaşı / İstanbul</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C4B7AC] hover:text-[#FAF7F2] transition-colors py-1 px-2.5 rounded-lg hover:bg-[#3E3835]"
          >
            <span>Yukarı Çık</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

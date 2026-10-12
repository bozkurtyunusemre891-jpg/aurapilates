import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle, ChevronDown, ChevronUp, Send, Car, Navigation } from 'lucide-react';
import { STUDIO_INFO, WORKING_HOURS, FAQS } from '../data/pilatesData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Tanışma Seansı & Bilgi',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
            İletişim & Randevu Danışmanlığı
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#292524] tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Sorularınız, ders paketleri veya stüdyo ziyareti için ekibimiz haftanın her günü size yardımcı olmaktan mutluluk duyar.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sol Sütun: Stüdyo Bilgileri & Çalışma Saatleri (5 Sütun) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Stüdyo Bilgi Kartı */}
            <div className="bg-white rounded-3xl border border-[#EADBCE] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-serif-luxury font-medium text-[#292524]">
                AURA Pilates Nişantaşı
              </h3>

              <div className="space-y-4 text-xs text-[#57534E]">
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-[#292524] block">Stüdyo Adresi</span>
                    <span className="text-[#78716C] leading-relaxed block mt-0.5">{STUDIO_INFO.address}</span>
                    <span className="text-[11px] text-[#A8A29E] block mt-1">Valikonağı Caddesi Kesişimi, Teşvikiye</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-[#292524] block">Telefon & WhatsApp</span>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="text-[#B85D43] font-medium block hover:underline">
                      {STUDIO_INFO.phone}
                    </a>
                    <a href={`https://wa.me/905321752430`} target="_blank" rel="noopener noreferrer" className="text-[#78716C] block mt-0.5 hover:text-[#292524]">
                      WhatsApp: {STUDIO_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-[#292524] block">E-Posta</span>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#78716C] block hover:text-[#B85D43]">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Ulaşım & Otopark Notu */}
              <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] space-y-2 text-xs">
                <span className="font-semibold text-[#292524] flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#B85D43]" /> Ulaşım & Park Kolaylığı
                </span>
                <p className="text-[#78716C] leading-relaxed">
                  Stüdyomuzun önünde anlaşmalı vale hizmeti mevcuttur. M2 Osmanbey Metro durağı Rumeli çıkışına 6 dakika yürüme mesafesindedir.
                </p>
              </div>
            </div>

            {/* Çalışma Saatleri Kartı */}
            <div className="bg-[#262220] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#DFC6B1]">
                <Clock className="w-4 h-4 text-[#B85D43]" />
                <span>Çalışma Saatleri</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="border-b border-[#3E3835] pb-3 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white block">Hafta İçi (Pzt – Cum)</span>
                    <span className="text-[#A89C92] text-[11px]">Sabah & Akşam Tüm Seanslar</span>
                  </div>
                  <span className="text-base font-serif-luxury text-[#DFC6B1] font-bold font-mono tabular-nums">
                    07:00 – 21:30
                  </span>
                </div>

                <div className="border-b border-[#3E3835] pb-3 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white block">Cumartesi</span>
                    <span className="text-[#A89C92] text-[11px]">Hafta Sonu Dinamik Akış</span>
                  </div>
                  <span className="text-base font-serif-luxury text-[#DFC6B1] font-bold font-mono tabular-nums">
                    08:30 – 19:00
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white block">Pazar</span>
                    <span className="text-[#A89C92] text-[11px]">Restoratif & Stretch</span>
                  </div>
                  <span className="text-base font-serif-luxury text-[#DFC6B1] font-bold font-mono tabular-nums">
                    09:30 – 16:30
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Sütun: İnteraktif İletişim Formu (7 Sütun) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#EADBCE] p-6 sm:p-10 shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#B85D43]">
                  Hızlı Mesaj & Danışma
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#292524]">
                  Bize Not Bırakın
                </h3>
                <p className="text-xs text-[#78716C]">
                  Formu doldurun, stüdyo yöneticimiz sizi arayarak tüm detayları aktarsın.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#5C6B57]/10 text-[#5C6B57] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif-luxury font-medium text-[#292524]">
                    Mesajınız Başarıyla İletildi
                  </h4>
                  <p className="text-xs text-[#78716C] max-w-md mx-auto leading-relaxed">
                    Teşekkür ederiz Sayın <span className="font-semibold text-[#292524]">{formData.name}</span>. Talebiniz stüdyo danışmanımıza ulaştı. En kısa sürede <span className="font-semibold text-[#292524]">{formData.phone}</span> numaranızdan dönüş yapacağız.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', subject: 'Tanışma Seansı & Bilgi', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#B85D43] text-white text-xs font-medium uppercase tracking-[0.12em] rounded-xl hover:bg-[#A04A32] transition-colors"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                        Adınız & Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Aslı Yılmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0532 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                        E-Posta Adresiniz
                      </label>
                      <input
                        type="email"
                        placeholder="asli@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                        İlgilendiğiniz Konu
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm text-[#292524] focus:outline-none focus:border-[#B85D43]"
                      >
                        <option value="Tanışma Seansı & Bilgi">Tanışma Seansı & Bilgi (450 ₺)</option>
                        <option value="Aylık Reformer Paketleri">Aylık Reformer Paketleri</option>
                        <option value="Birebir Klinik & Fizyoterapi">Birebir Klinik & Fizyoterapi</option>
                        <option value="Cadillac & Tower Seansları">Cadillac & Tower Seansları</option>
                        <option value="Hamile Pilatesi Bilgisi">Hamile Pilatesi Bilgisi</option>
                        <option value="Diğer Soru / Öneri">Diğer Soru / Öneri</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-1.5">
                      Mesajınız / Belirtmek İstedikleriniz
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Pilates deneyiminiz, katılmak istediğiniz gün/saatler veya merak ettiğiniz her şeyi yazabilirsiniz..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-all shadow-sm active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'İletiliyor...' : 'Mesajı Gönder'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Sıkça Sorulan Sorular (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
            Merak Edilenler
          </span>
          <h2 className="text-3xl font-serif-luxury font-normal text-[#292524]">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xs text-[#78716C]">
            Pilatese başlarken aklınıza gelebilecek tüm soruların yanıtları.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#EADBCE] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2]/50 transition-colors"
                >
                  <span className="text-sm font-semibold text-[#292524]">
                    {faq.question}
                  </span>
                  <span className="text-[#B85D43] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#57534E] leading-relaxed border-t border-[#F5EFEB] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { PILATES_CLASSES, INSTRUCTORS, ScheduleSlot } from '../data/pilatesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialClassId?: string;
  initialSlot?: ScheduleSlot | null;
  initialPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialClassId,
  initialSlot,
  initialPackageId,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClassId, setSelectedClassId] = useState(initialClassId || 'reformer-flow');
  const [selectedDate, setSelectedDate] = useState('2026-10-15');
  const [selectedTime, setSelectedTime] = useState(initialSlot?.time || '09:00 - 09:50');
  const [experienceLevel, setExperienceLevel] = useState('İlk Kez Başlıyorum');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize state when initial values change
  React.useEffect(() => {
    if (initialClassId) setSelectedClassId(initialClassId);
    if (initialSlot) setSelectedTime(initialSlot.time);
  }, [initialClassId, initialSlot]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  const selectedClass = PILATES_CLASSES.find((c) => c.id === selectedClassId) || PILATES_CLASSES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#EADBCE] overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#F4EFEA] border-b border-[#EADBCE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43]">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-serif-luxury font-medium text-[#292524] tracking-tight">
                {initialPackageId ? 'Paket & Üyelik Başvurusu' : 'Seans & Randevu Rezervasyonu'}
              </h3>
              <p className="text-xs text-[#78716C] mt-0.5">
                Nişantaşı Butik Stüdyomuzda Bedeninize Özel Alanınızı Ayırtın
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#78716C] hover:text-[#292524] hover:bg-[#EADBCE]/50 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5C6B57]/10 text-[#5C6B57] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif-luxury font-semibold text-[#292524] mb-2">
                Rezervasyon Talebiniz Alındı
              </h4>
              <p className="text-sm text-[#78716C] max-w-md mx-auto mb-6 leading-relaxed">
                Sayın <span className="font-semibold text-[#292524]">{name}</span>, <span className="font-semibold text-[#292524]">{selectedClass.title}</span> için seans talebiniz stüdyo danışmanımıza iletildi. En geç 30 dakika içerisinde WhatsApp ve telefon üzerinden randevu onayınız için iletişime geçeceğiz.
              </p>

              <div className="w-full bg-[#F4EFEA] border border-[#EADBCE] rounded-xl p-4 text-left text-xs space-y-2 mb-6">
                <div className="flex justify-between text-[#78716C]">
                  <span>Seçilen Seans:</span>
                  <span className="font-medium text-[#292524]">{selectedClass.title}</span>
                </div>
                <div className="flex justify-between text-[#78716C]">
                  <span>Tercih Edilen Saat:</span>
                  <span className="font-medium text-[#292524]">{selectedTime}</span>
                </div>
                <div className="flex justify-between text-[#78716C]">
                  <span>İletişim Numarası:</span>
                  <span className="font-medium text-[#292524]">{phone}</span>
                </div>
                <div className="flex justify-between text-[#78716C]">
                  <span>Stüdyo:</span>
                  <span className="font-medium text-[#292524]">Abdi İpekçi Cad. No: 42/B, Nişantaşı</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#B85D43] text-white text-sm font-medium rounded-xl hover:bg-[#A04A32] transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Seans / Paket Seçimi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                  Ders & Seans Türü
                </label>
                <select
                  value={selectedClassId}
                  onChange={(e) => setSelectedClassId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] focus:outline-none focus:border-[#B85D43]"
                >
                  {PILATES_CLASSES.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.title} ({cls.duration} · {cls.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Gün ve Saat Seçimi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> Tarih Tercihi
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] focus:outline-none focus:border-[#B85D43]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Seans Saati
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] focus:outline-none focus:border-[#B85D43]"
                  >
                    <option value="07:30 - 08:20">07:30 - 08:20 (Sabah Erken Akış)</option>
                    <option value="09:00 - 09:50">09:00 - 09:50 (Sabah Enerjisi)</option>
                    <option value="10:30 - 11:20">10:30 - 11:20 (Kuşluk Seansı)</option>
                    <option value="12:30 - 13:20">12:30 - 13:20 (Öğle Molası Flow)</option>
                    <option value="14:30 - 15:20">14:30 - 15:20 (Öğleden Sonra Seansı)</option>
                    <option value="18:00 - 18:50">18:00 - 18:50 (İş Çıkışı Reformer)</option>
                    <option value="19:30 - 20:20">19:30 - 20:20 (Akşam Kuvvet Seansı)</option>
                    <option value="20:30 - 21:20">20:30 - 21:20 (Gece Dinlendirici Akış)</option>
                  </select>
                </div>
              </div>

              {/* Kişisel Bilgiler */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Adınız ve Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ece Demir"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" /> Telefon / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> E-Posta Adresi
                </label>
                <input
                  type="email"
                  placeholder="ece.demir@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                />
              </div>

              {/* Deneyim Seviyesi */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                  Daha Önce Pilates Deneyiminiz Var Mı?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['İlk Kez Başlıyorum', '1 - 6 Ay Arası', '1 Yıldan Fazla'].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setExperienceLevel(lvl)}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border text-center transition-colors ${
                        experienceLevel === lvl
                          ? 'bg-[#B85D43] text-white border-[#B85D43]'
                          : 'bg-white text-[#57534E] border-[#EADBCE] hover:border-[#DEC8B7]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notlar / Sağlık Durumu */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
                  Sağlık Notu / Eğitmene İletmek İstedikleriniz (Opsiyonel)
                </label>
                <textarea
                  rows={2}
                  placeholder="Boyun düzleşmesi, bel hassasiyeti veya doğum sonrası durumunuz varsa belirtiniz..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 bg-white border border-[#EADBCE] rounded-xl text-sm text-[#292524] placeholder-[#A8A29E] focus:outline-none focus:border-[#B85D43]"
                />
              </div>

              {/* Bilgilendirme */}
              <div className="bg-[#F5EFEB] rounded-xl p-3 text-xs text-[#78716C] flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B85D43] shrink-0 mt-0.5" />
                <span>
                  Nişantaşı stüdyomuzda seans öncesi ücretsiz postür analizi yapılır. Randevu saatinizden 10 dakika önce stüdyomuzda bulunmanızı rica ederiz.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#EADBCE]">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-[#78716C] hover:text-[#292524] transition-colors"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-sm font-medium rounded-xl transition-colors shadow-sm disabled:opacity-60 flex items-center gap-2"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Randevuyu Onayla & Gönder'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

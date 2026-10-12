import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Info, CheckCircle, ShieldAlert } from 'lucide-react';
import { WORKING_HOURS, WEEKLY_SCHEDULE, ScheduleSlot } from '../data/pilatesData';

interface SchedulePageProps {
  onOpenBooking: (classId?: string, slot?: ScheduleSlot) => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onOpenBooking }) => {
  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'] as const;
  const [selectedDay, setSelectedDay] = useState<typeof days[number]>('Pazartesi');
  const [periodFilter, setPeriodFilter] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const filteredSlots = WEEKLY_SCHEDULE.filter((slot) => {
    if (slot.day !== selectedDay) return false;
    if (periodFilter === 'all') return true;
    return slot.period === periodFilter;
  });

  return (
    <div className="space-y-16 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
            Haftalık Takvim & Çalışma Saatleri
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#292524] tracking-tight">
            Stüdyo Saatleri ve Ders Programı
          </h1>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Haftanın 7 günü açık stüdyomuzda, sabahın ilk ışıklarından geceye uzanan seanslarımızla ritminizi kaybetmeyin.
          </p>
        </div>
      </section>

      {/* Prominent Working Hours Cards (Hafta İçi & Hafta Sonu) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hafta İçi */}
          <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B85D43]">
                Pazartesi – Cuma
              </span>
              <span className="text-[11px] bg-[#F5EFEB] text-[#57534E] px-2.5 py-0.5 rounded font-medium">
                Hafta İçi
              </span>
            </div>
            <h3 className="text-3xl font-serif-luxury font-semibold text-[#292524] font-mono tabular-nums">
              07:00 – 21:30
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              İş öncesi sabah 07:30 akışları, öğle molası ekspres reformer ve akşam çıkışı güç seansları dahil günde 8 seans.
            </p>
            <div className="pt-2 text-[11px] text-[#A8A29E] border-t border-[#F5EFEB] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B85D43]" />
              <span>İlk Seans: 07:30 · Son Seans: 20:30</span>
            </div>
          </div>

          {/* Cumartesi */}
          <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B85D43]">
                Cumartesi
              </span>
              <span className="text-[11px] bg-[#F5EFEB] text-[#57534E] px-2.5 py-0.5 rounded font-medium">
                Hafta Sonu
              </span>
            </div>
            <h3 className="text-3xl font-serif-luxury font-semibold text-[#292524] font-mono tabular-nums">
              08:30 – 19:00
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Haftanın gerginliğini atan dinamik jumpboard kardiyo, cadillac artikülasyon ve omurga uzatma seansları.
            </p>
            <div className="pt-2 text-[11px] text-[#A8A29E] border-t border-[#F5EFEB] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B85D43]" />
              <span>İlk Seans: 09:00 · Son Seans: 16:30</span>
            </div>
          </div>

          {/* Pazar */}
          <div className="bg-white rounded-2xl border border-[#EADBCE] p-6 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B85D43]">
                Pazar
              </span>
              <span className="text-[11px] bg-[#F5EFEB] text-[#57534E] px-2.5 py-0.5 rounded font-medium">
                Restoratif Gün
              </span>
            </div>
            <h3 className="text-3xl font-serif-luxury font-semibold text-[#292524] font-mono tabular-nums">
              09:30 – 16:30
            </h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Yeni haftaya hafif ve dengeli başlamak için yavaş akışlı restoratif esneme, nefes ve derin kas gevşemesi.
            </p>
            <div className="pt-2 text-[11px] text-[#A8A29E] border-t border-[#F5EFEB] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B85D43]" />
              <span>İlk Seans: 10:00 · Son Seans: 15:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Daily Schedule Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#EADBCE] p-6 sm:p-8 shadow-sm space-y-6">
          {/* Day Selector Buttons */}
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#78716C] block">
              Gün Seçiniz:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-3 px-2 text-xs font-medium rounded-xl border transition-all text-center ${
                    selectedDay === day
                      ? 'bg-[#B85D43] text-white border-[#B85D43] shadow-sm'
                      : 'bg-[#FAF7F2] text-[#57534E] border-[#EADBCE] hover:border-[#DFC6B1]'
                  }`}
                >
                  <span className="block font-semibold">{day}</span>
                  <span className="text-[11px] opacity-80 mt-0.5 block">
                    {day === 'Cumartesi' || day === 'Pazar' ? 'Hafta Sonu' : 'Hafta İçi'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F5EFEB]">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#78716C]">Zaman Aralığı:</span>
              {[
                { id: 'all', label: 'Tüm Gün' },
                { id: 'morning', label: 'Sabah (07:00-12:00)' },
                { id: 'afternoon', label: 'Öğle (12:00-17:00)' },
                { id: 'evening', label: 'Akşam (17:00-21:30)' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setPeriodFilter(t.id as any)}
                  className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                    periodFilter === t.id
                      ? 'bg-[#262220] text-white'
                      : 'bg-[#F5EFEB] text-[#57534E] hover:text-[#292524]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#78716C]">
              <span className="font-semibold text-[#292524]">{selectedDay}</span> günü için {filteredSlots.length} seans listeleniyor
            </div>
          </div>

          {/* Slot Cards List */}
          <div className="space-y-3 pt-2">
            {filteredSlots.length === 0 ? (
              <div className="text-center py-12 text-[#78716C] bg-[#FAF7F2] rounded-2xl border border-dashed border-[#EADBCE]">
                Seçtiğiniz zaman diliminde planlanmış seans bulunmamaktadır. Lütfen diğer saat dilimlerini kontrol ediniz.
              </div>
            ) : (
              filteredSlots.map((slot) => {
                const spotsLeft = slot.availableSpots;
                const isAlmostFull = spotsLeft <= 1;

                return (
                  <div
                    key={slot.id}
                    className="p-4 sm:p-5 rounded-2xl border border-[#EADBCE] bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] hover:border-[#DFC6B1] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Time & Class info */}
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="bg-white border border-[#EADBCE] px-3.5 py-2.5 rounded-xl text-center shrink-0">
                        <span className="text-xs text-[#78716C] block uppercase font-medium">Saat</span>
                        <span className="text-sm sm:text-base font-semibold font-mono tabular-nums text-[#292524]">
                          {slot.time}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#78716C]">
                          <span className="font-medium text-[#B85D43]">{slot.level}</span>
                          <span aria-hidden="true">·</span>
                          <span>{slot.intensity}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-[#292524]">
                            <User className="w-3.5 h-3.5 text-[#78716C]" />
                            {slot.instructor}
                          </span>
                        </div>
                        <h4 className="text-lg font-serif-luxury font-medium text-[#292524]">
                          {slot.className}
                        </h4>
                      </div>
                    </div>

                    {/* Spots & Booking button */}
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#EADBCE]">
                      <div className="text-right">
                        <span className="text-xs text-[#78716C] block">Mevcut Kontenjan</span>
                        <span
                          className={`text-xs font-semibold ${
                            isAlmostFull ? 'text-[#B85D43]' : 'text-[#5C6B57]'
                          }`}
                        >
                          {spotsLeft} / {slot.maxSpots} Kişi Kaldı
                        </span>
                      </div>

                      <button
                        onClick={() => onOpenBooking(slot.classId, slot)}
                        className="px-5 py-2.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.12em] font-medium rounded-xl transition-all shadow-sm active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Rezerve Et</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Rezervasyon Kuralları & Stüdyo Prosedürü */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFEA] border border-[#EADBCE] rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-serif-luxury font-medium text-[#292524] mb-4 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#B85D43]" /> Seans Öncesi Önemli Bilgilendirme
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#57534E]">
            <div className="space-y-1">
              <span className="font-semibold text-[#292524] block">10 Dakika Kuralı</span>
              <p className="leading-relaxed text-[#78716C]">
                Diğer üyelerin odaklanmasını korumak ve eğitmenin seans başlangıcında yapacağı postür kontrollerini kaçırmamak adına seans başlamadan en az 10 dakika önce stüdyoda bulunmanızı rica ederiz.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#292524] block">Ücretsiz İptal Süresi</span>
              <p className="leading-relaxed text-[#78716C]">
                Katılamayacağınız seansları, yedek listedeki üyelerimize yer açılması için en geç 12 saat öncesine kadar web sitemizden veya WhatsApp üzerinden mazeretsiz erteleyebilirsiniz.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-semibold text-[#292524] block">Kişisel Donanım</span>
              <p className="leading-relaxed text-[#78716C]">
                Reformer arabasında güvenli tutuş için kaymaz tabanlı pilates çorabı gereklidir. Duş havlusu, şampuan ve detoks suları stüdyomuz tarafından ikram edilir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

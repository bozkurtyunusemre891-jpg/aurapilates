import React from 'react';
import { ArrowRight, Sparkles, Clock, Check, Star, ShieldCheck, HeartPulse, Compass } from 'lucide-react';
import { PILATES_CLASSES, WORKING_HOURS, TESTIMONIALS } from '../data/pilatesData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: (classId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenBooking }) => {
  const featuredClasses = PILATES_CLASSES.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-[#262220] shadow-xl min-h-[580px] lg:min-h-[640px] flex items-center">
            {/* Background Image with Measured Scrim */}
            <img
              src="/src/assets/images/hero_pilates_studio_1791826665353.jpg"
              alt="AURA Pilates Studio Butik Reformer Salonu"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

            {/* Hero Text Content */}
            <div className="relative z-10 max-w-2xl px-6 sm:px-12 lg:px-16 py-16 text-white space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#DFC6B1]">
                <Sparkles className="w-4 h-4 text-[#C86D51]" />
                <span>Nişantaşı Butik Reformer & Klinik Atölye</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal tracking-tight leading-[1.12] text-balance">
                Bedenin Ritmi, <br />
                <span className="italic font-light text-[#F4EFEA]">Zihnin Derin Dengesi.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#EADBCE] font-light leading-relaxed max-w-xl">
                Günün karmaşasından uzaklaşın. Joseph Pilates’in klasik anatomik prensiplerini, ferah gün ışığı alan butik stüdyomuzda maksimum 5 kişilik gruplar ve birebir seanslarla keşfedin.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('trial-session')}
                  className="px-7 py-3.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center gap-2"
                >
                  <span>İlk Keşif Seansı Ayırt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('classes')}
                  className="px-6 py-3.5 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] border border-[#FAF7F2]/30 text-xs uppercase tracking-[0.16em] font-medium rounded-xl transition-all backdrop-blur-sm"
                >
                  Dersleri İncele
                </button>
              </div>

              {/* Unboxed Micro Metadata */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#DFC6B1]/90">
                <span>Maks. 5 Kişi Butik Gruplar</span>
                <span aria-hidden="true">·</span>
                <span>Balanced Body® Ekipmanları</span>
                <span aria-hidden="true">·</span>
                <span>Fizyoterapist Eğitmenler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Çalışma Saatleri Hızlı Bakış Bandı */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFEA] border border-[#EADBCE] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> Haftalık Açık Saatlerimiz
              </span>
              <h2 className="text-2xl font-serif-luxury font-medium text-[#292524]">
                Gününüzün Her Anına Uygun Esnek Seanslar
              </h2>
              <p className="text-xs text-[#78716C]">
                Sabah 07:00 iş öncesi enerji derslerinden, akşam 21:30 dinlendirici restoratif seanslara kadar yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:w-3/5">
              <div className="bg-white p-4 rounded-xl border border-[#EADBCE]">
                <span className="text-xs text-[#78716C] block">{WORKING_HOURS.weekdays.title}</span>
                <span className="text-sm font-semibold text-[#292524] block mt-0.5">{WORKING_HOURS.weekdays.days}</span>
                <span className="text-base font-serif-luxury text-[#B85D43] font-semibold block mt-1">
                  {WORKING_HOURS.weekdays.hours}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#EADBCE]">
                <span className="text-xs text-[#78716C] block">Cumartesi</span>
                <span className="text-sm font-semibold text-[#292524] block mt-0.5">Hafta Sonu Canlılığı</span>
                <span className="text-base font-serif-luxury text-[#B85D43] font-semibold block mt-1">
                  {WORKING_HOURS.saturday.hours}
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#EADBCE]">
                <span className="text-xs text-[#78716C] block">Pazar</span>
                <span className="text-sm font-semibold text-[#292524] block mt-0.5">Yenilenme & Stretch</span>
                <span className="text-base font-serif-luxury text-[#B85D43] font-semibold block mt-1">
                  {WORKING_HOURS.sunday.hours}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#EADBCE] flex items-center justify-between">
            <span className="text-xs text-[#78716C]">
              Tüm ders saatleri ve eğitmen çizelgesi için haftalık takvime göz atabilirsiniz.
            </span>
            <button
              onClick={() => setActiveTab('schedule')}
              className="text-xs font-semibold text-[#B85D43] hover:text-[#A04A32] flex items-center gap-1.5 transition-colors"
            >
              <span>Haftalık Programı Gör</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Neden AURA? - Editorial Story & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative rounded-2xl overflow-hidden border border-[#EADBCE] shadow-md group">
            <img
              src="/src/assets/images/pilates_movement_session_1791826678009.jpg"
              alt="AURA Pilates Reformer Seansı"
              className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-[#DFC6B1] block mb-1">
                Kişiselleştirilmiş Dikkat
              </span>
              <p className="text-lg font-serif-luxury italic">
                “10 seansta farkı hissedeceksiniz, 20 seansta farkı göreceksiniz, 30 seansta yepyeni bir bedene kavuşacaksınız.”
              </p>
              <span className="text-xs text-[#DFC6B1] mt-1 block">— Joseph Pilates</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
                Felsefemiz & Yaklaşımımız
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524] text-balance">
                Her Beden Eşsizdir, Her Hareket Bir Sanattır.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              AURA, standart ve kalabalık spor salonlarının gürültüsünden uzakta, omurganızın doğal anatomik yapısına saygı duyan bir sığınak olarak tasarlandı.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#292524]">Maksimum 5 Kişi ile Sınırlı Butik Seanslar</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Gözden kaçan hiçbir postür hatası olmaz. Eğitmenimiz her tekrarda hizanızı, nefesinizi ve yay direncinizi birebir yönetir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                  <HeartPulse className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#292524]">Fizyoterapi ve Klinik Anatomi Temeli</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Omurga fıtıkları, skolyoz ve duruş bozukluklarına yönelik güvenli, bilimsel ve hedefe yönelik modifikasyonlar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[#292524]">Orijinal Balanced Body® Allegro 2</h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Dünya standartlarında akıcı yay mekanizması, yumuşak kayışlar ve sessiz araba rayları ile kusursuz hareket deneyimi.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('about')}
                className="px-6 py-3 bg-[#262220] hover:bg-[#3E3835] text-[#FAF7F2] text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Hikayemizi ve Eğitmenlerimizi Tanıyın</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Dersler */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
              Derslerimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524] mt-1">
              Bedeninize ve İhtiyacınıza Uygun Akışlar
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('classes')}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B85D43] hover:text-[#A04A32] flex items-center gap-1.5 transition-colors self-start md:self-auto"
          >
            <span>Tüm Dersleri İncele (6 Farklı Metot)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-[#EADBCE]">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-[#292524] border border-[#EADBCE]">
                  {cls.capacity}
                </div>
                <div className="absolute top-3 right-3 bg-[#262220]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white">
                  {cls.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#78716C]">
                    <span>{cls.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cls.intensity}</span>
                  </div>
                  <h3 className="text-xl font-serif-luxury font-medium text-[#292524]">
                    {cls.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-relaxed line-clamp-3">
                    {cls.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F4EFEA] flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking(cls.id)}
                    className="text-xs font-semibold text-[#B85D43] hover:text-[#A04A32] transition-colors flex items-center gap-1"
                  >
                    <span>Hemen Randevu Al</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('classes')}
                    className="text-xs text-[#78716C] hover:text-[#292524]"
                  >
                    Detaylar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cadillac & Ekipman Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#EADBCE] rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
                Stüdyo Donanımı
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524]">
                Cadillac Trapeze & Tower ile Yerçekimine Karşı Özgürlük
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Stüdyomuzdaki orijinal ahşap tabanlı Cadillac aparatları, sıradan egzersiz makinelerinin ulaşamadığı derin artikülasyon ve omurga esnemesini mümkün kılar. Askı kayışları ile bedeninizi hafifletirken, yayların desteğiyle güvenle güçlenirsiniz.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-[#57534E]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B85D43]" />
                  <span>Maksimum 3 kişilik seanslar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B85D43]" />
                  <span>Omurga dekompresyonu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B85D43]" />
                  <span>Skolyoz & boyun dostu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B85D43]" />
                  <span>Derin nefes koordinasyonu</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('cadillac-tower')}
                  className="px-6 py-3 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-colors"
                >
                  Cadillac Seansı Ayırt
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#EADBCE]">
              <img
                src="/src/assets/images/pilates_cadillac_detail_1791826689955.jpg"
                alt="Cadillac Trapeze Detayı"
                className="w-full h-[360px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Üye Yorumları / Sosyal Kanıt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
            Üyelerimizin Deneyimleri
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524]">
            Hissedilen Hafiflik, Görülen Değişim
          </h2>
          <p className="text-xs text-[#78716C]">
            AURA ailesine katılan üyelerimizin stüdyomuz ve eğitmenlerimiz hakkındaki gerçek geri bildirimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-[#B85D43] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B85D43]" />
                  ))}
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F4EFEA]">
                <h4 className="text-sm font-semibold text-[#292524]">{t.name}</h4>
                <p className="text-xs text-[#78716C]">{t.role}</p>
                <div className="mt-2 inline-block bg-[#F5EFEB] text-[#B85D43] px-2.5 py-0.5 rounded text-[11px] font-medium">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Başlangıç CTA Bandı */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#262220] rounded-3xl p-8 sm:p-12 text-center text-white space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#DFC6B1]">
              İlk Adımı Atın
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal leading-snug">
              Bedeninizle Tanışmanın En Zarif Zamanı Şimdi.
            </h2>
            <p className="text-sm text-[#DFC6B1] font-light leading-relaxed">
              İlk keşif seansımızda ücretsiz 15 dakikalık postür ve omurga analizi ile eğitmenimizle birebir hedeflerinizi belirleyin.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenBooking('trial-session')}
                className="px-8 py-3.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.16em] font-medium rounded-xl transition-all shadow-lg active:scale-[0.98]"
              >
                450 ₺ İle Tanışma Seansı Al
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className="px-6 py-3.5 bg-transparent border border-[#DFC6B1]/40 text-[#FAF7F2] hover:bg-[#DFC6B1]/10 text-xs uppercase tracking-[0.16em] font-medium rounded-xl transition-colors"
              >
                Tüm Fiyat & Paketleri Gör
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Award, Heart, CheckCircle2, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { INSTRUCTORS } from '../data/pilatesData';

interface AboutPageProps {
  onOpenBooking: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, setActiveTab }) => {
  return (
    <div className="space-y-20 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
            Hakkımızda & Felsefemiz
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#292524] tracking-tight">
            AURA’nın Hikayesi ve Değerleri
          </h1>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Klasik pilatesin köklü anatomi disiplinini modern biyomekanik bilimle buluşturan, bedeninizin doğal zarafetini uyandırmak için kurulmuş bir hareket atölyesi.
          </p>
        </div>
      </section>

      {/* Hikaye & Doğuş - 2 Sütunlu Görsel Bölüm */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-[#EADBCE] shadow-md">
            <img
              src="/src/assets/images/hero_pilates_studio_1791826665353.jpg"
              alt="AURA Pilates Studio İç Mekan"
              className="w-full h-[480px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="uppercase tracking-widest text-[#DFC6B1] font-semibold block mb-1">
                Nişantaşı Stüdyosu
              </span>
              <p className="text-sm font-serif-luxury italic">
                Doğal gün ışığı, organik keten perdeler ve zeytin ağaçlarıyla çevrili mimari dinginlik.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
              Kuruluş Hikayemiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524]">
              Gürültülü Şehirde, Omurganıza Bir Nefes Alanı
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              AURA Pilates Studio, 2018 yılında fizyoterapi kökenli uzman eğitmenimiz Selin Aksoy tarafından Nişantaşı’nda kuruldu. Kuruluş amacımız, ticari fitness merkezlerinin fabrikasyon yaklaşımına bir alternatif sunmaktı: her öğrencinin omurga yapısına ve biyomekaniğine duyarlı, butik ve şefkatli bir alan.
            </p>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Atölyemizde asla 5 kişiyi aşmayan küçük gruplar ve birebir seanslarla çalışırız. Her harekette nefes ile hareketin mükemmel senkronizasyonunu hedefleriz.
            </p>

            {/* Metrikler */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EADBCE]">
              <div>
                <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#B85D43] font-mono tabular-nums">
                  12+
                </span>
                <span className="text-xs text-[#78716C] block mt-0.5">Yıllık Tecrübe</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#B85D43] font-mono tabular-nums">
                  2.400+
                </span>
                <span className="text-xs text-[#78716C] block mt-0.5">Dönüşen Omurga</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#B85D43] font-mono tabular-nums">
                  Maks. 5
                </span>
                <span className="text-xs text-[#78716C] block mt-0.5">Kişilik Gruplar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Temel İlkemiz */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
            Değerlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524]">
            Harekete Yön Veren Dört Prensip
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-sm space-y-3">
            <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] inline-block">
              <Sparkles className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-serif-luxury font-medium text-[#292524]">01. Merkezleme (Centering)</h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Tüm güç ve denge, gövdenin derin merkezinden (powerhouse) kaynaklanır. Pelvik taban ve diyafram uyumuyla derin stabilizasyon inşa edilir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-sm space-y-3">
            <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] inline-block">
              <Award className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-serif-luxury font-medium text-[#292524]">02. Hassasiyet (Precision)</h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Düzinelerce hatalı tekrar yerine, tek bir kusursuz ve hizalı tekrar beden hafızasında kalıcı iyileşme sağlar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-sm space-y-3">
            <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] inline-block">
              <Heart className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-serif-luxury font-medium text-[#292524]">03. Akıcılık (Flow)</h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Hareketler birbirinden kopuk değil; su gibi akıcı ve organik bir ritimle birbirine bağlanır.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EADBCE] shadow-sm space-y-3">
            <span className="p-2.5 rounded-xl bg-[#FAF7F2] text-[#B85D43] border border-[#EADBCE] inline-block">
              <Shield className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-serif-luxury font-medium text-[#292524]">04. Şefkatli Farkındalık</h3>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Bedeninizi zorlamak değil, sınırlarına saygı duyarak güvenli adımlarla genişletmek esastır.
            </p>
          </div>
        </div>
      </section>

      {/* Eğitmen Kadromuz (Instructor Bios with Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
            Uzman Kadro
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#292524]">
            Rehberlik Eden Eğitmenlerimiz
          </h2>
          <p className="text-xs text-[#78716C]">
            Tüm eğitmenlerimiz uluslararası akreditasyona ve fizyoterapi/anatomi uzmanlığına sahiptir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTRUCTORS.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl border border-[#EADBCE] overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-[#EADBCE]">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-[#262220]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white">
                    {inst.experience}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif-luxury font-medium text-[#292524]">
                      {inst.name}
                    </h3>
                    <span className="text-xs text-[#B85D43] font-medium block mt-0.5">
                      {inst.role}
                    </span>
                  </div>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {inst.bio}
                  </p>

                  <div className="pt-3 border-t border-[#F5EFEB] space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                      Sertifikalar & Yetkinlikler:
                    </span>
                    {inst.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#292524]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B85D43] shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 bg-[#FAF7F2] hover:bg-[#B85D43] hover:text-white text-[#292524] border border-[#EADBCE] text-xs uppercase tracking-[0.12em] font-medium rounded-xl transition-all"
                >
                  {inst.name} ile Seans Ayırt
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stüdyo Ayrıcalıkları & Olanaklar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#EADBCE] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
              Konfor & Hijyen
            </span>
            <h2 className="text-3xl font-serif-luxury font-medium text-[#292524]">
              Her Detayı Düşünülmüş Bir Atölye
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-[#57534E]">
            <div className="space-y-1.5 bg-white p-4 rounded-xl border border-[#EADBCE]">
              <span className="font-semibold text-[#292524] text-sm block">HEPA 13 Hava Filtreleme</span>
              <p className="text-[#78716C] leading-relaxed">
                Stüdyomuz medikal seviyede hava temizleme üniteleriyle sürekli filtrelenir, daima bol oksijenli ve taze bir nefes ortamı sunar.
              </p>
            </div>

            <div className="space-y-1.5 bg-white p-4 rounded-xl border border-[#EADBCE]">
              <span className="font-semibold text-[#292524] text-sm block">Organik Banyo & Duş Olanakları</span>
              <p className="text-[#78716C] leading-relaxed">
                İş öncesi veya çıkışında seans sonrası ferahlamanız için özel duş kabinleri, organik şampuanlar ve lüks havlu servisi.
              </p>
            </div>

            <div className="space-y-1.5 bg-white p-4 rounded-xl border border-[#EADBCE]">
              <span className="font-semibold text-[#292524] text-sm block">Bitki Çayları & Detoks Barı</span>
              <p className="text-[#78716C] leading-relaxed">
                Seans öncesi ve sonrasında dinlenme alanımızda taze demlenmiş organik bitki çayları ve taze alkali meyve suları ikram edilir.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EADBCE] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Nişantaşı stüdyomuzu dilediğiniz zaman ziyaret edip ortamı hissedebilirsiniz.
            </span>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-6 py-2.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-colors flex items-center gap-1.5"
            >
              <span>İletişime Geçin & Konum Alın</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

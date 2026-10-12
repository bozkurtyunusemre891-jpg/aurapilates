import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Clock, Users, Flame, Layers } from 'lucide-react';
import { PILATES_CLASSES, PilatesClass } from '../data/pilatesData';

interface ClassesPageProps {
  onOpenBooking: (classId?: string) => void;
  setActiveTab: (tab: string) => void;
}

export const ClassesPage: React.FC<ClassesPageProps> = ({ onOpenBooking, setActiveTab }) => {
  const [filter, setFilter] = useState<'all' | 'reformer' | 'cadillac' | 'private' | 'mat'>('all');

  const filteredClasses = PILATES_CLASSES.filter((c) => {
    if (filter === 'all') return true;
    return c.category === filter;
  });

  return (
    <div className="space-y-16 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
            Metodoloji & Seans Türleri
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#292524] tracking-tight">
            Bedeninize Saygı Duyan Derslerimiz
          </h1>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            AURA’da hiçbir seans standart bir şablon değildir. İster dinamik yay dirençleriyle terlemek isteyin, ister omurganızı rahatlatıp nefes almak isteyin; seviyenize ve hedeflerinize uygun akışı seçin.
          </p>
        </div>

        {/* Filter Segmented Controls (Interactive buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'Tüm Seanslar (6)' },
            { id: 'reformer', label: 'Reformer Pilates' },
            { id: 'cadillac', label: 'Cadillac & Tower' },
            { id: 'private', label: 'Birebir & Terapi' },
            { id: 'mat', label: 'Restoratif & Mat' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium rounded-xl transition-all ${
                filter === btn.id
                  ? 'bg-[#B85D43] text-white shadow-sm'
                  : 'bg-white text-[#78716C] border border-[#EADBCE] hover:border-[#DFC6B1] hover:text-[#292524]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Classes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl border border-[#EADBCE] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-60 overflow-hidden bg-[#EADBCE]">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-[#292524] border border-[#EADBCE] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#B85D43]" />
                  <span>{cls.capacity}</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#262220]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{cls.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#78716C]">
                    <span className="font-medium text-[#B85D43]">{cls.level}</span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#B85D43]" />
                      {cls.intensity}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif-luxury font-medium text-[#292524]">
                    {cls.title}
                  </h3>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {cls.description}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="pt-2 border-t border-[#F4EFEA] space-y-1.5">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#78716C] block">
                      Kazanımlar & Hedef:
                    </span>
                    {cls.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#292524]">
                        <Check className="w-3.5 h-3.5 text-[#B85D43] shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Kimler İçin Uygun */}
                  <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#EADBCE] text-xs text-[#78716C]">
                    <span className="font-semibold text-[#292524]">Önerilen: </span>
                    {cls.recommendedFor}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(cls.id)}
                    className="w-full py-2.5 px-4 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>Bu Dersi Rezerve Et</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ekipman ve Atölye Standartları Rehberi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFEA] border border-[#EADBCE] rounded-3xl p-8 lg:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43]">
              Kullanılan Ekipmanlar
            </span>
            <h2 className="text-3xl font-serif-luxury font-medium text-[#292524]">
              Dünya Standardı Balanced Body® Donanımı
            </h2>
            <p className="text-xs text-[#78716C]">
              Atölyemizde sadece biyomekanik güvenliği kanıtlanmış, omurgayı anatomik formunda destekleyen ekipmanlar kullanılır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-mono font-semibold text-[#B85D43]">01. Allegro 2 Reformer</span>
              <h4 className="text-base font-semibold text-[#292524]">Akıcı Direnç Sistemi</h4>
              <p className="text-xs text-[#78716C] leading-relaxed">
                Yumuşak karbon kızaklar ve patentli yay dirençleri sayesinde eklemleri yormadan derin kas fiberlerini ateşler.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-mono font-semibold text-[#B85D43]">02. Cadillac Trapeze</span>
              <h4 className="text-base font-semibold text-[#292524]">Omurga Dekompresyonu</h4>
              <p className="text-xs text-[#78716C] leading-relaxed">
                Askı barları ve tavan yayları ile yerçekimsiz artikülasyon imkanı sunar; diskler arası baskıyı sıfırlar.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EADBCE] space-y-2">
              <span className="text-xs font-mono font-semibold text-[#B85D43]">03. Wunda Chair & Barrel</span>
              <h4 className="text-base font-semibold text-[#292524]">Denge & Postür Açıklığı</h4>
              <p className="text-xs text-[#78716C] leading-relaxed">
                Dar tabanlı pedal sistemi ile pelvik kontrolü ve sırt ekstansiyonunu mükemmelleştirir.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#78716C]">
              Hangi dersin sizin için en uygun olduğunu belirlemek ister misiniz?
            </span>
            <button
              onClick={() => setActiveTab('contact')}
              className="px-5 py-2.5 bg-[#262220] hover:bg-[#3E3835] text-white text-xs uppercase tracking-[0.12em] rounded-xl transition-colors"
            >
              Eğitmenimize Danışın
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

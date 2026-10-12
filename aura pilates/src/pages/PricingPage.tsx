import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Gift } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/pilatesData';

interface PricingPageProps {
  onOpenBooking: (packageId?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'group' | 'private' | 'trial'>('all');
  const [studentDiscount, setStudentDiscount] = useState(false);

  const discountRate = studentDiscount ? 0.85 : 1.0;

  const filteredPlans = PRICING_PLANS.filter((p) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'private') return p.category === 'private' || p.category === 'duet';
    return p.category === filterCategory;
  });

  return (
    <div className="space-y-16 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B85D43]">
            Şeffaf & Esnek Fiyatlandırma
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#292524] tracking-tight">
            Üyelik ve Seans Paketleri
          </h1>
          <p className="text-sm sm:text-base text-[#78716C] leading-relaxed">
            Gizli aidat yok, taahhüt baskısı yok. Butik maksimum 5 kişilik seanslarımızda ihtiyacınıza ve programınıza en uygun paketi seçin.
          </p>
        </div>

        {/* Filter Controls & Discount Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-4 border-t border-[#EADBCE]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Tüm Paketler' },
              { id: 'group', label: 'Grup Reformer' },
              { id: 'private', label: 'Birebir VIP & Düet' },
              { id: 'trial', label: 'Tanışma Seansı' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.12em] font-medium rounded-xl transition-all ${
                  filterCategory === cat.id
                    ? 'bg-[#B85D43] text-white shadow-sm'
                    : 'bg-white text-[#78716C] border border-[#EADBCE] hover:text-[#292524]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Student / Healthcare Toggle */}
          <div className="flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-xl border border-[#EADBCE]">
            <input
              type="checkbox"
              id="studentDiscount"
              checked={studentDiscount}
              onChange={(e) => setStudentDiscount(e.target.checked)}
              className="w-4 h-4 accent-[#B85D43] rounded cursor-pointer"
            />
            <label htmlFor="studentDiscount" className="text-xs font-medium text-[#57534E] cursor-pointer">
              Öğrenci & Sağlık Çalışanı (%15 İndirim)
            </label>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => {
            const finalPrice = Math.round(plan.price * discountRate);
            const finalPerSession = Math.round(finalPrice / plan.sessionCount);

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl border transition-all flex flex-col justify-between relative overflow-hidden ${
                  plan.popular
                    ? 'border-[#B85D43] shadow-md ring-1 ring-[#B85D43]'
                    : 'border-[#EADBCE] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {plan.badge && (
                  <div
                    className={`text-center py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] ${
                      plan.popular
                        ? 'bg-[#B85D43] text-white'
                        : 'bg-[#F4EFEA] text-[#B85D43] border-b border-[#EADBCE]'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Plan Name & Category */}
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#78716C] block">
                      {plan.period}
                    </span>
                    <h3 className="text-2xl font-serif-luxury font-medium text-[#292524] mt-1">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-[#F5EFEB]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-serif-luxury font-bold text-[#292524] font-mono tabular-nums">
                        {finalPrice.toLocaleString('tr-TR')} ₺
                      </span>
                      {studentDiscount && (
                        <span className="text-xs text-[#A8A29E] line-through ml-2">
                          {plan.price.toLocaleString('tr-TR')} ₺
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#78716C] mt-1">
                      Seans Başı: <span className="font-semibold text-[#B85D43]">{finalPerSession.toLocaleString('tr-TR')} ₺</span> ({plan.sessionCount} Seans)
                    </div>
                  </div>

                  {/* Highlights info */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#78716C] bg-[#FAF7F2] p-3 rounded-xl border border-[#EADBCE]">
                    <div>
                      <span className="block text-[#A8A29E]">Geçerlilik:</span>
                      <span className="font-medium text-[#292524]">{plan.validityDays} Gün</span>
                    </div>
                    <div>
                      <span className="block text-[#A8A29E]">Dondurma Hakkı:</span>
                      <span className="font-medium text-[#292524]">
                        {plan.freezeDays > 0 ? `${plan.freezeDays} Gün` : 'Yok'}
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#78716C] block">
                      Pakete Dahil Olanlar:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#57534E]">
                        <Check className="w-4 h-4 text-[#B85D43] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onOpenBooking(plan.id)}
                    className={`w-full py-3 px-4 text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-[#B85D43] hover:bg-[#A04A32] text-white shadow-sm'
                        : 'bg-[#262220] hover:bg-[#3E3835] text-white'
                    }`}
                  >
                    <span>Paketi Seç & Başvur</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tanışma Seansı Özel Çağrısı */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#EADBCE] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B85D43] flex items-center gap-1.5">
              <Gift className="w-4 h-4" /> Yeni Başlayanlara Özel Keşif
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#292524]">
              İlk Seansınızı 450 ₺ İle Deneyimleyin
            </h3>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
              Uzun vadeli paket almadan önce stüdyomuzu, Allegro 2 Reformer makinelerimizi ve eğitmen yaklaşımımızı test edin. Seans öncesi 15 dakikalık ücretsiz postür analizi fiyata dahildir.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('trial-session')}
            className="px-6 py-3.5 bg-[#B85D43] hover:bg-[#A04A32] text-white text-xs uppercase tracking-[0.14em] font-medium rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Tanışma Seansı Randevusu Al
          </button>
        </div>
      </section>

      {/* Paket Karşılaştırma & Sıkça Sorulan Sorular */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#EADBCE] rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-2xl font-serif-luxury font-medium text-[#292524] mb-6">
            Paket Politikaları ve Hizmet Detayları
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#57534E]">
            <div className="space-y-2">
              <span className="font-semibold text-[#292524] text-sm block">Ödeme & Taksit Seçenekleri</span>
              <p className="text-[#78716C] leading-relaxed">
                Tüm kredi kartlarına peşin fiyatına 3 taksit imkanı mevcuttur. Havale/EFT ve stüdyoda nakit veya pos cihazı ile ödeme yapılabilir.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-[#292524] text-sm block">Dondurma ve Seyahat İzni</span>
              <p className="text-[#78716C] leading-relaxed">
                İş seyahati veya tatil dönemlerinizde paketinizi dilediğiniz zaman ücretsiz olarak dondurabilirsiniz. Süre dolmadan seanslarınız kaybolmaz.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-[#292524] text-sm block">Ders İptal & Telafi</span>
              <p className="text-[#78716C] leading-relaxed">
                Ders saatinden 12 saat öncesine kadar yapılan iptallerde hakkınız yanmaz, aynı hafta veya ay içinde başka bir seansa aktarılır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

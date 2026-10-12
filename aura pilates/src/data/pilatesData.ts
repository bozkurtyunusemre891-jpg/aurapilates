export interface PilatesClass {
  id: string;
  title: string;
  category: 'reformer' | 'cadillac' | 'mat' | 'private';
  level: 'Tüm Seviyeler' | 'Başlangıç - Orta' | 'Orta - İleri' | 'Kişiye Özel';
  duration: string;
  capacity: string;
  intensity: 'Hafif & Şifalı' | 'Orta & Denge' | 'Dinamik & Güç';
  description: string;
  benefits: string[];
  image: string;
  recommendedFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  category: 'trial' | 'group' | 'private' | 'duet';
  price: number;
  period: string;
  perSession: number;
  sessionCount: number;
  badge?: string;
  popular?: boolean;
  validityDays: number;
  freezeDays: number;
  features: string[];
}

export interface ScheduleSlot {
  id: string;
  day: 'Pazartesi' | 'Salı' | 'Çarşamba' | 'Perşembe' | 'Cuma' | 'Cumartesi' | 'Pazar';
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  className: string;
  classId: string;
  instructor: string;
  intensity: 'Hafif & Şifalı' | 'Orta & Denge' | 'Dinamik & Güç';
  availableSpots: number;
  maxSpots: number;
  level: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  credentials: string[];
  image: string;
}

export const WORKING_HOURS = {
  weekdays: {
    title: 'Hafta İçi',
    days: 'Pazartesi – Cuma',
    hours: '07:00 – 21:30',
    description: 'Sabah erken iş öncesi seanslarından akşam çıkış akışlarına kadar kesintisiz program.',
  },
  saturday: {
    title: 'Hafta Sonu (Cumartesi)',
    days: 'Cumartesi',
    hours: '08:30 – 19:00',
    description: 'Haftanın yorgunluğunu atmak ve omurga esnekliğini tazelemek için dinamik dersler.',
  },
  sunday: {
    title: 'Hafta Sonu (Pazar)',
    days: 'Pazar',
    hours: '09:30 – 16:30',
    description: 'Sakin ritimli restoratif akışlar, derin esneme ve meditatif nefes seansları.',
  },
};

export const STUDIO_INFO = {
  name: 'AURA PILATES STUDIO',
  slogan: 'Bedenin Ritmi, Zihnin Dengesi',
  tagline: 'Butik Reformer & Klinik Hareket Atölyesi',
  address: 'Abdi İpekçi Caddesi No: 42/B, Nişantaşı, Şişli / İstanbul',
  phone: '+90 (212) 296 48 90',
  whatsapp: '+90 (532) 175 24 30',
  email: 'iletisim@aurapilates.com',
  instagram: '@aurapilatesstudio',
};

export const PILATES_CLASSES: PilatesClass[] = [
  {
    id: 'reformer-flow',
    title: 'Reformer Flow & Align',
    category: 'reformer',
    level: 'Başlangıç - Orta',
    duration: '50 dk',
    capacity: 'Maks. 5 Kişi',
    intensity: 'Orta & Denge',
    description: 'Balanced Body Allegro 2 makinelerinde yay dirençleriyle gerçekleştirilen akıcı ve dengeli seans. Omurgayı uzatır, merkez kas grubunu (powerhouse) derinlemesine aktive eder.',
    benefits: ['Postüral simetri ve dik duruş', 'Karın ve derin merkez kuvveti', 'Eklem çevresi stabilizasyon'],
    image: '/src/assets/images/pilates_movement_session_1791826678009.jpg',
    recommendedFor: 'Tüm bedenini hizalamak ve zarif kas tonusu kazanmak isteyen herkes.',
  },
  {
    id: 'cadillac-tower',
    title: 'Cadillac & Tower Precision',
    category: 'cadillac',
    level: 'Tüm Seviyeler',
    duration: '50 dk',
    capacity: 'Maks. 3 Kişi',
    intensity: 'Orta & Denge',
    description: 'Trapeze masa ve kule aparatı ile yerçekimine karşı askıda yapılan derinlemesine artikülasyon çalışmaları. Omurga dekompresyonu ve omuz kuşağı açıklığı sağlar.',
    benefits: ['Omurga omurları arası rahatlama', 'Esneklik ve hareket açıklığı', 'Omuz ve skapula dengesi'],
    image: '/src/assets/images/pilates_cadillac_detail_1791826689955.jpg',
    recommendedFor: 'Masa başı çalışanlar, boyun/sırt gerginliği yaşayanlar ve derin esneme arayanlar.',
  },
  {
    id: 'jumpboard-cardio',
    title: 'Jumpboard Athletic Reformer',
    category: 'reformer',
    level: 'Orta - İleri',
    duration: '50 dk',
    capacity: 'Maks. 5 Kişi',
    intensity: 'Dinamik & Güç',
    description: 'Reformer ayak ucuna takılan sıçrama paneliyle eklemlere sıfır darbe ile kardiyovasküler dayanıklılık ve patlayıcı bacak kuvveti kazandıran yüksek enerjili ders.',
    benefits: ['Kardiyovasküler kalori yakımı', 'Bacak ve kalça sıkılaşması', 'Lenfatik drenaj uyarımı'],
    image: '/src/assets/images/hero_pilates_studio_1791826665353.jpg',
    recommendedFor: 'Pilatesin zarif prensiplerini yüksek tempolu kardiyo ile birleştirmek isteyenler.',
  },
  {
    id: 'clinical-private',
    title: 'Birebir Klinik & Terapi Reformer',
    category: 'private',
    level: 'Kişiye Özel',
    duration: '55 dk',
    capacity: '1:1 Kişiye Özel',
    intensity: 'Hafif & Şifalı',
    description: 'Uzman fizyoterapist eğitmenimiz ile postür analizi sonrası skolyoz, lordoz, bel/boyun fıtığı veya sporcu sakatlıklarına özel medikal rehabilitasyon programı.',
    benefits: ['Birebir anatomi ve postür analizi', 'Ağrısız günlük yaşam hareketi', 'Hedefe yönelik güvenli iyileşme'],
    image: '/src/assets/images/pilates_master_trainer_1791826700165.jpg',
    recommendedFor: 'Omurga hassasiyeti olanlar, sakatlık sonrası dönüş yapanlar veya VIP dikkat arayanlar.',
  },
  {
    id: 'prenatal-postnatal',
    title: 'Hamile & Doğum Sonrası Pilates',
    category: 'private',
    level: 'Tüm Seviyeler',
    duration: '50 dk',
    capacity: 'Birebir / Düet (2 Kişi)',
    intensity: 'Hafif & Şifalı',
    description: 'Doktor onayıyla 12. haftadan itibaren güvenle uygulanan, pelvik taban farkındalığı, sırt ağrılarının hafifletilmesi ve doğuma hazırlayıcı diyafram nefesi seansı.',
    benefits: ['Bel ve siyatik baskısında azalma', 'Pelvik taban elastikiyeti', 'Doğum sonrası güvenli diastasis toparlanması'],
    image: '/src/assets/images/pilates_movement_session_1791826678009.jpg',
    recommendedFor: 'Anne adayları ve doğum sonrası güvenli beden toparlanması arayan yeni anneler.',
  },
  {
    id: 'restorative-stretch',
    title: 'Restorative Stretch & Myofascial',
    category: 'mat',
    level: 'Tüm Seviyeler',
    duration: '50 dk',
    capacity: 'Maks. 6 Kişi',
    intensity: 'Hafif & Şifalı',
    description: 'Tetik nokta masaj topları, yoga blokları ve hafif reformer kayışlarıyla fasyal dokudaki gerilimi çözen, parasempatik sinir sistemini dinlendiren sakin akşam seansı.',
    benefits: ['Kas boyunun uzaması ve rahatlama', 'Stres ve kortizol regülasyonu', 'Kaliteli uyku desteği'],
    image: '/src/assets/images/pilates_cadillac_detail_1791826689955.jpg',
    recommendedFor: 'Günün stresinden arınmak ve bedenine şefkatli bir mola vermek isteyen herkes.',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial-session',
    name: 'İlk Keşif Seansı',
    category: 'trial',
    price: 450,
    period: 'Tek Seferlik',
    perSession: 450,
    sessionCount: 1,
    badge: 'Tavsiye Edilen Başlangıç',
    validityDays: 14,
    freezeDays: 0,
    features: [
      '1 seans butik grup reformer deneyimi',
      'Eğitmen eşliğinde 15 dk ücretsiz postür değerlendirmesi',
      'Kaymaz pilates çorabı hediyesi',
      'Organik bitki çayı & detoks suyu ikramı',
      'Stüdyo imkanlarının tam kullanımı (duş & kilitli dolap)',
    ],
  },
  {
    id: 'monthly-8',
    name: 'Aylık Standart Paket',
    category: 'group',
    price: 4200,
    period: 'Aylık Üyelik',
    perSession: 525,
    sessionCount: 8,
    popular: true,
    badge: 'En Çok Tercih Edilen',
    validityDays: 45,
    freezeDays: 7,
    features: [
      '8 seans butik grup reformer veya tower dersi (Maks. 5 kişi)',
      'Haftada 2 düzenli seans ritmi',
      '45 gün esnek kullanım süresi',
      '7 güne kadar tek seferlik üyelik dondurma hakkı',
      'Mobil web üzerinden 24 saat önceden ücretsiz iptal/erteleme',
      'Tüm duş, havlu ve organik bakım olanakları dahil',
    ],
  },
  {
    id: 'monthly-12',
    name: 'Aylık Yoğun Dönüşüm',
    category: 'group',
    price: 5700,
    period: 'Aylık Üyelik',
    perSession: 475,
    sessionCount: 12,
    validityDays: 60,
    freezeDays: 14,
    features: [
      '12 seans butik grup reformer ve tower dersi',
      'Haftada 3 gün ideal güçlenme ve sıkılaşma temposu',
      '60 gün uzun kullanım periyodu',
      '14 gün üyelik dondurma hakkı',
      'Öncelikli ders rezervasyonu',
      'Her 4 haftada bir postür takip ölçümü',
    ],
  },
  {
    id: 'flexible-20',
    name: '20 Seans Esnek Kart',
    category: 'group',
    price: 8800,
    period: '3 Aylık Kart',
    perSession: 440,
    sessionCount: 20,
    validityDays: 90,
    freezeDays: 30,
    features: [
      '20 seans butik grup dersi',
      'En avantajlı seans başı birim fiyatı (440 ₺)',
      '90 gün geniş kullanım süresi',
      '30 gün sınırsız dondurma esnekliği',
      'Yoğun seyahat edenler veya düzensiz saat çalışanlar için ideal',
      'Tüm stüdyo etkinlik ve atölyelerine %20 indirim',
    ],
  },
  {
    id: 'private-8',
    name: '8 Seans Birebir (1:1 VIP)',
    category: 'private',
    price: 8800,
    period: 'Birebir Özel Paket',
    perSession: 1100,
    sessionCount: 8,
    badge: 'Tamamen Size Özel',
    validityDays: 60,
    freezeDays: 14,
    features: [
      '8 seans 55 dakikalık birebir özel çalışma',
      'Reformer, Cadillac, Wunda Chair ve Ladder Barrel tam erişimi',
      'Kişiselleştirilmiş anatomik hedef programı',
      'Esnek saat belirleme (Eğitmenle birebir koordinasyon)',
      'Fizyoterapist eğitmen eşliğinde seans seçeneği',
      'Özel VIP giyinme odası ve özel havlu servisi',
    ],
  },
  {
    id: 'duet-8',
    name: '8 Seans Düet (2 Kişilik Özel)',
    category: 'duet',
    price: 5600,
    period: 'Kişi Başı',
    perSession: 700,
    sessionCount: 8,
    validityDays: 60,
    freezeDays: 14,
    features: [
      'Arkadaşınız, eşiniz veya partnerinizle 2 kişilik özel seans',
      'Yarı-özel dikkat ve yüksek kişisel geri bildirim',
      '60 gün geçerlilik süresi',
      'Eğitmenle birlikte belirlenen randevu saatleri',
      'Hem eğlenceli hem motive edici ortak hareket deneyimi',
    ],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'selin-aksoy',
    name: 'Selin Aksoy',
    role: 'Kurucu & Master Pilates Trainer',
    experience: '12 Yıl Deneyim',
    bio: 'İstanbul Üniversitesi Fizik Tedavi ve Rehabilitasyon mezunu olan Selin, Balanced Body University ve PMA (Pilates Method Alliance) uluslararası master sertifikalarına sahiptir. 12 yıldır yüzlerce öğrencinin omurga sağlığını ve beden bilincini dönüştürmüştür.',
    credentials: ['PMA Certified Pilates Teacher', 'Balanced Body Master Instructor', 'Fizyoterapi & Biyomekanik Uzmanı'],
    image: '/src/assets/images/pilates_master_trainer_1791826700165.jpg',
  },
  {
    id: 'deniz-kara',
    name: 'Deniz Kara, PT',
    role: 'Klinik Pilates & Omurga Uzmanı',
    experience: '8 Yıl Deneyim',
    bio: 'Ortopedik rehabilitasyon ve skolyoz terapisi odaklı çalışan Deniz, BASI Pilates Comprehensive diplomasına sahiptir. Bireysel klinik seanslarda omurga eğrilikleri, boyun düzleşmesi ve eklem kısıtlılıkları üzerine çalışır.',
    credentials: ['BASI Pilates Comprehensive', 'Manuel Terapi & Kinesiyoloji', 'Skolyoz & Postür Terapisti'],
    image: '/src/assets/images/pilates_movement_session_1791826678009.jpg',
  },
  {
    id: 'ece-yildirim',
    name: 'Ece Yıldırım',
    role: 'Athletic Reformer & Hareket Eğitmeni',
    experience: '6 Yıl Deneyim',
    bio: 'Çağdaş dans altyapısını klasik pilates disipliniyle harmanlayan Ece; jumpboard, dinamik akış ve core odaklı kuvvet seanslarında öğrencilerini güvenle sınırlarının ötesine taşır.',
    credentials: ['Polestar Pilates Studio Diploma', 'Jumpboard & Cardio Reformer Specialist', 'Nefes & Hareket Koçu'],
    image: '/src/assets/images/hero_pilates_studio_1791826665353.jpg',
  },
];

export const WEEKLY_SCHEDULE: ScheduleSlot[] = [
  // Pazartesi
  { id: 'mon-1', day: 'Pazartesi', time: '07:30 - 08:20', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 2, maxSpots: 5, level: 'Başlangıç - Orta' },
  { id: 'mon-2', day: 'Pazartesi', time: '09:00 - 09:50', period: 'morning', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Tüm Seviyeler' },
  { id: 'mon-3', day: 'Pazartesi', time: '12:30 - 13:20', period: 'afternoon', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Ece Yıldırım', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Orta' },
  { id: 'mon-4', day: 'Pazartesi', time: '18:00 - 18:50', period: 'evening', className: 'Jumpboard Athletic Reformer', classId: 'jumpboard-cardio', instructor: 'Ece Yıldırım', intensity: 'Dinamik & Güç', availableSpots: 2, maxSpots: 5, level: 'Orta - İleri' },
  { id: 'mon-5', day: 'Pazartesi', time: '19:30 - 20:20', period: 'evening', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Selin Aksoy', intensity: 'Hafif & Şifalı', availableSpots: 4, maxSpots: 6, level: 'Tüm Seviyeler' },

  // Salı
  { id: 'tue-1', day: 'Salı', time: '08:00 - 08:50', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Ece Yıldırım', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 5, level: 'Başlangıç' },
  { id: 'tue-2', day: 'Salı', time: '10:30 - 11:20', period: 'morning', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 2, maxSpots: 3, level: 'Tüm Seviyeler' },
  { id: 'tue-3', day: 'Salı', time: '14:00 - 14:50', period: 'afternoon', className: 'Birebir Klinik Reformer', classId: 'clinical-private', instructor: 'Deniz Kara', intensity: 'Hafif & Şifalı', availableSpots: 1, maxSpots: 1, level: 'Özel' },
  { id: 'tue-4', day: 'Salı', time: '18:30 - 19:20', period: 'evening', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Orta' },
  { id: 'tue-5', day: 'Salı', time: '20:00 - 20:50', period: 'evening', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Ece Yıldırım', intensity: 'Hafif & Şifalı', availableSpots: 2, maxSpots: 6, level: 'Tüm Seviyeler' },

  // Çarşamba
  { id: 'wed-1', day: 'Çarşamba', time: '07:30 - 08:20', period: 'morning', className: 'Jumpboard Athletic Reformer', classId: 'jumpboard-cardio', instructor: 'Ece Yıldırım', intensity: 'Dinamik & Güç', availableSpots: 2, maxSpots: 5, level: 'Orta - İleri' },
  { id: 'wed-2', day: 'Çarşamba', time: '09:30 - 10:20', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Başlangıç' },
  { id: 'wed-3', day: 'Çarşamba', time: '13:00 - 13:50', period: 'afternoon', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Tüm Seviyeler' },
  { id: 'wed-4', day: 'Çarşamba', time: '18:00 - 18:50', period: 'evening', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 5, level: 'Orta' },
  { id: 'wed-5', day: 'Çarşamba', time: '19:30 - 20:20', period: 'evening', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 2, maxSpots: 3, level: 'Tüm Seviyeler' },

  // Perşembe
  { id: 'thu-1', day: 'Perşembe', time: '08:30 - 09:20', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Ece Yıldırım', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Tüm Seviyeler' },
  { id: 'thu-2', day: 'Perşembe', time: '11:00 - 11:50', period: 'morning', className: 'Hamile & Doğum Sonrası Pilates', classId: 'prenatal-postnatal', instructor: 'Selin Aksoy', intensity: 'Hafif & Şifalı', availableSpots: 2, maxSpots: 2, level: 'Özel' },
  { id: 'thu-3', day: 'Perşembe', time: '14:30 - 15:20', period: 'afternoon', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Orta' },
  { id: 'thu-4', day: 'Perşembe', time: '18:30 - 19:20', period: 'evening', className: 'Jumpboard Athletic Reformer', classId: 'jumpboard-cardio', instructor: 'Ece Yıldırım', intensity: 'Dinamik & Güç', availableSpots: 2, maxSpots: 5, level: 'Orta - İleri' },
  { id: 'thu-5', day: 'Perşembe', time: '20:00 - 20:50', period: 'evening', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Deniz Kara', intensity: 'Hafif & Şifalı', availableSpots: 3, maxSpots: 6, level: 'Tüm Seviyeler' },

  // Cuma
  { id: 'fri-1', day: 'Cuma', time: '07:30 - 08:20', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 2, maxSpots: 5, level: 'Başlangıç - Orta' },
  { id: 'fri-2', day: 'Cuma', time: '10:00 - 10:50', period: 'morning', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Tüm Seviyeler' },
  { id: 'fri-3', day: 'Cuma', time: '13:00 - 13:50', period: 'afternoon', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Ece Yıldırım', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Orta' },
  { id: 'fri-4', day: 'Cuma', time: '18:00 - 18:50', period: 'evening', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 5, level: 'Orta - İleri' },
  { id: 'fri-5', day: 'Cuma', time: '19:30 - 20:20', period: 'evening', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Ece Yıldırım', intensity: 'Hafif & Şifalı', availableSpots: 4, maxSpots: 6, level: 'Tüm Seviyeler' },

  // Cumartesi
  { id: 'sat-1', day: 'Cumartesi', time: '09:00 - 09:50', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 5, level: 'Tüm Seviyeler' },
  { id: 'sat-2', day: 'Cumartesi', time: '10:30 - 11:20', period: 'morning', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Deniz Kara', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Orta' },
  { id: 'sat-3', day: 'Cumartesi', time: '12:00 - 12:50', period: 'afternoon', className: 'Jumpboard Athletic Reformer', classId: 'jumpboard-cardio', instructor: 'Ece Yıldırım', intensity: 'Dinamik & Güç', availableSpots: 2, maxSpots: 5, level: 'Orta - İleri' },
  { id: 'sat-4', day: 'Cumartesi', time: '14:30 - 15:20', period: 'afternoon', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 3, maxSpots: 5, level: 'Başlangıç' },
  { id: 'sat-5', day: 'Cumartesi', time: '16:30 - 17:20', period: 'afternoon', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Deniz Kara', intensity: 'Hafif & Şifalı', availableSpots: 2, maxSpots: 6, level: 'Tüm Seviyeler' },

  // Pazar
  { id: 'sun-1', day: 'Pazar', time: '10:00 - 10:50', period: 'morning', className: 'Reformer Flow & Align', classId: 'reformer-flow', instructor: 'Ece Yıldırım', intensity: 'Orta & Denge', availableSpots: 2, maxSpots: 5, level: 'Tüm Seviyeler' },
  { id: 'sun-2', day: 'Pazar', time: '11:30 - 12:20', period: 'morning', className: 'Cadillac & Tower Precision', classId: 'cadillac-tower', instructor: 'Selin Aksoy', intensity: 'Orta & Denge', availableSpots: 1, maxSpots: 3, level: 'Tüm Seviyeler' },
  { id: 'sun-3', day: 'Pazar', time: '13:30 - 14:20', period: 'afternoon', className: 'Restorative Stretch & Myofascial', classId: 'restorative-stretch', instructor: 'Selin Aksoy', intensity: 'Hafif & Şifalı', availableSpots: 3, maxSpots: 6, level: 'Tüm Seviyeler' },
  { id: 'sun-4', day: 'Pazar', time: '15:00 - 15:50', period: 'afternoon', className: 'Birebir Klinik Reformer', classId: 'clinical-private', instructor: 'Deniz Kara', intensity: 'Hafif & Şifalı', availableSpots: 1, maxSpots: 1, level: 'Özel' },
];

export const FAQS = [
  {
    question: 'Daha önce hiç pilates yapmadım, doğrudan Reformer ile başlayabilir miyim?',
    answer: 'Kesinlikle evet. Reformer makinelerindeki yay dirençleri hareketi zorlaştırabileceği gibi, aynı zamanda bedeni taşıyıp destekleyerek hareketi kolaylaştırır. İlk seansınızda eğitmenimiz yay ayarlarını ve temel nefes prensiplerini adım adım aktaracaktır.',
  },
  {
    question: 'Derse gelirken ne giymeliyim ve ne getirmeliyim?',
    answer: 'Bedeninizi sarmalayan, hareketi kısıtlamayan rahat tayt ve spor üstü tercih etmenizi öneririz. Güvenliğiniz ve hijyen için tabanı silikonlu kaymaz pilates çorabı giyilmesi zorunludur (stüdyomuzdan da temin edebilirsiniz). Ter havlusu, kilitli dolap ve su stüdyomuz tarafından ücretsiz sağlanır.',
  },
  {
    question: 'Grup derslerindeki kişi sayısı maksimum kaç kişiliktir?',
    answer: 'AURA butik bir atölyedir. Kalabalık spor salonlarının aksine, reformer derslerimiz maksimum 5 kişi, cadillac ve tower derslerimiz ise maksimum 3 kişiyle sınırlıdır. Bu sayede her öğrencimizin postürü eğitmenimizce saniye saniye takip edilir.',
  },
  {
    question: 'Ders rezervasyonunu iptal etme veya erteleme politikası nedir?',
    answer: 'Randevunuzu seans saatinden en geç 12 saat öncesine kadar web sitemiz veya WhatsApp hattımız üzerinden ücretsiz olarak erteleyebilir ya da iptal edebilirsiniz. 12 saatten daha kısa süreli iptallerde seans kullanılmış sayılır.',
  },
  {
    question: 'Bel veya boyun fıtığım / skolyozum var. Pilates bana iyi gelir mi?',
    answer: 'Doğru uygulanan klinik pilates, omurga rahatsızlıklarında en etkili medikal egzersiz yöntemidir. Kurucumuz ve klinik eğitmenlerimiz fizyoterapi altyapısına sahiptir. Durumunuza göre doktor raporunuz incelenir ve size özel birebir klinik program hazırlanır.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Duru Aktaş',
    role: 'Mimar & 8 Aylık Reformer Üyesi',
    comment: 'Masa başında saatlerce çizim yapmaktan kaynaklanan kronik sırt ağrılarım AURA’daki 4. haftamda tamamen kayboldu. Stüdyonun sakinliği ve mimari zarafeti kapıdan girer girmez insanı hafifletiyor.',
    result: 'Sırt ve boyun gerginliğinde %100 rahatlama',
  },
  {
    name: 'Kaan Sezgin',
    role: 'Finans Yöneticisi',
    comment: 'Hafta içi 07:30 sabah seansları hayat kalitemi değiştirdi. İşe gitmeden önce zihnimi ve bedenimi toparlamak için günün en verimli 50 dakikası.',
    result: 'Düzenli haftada 3 seans & artan postür direnci',
  },
  {
    name: 'Begüm Tunçel',
    role: 'Doğum Sonrası Klinik Pilates Üyesi',
    comment: 'Doğum sonrası diastasis recti ve karın toparlanması için fizyoterapist Deniz Hoca ile birebir başladım. Profesyonellikleri, ilgileri ve hijyen standartları kusursuz.',
    result: 'Karın toparlanması ve omurga güçlenmesi',
  },
];

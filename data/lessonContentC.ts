import { LessonContent } from './contentTypes';

export const lessonContentC: Record<string, LessonContent> = {
  // ─── TRAVEL & HOTEL ───────────────────────────────────────────────────────
  'travel-1': {
    scenario: "Otele giriş yapıyorsun (Check-in).",
    vocabulary: [
      { word: 'Hotel', pronunciation: 'Ho-tel', translation: 'Otel' },
      { word: 'Soba', pronunciation: 'So-ba', translation: 'Oda' },
      { word: 'Rezervacija', pronunciation: 'Re-zer-va-tsi-ya', translation: 'Rezervasyon' },
      { word: 'Ključ', pronunciation: 'Klyuç', translation: 'Anahtar' },
      { word: 'Pasoš', pronunciation: 'Pa-soş', translation: 'Pasaport' }
    ],
    grammarNote: {
      title: 'Benim var (Imam)',
      body: '"Imam" kelimesi "Sahibim / Bende var" anlamına gelir. Örn. "Imam rezervaciju" (Rezervasyonum var).'
    },
    culturalTip: "Sırbistan'da otele girerken pasaportunu polis kaydı için isterler, o yüzden hemen panic yapma olağan bir durum. 24 saat içinde kaydedilirsin. Turist vergisi küçüktür ama ayrı alınır.",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, imam rezervaciju.', translation: 'İyi günler, rezervasyonum vardı.' },
      { speaker: 'B', serbian: 'Vaš pasoš, molim vas.', translation: 'Pasaportunuzu alabilir miyim lütfen.' },
      { speaker: 'A', serbian: 'Izvolite. Koji je broj sobe?', translation: 'Buyurun. Oda numaram nedir?' },
      { speaker: 'B', serbian: 'Soba broj deset.', translation: 'On numaralı oda.' }
    ]
  },
  'travel-2': {
    scenario: "Havalimanındasın.",
    vocabulary: [
      { word: 'Aerodrom', pronunciation: 'A-e-ro-drom', translation: 'Havalimanı' },
      { word: 'Let', pronunciation: 'Let', translation: 'Uçuş' },
      { word: 'Kofer', pronunciation: 'Ko-fer', translation: 'Bavul' },
      { word: 'Karta', pronunciation: 'Kar-ta', translation: 'Bilet' },
      { word: 'Prtljag', pronunciation: 'Pırt-lyag', translation: 'Bagaj' }
    ],
    grammarNote: {
      title: 'Nerede... (Gde je...)',
      body: 'Bir şeyin nerede olduğunu sormak için yalin haliyle "Gde je..." kullan kanka. Örn. "Gde je moj kofer?" (Benim bavulum nerede?)'
    },
    culturalTip: 'Belgrad Nikola Tesla Havalimanı ana uluslararası yerdir. Taksi mi tutcan? Dışarıda kolpa taksicilere düşmeden önce içerideki resmi deskten fişini al, en temizi budur.',
    dialogue: [
      { speaker: 'A', serbian: 'Gde je moj prtljag?', translation: 'Benim bagaj nerede ya?' },
      { speaker: 'B', serbian: 'Tamo, brate.', translation: 'Şurda koçum.' },
      { speaker: 'A', serbian: 'Hvala, žurim na let.', translation: 'Eyvallah, uçuşa yetişiyorum valla.' }
    ]
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  'shopping-1': {
    scenario: "Bir mağazada kıyafet bakıyorsun.",
    vocabulary: [
      { word: 'Majica', pronunciation: 'Ma-yi-tsa', translation: 'T-shirt' },
      { word: 'Cipele', pronunciation: 'Tsi-pe-le', translation: 'Ayakkabı' },
      { word: 'Veličina', pronunciation: 'Ve-li-çi-na', translation: 'Beden / Numara' },
      { word: 'Skupo', pronunciation: 'Sku-po', translation: 'Pahalı' },
      { word: 'Jeftino', pronunciation: 'Yef-ti-no', translation: 'Ucuz' }
    ],
    grammarNote: {
      title: 'Ne kadar?',
      body: 'Fiyatı sormak için her zaman "Koliko košta?" (Bunun fiyatı ne?) kalıbını yapıştır.'
    },
    culturalTip: 'Normal mağazalarda veya butiklerde pazarlık yapmak çok ters gözükebilir ama bit pazarlarında (Buvljak) ya da köylü pazarlarında yardırmaya çekinme.',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, koliko košta ova majica?', translation: 'Pardon aga, şu tişört ne kadar?' },
      { speaker: 'B', serbian: 'Hiljadu dinara.', translation: 'Bin dinar kardeşim.' },
      { speaker: 'A', serbian: 'To je malo skupo. Imate li veću veličinu?', translation: 'Tuzluymuş o biraz ya. Daha büyük bedeni var mı?' }
    ]
  },
  'shopping-2': {
    scenario: "Elbise ve topuklu ayakkabı arıyorsun.",
    vocabulary: [
      { word: 'Haljina', pronunciation: 'Ha-lyi-na', translation: 'Elbise' },
      { word: 'Suknja', pronunciation: 'Suk-nya', translation: 'Etek' },
      { word: 'Štikle', pronunciation: 'Ştik-le', translation: 'Topuklu ayakkabı' },
      { word: 'Lepo', pronunciation: 'Le-po', translation: 'Güzel' },
      { word: 'Boja', pronunciation: 'Bo-ya', translation: 'Renk' }
    ],
    grammarNote: {
      title: 'Cinsiyet Uyumu',
      body: 'Sıfatlar ismin cinsiyetine uymak zorundadır kanka. "Lepa haljina" (Güzel elbise - dişil) vs "Lep dan" (Güzel gün - eril).'
    },
    culturalTip: 'Sırp kadınları akşam dışarı çıkarken harbiden özenirler aga. Kulüplerde formül hep aynıdır: O topuklular ("štikle") ve şık elbiseler mutlaka ortamlarda döner.',
    dialogue: [
      { speaker: 'A', serbian: 'Baš je lepa ova haljina. Da li imate crvenu boju?', translation: 'Harbiden çok tatlı elbise be. Kırmızısı var mı?' },
      { speaker: 'B', serbian: 'Samo trenutak. Da, izvolite.', translation: 'Bir saniye canım. Evet, buyurun.' },
      { speaker: 'A', serbian: 'Odlično. Gde su štikle?', translation: 'Süper ya. Topuklular nerede?' }
    ]
  },
  'shopping-3': {
    scenario: "Erkek kıyafetleri alıyorsun.",
    vocabulary: [
      { word: 'Odelo', pronunciation: 'O-de-lo', translation: 'Takım Elbise' },
      { word: 'Šorts', pronunciation: 'Şorts', translation: 'Şort' },
      { word: 'Pantalone', pronunciation: 'Pan-ta-lo-ne', translation: 'Pantolon' },
      { word: 'Jakna', pronunciation: 'Yak-na', translation: 'Ceket / Mont' },
      { word: 'Košulja', pronunciation: 'Ko-şu-lya', translation: 'Gömlek' }
    ],
    grammarNote: {
      title: 'Çoğul Kıyafetler',
      body: '"Pantalone" (pantolonlar) ve "naočare" (gözlükler) kelimeleri İngilizcedeki gibi her zaman çoğuldur.'
    },
    culturalTip: 'Belgrad yazları fena kavurur aga. O yüzden gündüz yürüyüşleri için "šorts" (şortlar) hayat kurtarır, ama gece kaliteli mekanlara pantolonsuz gidemezsin uyandırayım.',
    dialogue: [
      { speaker: 'A', serbian: 'Tražim jedno crno odelo.', translation: 'Üstüme göre siyah takım elbise bakıyorum.' },
      { speaker: 'B', serbian: 'A pantalone i košulja?', translation: 'Pantolon ve gömlek de bakıyor muyuz?' },
      { speaker: 'A', serbian: 'Da, treba mi i bela košulja.', translation: 'Aynen aslan. Bir de beyaz gömlek ateşle bana.' }
    ]
  }
};

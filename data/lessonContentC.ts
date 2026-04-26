import { LessonContent } from './contentTypes';

export const lessonContentC: Record<string, LessonContent> = {
  // ─── TRAVEL & HOTEL ───────────────────────────────────────────────────────
  'travel-1': {
    scenario: "Otele giriş yapıyorsun (Check-in).",
    scenarioEn: "You are checking into a hotel.",
    streetScenario: "Belgrad'da uyduruk bi hostele giriyorsun. Resepsiyondaki dayıya rezervasyonu gösterip anahtarı koparman lazım aga.",
    vocabulary: [
      { word: 'Hotel', pronunciation: 'Ho-tel', translation: 'Otel', translationEn: 'Hotel' },
      { word: 'Soba', pronunciation: 'So-ba', translation: 'Oda', translationEn: 'Room' },
      { word: 'Rezervacija', pronunciation: 'Re-zer-va-tsi-ya', translation: 'Rezervasyon', translationEn: 'Reservation' },
      { word: 'Ključ', pronunciation: 'Klyuç', translation: 'Anahtar', translationEn: 'Key' },
      { word: 'Pasoš', pronunciation: 'Pa-soş', translation: 'Pasaport', translationEn: 'Passport' }
    ],
    grammarNote: {
      title: 'Benim var (Imam)',
      titleEn: 'I have (Imam)',
      body: '"Imam" kelimesi "Sahibim / Bende var" anlamına gelir. Örn. "Imam rezervaciju" (Rezervasyonum var).',
      bodyEn: 'The word "Imam" means "I have / I possess". E.g., "Imam rezervaciju" (I have a reservation).'
    },
    culturalTip: "Sırbistan'da otele girerken pasaportunu polis kaydı için isterler, o yüzden hemen panic yapma olağan bir durum. 24 saat içinde kaydedilirsin. Turist vergisi küçüktür ama ayrı alınır.",
    culturalTipEn: "In Serbia, they will ask for your passport for police registration when you check into a hotel, so don't panic; it's a standard procedure. You'll be registered within 24 hours. The tourist tax is small but is charged separately.",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, imam rezervaciju.', translation: 'İyi günler, rezervasyonum vardı.', translationEn: 'Good day, I have a reservation.' },
      { speaker: 'B', serbian: 'Vaš pasoš, molim vas.', translation: 'Pasaportunuzu alabilir miyim lütfen.', translationEn: 'Your passport, please.' },
      { speaker: 'A', serbian: 'Izvolite. Koji je broj sobe?', translation: 'Buyurun. Oda numaram nedir?', translationEn: 'Here you go. What is the room number?' },
      { speaker: 'B', serbian: 'Soba broj deset.', translation: 'On numaralı oda.', translationEn: 'Room number ten.' }
    ]
  },
  'travel-2': {
    scenario: "Havalimanındasın.",
    scenarioEn: "You are at the airport.",
    streetScenario: "Nikola Tesla havalimanındasın. Uçuşa az kalmış, valiz ortada yok. Sırpça sorup bavulu bulman lazım!",
    vocabulary: [
      { word: 'Aerodrom', pronunciation: 'A-e-ro-drom', translation: 'Havalimanı', translationEn: 'Airport' },
      { word: 'Let', pronunciation: 'Let', translation: 'Uçuş', translationEn: 'Flight' },
      { word: 'Kofer', pronunciation: 'Ko-fer', translation: 'Bavul', translationEn: 'Suitcase' },
      { word: 'Karta', pronunciation: 'Kar-ta', translation: 'Bilet', translationEn: 'Ticket' },
      { word: 'Prtljag', pronunciation: 'Pırt-lyag', translation: 'Bagaj', translationEn: 'Baggage' }
    ],
    grammarNote: {
      title: 'Nerede... (Gde je...)',
      titleEn: 'Where is... (Gde je...)',
      body: 'Bir şeyin nerede olduğunu sormak için yalin haliyle "Gde je..." kullan kanka. Örn. "Gde je moj kofer?" (Benim bavulum nerede?)',
      bodyEn: 'To ask where something is, use "Gde je..." with the noun in its nominative form. E.g., "Gde je moj kofer?" (Where is my suitcase?)'
    },
    culturalTip: 'Belgrad Nikola Tesla Havalimanı ana uluslararası yerdir. Taksi mi tutcan? Dışarıda kolpa taksicilere düşmeden önce içerideki resmi deskten fişini al, en temizi budur.',
    culturalTipEn: 'Belgrade Nikola Tesla Airport is the main international hub. Taking a taxi? Get a voucher from the official desk inside before falling for the "unofficial" drivers outside; it\'s the safest way.',
    dialogue: [
      { speaker: 'A', serbian: 'Gde je moj prtljag?', translation: 'Benim bagaj nerede ya?', translationEn: 'Where is my luggage?' },
      { speaker: 'B', serbian: 'Tamo, brate.', translation: 'Şurda koçum.', translationEn: 'Over there, mate.' },
      { speaker: 'A', serbian: 'Hvala, žurim na let.', translation: 'Eyvallah, uçuşa yetişiyorum valla.', translationEn: 'Thanks, I\'m rushing for a flight.' }
    ]
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  'shopping-1': {
    scenario: "Bir mağazada kıyafet bakıyorsun.",
    scenarioEn: "You are looking at clothes in a store.",
    streetScenario: "Knez Mihailova'da mağazaları turluyorsun. Beğendiğin tişörtün fiyatını sorup kazıklanmadan bedeni sorman şart kanka.",
    vocabulary: [
      { word: 'Majica', pronunciation: 'Ma-yi-tsa', translation: 'T-shirt', translationEn: 'T-shirt' },
      { word: 'Cipele', pronunciation: 'Tsi-pe-le', translation: 'Ayakkabı', translationEn: 'Shoes' },
      { word: 'Veličina', pronunciation: 'Ve-li-çi-na', translation: 'Beden / Numara', translationEn: 'Size' },
      { word: 'Skupo', pronunciation: 'Sku-po', translation: 'Pahalı', translationEn: 'Expensive' },
      { word: 'Jeftino', pronunciation: 'Yef-ti-no', translation: 'Ucuz', translationEn: 'Cheap' }
    ],
    grammarNote: {
      title: 'Ne kadar?',
      titleEn: 'How much?',
      body: 'Fiyatı sormak için her zaman "Koliko košta?" (Bunun fiyatı ne?) kalıbını yapıştır.',
      bodyEn: 'To ask for the price, always use the phrase "Koliko košta?" (How much does this cost?).'
    },
    culturalTip: 'Normal mağazalarda veya butiklerde pazarlık yapmak çok ters gözükebilir ama bit pazarlarında (Buvljak) ya da köylü pazarlarında yardırmaya çekinme.',
    culturalTipEn: 'Bargaining in regular stores or boutiques can be seen as rude, but don\'t hesitate to negotiate at flea markets (Buvljak) or local produce markets.',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, koliko košta ova majica?', translation: 'Pardon aga, şu tişört ne kadar?', translationEn: 'Excuse me, how much is this t-shirt?' },
      { speaker: 'B', serbian: 'Hiljadu dinara.', translation: 'Bin dinar kardeşim.', translationEn: 'A thousand dinars, brother.' },
      { speaker: 'A', serbian: 'To je malo skupo. Imate li veću veličinu?', translation: 'Tuzluymuş o biraz ya. Daha büyük bedeni var mı?', translationEn: 'That\'s a bit expensive. Do you have a larger size?' }
    ]
  },
  'shopping-2': {
    scenario: "Elbise ve topuklu ayakkabı arıyorsun.",
    scenarioEn: "You are looking for a dress and high heels.",
    streetScenario: "Gece kulübüne çıkacaksınız. Fıstık gibi elbiseyi ve topukluları Sırpça hallet ki ortamlarda şov yap aga!",
    vocabulary: [
      { word: 'Haljina', pronunciation: 'Ha-lyi-na', translation: 'Elbise', translationEn: 'Dress' },
      { word: 'Suknja', pronunciation: 'Suk-nya', translation: 'Etek', translationEn: 'Skirt' },
      { word: 'Štikle', pronunciation: 'Ştik-le', translation: 'Topuklu ayakkabı', translationEn: 'High heels' },
      { word: 'Lepo', pronunciation: 'Le-po', translation: 'Güzel', translationEn: 'Beautiful / Nice' },
      { word: 'Boja', pronunciation: 'Bo-ya', translation: 'Renk', translationEn: 'Color' }
    ],
    grammarNote: {
      title: 'Cinsiyet Uyumu',
      titleEn: 'Gender Agreement',
      body: 'Sıfatlar ismin cinsiyetine uymak zorundadır kanka. "Lepa haljina" (Güzel elbise - dişil) vs "Lep dan" (Güzel gün - eril).',
      bodyEn: 'Adjectives must agree with the gender of the noun. E.g., "Lepa haljina" (Beautiful dress - feminine) vs "Lep dan" (Beautiful day - masculine).'
    },
    culturalTip: 'Sırp kadınları akşam dışarı çıkarken harbiden özenirler aga. Kulüplerde formül hep aynıdır: O topuklular ("štikle") ve şık elbiseler mutlaka ortamlarda döner.',
    culturalTipEn: 'Serbian women really dress up when going out in the evening. The formula in clubs is always the same: those high heels ("štikle") and elegant dresses are a must.',
    dialogue: [
      { speaker: 'A', serbian: 'Baš je lepa ova haljina. Da li imate crvenu boju?', translation: 'Harbiden çok tatlı elbise be. Kırmızısı var mı?', translationEn: 'This dress is really beautiful. Do you have it in red?' },
      { speaker: 'B', serbian: 'Samo trenutak. Da, izvolite.', translation: 'Bir saniye canım. Evet, buyurun.', translationEn: 'Just a moment, dear. Yes, here you go.' },
      { speaker: 'A', serbian: 'Odlično. Gde su štikle?', translation: 'Süper ya. Topuklular nerede?', translationEn: 'Excellent. Where are the high heels?' }
    ]
  },
  'shopping-3': {
    scenario: "Erkek kıyafetleri alıyorsun.",
    scenarioEn: "You are buying men's clothes.",
    streetScenario: "Ortamlara akmadan önce bi takım elbise falan çekmen lazım üstüne. Sırpça bedeni sor da şıkır şıkır ol kanka.",
    vocabulary: [
      { word: 'Odelo', pronunciation: 'O-de-lo', translation: 'Takım Elbise', translationEn: 'Suit' },
      { word: 'Šorts', pronunciation: 'Şorts', translation: 'Şort', translationEn: 'Shorts' },
      { word: 'Pantalone', pronunciation: 'Pan-ta-lo-ne', translation: 'Pantolon', translationEn: 'Trousers / Pants' },
      { word: 'Jakna', pronunciation: 'Yak-na', translation: 'Ceket / Mont', translationEn: 'Jacket' },
      { word: 'Košulja', pronunciation: 'Ko-şu-lya', translation: 'Gömlek', translationEn: 'Shirt' }
    ],
    grammarNote: {
      title: 'Çoğul Kıyafetler',
      titleEn: 'Plural Clothing',
      body: '"Pantalone" (pantolonlar) ve "naočare" (gözlükler) kelimeleri İngilizcedeki gibi her zaman çoğuldur.',
      bodyEn: 'The words "Pantalone" (trousers) and "naočare" (glasses) are always plural, just like in English.'
    },
    culturalTip: 'Belgrad yazları fena kavurur aga. O yüzden gündüz yürüyüşleri için "šorts" (şortlar) hayat kurtarır, ama gece kaliteli mekanlara pantolonsuz gidemezsin uyandırayım.',
    culturalTipEn: 'Belgrade summers can be scorching. So "šorts" (shorts) are a lifesaver for daytime walks, but be warned: you can\'t get into upscale venues at night without trousers.',
    dialogue: [
      { speaker: 'A', serbian: 'Tražim jedno crno odelo.', translation: 'Üstüme göre siyah takım elbise bakıyorum.', translationEn: 'I\'m looking for a black suit.' },
      { speaker: 'B', serbian: 'A pantalone i košulja?', translation: 'Pantolon ve gömlek de bakıyor muyuz?', translationEn: 'And what about trousers and a shirt?' },
      { speaker: 'A', serbian: 'Da, treba mi i bela košulja.', translation: 'Aynen aslan. Bir de beyaz gömlek ateşle bana.', translationEn: 'Yes, I also need a white shirt.' }
    ]
  }
};

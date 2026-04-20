export type QuestionType = 'multiple-choice' | 'translate' | 'fill-blank';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  streetPrompt?: string;
  answer: string;
  options?: string[];
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  streetTitle: string;
  emoji: string;
  xpReward: number;
  questions: Question[];
}

export interface LessonSet {
  id: string;
  title: string;
  streetTitle: string;
  description: string;
  streetDescription: string;
  emoji: string;
  color: string;
  isPro?: boolean;
  lessons: Lesson[];
}

export const curriculum: LessonSet[] = [
  // ─── GREETINGS ────────────────────────────────────────────────────────────
  {
    id: 'greetings', title: 'Tanışma', streetTitle: 'Šta ima, brate?',
    description: 'Selamlaşmayı ve kendini tanıtmayı öğren',
    streetDescription: "Nauči kako da se obijaviš k'o pravi Beograđanin",
    emoji: '👋', color: '#c0392b',
    lessons: [
      {
        id: 'greetings-1', title: 'Temel Selamlar', streetTitle: 'Zdravo i šta ima', emoji: '👋', xpReward: 20,
        questions: [
          { id: 'g1-q1', type: 'multiple-choice', prompt: 'Sırpçada "Merhaba" nasıl denir?', streetPrompt: 'Brate, "Merhaba" nasıl denir?', answer: 'Zdravo', options: ['Zdravo','Doviđenja','Hvala','Molim'] },
          { id: 'g1-q2', type: 'translate', prompt: '"Günaydın" kelimesini çevir', streetPrompt: 'Vopi, "Günaydın" de bakalım!', answer: 'Dobro jutro', hint: 'dobro = iyi, jutro = sabah' },
          { id: 'g1-q3', type: 'multiple-choice', prompt: '"Kako si?" ne anlama gelir?', streetPrompt: 'Pazi, "Kako si?" ne demek?', answer: 'Nasılsın?', options: ['Adın ne?','Nasılsın?','Nerelisin?','Görüşürüz'] },
          { id: 'g1-q4', type: 'multiple-choice', prompt: '"Görüşürüz" nasıl denir?', streetPrompt: 'Kaçıyorsun brate — "Görüşürüz" nasıl denir?', answer: 'Doviđenja', options: ['Zdravo','Doviđenja','Hvala','Izvinite'] },
          { id: 'g1-q5', type: 'translate', prompt: '"İyi akşamlar" kelimesini çevir', streetPrompt: 'Kapiram — Gece milleti nasıl selamlarsın?', answer: 'Dobro veče', hint: 'veče = akşam' },
          { id: 'g1-q6', type: 'multiple-choice', prompt: '"Laku noć" ne anlama gelir?', streetPrompt: 'Pazi, "Laku noć" ne demek?', answer: 'İyi geceler', options: ['Günaydın','İyi akşamlar','İyi geceler','İyi uykular'] },
        ],
      },
      {
        id: 'greetings-2', title: 'Kendini Tanıtma', streetTitle: 'Ko si ti, majstore?', emoji: '🤝', xpReward: 25,
        questions: [
          { id: 'g2-q1', type: 'multiple-choice', prompt: '"Benim adım…" nasıl denir?', streetPrompt: 'Bre, birine adını nasıl söylersin?', answer: 'Zovem se…', options: ['Imam se…','Zovem se…','Ja sam…','Moje je…'] },
          { id: 'g2-q2', type: 'translate', prompt: '"Tanıştığıma memnun oldum" kelimesini çevir', streetPrompt: 'Kapiram — "Memnun oldum" çevir', answer: 'Drago mi je', hint: 'drago = memnun/hoş' },
          { id: 'g2-q3', type: 'multiple-choice', prompt: '"Odakle si?" ne anlama gelir?', streetPrompt: 'Pazi, "Odakle si?" ne demek?', answer: 'Nerelisin?', options: ['Kaç yaşındasın?','Ne iş yapıyorsun?','Nerelisin?','Sırpça biliyor musun?'] },
          { id: 'g2-q4', type: 'translate', prompt: '"Kaç yaşındasın?" kelimesini çevir', streetPrompt: 'Brate, birinin yaşını nasıl sorarsın?', answer: 'Koliko imaš godina?', hint: 'Koliko = kaç tane, godina = yıl' },
          { id: 'g2-q5', type: 'multiple-choice', prompt: '"Ben İngiltere\'denim" nasıl denir?', streetPrompt: 'Bre, nereli olduğunu nasıl söylersin?', answer: 'Ja sam iz Engleske', options: ['Ja idem u Englesku','Ja sam iz Engleske','Volim Englesku','Bio sam u Engleskoj'] },
        ],
      },
      {
        id: 'greetings-3', title: 'Kibar İfadeler', streetTitle: 'Kad treba biti fin', emoji: '🎩', xpReward: 25,
        questions: [
          { id: 'g3-q1', type: 'multiple-choice', prompt: '"Lütfen" nasıl denir?', streetPrompt: 'Brate, nasıl kibarca "lütfen" istersin?', answer: 'Molim', options: ['Hvala','Molim','Izvinite','Nema na čemu'] },
          { id: 'g3-q2', type: 'multiple-choice', prompt: '"Hvala" ne anlama gelir?', streetPrompt: 'Pazi — "Hvala" ne demek?', answer: 'Teşekkürler', options: ['Özür dilerim','Lütfen','Teşekkürler','Merhaba'] },
          { id: 'g3-q3', type: 'translate', prompt: '"Affedersiniz" kelimesini çevir', streetPrompt: 'Birinin dikkatini nasıl kibarca çekersin?', answer: 'Izvinite', hint: '"özür dilerim" in resmi hali' },
          { id: 'g3-q4', type: 'multiple-choice', prompt: '"Nema na čemu" ne anlama gelir?', streetPrompt: 'Biri sana "hvala" dedi — sen ne dersin?', answer: "Rica ederim", options: ["Rica ederim",'Sorun değil','Boşver','Görüşürüz'] },
          { id: 'g3-q5', type: 'multiple-choice', prompt: '"Özür dilerim" nasıl denir?', streetPrompt: 'Bre, Sırpçada nasıl affedersin istersin?', answer: 'Žao mi je', options: ['Hvala','Molim','Žao mi je','Izvinite'] },
          { id: 'g3-q6', type: 'translate', prompt: '"Sorun değil" kelimesini çevir', streetPrompt: 'Kapiram — her şey yolunda olunca ne dersin?', answer: 'Nema problema', hint: 'nema = yok' },
        ],
      },
    ],
  },

  // ─── NUMBERS ──────────────────────────────────────────────────────────────
  {
    id: 'numbers', title: 'Sayılar', streetTitle: 'Pare i Brojevi',
    description: 'Bölge halkı gibi saymayı, para ve saati halletmeyi öğren',
    streetDescription: 'Nauči da brojiš — bez toga nema šale',
    emoji: '🔢', color: '#003da5',
    lessons: [
      {
        id: 'numbers-1', title: 'Sayılar 1–10', streetTitle: '1 do 10, brate', emoji: '🔢', xpReward: 20,
        questions: [
          { id: 'n1-q1', type: 'multiple-choice', prompt: 'Sırpçada "5" nasıl denir?', streetPrompt: 'Vopi, "5" nasıl diyorsun?', answer: 'Pet', options: ['Četiri','Pet','Šest','Sedam'] },
          { id: 'n1-q2', type: 'multiple-choice', prompt: '"Tri" hangi sayıdır?', streetPrompt: 'Kapiram, "Tri" hangi sayı?', answer: '3', options: ['2','3','13','30'] },
          { id: 'n1-q3', type: 'translate', prompt: '"10" sayısını Sırpçaya çevir', streetPrompt: 'Pazi — Sırpçada 10?', answer: 'Deset', hint: 'de-set' },
          { id: 'n1-q4', type: 'multiple-choice', prompt: '"Jedan" ne anlama gelir?', streetPrompt: 'Bre, "Jedan" nedir?', answer: '1', options: ['1','7','11','100'] },
          { id: 'n1-q5', type: 'multiple-choice', prompt: '"8" nasıl denir?', streetPrompt: 'Çabuk — "8" nasıl dersin brate?', answer: 'Osam', options: ['Sedam','Osam','Devet','Šest'] },
          { id: 'n1-q6', type: 'translate', prompt: '"2" sayısını Sırpçaya çevir', streetPrompt: 'Sırpçada 2 — lako brate!', answer: 'Dva', hint: 'kısa bir kelime' },
          { id: 'n1-q7', type: 'multiple-choice', prompt: '"Devet" ne anlama gelir?', streetPrompt: 'Pazi — "Devet" hangi sayıdır?', answer: '9', options: ['6','7','8','9'] },
        ],
      },
      {
        id: 'numbers-2', title: 'Sayılar 11–100', streetTitle: 'Veći brojevi, veće pare', emoji: '💰', xpReward: 30,
        questions: [
          { id: 'n2-q1', type: 'multiple-choice', prompt: 'Sırpçada "20" nasıl denir?', streetPrompt: 'Brate, "20" nasıl diyorsun?', answer: 'Dvadeset', options: ['Deset','Dvadeset','Trideset','Dvesta'] },
          { id: 'n2-q2', type: 'translate', prompt: '"100" sayısını Sırpçaya çevir', streetPrompt: 'Yüz — u srpskom?', answer: 'Sto', hint: 'çok kısa!' },
          { id: 'n2-q3', type: 'multiple-choice', prompt: '"Pedeset" nedir?', streetPrompt: 'Kapiram — "Pedeset" hangi sayıdır?', answer: '50', options: ['15','50','500','5000'] },
          { id: 'n2-q4', type: 'multiple-choice', prompt: '"11" nasıl denir?', streetPrompt: 'Pazi — Sırpçada 11?', answer: 'Jedanaest', options: ['Jedanaest','Dvanaest','Trinaest','Četrnaest'] },
          { id: 'n2-q5', type: 'translate', prompt: '"30" sayısını Sırpçaya çevir', streetPrompt: 'Otuz — kaži na srpskom!', answer: 'Trideset', hint: 'tri = üç' },
          { id: 'n2-q6', type: 'multiple-choice', prompt: '"Hiljada" ne demek?', streetPrompt: 'Brate — "Hiljada" — ne kadar eder?', answer: '1000', options: ['100','500','1000','10000'] },
        ],
      },
      {
        id: 'numbers-3', title: 'Saatler ve Zaman', streetTitle: 'Koliko je sati, bre?', emoji: '⏰', xpReward: 30,
        questions: [
          { id: 'n3-q1', type: 'multiple-choice', prompt: '"Saat kaç?" nasıl sorulur?', streetPrompt: 'Pazi — saati nasıl soruyorsun?', answer: 'Koliko je sati?', options: ['Kako si?','Koliko je sati?','Gde je sat?','Imam sat'] },
          { id: 'n3-q2', type: 'translate', prompt: '"Saat 3" cümlesini çevir', streetPrompt: 'Tri sata — çevir bunu brate!', answer: 'Tri su sata', hint: 'su = -dir (çoğul)' },
          { id: 'n3-q3', type: 'multiple-choice', prompt: '"Podne" ne anlama gelir?', streetPrompt: '"Podne" — šta je to?', answer: 'Öğlen', options: ['Gece yarısı','Sabah','Öğlen','Akşam'] },
          { id: 'n3-q4', type: 'multiple-choice', prompt: '"Buçuk" (örn: saat 2 buçuk) nasıl denir?', streetPrompt: 'Kapiram — Sırpçada "buçuk"?', answer: 'Pola tri', options: ['Dva i po','Pola tri','Tri i pola','Polovina'] },
          { id: 'n3-q5', type: 'translate', prompt: '"Dakika" kelimesini çevir', streetPrompt: 'Sırpçada "dakika" nedir vopi?', answer: 'Minut', hint: 'İngilizceye benziyor' },
        ],
      },
    ],
  },

  // ─── FOOD & DRINKS ────────────────────────────────────────────────────────
  {
    id: 'food', title: 'Yemek ve İçecek', streetTitle: 'Ćevapi i Rakija',
    description: 'Yerliler gibi yemek ve içecek sipariş et',
    streetDescription: 'Bez ćevapa i piva nema života, kapiram?',
    emoji: '🍺', color: '#e67e22',
    lessons: [
      {
        id: 'food-1', title: 'Sipariş Vermek', streetTitle: 'Daj mi ćevape!', emoji: '🥙', xpReward: 25,
        questions: [
          { id: 'f1-q1', type: 'multiple-choice', prompt: '"Su" nasıl denir?', streetPrompt: 'Pazi, "su" nasıl istersin?', answer: 'Voda', options: ['Pivo','Voda','Sok','Kafa'] },
          { id: 'f1-q2', type: 'multiple-choice', prompt: '"Kafa" nedir?', streetPrompt: 'Brate, "Kafa" nedir?', answer: 'Kahve', options: ['Bira','Çay','Kahve','Meyve Suyu'] },
          { id: 'f1-q3', type: 'translate', prompt: '"Bir bira lütfen" cümlesini çevir', streetPrompt: 'Vopi, "Bir bira lütfen" çevir!', answer: 'Jedno pivo, molim', hint: 'jedno = bir, pivo = bira, molim = lütfen' },
          { id: 'f1-q4', type: 'multiple-choice', prompt: '"Sladak" ne anlama gelir?', streetPrompt: 'Kapiram, "Sladak" nedir?', answer: 'Tatlı', options: ['Tuzlu','Baharatlı','Tatlı','Ekşi'] },
          { id: 'f1-q5', type: 'translate', prompt: '"Hesap lütfen" cümlesini çevir', streetPrompt: 'Hesap zamanı — nasıl istersin?', answer: 'Račun, molim', hint: 'račun = hesap/fatura' },
          { id: 'f1-q6', type: 'multiple-choice', prompt: '"Açım" nasıl denir?', streetPrompt: 'Brate, açlıktan öldüğünü nasıl söylersin?', answer: 'Gladan sam', options: ['Žedan sam','Gladan sam','Sit sam','Umoran sam'] },
        ],
      },
      {
        id: 'food-2', title: 'Sırp Mutfağı', streetTitle: 'Srpska Kuhinja, majstore', emoji: '🍖', xpReward: 30,
        questions: [
          { id: 'f2-q1', type: 'multiple-choice', prompt: '"Ćevapi" nedir?', streetPrompt: 'Brate — šta su ćevapi?', answer: 'Izgara rulo köfteler', options: ['Bir tür çorba','Izgara rulo köfteler','Kızarmış hamurişi','Dolma'] },
          { id: 'f2-q2', type: 'multiple-choice', prompt: '"Kajmak" nedir?', streetPrompt: 'Kapiram — "Kajmak" je šta?', answer: 'Kremamsı süt ürünü', options: ['Acı sos','Kremamsı süt ürünü','Ekşi krema çorbası','Bir tür ekmek'] },
          { id: 'f2-q3', type: 'translate', prompt: '"Ekmek" kelimesini çevir', streetPrompt: 'Hleb ili …? "Ekmek" çevir!', answer: 'Hleb', hint: 'h-leb' },
          { id: 'f2-q4', type: 'multiple-choice', prompt: '"Rakija" nedir?', streetPrompt: 'Vopi — "Rakija" je šta?', answer: 'Sırbistan meyve rakısı', options: ['Köpüklü şarap','Sırbistan meyve rakısı','Kahve likörü','Elma suyu'] },
          { id: 'f2-q5', type: 'multiple-choice', prompt: '"Lezzetli" nasıl denir?', streetPrompt: 'Pazi — yemeğin mükemmel olduğunu nasıl söylersin?', answer: 'Ukusno', options: ['Loše','Ukusno','Slano','Kiselo'] },
          { id: 'f2-q6', type: 'translate', prompt: '"İki kişilik masa istiyorum" cümlesini çevir', streetPrompt: 'Restoran — iki kişilik masa nasıl istersin?', answer: 'Stolić za dvoje, molim', hint: 'stolić = masa (küçük), dvoje = iki kişi' },
        ],
      },
      {
        id: 'food-3', title: 'Pazarda', streetTitle: 'Na pijaci, brate', emoji: '🥦', xpReward: 25,
        questions: [
          { id: 'f3-q1', type: 'multiple-choice', prompt: '"Bunun fiyatı nedir?" nasıl denir?', streetPrompt: 'Pijaca — fiyatı nasıl sorarsın?', answer: 'Koliko košta ovo?', options: ['Gde je to?','Koliko košta ovo?','Šta je ovo?','Da li imate ovo?'] },
          { id: 'f3-q2', type: 'translate', prompt: '"Elma" kelimesini çevir', streetPrompt: 'Jabuka ili …? "Elma" çevir!', answer: 'Jabuka', hint: 'ja-bu-ka' },
          { id: 'f3-q3', type: 'multiple-choice', prompt: '"Paradajz" nedir?', streetPrompt: 'Kapiram — "Paradajz" hangi sebzedir?', answer: 'Domates', options: ['Salatalık','Biber','Domates','Soğan'] },
          { id: 'f3-q4', type: 'multiple-choice', prompt: '"Pahalı" nasıl denir?', streetPrompt: 'Brate — bir şeyin çok pahalı olduğunu nasıl söylersin?', answer: 'Skupo', options: ['Jeftino','Skupo','Besplatno','Dosta'] },
          { id: 'f3-q5', type: 'translate', prompt: '"1 kilo domates istiyorum" cümlesini çevir', streetPrompt: 'Pijaca order — kilogram paradajza!', answer: 'Jedan kilogram paradajza', hint: 'jedan = bir' },
        ],
      },
    ],
  },

  // ─── DIRECTIONS ───────────────────────────────────────────────────────────
  {
    id: 'directions', title: 'Yol Bulma', streetTitle: 'Snađi se, brate',
    description: 'Belgrad ve Sırp şehirlerinde yolunu bul',
    streetDescription: 'Bez pravca se ne ide — osim na Kalimegdan',
    emoji: '🗺️', color: '#8e44ad',
    lessons: [
      {
        id: 'directions-1', title: 'Sol, Sağ, İleri', streetTitle: 'Levo, desno, pravo', emoji: '🧭', xpReward: 20,
        questions: [
          { id: 'd1-q1', type: 'multiple-choice', prompt: '"Sol" nasıl denir?', streetPrompt: 'Pazi levo — "sol" nasıl denir?', answer: 'Levo', options: ['Desno','Pravo','Levo','Gore'] },
          { id: 'd1-q2', type: 'multiple-choice', prompt: 'Yol tarifinde "Pravo" ne anlama gelir?', streetPrompt: 'Brate, kaybolduğunda "Pravo" nedir?', answer: 'Dümdüz ileri', options: ['Sağa dön','Geri dön','Dümdüz ileri','Sola dön'] },
          { id: 'd1-q3', type: 'translate', prompt: '"Otobüs durağı nerede?" kelimesini çevir', streetPrompt: 'Kapiram — otobüs durağını nasıl bulursun?', answer: 'Gde je autobuska stanica?', hint: 'Gde = nerede, je = -dir' },
          { id: 'd1-q4', type: 'multiple-choice', prompt: '"Sağ" nasıl denir?', streetPrompt: 'Sağa dön — bunu nasıl söylersin?', answer: 'Desno', options: ['Levo','Gore','Desno','Dole'] },
          { id: 'd1-q5', type: 'translate', prompt: '"Ne kadar uzak?" kelimesini çevir', streetPrompt: 'Brate, mesafeyi nasıl sorarsın?', answer: 'Koliko je daleko?', hint: 'daleko = uzak' },
        ],
      },
      {
        id: 'directions-2', title: 'Ulaşım', streetTitle: 'Autobus ili taksi?', emoji: '🚌', xpReward: 30,
        questions: [
          { id: 'd2-q1', type: 'multiple-choice', prompt: '"Taksi" nasıl denir?', streetPrompt: 'Kapiram — aynı kelime, farklı aksan?', answer: 'Taksi', options: ['Taksi','Tramvaj','Autobus','Metro'] },
          { id: 'd2-q2', type: 'translate', prompt: '"Havalimanı" kelimesini çevir', streetPrompt: 'Aerodrom or …? "Havalimanı" çevir!', answer: 'Aerodrom', hint: 'İngilizceye/Türkçeye benziyor!' },
          { id: 'd2-q3', type: 'multiple-choice', prompt: 'Nasıl bilet istersin?', streetPrompt: 'Pazi — nasıl bilet alırsın?', answer: 'Jednu kartu, molim', options: ['Daj mi vozilo','Jednu kartu, molim','Gde je taksi?','Koliko košta?'] },
          { id: 'd2-q4', type: 'multiple-choice', prompt: '"Stanica" nedir?', streetPrompt: 'Brate — šta znači "Stanica"?', answer: 'İstasyon / Durak', options: ['İstasyon / Durak','Sokak','Şehir merkezi','Tarife'] },
          { id: 'd2-q5', type: 'translate', prompt: '"Merkeze gitmem gerekiyor" cümlesini çevir', streetPrompt: 'Taksi — şoföre nereye gideceğini nasıl söylersin?', answer: 'Treba mi da idem u centar', hint: 'treba mi = bana lazım/gerekiyor' },
        ],
      },
    ],
  },

  // ─── STREET SLANG ─────────────────────────────────────────────────────────
  {
    id: 'street-slang', title: 'Sokak Ağzı 🔥', streetTitle: 'Ulični Rečnik',
    description: 'Gerçek Sırpça — argolar, deyimler, tarz',
    streetDescription: 'Jebiga, ovo je ono pravo. Ulični srpski za prave likove.',
    emoji: '💀', color: '#39ff14',
    isPro: true,
    lessons: [
      {
        id: 'slang-1', title: 'Temel Sokak Ağzı', streetTitle: 'Mora da znaš ovo', emoji: '🔥', xpReward: 50,
        questions: [
          { id: 's1-q1', type: 'multiple-choice', prompt: '"Jebiga" ne ifade eder?', streetPrompt: 'Brate, šta znači "Jebiga"?', answer: 'Ne yaparsın / Aman boşver', options: ['Seni seviyorum','Ne yaparsın / Aman boşver',"Hadi gidelim",'Sorun değil'] },
          { id: 's1-q2', type: 'multiple-choice', prompt: '"Brate" arkadaşlar arasında ne demektir?', streetPrompt: 'Pazi, šta znači "Brate"?', answer: 'Kardeşim / Kanka', options: ['Erkek Kardeş (resmi)','Kardeşim / Kanka','Düşman','Yabancı'] },
          { id: 's1-q3', type: 'multiple-choice', prompt: 'Biri sana "Kapiram" derse, ne diyordur?', streetPrompt: 'Vopi, šta znači "Kapiram"?', answer: 'Anlıyorum / Çakıyorum', options: ['Açım','Anlıyorum / Çakıyorum','Gidiyorum','Katılmıyorum'] },
          { id: 's1-q4', type: 'multiple-choice', prompt: '"Ajde" ne anlama gelir?', streetPrompt: 'Ajde — šta ovo znači?', answer: "Hadi / Bas git", options: ['Dur',"Hadi / Bas git",'Bekle','Boşver'] },
          { id: 's1-q5', type: 'translate', prompt: '"Boşver / Takma" (argo) nasıl denir?', streetPrompt: 'Sırpça "kanka takma" naısl dersin?', answer: 'Jebiga', hint: 'Bu kelimenin kendisi uygulamanın adı 😏' },
        ],
      },
      {
        id: 'slang-2', title: 'Balkan Ruh Hali', streetTitle: 'Balkanski stil', emoji: '😤', xpReward: 50,
        questions: [
          { id: 's2-q1', type: 'multiple-choice', prompt: '"Šta ima?" ne anlama gelir?', streetPrompt: 'Pazi — "Šta ima?" ne tür bir selamdır?', answer: "Naber? / Ne var ne yok?", options: ['Sende ne var?',"Naber? / Ne var ne yok?",'Ne oldu?','Ne istiyorsun?'] },
          { id: 's2-q2', type: 'multiple-choice', prompt: 'Cümle sonundaki "Bre" ne anlama gelir?', streetPrompt: 'Kapiram — "Bre" šta je to?', answer: 'Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)', options: ['Görüşürüz','Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)','Evet','Lütfen'] },
          { id: 's2-q3', type: 'translate', prompt: '"Sakin ol!" (argo: "Smiri se!") cümlesini çevir', streetPrompt: 'Sırpçada birine sakin olmasını nasıl söylersin?', answer: 'Smiri se', hint: 'smiriti = sakinleşmek' },
          { id: 's2-q4', type: 'multiple-choice', prompt: '"Mrak" kelime anlamında karanlıktır, argoda nedir?', streetPrompt: 'Brate — "Mrak" — šta je to?', answer: 'Karanlık, ama argoda "Harika/Efsane"', options: ['Berbat','Karanlık, ama argoda "Harika/Efsane"','Sıkıcı','Soğuk'] },
          { id: 's2-q5', type: 'multiple-choice', prompt: '"Sve pet" ne anlama gelir?', streetPrompt: 'Vopi — "Sve pet" — šta znači?', answer: 'Her şey on numara beş yıldız', options: ['Beş kişi','Her şey on numara beş yıldız','Çak bi beşlik','Beş liram var'] },
          { id: 's2-q6', type: 'translate', prompt: '"Umrumda değil" (argo) nasıl denir?', streetPrompt: 'Kapiram — hiç sallamadığını nasıl söylersin?', answer: 'Boli me uvo', hint: '"Kulağım ağrıyor" — Sırpların "Umrumda değil" deme şekli 😂' },
        ],
      },
      {
        id: 'slang-3', title: 'Küfürler ve Tepkiler', streetTitle: 'Psovke i izrazi', emoji: '💥', xpReward: 60,
        questions: [
          { id: 's3-q1', type: 'multiple-choice', prompt: '"Majku mu" ne ifade eder?', streetPrompt: 'Pazi brate — "Majku mu" ne tür bir ifade?', answer: 'Bir sinirlenme/hayal kırıklığı sözü', options: ['Bir iltifat','Bir sinirlenme/hayal kırıklığı sözü','Bir selamlama','Bir veda'] },
          { id: 's3-q2', type: 'multiple-choice', prompt: '"Idi" ne anlama gelir?', streetPrompt: 'Biri sana "Idi!" diye bağırıyor, ne istiyor?', answer: 'Çek git / Kaybol!', options: ['Buraya gel!','Çek git / Kaybol!','Otur ulan!','Dur!'] },
          { id: 's3-q3', type: 'multiple-choice', prompt: '"Ma daj!" ne ifade eder?', streetPrompt: '"Ma daj!" — šta to znači, brate?', answer: 'Yok artık! / Hadi canım!', options: ['Bana daha ver','Yok artık! / Hadi canım!','Anlıyorum','Elbette'] },
          { id: 's3-q4', type: 'translate', prompt: '"Beni rahat bırak!" (samimi) cümlesini çevir', streetPrompt: 'Brate, birine uzak durmasını nasıl söylersin?', answer: 'Ostavi me na miru', hint: 'mir = barış/huzur' },
          { id: 's3-q5', type: 'multiple-choice', prompt: '"Odlično" ne anlama gelir?', streetPrompt: 'Vopi — "Odlično" — šta je to?', answer: 'Mükemmel!', options: ['Berbat','İdare eder','Mükemmel!','Tuhaf'] },
        ],
      },
      {
        id: 'slang-4', title: 'Flört & İlişkiler', streetTitle: 'Muvanje i kafana', emoji: '💕', xpReward: 60,
        questions: [
          { id: 's4-q1', type: 'multiple-choice', prompt: '"Smuvati" ne anlama gelir?', streetPrompt: 'Pazi brate — šta znači "smuvati"?', answer: 'Tavlamak / Biriyle başarılı flörtleşmek', options: ['Kavga etmek','Kaçmak','Tavlamak / Biriyle başarılı flörtleşmek','Sarhoş olmak'] },
          { id: 's4-q2', type: 'multiple-choice', prompt: '"Vrh" kelime anlamı olarak nedir ve argoda ne demektir?', streetPrompt: 'Brate, what is "Vrh"?', answer: 'Kelime: Zirve / Argo: Muazzam/Harika', options: ['Kelime: Dip / Argo: Berbat','Kelime: Kenar / Argo: İdare Eder','Kelime: Son / Argo: Bitti','Kelime: Zirve / Argo: Muazzam/Harika'] },
          { id: 's4-q3', type: 'translate', prompt: '"Şerefe!" cümlesini çevir', streetPrompt: 'Rakı ile ne söylersin?', answer: 'Živeli', hint: 'zhi-ve-li' },
          { id: 's4-q4', type: 'multiple-choice', prompt: '"Šmeker" kime denir?', streetPrompt: 'Kendini "Šmeker" sanıyor — o da nedir?', answer: 'Ortamların adamı / Yakışıklı Çapkın', options: ['Ezik','İnek','Ortamların adamı / Yakışıklı Çapkın','Patron'] },
        ],
      },
      {
        id: 'slang-5', title: 'Partilemek', streetTitle: 'Luda žurka', emoji: '🍻', xpReward: 60,
        questions: [
          { id: 's5-q1', type: 'multiple-choice', prompt: '"Ludo" ne anlama gelir?', streetPrompt: 'Kakva noć! "Ludo" je!', answer: 'Çılgın / Delice', options: ['Sıkıcı','Gürültülü','Çılgın / Delice','Soğuk'] },
          { id: 's5-q2', type: 'translate', prompt: '"Parti" kelimesini çevir', streetPrompt: 'Žurka or …? "parti" kelimesini çevir!', answer: 'Žurka', hint: 'zhur-ka' },
          { id: 's5-q3', type: 'multiple-choice', prompt: '"Pijan kao letva" ne anlama gelir?', streetPrompt: 'Pazi brate — "Pijan kao letva"?', answer: 'Kütük gibi sarhoş', options: ['Sadece biraz çakırkeyif','Kütük gibi sarhoş','Su içiyor','Ayık'] },
          { id: 's5-q4', type: 'translate', prompt: 'Akşamdan kalmalık ("hangover") kelimesini çevir', streetPrompt: 'Ertesi sabah… sende ne var?', answer: 'Mamurluk', hint: 'ma-mur-luk' },
        ],
      },
    ],
  },

  // ─── DAILY LIFE ───────────────────────────────────────────────────────────
  {
    id: 'daily-life', title: 'Günlük Yaşam', streetTitle: 'Svaki dan, majstore',
    description: 'Günlük hayatın ve rutinlerin hakkında konuş',
    streetDescription: 'Šta radiš svaki dan? Nauči da pričaš o životu.',
    emoji: '☀️', color: '#16a085',
    isPro: true,
    lessons: [
      {
        id: 'daily-1', title: 'Sabah Rutini', streetTitle: 'Jutro je, ustaj!', emoji: '🌅', xpReward: 25,
        questions: [
          { id: 'dl1-q1', type: 'multiple-choice', prompt: '"Uyanıyorum" nasıl denir?', streetPrompt: 'Pazi — uyandığını nasıl söylersin?', answer: 'Buđim se', options: ['Spavam','Buđim se','Jedem','Idem'] },
          { id: 'dl1-q2', type: 'translate', prompt: '"Her sabah kahve içerim" cümlesini çevir', streetPrompt: 'Kapiram — sabah kahveni söyle bakalım!', answer: 'Pijem kafu svako jutro', hint: 'pijem = içerim, svako = her' },
          { id: 'dl1-q3', type: 'multiple-choice', prompt: '"Kupatilo" ne anlama gelir?', streetPrompt: 'Brate — "Kupatilo" — šta je to?', answer: 'Banyo', options: ['Mutfak','Yatak odası','Banyo','Oturma odası'] },
          { id: 'dl1-q4', type: 'multiple-choice', prompt: '"İşe gidiyorum" nasıl denir?', streetPrompt: 'Pazartesi sendromu — işe gittiğini nasıl söylersin?', answer: 'Idem na posao', options: ['Idem kući','Idem na posao','Radim kod kuće','Ne radim'] },
          { id: 'dl1-q5', type: 'translate', prompt: '"Yorgunum" cümlesini çevir', streetPrompt: 'Brate, çok yorgun olduğunu nasıl söylersin?', answer: 'Umoran sam', hint: 'umoran = yorgun (erkek), umorna = yorgun (kadın)' },
        ],
      },
      {
        id: 'daily-2', title: 'Evde', streetTitle: 'Kod kuće, opušten', emoji: '🏠', xpReward: 25,
        questions: [
          { id: 'dl2-q1', type: 'multiple-choice', prompt: '"Kuća" ne anlama gelir?', streetPrompt: '"Kuća" — šta je to?', answer: 'Ev', options: ['Apartman','Ev','Oda','Bina'] },
          { id: 'dl2-q2', type: 'translate', prompt: '"Oturma odası" kelimesini çevir', streetPrompt: 'Dnevna soba or …? "Oturma odası" çevir!', answer: 'Dnevna soba', hint: 'dnevna = günlük, soba = oda' },
          { id: 'dl2-q3', type: 'multiple-choice', prompt: '"Televizyon izliyorum" nasıl denir?', streetPrompt: 'Kapiram — evde takılıyorsun, ne yapıyorsun?', answer: 'Gledam televiziju', options: ['Slušam muziku','Gledam televiziju','Čitam knjigu','Spavam'] },
          { id: 'dl2-q4', type: 'multiple-choice', prompt: '"Prozor" nedir?', streetPrompt: 'Brate — "Prozor"?', answer: 'Pencere', options: ['Kapı','Tavan','Pencere','Zemin'] },
          { id: 'dl2-q5', type: 'translate', prompt: '"Pencereyi açabilir misin?" cümlesini çevir', streetPrompt: 'Çok sıcak — birinin pencereyi açmasını nasıl istersin?', answer: 'Možeš li otvoriti prozor?', hint: 'možeš li = yapabilir misin, otvoriti = açmak' },
        ],
      },
      {
        id: 'daily-3', title: 'İş ve Okul', streetTitle: 'Posao i škola', emoji: '💼', xpReward: 30,
        questions: [
          { id: 'dl3-q1', type: 'multiple-choice', prompt: '"Bir ofiste çalışıyorum" nasıl denir?', streetPrompt: 'Pazi — plaza çalışanı, nasıl söylersin?', answer: 'Radim u kancelariji', options: ['Radim u fabrici','Radim u kancelariji','Radim kod kuće','Ne radim'] },
          { id: 'dl3-q2', type: 'translate', prompt: '"Toplantı" kelimesini çevir', streetPrompt: 'Sastanak or …? "Toplantı" nasıl denir?', answer: 'Sastanak', hint: 'sa-sta-nak' },
          { id: 'dl3-q3', type: 'multiple-choice', prompt: '"Škola" ne anlama gelir?', streetPrompt: '"Škola" — šta je to?', answer: 'Okul', options: ['Hastane','Okul','Üniversite','Kütüphane'] },
          { id: 'dl3-q4', type: 'multiple-choice', prompt: '"Sırpça çalışıyorum" nasıl denir?', streetPrompt: 'Kapiram — Sırpça öğreniyorsun, nasıl söylersin?', answer: 'Učim srpski', options: ['Pričam srpski','Učim srpski','Volim srpski','Govorim srpski'] },
          { id: 'dl3-q5', type: 'translate', prompt: '"Toplantı saat 9\'da" cümlesini çevir', streetPrompt: 'Pazi — toplantının kaçta olduğunu nasıl söylersin?', answer: 'Sastanak je u devet', hint: 'je = -dir, u = -de/-da' },
        ],
      },
    ],
  },

  // ─── EMOTIONS & FEELINGS ──────────────────────────────────────────────────
  {
    id: 'emotions', title: 'Duygular', streetTitle: 'Kako se osećaš?',
    description: 'Sırpça duygularını ifade et',
    streetDescription: 'Brate, kako se osećaš? Nauči da kažeš.',
    emoji: '❤️', color: '#e91e63',
    isPro: true,
    lessons: [
      {
        id: 'emotions-1', title: 'Temel Duygular', streetTitle: 'Sreća, tuga, bes', emoji: '😊', xpReward: 25,
        questions: [
          { id: 'em1-q1', type: 'multiple-choice', prompt: '"Mutluyum" nasıl denir?', streetPrompt: 'Brate — mutlu olduğunu nasıl söylersin?', answer: 'Srećan sam', options: ['Tužan sam','Srećan sam','Ljut sam','Uplašen sam'] },
          { id: 'em1-q2', type: 'translate', prompt: '"Üzgünüm" cümlesini çevir', streetPrompt: 'Kapiram — üzüntünü nasıl ifade edersin?', answer: 'Tužan sam', hint: 'tužan = üzgün (erkek); tužna = üzgün (kadın)' },
          { id: 'em1-q3', type: 'multiple-choice', prompt: '"Ljut" ne anlama gelir?', streetPrompt: '"Ljut" — kako se osećaš?', answer: 'Sinirli', options: ['Heyecanlı','Sıkkın','Sinirli','Korkmuş'] },
          { id: 'em1-q4', type: 'multiple-choice', prompt: '"Seni seviyorum" nasıl denir?', streetPrompt: 'Pazi — en büyük cümle! "Seni seviyorum" nasıl denir?', answer: 'Volim te', options: ['Sviđaš mi se','Volim te','Nedostaješ mi','Znam te'] },
          { id: 'em1-q5', type: 'translate', prompt: '"Seni özledim" cümlesini çevir', streetPrompt: 'Brate — birini özlediğini nasıl söylersin?', answer: 'Nedostaješ mi', hint: 'nedostajati = eksiklik hissetmek/özlemek' },
          { id: 'em1-q6', type: 'multiple-choice', prompt: '"Usamljen" nedir?', streetPrompt: '"Usamljen" — šta je to?', answer: 'Yalnız', options: ['Yorgun','Yalnız','Heyecanlı','Mutlu'] },
        ],
      },
      {
        id: 'emotions-2', title: 'Fikirler', streetTitle: 'Šta misliš?', emoji: '🤔', xpReward: 30,
        questions: [
          { id: 'em2-q1', type: 'multiple-choice', prompt: '"Bence…" nasıl denir?', streetPrompt: 'Pazi — fikrini nasıl paylaşırsın?', answer: 'Mislim da…', options: ['Znam da…','Mislim da…','Vidim da…','Hoću da…'] },
          { id: 'em2-q2', type: 'translate', prompt: '"Bana göre / Benim fikrimce" cümlesini çevir', streetPrompt: 'Kapiram — bir fikre nasıl başlarsın?', answer: 'Po mom mišljenju', hint: 'mišljenje = fikir/görüş' },
          { id: 'em2-q3', type: 'multiple-choice', prompt: 'Biriyle aynı fikirde olduğunu nasıl söylersin?', streetPrompt: 'Brate — "Katılıyorum" nasıl denir?', answer: 'Slažem se', options: ['Ne slažem se','Slažem se','Ne znam','Možda'] },
          { id: 'em2-q4', type: 'multiple-choice', prompt: '"Možda" ne anlama gelir?', streetPrompt: '"Možda" — šta je to?', answer: 'Belki / Olabilir', options: ['Evet','Hayır','Belki / Olabilir','Asla'] },
          { id: 'em2-q5', type: 'translate', prompt: '"Bilmiyorum" cümlesini çevir', streetPrompt: 'Pazi — bilmediğini nasıl söylersin?', answer: 'Ne znam', hint: 'ne = hayır/değil, znam = biliyorum' },
        ],
      },
    ],
  },

  // ─── WEATHER ──────────────────────────────────────────────────────────────
  {
    id: 'weather', title: 'Hava Durumu', streetTitle: 'Kakvo je vreme?',
    description: 'Hava durumu hakkında Sırpça konuş',
    streetDescription: 'Beograd ima sve — güneşi de var, karı da.',
    emoji: '⛅', color: '#2980b9',
    isPro: true,
    lessons: [
      {
        id: 'weather-1', title: 'Temel Hava', streetTitle: 'Kiša ili sunce?', emoji: '🌤️', xpReward: 20,
        questions: [
          { id: 'w1-q1', type: 'multiple-choice', prompt: '"Hava nasıl?" diye nasıl sorulur?', streetPrompt: 'Pazi — havanın nasıl olduğunu nasıl sorarsın?', answer: 'Kakvo je vreme?', options: ['Koliko je toplo?','Kakvo je vreme?','Da li pada kiša?','Je li sunčano?'] },
          { id: 'w1-q2', type: 'translate', prompt: '"Yağmur yağıyor" cümlesini çevir', streetPrompt: 'Kiša pada — yağmur yağdığını nasıl söylersin?', answer: 'Pada kiša', hint: 'pada = düşüyor, kiša = yağmur' },
          { id: 'w1-q3', type: 'multiple-choice', prompt: '"Sunčano" ne anlama gelir?', streetPrompt: '"Sunčano" — kakvo je vreme?', answer: 'Güneşli', options: ['Bulutlu','Rüzgarlı','Güneşli','Yağmurlu'] },
          { id: 'w1-q4', type: 'multiple-choice', prompt: '"Hava soğuk" nasıl denir?', streetPrompt: 'Brrr — havanın soğuk olduğunu Sırpçada nasıl söylersin?', answer: 'Hladno je', options: ['Toplo je','Hladno je','Vetrovito je','Vlažno je'] },
          { id: 'w1-q5', type: 'translate', prompt: '"Kar" kelimesini çevir', streetPrompt: 'Beograd zimi — "kar" kelimesini çevir!', answer: 'Sneg', hint: 's-neg' },
          { id: 'w1-q6', type: 'multiple-choice', prompt: '"Oblačno" ne anlama gelir?', streetPrompt: '"Oblačno" — kakvo je vreme?', answer: 'Bulutlu', options: ['Güneşli','Soğuk','Bulutlu','Sıcak'] },
        ],
      },
      {
        id: 'weather-2', title: 'Mevsimler', streetTitle: 'Godišnja doba', emoji: '🍂', xpReward: 25,
        questions: [
          { id: 'w2-q1', type: 'multiple-choice', prompt: '"Yaz" nasıl denir?', streetPrompt: 'Kapiram — Sırpçada "Yaz"?', answer: 'Leto', options: ['Zima','Proleće','Leto','Jesen'] },
          { id: 'w2-q2', type: 'translate', prompt: '"Kış" kelimesini çevir', streetPrompt: 'Brrr — Sırpçada "Kış"?', answer: 'Zima', hint: 'zi-ma' },
          { id: 'w2-q3', type: 'multiple-choice', prompt: '"Proleće" nedir?', streetPrompt: '"Proleće" — hangi mevsim?', answer: 'İlkbahar', options: ['Sonbahar','Kış','İlkbahar','Yaz'] },
          { id: 'w2-q4', type: 'multiple-choice', prompt: '"Sonbahar" nasıl denir?', streetPrompt: 'Pazi — hangi kelime sonbahar demek?', answer: 'Jesen', options: ['Leto','Zima','Proleće','Jesen'] },
          { id: 'w2-q5', type: 'translate', prompt: '"Yazı seviyorum" cümlesini çevir', streetPrompt: 'Brate — yaz mevsimine bayıldığını söyle!', answer: 'Volim leto', hint: 'volim = seviyorum' },
        ],
      },
    ],
  },

  // ─── FAMILY ───────────────────────────────────────────────────────────────
  {
    id: 'family', title: 'Aile', streetTitle: 'Porodica, brate',
    description: 'Aile üyelerin hakkında konuş',
    streetDescription: 'Porodica je sve — aile candır, sülaleyi öğren.',
    emoji: '👨‍👩‍👧', color: '#27ae60',
    isPro: true,
    lessons: [
      {
        id: 'family-1', title: 'Aile Üyeleri', streetTitle: 'Ko je ko u familiji', emoji: '👪', xpReward: 25,
        questions: [
          { id: 'fam1-q1', type: 'multiple-choice', prompt: '"Anne" nasıl denir?', streetPrompt: 'Pazi — Sırpçada "Anne"?', answer: 'Majka', options: ['Otac','Majka','Brat','Sestra'] },
          { id: 'fam1-q2', type: 'translate', prompt: '"Baba" kelimesini çevir', streetPrompt: 'Brate — Sırpçada "Baba"?', answer: 'Otac', hint: 'o-tac' },
          { id: 'fam1-q3', type: 'multiple-choice', prompt: '"Brat" ne anlama gelir?', streetPrompt: '"Brat" — šta je to?', answer: 'Erkek Kardeş', options: ['Kız kardeş','Baba','Erkek Kardeş','Oğul'] },
          { id: 'fam1-q4', type: 'multiple-choice', prompt: '"Büyükanne/Nine" nasıl denir?', streetPrompt: 'Kapiram — neneye nasıl seslenirsin?', answer: 'Baka', options: ['Deda','Baka','Tetka','Strina'] },
          { id: 'fam1-q5', type: 'translate', prompt: '"İki erkek kardeşim var" cümlesini çevir', streetPrompt: 'Brate — iki erkek kardeşin olduğunu nasıl söylersin?', answer: 'Imam dva brata', hint: 'imam = sahibim/var, dva = iki' },
          { id: 'fam1-q6', type: 'multiple-choice', prompt: '"Deda" kimdir?', streetPrompt: '"Deda" is who?', answer: 'Babaanne/Büyükbaba', options: ['Amca','Baba','Dede / Büyükbaba','Oğul'] },
        ],
      },
      {
        id: 'family-2', title: 'Aileyi Anlatmak', streetTitle: 'Kakva je tvoja familija?', emoji: '🧬', xpReward: 30,
        questions: [
          { id: 'fam2-q1', type: 'multiple-choice', prompt: '"Ailem büyük" nasıl denir?', streetPrompt: 'Kapiram — büyük aileni anlat bakalım!', answer: 'Moja porodica je velika', options: ['Moja porodica je mala','Moja porodica je velika','Imam porodicu','Volim porodicu'] },
          { id: 'fam2-q2', type: 'translate', prompt: '"Kız kardeşim genç/küçük" cümlesini çevir', streetPrompt: 'Pazi — kız kardeşinin genç olduğunu nasıl söylersin?', answer: 'Moja sestra je mlada', hint: 'mlada = genç (kadın/dişil)' },
          { id: 'fam2-q3', type: 'multiple-choice', prompt: '"Star" ne anlama gelir?', streetPrompt: '"Star" — šta znači?', answer: 'Yaşlı / Eski', options: ['Genç','Uzun','Yaşlı / Eski','Zeki'] },
          { id: 'fam2-q4', type: 'multiple-choice', prompt: '"Babam Belgrad\'da çalışıyor" nasıl denir?', streetPrompt: 'Brate — babanın nerede çalıştığını nasıl anlatırsın?', answer: 'Moj otac radi u Beogradu', options: ['Moj otac je u Beogradu','Moj otac radi u Beogradu','Moj otac živi u Beogradu','Moj otac ide u Beograd'] },
          { id: 'fam2-q5', type: 'translate', prompt: '"Kardeşlerin var mı?" cümlesini çevir', streetPrompt: 'Kapiram — birine kardeşleri olup olmadığını sor bakalım.', answer: 'Imaš li braću i sestre?', hint: 'braća = erkek kardeşler (çoğul yalın)' },
        ],
      },
    ],
  },

  // ─── TRAVEL & PLACES ────────────────────────────────────────────────────────
  {
    id: 'travel', title: 'Seyahat', streetTitle: 'Putevi i Mesta',
    description: 'Otel, havalimanı ve daha uzaklara gitmek için gerekenler.',
    streetDescription: 'Idemo negde na put! Aerodromi, hoteli i sve to.',
    emoji: '✈️', color: '#3498db',
    isPro: true,
    lessons: [
      {
        id: 'travel-1', title: 'Otel Girişi', streetTitle: 'Soba i ključ', emoji: '🏨', xpReward: 25,
        questions: [
          { id: 'tr1-q1', type: 'multiple-choice', prompt: '"Otel" nasıl denir?', streetPrompt: 'Otele ne diyorsunuz brate?', answer: 'Hotel', options: ['Soba', 'Restoran', 'Kuća', 'Hotel'] },
          { id: 'tr1-q2', type: 'translate', prompt: '"Rezervasyonum var" cümlesini çevir', streetPrompt: 'Kapiram — odanı ayarladın, resepsiyonda ne dersin?', answer: 'Imam rezervaciju', hint: 'imam = sahibim, rezervacija = rezervasyon' },
          { id: 'tr1-q3', type: 'multiple-choice', prompt: '"Soba" ne anlama gelir?', streetPrompt: 'Brate, "soba" nedir?', answer: 'Oda', options: ['Bina', 'Oda', 'Mutfak', 'Yatak'] },
          { id: 'tr1-q4', type: 'translate', prompt: '"Pasaport" kelimesini çevir', streetPrompt: 'Sınırda lazım olan şey?', answer: 'Pasoš', hint: 'pa-soš' },
        ],
      },
      {
        id: 'travel-2', title: 'Havalimanı & Uçuşlar', streetTitle: 'Letimo na aerodrom', emoji: '🛫', xpReward: 30,
        questions: [
          { id: 'tr2-q1', type: 'multiple-choice', prompt: '"Uçuş" nasıl denir?', streetPrompt: 'Pazi — havaya yükseliyorsun?', answer: 'Let', options: ['Karta', 'Let', 'Avion', 'Put'] },
          { id: 'tr2-q2', type: 'multiple-choice', prompt: '"Kofer" ne anlama gelir?', streetPrompt: 'Brate — "kofer"?', answer: 'Bavul', options: ['Sırt çantası', 'Bilet', 'Bavul', 'Cüzdan'] },
          { id: 'tr2-q3', type: 'translate', prompt: '"Bagajım nerede?" cümlesini çevir', streetPrompt: 'Gde je... bagaj ne demekti?', answer: 'Gde je moj prtljag?', hint: 'moj = benim, prtljag = bagaj' },
        ],
      },
    ],
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  {
    id: 'shopping', title: 'Alışveriş', streetTitle: 'Šoping vreme',
    description: 'Alışveriş, kıyafet alma ve pazarlık kelimelerini öğren.',
    streetDescription: 'Brate, idemo u šoping. Trošimo pare danas!',
    emoji: '🛍️', color: '#9b59b6',
    isPro: true,
    lessons: [
      {
        id: 'shopping-1', title: 'Kıyafetler', streetTitle: 'Odeća i patike', emoji: '👕', xpReward: 30,
        questions: [
          { id: 'sh1-q1', type: 'multiple-choice', prompt: '"Ti-şört" kelimesi nedir?', streetPrompt: 'Kapiram — kısa kollu tişört nedir?', answer: 'Majica', options: ['Jakna', 'Cipele', 'Košulja', 'Majica'] },
          { id: 'sh1-q2', type: 'translate', prompt: '"Ayakkabı" kelimesini çevir', streetPrompt: 'Ayağa ne giyilir?', answer: 'Cipele', hint: 'ci-pe-le' },
          { id: 'sh1-q3', type: 'multiple-choice', prompt: '"Jeftino" ne anlama gelir?', streetPrompt: 'Brate — "jeftino"?', answer: 'Ucuz', options: ['İyi', 'Pahalı', 'Ucuz', 'Ağır'] },
          { id: 'sh1-q4', type: 'translate', prompt: '"Pahalı" kelimesini çevir', streetPrompt: 'Çok fazla para — bunun Sırpçası nedir?', answer: 'Skupo', hint: 'sku-po' },
        ],
      },
      {
        id: 'shopping-2', title: 'Kadın Modası', streetTitle: 'Ženska Moda', emoji: '👗', xpReward: 35,
        questions: [
          { id: 'sh2-q1', type: 'multiple-choice', prompt: '"Elbise" nasıl denir?', streetPrompt: 'Brate, elbiseye ne denir?', answer: 'Haljina', options: ['Pantalone', 'Haljina', 'Jakna', 'Košulja'] },
          { id: 'sh2-q2', type: 'translate', prompt: '"Etek" kelimesini çevir', streetPrompt: 'Sırpçada etek nedir?', answer: 'Suknja', hint: 'suk-nya' },
          { id: 'sh2-q3', type: 'multiple-choice', prompt: '"Štikle" nedir?', streetPrompt: 'Bu gece dışarı çıkıyor — "Štikle" nedir?', answer: 'Topuklu ayakkabı', options: ['Spor ayakkabı', 'Topuklu ayakkabı', 'Bot', 'Sandalet'] },
          { id: 'sh2-q4', type: 'translate', prompt: '"Güzel elbise" kelimesini çevir', streetPrompt: 'Bir elbiseye nasıl iltifat edersin?', answer: 'Lepa haljina', hint: 'lepa = güzel' },
        ],
      },
      {
        id: 'shopping-3', title: 'Erkek Modası', streetTitle: 'Muška Moda', emoji: '👔', xpReward: 35,
        questions: [
          { id: 'sh3-q1', type: 'multiple-choice', prompt: '"Şort" nasıl denir?', streetPrompt: 'Yaz geldi kanka — şort nedir?', answer: 'Šorts', options: ['Šorts', 'Odelo', 'Kapa', 'Kaiš'] },
          { id: 'sh3-q2', type: 'multiple-choice', prompt: '"Odelo" nedir?', streetPrompt: 'Şık giyinmek — "Odelo" nedir?', answer: 'Takım elbise', options: ['Tişört', 'Kravat', 'Takım elbise', 'Pantolon'] },
          { id: 'sh3-q3', type: 'translate', prompt: '"Pantolon" kelimesini çevir', streetPrompt: 'Pantolon Sırpçada nasıl?', answer: 'Pantalone', hint: 'pan-ta-lo-ne' },
          { id: 'sh3-q4', type: 'multiple-choice', prompt: '"Ceket" nasıl denir?', streetPrompt: 'Hava soğuk kanka — bir tane...', answer: 'Jakna', options: ['Kravata', 'Čarapa', 'Jakna', 'Prsluk'] },
        ],
      },
    ],
  },

  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  {
    id: 'culture', title: 'Serbian Culture', streetTitle: 'Svi Srbi Zidaju',
    description: 'Understand the soul of Serbia: Slava, Rakija, and Kafana rules.',
    streetDescription: 'Upoznaj pravu Srbiju. Budi kao domaći.',
    emoji: '🦅', color: '#B22222',
    isPro: true,
    lessons: [
      {
        id: 'culture-1', title: 'Slava', streetTitle: 'Slava i Gosti', emoji: '🕯️', xpReward: 35,
        questions: [
          { id: 'c1-q1', type: 'multiple-choice', prompt: '"Slava" nedir?', streetPrompt: 'Sırp aileleri için en önemli gün nedir?', answer: 'Aziz günü', options: ['Aziz günü','Düğün','Doğum günü','Yeni Yıl'] },
          { id: 'c1-q2', type: 'multiple-choice', prompt: 'Bir Sırp evine misafir olarak girerken ne yapmalısın?', streetPrompt: 'Eve girerken — en önemli kural nedir?', answer: 'Ayakkabılarını çıkar', options: ['Ev sahibini 4 kez öp','Yüksek sesle kapıyı çal','Ayakkabılarını çıkar','Para öde'] },
          { id: 'c1-q3', type: 'translate', prompt: '"Mutlu Slava!" cümlesini çevir', streetPrompt: 'Ev sahibini Slava için nasıl tebrik edersin?', answer: 'Srećna slava', hint: 'srećna = mutlu' },
          { id: 'c1-q4', type: 'multiple-choice', prompt: 'Evin kadın ev sahibine ne denir?', streetPrompt: 'Ona saygı duymalısın — kadın ev sahibine ne denir?', answer: 'Domaćica', options: ['Kraljica','Domaćica','Prijateljica','Sestra'] },
          { id: 'c1-q5', type: 'multiple-choice', prompt: 'Birinin evine giderken genellikle ne hediye götürürsün?', streetPrompt: 'Ev sahibi için standart hediye nedir?', answer: 'Kahve, şarap veya çikolata', options: ['Büyük bir bitki','Kahve, şarap veya çikolata','Para','Taze ekmek'] },
        ],
      },
      {
        id: 'culture-2', title: 'Rakija Kuralları', streetTitle: 'Pravila Rakije', emoji: '🥃', xpReward: 35,
        questions: [
          { id: 'c2-q1', type: 'multiple-choice', prompt: 'Rakija ile kadeh kaldırırken altın kural nedir?', streetPrompt: 'Kadeh tokuştururken — ne yapmalısın?', answer: 'Gözlerinin içine bak', options: ['Tek dikişte iç','Gözlerinin içine bak','Kadehe bak','Yüksek sesle bağır'] },
          { id: 'c2-q2', type: 'translate', prompt: '"Sağlığına / Şerefe!" cümlesini çevir', streetPrompt: 'Nasıl kadeh kaldırırız?', answer: 'U tvoje zdravlje', hint: 'zdravlje = sağlık' },
          { id: 'c2-q3', type: 'multiple-choice', prompt: '"Šljivovica" nedir?', streetPrompt: 'En ünlü Rakija türü?', answer: 'Erik rakısı', options: ['Üzüm rakısı','Erik rakısı','Vişne rakısı','Bal rakısı'] },
          { id: 'c2-q4', type: 'translate', prompt: '"Şerefe" kelimesini çevir', streetPrompt: 'Yaygın kadeh kaldırma kelimesi?', answer: 'Živeli', hint: 'zhi-ve-li' },
        ],
      },
      {
        id: 'culture-3', title: 'Kafana Hayatı', streetTitle: 'Noć u Kafani', emoji: '🎻', xpReward: 40,
        questions: [
          { id: 'c3-q1', type: 'multiple-choice', prompt: '"Kafana" nedir?', streetPrompt: 'En iyi gece hayatı nerede?', answer: 'Geleneksel meyhane', options: ['Gece kulübü','Kafe','Süpermarket','Geleneksel meyhane'] },
          { id: 'c3-q2', type: 'multiple-choice', prompt: 'Müzisyenler masana gelirse onlara ne vermelisin?', streetPrompt: 'Müzik masana geldi — ne verirsin?', answer: 'Bakšiš (Bahşiş)', options: ['Rakija','Bakšiš (Bahşiş)','Bir şarkı','Yemek'] },
          { id: 'c3-q3', type: 'translate', prompt: '"Canlı müzik" cümlesini çevir', streetPrompt: 'Kafana\'yı özel kılan nedir?', answer: 'Živa muzika', hint: 'živa = canlı, muzika = müzik' },
        ],
      },
    ],
  },

  // ─── HOBBIES & INTERESTS (FREE) ──────────────────────────────────────────
  {
    id: 'hobbies', title: 'Hobiler & Eğlence', streetTitle: 'Šta radiš za vikend?',
    description: 'Hobilerin ve boş zaman aktivitelerin hakkında konuş.',
    streetDescription: 'Odmaranje, sport i pivo! Nauči o hobijima.',
    emoji: '⚽', color: '#e67e22',
    isPro: true,
    lessons: [
      {
        id: 'hobbies-1', title: 'Boş Zaman', streetTitle: 'Slobodno vreme', emoji: '🎸', xpReward: 30,
        questions: [
          { id: 'hb1-q1', type: 'multiple-choice', prompt: '"Müzik dinliyorum" nasıl denir?', streetPrompt: 'Slušalice u uši — müzik dinlediğini nasıl söylersin?', answer: 'Slušam muziku', options: ['Gledam film', 'Slušam muziku', 'Igram fudbal', 'Čitam knjigu'] },
          { id: 'hb1-q2', type: 'translate', prompt: '"Kitap okuyorum" cümlesini çevir', streetPrompt: 'Kapiram — "Kitap okuyorum" nedir?', answer: 'Čitam knjigu', hint: 'čitam = okuyorum, knjigu = kitap' },
          { id: 'hb1-q3', type: 'multiple-choice', prompt: '"Pevam" ne anlama gelir?', streetPrompt: 'Idemo — "Pevam"?!', answer: 'Şarkı söylüyorum', options: ['Dans ediyorum', 'Şarkı söylüyorum', 'Yüzüyorum', 'Koşuyorum'] },
          { id: 'hb1-q4', type: 'translate', prompt: '"Dans etmeyi seviyorum" cümlesini çevir', streetPrompt: 'Klubovi! Dans etmeyi sevdiğini anlat!', answer: 'Volim da plešem', hint: 'volim = seviyorum, da plešem = dans etmeyi' },
        ],
      },
      {
        id: 'hobbies-2', title: 'Spor & Oyun', streetTitle: 'Sport i Pivo', emoji: '🏆', xpReward: 35,
        questions: [
          { id: 'hb2-q1', type: 'multiple-choice', prompt: '"Fudbal" nedir?', streetPrompt: 'Najbitnija sporedna stvar na svetu?', answer: 'Futbol', options: ['Basketbol', 'Tenis', 'Futbol', 'Voleybol'] },
          { id: 'hb2-q2', type: 'multiple-choice', prompt: '"Oyun oynuyorum" nasıl denir?', streetPrompt: 'Brate — oyun oynadığını nasıl söylersin?', answer: 'Igram igrice', options: ['Spavam', 'Gledam TV', 'Igram igrice', 'Jedem'] },
          { id: 'hb2-q3', type: 'translate', prompt: '"Koşuyorum" kelimesini çevir', streetPrompt: 'Brate — "koşuyorum" nedir?', answer: 'Trčim', hint: 'tr-čim' },
          { id: 'hb2-q4', type: 'multiple-choice', prompt: '"Teretana" nedir?', streetPrompt: 'Brate, idemo vežbamo — "Teretana" nedir?', answer: 'Spor salonu', options: ['Kütüphane', 'Spor salonu', 'Market', 'Hastane'] },
        ],
      },
    ],
  },
  
  // ─── TECHNOLOGY (PRO) ────────────────────────────────────────────────────
  {
    id: 'technology', title: 'Teknoloji & İnternet', streetTitle: 'Na Mreži',
    description: 'Telefonlar, bilgisayarlar ve internet kelimeleri.',
    streetDescription: 'Brate, gde ti je punjač? Pričamo o tehnologiji.',
    emoji: '💻', color: '#34495e',
    isPro: true,
    lessons: [
      {
        id: 'tech-1', title: 'Cep Telefonunuz', streetTitle: 'Mobilni', emoji: '📱', xpReward: 30,
        questions: [
          { id: 'tc1-q1', type: 'multiple-choice', prompt: '"Telefon" nasıl denir?', streetPrompt: 'Brate, cebinde ne var?', answer: 'Telefon', options: ['Sat', 'Novčanik', 'Ključ', 'Telefon'] },
          { id: 'tc1-q2', type: 'translate', prompt: '"Bataryam bitti" cümlesini çevir', streetPrompt: 'En kötüsü — şarj bitti?', answer: 'Prazna mi je baterija', hint: 'prazna = boş, baterija = batarya' },
          { id: 'tc1-q3', type: 'multiple-choice', prompt: '"Punjač" nedir?', streetPrompt: 'Kapiram, "punjač" lazım sana. Nedir o?', answer: 'Şarj aleti', options: ['Kulaklık', 'Kılıf', 'Ekran', 'Şarj aleti'] },
          { id: 'tc1-q4', type: 'multiple-choice', prompt: '"Poruka" ne anlama gelir?', streetPrompt: 'Bzz bzz... "poruka" geldi?', answer: 'Mesaj', options: ['Arama', 'Mesaj', 'Fotoğraf', 'Video'] },
        ],
      },
      {
        id: 'tech-2', title: 'İnternet', streetTitle: 'Na internetu', emoji: '🌐', xpReward: 30,
        questions: [
          { id: 'tc2-q1', type: 'multiple-choice', prompt: '"Bilgisayar" nasıl denir?', streetPrompt: 'Evde masaüstünde ne var?', answer: 'Kompjuter', options: ['Kompjuter', 'Televizor', 'Radio', 'Šporet'] },
          { id: 'tc2-q2', type: 'translate', prompt: '"Wi-Fi şifresi nedir?" cümlesini çevir', streetPrompt: 'Kafeye oturdun, net lazım. Ne sorarsın?', answer: 'Koja je šifra za internet?', hint: 'koja = nedir/hangisi, šifra = şifre' },
          { id: 'tc2-q3', type: 'multiple-choice', prompt: '"Društvene mreže" ne anlama gelir?', streetPrompt: 'Brate — her gün kaydırdığın şey?', answer: 'Sosyal Medya', options: ['Spor', 'Haberler', 'Sosyal Medya', 'Müzik'] },
          { id: 'tc2-q4', type: 'translate', prompt: '"Ekrana bakıyorum" cümlesini çevir', streetPrompt: 'Gözün nerede?', answer: 'Gledam u ekran', hint: 'gledam = bakıyorum/izliyorum, u = -e/üzerinde' },
        ],
      },
    ],
  },

  // ─── WORK (PRO) ──────────────────────────────────────────────────────────
  {
    id: 'work', title: 'İş & Kariyer', streetTitle: 'Na Poslu',
    description: 'İş yerinde kullanılan meslekler ve kelimeler.',
    streetDescription: 'Mora da se radi, brate. Nauči kako da pričaš o poslu.',
    emoji: '💼', color: '#1abc9c',
    isPro: true,
    lessons: [
      {
        id: 'work-1', title: 'Meslekler', streetTitle: 'Šta radiš u životu?', emoji: '🧑‍💼', xpReward: 35,
        questions: [
          { id: 'wk1-q1', type: 'multiple-choice', prompt: '"Şef / Patron" nasıl denir?', streetPrompt: 'En tepedeki adama ne denir?', answer: 'Šef', options: ['Radnik', 'Šef', 'Klijent', 'Praktikant'] },
          { id: 'wk1-q2', type: 'multiple-choice', prompt: '"Učenik / Öğrenci" ne anlama gelir?', streetPrompt: '"Student" nedir?', answer: 'Üniversite Öğrencisi', options: ['Öğretmen', 'Üniversite Öğrencisi', 'Doktor', 'Mühendis'] },
          { id: 'wk1-q3', type: 'translate', prompt: '"Doktor" kelimesini çevir', streetPrompt: 'Hastanedesin. Kimdir o?', answer: 'Doktor', hint: 'Doktor/Lekar' },
          { id: 'wk1-q4', type: 'multiple-choice', prompt: '"Radnik" nedir?', streetPrompt: 'Brate, "Radnik" kimdir?', answer: 'İşçi / Çalışan', options: ['Patron', 'Müşteri', 'İşçi / Çalışan', 'Öğrenci'] },
        ],
      },
      {
        id: 'work-2', title: 'Ofiste', streetTitle: 'Kancelarija', emoji: '🏢', xpReward: 35,
        questions: [
          { id: 'wk2-q1', type: 'multiple-choice', prompt: '"Toplantı" nasıl denir?', streetPrompt: 'Patron çağırdı, ne bu?', answer: 'Sastanak', options: ['Odmor', 'Sastanak', 'Ručak', 'Pauza'] },
          { id: 'wk2-q2', type: 'translate', prompt: '"Meşgulüm" cümlesini çevir', streetPrompt: 'Vaktin yok, yetiştireceğin iş var, ne dersin?', answer: 'Zauzet sam', hint: 'zauzet = meşgul/dolu' },
          { id: 'wk2-q3', type: 'multiple-choice', prompt: '"Mola / Ara" ne anlama gelir? ("Pauza")', streetPrompt: 'Ajde na pauzu! "Pauza" nedir?', answer: 'Mola', options: ['İş', 'Mola', 'Toplantı', 'Maaş'] },
          { id: 'wk2-q4', type: 'translate', prompt: '"Maaş" kelimesini çevir', streetPrompt: 'Herkes bunu bekliyor...', answer: 'Plata', hint: 'pla-ta' },
        ],
      },
    ],
  },

  // ─── COLORS & DESCRIPTIONS (FREE) ───────────────────────────────────────
  {
    id: 'colors', title: 'Renkler', streetTitle: 'Crveno i Crno',
    description: 'Etrafındaki dünyayı renklerle anlatmayı öğren.',
    streetDescription: 'Koje je boje tvoj auto, majstore?',
    emoji: '🎨', color: '#f1c40f',
    lessons: [
      {
        id: 'colors-1', title: 'Ana Renkler', streetTitle: 'Glavne boje', emoji: '🔴', xpReward: 20,
        questions: [
          { id: 'col1-q1', type: 'translate', prompt: '"Kırmızı" kelimesini çevir', streetPrompt: 'Kızılyıldızın rengi!', answer: 'Crvena', hint: 'cr-ve-na' },
          { id: 'col1-q2', type: 'translate', prompt: '"Siyah" kelimesini çevir', streetPrompt: 'Partizanın rengi!', answer: 'Crna', hint: 'cr-na' },
          { id: 'col1-q3', type: 'multiple-choice', prompt: '"Belo" hangi renktir?', streetPrompt: '"Beo-grad" Beyaz Şehir demek. O halde "Belo" nedir?', answer: 'Beyaz', options: ['Mavi', 'Beyaz', 'Sarı', 'Yeşil'] },
          { id: 'col1-q4', type: 'multiple-choice', prompt: '"Mavi" nasıl denir?', streetPrompt: 'Gökyüzü ne renk?', answer: 'Plava', options: ['Žuta', 'Zelena', 'Plava', 'Siva'] },
        ],
      },
    ]
  },

  // ─── BALKAN SURVIVAL (PRO) ───────────────────────────────────────────────
  {
    id: 'survival', title: 'Balkanlarda Hayatta Kalma', streetTitle: 'Preživljavanje Šaltera',
    description: 'Bürokrasi, devlet daireleri ve efsanelerle başa çık.',
    streetDescription: 'Šalteri, birokratija i promaja. Budi spreman.',
    emoji: '🛡️', color: '#34495e',
    isPro: true,
    lessons: [
      {
        id: 'surv-1', title: 'Bürokrasi', streetTitle: 'Fali Ti Jedan Papir (FT1P)', emoji: '📄', xpReward: 40,
        questions: [
          { id: 'sv1-q1', type: 'multiple-choice', prompt: '"Šalter" ne anlama gelir?', streetPrompt: 'Memurla kavga etmek için nereye gidersin?', answer: 'Vezne / Gişe', options: ['Banka kasası', 'Vezne / Gişe', 'Tuvalet', 'Çıkış'] },
          { id: 'sv1-q2', type: 'translate', prompt: '"Mühür" kelimesini çevir', streetPrompt: 'Bez ovoga papir ne vredi ništa!', answer: 'Pečat', hint: 'pe-čat' },
          { id: 'sv1-q3', type: 'multiple-choice', prompt: '"Fali ti jedan papir" ne anlama gelir? (Efsanevi FT1P)', streetPrompt: 'Memur teyze sana her zaman ne der?', answer: 'Bir evrak eksik', options: ['Onaylandın', 'Bir evrak eksik', 'Lütfen dışarıda bekle', 'Yarın gel'] },
          { id: 'sv1-q4', type: 'translate', prompt: '"İmza" kelimesini çevir', streetPrompt: 'Nereye atıyorsun, brate?', answer: 'Potpis', hint: 'pot-pis' },
        ],
      },
      {
        id: 'surv-2', title: 'Sağlık & Mitler', streetTitle: 'Čuvaj Se Promaje', emoji: '🥶', xpReward: 40,
        questions: [
          { id: 'sv2-q1', type: 'multiple-choice', prompt: '"Promaja" nedir?', streetPrompt: 'Balkanlardaki en ölümcül şey?', answer: 'Cereyanda kalmak', options: ['Vahşi bir hayvan', 'Cereyanda kalmak', 'Bir rakı türü', 'Kötü bir büyü'] },
          { id: 'sv2-q2', type: 'translate', prompt: '"Hastayım" cümlesini çevir', streetPrompt: 'Kako kažeš da si bolestan?', answer: 'Bolestan sam', hint: 'bolestan = hasta' },
          { id: 'sv2-q3', type: 'multiple-choice', prompt: '"Doktor" nasıl denir?', streetPrompt: 'Promaja çarpınca kimi ararsın?', answer: 'Doktor / Lekar', options: ['Zubar', 'Doktor / Lekar', 'Majstor', 'Policija'] },
        ],
      },
    ],
  },

  // ─── SPORTS (PRO) ────────────────────────────────────────────────────────
  {
    id: 'sports', title: 'Spor Kültürü', streetTitle: 'Fudbal i Derbi',
    description: 'Futbol, basketbol ve taraftarlık kültürü.',
    streetDescription: 'Zvezda ili Partizan? Nauči da navijaš.',
    emoji: '⚽', color: '#d35400',
    isPro: true,
    lessons: [
      {
        id: 'sport-1', title: 'Ebedi Derbi', streetTitle: 'Večiti Derbi', emoji: '🏟️', xpReward: 35,
        questions: [
          { id: 'sp1-q1', type: 'multiple-choice', prompt: '"Večiti Derbi" nedir?', streetPrompt: 'Najveća utakmica u Srbiji?', answer: 'Ebedi Derbi (Kızılyıldız vs Partizan)', options: ['Basketbol turnuvası', 'Ebedi Derbi (Kızılyıldız vs Partizan)', 'Ulusal kupa', 'Tenis maçı'] },
          { id: 'sp1-q2', type: 'multiple-choice', prompt: '"Navijač" ne anlama gelir?', streetPrompt: 'Ko ide na stadion?', answer: 'Taraftar', options: ['Oyuncu', 'Hakem', 'Taraftar', 'Antrenör'] },
          { id: 'sp1-q3', type: 'translate', prompt: '"Stadyum" kelimesini çevir', streetPrompt: 'Gde se igra fudbal?', answer: 'Stadion', hint: 'İngilizce ve Türkçeye çok benzer' },
          { id: 'sp1-q4', type: 'multiple-choice', prompt: 'Biri "Sudija!" diye bağırırsa, kime bağırıyordur?', streetPrompt: 'Brate, ko je kriv za sve?', answer: 'Hakem', options: ['Kaleciye', 'Antrenöre', 'Hakem', 'Santrafora'] },
        ],
      },
      {
        id: 'sport-2', title: 'Spor Yapmak', streetTitle: 'Idemo na basket', emoji: '🏀', xpReward: 35,
        questions: [
          { id: 'sp2-q1', type: 'translate', prompt: '"Basketbol" kelimesini çevir', streetPrompt: 'Jokićev sport!', answer: 'Košarka', hint: 'koš = pota/basket' },
          { id: 'sp2-q2', type: 'multiple-choice', prompt: '"Pobeda" ne anlama gelir?', streetPrompt: 'Šta želimo na kraju utakmice?', answer: 'Zafer / Galibiyet', options: ['Mağlubiyet', 'Beraberlik', 'Zafer / Galibiyet', 'Uzatma'] },
          { id: 'sp2-q3', type: 'translate', prompt: '"Top" kelimesini çevir', streetPrompt: 'Dodaj mi... šta?', answer: 'Lopta', hint: 'lop-ta' },
        ],
      },
    ]
  },

  // ─── ROMANCE (PRO) ───────────────────────────────────────────────────────
  {
    id: 'romance', title: 'Romantizm & Drama', streetTitle: 'Ljubav i Ljubomora',
    description: 'Tatlı sözler ve ilişki draması.',
    streetDescription: 'Od "ljubavi" do svađe. Balkan romansa.',
    emoji: '💘', color: '#c23616',
    isPro: true,
    lessons: [
      {
        id: 'rom-1', title: 'Tatlı İfadeler', streetTitle: 'Slatke Reči', emoji: '💋', xpReward: 40,
        questions: [
          { id: 'ro1-q1', type: 'multiple-choice', prompt: '"Dušo" ne anlama gelir?', streetPrompt: 'Kako zoveš devojku/momka?', answer: 'Canım / Ruhum', options: ['Arkadaşım', 'Canım / Ruhum', 'Patronum', 'Düşmanım'] },
          { id: 'ro1-q2', type: 'translate', prompt: '"Aşkım" kelimesini çevir', streetPrompt: 'Ljubav moja!', answer: 'Ljubavi', hint: 'ljubav kelimesinin seslenme hali' },
          { id: 'ro1-q3', type: 'multiple-choice', prompt: 'Birine "Zlato" diye seslenmek harfiyen ne anlama gelir?', streetPrompt: 'Malo zlato moje?', answer: 'Altın', options: ['Gümüş', 'Elmas', 'Altın', 'Para'] },
        ],
      },
      {
        id: 'rom-2', title: 'Balkan Draması', streetTitle: 'Gde si bio?!', emoji: '💔', xpReward: 45,
        questions: [
          { id: 'ro2-q1', type: 'multiple-choice', prompt: '"Neredeydin?" sorusu agresif bir şekilde nasıl sorulur?', streetPrompt: 'Problem in paradise! Ask where they were!', answer: 'Gde si bio?!', options: ['Šta radiš?!', 'Gde si bio?!', 'Ko si ti?!', 'Kada dolaziš?!'] },
          { id: 'ro2-q2', type: 'translate', prompt: '"Kıskancım" cümlesini çevir', streetPrompt: 'Zašto gledaš nju? Translate "jealous"!', answer: 'Ljubomoran sam', hint: 'ljubomoran = kıskanç (erkek)' },
          { id: 'ro2-q3', type: 'multiple-choice', prompt: '"Raskid" ne anlama gelir?', streetPrompt: 'Kraj priče brate. Šta je "Raskid"?', answer: 'Ayrılık', options: ['Düğün', 'Ayrılık', 'İlk buluşma', 'Kavga'] },
        ],
      },
    ],
  },
];

export const getAllLessons = () =>
  curriculum.flatMap((set) =>
    set.lessons.map((lesson) => ({
      ...lesson,
      setId: set.id,
      setTitle: set.title,
      setStreetTitle: set.streetTitle,
      color: set.color,
      isPro: set.isPro,
    }))
  );

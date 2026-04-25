import { LessonContent } from './contentTypes';

export const lessonContentF: Record<string, LessonContent> = {
  'hobbies-1': {
    scenario: "Hafta sonu planları yapıyorsun kanka. Kim ne sever, kim neyle uğraşır — bunları Sırpça konuşma vakti.",
    scenarioEn: "You're making weekend plans, mate. Time to talk about who likes what and who does what in Serbian.",
    streetScenario: "Vikend planı brate. Kim vopi seviyor, kim gitara çalıyor — dökülün bakalım.",
    vocabulary: [
      { word: 'Slobodno vreme', pronunciation: 'SLO-bod-no VRE-me', translation: 'Boş zaman', translationEn: 'Leisure time', streetTranslation: 'Keyif vakti' },
      { word: 'Muzika', pronunciation: 'MU-zi-ka', translation: 'Müzik', translationEn: 'Music' },
      { word: 'Knjiga', pronunciation: 'KNYİ-ga', translation: 'Kitap', translationEn: 'Book' },
      { word: 'Film', pronunciation: 'FİLM', translation: 'Film', translationEn: 'Movie' },
      { word: 'Slušati', pronunciation: 'SLU-şa-ti', translation: 'Dinlemek', translationEn: 'To listen' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Šta radiš u slobodno vreme?', translation: 'Boş zamanlarında ne yaparsın?', translationEn: 'What do you do in your free time?' },
      { speaker: 'B', serbian: 'Slušam muziku i čitam knjige.', translation: 'Müzik dinlerim ve kitap okurum.', translationEn: 'I listen to music and read books.' },
    ],
    culturalTip: "Sırbistan'da kahve içmek en büyük hobidir kanka. Saatlerce bir kafede oturup 'blejanje' (boş boş takılmak) yapmak milli spordur.",
    culturalTipEn: "Drinking coffee is the biggest hobby in Serbia. Sitting in a cafe for hours and doing 'blejanje' (hanging out) is a national sport.",
  },
  'hobbies-2': {
    scenario: "Sırp kankanla basket maçı ya da bilgisayar oyunu üzerine kapışıyorsunuz. Rekabet kızışıyor!",
    scenarioEn: "You're competing with your Serbian mate over a basketball game or a video game. The competition is heating up!",
    vocabulary: [
      { word: 'Igrati', pronunciation: 'İG-ra-ti', translation: 'Oynamak', translationEn: 'To play' },
      { word: 'Sport', pronunciation: 'SPORT', translation: 'Spor', translationEn: 'Sport' },
      { word: 'Igrice', pronunciation: 'İG-ri-tse', translation: 'Oyunlar', translationEn: 'Games' },
      { word: 'Pobeda', pronunciation: 'PO-be-da', translation: 'Zafer', translationEn: 'Victory' },
      { word: 'Teretana', pronunciation: 'TE-re-ta-na', translation: 'Spor salonu', translationEn: 'Gym' },
    ],
    grammarNote: {
      title: 'Igrati + ne?',
      body: '"Igrati" fiilinden sonra spor veya oyun ismi gelir: "Igram fudbal", "Igram igrice".',
      titleEn: 'Playing + what?',
      bodyEn: 'After "Igrati", you use the name of the sport or game: "Igram fudbal", "Igram igrice".'
    },
    culturalTip: "Sırplar tam bir 'sportska nacija' (spor milleti). Özellikle basketbolda dünyayı sallarlar. Bir Sırp'a Novak Đoković dersen akan sular durur.",
  },
  'tech-1': {
    scenario: "Telefonun şarjı bitti ya da mesaj bekliyorsun. Modern hayatın dertleri Sırpça da aynı kanka.",
    scenarioEn: "Your phone's dead or you're waiting for a message. Modern life's problems are the same in Serbian, mate.",
    vocabulary: [
      { word: 'Mobilni', pronunciation: 'MO-bil-ni', translation: 'Cep telefonu', translationEn: 'Mobile phone' },
      { word: 'Punjač', pronunciation: 'PU-nyatsh', translation: 'Şarj aleti', translationEn: 'Charger' },
      { word: 'Baterija', pronunciation: 'BA-te-ri-ya', translation: 'Batarya / Pil', translationEn: 'Battery' },
      { word: 'Poruka', pronunciation: 'PO-ru-ka', translation: 'Mesaj', translationEn: 'Message' },
      { word: 'Zvati', pronunciation: 'ZVA-ti', translation: 'Aramak', translationEn: 'To call' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Imaš li punjač? Prazna mi je baterija.', translation: 'Şarj aletin var mı? Bataryam boş.', translationEn: 'Do you have a charger? My battery is empty.' },
      { speaker: 'B', serbian: 'Imam, izvoli.', translation: 'Var, buyur.', translationEn: 'I have, here you go.' },
    ],
  },
  'tech-2': {
    scenario: "Kafeye oturdun, ilk iş Wi-Fi şifresini sorman lazım. Yoksa internet paketi can yakar.",
    scenarioEn: "You sat in a cafe, first thing you need to ask for the Wi-Fi password. Otherwise, the data plan will hurt.",
    vocabulary: [
      { word: 'Internet', pronunciation: 'İN-ter-net', translation: 'İnternet', translationEn: 'Internet' },
      { word: 'Šifra', pronunciation: 'ŞİF-ra', translation: 'Şifre', translationEn: 'Password' },
      { word: 'Kompjuter', pronunciation: 'KOM-pyu-ter', translation: 'Bilgisayar', translationEn: 'Computer' },
      { word: 'Mreža', pronunciation: 'MRE-ja', translation: 'Ağ / Şebeke', translationEn: 'Network' },
    ],
    culturalTip: "Sırbistan'da internet hızı fena değildir kanka ama bazı kafelerde 'şifre yok, birbirinizle konuşun' tabelası görürsen şaşırma.",
  },
  'work-1': {
    scenario: "Yeni tanıştığın birine ne iş yaptığını anlatıyorsun. Belki de bir iş bağlantısı kurarsın, kim bilir?",
    scenarioEn: "You're explaining what you do for work to someone you just met. Maybe you'll make a business connection, who knows?",
    vocabulary: [
      { word: 'Posao', pronunciation: 'PO-sa-o', translation: 'İş', translationEn: 'Work' },
      { word: 'Raditi', pronunciation: 'RA-di-ti', translation: 'Çalışmak', translationEn: 'To work' },
      { word: 'Šef', pronunciation: 'ŞEF', translation: 'Patron / Şef', translationEn: 'Boss / Chef' },
      { word: 'Plata', pronunciation: 'PLA-ta', translation: 'Maaş', translationEn: 'Salary' },
      { word: 'Kancelarija', pronunciation: 'KAN-tse-la-ri-ya', translation: 'Ofis', translationEn: 'Office' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Gde radiš?', translation: 'Nerede çalışıyorsun?', translationEn: 'Where do you work?' },
      { speaker: 'B', serbian: 'Radim u jednoj firmi u centru.', translation: 'Merkezde bir firmada çalışıyorum.', translationEn: 'I work at a firm in the center.' },
    ],
  },
  'work-2': {
    scenario: "Ofis hayatı Sırbistan'da da yoğun geçer. Toplantılar, molalar ve o bitmek bilmeyen 'sastanak'lar.",
    scenarioEn: "Office life is also busy in Serbia. Meetings, breaks, and those never-ending 'sastanak's.",
    vocabulary: [
      { word: 'Sastanak', pronunciation: 'SAS-ta-nak', translation: 'Toplantı', translationEn: 'Meeting' },
      { word: 'Pauza', pronunciation: 'PA-u-za', translation: 'Mola', translationEn: 'Break' },
      { word: 'Kolega', pronunciation: 'KO-le-ga', translation: 'Meslektaş', translationEn: 'Colleague' },
      { word: 'Zauzet', pronunciation: 'ZA-u-zet', translation: 'Meşgul', translationEn: 'Busy' },
    ],
    culturalTip: "Sırp ofislerinde 'pauza za kafu' (kahve molası) kutsaldır kanka. O mola sırasında iş konuşulmaz, sadece muhabbet edilir.",
  },
  'colors-1': {
    scenario: "Dünyayı renklendirme vakti. Kırmızı, siyah, beyaz — favori rengin hangisi?",
    scenarioEn: "Time to color the world. Red, black, white — which one is your favorite?",
    vocabulary: [
      { word: 'Boja', pronunciation: 'BO-ya', translation: 'Renk', translationEn: 'Color' },
      { word: 'Crvena', pronunciation: 'TSER-ve-na', translation: 'Kırmızı', translationEn: 'Red' },
      { word: 'Crna', pronunciation: 'TSER-na', translation: 'Siyah', translationEn: 'Black' },
      { word: 'Bela', pronunciation: 'BE-la', translation: 'Beyaz', translationEn: 'White' },
      { word: 'Plava', pronunciation: 'PLA-va', translation: 'Mavi', translationEn: 'Blue' },
    ],
    culturalTip: "Beograd kelimesi 'Beo' (Beyaz) ve 'Grad' (Şehir) kelimelerinden gelir. Yani Belgrad harfiyen 'Beyaz Şehir' demektir kanka.",
  },
  'surv-1': {
    scenario: "Sırp bürokrasisiyle tanışmaya hazır mısın? Efsanevi FT1P (Fali Ti Jedan Papir) kuralına yakalanmadan işini halletmelisin.",
    scenarioEn: "Ready to meet Serbian bureaucracy? You must handle your business without getting caught by the legendary FT1P (Fali Ti Jedan Papir) rule.",
    vocabulary: [
      { word: 'Šalter', pronunciation: 'ŞAL-ter', translation: 'Vezne / Gişe', translationEn: 'Counter' },
      { word: 'Papir', pronunciation: 'PA-pir', translation: 'Kağıt / Evrak', translationEn: 'Paper / Document' },
      { word: 'Pečat', pronunciation: 'PE-tshat', translation: 'Mühür', translationEn: 'Stamp' },
      { word: 'Potpis', pronunciation: 'POT-pis', translation: 'İmza', translationEn: 'Signature' },
    ],
    culturalTip: "FT1P (Fali Ti Jedan Papir) bir Sırp atasözü gibidir kanka: 'Bir evrakın eksik'. Ne kadar hazırlıklı gidersen git, o eksik evrak mutlaka çıkar.",
  },
  'surv-2': {
    scenario: "Balkanların en büyük korkusuyla yüzleşme vakti: PROMAJA. Camları kapat kanka, yoksa halin harap.",
    scenarioEn: "Time to face the biggest fear of the Balkans: PROMAJA. Close the windows, mate, or you're in trouble.",
    vocabulary: [
      { word: 'Promaja', pronunciation: 'PRO-ma-ya', translation: 'Cereyan', translationEn: 'Draught' },
      { word: 'Bolestan', pronunciation: 'BO-les-tan', translation: 'Hasta', translationEn: 'Sick' },
      { word: 'Zdravlje', pronunciation: 'ZDRAV-lye', translation: 'Sağlık', translationEn: 'Health' },
      { word: 'Lekar', pronunciation: 'LE-kar', translation: 'Doktor', translationEn: 'Doctor' },
    ],
    culturalTip: "Sırbistan'da promaja (cereyan) öldürücü kabul edilir kanka. Karşılıklı iki cam açıksa bir Sırp asla o odada oturmaz. Hemen kapatır!",
  },
  'sport-1': {
    scenario: "Belgrad'da derbi günü! Kızılyıldız mı yoksa Partizan mı? Tarafını seç ama dikkatli ol, ortam gergin.",
    scenarioEn: "Derby day in Belgrade! Red Star or Partizan? Choose your side but be careful, the atmosphere is tense.",
    vocabulary: [
      { word: 'Derbi', pronunciation: 'DER-bi', translation: 'Derbi', translationEn: 'Derby' },
      { word: 'Navijač', pronunciation: 'NA-vi-yatsh', translation: 'Taraftar', translationEn: 'Fan' },
      { word: 'Utakmica', pronunciation: 'U-tak-mi-tsa', translation: 'Maç', translationEn: 'Match' },
      { word: 'Stadion', pronunciation: 'STA-di-on', translation: 'Stadyum', translationEn: 'Stadium' },
    ],
    culturalTip: "Večiti Derbi (Ebedi Derbi) dünyanın en ateşli derbilerinden biridir. Kızılyıldız (Crvena Zvezda) ve Partizan taraftarları arasındaki rekabet efsanedir.",
  },
  'sport-2': {
    scenario: "Mahalle sahasında basketbola çağrıldın. Sırp basketbol ekolüyle tanışma vakti, sakın potayı kırma kanka.",
    scenarioEn: "You got called for basketball at the neighborhood court. Time to meet the Serbian basketball school, don't break the rim, mate.",
    vocabulary: [
      { word: 'Košarka', pronunciation: 'KO-şar-ka', translation: 'Basketbol', translationEn: 'Basketball' },
      { word: 'Lopta', pronunciation: 'LOP-ta', translation: 'Top', translationEn: 'Ball' },
      { word: 'Koš', pronunciation: 'KOŞ', translation: 'Pota / Basket', translationEn: 'Hoop / Basket' },
      { word: 'Trčati', pronunciation: 'TER-tşa-ti', translation: 'Koşmak', translationEn: 'To run' },
    ],
    culturalTip: "Sırbistan'da basketbol bir dindir kanka. Her mahallede bir pota vardır ve herkes çok iyi oynar. Dikkat et, seni fena geçebilirler.",
  },
  'rom-1': {
    scenario: "Birine tatlı sözler söylemek istiyorsun. Sırpça romantizm biraz damardır kanka, hazır mısın?",
    scenarioEn: "You want to say sweet words to someone. Serbian romance is a bit deep, mate, are you ready?",
    vocabulary: [
      { word: 'Ljubav', pronunciation: 'LYU-bav', translation: 'Aşk', translationEn: 'Love' },
      { word: 'Sreća', pronunciation: 'SRE-tşa', translation: 'Mutluluk', translationEn: 'Happiness' },
      { word: 'Dušo', pronunciation: 'DU-şo', translation: 'Canım / Ruhum', translationEn: 'Sweetheart / My Soul' },
      { word: 'Srce', pronunciation: 'SER-tse', translation: 'Kalp', translationEn: 'Heart' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Volim te, ljubavi.', translation: 'Seni seviyorum aşkım.', translationEn: 'I love you, my love.' },
      { speaker: 'B', serbian: 'I ja tebe volim, dušo.', translation: 'Ben de seni seviyorum canım.', translationEn: 'I love you too, sweetheart.' },
    ],
  },
  'rom-2': {
    scenario: "İşler biraz karıştı kanka. Neredeydin, kiminleydin? Balkan dramasına hoş geldin.",
    scenarioEn: "Things got a bit messy, mate. Where were you, who were you with? Welcome to Balkan drama.",
    vocabulary: [
      { word: 'Gde si bio?', pronunciation: 'GDE Sİ Bİ-O', translation: 'Neredeydin?', translationEn: 'Where were you?' },
      { word: 'Ljubomora', pronunciation: 'LYU-bo-mo-ra', translation: 'Kıskançlık', translationEn: 'Jealousy' },
      { word: 'Svađa', pronunciation: 'SVA-dya', translation: 'Kavga / Tartışma', translationEn: 'Fight / Argument' },
      { word: 'Kraj', pronunciation: 'KRAY', translation: 'Son', translationEn: 'End' },
    ],
    culturalTip: "Sırp dramaları meşhurdur kanka. Özellikle 'inat' kelimesi bu tür durumlarda çok karşımıza çıkar. Bir şeye inat ettiler mi geri dönüşü zordur.",
  },
  'health-1': {
    scenario: "Başın ağrıyor ya da kendini kötü hissediyorsun. Sırpça derdini anlatman lazım kanka.",
    scenarioEn: "Your head hurts or you're feeling bad. You need to explain your problem in Serbian, mate.",
    vocabulary: [
      { word: 'Bol', pronunciation: 'BOL', translation: 'Ağrı', translationEn: 'Pain' },
      { word: 'Glava', pronunciation: 'GLA-va', translation: 'Baş / Kafa', translationEn: 'Head' },
      { word: 'Stomak', pronunciation: 'STO-mak', translation: 'Karın / Mide', translationEn: 'Stomach' },
      { word: 'Pomoć', pronunciation: 'PO-motsh', translation: 'Yardım', translationEn: 'Help' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Boli me glava.', translation: 'Başım ağrıyor.', translationEn: 'My head hurts.' },
      { speaker: 'B', serbian: 'Hoćeš li lek?', translation: 'İlaç ister misin?', translationEn: 'Do you want medicine?' },
    ],
  },
  'health-2': {
    scenario: "Eczaneye girdin, reçetesiz ilaç alabilir misin acaba? Sırp eczacılar çok bilgilidir, onlara sor.",
    scenarioEn: "You entered the pharmacy, can you get medicine without a prescription? Serbian pharmacists are very knowledgeable, ask them.",
    vocabulary: [
      { word: 'Apoteka', pronunciation: 'A-po-te-ka', translation: 'Eczane', translationEn: 'Pharmacy' },
      { word: 'Recept', pronunciation: 'RE-tsept', translation: 'Reçete', translationEn: 'Prescription' },
      { word: 'Lek', pronunciation: 'LEK', translation: 'İlaç', translationEn: 'Medicine' },
      { word: 'Alergija', pronunciation: 'A-ler-gi-ya', translation: 'Alerji', translationEn: 'Allergy' },
    ],
    culturalTip: "Sırbistan'da eczanelerin çoğu 24 saat açıktır kanka. Küçük bir sağlık sorunun varsa doktordan önce eczacıya danışmak normaldir.",
  },
};

import { LessonContent } from './contentTypes';

export const lessonContentE: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // HEALTH & EMERGENCIES
  // ═══════════════════════════════════════════════
  'health-1': {
    scenario: "Belgrad'da rakija maratonunun ardından sabah uyandın ve her yerin ağrıyor. Ya da gerçek bir acil var. Her iki durumda da Sırp doktoruna ne diyeceğini bilmen şart. Hayat kurtarır, kanka!",
    scenarioEn: "You woke up in Belgrade after a rakija marathon and everything hurts. Or there's a real emergency. In either case, you need to know what to say to a Serbian doctor. It's a lifesaver, mate!",
    vocabulary: [
      { word: 'Boli me glava', pronunciation: 'BO-li me GLA-va', translation: 'Başım ağrıyor', translationEn: 'I have a headache', example: 'Boli me glava od rakije.' },
      { word: 'Boli me stomak', pronunciation: 'BO-li me STO-mak', translation: 'Karnım ağrıyor', translationEn: 'I have a stomachache', example: 'Boli me stomak, ne mogu da jedem.' },
      { word: 'Pomozite!', pronunciation: 'po-MO-zi-te', translation: 'Yardım edin! (resmi çoğul)', translationEn: 'Help me! (formal/plural)', example: 'Pomozite! Pao je çovek!' },
      { word: 'Bolnica', pronunciation: 'BOL-ni-tsa', translation: 'Hastane', translationEn: 'Hospital', example: 'Gde je najbliža bolnica?' },
      { word: 'Imam temperaturu', pronunciation: 'İ-mam tem-pe-ra-TU-ru', translation: 'Ateşim var', translationEn: 'I have a fever', example: 'Imam temperaturu i kašalj.' },
      { word: 'Zovite hitnu pomoć!', pronunciation: 'ZO-vi-te HİT-nu PO-moç', translation: 'Ambulans çağırın!', translationEn: 'Call an ambulance!', example: 'Zovite hitnu pomoć, brzo!' },
      { word: 'Lek', pronunciation: 'lek', translation: 'İlaç', translationEn: 'Medicine', example: 'Ima li leka za bol?' },
    ],
    grammarNote: {
      title: '"Boli me" Yapısı — Sırpçanın En Pratik Kalıbı',
      titleEn: 'The "Boli me" Structure — Serbian\'s Most Practical Phrase',
      body: 'Türkçedeki "-im ağrıyor" ifadesini Sırpçada "Boli me + ağrıyan organ" ile yaparsın. "Boli me glava" = başım ağrıyor, "Boli me zub" = dişim ağrıyor. Hep aynı yapı, sadece organı değiştir, pratik değil mi kanka?',
      bodyEn: 'You express "my ... hurts" in Serbian using "Boli me + the hurting organ". "Boli me glava" = my head hurts, "Boli me zub" = my tooth hurts. It\'s the same structure every time; just change the organ. Practical, isn\'t it, mate?'
    },
    culturalTip: "Sırpistan'da 194 numarasını aradığında ambulans geliyor. Acil servis (Hitna pomoć) genellikle oldukça hızlı ve düzgündür. Ama sigortan yoksa cepten ödeme hazır ol. Promaja'dan (cereyan) önce sigortanı düşün!",
    culturalTipEn: "In Serbia, calling 194 will bring an ambulance. Emergency services (Hitna pomoć) are generally quite fast and efficient. But if you don't have insurance, be ready to pay out of pocket. Think about your insurance before worrying about 'Promaja' (the draft)!",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, boli me grlo i imam temperaturu.', translation: 'İyi günler doktor, boğazım ağrıyor ve ateşim var.', translationEn: 'Good day, doctor. My throat hurts and I have a fever.' },
      { speaker: 'B', serbian: 'Od kada? Koliku temperaturu imate?', translation: 'Ne zamandan beri? Ateşiniz kaç?', translationEn: 'Since when? What is your temperature?' },
      { speaker: 'A', serbian: 'Od jutros. Trideset osam i po.', translation: 'Bu sabahtan beri. Otuz sekiz buçuk.', translationEn: 'Since this morning. Thirty-eight and a half.' },
      { speaker: 'B', serbian: 'Razumem. Daću vam recept za antibiotik i lek za temperaturu.', translation: 'Anladım. Size antibiyotik ve ateş düşürücü için reçete yazacağım.', translationEn: 'I understand. I will write you a prescription for antibiotics and fever medicine.' },
    ],
  },

  'health-2': {
    scenario: "Başın bomba gibi çatlıyor ve en yakın eczaneye girdikten sonra ne diyeceğini bilmiyorsun. Sırp eczacılar çok yardımseverdir ama Sırpça konuşman büyük puan yazdırır!",
    scenarioEn: "Your head is splitting like a bomb, and you don't know what to say after entering the nearest pharmacy. Serbian pharmacists are very helpful, but speaking Serbian will score you big points!",
    vocabulary: [
      { word: 'Apoteka', pronunciation: 'a-PO-te-ka', translation: 'Eczane', translationEn: 'Pharmacy', example: 'Gde je najbliža apoteka?' },
      { word: 'Imate li analgetik?', pronunciation: 'İ-ma-te li a-nal-GE-tik', translation: 'Ağrı kesici var mı?', translationEn: 'Do you have painkillers?', example: 'Imate li analgetik za jaku glavobolju?' },
      { word: 'Alergija', pronunciation: 'a-ler-GI-ya', translation: 'Alerji', translationEn: 'Allergy', example: 'Imam alergiju na penicilin.' },
      { word: 'Kašalj', pronunciation: 'KA-şalj', translation: 'Öksürük', translationEn: 'Cough', example: 'Lek za kašalj, molim.' },
      { word: 'Recept', pronunciation: 'RE-tsept', translation: 'Reçete', translationEn: 'Prescription', example: 'Imam recept od doktora.' },
      { word: 'Aspirin', pronunciation: 'AS-pi-rin', translation: 'Aspirin', translationEn: 'Aspirin', example: 'Dajte mi aspirin, molim.' },
    ],
    grammarNote: {
      title: '"Imate li…?" — Kibar Soru Kalıbı',
      titleEn: '"Imate li...?" — The Polite Question Form',
      body: '"Imate li…?" yapısı ağırbaşlı ve kibarca "...var mı?" demektir. Eczane veya resmi yerlerde bunu kullanmak seni anında terbiyeli bir yabancı yapacak. Kankalar arasında ise kısaltarak sadece "Ima li…?" dersin.',
      bodyEn: 'The structure "Imate li...?" is a formal and polite way to ask "Do you have...?". Using this in pharmacies or official places will instantly make you a well-managed foreigner. Among friends, you can shorten it to just "Ima li...?".'
    },
    culturalTip: "Sırpistan'da pek çok ilaç Türkiye ya da Batı'ya kıyasla çok daha ucuzdur ve eczaneler genellikle saatlerce açık kalır. Küçük rahatsızlıklar için doktora gitmeden önce eczacıya sor — Sırp eczacılar çok bilgilidir!",
    culturalTipEn: "Many medicines in Serbia are much cheaper compared to Turkey or the West, and pharmacies often stay open for long hours. For minor ailments, ask the pharmacist before going to a doctor — Serbian pharmacists are very knowledgeable!",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan. Imate li nešto za jaku glavobolju?', translation: 'İyi günler. Şiddetli baş ağrısı için bir şeyiniz var mı?', translationEn: 'Good day. Do you have something for a severe headache?' },
      { speaker: 'B', serbian: 'Da, imam. Jeste li alergični na nešto?', translation: 'Evet var. Herhangi bir şeye alerjiniz var mı?', translationEn: 'Yes, I do. Are you allergic to anything?' },
      { speaker: 'A', serbian: 'Alergičan sam na penicilin.', translation: 'Penisilline alerjim var.', translationEn: 'I am allergic to penicillin.' },
      { speaker: 'B', serbian: 'Okej. Dat ću vam brufen. Bez recepta ide.', translation: 'Tamam. Size brufen vereyim. Reçetesiz gidiyor.', translationEn: "Okay. I'll give you brufen. It's available without a prescription." },
    ],
  },

  // ═══════════════════════════════════════════════
  // BELGRADE & CITY
  // ═══════════════════════════════════════════════
  'belgrade-1': {
    scenario: "Belgrad'a yeni geldin ve tarihi yarımadayı keşfetmek istiyorsun. Kalemegdan kalesi, Knez Mihailova caddesi, Trg Republike meydanı... Rehber kitap fırlatıyorsun, sadece yerel sormak yeterli!",
    scenarioEn: "You've just arrived in Belgrade and want to explore the historical peninsula. Kalemegdan fortress, Knez Mihailova street, Republic Square (Trg Republike)... Throw away the guidebook; just asking the locals is enough!",
    vocabulary: [
      { word: 'Centar', pronunciation: 'TSEN-tar', translation: 'Merkez, şehir merkezi', translationEn: 'Center / City center', example: 'Idemo u centar večeras.' },
      { word: 'Most', pronunciation: 'most', translation: 'Köprü', translationEn: 'Bridge', example: 'Brankov most je lep.' },
      { word: 'Kalemegdan', pronunciation: 'ka-le-MEG-dan', translation: 'Belgrad\'ın tarihi kalesi ve parkı', translationEn: 'Belgrade\'s historic fortress and park', example: 'Idemo na Kalemegdan!' },
      { word: 'Trg', pronunciation: 'trg', translation: 'Meydan', translationEn: 'Square', example: 'Trg Republike je u centru.' },
      { word: 'Ulica', pronunciation: 'U-li-tsa', translation: 'Cadde / Sokak', translationEn: 'Street', example: 'Knez Mihailova ulica je pešačka.' },
      { word: 'Kuda ideš?', pronunciation: 'KU-da İ-deş', translation: 'Nereye gidiyorsun?', translationEn: 'Where are you going?', example: 'Hej, kuda ideš ovako lepo obučen?' },
    ],
    grammarNote: {
      title: 'Yön ve Yer İsimleri',
      titleEn: 'Direction and Place Names',
      body: '"U" (içinde, içine) ve "na" (üzerinde, üzerine) Sırpçanın en kritik edatları. "Idem u kafanu" (kafanaya gidiyorum) ama "Idem na Kalemegdan" (Kalemegdan\'a gidiyorum). Türkçedeki -e/-a eki gibi ama ikiye ayrılıyor!',
      bodyEn: '"U" (in/into) and "na" (on/onto) are the most critical prepositions in Serbian. "Idem u kafanu" (I\'m going to the kafana) but "Idem na Kalemegdan" (I\'m going to Kalemegdan). It\'s like the -e/-a suffix in Turkish, but divided into two!'
    },
    culturalTip: "Belgrad'da 'Knez Mihailova' (Prens Mihail) caddesi tam anlamıyla şehrin nabzıdır. Yürüyüş caddesidir, alışveriş yaparsın, muhabbet edersin, buz dondurması yersin. Buraya gitmeden Belgrad gezdin sayılmazsın!",
    culturalTipEn: "In Belgrade, 'Knez Mihailova' (Prince Michael) street is literally the pulse of the city. It's a pedestrian street where you shop, chat, and eat ice cream. You haven't seen Belgrade until you've been here!",
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, kako da dođem do Kalemegdana?', translation: 'Affedersiniz, Kalemegdan\'a nasıl gidebilirim?', translationEn: 'Excuse me, how can I get to Kalemegdan?' },
      { speaker: 'B', serbian: 'Pravo ovom ulicom, pa levo. Pet minuta hoda.', translation: 'Bu caddeden düz git, sonra sola dön. Beş dakika yürüyüş.', translationEn: 'Straight down this street, then left. Five minutes walk.' },
      { speaker: 'A', serbian: 'Hvala lepo! A ima li dobar restoran blizu?', translation: 'Çok sağ ol! Yakında iyi bir restoran var mı?', translationEn: 'Thank you very much! Is there a good restaurant nearby?' },
      { speaker: 'B', serbian: 'Skadarlija je tu! Tamo ima svega.', translation: 'Skadarlija tam orada! Orda her şey var kanka.', translationEn: 'Skadarlija is right there! There\'s everything there, mate.' },
    ],
  },

  'belgrade-2': {
    scenario: "Sıcak yaz günü, nehir kenarında olmak istiyorsun. Tüm Belgratlılar Ada Ciganlija'da ya da splav'larda — bunların ne olduğunu bilmezsen o havada deliye dönersin!",
    scenarioEn: "A hot summer day, you want to be by the river. All Belgraders are at Ada Ciganlija or the 'splavs' — if you don't know what these are, you'll go crazy in that weather!",
    vocabulary: [
      { word: 'Reka', pronunciation: 'RE-ka', translation: 'Nehir', translationEn: 'River', example: 'Sava i Dunav su reke Beograda.' },
      { word: 'Sava / Dunav', pronunciation: 'SA-va / DU-nav', translation: 'Sava / Tuna nehirleri', translationEn: 'Sava / Danube rivers', example: 'Belgrad je na ušću Save i Dunava.' },
      { word: 'Splav', pronunciation: 'splav', translation: 'Nehir üstü yüzen mekan / bar', translationEn: 'Floating river club/bar', example: 'Idemo na splav noćas!' },
      { word: 'Ada', pronunciation: 'ADA', translation: 'Ada (Türkçeyle aynı!)', translationEn: 'Island (same as Turkish!)', example: 'Ada Ciganlija je plaža Beograda.' },
      { word: 'Plaža', pronunciation: 'PLA-ja', translation: 'Plaj, kumsal', translationEn: 'Beach', example: 'Idemo na plažu!' },
      { word: 'Kupanje', pronunciation: 'KU-pa-nye', translation: 'Yüzme / Banyo yapma', translationEn: 'Swimming / Bathing', example: 'Kupanje u Savi je zabranjeno!' },
    ],
    grammarNote: {
      title: 'Eğlenceli Gerçek: "Ada" Türkçeyle Birebir Aynı!',
      titleEn: 'Fun Fact: "Ada" is Exactly the Same as in Turkish!',
      body: 'Sırpça "Ada" kelimesi ada anlamına gelir — Türkçeyle birebir aynı! Bu iki dil arasında bunun gibi beklenmedik ortak kelimeler var: "kafa" (Sırpça = kafadar arası konuşma), "para" (her iki dilde de para), "budala" (her iki dilde de aptal). Balkan mirası kanka!',
      bodyEn: 'The Serbian word "Ada" means island — exactly the same as in Turkish! There are unexpected common words like this between the two languages: "kafa" (in Serbian, it can mean a casual chat), "para" (money in both), "budala" (fool in both). It\'s a Balkan legacy, mate!'
    },
    culturalTip: "Ada Ciganlija Belgrad'ın açık hava plajıdır — deniz olmasa da nehir kenarı plajı her yaz milyonlarca Belgratlı ile dolar. Splavlar ise nehir üzerinde demirlenmiş ahşap mekanlar. Gece kulübü, kafana, restoran hepsi su üzerinde!",
    culturalTipEn: "Ada Ciganlija is Belgrade's open-air beach — even though there's no sea, the river beach fills up with millions of Belgraders every summer. Splavs are wooden venues anchored on the river. Nightclubs, kafanas, restaurants — all on the water!",
    dialogue: [
      { speaker: 'A', serbian: 'Uf, vrućina! Idemo na Adu?', translation: 'Uf, ne sıcak! Ada\'ya gidelim mi?', translationEn: 'Ugh, the heat! Shall we go to Ada?' },
      { speaker: 'B', serbian: 'Jeste! Uzmi kupaći, idemo na plažu.', translation: 'Evet! Mayo al, plaja gidiyoruz.', translationEn: 'Yes! Grab your swimsuit, we\'re heading to the beach.' },
      { speaker: 'A', serbian: 'Možemo posle i na splav da sednemo.', translation: 'Sonra bir splay\'a da oturabiliriz.', translationEn: 'We can sit at a splav afterwards.' },
      { speaker: 'B', serbian: 'Savršen plan! Ajde, voz ide za pet minuta.', translation: 'Mükemmel plan! Hadi, tren beş dakikaya kalkıyor.', translationEn: 'Perfect plan! Come on, the train leaves in five minutes.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // SERBIAN NIGHTLIFE
  // ═══════════════════════════════════════════════
  'night-1': {
    scenario: "Cuma akşamı. Kankalar toplanıyor, plan yapılıyor. Belgrad'ın gece hayatı sadece efsane değil — gerçek. Ama önce hazırlık, buluşma noktası, kim taksi çağırıyor — bunları Sırpçada çözmen lazım!",
    scenarioEn: "Friday evening. Friends are gathering, plans are being made. Belgrade's nightlife isn't just legendary — it's real. But first, the preparation, the meeting point, who's calling a taxi — you need to sort these out in Serbian!",
    vocabulary: [
      { word: 'Idemo van?', pronunciation: 'İ-de-mo van', translation: 'Dışarı çıkıyoruz mu?', translationEn: 'Are we going out?', example: 'Idemo van večeras, ekipa?' },
      { word: 'Jesi li spreman/na?', pronunciation: 'YE-si li SPRE-man/na', translation: 'Hazır mısın? (erkek/kadın)', translationEn: 'Are you ready? (masc/fem)', example: 'Jesi li spreman? Čekamo te!' },
      { word: 'Kuda idemo?', pronunciation: 'KU-da İ-de-mo', translation: 'Nereye gidiyoruz?', translationEn: 'Where are we going?', example: 'Kuda idemo, kafana ili klub?' },
      { word: 'Zovem taksi', pronunciation: 'ZO-vem TAK-si', translation: 'Taksi çağırıyorum', translationEn: 'I\'m calling a taxi', example: 'Zovem taksi, dođite dole.' },
      { word: 'Rezervacija', pronunciation: 're-zer-VA-tsi-ya', translation: 'Rezervasyon', translationEn: 'Reservation', example: 'Da li ste rezervisali?', },
      { word: 'Kafana', pronunciation: 'KA-fa-na', translation: 'Geleneksel Sırp meyhanesi', translationEn: 'Traditional Serbian tavern', example: 'Idemo u kafanu, živa muzika je noćas!' },
    ],
    grammarNote: {
      title: '"Idemo" — Gidiyoruz Kalıbı',
      titleEn: '"Idemo" — The "Let\'s Go" Form',
      body: '"Idemo" tek başına "gidiyoruz" demek. Arkasına yer eklersin: "Idemo u kafanu" (kafanaya gidiyoruz), "Idemo na splav" (splay\'a gidiyoruz), "Idemo kući" (eve gidiyoruz). Basit ama çok işlevsel kanka!',
      bodyEn: '"Idemo" on its own means "we are going". You add a place after it: "Idemo u kafanu" (we are going to the kafana), "Idemo na splav" (we are going to the splav), "Idemo kući" (we are going home). Simple but very functional, mate!'
    },
    culturalTip: "Belgrad'ın gece hayatı saat 23:00'dan sonra başlar ve şafağa kadar sürer — hafta içi bile. 'Turbo folk' müziği kafanalarda çınlar, Sırp gençler sabaha geç kadar dans eder. Yorgun görünmek ayıptır — 'Ajde, još malo!' (Hadi biraz daha!)",
    culturalTipEn: "Belgrade's nightlife starts after 11:00 PM and lasts until dawn — even on weekdays. 'Turbo folk' music rings out in kafanas, and Serbian youth dance until late in the morning. Looking tired is a faux pas — 'Ajde, još malo!' (Come on, a little more!)",
    dialogue: [
      { speaker: 'A', serbian: 'Hej ekipa! Idemo večeras na splav?', translation: 'Hey kankalar! Bu gece splay\'a gidiyoruz mu?', translationEn: 'Hey crew! Are we going to a splav tonight?' },
      { speaker: 'B', serbian: 'Jeste, ali treba rezervacija. Da li si rezervisao?', translation: 'Evet ama rezervasyon lazım. Rezervasyon yaptın mı?', translationEn: 'Yes, but a reservation is needed. Did you reserve?' },
      { speaker: 'A', serbian: 'Jesam, za deset osoba u ponoć!', translation: 'Yaptım, gece yarısı için 10 kişilik!', translationEn: 'I did, for ten people at midnight!' },
      { speaker: 'B', serbian: 'Odlično! Zovem taksi za pola dvanaest.', translation: 'Süper! On bir buçuk için taksi çağırıyorum.', translationEn: 'Great! I\'m calling a taxi for half-past eleven.' },
    ],
  },

  'night-2': {
    scenario: "İçerdesin artık. Müzik ₓ ses +1000. Tıklım tıklım dolu splav. Garson geldi, bir tur daha lazım, masanı tutman gerekiyor — ve hepsi Sırpça!",
    scenarioEn: "You're inside now. Music volume +1000. A packed splav. The waiter arrives, another round is needed, you need to keep your table — and it's all in Serbian!",
    vocabulary: [
      { word: 'Previše je buka', pronunciation: 'PRE-vi-şe ye BU-ka', translation: 'Çok gürültülü', translationEn: 'It\'s too noisy', example: 'Previše je buka, ne çujem te!' },
      { word: 'Još jedna runda!', pronunciation: 'YOŞ YED-na RUN-da', translation: 'Bir tur daha!', translationEn: 'One more round!', example: 'Konobar! Još jedna runda!' },
      { word: 'Sto je rezervisan', pronunciation: 'sto ye re-zer-Vİ-san', translation: 'Masa ayrılmış', translationEn: 'The table is reserved', example: 'Žao mi je, sto je rezervisan.' },
      { word: 'Ajde na podijum!', pronunciation: 'AY-de na PO-di-yum', translation: 'Dans pistine gidelim!', translationEn: 'Let\'s go to the dance floor!', example: 'Ova pesma je luda, ajde na podijum!' },
      { word: 'Hoću kući', pronunciation: 'HO-çu KU-çi', translation: 'Eve gitmek istiyorum', translationEn: 'I want to go home', example: 'Umoran sam, hoću kući.' },
      { word: 'Bakšiš', pronunciation: 'bak-şiş', translation: 'Bahşiş', translationEn: 'Tip', example: 'Daj mu bakšiš, crno se mučio!' },
    ],
    grammarNote: {
      title: '"Još" Kelimesi — Her Yerde Karşına Çıkar',
      titleEn: 'The Word "Još" — It Appears Everywhere',
      body: '"Još" (yoş diye okunur) Sırpçanın en çok kullanılan kelimelerinden biridir. "Još jedna" = bir tane daha, "još malo" = biraz daha, "još uvek" = hâlâ. Kafanada garsonla konuşurken hayatını kurtarır!',
      bodyEn: '"Još" (pronounced yosh) is one of the most used words in Serbian. "Još jedna" = one more, "još malo" = a little more, "još uvek" = still. It\'ll save your life when talking to a waiter in a kafana!'
    },
    culturalTip: "Sırp kafana kültüründe müzisyenler masadan masaya gezerek çalar ve sen bir 'bakšiš' (bahşiş) verirsin. Komşu masa daha yüksek fırlatırsa, müzisyenler o masaya yönelir. Bir tür müzik açık artırması!",
    culturalTipEn: "In Serbian kafana culture, musicians wander from table to table playing, and you give a 'bakšiš' (tip). If the neighboring table throws a higher tip, the musicians will head to that table. It's a kind of music auction!",
    dialogue: [
      { speaker: 'A', serbian: 'Konobar! Možemo još jednu rundu?', translation: 'Garson! Bir tur daha alabilir miyiz?', translationEn: 'Waiter! Can we have another round?' },
      { speaker: 'B', serbian: 'Naravno! Isti kao pre?', translation: 'Tabii ki! Aynısından mı?', translationEn: 'Of course! Same as before?' },
      { speaker: 'A', serbian: 'Da, i još jednu vodu, molim.', translation: 'Evet, bir de su lütfen.', translationEn: 'Yes, and one water, please.' },
      { speaker: 'B', serbian: 'Ova pesma je mrak! Ajde na podijum!', translation: 'Bu şarkı efsane kanka! Dans pistine!', translationEn: 'This song is awesome, mate! To the dance floor!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // ADVANCED GRAMMAR
  // ═══════════════════════════════════════════════
  'grammar-1': {
    scenario: "Kankan sana dün ne yaptığını soruyor ama sen sadece şimdiki zaman konuşabiliyorsun. Geçmiş zamansız konuşmak yarım kalmış bir hikaye gibidir — bunu düzeltelim!",
    scenarioEn: "Your friend is asking what you did yesterday, but you can only speak in the present tense. Speaking without the past tense is like a half-finished story — let's fix that!",
    vocabulary: [
      { word: 'Išao/Išla sam', pronunciation: 'İ-şao / İ-şla sam', translation: 'Gittim (erkek/kadın)', translationEn: 'I went (masc/fem)', example: 'Išao sam u kafanu juče.' },
      { word: 'Radio/Radila sam', pronunciation: 'RA-di-o / RA-di-la sam', translation: 'Yaptım / Çalıştım (erkek/kadın)', translationEn: 'I did / I worked (masc/fem)', example: 'Radila sam ceo dan.' },
      { word: 'Spavao/Spavala sam', pronunciation: 'spa-VA-o / spa-VA-la sam', translation: 'Uyudum (erkek/kadın)', translationEn: 'I slept (masc/fem)', example: 'Spavao sam do podneva.' },
      { word: 'Juče', pronunciation: 'YU-çe', translation: 'Dün', translationEn: 'Yesterday', example: 'Šta si radio juče?' },
      { word: 'Išli smo', pronunciation: 'İ-şli smo', translation: 'Gittik (çoğul)', translationEn: 'We went (plural)', example: 'Išli smo zajedno na splav.' },
      { word: 'Jesam li…?', pronunciation: 'YE-sam li', translation: 'Ben mi…? (soru eki)', translationEn: 'Am I...? (question form)', example: 'Jesam li dobro uradio?' },
    ],
    grammarNote: {
      title: 'Sırpçada Geçmiş Zaman — Cinsiyet Önemli!',
      titleEn: 'Past Tense in Serbian — Gender Matters!',
      body: 'Sırpçada geçmiş zaman fiilleri konuşmacının cinsiyetine göre değişir! Erkek: "išao sam", Kadın: "išla sam". Fiil sonu "-o" erkek, "-la" kadın için. "Sam" = "have" gibi yardımcı fiil. Yani Sırpça geçmiş zamanda kimin konuştuğu belli oluyor!',
      bodyEn: 'In Serbian, past tense verbs change according to the gender of the speaker! Male: "išao sam", Female: "išla sam". The verb ending "-o" is for males, "-la" for females. "Sam" is an auxiliary verb like "have". So, in Serbian past tense, it\'s clear who is speaking!'
    },
    culturalTip: "Sırplar hikaye anlatmayı sever. Bir kafanada oturduğunda, geçmiş zaman kullanarak anılarını paylaşmak seni 'pravi lik' (gerçek biri) yapacak. 'Jednom sam bio u Istanbulu...' (Bir keresinde İstanbul'daydım...) cümlesiyle başla ve izle!",
    culturalTipEn: "Serbians love storytelling. When you sit in a kafana, sharing your memories using the past tense will make you a 'pravi lik' (a real character/one of them). Start with 'Jednom sam bio u Istanbulu...' (Once I was in Istanbul...) and watch what happens!",
    dialogue: [
      { speaker: 'A', serbian: 'Šta si radio juče uveče?', translation: 'Dün akşam ne yaptın?', translationEn: 'What did you do yesterday evening?' },
      { speaker: 'B', serbian: 'Išao sam na splav sa ekipom. Bilo je ludo!', translation: 'Ekiple splay\'a gittim. Çılgın bir geceydi!', translationEn: 'I went to a splav with the crew. It was crazy!' },
      { speaker: 'A', serbian: 'Ozbiljno? Koliko ste ostali?', translation: 'Gerçekten mi? Ne kadar kaldınız?', translationEn: 'Seriously? How long did you stay?' },
      { speaker: 'B', serbian: 'Išli smo kući u šest ujutru. Spavao sam do podne.', translation: 'Sabah altıda eve gittik. Öğleye kadar uyudum.', translationEn: 'We went home at six in the morning. I slept until noon.' },
    ],
  },

  'grammar-2': {
    scenario: "Yarın bir planın var ve bunu Sırpça anlatmak istiyorsun. Gelecek zaman biraz farklı çalışıyor. Ama merak etme — birkaç kuralla her şey yerine oturuyor!",
    scenarioEn: "You have a plan for tomorrow and want to explain it in Serbian. The future tense works a bit differently. But don't worry — with a few rules, everything falls into place!",
    vocabulary: [
      { word: 'Doći ću', pronunciation: 'DO-çi çu', translation: 'Gelirim / Geleceğim', translationEn: 'I will come', example: 'Doći ću sutra u deset.' },
      { word: 'Ću / ćeš / će', pronunciation: 'çu / çeş / çe', translation: 'Gelecek zaman eki (ben/sen/o)', translationEn: 'Future tense markers (I/you/he-she)', example: 'Ću, ćeš, će, ćemo, ćete, će.' },
      { word: 'Sutra', pronunciation: 'SU-tra', translation: 'Yarın', translationEn: 'Tomorrow', example: 'Sutra idemo na izlet.' },
      { word: 'Mogu da', pronunciation: 'MO-gu da', translation: 'Yapabilirim', translationEn: 'I can', example: 'Mogu da dođem u pet.' },
      { word: 'Ne bih hteo/htela', pronunciation: 'ne bih HTE-o/HTE-la', translation: 'İstemezdim (erkek/kadın)', translationEn: 'I wouldn\'t want (masc/fem)', example: 'Ne bih hteo da kasnim.' },
      { word: 'Šta misliš?', pronunciation: 'şta MİS-liş', translation: 'Ne düşünüyorsun?', translationEn: 'What do you think?', example: 'Šta misliš, idemo li?' },
    ],
    grammarNote: {
      title: 'Gelecek Zaman: Fiil + "ću" Yardımcı Fiili',
      titleEn: 'Future Tense: Verb + "ću" Auxiliary',
      body: 'Sırpça gelecek zamanı "ću" (çu) ile yapılır: "Doći ću" = Geleceğim, "Ići ću" = Gideceğim. Ya da "Ću/ćeš/će" + mastar: "Ću da idem" = Gideceğim. Türkçedeki "-acağım" gibi basit! Sadece "ću" yi ezberle.',
      bodyEn: 'Serbian future tense is made with "ću" (choo): "Doći ću" = I will come, "Ići ću" = I will go. Or "Ću/ćeš/će" + "da" + present: "Ću da idem" = I will go. It\'s simple like "-acağım" in Turkish! Just memorize "ću".'
    },
    culturalTip: "Sırplarda zaman kavramı Türklerden pek farklı değil kanka — 'sutra' (yarın) çoğunlukla 'yakında' anlamına gelir. 'Doći ću sutra' dediyse belki üç gün sonra da gelebilir. Balkan zamanında rahat ol!",
    culturalTipEn: "The concept of time for Serbians isn't much different from Turks, mate — 'sutra' (tomorrow) mostly means 'soon'. If they said 'Doći ću sutra', they might come three days later. Be relaxed in Balkan time!",
    dialogue: [
      { speaker: 'A', serbian: 'Šta ćeš raditi sutra?', translation: 'Yarın ne yapacaksın?', translationEn: 'What will you do tomorrow?' },
      { speaker: 'B', serbian: 'Ići ću na pijacu ujutru, pa ću kuvati ručak.', translation: 'Sabah pazara gideceğim, sonra öğle yemeği pişireceğim.', translationEn: 'I\'ll go to the market in the morning, then I\'ll cook lunch.' },
      { speaker: 'A', serbian: 'Mogu li da dođem? Mogu da donesem vino.', translation: 'Gelebilir miyim? Şarap getireyim.', translationEn: 'Can I come? I can bring wine.' },
      { speaker: 'B', serbian: 'Naravno! Dođi u dvanaest. Şta misliš?', translation: 'Tabii! Saat on ikide gel. Ne dersin?', translationEn: 'Of course! Come at twelve. What do you think?' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PHONE & COMMUNICATION
  // ═══════════════════════════════════════════════
  'comm-1': {
    scenario: "Sırp kankan seni arıyor ama metrodesin, sinyal kötü. Ya da randevuya geç kalacaksın ve haber vermen lazım. Telefon Sırpçası, yüz yüze konuşmadan farklıdır — öğren!",
    scenarioEn: "Your Serbian friend is calling you, but you're in the metro and the signal is bad. Or you're going to be late for an appointment and need to let them know. Phone Serbian is different from face-to-face talk — learn it!",
    vocabulary: [
      { word: 'Alo!', pronunciation: 'a-LO', translation: 'Alo! (telefona çıkışta)', translationEn: 'Hello! (answering the phone)', example: 'Alo, ko je?' },
      { word: 'Ne mogu sada da pričam', pronunciation: 'ne MO-gu SA-da da PRİ-çam', translation: 'Şu an konuşamam', translationEn: 'I can\'t talk right now', example: 'Hej, ne mogu sada da pričam, zovi me za sat.' },
      { word: 'Ne çujem te', pronunciation: 'ne ÇU-yem te', translation: 'Seni duyamıyorum', translationEn: 'I can\'t hear you', example: 'Možeš li glasnije? Ne çujem te.' },
      { word: 'Pisaću ti poruku', pronunciation: 'PİS-a-çu ti PO-ru-ku', translation: 'Mesaj atacağım', translationEn: 'I will text you', example: 'Kasniću, pisaću ti poruku.' },
      { word: 'Možeš li da me pozivaš?', pronunciation: 'MO-jeş li da me po-ZİV-aş', translation: 'Geri arar mısın?', translationEn: 'Can you call me back?', example: 'Trenutno sam na sastanku, možeş li da me pozivaş?' },
      { word: 'Signal je loş', pronunciation: 'SİG-nal ye loş', translation: 'Sinyal kötü', translationEn: 'The signal is bad', example: 'Signal je loş, ne çujem ništa!' },
    ],
    grammarNote: {
      title: '"Ne mogu da" — Yapamamak',
      titleEn: '"Ne mogu da" — Being Unable to Do',
      body: '"Mogu da" (yapabilirim) + fiil mastarı. Olumsuzunda başına "ne" ekle: "Ne mogu da pričam" (konuşamam), "Ne mogu da dođem" (gelemiyorum). Türkçedeki "-amıyorum" gibi. Bunu öğrenince özür üretmek çok kolaylaşıyor!',
      bodyEn: '"Mogu da" (I can) + verb. For the negative, add "ne" at the beginning: "Ne mogu da pričam" (I can\'t talk), "Ne mogu da dođem" (I can\'t come). Like "-amıyorum" in Turkish. Once you learn this, making excuses becomes very easy!'
    },
    culturalTip: "Sırpların telefon adabı: Konuşma bitmeden önce genellikle 'Ćao, ćao, ćao!' diye birkaç kez 'ćao' söylerler — tek değil. Bu garip değil, sadece samimi bir ayrılış ritüeli!",
    culturalTipEn: "Serbian phone etiquette: Before a call ends, they usually say 'Ćao, ćao, ćao!' several times — not just once. It's not weird; it's just a friendly parting ritual!",
    dialogue: [
      { speaker: 'A', serbian: 'Alo?', translation: 'Alo?', translationEn: 'Hello?' },
      { speaker: 'B', serbian: 'Hej! Gde si, çekamo te!', translation: 'Hey! Neredesin, seni bekliyoruz!', translationEn: 'Hey! Where are you? We\'re waiting for you!' },
      { speaker: 'A', serbian: 'U metrou sam, signal je loš. Ne čujem te dobro.', translation: 'Metrodayım, sinyal kötü. Seni iyi duyamıyorum.', translationEn: 'I\'m in the metro, the signal is bad. I can\'t hear you well.' },
      { speaker: 'B', serbian: 'Okej, pisaću ti poruku. Ćao ćao!', translation: 'Tamam, sana mesaj atayım. Görüşürüz!', translationEn: 'Okay, I\'ll text you. Bye-bye!' },
    ],
  },

  'comm-2': {
    scenario: "Belgrad'dayken yeni tanıştığın biriyle Instagram'dan takipleşiyorsunuz. Sırpça DM atmak, konum paylaşmak, gruba eklemek — sosyal medya Sırpçası da artık şart!",
    scenarioEn: "While in Belgrade, you're following someone you've just met on Instagram. Sending DMs in Serbian, sharing locations, adding to groups — social media Serbian is now a must!",
    vocabulary: [
      { word: 'Poslao/Poslala sam poruku', pronunciation: 'POS-lao/POS-la-la sam PO-ru-ku', translation: 'Mesaj attım (erkek/kadın)', translationEn: 'I sent a message (masc/fem)', example: 'Poslao sam ti poruku na Instagram.' },
      { word: 'Pošalji mi lokaciju', pronunciation: 'PO-şal-yi mi lo-KA-tsi-yu', translation: 'Konumunu gönder', translationEn: 'Send me your location', example: 'Gde si? Poşalji mi lokaciju.' },
      { word: 'Pišem u grupi', pronunciation: 'PİŞ-em u GRU-pi', translation: 'Grupta yazıyorum', translationEn: 'I\'m writing in the group', example: 'Čekaj, pišem u grupi sad.' },
      { word: 'Pošalji mi sliku', pronunciation: 'PO-şal-yi mi SLİ-ku', translation: 'Fotoğraf gönder', translationEn: 'Send me a picture', example: 'Lepo izgleda! Pošalji mi sliku.' },
      { word: 'Isključio/la sam obaveštenja', pronunciation: 'is-KLU-çi-o/la sam o-ba-veş-TE-nya', translation: 'Sessize aldım (erkek/kadın)', translationEn: 'I turned off notifications (masc/fem)', example: 'Isključio sam obaveštenja grupe, previše poruka!' },
      { word: 'Dodao/la sam te', pronunciation: 'DO-dao/la sam te', translation: 'Seni ekledim (erkek/kadın)', translationEn: 'I added you (masc/fem)', example: 'Dodao sam te u grupu.' },
    ],
    grammarNote: {
      title: 'Sırpçada "Gönder" = "Pošalji"',
      titleEn: 'In Serbian, "Send" = "Pošalji"',
      body: '"Pošalji" (gönder) fiili günlük hayatta çok kullanılır. "Poşalji mi sliku" (fotoğraf gönder), "Poşalji mi link" (link gönder), "Poşalji mi lokaciju" (konum at). Başına "mi" (bana) ekleyince "bana gönder" olur. Bu kalıbı ezberle!',
      bodyEn: 'The verb "Pošalji" (send) is used very often in daily life. "Pošalji mi sliku" (send me a picture), "Pošalji mi link" (send me a link), "Pošalji mi lokaciju" (send me the location). Adding "mi" (to me) makes it "send to me". Memorize this pattern!'
    },
    culturalTip: "Sırp gençler sosyal medya aktif olduğu kadar, yüz yüze muhabbeti de sever. Mesaj atmak yerine 'Dođi na kafu!' (Kahveye gel!) demek Sırp kültüründe daha kıymetlidir. Dijital değil, gerçek buluşma sanatı!",
    culturalTipEn: "Serbian youth are active on social media, but they also love face-to-face conversation. Saying 'Dođi na kafu!' (Come for coffee!) is more valued in Serbian culture than just texting. It's the art of real meeting, not just digital!",
    dialogue: [
      { speaker: 'A', serbian: 'Hej, gde ste vi? Čekamo vas na trgu!', translation: 'Heeey, neredesiniz? Meydanda bekliyoruz!', translationEn: 'Hey, where are you guys? We\'re waiting for you at the square!' },
      { speaker: 'B', serbian: 'Kasnimu malo. Pošalji mi lokaciju, ne znam gde tačno.', translation: 'Biraz geç kalacağım. Konumunu at, tam olarak neresi bilmiyorum.', translationEn: 'I\'ll be a little late. Send me your location; I don\'t know exactly where.' },
      { speaker: 'A', serbian: 'Poslala sam ti u DM. Vidiš li?', translation: 'DM\'den attım sana. Gördün mü?', translationEn: 'I sent it to you in DM. Do you see it?' },
      { speaker: 'B', serbian: 'Da, vidim! Doći ću za deset minuta. Sačekajte!', translation: 'Evet, gördüm! On dakikaya gelirim. Bekleyin!', translationEn: 'Yes, I see it! I\'ll be there in ten minutes. Wait for me!' },
    ],
  },

};

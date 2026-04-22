import { LessonContent } from './contentTypes';

export const lessonContentB: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // DIRECTIONS
  // ═══════════════════════════════════════════════
  'directions-1': {
    scenario: "Republika Meydanı yakınında tamamen kayboldun kanka. Sıcakkanlı bir yerli sana yardım lazımmı diye sordu — ama sadece Sırpça biliyor. Yönler senin can simidin!",
    scenarioEn: "You are completely lost near Republic Square, mate. A friendly local asks if you need help — but they only speak Serbian. Directions are your lifesaver!",
    vocabulary: [
      { word: 'Levo', pronunciation: 'LE-vo', translation: 'Sol', translationEn: 'Left', example: 'Skrenite levo kod semafora.' },
      { word: 'Desno', pronunciation: 'DES-no', translation: 'Sağ', translationEn: 'Right', example: 'Restoran je desno.' },
      { word: 'Pravo', pronunciation: 'PRA-vo', translation: 'Dümdüz ileri', translationEn: 'Straight ahead', example: 'Idite pravo sto metara.' },
      { word: 'Gde je…?', pronunciation: 'gde ye', translation: '... nerede?', translationEn: 'Where is...?', example: 'Gde je autobuska stanica?' },
      { word: 'Daleko', pronunciation: 'DA-le-ko', translation: 'Uzak', translationEn: 'Far', example: 'Daleko je — uzmite taksi.' },
      { word: 'Blizu', pronunciation: 'BLİ-zu', translation: 'Yakın', translationEn: 'Near / Close', example: 'Blizu je, pet minuta peške.' },
    ],
    grammarNote: {
      title: 'Yol Sormak',
      titleEn: 'Asking for Directions',
      body: '"Izvinite, gde je…?" (Affedersiniz, ... nerede?) buradaki sihirli cümledir kanka. Ekstra kibar olmak istersen sonuna "molim vas" (lütfen) ekle. Yerliler genelde mesafeyi metreyle değil yürüme dakikasıyla ("pet minuta peške") anlatır.',
      bodyEn: '"Izvinite, gde je…?" (Excuse me, where is...?) is the magic phrase here. For extra politeness, add "molim vas" (please) at the end. Locals usually describe distance in walking minutes ("pet minuta peške") rather than meters.',
    },
    culturalTip: "Belgrad'da birine yol sormaktan çekinme kanka, Sırplar yabancılara yardım etmeyi çok sever. Eğer tarif ederken 'tamo' (şurada) deyip uzağı gösteriyorsa, muhtemelen sandığından daha uzağa yürüyeceksin demektir!",
    culturalTipEn: "Don't hesitate to ask for directions in Belgrade; Serbians love helping foreigners. If they say 'tamo' (over there) and point far away, you're likely going to walk much further than you think!",
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, gde je Kalemegdan?', translation: 'Affedersiniz, Kalemegdan ne tarafta?', translationEn: 'Excuse me, which way is Kalemegdan?' },
      { speaker: 'B', serbian: 'Idite pravo, pa skrenite levo.', translation: 'Dümdüz git, sonra sola dön.', translationEn: 'Go straight, then turn left.' },
      { speaker: 'A', serbian: 'Daleko je?', translation: 'Uzak mı peki?', translationEn: 'Is it far?' },
      { speaker: 'B', serbian: 'Ne, blizu je. Deset minuta peške.', translation: 'Yok be, çok yakın. Yürüyerek on dakika.', translationEn: 'No, it\'s close. Ten minutes on foot.' },
    ],
  },

  'directions-2': {
    scenario: "Hostelinden tren istasyonuna gitmen lazım kanka. Taksiler, otobüsler, tramvaylar... Tüm anonslar Sırpça okunduğu için bir an önce öğrenmelisin!",
    scenarioEn: "You need to get from your hostel to the train station. Taxis, buses, trams... All announcements are in Serbian, so you better learn them quickly!",
    vocabulary: [
      { word: 'Taksi', pronunciation: 'TAK-si', translation: 'Taksi', translationEn: 'Taxi', example: 'Zovite mi taksi, molim.' },
      { word: 'Autobus', pronunciation: 'OW-to-bus', translation: 'Otobüs', translationEn: 'Bus', example: 'Koji autobus ide do centra?' },
      { word: 'Stanica', pronunciation: 'STA-ni-tsa', translation: 'Durak / İstasyon', translationEn: 'Stop / Station', example: 'Gde je autobuska stanica?' },
      { word: 'Aerodrom', pronunciation: 'a-E-ro-drom', translation: 'Havalimanı', translationEn: 'Airport', example: 'Taksi do aerodroma, molim.' },
      { word: 'Karta', pronunciation: 'KAR-ta', translation: 'Bilet', translationEn: 'Ticket', example: 'Jednu kartu, molim.' },
      { word: 'Centar', pronunciation: 'TSEN-tar', translation: 'Şehir merkezi', translationEn: 'City center', example: 'Idemo u centar?' },
    ],
    culturalTip: "Belgrad taksileri tehlikelidir, kazıklanmamak için hep Pink Taxi veya Car:Go uygulaması kullan. Eğer sokaktan bir taksi çevirirsen, önce fiyatı konuş ya da kesinlikle taksimetreyi açtır ('na taksimetar, molim').",
    culturalTipEn: "Belgrade taxis can be tricky; always use Pink Taxi or the Car:Go app to avoid being overcharged. If you hail a taxi on the street, negotiate the price beforehand or insist on using the meter ('na taksimetar, molim').",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan! Do aerodroma, molim.', translation: 'İyi günler abi! Havalimanına lütfen.', translationEn: 'Good day! To the airport, please.' },
      { speaker: 'B', serbian: 'Izvolite. Na taksimetar?', translation: 'Tabii. Taksimetreyle mi gidelim?', translationEn: 'Certainly. On the meter?' },
      { speaker: 'A', serbian: 'Da, naravno. Koliko dugo traje?', translation: 'Evet, aynen. Ortalama ne kadar sürer yol?', translationEn: 'Yes, of course. How long will it take?' },
      { speaker: 'B', serbian: 'Oko trideset minuta, zavisno od gužve.', translation: 'Trafiğe göre aşağı yukarı 30 dakika aga.', translationEn: 'About thirty minutes, depending on traffic, mate.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // STREET SLANG
  // ═══════════════════════════════════════════════
  'slang-1': {
    scenario: "Belgrad'ın en havalı mahallesi Savamala'da terastaki bir bardasın kanka. Yerli kankaların yanındasın. Turist gibi durmamak için elzem argo kelimeleri çat çat kullanman lazım.",
    scenarioEn: "You are at a rooftop bar in Savamala, Belgrade's coolest neighborhood. You're with local friends. To avoid looking like a tourist, you need to drop these essential slang words!",
    vocabulary: [
      { word: 'Jebiga', pronunciation: 'YE-bi-ga', translation: 'Yapacak bir şey yok / Sallama gitsin', translationEn: 'It is what it is / Forget it', example: 'Kasni voz? Jebiga.' },
      { word: 'Brate', pronunciation: 'BRA-te', translation: 'Kanka / Birader / Kardeşim', translationEn: 'Mate / Brother / Bro', example: 'Stani, brate, to nije fer.' },
      { word: 'Kapiram', pronunciation: 'KA-pi-ram', translation: 'Anlıyorum / Çaktım', translationEn: 'I get it / I understand', example: 'Kapiram, nema problema.' },
      { word: 'Ajde', pronunciation: 'AY-de', translation: 'Haydi / Tamam / Devam', translationEn: 'Come on / Let\'s go / Okay', example: 'Ajde, idemo!' },
      { word: 'Vopi', pronunciation: 'VO-pi', translation: 'Hop / Hey', translationEn: 'Hey / Listen', example: 'Vopi, čekaj me malo!' },
    ],
    culturalTip: '"Jebiga" Sırbistan milli felsefesidir aga. Hayatın saçmalığına karşı ufak bir küfürlü isyan. Günlük hayatta ayıp falan karşılanmaz; işler ters gittiğinde söyle ki yerlilerle anında kanka ol!',
    culturalTipEn: '"Jebiga" is the Serbian national philosophy. A small, slightly profane rebellion against the absurdities of life. It’s not considered rude in daily life; say it when things go wrong to instantly bond with locals!',
    dialogue: [
      { speaker: 'A', serbian: 'Vopi, brate, šta ima?', translation: 'Hey, naber birader?', translationEn: 'Hey bro, what\'s up?' },
      { speaker: 'B', serbian: 'Ma ništa, kapiram ti ja. Dosadno je.', translation: 'Hep aynı valla, biliyorsun işte. Çok sıkıcı.', translationEn: 'Nothing much, I get you. It\'s boring.' },
      { speaker: 'A', serbian: 'Ajde da idemo negde!', translation: 'Hadi kalk gidelim bi yerlere!', translationEn: 'Come on, let\'s go somewhere!' },
      { speaker: 'B', serbian: 'Nemam para. Jebiga.', translation: 'Beş kuruş param yok kanka. Yapacak bir şey yok.', translationEn: 'I have no money. It is what it is.' },
    ],
  },

  'slang-2': {
    scenario: "Kankanın evinde maç izliyorsunuz. Sırpça golü atıyor. Herkes patlıyor. Havada uçuşan Balkan argolarını hemen anlaman ve coşkuya katılman şart!",
    scenarioEn: "You're watching a match at a friend's house. Serbia scores! Everyone explodes. You need to understand the Balkan slang flying around and join the excitement!",
    vocabulary: [
      { word: 'Šta ima?', pronunciation: 'ş-ta İ-ma', translation: 'Naber? / Neler var neler yok?', translationEn: 'What\'s up? / What\'s going on?', example: 'Ej, šta ima, stari?' },
      { word: 'Bre', pronunciation: 'bre', translation: 'Be / Lan (cümlenin sonunda vurucu olarak kullanılır)', translationEn: 'A filler word (used for emphasis, like "man" or "yo")', example: 'Ne mogu, bre!' },
      { word: 'Mrak', pronunciation: 'mrak', translation: 'Gerçek anlamı karanlık → Argo anlamı: Efsane!', translationEn: 'Literal: Dark → Slang: Legendary / Awesome!', example: 'Taj gol je bio mrak!' },
      { word: 'Sve pet', pronunciation: 'sve pet', translation: 'Beş üstünden Beş → Her şey on numara!', translationEn: 'Five out of five → Everything is perfect!', example: 'Kako si? — Sve pet!' },
      { word: 'Smiri se', pronunciation: 'SMİ-ri se', translation: 'Sakin ol / Relaks', translationEn: 'Calm down / Relax', example: 'Smiri se, nije kraj sveta.' },
      { word: 'Boli me uvo', pronunciation: 'BO-li me U-vo', translation: 'Gerçek anlamı kulağım ağrıyor → Umurumda değil, çok da tın', translationEn: 'Literal: My ear hurts → Slang: I don\'t care / I couldn\'t care less', example: 'Šta on misli? — Boli me uvo.' },
    ],
    grammarNote: {
      title: '"Bre" — Sırpça Sözlü Tik',
      titleEn: '"Bre" — The Serbian Verbal Tic',
      body: '"Bre", Türkçedeki "be/lan" gibi kullanılır, genelde Güney Sırbistan ve Belgrad argosunun şah damarıdır. "Ne znam, bre!" = "Bilmiyorum lan işte!" gibi.',
      bodyEn: '"Bre" is used for emphasis, similar to Turkish "be/lan". It\'s the lifeblood of Belgrade and South Serbian slang. "Ne znam, bre!" = "I just don\'t know, man!"',
    },
    culturalTip: 'Sırplar "Mrak" kelimesini bizdeki "ateş ediyor" gibi kullanır. Harfiyen karanlık demek olsa da asıl anlamı Efsane ve Zirvedir. Çok Balkan işi bir kafadır!',
    culturalTipEn: "Serbians use 'Mrak' like we use 'fire' or 'dope'. Although it literally means 'dark', its slang meaning is 'Legendary' or 'Peak'. It's a classic Balkan vibe!",
    dialogue: [
      { speaker: 'A', serbian: 'Šta ima, bre, sve pet?', translation: 'Naber lan her şey yolunda mı?', translationEn: 'What\'s up man, everything good?' },
      { speaker: 'B', serbian: 'Ma ide nekako. Boli me uvo za posao.', translation: 'Bir tık ilerliyoruz. İşi falan hiç takmıyorum aga, çok da tın.', translationEn: 'It\'s going somehow. I don\'t care about work at all, mate.' },
      { speaker: 'A', serbian: 'Smiri se, brate. Idemo na kafu?', translation: 'Sakin ol kanka. Kahveye gidek mi?', translationEn: 'Calm down, bro. Shall we go for coffee?' },
      { speaker: 'B', serbian: 'Mrak ideja! Ajde!', translation: 'Efsane fikir! Haydi.', translationEn: 'Great idea! Let\'s go!' },
    ],
  },

  'slang-3': {
    scenario: "İşler fena terse sardı kanka — çantan kayboldu, otobüsü kaçırdın, yağmur başladı. İçinden hiçbir şey tutmadan asil Sırp hüsranını belli etme vakti.",
    scenarioEn: "Things have gone terribly wrong, mate — you lost your bag, missed the bus, and it started raining. Time to show your noble Serbian frustration without holding back.",
    vocabulary: [
      { word: 'Ma daj!', pronunciation: 'ma day', translation: 'Hadi canım! / Hadi ya! / Cidden mi?', translationEn: 'Oh come on! / No way! / Seriously?', example: 'Ma daj, ne može biti!' },
      { word: 'Idi', pronunciation: 'İ-di', translation: 'Yürü git!', translationEn: 'Go away! / Get lost!', example: 'Idi, ne smetaj mi.' },
      { word: 'Ostavi me na miru', pronunciation: 'os-TA-vi me na Mİ-ru', translation: 'Beni yalnız bırak / Beni bi sal', translationEn: 'Leave me alone / Give me a break', example: 'Molim te, ostavi me na miru.' },
      { word: 'Odlično', pronunciation: 'OD-liç-no', translation: 'Mükemmel / Harika (Bazen İğneleme İçin)', translationEn: 'Excellent / Great (sometimes sarcastic)', example: 'Odlično si to uradio!' },
      { word: 'Majku mu', pronunciation: 'MAY-ku mu', translation: 'Hay anasını satayım (hafif isyan küfrü)', translationEn: 'Damn it / For goodness sake (mild swear)', example: 'Majku mu, zaboravio sam ključ!' },
    ],
    culturalTip: 'Sırp hüsran çıkışları dışarıdan yoğun gözükür ama nadiren düşmancadır — daha çok teatraldir aga. İsyan ederken "Majku mu" dersen "hay anasını" havası verirsin.',
    culturalTipEn: "Serbian expressions of frustration look intense from the outside but are rarely hostile — they’re mostly theatrical. Saying 'Majku mu' when complaining gives off a 'damn it' or 'mother nature' vibe.",
    dialogue: [
      { speaker: 'A', serbian: 'Ma daj! Autobus je otišao!', translation: 'Hadi canım ya! Otobüs gitmiş!', translationEn: 'No way! The bus is gone!' },
      { speaker: 'B', serbian: 'Odlično, i sad šta?', translation: 'Harika oldu kanka e şimdi napacaz?', translationEn: 'Great, so now what?' },
      { speaker: 'A', serbian: 'Majku mu… uzimamo taksi.', translation: 'Hay anasını satayım… Taksi tutucaz.', translationEn: 'Damn it... we\'re taking a taxi.' },
      { speaker: 'B', serbian: 'Skupo je, bre. Jebiga.', translation: 'Çok tuzlu be oğlum. Neyse yapacak bişi yok.', translationEn: 'It\'s expensive, man. It is what it is.' },
    ],
  },

  'slang-4': {
    scenario: "Tıklım tıklım dolu bir kafanada gözün birine çarptı kanka. Sırplarda resmi resmi date takıntısı yok—her şey göz kontağı, özgüven ve sağlam laflardan ibaret.",
    scenarioEn: "Your eyes met someone's in a crowded kafana, mate. Serbians don't have an obsession with formal dates — it's all about eye contact, confidence, and solid talk.",
    vocabulary: [
      { word: 'Smuvati', pronunciation: 'SMU-va-ti', translation: 'Tavlamak / Flörtleşmek', translationEn: 'To hit on / To flirt / To hook up', example: 'Hoću da je smuvam.' },
      { word: 'Cica', pronunciation: 'TSİ-tsa', translation: 'Fıstık hatun', translationEn: 'Hot girl / Babe', example: 'Gledaj onu cicu tamo.' },
      { word: 'Šmeker', pronunciation: 'ŞME-ker', translation: 'Şmeker / Yakışıklı Çapkın (Özgüven makinesi)', translationEn: 'Charmer / Smooth talker', example: 'On misli da je šmeker.' },
      { word: 'Vrh', pronunciation: 'vırh', translation: 'Harika / Zirve nokta', translationEn: 'Peak / Awesome / The best', example: 'Ova pesma je vrh!' },
      { word: 'Živeli', pronunciation: 'Jİ-ve-li', translation: 'Şerefe!', translationEn: 'Cheers!', example: 'Ajde, brate, živeli!' },
    ],
    culturalTip: '"Kafana", canlı halk müziği dinleyip demlendiğin efsane mekanlardır. Buralarda "muvanje" (flört) devreye girince o sert göz teması ve duruş her şeyi çözer babuş.',
    culturalTipEn: "'Kafanas' are legendary places where you drink and listen to live folk music. When 'muvanje' (flirting) comes into play here, intense eye contact and your stance solve everything, boss.",
    dialogue: [
      { speaker: 'A', serbian: 'Izgledaš vrh večeras.', translation: 'Bu gece on numara görünüyorsun.', translationEn: 'You look awesome tonight.' },
      { speaker: 'B', serbian: 'Hvala, šmekeru. Šta piješ?', translation: 'Sağ ol şmeker. Ne içiyorsun bakalım?', translationEn: 'Thanks, charmer. What are you drinking?' },
      { speaker: 'A', serbian: 'Rakiju. Možemo da nazdravimo?', translation: 'Rakija var bizde. Kadeh tokuşturalım mı?', translationEn: 'Rakija. Shall we toast?' },
      { speaker: 'B', serbian: 'Ajde, živeli!', translation: 'Haydi gel, şerefe!', translationEn: 'Come on, cheers!' },
    ],
  },

  'slang-5': {
    scenario: "Saat gece 3 kanka ve Belgrad'da bir splavdasın (nehir kulübü). Gecenin ne kadar harika olduğunu dile getirmek istersen veya çok rakija içen kankanı uyarman gerekirse falan.",
    scenarioEn: "It's 3 AM and you're on a splav (river club) in Belgrade. Whether you want to express how great the night is or warn your friend who's had too much rakija...",
    vocabulary: [
      { word: 'Ludo', pronunciation: 'LU-do', translation: 'Deli gibi, İnanılmaz', translationEn: 'Crazy / Incredible', example: 'Brate, ovo je ludo!' },
      { word: 'Žurka', pronunciation: 'JUR-ka', translation: 'Parti', translationEn: 'Party', example: 'Gde je najbolja žurka?' },
      { word: 'Pijan / Pijana', pronunciation: 'Pİ-yan / Pi-ya-na', translation: 'Sarhoş (eril/dişil)', translationEn: 'Drunk (masc/fem)', example: 'On je pijan kao letva.' },
      { word: 'Mamurluk', pronunciation: 'MA-mur-luk', translation: 'Akşamdan kalmalık', translationEn: 'Hangover', example: 'Sutra će biti težak mamurluk.' },
      { word: 'Cimanje', pronunciation: 'TSİ-ma-nye', translation: 'Uğraşı / Angarya', translationEn: 'Hassle / Effort / Trouble', example: 'Neću tamo, preveliko je cimanje.' },
    ],
    grammarNote: {
      title: 'Pijan kao letva',
      titleEn: 'Drunk as a Board',
      body: 'Harfiyen Türkçe "Tahta parçası gibi sarhoş/Kütük gibi" anlamına gelir. Kanka çok kötü çarpılmış tipler için bunu patlat gitsin.',
      bodyEn: 'Literally means "Drunk as a piece of wood" (similar to "drunk as a skunk"). Use this for friends who have been hit hard by the drinks.',
    },
    culturalTip: "Belgrad splav'larında (nehir kulüpleri) eğlence sabahın ilk ışıklarına kadar sürer. Gecenin sonunda 'burek' (börek) yemek bir Belgrad klasiğidir. Mamurluk (akşamdan kalmalık) için en iyi ilaç sıcak bir börektir kanka!",
    culturalTipEn: "At Belgrade 'splavs' (river clubs), the fun lasts until the first light of dawn. Eating 'burek' at the end of the night is a Belgrade classic. The best medicine for a hangover is a warm burek, mate!",
    dialogue: [
      { speaker: 'A', serbian: 'Kakva žurka, čoveče! Ludo je!', translation: 'Ne parti be usta! Harika bir ortam.', translationEn: 'What a party, man! It\'s crazy!' },
      { speaker: 'B', serbian: 'Da, ali pazi na brata. Pijan je.', translation: 'Aynen ama biraderine bak o kütük ötesi sarhoş.', translationEn: 'Yeah, but watch out for your brother. He\'s drunk.' },
      { speaker: 'A', serbian: 'Jebiga, previše rakije.', translation: 'Yapcak bir şey yok kanka çok kaynadı rakija deryasında.', translationEn: 'It is what it is, too much rakija.' },
      { speaker: 'B', serbian: 'Sutra ga čeka mamurluk.', translation: 'Yarın beyninde akrepler dolaşacak da ondan!', translationEn: 'He\'s in for a heavy hangover tomorrow!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // DAILY LIFE
  // ═══════════════════════════════════════════════
  'daily-1': {
    scenario: "Belgrad'da sıradan bir Pazartesi sabahı. Sırp kankana kahve eşliğinde sabah rutinini anlatıyorsun. Uyanmak, duş, kahve ve işe gidiş — haydi bunları Sırpça halledelim!",
    scenarioEn: "An ordinary Monday morning in Belgrade. You're telling your Serbian friend about your morning routine over coffee. Waking up, shower, coffee, and going to work — let's handle these in Serbian!",
    vocabulary: [
      { word: 'Buđim se', pronunciation: 'BU-cim se', translation: 'Uyanırım', translationEn: 'I wake up', example: 'Buđim se u sedam.' },
      { word: 'Tuširam se', pronunciation: 'tu-Şİ-ram se', translation: 'Duş alırım', translationEn: 'I take a shower', example: 'Tuširam se ujutru.' },
      { word: 'Pijem kafu', pronunciation: 'Pİ-yem KA-fu', translation: 'Kahve içerim', translationEn: 'I drink coffee', example: 'Pijem kafu svako jutro.' },
      { word: 'Kupatilo', pronunciation: 'ku-PA-ti-lo', translation: 'Banyo', translationEn: 'Bathroom', example: 'Kupatilo je zauzeto.' },
      { word: 'Posao', pronunciation: 'PO-sa-o', translation: 'İş', translationEn: 'Work / Job', example: 'Idem na posao u osam.' },
      { word: 'Umoran/Umorna sam', pronunciation: 'U-mo-ran/U-mor-na sam', translation: 'Yorgunum (eril/dişil)', translationEn: 'I am tired (masc/fem)', example: 'Umoran sam, loše sam spavao.' },
    ],
    grammarNote: {
      title: '"-se" İle Biten Dönüşlü Fiiller',
      titleEn: 'Reflexive Verbs Ending in "-se"',
      body: 'Sırpça çoğu günlük fiil "-se" ekini alır kanka: "buđim se" (uyanıyorum), "tuširam se" (duş alıyorum), "oblačim se" (giyiniyorum). Eylemi kendine yaptığın anlamına gelir. Unutma sakın — sadece "budim" dersen hiçbir anlamı olmaz.',
      bodyEn: 'Most daily verbs in Serbian take the "-se" suffix: "buđim se" (I wake up), "tuširam se" (I shower), "oblačim se" (I dress). It means you’re doing the action to yourself. Don’t forget it — saying just "budim" won\'t make sense.',
    },
    culturalTip: "Sırplarda 'domaća kafa' (ev yapımı kahve) içmeden güne başlanmaz. Bu kahve bildiğin Türk kahvesidir ama sakın 'Turkish coffee' deme, onlar için bu milli bir meseledir ve 'domaća' (ev yapımı) olması en önemli kuraldır!",
    culturalTipEn: "Serbians don't start the day without 'domaća kafa' (homemade coffee). This is basically what you know as Turkish coffee, but don't call it that — it's a matter of national pride, and the fact that it's 'domaća' (homemade) is the most important rule!",
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se buđiş obično?', translation: 'Genelde saat kaçta uyanırsın?', translationEn: 'What time do you usually wake up?' },
      { speaker: 'B', serbian: 'U šest i po. Umoran sam uvek.', translation: 'Altı buçukta. Her zaman pestilim çıkmış vaziyetteyim.', translationEn: 'At six-thirty. I\'m always exhausted.' },
      { speaker: 'A', serbian: 'Piješ li kafu ujutru?', translation: 'Sabahları kahve içer misin?', translationEn: 'Do you drink coffee in the morning?' },
      { speaker: 'B', serbian: 'Naravno! Bez kafe ne mogu na posao.', translation: 'Ayıpsın! Kahvesiz işe falan gidemem.', translationEn: 'Of course! I can\'t go to work without coffee.' },
    ],
  },

  'daily-2': {
    scenario: "Novi Beograd'daki arkadaşın evini sana gezdiriyor. Her odayı ve eşyayı tek tek sayıyor — ona ayak uydurup gördüğün şeyler hakkında Sırpça soru sorman lazım!",
    scenarioEn: "Your friend in New Belgrade is showing you their home. They're naming every room and item — you need to keep up and ask questions about what you see in Serbian!",
    vocabulary: [
      { word: 'Kuća / Stan', pronunciation: 'KU-ça / stan', translation: 'Ev / Daire', translationEn: 'House / Apartment', example: 'Živim u stanu u centru.' },
      { word: 'Dnevna soba', pronunciation: 'DNEV-na SO-ba', translation: 'Oturma odası / Salon', translationEn: 'Living room', example: 'Dnevna soba je velika.' },
      { word: 'Kuhinja', pronunciation: 'KU-hi-nya', translation: 'Mutfak', translationEn: 'Kitchen', example: 'Kuhinju koristim svaki dan.' },
      { word: 'Prozor', pronunciation: 'PRO-zor', translation: 'Pencere', translationEn: 'Window', example: 'Otvori prozor, molim te.' },
      { word: 'Vrata', pronunciation: 'VRA-ta', translation: 'Kapı', translationEn: 'Door', example: 'Zatvori vrata, hvala.' },
      { word: 'Gledam televiziju', pronunciation: 'GLE-dam te-le-Vİ-zi-yu', translation: 'Televizyon İzliyorum', translationEn: 'I watch television', example: 'Gledam televiziju svake večeri.' },
    ],
    culturalTip: "Novi Beograd (Yeni Belgrad), komünist dönemden kalma devasa bloklardan oluşur. Dışarıdan gri ve sıkıcı görünebilir ama içleri çok sıcak ve modern dairelerle doludur. Sırp misafirperverliğini burada, bir aile apartmanında tatmak başkadır kanka.",
    culturalTipEn: "New Belgrade (Novi Beograd) is made up of massive blocks from the communist era. They might look gray and boring from the outside, but the interiors are filled with warm and modern apartments. Tasting Serbian hospitality here, in a family apartment, is something else, mate.",
    dialogue: [
      { speaker: 'A', serbian: 'Ovo je dnevna soba. Sviđa ti se?', translation: 'Burası salon. Beğendin mi?', translationEn: 'This is the living room. Do you like it?' },
      { speaker: 'B', serbian: 'Da, lepo je! Veliki prozori.', translation: 'Evet lan güzelmiş! Camlar kocaman.', translationEn: 'Yes, it\'s nice! Big windows.' },
      { speaker: 'A', serbian: 'A tamo je kuhinja i kupatilo.', translation: 'Şurası da mutfakla banyo.', translationEn: 'And over there are the kitchen and bathroom.' },
      { speaker: 'B', serbian: 'Odličan stan! Koliko si ovde?', translation: '10 numara ev! Ne zamandır buradasın kanka?', translationEn: 'Great apartment! How long have you been here, mate?' },
    ],
  },

  'daily-3': {
    scenario: "Belgrad'da bir ortak çalışma (co-working) alanında ilk günün kanka. İnsanlarla tanışıp ne iş yaptığını Sırpça anlatıyorsun!",
    scenarioEn: "Your first day at a co-working space in Belgrade, mate. You're meeting people and telling them what you do in Serbian!",
    vocabulary: [
      { word: 'Radim u…', pronunciation: 'RA-dim u', translation: '... da çalışıyorum', translationEn: 'I work at...', example: 'Radim u kancelariji.' },
      { word: 'Kancelarija', pronunciation: 'kan-tse-LA-ri-ya', translation: 'Ofis', translationEn: 'Office', example: 'Kancelarija je u centru.' },
      { word: 'Sastanak', pronunciation: 'SAS-ta-nak', translation: 'Toplantı', translationEn: 'Meeting', example: 'Imam sastanak u deset.' },
      { word: 'Učim srpski', pronunciation: 'U-çim Sırps-ki', translation: 'Sırpça öğreniyorum', translationEn: 'I am learning Serbian', example: 'Učim srpski već tri meseca.' },
      { word: 'Škola', pronunciation: 'ŞKO-la', translation: 'Okul', translationEn: 'School', example: 'Škola je blizu.' },
      { word: 'Odmor', pronunciation: 'OD-mor', translation: 'Mola / Tatil', translationEn: 'Rest / Holiday', example: 'Kada je odmor?' },
    ],
    grammarNote: {
      title: 'Geniş Zaman "Raditi" (Çalışmak)',
      titleEn: 'Present Tense "Raditi" (To Work)',
      body: 'Ja radim (Ben çalışıyorum), Ti radiš (Sen çalışıyorsun), On/Ona radi (O çalışıyor), Mi radimo (Biz çalışıyoruz), Vi radite (Siz çalışıyorsunuz), Oni rade (Onlar çalışıyor). Sırpçada fiiller kişiye göre çekimlenir, sonlardaki eklere hep dikkat et kanka.',
      bodyEn: 'Ja radim (I work), Ti radiš (You work), On/Ona radi (He/She works), Mi radimo (We work), Vi radite (You all work), Oni rade (They work). Verbs in Serbian are conjugated by person; always pay attention to the suffixes, mate.',
    },
    culturalTip: "Sırbistan'da IT sektörü çok gelişmiştir ve Belgrad bir 'digital nomad' merkezidir. Ortak çalışma alanlarında (co-working) her milletten insanı görebilirsin. Buralarda 'kolege' (meslektaşlar) arasında iletişim her zaman rahattır ve 'ti' (sen) diyerek konuşulur.",
    culturalTipEn: "The IT sector is highly developed in Serbia, and Belgrade is a digital nomad hub. In co-working spaces, you'll see people from all nations. Communication between 'kolege' (colleagues) is always casual, and using 'ti' (informal you) is standard.",
    dialogue: [
      { speaker: 'A', serbian: 'Čime se baviš?', translation: 'Ne iş yapıyorsun aga?', translationEn: 'What do you do, boss?' },
      { speaker: 'B', serbian: 'Radim u IT kompaniji. A ti?', translation: 'Bilişim şirketinde çalışıyorum, ya sen?', translationEn: 'I work at an IT company. And you?' },
      { speaker: 'A', serbian: 'Ja sam slobodnjak. I učim srpski.', translation: 'Ben freelancer takılıyorum kanka. Ve Sırpça öğreniyorum.', translationEn: 'I\'m a freelancer, mate. And I\'m learning Serbian.' },
      { speaker: 'B', serbian: 'Super! Srpski je težak, znam.', translation: 'Ooo efsane! Sırpça biraz beladır biliyorum.', translationEn: 'Great! Serbian is hard, I know.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // EMOTIONS
  // ═══════════════════════════════════════════════
  'emotions-1': {
    scenario: "Sırp dostun haftanın nasıl geçtiğini sormak için seni arıyor. Artık sadece 'dobro' falan yeterli değil — duygularını harbiden hissettiğin gibi dökmen lazım!",
    scenarioEn: "Your Serbian friend is calling to ask how your week went. Just saying 'dobro' is not enough anymore — you need to pour your feelings out as you really feel them!",
    vocabulary: [
      { word: 'Srećan/Srećna sam', pronunciation: 'SRE-çan/SREÇ-na sam', translation: 'Mutluyum (eril/dişil)', translationEn: 'I am happy (masc/fem)', example: 'Srećna sam što sam ovde.' },
      { word: 'Tužan/Tužna sam', pronunciation: 'TU-jan/TUJ-na sam', translation: 'Üzgünüm (eril/dişil)', translationEn: 'I am sad (masc/fem)', example: 'Tužan sam što odlazim.' },
      { word: 'Ljut/Ljuta sam', pronunciation: 'lyut/LYU-ta sam', translation: 'Sinirliyim (eril/dişil)', translationEn: 'I am angry (masc/fem)', example: 'Ljuta sam na njega.' },
      { word: 'Volim te', pronunciation: 'VO-lim te', translation: 'Seni seviyorum', translationEn: 'I love you', example: 'Volim te, mama.' },
      { word: 'Nedostaješ mi', pronunciation: 'ne-DOS-ta-yeş mi', translation: 'Seni özledim', translationEn: 'I miss you', example: 'Nedostajeş mi svaki dan.' },
      { word: 'Usamljen/Usamljena sam', pronunciation: 'u-SAM-lyen/…na sam', translation: 'Yalnız hissediyorum', translationEn: 'I feel lonely', example: 'Malo sam usamljen u novom gradu.' },
    ],
    grammarNote: {
      title: 'Kelimelerdeki Cinsiyet Uyumu',
      titleEn: 'Gender Agreement in Adjectives',
      body: 'Sırpçada sıfatlar kişinin cinsiyetine göre biçilir aga. "Srećan sam" erkeksen "Mutluyum", "Srećna sam" kadınsan "Mutluyum" demek. Öğrenirken genelde iki sonuca da dikkat et, "-a" eki dişildir.',
      bodyEn: 'In Serbian, adjectives are tailored to a person\'s gender. "Srećan sam" means "I am happy" if you\'re male, and "Srećna sam" if you\'re female. Pay attention to both forms; the "-a" suffix is feminine.',
    },
    culturalTip: "Sırplar duygularını dışa vururken çok tutkuludur dostum. Seviyorlarsa 'volim te' demekten, kızıyorlarsa da 'bre' diyerek isyan etmekten asla çekinmezler. Duygularını açık yaşa, yerliler bu samimiyete bayılır!",
    culturalTipEn: "Serbians are very passionate when expressing their feelings. If they love someone, they won’t hesitate to say 'volim te', and if they’re angry, they’ll rebel with a loud 'bre'. Be open with your emotions; locals love that authenticity!",
    dialogue: [
      { speaker: 'A', serbian: 'Kako se osećaš?', translation: 'Nasıl hissediyorsun kendini?', translationEn: 'How are you feeling?' },
      { speaker: 'B', serbian: 'Srećan sam ali malo usamljen.', translation: 'Mutluyum ama biraz yalnızım ya.', translationEn: 'I\'m happy but a little lonely.' },
      { speaker: 'A', serbian: 'Razumem te. Nedostajiš mi kad nisi tu.', translation: 'Anlıyorum seni, ben de özlüyorum sen yokken.', translationEn: 'I understand you. I miss you when you\'re not here.' },
      { speaker: 'B', serbian: 'Hvala. I ti meni nedostaješ.', translation: 'Sağ ol dostum, ben de seni özlüyorum.', translationEn: 'Thanks. I miss you too.' },
    ],
  },

  'emotions-2': {
    scenario: "Muhabbette mevzu döndü dolaştı, Belgrad Avrupa'nın en iyi şehri mi konusuna geldi. Kankalarına kendi fikrini, katılıp katılmadığını direkt Sırpça belirtmek zorundasın!",
    scenarioEn: "The conversation has turned to whether Belgrade is the best city in Europe. You need to express your opinion directly in Serbian and whether you agree or not!",
    vocabulary: [
      { word: 'Mislim da…', pronunciation: 'MİS-lim da', translation: 'Bence / Düşünüyorum ki', translationEn: 'I think that...', example: 'Mislim da je Beograd sjajan.' },
      { word: 'Po mom mišljenju', pronunciation: 'po mom miş-LYEN-yu', translation: 'Bana göre / Fikrimce', translationEn: 'In my opinion', example: 'Po mom mišljenju, Beograd je pun života.' },
      { word: 'Slažem se', pronunciation: 'SLA-jem se', translation: 'Aynı fikirdeyim', translationEn: 'I agree', example: 'Slažem se s tobom.' },
      { word: 'Ne slažem se', pronunciation: 'ne SLA-jem se', translation: 'Katılmıyorum', translationEn: 'I don\'t agree', example: 'Ne slažem se, brate.' },
      { word: 'Možda', pronunciation: 'MOJ-da', translation: 'Belki / Olabilir', translationEn: 'Maybe', example: 'Možda imaš pravo.' },
      { word: 'Ne znam', pronunciation: 'ne znam', translation: 'Bilmiyorum', translationEn: 'I don\'t know', example: 'Ne znam, to je teško pitanje.' },
    ],
    culturalTip: "Belgrad'da bir mekanda otururken yan masadaki birinin muhabbete dahil olması çok normaldir kanka. Sırplar politikadan spora her konuda tartışmayı ve fikir belirtmeyi severler. 'Slažem se' (katılıyorum) diyerek sohbete dal, hemen bir kanka edin!",
    culturalTipEn: "In Belgrade, it’s perfectly normal for someone at the next table to join your conversation. Serbians love discussing and sharing opinions on everything from politics to sports. Jump into the talk by saying 'Slažem se' (I agree) and make a friend instantly!",
    dialogue: [
      { speaker: 'A', serbian: 'Mislim da je Beograd najbolji grad na svetu!', translation: 'Bence Belgrad dünyadaki en efsane şehir!', translationEn: 'I think Belgrade is the best city in the world!' },
      { speaker: 'B', serbian: 'Ne slažem se baš. Ali je odličan.', translation: 'Zerre katılmıyorum. Ama çok iyi şehir o ayrı.', translationEn: 'I don\'t quite agree. But it is an excellent city.' },
      { speaker: 'A', serbian: 'Po mom mišljenju, nema boljeg noćnog života.', translation: 'Benim görüşüm, gece hayatında burası tek!', translationEn: 'In my opinion, there is no better nightlife.' },
      { speaker: 'B', serbian: 'Tu se slažem! To je istina.', translation: 'İşte o noktada hemfikiriz! Katılıyorum.', translationEn: 'I agree there! That\'s the truth.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEATHER
  // ═══════════════════════════════════════════════
  'weather-1': {
    scenario: "Fruška Gora dağına günübirlik bir trip atacaksınız kankalarla. Ama sokağa çıkmadan önce havanın gidişatını Sırpça değerlendirmeniz lazım!",
    scenarioEn: "You're taking a day trip to Fruška Gora mountain with friends. But before heading out, you need to assess the weather in Serbian!",
    vocabulary: [
      { word: 'Kakvo je vreme?', pronunciation: 'KAK-vo ye VRE-me', translation: 'Hava nasıl? (Dışarısı)', translationEn: 'What\'s the weather like?', example: 'Kakvo je vreme danas?' },
      { word: 'Pada kiša', pronunciation: 'PA-da Kİ-şa', translation: 'Yağmur yağıyor', translationEn: 'It is raining', example: 'Pada kiša, uzmi kişobran.' },
      { word: 'Sunčano', pronunciation: 'SUN-ça-no', translation: 'Güneşli', translationEn: 'Sunny', example: 'Sutra će biti sunčano.' },
      { word: 'Hladno je', pronunciation: 'HLAD-no ye', translation: 'Hava soğuk', translationEn: 'It is cold', example: 'Hladno je, obuci jaknu.' },
      { word: 'Sneg', pronunciation: 'sneg', translation: 'Kar', translationEn: 'Snow', example: 'Pada sneg! Divno!' },
      { word: 'Oblačno', pronunciation: 'OB-laç-no', translation: 'Bulutlu', translationEn: 'Cloudy', example: 'Malo je oblačno ali neće padati.' },
    ],
    culturalTip: "Belgrad havası cidden dertlidir aga — yazın 40°C kavurur, kışın kemiklerini dondurur. Yerliler bu iki duruma da her zaman şikayetçi moddadır. 'Strašna vrućina!' (Berbat bir sıcak!) ya da 'Pakao od zime!' (Buz gibi lan!) derseniz direkt kanından biri sayılırsınız.",
    culturalTipEn: "Belgrade weather is serious business — 40°C in summer, bone-chilling in winter. Locals love to complain about both. Saying 'Strašna vrućina!' (Terrible heat!) or 'Pakao od zime!' (Freezing winter!) will make you one of them.",
    dialogue: [
      { speaker: 'A', serbian: 'Kakvo je vreme sutra na Fruškoj gori?', translation: 'Yarın Fruška Gora\'da hava nasıl oluyormuş?', translationEn: 'What\'s the weather like at Fruška Gora tomorrow?' },
      { speaker: 'B', serbian: 'Oblačno ujutru, ali posle podne sunčano.', translation: 'Sabah kapalı bulutlu, öğleden sonra parçalı ve güneşli.', translationEn: 'Cloudy in the morning, but sunny in the afternoon.' },
      { speaker: 'A', serbian: 'Hoće li padati kiša?', translation: 'Kanka yağmur yağacak mı?', translationEn: 'Is it going to rain, mate?' },
      { speaker: 'B', serbian: 'Verovatno ne. Ali ponesi jaknu — hladno je gore.', translation: 'Pek sanmıyorum ama ceketini al — orası donuyor.', translationEn: 'Probably not. But bring a jacket — it\'s cold up there.' },
    ],
  },

  'weather-2': {
    scenario: "Ortamda muhabbet esnasında en sevdiğin mevsimin ne olduğu soruldu aga. Sırpça hangi mevsim olduğunu ve oralarda neler takıldığını patlatman gerekiyor!",
    scenarioEn: "During a conversation, someone asked about your favorite season, mate. You need to declare which season it is and what you do during that time in Serbian!",
    vocabulary: [
      { word: 'Proleće', pronunciation: 'pro-LE-çe', translation: 'İlkbahar', translationEn: 'Spring', example: 'U proleće cveća i kafane.' },
      { word: 'Leto', pronunciation: 'LE-to', translation: 'Yaz', translationEn: 'Summer', example: 'Leto u Beogradu je haotično.' },
      { word: 'Jesen', pronunciation: 'YE-sen', translation: 'Sonbahar', translationEn: 'Autumn / Fall', example: 'Jesen je najlepše doba godine.' },
      { word: 'Zima', pronunciation: 'Zİ-ma', translation: 'Kış', translationEn: 'Winter', example: 'Zima je hladna ali ima čari.' },
      { word: 'Godišnje doba', pronunciation: 'go-DİŞ-nye DO-ba', translation: 'Mevsim', translationEn: 'Season', example: 'Koje godišnje doba voliš?' },
      { word: 'Volim leto', pronunciation: 'VO-lim LE-to', translation: 'Yazı seviyorum', translationEn: 'I love summer', example: 'Volim leto jer je toplo.' },
    ],
    culturalTip: 'Novi Sad\'daki "Exit Festival" efsanesi her sene Temmuz ayında Balkanları sallar — Güneydoğu Avrupa\'nın en harika festivalidir. Kime sorsan sana bi yaz festivali anısı patlatır. Genç yerlilere Exit falan dersen anında dost olursun.',
    culturalTipEn: "The legendary 'Exit Festival' in Novi Sad rocks the Balkans every July — it's the greatest festival in Southeast Europe. Ask anyone and they'll have a summer festival story. Mention Exit to young locals and you’ll make friends instantly.",
    dialogue: [
      { speaker: 'A', serbian: 'Koje godišnje doba najviše voliš?', translation: 'Hangi mevsim favoriniz bakalım?', translationEn: 'Which season do you like the most?' },
      { speaker: 'B', serbian: 'Volim leto! Toplo je i ima puno eventi.', translation: 'Yaz tabii ki kanka! Sıcak hava, bin tane etkinlik!', translationEn: 'I love summer! It\'s warm and there are lots of events.' },
      { speaker: 'A', serbian: 'Ja više volim jesen. Mirnije je.', translation: 'Ben sonbaharı tutuyorum. Daha chill ve sakin.', translationEn: 'I prefer autumn. It\'s calmer.' },
      { speaker: 'B', serbian: 'Svako svoje! Zima mi je najgora.', translation: 'Herkesin kendi zevki de benim kışla aram kanlı bıçaklı aga.', translationEn: 'To each their own! Winter is the worst for me.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FAMILY
  // ═══════════════════════════════════════════════
  'family-1': {
    scenario: "Sırp kankan albümü çıkardı ve başlıyor amcasını ninesini anlatmaya aga. Muhabbetin bütün gece sürmemesi için aile terimlerini çakmalısın!",
    scenarioEn: "Your Serbian friend pulled out an album and started telling you about his uncle and grandmother, mate. To keep the conversation moving, you need to nail those family terms!",
    vocabulary: [
      { word: 'Majka / Mama', pronunciation: 'MAY-ka / MA-ma', translation: 'Anne', translationEn: 'Mother / Mom', example: 'Moja mama je doktor.' },
      { word: 'Otac / Tata', pronunciation: 'O-tats / TA-ta', translation: 'Baba', translationEn: 'Father / Dad', example: 'Moj tata radi u fabrici.' },
      { word: 'Brat', pronunciation: 'brat', translation: 'Erkek Kardeş / Abi', translationEn: 'Brother', example: 'Imam jednog brata.' },
      { word: 'Sestra', pronunciation: 'SES-tra', translation: 'Kız Kardeş / Abla', translationEn: 'Sister', example: 'Moja sestra je mlađa.' },
      { word: 'Baka', pronunciation: 'BA-ka', translation: 'Nene / Büyükanne', translationEn: 'Grandmother', example: 'Baka pravi najboliju sarmu.' },
      { word: 'Deda', pronunciation: 'DE-da', translation: 'Dede / Büyükbaba', translationEn: 'Grandfather', example: 'Deda je penzioner.' },
    ],
    culturalTip: 'Sırplarda aile bağları sağlamdır koçum. Pazar günleri nene evinde yapılan "ručak" öğle yemeği ritüeli kutsaldır. İstisnasız hepsi "Bakanın" yemeklerini Michelin yıldızlı lokantalara tercih eder.',
    culturalTipEn: "Serbians have strong family ties. The Sunday 'ručak' (lunch) ritual at grandmother's house is sacred. Without exception, everyone prefers their 'Baka's' cooking to Michelin-starred restaurants.",
    dialogue: [
      { speaker: 'A', serbian: 'Ko je ovo na fotografiji?', translation: 'Dostum fotoğraftaki kim böyle yahu?', translationEn: 'Mate, who is this in the photo?' },
      { speaker: 'B', serbian: 'To je moja baka. Ima 78 godina.', translation: 'Nenem kanka o. Yaşı 78 maşallah.', translationEn: 'That\'s my grandmother. She is 78 years old.' },
      { speaker: 'A', serbian: 'A ovo?', translation: 'E bu kim?', translationEn: 'And this?' },
      { speaker: 'B', serbian: 'Moj brat i njegova žena. Mladi su.', translation: 'Abimle yengem ya. Daha gençler.', translationEn: 'My brother and his wife. They\'re young.' },
    ],
  },

  'family-2': {
    scenario: "Yan masadan meraklı bir amca sana aile yaşantınla ilgili Sırpça soru soruluyor. Aileni — kaç kişi olduklarını, nasıllarını — bi güzel anlatman şart!",
    scenarioEn: "A curious uncle from the next table is asking you questions about your family life in Serbian. You need to tell him all about your family — how many they are and how they're doing!",
    vocabulary: [
      { word: 'Porodica', pronunciation: 'po-RO-di-tsa', translation: 'Aile', translationEn: 'Family', example: 'Moja porodica je mala.' },
      { word: 'Velika porodica', pronunciation: 'VE-li-ka po-RO-di-tsa', translation: 'Büyük kalabalık aile', translationEn: 'Large / Extended family', example: 'Srbi obično imaju veliku porodicu.' },
      { word: 'Star/Stara', pronunciation: 'star/STA-ra', translation: 'Yaşlı / Eski (eril/dişil)', translationEn: 'Old (masc/fem)', example: 'Moj otac je star.' },
      { word: 'Mlad/Mlada', pronunciation: 'mlad/MLA-da', translation: 'Genç (eril/dişil)', translationEn: 'Young (masc/fem)', example: 'Moja sestra je mlada.' },
      { word: 'Imam braću i sestre', pronunciation: 'İ-mam BRA-çu i SES-tre', translation: 'Kardeşlerim var', translationEn: 'I have brothers and sisters', example: 'Imam dvoje braće i jednu sestru.' },
      { word: 'Jedino dete', pronunciation: 'YE-di-no DE-te', translation: 'Tek çocuk', translationEn: 'Only child', example: 'Ja sam jedino dete.' },
    ],
    grammarNote: {
      title: '"Braća" — Kafa Karıştıran Çoğul',
      titleEn: '"Braća" — The Confusing Plural',
      body: '"Brat" (bir kardeş), ama çok erkek kardeş varsa "braća". Dişil gibi görünüyor değil mi aga? Ama aslında topluluk ismidir. Cebi delmesin diye ezberlemek lazım o kuralları.',
      bodyEn: '"Brat" is one brother, but if there are multiple brothers, it’s "braća". It looks feminine, doesn’t it? But it’s actually a collective noun. You’ve got to memorize these rules so they don’t catch you off guard.',
    },
    culturalTip: "Sırp ailelerinde kuzenler de 'brat' veya 'sestra' (erkek/kız kardeş) olarak adlandırılır kanka. Aile öyle geniştir ki, bir pazar yemeğinde masada oturan yirmi kişinin hepsinin birbirine 'brat' dediğini duyarsan şaşırma!",
    culturalTipEn: "In Serbian families, cousins are also called 'brat' or 'sestra' (brother/sister). Families are so large that you shouldn't be surprised to hear twenty people at a Sunday lunch all calling each other 'brat'!",
    dialogue: [
      { speaker: 'A', serbian: 'Imaš li braću i sestre?', translation: 'Aga hayatta mıdır kardeşlerin abin ablan falan?', translationEn: 'Mate, are your brothers or sisters around?' },
      { speaker: 'B', serbian: 'Da, imam dva brata i jednu sestru.', translation: 'Aynen aslan parçası. İki abim bir kız kardeşim var.', translationEn: 'Yeah. I have two brothers and a sister.' },
      { speaker: 'A', serbian: 'Velika porodica! Živite zajedno?', translation: 'Büyük aşiretmiş maşallah. Toplu mu kalıyorsunuz?', translationEn: 'A big family! Do you live together?' },
      { speaker: 'B', serbian: 'Ne, svako živi posebno. Ali viđamo se svake nedelje.', translation: 'Yok ya, hepimiz dağıldık da her pazar fix görüşürüz birbirmizle.', translationEn: 'No, everyone lives separately. But we see each other every Sunday without fail.' },
    ],
  },
};

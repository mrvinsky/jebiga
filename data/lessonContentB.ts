import { LessonContent } from './contentTypes';

export const lessonContentB: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // DIRECTIONS
  // ═══════════════════════════════════════════════
  'directions-1': {
    scenario: "Republika Meydanı yakınında tamamen kayboldun kanka. Sıcakkanlı bir yerli sana yardım lazımmı diye sordu — ama sadece Sırpça biliyor. Yönler senin can simidin!",
    vocabulary: [
      { word: 'Levo', pronunciation: 'LE-vo', translation: 'Sol', example: 'Skrenite levo kod semafora.' },
      { word: 'Desno', pronunciation: 'DES-no', translation: 'Sağ', example: 'Restoran je desno.' },
      { word: 'Pravo', pronunciation: 'PRA-vo', translation: 'Dümdüz ileri', example: 'Idite pravo sto metara.' },
      { word: 'Gde je…?', pronunciation: 'gde ye', translation: '... nerede?', example: 'Gde je autobuska stanica?' },
      { word: 'Daleko', pronunciation: 'DA-le-ko', translation: 'Uzak', example: 'Daleko je — uzmite taksi.' },
      { word: 'Blizu', pronunciation: 'BLİ-zu', translation: 'Yakın', example: 'Blizu je, pet minuta peške.' },
    ],
    grammarNote: {
      title: 'Yol Sormak',
      body: '"Izvinite, gde je…?" (Affedersiniz, ... nerede?) buradaki sihirli cümledir kanka. Ekstra kibar olmak istersen sonuna "molim vas" (lütfen) ekle. Yerliler genelde mesafeyi metreyle değil yürüme dakikasıyla ("pet minuta peške") anlatır.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, gde je Kalemegdan?', translation: 'Affedersiniz, Kalemegdan ne tarafta?' },
      { speaker: 'B', serbian: 'Idite pravo, pa skrenite levo.', translation: 'Dümdüz git, sonra sola dön.' },
      { speaker: 'A', serbian: 'Daleko je?', translation: 'Uzak mı peki?' },
      { speaker: 'B', serbian: 'Ne, blizu je. Deset minuta peške.', translation: 'Yok be, çok yakın. Yürüyerek on dakika.' },
    ],
  },

  'directions-2': {
    scenario: "Hostelinden tren istasyonuna gitmen lazım kanka. Taksiler, otobüsler, tramvaylar... Tüm anonslar Sırpça okunduğu için bir an önce öğrenmelisin!",
    vocabulary: [
      { word: 'Taksi', pronunciation: 'TAK-si', translation: 'Taksi', example: 'Zovite mi taksi, molim.' },
      { word: 'Autobus', pronunciation: 'OW-to-bus', translation: 'Otobüs', example: 'Koji autobus ide do centra?' },
      { word: 'Stanica', pronunciation: 'STA-ni-tsa', translation: 'Durak / İstasyon', example: 'Gde je autobuska stanica?' },
      { word: 'Aerodrom', pronunciation: 'a-E-ro-drom', translation: 'Havalimanı', example: 'Taksi do aerodroma, molim.' },
      { word: 'Karta', pronunciation: 'KAR-ta', translation: 'Bilet', example: 'Jednu kartu, molim.' },
      { word: 'Centar', pronunciation: 'TSEN-tar', translation: 'Şehir merkezi', example: 'Idemo u centar?' },
    ],
    culturalTip: "Belgrad taksileri tehlikelidir, kazıklanmamak için hep Pink Taxi veya Car:Go uygulaması kullan. Eğer sokaktan bir taksi çevirirsen, önce fiyatı konuş ya da kesinlikle taksimetreyi açtır ('na taksimetar, molim').",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan! Do aerodroma, molim.', translation: 'İyi günler abi! Havalimanına lütfen.' },
      { speaker: 'B', serbian: 'Izvolite. Na taksimetar?', translation: 'Tabii. Taksimetreyle mi gidelim?' },
      { speaker: 'A', serbian: 'Da, naravno. Koliko dugo traje?', translation: 'Evet, aynen. Ortalama ne kadar sürer yol?' },
      { speaker: 'B', serbian: 'Oko trideset minuta, zavisno od gužve.', translation: 'Trafiğe göre aşağı yukarı 30 dakika aga.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // STREET SLANG
  // ═══════════════════════════════════════════════
  'slang-1': {
    scenario: "Belgrad'ın en havalı mahallesi Savamala'da terastaki bir bardasın kanka. Yerli kankaların yanındasın. Turist gibi durmamak için elzem argo kelimeleri çat çat kullanman lazım.",
    vocabulary: [
      { word: 'Jebiga', pronunciation: 'YE-bi-ga', translation: 'Yapacak bir şey yok / Sallama gitsin', example: 'Kasni voz? Jebiga.' },
      { word: 'Brate', pronunciation: 'BRA-te', translation: 'Kanka / Birader / Kardeşim', example: 'Stani, brate, to nije fer.' },
      { word: 'Kapiram', pronunciation: 'KA-pi-ram', translation: 'Anlıyorum / Çaktım', example: 'Kapiram, nema problema.' },
      { word: 'Ajde', pronunciation: 'AY-de', translation: 'Haydi / Tamam / Devam', example: 'Ajde, idemo!' },
      { word: 'Vopi', pronunciation: 'VO-pi', translation: 'Hop / Hey', example: 'Vopi, čekaj me malo!' },
    ],
    culturalTip: '"Jebiga" Sırbistan milli felsefesidir aga. Hayatın saçmalığına karşı ufak bir küfürlü isyan. Günlük hayatta ayıp falan karşılanmaz; işler ters gittiğinde söyle ki yerlilerle anında kanka ol!',
    dialogue: [
      { speaker: 'A', serbian: 'Vopi, brate, šta ima?', translation: 'Hey, naber birader?' },
      { speaker: 'B', serbian: 'Ma ništa, kapiram ti ja. Dosadno je.', translation: 'Hep aynı valla, biliyorsun işte. Çok sıkıcı.' },
      { speaker: 'A', serbian: 'Ajde da idemo negde!', translation: 'Hadi kalk gidelim bi yerlere!' },
      { speaker: 'B', serbian: 'Nemam para. Jebiga.', translation: 'Beş kuruş param yok kanka. Yapacak bir şey yok.' },
    ],
  },

  'slang-2': {
    scenario: "Kankanın evinde maç izliyorsunuz. Sırbistan golü atıyor. Herkes patlıyor. Havada uçuşan Balkan argolarını hemen anlaman ve coşkuya katılman şart!",
    vocabulary: [
      { word: 'Šta ima?', pronunciation: 'ş-ta İ-ma', translation: 'Naber? / Neler var neler yok?', example: 'Ej, šta ima, stari?' },
      { word: 'Bre', pronunciation: 'bre', translation: 'Be / Lan (cümlenin sonunda vurucu olarak kullanılır)', example: 'Ne mogu, bre!' },
      { word: 'Mrak', pronunciation: 'mrak', translation: 'Gerçek anlamı karanlık → Argo anlamı: Efsane!', example: 'Taj gol je bio mrak!' },
      { word: 'Sve pet', pronunciation: 'sve pet', translation: 'Beş üstünden Beş → Her şey on numara!', example: 'Kako si? — Sve pet!' },
      { word: 'Smiri se', pronunciation: 'SMİ-ri se', translation: 'Sakin ol / Relaks', example: 'Smiri se, nije kraj sveta.' },
      { word: 'Boli me uvo', pronunciation: 'BO-li me U-vo', translation: 'Gerçek anlamı kulağım ağrıyor → Umurumda değil, çok da tın', example: 'Šta on misli? — Boli me uvo.' },
    ],
    grammarNote: {
      title: '"Bre" — Sırpça Sözlü Tik',
      body: '"Bre", Türkçedeki "be/lan" gibi kullanılır, genelde Güney Sırbistan ve Belgrad argosunun şah damarıdır. "Ne znam, bre!" = "Bilmiyorum lan işte!" gibi.',
    },
    culturalTip: 'Sırplar "Mrak" kelimesini bizdeki "ateş ediyor" gibi kullanır. Harfiyen karanlık demek olsa da asıl anlamı Efsane ve Zirvedir. Çok Balkan işi bir kafadır!',
    dialogue: [
      { speaker: 'A', serbian: 'Šta ima, bre, sve pet?', translation: 'Naber lan her şey yolunda mı?' },
      { speaker: 'B', serbian: 'Ma ide nekako. Boli me uvo za posao.', translation: 'Bir tık ilerliyoruz. İşi falan hiç takmıyorum aga, çok da tın.' },
      { speaker: 'A', serbian: 'Smiri se, brate. Idemo na kafu?', translation: 'Sakin ol kanka. Kahveye gidek mi?' },
      { speaker: 'B', serbian: 'Mrak ideja! Ajde!', translation: 'Efsane fikir! Haydi.' },
    ],
  },

  'slang-3': {
    scenario: "İşler fena terse sardı kanka — çantan kayboldu, otobüsü kaçırdın, yağmur başladı. İçinden hiçbir şey tutmadan asil Sırp hüsranını belli etme vakti.",
    vocabulary: [
      { word: 'Ma daj!', pronunciation: 'ma day', translation: 'Hadi canım! / Hadi ya! / Cidden mi?', example: 'Ma daj, ne može biti!' },
      { word: 'Idi', pronunciation: 'İ-di', translation: 'Yürü git!', example: 'Idi, ne smetaj mi.' },
      { word: 'Ostavi me na miru', pronunciation: 'os-TA-vi me na Mİ-ru', translation: 'Beni yalnız bırak / Beni bi sal', example: 'Molim te, ostavi me na miru.' },
      { word: 'Odlično', pronunciation: 'OD-liç-no', translation: 'Mükemmel / Harika (Bazen İğneleme İçin)', example: 'Odlično si to uradio!' },
      { word: 'Majku mu', pronunciation: 'MAY-ku mu', translation: 'Hay anasını satayım (hafif isyan küfrü)', example: 'Majku mu, zaboravio sam ključ!' },
    ],
    culturalTip: 'Sırp hüsran çıkışları dışarıdan yoğun gözükür ama nadiren düşmancadır — daha çok teatraldir aga. İsyan ederken "Majku mu" dersen "hay anasını" havası verirsin.',
    dialogue: [
      { speaker: 'A', serbian: 'Ma daj! Autobus je otišao!', translation: 'Hadi canım ya! Otobüs gitmiş!' },
      { speaker: 'B', serbian: 'Odlično, i sad šta?', translation: 'Harika oldu kanka e şimdi napacaz?' },
      { speaker: 'A', serbian: 'Majku mu… uzimamo taksi.', translation: 'Hay anasını satayım… Taksi tutucaz.' },
      { speaker: 'B', serbian: 'Skupo je, bre. Jebiga.', translation: 'Çok tuzlu be oğlum. Neyse yapacak bişi yok.' },
    ],
  },

  'slang-4': {
    scenario: "Tıklım tıklım dolu bir kafanada gözün birine çarptı kanka. Sırplarda resmi resmi date takıntısı yok—her şey göz kontağı, özgüven ve sağlam laflardan ibaret.",
    vocabulary: [
      { word: 'Smuvati', pronunciation: 'SMU-va-ti', translation: 'Tavlamak / Flörtleşmek', example: 'Hoću da je smuvam.' },
      { word: 'Cica', pronunciation: 'TSİ-tsa', translation: 'Fıstık hatun', example: 'Gledaj onu cicu tamo.' },
      { word: 'Šmeker', pronunciation: 'ŞME-ker', translation: 'Şmeker / Yakışıklı Çapkın (Özgüven makinesi)', example: 'On misli da je šmeker.' },
      { word: 'Vrh', pronunciation: 'vırh', translation: 'Harika / Zirve nokta', example: 'Ova pesma je vrh!' },
      { word: 'Živeli', pronunciation: 'Jİ-ve-li', translation: 'Şerefe!', example: 'Ajde, brate, živeli!' },
    ],
    culturalTip: '"Kafana", canlı halk müziği dinleyip demlendiğin efsane mekanlardır. Buralarda "muvanje" (flört) devreye girince o sert göz teması ve duruş her şeyi çözer babuş.',
    dialogue: [
      { speaker: 'A', serbian: 'Izgledaš vrh večeras.', translation: 'Bu gece on numara görünüyorsun.' },
      { speaker: 'B', serbian: 'Hvala, šmekeru. Šta piješ?', translation: 'Sağ ol şmeker. Ne içiyorsun bakalım?' },
      { speaker: 'A', serbian: 'Rakiju. Možemo da nazdravimo?', translation: 'Rakija var bizde. Kadeh tokuşturalım mı?' },
      { speaker: 'B', serbian: 'Ajde, živeli!', translation: 'Haydi gel, şerefe!' },
    ],
  },

  'slang-5': {
    scenario: "Saat gece 3 kanka ve Belgrad'da bir splavdasın (nehir kulübü). Gecenin ne kadar harika olduğunu dile getirmek istersen veya çok rakija içen kankanı uyarman gerekirse falan.",
    vocabulary: [
      { word: 'Ludo', pronunciation: 'LU-do', translation: 'Deli gibi, İnanılmaz', example: 'Brate, ovo je ludo!' },
      { word: 'Žurka', pronunciation: 'JUR-ka', translation: 'Parti', example: 'Gde je najbolja žurka?' },
      { word: 'Pijan / Pijana', pronunciation: 'Pİ-yan / Pi-ya-na', translation: 'Sarhoş (eril/dişil)', example: 'On je pijan kao letva.' },
      { word: 'Mamurluk', pronunciation: 'MA-mur-luk', translation: 'Akşamdan kalmalık', example: 'Sutra će biti težak mamurluk.' },
      { word: 'Cimanje', pronunciation: 'TSİ-ma-nye', translation: 'Uğraşı / Angarya', example: 'Neću tamo, preveliko je cimanje.' },
    ],
    grammarNote: {
      title: 'Pijan kao letva',
      body: 'Harfiyen Türkçe "Tahta parçası gibi sarhoş/Kütük gibi" anlamına gelir. Kanka çok kötü çarpılmış tipler için bunu patlat gitsin.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Kakva žurka, čoveče! Ludo je!', translation: 'Ne parti be usta! Harika bir ortam.' },
      { speaker: 'B', serbian: 'Da, ali pazi na brata. Pijan je.', translation: 'Aynen ama biraderine bak o kütük ötesi sarhoş.' },
      { speaker: 'A', serbian: 'Jebiga, previše rakije.', translation: 'Yapcak bir şey yok kanka çok kaynadı rakija deryasında.' },
      { speaker: 'B', serbian: 'Sutra ga čeka mamurluk.', translation: 'Yarın beyninde akrepler dolaşacak da ondan!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // DAILY LIFE
  // ═══════════════════════════════════════════════
  'daily-1': {
    scenario: "Belgrad'da sıradan bir Pazartesi sabahı. Sırp kankana kahve eşliğinde sabah rutinini anlatıyorsun. Uyanmak, duş, kahve ve işe gidiş — haydi bunları Sırpça halledelim!",
    vocabulary: [
      { word: 'Buđim se', pronunciation: 'BU-cim se', translation: 'Uyanırım', example: 'Buđim se u sedam.' },
      { word: 'Tuširam se', pronunciation: 'tu-Şİ-ram se', translation: 'Duş alırım', example: 'Tuširam se ujutru.' },
      { word: 'Pijem kafu', pronunciation: 'Pİ-yem KA-fu', translation: 'Kahve içerim', example: 'Pijem kafu svako jutro.' },
      { word: 'Kupatilo', pronunciation: 'ku-PA-ti-lo', translation: 'Banyo', example: 'Kupatilo je zauzeto.' },
      { word: 'Posao', pronunciation: 'PO-sa-o', translation: 'İş', example: 'Idem na posao u osam.' },
      { word: 'Umoran/Umorna sam', pronunciation: 'U-mo-ran/U-mor-na sam', translation: 'Yorgunum (eril/dişil)', example: 'Umoran sam, loše sam spavao.' },
    ],
    grammarNote: {
      title: '"-se" İle Biten Dönüşlü Fiiller',
      body: 'Sırpça çoğu günlük fiil "-se" ekini alır kanka: "buđim se" (uyanıyorum), "tuširam se" (duş alıyorum), "oblačim se" (giyiniyorum). Eylemi kendine yaptığın anlamına gelir. Unutma sakın — sadece "budim" dersen hiçbir anlamı olmaz.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se buđiš obično?', translation: 'Genelde saat kaçta uyanırsın?' },
      { speaker: 'B', serbian: 'U šest i po. Umoran sam uvek.', translation: 'Altı buçukta. Her zaman pestilim çıkmış vaziyetteyim.' },
      { speaker: 'A', serbian: 'Piješ li kafu ujutru?', translation: 'Sabahları kahve içer misin?' },
      { speaker: 'B', serbian: 'Naravno! Bez kafe ne mogu na posao.', translation: 'Ayıpsın! Kahvesiz işe falan gidemem.' },
    ],
  },

  'daily-2': {
    scenario: "Novi Beograd'daki arkadaşın evini sana gezdiriyor. Her odayı ve eşyayı tek tek sayıyor — ona ayak uydurup gördüğün şeyler hakkında Sırpça soru sorman lazım!",
    vocabulary: [
      { word: 'Kuća / Stan', pronunciation: 'KU-ça / stan', translation: 'Ev / Daire', example: 'Živim u stanu u centru.' },
      { word: 'Dnevna soba', pronunciation: 'DNEV-na SO-ba', translation: 'Oturma odası / Salon', example: 'Dnevna soba je velika.' },
      { word: 'Kuhinja', pronunciation: 'KU-hi-nya', translation: 'Mutfak', example: 'Kuhinju koristim svaki dan.' },
      { word: 'Prozor', pronunciation: 'PRO-zor', translation: 'Pencere', example: 'Otvori prozor, molim te.' },
      { word: 'Vrata', pronunciation: 'VRA-ta', translation: 'Kapı', example: 'Zatvori vrata, hvala.' },
      { word: 'Gledam televiziju', pronunciation: 'GLE-dam te-le-Vİ-zi-yu', translation: 'Televizyon İzliyorum', example: 'Gledam televiziju svake večeri.' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Ovo je dnevna soba. Sviđa ti se?', translation: 'Burası salon. Beğendin mi?' },
      { speaker: 'B', serbian: 'Da, lepo je! Veliki prozori.', translation: 'Evet lan güzelmiş! Camlar kocaman.' },
      { speaker: 'A', serbian: 'A tamo je kuhinja i kupatilo.', translation: 'Şurası da mutfakla banyo.' },
      { speaker: 'B', serbian: 'Odličan stan! Koliko si ovde?', translation: '10 numara ev! Ne zamandır buradasın kanka?' },
    ],
  },

  'daily-3': {
    scenario: "Belgrad'da bir ortak çalışma (co-working) alanında ilk günün kanka. İnsanlarla tanışıp ne iş yaptığını Sırpça anlatıyorsun!",
    vocabulary: [
      { word: 'Radim u…', pronunciation: 'RA-dim u', translation: '... da çalışıyorum', example: 'Radim u kancelariji.' },
      { word: 'Kancelarija', pronunciation: 'kan-tse-LA-ri-ya', translation: 'Ofis', example: 'Kancelarija je u centru.' },
      { word: 'Sastanak', pronunciation: 'SAS-ta-nak', translation: 'Toplantı', example: 'Imam sastanak u deset.' },
      { word: 'Učim srpski', pronunciation: 'U-çim Sırps-ki', translation: 'Sırpça öğreniyorum', example: 'Učim srpski već tri meseca.' },
      { word: 'Škola', pronunciation: 'ŞKO-la', translation: 'Okul', example: 'Škola je blizu.' },
      { word: 'Odmor', pronunciation: 'OD-mor', translation: 'Mola / Tatil', example: 'Kada je odmor?' },
    ],
    grammarNote: {
      title: 'Geniş Zaman "Raditi" (Çalışmak)',
      body: 'Ja radim (Ben çalışıyorum), Ti radiš (Sen çalışıyorsun), On/Ona radi (O çalışıyor), Mi radimo (Biz çalışıyoruz), Vi radite (Siz çalışıyorsunuz), Oni rade (Onlar çalışıyor). Sırpçada fiiller kişiye göre çekimlenir, sonlardaki eklere hep dikkat et kanka.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Čime se baviš?', translation: 'Ne iş yapıyorsun aga?' },
      { speaker: 'B', serbian: 'Radim u IT kompaniji. A ti?', translation: 'Bilişim şirketinde çalışıyorum, ya sen?' },
      { speaker: 'A', serbian: 'Ja sam slobodnjak. I učim srpski.', translation: 'Ben freelancer takılıyorum kanka. Ve Sırpça öğreniyorum.' },
      { speaker: 'B', serbian: 'Super! Srpski je težak, znam.', translation: 'Ooo efsane! Sırpça biraz beladır biliyorum.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // EMOTIONS
  // ═══════════════════════════════════════════════
  'emotions-1': {
    scenario: "Sırp dostun haftanın nasıl geçtiğini sormak için seni arıyor. Artık sadece 'dobro' falan yeterli değil — duygularını harbiden hissettiğin gibi dökmen lazım!",
    vocabulary: [
      { word: 'Srećan/Srećna sam', pronunciation: 'SRE-çan/SREÇ-na sam', translation: 'Mutluyum (eril/dişil)', example: 'Srećna sam što sam ovde.' },
      { word: 'Tužan/Tužna sam', pronunciation: 'TU-jan/TUJ-na sam', translation: 'Üzgünüm (eril/dişil)', example: 'Tužan sam što odlazim.' },
      { word: 'Ljut/Ljuta sam', pronunciation: 'lyut/LYU-ta sam', translation: 'Sinirliyim (eril/dişil)', example: 'Ljuta sam na njega.' },
      { word: 'Volim te', pronunciation: 'VO-lim te', translation: 'Seni seviyorum', example: 'Volim te, mama.' },
      { word: 'Nedostaješ mi', pronunciation: 'ne-DOS-ta-yeş mi', translation: 'Seni özledim', example: 'Nedostaješ mi svaki dan.' },
      { word: 'Usamljen/Usamljena sam', pronunciation: 'u-SAM-lyen/…na sam', translation: 'Yalnız hissediyorum', example: 'Malo sam usamljen u novom gradu.' },
    ],
    grammarNote: {
      title: 'Kelimelerdeki Cinsiyet Uyumu',
      body: 'Sırpçada sıfatlar kişinin cinsiyetine göre biçilir aga. "Srećan sam" erkeksen "Mutluyum", "Srećna sam" kadınsan "Mutluyum" demek. Öğrenirken genelde iki sonuca da dikkat et, "-a" eki dişildir.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Kako se osećaš?', translation: 'Nasıl hissediyorsun kendini?' },
      { speaker: 'B', serbian: 'Srećan sam ali malo usamljen.', translation: 'Mutluyum ama biraz yalnızım ya.' },
      { speaker: 'A', serbian: 'Razumem te. Nedostajiš mi kad nisi tu.', translation: 'Anlıyorum seni, ben de özlüyorum sen yokken.' },
      { speaker: 'B', serbian: 'Hvala. I ti meni nedostaješ.', translation: 'Sağ ol dostum, ben de seni özlüyorum.' },
    ],
  },

  'emotions-2': {
    scenario: "Muhabbette mevzu döndü dolaştı, Belgrad Avrupa'nın en iyi şehri mi konusuna geldi. Kankalarına kendi fikrini, katılıp katılmadığını direkt Sırpça belirtmek zorundasın!",
    vocabulary: [
      { word: 'Mislim da…', pronunciation: 'MİS-lim da', translation: 'Bence / Düşünüyorum ki', example: 'Mislim da je Beograd sjajan.' },
      { word: 'Po mom mišljenju', pronunciation: 'po mom miş-LYEN-yu', translation: 'Bana göre / Fikrimce', example: 'Po mom mišljenju, Beograd je pun života.' },
      { word: 'Slažem se', pronunciation: 'SLA-jem se', translation: 'Aynı fikirdeyim', example: 'Slažem se s tobom.' },
      { word: 'Ne slažem se', pronunciation: 'ne SLA-jem se', translation: 'Katılmıyorum', example: 'Ne slažem se, brate.' },
      { word: 'Možda', pronunciation: 'MOJ-da', translation: 'Belki / Olabilir', example: 'Možda imaš pravo.' },
      { word: 'Ne znam', pronunciation: 'ne znam', translation: 'Bilmiyorum', example: 'Ne znam, to je teško pitanje.' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Mislim da je Beograd najbolji grad na svetu!', translation: 'Bence Belgrad dünyadaki en efsane şehir!' },
      { speaker: 'B', serbian: 'Ne slažem se baš. Ali je odličan.', translation: 'Zerre katılmıyorum. Ama çok iyi şehir o ayrı.' },
      { speaker: 'A', serbian: 'Po mom mišljenju, nema boljeg noćnog života.', translation: 'Benim görüşüm, gece hayatında burası tek!' },
      { speaker: 'B', serbian: 'Tu se slažem! To je istina.', translation: 'İşte o noktada hemfikiriz! Katılıyorum.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEATHER
  // ═══════════════════════════════════════════════
  'weather-1': {
    scenario: "Fruška Gora dağına günübirlik bir trip atacaksınız kankalarla. Ama sokağa çıkmadan önce havanın gidişatını Sırpça değerlendirmeniz lazım!",
    vocabulary: [
      { word: 'Kakvo je vreme?', pronunciation: 'KAK-vo ye VRE-me', translation: 'Hava nasıl? (Dışarısı)', example: 'Kakvo je vreme danas?' },
      { word: 'Pada kiša', pronunciation: 'PA-da Kİ-şa', translation: 'Yağmur yağıyor', example: 'Pada kiša, uzmi kišobran.' },
      { word: 'Sunčano', pronunciation: 'SUN-ça-no', translation: 'Güneşli', example: 'Sutra će biti sunčano.' },
      { word: 'Hladno je', pronunciation: 'HLAD-no ye', translation: 'Hava soğuk', example: 'Hladno je, obuci jaknu.' },
      { word: 'Sneg', pronunciation: 'sneg', translation: 'Kar', example: 'Pada sneg! Divno!' },
      { word: 'Oblačno', pronunciation: 'OB-laç-no', translation: 'Bulutlu', example: 'Malo je oblačno ali neće padati.' },
    ],
    culturalTip: "Belgrad havası cidden dertlidir aga — yazın 40°C kavurur, kışın kemiklerini dondurur. Yerliler bu iki duruma da her zaman şikayetçi moddadır. 'Strašna vrućina!' (Berbat bir sıcak!) ya da 'Pakao od zime!' (Buz gibi lan!) derseniz direkt kanından biri sayılırsınız.",
    dialogue: [
      { speaker: 'A', serbian: 'Kakvo je vreme sutra na Fruškoj gori?', translation: 'Yarın Fruška Gora\'da hava nasıl oluyormuş?' },
      { speaker: 'B', serbian: 'Oblačno ujutru, ali posle podne sunčano.', translation: 'Sabah kapalı bulutlu, öğleden sonra parçalı ve güneşli.' },
      { speaker: 'A', serbian: 'Hoće li padati kiša?', translation: 'Kanka yağmur yağacak mı?' },
      { speaker: 'B', serbian: 'Verovatno ne. Ali ponesi jaknu — hladno je gore.', translation: 'Pek sanmıyorum ama ceketini al — orası donuyor.' },
    ],
  },

  'weather-2': {
    scenario: "Ortamda muhabbet esnasında en sevdiğin mevsimin ne olduğu soruldu aga. Sırpça hangi mevsim olduğunu ve oralarda neler takıldığını patlatman gerekiyor!",
    vocabulary: [
      { word: 'Proleće', pronunciation: 'pro-LE-çe', translation: 'İlkbahar', example: 'U proleće cveća i kafane.' },
      { word: 'Leto', pronunciation: 'LE-to', translation: 'Yaz', example: 'Leto u Beogradu je haotično.' },
      { word: 'Jesen', pronunciation: 'YE-sen', translation: 'Sonbahar', example: 'Jesen je najlepše doba godine.' },
      { word: 'Zima', pronunciation: 'Zİ-ma', translation: 'Kış', example: 'Zima je hladna ali ima čari.' },
      { word: 'Godišnje doba', pronunciation: 'go-DİŞ-nye DO-ba', translation: 'Mevsim', example: 'Koje godišnje doba voliš?' },
      { word: 'Volim leto', pronunciation: 'VO-lim LE-to', translation: 'Yazı seviyorum', example: 'Volim leto jer je toplo.' },
    ],
    culturalTip: 'Novi Sad\'daki "Exit Festival" efsanesi her sene Temmuz ayında Balkanları sallar — Güneydoğu Avrupa\'nın en harika festivalidir. Kime sorsan sana bi yaz festivali anısı patlatır. Genç yerlilere Exit falan dersen anında dost olursun.',
    dialogue: [
      { speaker: 'A', serbian: 'Koje godišnje doba najviše voliš?', translation: 'Hangi mevsim favoriniz bakalım?' },
      { speaker: 'B', serbian: 'Volim leto! Toplo je i ima puno eventi.', translation: 'Yaz tabii ki kanka! Sıcak hava, bin tane etkinlik!' },
      { speaker: 'A', serbian: 'Ja više volim jesen. Mirnije je.', translation: 'Ben sonbaharı tutuyorum. Daha chill ve sakin.' },
      { speaker: 'B', serbian: 'Svako svoje! Zima mi je najgora.', translation: 'Herkesin kendi zevki de benim kışla aram kanlı bıçaklı aga.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FAMILY
  // ═══════════════════════════════════════════════
  'family-1': {
    scenario: "Sırp kankan albümü çıkardı ve başlıyor amcasını ninesini anlatmaya aga. Muhabbetin bütün gece sürmemesi için aile terimlerini çakmalısın!",
    vocabulary: [
      { word: 'Majka / Mama', pronunciation: 'MAY-ka / MA-ma', translation: 'Anne', example: 'Moja mama je doktor.' },
      { word: 'Otac / Tata', pronunciation: 'O-tats / TA-ta', translation: 'Baba', example: 'Moj tata radi u fabrici.' },
      { word: 'Brat', pronunciation: 'brat', translation: 'Erkek Kardeş / Abi', example: 'Imam jednog brata.' },
      { word: 'Sestra', pronunciation: 'SES-tra', translation: 'Kız Kardeş / Abla', example: 'Moja sestra je mlađa.' },
      { word: 'Baka', pronunciation: 'BA-ka', translation: 'Nene / Büyükanne', example: 'Baka pravi najboliju sarmu.' },
      { word: 'Deda', pronunciation: 'DE-da', translation: 'Dede / Büyükbaba', example: 'Deda je penzioner.' },
    ],
    culturalTip: 'Sırplarda aile bağları sağlamdır koçum. Pazar günleri nene evinde yapılan "ručak" öğle yemeği ritüeli kutsaldır. İstisnasız hepsi "Bakanın" yemeklerini Michelin yıldızlı lokantalara tercih eder.',
    dialogue: [
      { speaker: 'A', serbian: 'Ko je ovo na fotografiji?', translation: 'Dostum fotoğraftaki kim böyle yahu?' },
      { speaker: 'B', serbian: 'To je moja baka. Ima 78 godina.', translation: 'Nenem kanka o. Yaşı 78 maşallah.' },
      { speaker: 'A', serbian: 'A ovo?', translation: 'E bu kim?' },
      { speaker: 'B', serbian: 'Moj brat i njegova žena. Mladi su.', translation: 'Abimle yengem ya. Daha gençler.' },
    ],
  },

  'family-2': {
    scenario: "Yan masadan meraklı bir amca sana aile yaşantınla ilgili Sırpça soru soruluyor. Aileni — kaç kişi olduklarını, nasıllarını — bi güzel anlatman şart!",
    vocabulary: [
      { word: 'Porodica', pronunciation: 'po-RO-di-tsa', translation: 'Aile', example: 'Moja porodica je mala.' },
      { word: 'Velika porodica', pronunciation: 'VE-li-ka po-RO-di-tsa', translation: 'Büyük kalabalık aile', example: 'Srbi obično imaju veliku porodicu.' },
      { word: 'Star/Stara', pronunciation: 'star/STA-ra', translation: 'Yaşlı / Eski (eril/dişil)', example: 'Moj otac je star.' },
      { word: 'Mlad/Mlada', pronunciation: 'mlad/MLA-da', translation: 'Genç (eril/dişil)', example: 'Moja sestra je mlada.' },
      { word: 'Imam braću i sestre', pronunciation: 'İ-mam BRA-çu i SES-tre', translation: 'Kardeşlerim var', example: 'Imam dvoje braće i jednu sestru.' },
      { word: 'Jedino dete', pronunciation: 'YE-di-no DE-te', translation: 'Tek çocuk', example: 'Ja sam jedino dete.' },
    ],
    grammarNote: {
      title: '"Braća" — Kafa Karıştıran Çoğul',
      body: '"Brat" (bir kardeş), ama çok erkek kardeş varsa "braća". Dişil gibi görünüyor değil mi aga? Ama aslında topluluk ismidir. Cebi delmesin diye ezberlemek lazım o kuralları.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Imaš li braću i sestre?', translation: 'Aga hayatta mıdır kardeşlerin abin ablan falan?' },
      { speaker: 'B', serbian: 'Da, imam dva brata i jednu sestru.', translation: 'Aynen aslan parçası. İki abim bir kız kardeşim var.' },
      { speaker: 'A', serbian: 'Velika porodica! Živite zajedno?', translation: 'Büyük aşiretmiş maşallah. Toplu mu kalıyorsunuz?' },
      { speaker: 'B', serbian: 'Ne, svako živi posebno. Ali viđamo se svake nedelje.', translation: 'Yok ya, hepimiz dağıldık da her pazar fix görüşürüz birbirmizle.' },
    ],
  },
};

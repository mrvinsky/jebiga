import { LessonContent } from './contentTypes';

export const lessonContentE: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // HEALTH & EMERGENCIES
  // ═══════════════════════════════════════════════
  'health-1': {
    scenario: "Belgrad'da rakija maratonunun ardından sabah uyandın ve her yerin ağrıyor. Ya da gerçek bir acil var. Her iki durumda da Sırp doktoruna ne diyeceğini bilmen şart. Hayat kurtarır, kanka!",
    vocabulary: [
      { word: 'Boli me glava', pronunciation: 'BO-li me GLA-va', translation: 'Başım ağrıyor', example: 'Boli me glava od rakije.' },
      { word: 'Boli me stomak', pronunciation: 'BO-li me STO-mak', translation: 'Karnım ağrıyor', example: 'Boli me stomak, ne mogu da jedem.' },
      { word: 'Pomozite!', pronunciation: 'po-MO-zi-te', translation: 'Yardım edin! (resmi çoğul)', example: 'Pomozite! Pao je čovek!' },
      { word: 'Bolnica', pronunciation: 'BOL-ni-tsa', translation: 'Hastane', example: 'Gde je najbliža bolnica?' },
      { word: 'Imam temperaturu', pronunciation: 'İ-mam tem-pe-ra-TU-ru', translation: 'Ateşim var', example: 'Imam temperaturu i kašalj.' },
      { word: 'Zovite hitnu pomoć!', pronunciation: 'ZO-vi-te HİT-nu PO-moç', translation: 'Ambulans çağırın!', example: 'Zovite hitnu pomoć, brzo!' },
      { word: 'Lek', pronunciation: 'lek', translation: 'İlaç', example: 'Ima li leka za bol?' },
    ],
    grammarNote: {
      title: '"Boli me" Yapısı — Sırpçanın En Pratik Kalıbı',
      body: 'Türkçedeki "-im ağrıyor" ifadesini Sırpçada "Boli me + ağrıyan organ" ile yaparsın. "Boli me glava" = başım ağrıyor, "Boli me zub" = dişim ağrıyor. Hep aynı yapı, sadece organı değiştir, pratik değil mi kanka?',
    },
    culturalTip: "Sırpistan'da 194 numarasını aradığında ambulans geliyor. Acil servis (Hitna pomoć) genellikle oldukça hızlı ve düzgündür. Ama sigortan yoksa cepten ödeme hazır ol. Promaja'dan (cereyan) önce sigortanı düşün!",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, boli me grlo i imam temperaturu.', translation: 'İyi günler doktor, boğazım ağrıyor ve ateşim var.' },
      { speaker: 'B', serbian: 'Od kada? Koliku temperaturu imate?', translation: 'Ne zamandan beri? Ateşiniz kaç?' },
      { speaker: 'A', serbian: 'Od jutros. Trideset osam i po.', translation: 'Bu sabahtan beri. Otuz sekiz buçuk.' },
      { speaker: 'B', serbian: 'Razumem. Daću vam recept za antibiotik i lek za temperaturu.', translation: 'Anladım. Size antibiyotik ve ateş düşürücü için reçete yazacağım.' },
    ],
  },

  'health-2': {
    scenario: "Başın bomba gibi çatlıyor ve en yakın eczaneye girdikten sonra ne diyeceğini bilmiyorsun. Sırp eczacılar çok yardımseverdir ama Sırpça konuşman büyük puan yazdırır!",
    vocabulary: [
      { word: 'Apoteka', pronunciation: 'a-PO-te-ka', translation: 'Eczane', example: 'Gde je najbliža apoteka?' },
      { word: 'Imate li analgetik?', pronunciation: 'İ-ma-te li a-nal-GE-tik', translation: 'Ağrı kesici var mı?', example: 'Imate li analgetik za jaku glavobolju?' },
      { word: 'Alergija', pronunciation: 'a-ler-GI-ya', translation: 'Alerji', example: 'Imam alergiju na penicilin.' },
      { word: 'Kašalj', pronunciation: 'KA-şalj', translation: 'Öksürük', example: 'Lek za kašalj, molim.' },
      { word: 'Recept', pronunciation: 'RE-tsept', translation: 'Reçete', example: 'Imam recept od doktora.' },
      { word: 'Aspirin', pronunciation: 'AS-pi-rin', translation: 'Aspirin', example: 'Dajte mi aspirin, molim.' },
    ],
    grammarNote: {
      title: '"Imate li…?" — Kibar Soru Kalıbı',
      body: '"Imate li…?" yapısı ağırbaşlı ve kibarca "...var mı?" demektir. Eczane veya resmi yerlerde bunu kullanmak seni anında terbiyeli bir yabancı yapacak. Kankalar arasında ise kısaltarak sadece "Ima li…?" dersin.',
    },
    culturalTip: "Sırpistan'da pek çok ilaç Türkiye ya da Batı'ya kıyasla çok daha ucuzdur ve eczaneler genellikle saatlerce açık kalır. Küçük rahatsızlıklar için doktora gitmeden önce eczacıya sor — Sırp eczacılar çok bilgilidir!",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan. Imate li nešto za jaku glavobolju?', translation: 'İyi günler. Şiddetli baş ağrısı için bir şeyiniz var mı?' },
      { speaker: 'B', serbian: 'Da, imam. Jeste li alergični na nešto?', translation: 'Evet var. Herhangi bir şeye alerjiniz var mı?' },
      { speaker: 'A', serbian: 'Alergičan sam na penicilin.', translation: 'Penisilline alerjim var.' },
      { speaker: 'B', serbian: 'Okej. Dat ću vam brufen. Bez recepta ide.', translation: 'Tamam. Size brufen vereyim. Reçetesiz gidiyor.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // BELGRADE & CITY
  // ═══════════════════════════════════════════════
  'belgrade-1': {
    scenario: "Belgrad'a yeni geldin ve tarihi yarımadayı keşfetmek istiyorsun. Kalemegdan kalesi, Knez Mihailova caddesi, Trg Republike meydanı... Rehber kitap fırlatıyorsun, sadece yerel sormak yeterli!",
    vocabulary: [
      { word: 'Centar', pronunciation: 'TSEN-tar', translation: 'Merkez, şehir merkezi', example: 'Idemo u centar večeras.' },
      { word: 'Most', pronunciation: 'most', translation: 'Köprü', example: 'Brankov most je lep.' },
      { word: 'Kalemegdan', pronunciation: 'ka-le-MEG-dan', translation: 'Belgrad\'ın tarihi kalesi ve parkı', example: 'Idemo na Kalemegdan!' },
      { word: 'Trg', pronunciation: 'trg', translation: 'Meydan', example: 'Trg Republike je u centru.' },
      { word: 'Ulica', pronunciation: 'U-li-tsa', translation: 'Cadde / Sokak', example: 'Knez Mihailova ulica je pešačka.' },
      { word: 'Kuda ideš?', pronunciation: 'KU-da İ-deş', translation: 'Nereye gidiyorsun?', example: 'Hej, kuda ideš ovako lepo obučen?' },
    ],
    grammarNote: {
      title: 'Yön ve Yer İsimleri',
      body: '"U" (içinde, içine) ve "na" (üzerinde, üzerine) Sırpçanın en kritik edatları. "Idem u kafanu" (kafanaya gidiyorum) ama "Idem na Kalemegdan" (Kalemegdan\'a gidiyorum). Türkçedeki -e/-a eki gibi ama ikiye ayrılıyor!',
    },
    culturalTip: "Belgrad'da 'Knez Mihailova' (Prens Mihail) caddesi tam anlamıyla şehrin nabzıdır. Yürüyüş caddesidir, alışveriş yaparsın, muhabbet edersin, buz dondurması yersin. Buraya gitmeden Belgrad gezdin sayılmazsın!",
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, kako da dođem do Kalemegdana?', translation: 'Affedersiniz, Kalemegdan\'a nasıl gidebilirim?' },
      { speaker: 'B', serbian: 'Pravo ovom ulicom, pa levo. Pet minuta hoda.', translation: 'Bu caddeden düz git, sonra sola dön. Beş dakika yürüyüş.' },
      { speaker: 'A', serbian: 'Hvala lepo! A ima li dobar restoran blizu?', translation: 'Çok sağ ol! Yakında iyi bir restoran var mı?' },
      { speaker: 'B', serbian: 'Skadarlija je tu! Tamo ima svega.', translation: 'Skadarlija tam orada! Orda her şey var kanka.' },
    ],
  },

  'belgrade-2': {
    scenario: "Sıcak yaz günü, nehir kenarında olmak istiyorsun. Tüm Belgratlılar Ada Ciganlija'da ya da splav'larda — bunların ne olduğunu bilmezsen o havada deliye dönersin!",
    vocabulary: [
      { word: 'Reka', pronunciation: 'RE-ka', translation: 'Nehir', example: 'Sava i Dunav su reke Beograda.' },
      { word: 'Sava / Dunav', pronunciation: 'SA-va / DU-nav', translation: 'Sava / Tuna nehirleri', example: 'Belgrad je na ušću Save i Dunava.' },
      { word: 'Splav', pronunciation: 'splav', translation: 'Nehir üstü yüzen mekan / bar', example: 'Idemo na splav noćas!' },
      { word: 'Ada', pronunciation: 'ADA', translation: 'Ada (Türkçeyle aynı!)', example: 'Ada Ciganlija je plaža Beograda.' },
      { word: 'Plaža', pronunciation: 'PLA-ja', translation: 'Plaj, kumsal', example: 'Idemo na plažu!' },
      { word: 'Kupanje', pronunciation: 'KU-pa-nye', translation: 'Yüzme / Banyo yapma', example: 'Kupanje u Savi je zabranjeno!' },
    ],
    grammarNote: {
      title: 'Eğlenceli Gerçek: "Ada" Türkçeyle Birebir Aynı!',
      body: 'Sırpça "Ada" kelimesi ada anlamına gelir — Türkçeyle birebir aynı! Bu iki dil arasında bunun gibi beklenmedik ortak kelimeler var: "kafa" (Sırpça = kafadar arası konuşma), "para" (her iki dilde de para), "budala" (her iki dilde de aptal). Balkan mirası kanka!',
    },
    culturalTip: "Ada Ciganlija Belgrad'ın açık hava plajıdır — deniz olmasa da nehir kenarı plajı her yaz milyonlarca Belgratlı ile dolar. Splavlar ise nehir üzerinde demirlenmiş ahşap mekanlar. Gece kulübü, kafana, restoran hepsi su üzerinde!",
    dialogue: [
      { speaker: 'A', serbian: 'Uf, vrućina! Idemo na Adu?', translation: 'Uf, ne sıcak! Ada\'ya gidelim mi?' },
      { speaker: 'B', serbian: 'Jeste! Uzmi kupaći, idemo na plažu.', translation: 'Evet! Mayo al, plaja gidiyoruz.' },
      { speaker: 'A', serbian: 'Možemo posle i na splav da sednemo.', translation: 'Sonra bir splay\'a da oturabiliriz.' },
      { speaker: 'B', serbian: 'Savršen plan! Ajde, voz ide za pet minuta.', translation: 'Mükemmel plan! Hadi, tren beş dakikaya kalkıyor.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // SERBIAN NIGHTLIFE
  // ═══════════════════════════════════════════════
  'night-1': {
    scenario: "Cuma akşamı. Kankalar toplanıyor, plan yapılıyor. Belgrad'ın gece hayatı sadece efsane değil — gerçek. Ama önce hazırlık, buluşma noktası, kim taksi çağırıyor — bunları Sırpçada çözmen lazım!",
    vocabulary: [
      { word: 'Idemo van?', pronunciation: 'İ-de-mo van', translation: 'Dışarı çıkıyoruz mu?', example: 'Idemo van večeras, ekipa?' },
      { word: 'Jesi li spreman/na?', pronunciation: 'YE-si li SPRE-man/na', translation: 'Hazır mısın? (erkek/kadın)', example: 'Jesi li spreman? Čekamo te!' },
      { word: 'Kuda idemo?', pronunciation: 'KU-da İ-de-mo', translation: 'Nereye gidiyoruz?', example: 'Kuda idemo, kafana ili klub?' },
      { word: 'Zovem taksi', pronunciation: 'ZO-vem TAK-si', translation: 'Taksi çağırıyorum', example: 'Zovem taksi, dođite dole.' },
      { word: 'Rezervacija', pronunciation: 're-zer-VA-tsi-ya', translation: 'Rezervasyon', example: 'Da li ste rezervisali?', },
      { word: 'Kafana', pronunciation: 'KA-fa-na', translation: 'Geleneksel Sırp meyhanesi', example: 'Idemo u kafanu, živa muzika je noćas!' },
    ],
    grammarNote: {
      title: '"Idemo" — Gidiyoruz Kalıbı',
      body: '"Idemo" tek başına "gidiyoruz" demek. Arkasına yer eklersin: "Idemo u kafanu" (kafanaya gidiyoruz), "Idemo na splav" (splay\'a gidiyoruz), "Idemo kući" (eve gidiyoruz). Basit ama çok işlevsel kanka!',
    },
    culturalTip: "Belgrad'ın gece hayatı saat 23:00'dan sonra başlar ve şafağa kadar sürer — hafta içi bile. 'Turbo folk' müziği kafanalarda çınlar, Sırp gençler sabaha geç kadar dans eder. Yorgun görünmek ayıptır — 'Ajde, još malo!' (Hadi biraz daha!)",
    dialogue: [
      { speaker: 'A', serbian: 'Hej ekipa! Idemo večeras na splav?', translation: 'Hey kankalar! Bu gece splay\'a gidiyoruz mu?' },
      { speaker: 'B', serbian: 'Jeste, ali treba rezervacija. Da li si rezervisao?', translation: 'Evet ama rezervasyon lazım. Rezervasyon yaptın mı?' },
      { speaker: 'A', serbian: 'Jesam, za deset osoba u ponoć!', translation: 'Yaptım, gece yarısı için 10 kişilik!' },
      { speaker: 'B', serbian: 'Odlično! Zovem taksi za pola dvanaest.', translation: 'Süper! On bir buçuk için taksi çağırıyorum.' },
    ],
  },

  'night-2': {
    scenario: "İçerdesin artık. Müzik ₓ ses +1000. Tıklım tıklım dolu splav. Garson geldi, bir tur daha lazım, masanı tutman gerekiyor — ve hepsi Sırpça!",
    vocabulary: [
      { word: 'Previše je buka', pronunciation: 'PRE-vi-şe ye BU-ka', translation: 'Çok gürültülü', example: 'Previše je buka, ne čujem te!' },
      { word: 'Još jedna runda!', pronunciation: 'YOŞ YED-na RUN-da', translation: 'Bir tur daha!', example: 'Konobar! Još jedna runda!' },
      { word: 'Sto je rezervisan', pronunciation: 'sto ye re-zer-Vİ-san', translation: 'Masa ayrılmış', example: 'Žao mi je, sto je rezervisan.' },
      { word: 'Ajde na podijum!', pronunciation: 'AY-de na PO-di-yum', translation: 'Dans pistine gidelim!', example: 'Ova pesma je luda, ajde na podijum!' },
      { word: 'Hoću kući', pronunciation: 'HO-çu KU-çi', translation: 'Eve gitmek istiyorum', example: 'Umoran sam, hoću kući.' },
      { word: 'Bakšiš', pronunciation: 'bak-şiş', translation: 'Bahşiş', example: 'Daj mu bakšiš, crno se mučio!' },
    ],
    grammarNote: {
      title: '"Još" Kelimesi — Her Yerde Karşına Çıkar',
      body: '"Još" (yoş diye okunur) Sırpçanın en çok kullanılan kelimelerinden biridir. "Još jedna" = bir tane daha, "još malo" = biraz daha, "još uvek" = hâlâ. Kafanada garsonla konuşurken hayatını kurtarır!',
    },
    culturalTip: "Sırp kafana kültüründe müzisyenler masadan masaya gezerek çalar ve sen bir 'bakšiš' (bahşiş) verirsin. Komşu masa daha yüksek fırlatırsa, müzisyenler o masaya yönelir. Bir tür müzik açık artırması!",
    dialogue: [
      { speaker: 'A', serbian: 'Konobar! Možemo još jednu rundu?', translation: 'Garson! Bir tur daha alabilir miyiz?' },
      { speaker: 'B', serbian: 'Naravno! Isti kao pre?', translation: 'Tabii ki! Aynısından mı?' },
      { speaker: 'A', serbian: 'Da, i još jednu vodu, molim.', translation: 'Evet, bir de su lütfen.' },
      { speaker: 'B', serbian: 'Ova pesma je mrak! Ajde na podijum!', translation: 'Bu şarkı efsane kanka! Dans pistine!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // ADVANCED GRAMMAR
  // ═══════════════════════════════════════════════
  'grammar-1': {
    scenario: "Kankan sana dün ne yaptığını soruyor ama sen sadece şimdiki zaman konuşabiliyorsun. Geçmiş zamansız konuşmak yarım kalmış bir hikaye gibidir — bunu düzeltelim!",
    vocabulary: [
      { word: 'Išao/Išla sam', pronunciation: 'İ-şao / İ-şla sam', translation: 'Gittim (erkek/kadın)', example: 'Išao sam u kafanu juče.' },
      { word: 'Radio/Radila sam', pronunciation: 'RA-di-o / RA-di-la sam', translation: 'Yaptım / Çalıştım (erkek/kadın)', example: 'Radila sam ceo dan.' },
      { word: 'Spavao/Spavala sam', pronunciation: 'spa-VA-o / spa-VA-la sam', translation: 'Uyudum (erkek/kadın)', example: 'Spavao sam do podneva.' },
      { word: 'Juče', pronunciation: 'YU-çe', translation: 'Dün', example: 'Šta si radio juče?' },
      { word: 'Išli smo', pronunciation: 'İ-şli smo', translation: 'Gittik (çoğul)', example: 'Išli smo zajedno na splav.' },
      { word: 'Jesam li…?', pronunciation: 'YE-sam li', translation: 'Ben mi…? (soru eki)', example: 'Jesam li dobro uradio?' },
    ],
    grammarNote: {
      title: 'Sırpçada Geçmiş Zaman — Cinsiyet Önemli!',
      body: 'Sırpçada geçmiş zaman fiilleri konuşmacının cinsiyetine göre değişir! Erkek: "išao sam", Kadın: "išla sam". Fiil sonu "-o" erkek, "-la" kadın için. "Sam" = "have" gibi yardımcı fiil. Yani Sırpça geçmiş zamanda kimin konuştuğu belli oluyor!',
    },
    culturalTip: "Sırplar hikaye anlatmayı sever. Bir kafanada oturduğunda, geçmiş zaman kullanarak anılarını paylaşmak seni 'pravi lik' (gerçek biri) yapacak. 'Jednom sam bio u Istanbulu...' (Bir keresinde İstanbul'daydım...) cümlesiyle başla ve izle!",
    dialogue: [
      { speaker: 'A', serbian: 'Šta si radio juče uveče?', translation: 'Dün akşam ne yaptın?' },
      { speaker: 'B', serbian: 'Išao sam na splav sa ekipom. Bilo je ludo!', translation: 'Ekiple splay\'a gittim. Çılgın bir geceydi!' },
      { speaker: 'A', serbian: 'Ozbiljno? Koliko ste ostali?', translation: 'Gerçekten mi? Ne kadar kaldınız?' },
      { speaker: 'B', serbian: 'Išli smo kući u šest ujutru. Spavao sam do podne.', translation: 'Sabah altıda eve gittik. Öğleye kadar uyudum.' },
    ],
  },

  'grammar-2': {
    scenario: "Yarın bir planın var ve bunu Sırpça anlatmak istiyorsun. Gelecek zaman biraz farklı çalışıyor. Ama merak etme — birkaç kuralla her şey yerine oturuyor!",
    vocabulary: [
      { word: 'Doći ću', pronunciation: 'DO-çi çu', translation: 'Gelirim / Geleceğim', example: 'Doći ću sutra u deset.' },
      { word: 'Ću / ćeš / će', pronunciation: 'çu / çeş / çe', translation: 'Gelecek zaman eki (ben/sen/o)', example: 'Ću, ćeš, će, ćemo, ćete, će.' },
      { word: 'Sutra', pronunciation: 'SU-tra', translation: 'Yarın', example: 'Sutra idemo na izlet.' },
      { word: 'Mogu da', pronunciation: 'MO-gu da', translation: 'Yapabilirim', example: 'Mogu da dođem u pet.' },
      { word: 'Ne bih hteo/htela', pronunciation: 'ne bih HTE-o/HTE-la', translation: 'İstemezdim (erkek/kadın)', example: 'Ne bih hteo da kasnim.' },
      { word: 'Šta misliš?', pronunciation: 'şta MİS-liş', translation: 'Ne düşünüyorsun?', example: 'Šta misliš, idemo li?' },
    ],
    grammarNote: {
      title: 'Gelecek Zaman: Fiil + "ću" Yardımcı Fiili',
      body: 'Sırpça gelecek zamanı "ću" (çu) ile yapılır: "Doći ću" = Geleceğim, "Ići ću" = Gideceğim. Ya da "Ću/ćeš/će" + mastar: "Ću da idem" = Gideceğim. Türkçedeki "-acağım" gibi basit! Sadece "ću" yi ezberle.',
    },
    culturalTip: "Sırplarda zaman kavramı Türklerden pek farklı değil kanka — 'sutra' (yarın) çoğunlukla 'yakında' anlamına gelir. 'Doći ću sutra' dediyse belki üç gün sonra da gelebilir. Balkan zamanında rahat ol!",
    dialogue: [
      { speaker: 'A', serbian: 'Šta ćeš raditi sutra?', translation: 'Yarın ne yapacaksın?' },
      { speaker: 'B', serbian: 'Ići ću na pijacu ujutru, pa ću kuvati ručak.', translation: 'Sabah pazara gideceğim, sonra öğle yemeği pişireceğim.' },
      { speaker: 'A', serbian: 'Mogu li da dođem? Mogu da donesem vino.', translation: 'Gelebilir miyim? Şarap getireyim.' },
      { speaker: 'B', serbian: 'Naravno! Dođi u dvanaest. Šta misliš?', translation: 'Tabii! Saat on ikide gel. Ne dersin?' },
    ],
  },

  // ═══════════════════════════════════════════════
  // PHONE & COMMUNICATION
  // ═══════════════════════════════════════════════
  'comm-1': {
    scenario: "Sırp kankan seni arıyor ama metrodesin, sinyal kötü. Ya da randevuya geç kalacaksın ve haber vermen lazım. Telefon Sırpçası, yüz yüze konuşmadan farklıdır — öğren!",
    vocabulary: [
      { word: 'Alo!', pronunciation: 'a-LO', translation: 'Alo! (telefona çıkışta)', example: 'Alo, ko je?' },
      { word: 'Ne mogu sada da pričam', pronunciation: 'ne MO-gu SA-da da PRİ-çam', translation: 'Şu an konuşamam', example: 'Hej, ne mogu sada da pričam, zovi me za sat.' },
      { word: 'Ne čujem te', pronunciation: 'ne ÇU-yem te', translation: 'Seni duyamıyorum', example: 'Možeš li glasnije? Ne čujem te.' },
      { word: 'Pisaću ti poruku', pronunciation: 'PİS-a-çu ti PO-ru-ku', translation: 'Mesaj atacağım', example: 'Kasniću, pisaću ti poruku.' },
      { word: 'Možeš li da me pozivaš?', pronunciation: 'MO-jeş li da me po-ZİV-aş', translation: 'Geri arar mısın?', example: 'Trenutno sam na sastanku, možeš li da me pozivaš?' },
      { word: 'Signal je loš', pronunciation: 'SİG-nal ye loş', translation: 'Sinyal kötü', example: 'Signal je loš, ne čujem ništa!' },
    ],
    grammarNote: {
      title: '"Ne mogu da" — Yapamamak',
      body: '"Mogu da" (yapabilirim) + fiil mastarı. Olumsuzunda başına "ne" ekle: "Ne mogu da pričam" (konuşamam), "Ne mogu da dođem" (gelemiyorum). Türkçedeki "-amıyorum" gibi. Bunu öğrenince özür üretmek çok kolaylaşıyor!',
    },
    culturalTip: "Sırpların telefon adabı: Konuşma bitmeden önce genellikle 'Ćao, ćao, ćao!' diye birkaç kez 'ćao' söylerler — tek değil. Bu garip değil, sadece samimi bir ayrılış ritüeli!",
    dialogue: [
      { speaker: 'A', serbian: 'Alo?', translation: 'Alo?' },
      { speaker: 'B', serbian: 'Hej! Gde si, čekamo te!', translation: 'Hey! Neredesin, seni bekliyoruz!' },
      { speaker: 'A', serbian: 'U metrou sam, signal je loš. Ne čujem te dobro.', translation: 'Metrodayım, sinyal kötü. Seni iyi duyamıyorum.' },
      { speaker: 'B', serbian: 'Okej, pisaću ti poruku. Ćao ćao!', translation: 'Tamam, sana mesaj atayım. Görüşürüz!' },
    ],
  },

  'comm-2': {
    scenario: "Belgrad'dayken yeni tanıştığın biriyle Instagram'dan takipleşiyorsunuz. Sırpça DM atmak, konum paylaşmak, gruba eklemek — sosyal medya Sırpçası da artık şart!",
    vocabulary: [
      { word: 'Poslao/Poslala sam poruku', pronunciation: 'POS-lao/POS-la-la sam PO-ru-ku', translation: 'Mesaj attım (erkek/kadın)', example: 'Poslao sam ti poruku na Instagram.' },
      { word: 'Pošalji mi lokaciju', pronunciation: 'PO-şal-yi mi lo-KA-tsi-yu', translation: 'Konumunu gönder', example: 'Gde si? Pošalji mi lokaciju.' },
      { word: 'Pišem u grupi', pronunciation: 'PİŞ-em u GRU-pi', translation: 'Grupta yazıyorum', example: 'Čekaj, pišem u grupi sad.' },
      { word: 'Pošalji mi sliku', pronunciation: 'PO-şal-yi mi SLİ-ku', translation: 'Fotoğraf gönder', example: 'Lepo izgleda! Pošalji mi sliku.' },
      { word: 'Isključio/la sam obaveštenja', pronunciation: 'is-KLU-çi-o/la sam o-ba-veş-TE-nya', translation: 'Sessize aldım (erkek/kadın)', example: 'Isključio sam obaveštenja grupe, previše poruka!' },
      { word: 'Dodao/la sam te', pronunciation: 'DO-dao/la sam te', translation: 'Seni ekledim (erkek/kadın)', example: 'Dodao sam te u grupu.' },
    ],
    grammarNote: {
      title: 'Sırpçada "Gönder" = "Pošalji"',
      body: '"Pošalji" (gönder) fiili günlük hayatta çok kullanılır. "Pošalji mi sliku" (fotoğraf gönder), "Pošalji mi link" (link gönder), "Pošalji mi lokaciju" (konum at). Başına "mi" (bana) ekleyince "bana gönder" olur. Bu kalıbı ezberle!',
    },
    culturalTip: "Sırp gençler sosyal medyada aktif olduğu kadar, yüz yüze muhabbeti de sever. Mesaj atmak yerine 'Dođi na kafu!' (Kahveye gel!) demek Sırp kültüründe daha kıymetlidir. Dijital değil, gerçek buluşma sanatı!",
    dialogue: [
      { speaker: 'A', serbian: 'Hej, gde ste vi? Čekamo vas na trgu!', translation: 'Heeey, neredesiniz? Meydanda bekliyoruz!' },
      { speaker: 'B', serbian: 'Kasnimu malo. Pošalji mi lokaciju, ne znam gde tačno.', translation: 'Biraz geç kalacağım. Konumunu at, tam olarak neresi bilmiyorum.' },
      { speaker: 'A', serbian: 'Poslala sam ti u DM. Vidiš li?', translation: 'DM\'den attım sana. Gördün mü?' },
      { speaker: 'B', serbian: 'Da, vidim! Doći ću za deset minuta. Sačekajte!', translation: 'Evet, gördüm! On dakikaya gelirim. Bekleyin!' },
    ],
  },

};

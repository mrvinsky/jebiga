import { LessonContent } from './contentTypes';

export const lessonContent: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // GREETINGS
  // ═══════════════════════════════════════════════
  'greetings-1': {
    scenario: "Belgrad'a yeni indin. Yüzündeki 'ben turistim' ifadesini gören sıcakkanlı bir yerli gülümsüyor. Hadi bakalım, ilk Sırpça kelimelerini kullanma zamanı!",
    vocabulary: [
      { word: 'Zdravo', pronunciation: 'ZDRAH-voh', translation: 'Merhaba', example: 'Zdravo! Ja sam Marko.' },
      { word: 'Ćao', pronunciation: 'çav', translation: 'Selam / Görüşürüz (günlük)', example: 'Ćao, kako si?' },
      { word: 'Doviđenja', pronunciation: 'do-vi-CEN-ya', translation: 'Hoşçakal', example: 'Doviđenja i hvala!' },
      { word: 'Dobro jutro', pronunciation: 'DOB-ro YUT-ro', translation: 'Günaydın', example: 'Dobro jutro, kako si?' },
      { word: 'Dobro veče', pronunciation: 'DOB-ro VE-çe', translation: 'İyi akşamlar', example: 'Dobro veče, svima!' },
      { word: 'Laku noć', pronunciation: 'LA-ku noç', translation: 'İyi geceler', example: 'Laku noć, spavaj lepo.' },
    ],
    grammarNote: {
      title: 'Resmi ve Günlük (Kanka) Dili',
      body: '"Zdravo" her yerde işe yarar. "Ćao" çok günlük bir kelimedir, sadece kankaların arasında kullanılır. "Dobar dan" (iyi günler) dükkan veya ofisler için idealdir.',
    },
    culturalTip: "Belgrad'da yerliler sağ-sol-sağ olmak üzere 3 kez yanaktan öpüşür. Şaşırma koçum, tuhaf değil sadece sıcaklık göstergesi!",
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Kako si?', translation: 'Merhaba! Nasılsın?' },
      { speaker: 'B', serbian: 'Dobro, hvala! A ti?', translation: "İyiyim, sağ ol! Ya sen?" },
      { speaker: 'A', serbian: 'I ja sam dobro. Doviđenja!', translation: "Ben de iyiyim kanka. Görüşürüz!" },
      { speaker: 'B', serbian: 'Ćao!', translation: 'Eyvallah, selam!' },
    ],
  },

  'greetings-2': {
    scenario: "Şehirde bir hostelde partidesin kanka. Herkes tanışıyor. Sırpça olarak adını, nereli olduğunu söylemen ve onlara da sorman lazım!",
    vocabulary: [
      { word: 'Zovem se', pronunciation: 'ZO-vem se', translation: 'Benim adım…', example: 'Zovem se Ana.' },
      { word: 'Drago mi je', pronunciation: 'DRA-go mi ye', translation: 'Tanıştığıma memnun oldum', example: 'Drago mi je, ja sam Petar.' },
      { word: 'Odakle si?', pronunciation: 'o-DAK-le si', translation: 'Nerelisin?', example: 'Odakle si? Iz Engleske?' },
      { word: 'Ja sam iz…', pronunciation: 'ya sam iz', translation: 'Ben ...lıyım', example: 'Ja sam iz Londona.' },
      { word: 'Koliko imaš godina?', pronunciation: 'KO-li-ko İ-maş GO-di-na', translation: 'Kaç yaşındasın?', example: 'Koliko imaš godina?' },
    ],
    grammarNote: {
      title: '"Zovem se" vs "Ja sam"',
      body: 'İkisi de "Benim adım / Ben" demek. "Zovem se" (Kendimi X olarak çağırıyorum) en doğal halidir. "Ja sam Marko" da gayet iyi ve sık kullanılır.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Zovem se Emma. A ti?', translation: 'Selam! Benim adım Emma. Senin?' },
      { speaker: 'B', serbian: 'Ja sam Nikola. Drago mi je!', translation: 'Ben Nikola. Tanıştığıma memnun oldum!' },
      { speaker: 'A', serbian: 'Odakle si, Nikola?', translation: 'Nerelisin, Nikola?' },
      { speaker: 'B', serbian: 'Ja sam iz Beograda. A ti?', translation: "Ben Belgrad'danım. Ya sen?" },
    ],
  },

  'greetings-3': {
    scenario: "Knez Mihailova sokağında bilmeden birine çarpıp kahvesini döktün. Hemen özür dileyip, nazik anlayışları için teşekkür etmen lazım.",
    vocabulary: [
      { word: 'Molim', pronunciation: 'MO-lim', translation: 'Lütfen / Bir şey değil', example: 'Jedno pivo, molim.' },
      { word: 'Hvala', pronunciation: 'HVA-la', translation: 'Teşekkürler / Sağ ol', example: 'Hvala lepo!' },
      { word: 'Izvinite', pronunciation: 'iz-Vİ-ni-te', translation: 'Affedersiniz (resmi)', example: 'Izvinite, gde je WC?' },
      { word: 'Izvini', pronunciation: 'iz-Vİ-ni', translation: 'Kusura bakma (günlük)', example: 'Izvini, nije namerno!' },
      { word: 'Žao mi je', pronunciation: 'JA-o mi ye', translation: 'Özür dilerim, üzgünüm', example: 'Žao mi je zbog svega.' },
      { word: 'Nema na čemu', pronunciation: 'NE-ma na ÇE-mu', translation: 'Bir şey değil / Rica ederim', example: 'Hvala! — Nema na čemu!' },
    ],
    culturalTip: '"Hvala lepo" (güzel bir şekilde teşekkürler) sadece "hvala" demekten çok daha samimidir kanka. Çaba göster, Sırplar bu emeği çok sever!',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite! Žao mi je!', translation: 'Affedersiniz! Çok üzgünüm!' },
      { speaker: 'B', serbian: 'Nema problema, stvarno.', translation: 'Cidden hiç sorun değil ya.' },
      { speaker: 'A', serbian: 'Hvala lepo na razumevanju!', translation: 'Anlayışın için çok sağ ol kanka!' },
      { speaker: 'B', serbian: 'Nema na čemu. Prijatan dan!', translation: 'Ne demek. İyi günler!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // NUMBERS
  // ═══════════════════════════════════════════════
  'numbers-1': {
    scenario: "Belgrad'da bir açık pazardasın ('pijaca'). Satıcı amcalar üstüne Sırpça fiyat bağırıyor. Eğer 1'den 10'a kadar sayıları bilmezsen kesin kazıklanırsın brate!",
    vocabulary: [
      { word: 'Jedan / Jedna', pronunciation: 'YE-dan / YE-dna', translation: 'Bir (eril/dişil)', example: 'Jedan kilogram.' },
      { word: 'Dva / Dve', pronunciation: 'dva / dve', translation: 'İki (eril/dişil)', example: 'Dva čaja, molim.' },
      { word: 'Tri', pronunciation: 'tri', translation: 'Üç', example: 'Tri kafe, hvala.' },
      { word: 'Četiri', pronunciation: 'ÇE-ti-ri', translation: 'Dört', example: 'Četiri osobe.' },
      { word: 'Pet', pronunciation: 'pet', translation: 'Beş', example: 'Pet evra.' },
      { word: 'Šest / Sedam / Osam / Devet / Deset', pronunciation: 'şest / SE-dam / O-sam / DE-vet / DE-set', translation: 'Altı / Yedi / Sekiz / Dokuz / On', example: 'Deset dinara.' },
    ],
    grammarNote: {
      title: 'Sayıların Cinsiyeti',
      body: '"Jedan" (1) ve "Dva" (2) kelimesinin sonuna geldiği cisme göre cinsiyeti değişiyor kanka. Örneğin "Jedan čaj" ama "Jedna kafa". "Dva stola" ama "Dve stolice". Diğer sayılarda bir değişim olmaz.',
    },
  },

  'numbers-2': {
    scenario: "Döviz bürosundasın ve biraz euro bozduracaksın. Her şeyi Sırpça anlatıyorlar, şimdi büyük sayılar oyun alanında!",
    vocabulary: [
      { word: 'Jedanaest – Dvadeset', pronunciation: 'ye-DA-na-est … DVA-de-set', translation: '11–20', example: 'Dvadeset evra.' },
      { word: 'Trideset', pronunciation: 'TRİ-de-set', translation: 'Otuz (30)', example: 'Trideset minuta.' },
      { word: 'Pedeset', pronunciation: 'PE-de-set', translation: 'Elli (50)', example: 'Pedeset dinara.' },
      { word: 'Sto', pronunciation: 'sto', translation: 'Yüz (100)', example: 'Sto evra, molim.' },
      { word: 'Hiljada', pronunciation: 'HİL-ya-da', translation: 'Bin (1000)', example: 'Dve hiljade dinara.' },
      { word: 'Milion', pronunciation: 'mi-li-YON', translation: 'Bir Milyon', example: 'Milion razloga.' },
    ],
    grammarNote: {
      title: 'Büyük Sayıları Kurmak',
      body: 'Sırpça sayıları mantıklı şekilde birleşiyor brate. 21 = "dvadeset jedan", 35 = "trideset pet". Sadece Onluk dilimleri söyle ve birliği ekle, araya "ve" falan sokmana gerek yok.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta?', translation: 'Kaç para?' },
      { speaker: 'B', serbian: 'Sto pedeset dinara.', translation: '150 dinar.' },
      { speaker: 'A', serbian: 'Imam samo dvesta. Imate kusur?', translation: 'Bende sadece 200 var. Bozuk paranız var mı?' },
      { speaker: 'B', serbian: 'Da, imam pedeset dinara kusur.', translation: 'Evet, elli dinar geri üstü var.' },
    ],
  },

  'numbers-3': {
    scenario: "Sırp kankalarınla Kalemegdan kalesinde buluşacaktın. Biri '7:30' diyor, diğeri Sırpça 'yedi buçuk'. Saati artık öğrenmelisin!",
    vocabulary: [
      { word: 'Koliko je sati?', pronunciation: 'KO-li-ko ye SA-ti', translation: 'Saat kaç?', example: 'Izvinite, koliko je sati?' },
      { word: 'Sat', pronunciation: 'sat', translation: 'Saat', example: 'Jedan sat.' },
      { word: 'Minut', pronunciation: 'Mİ-nut', translation: 'Dakika', example: 'Pet minuta.' },
      { word: 'Pola', pronunciation: 'PO-la', translation: 'Buçuk / Yarım', example: 'Pola osam = 7:30.' },
      { word: 'Podne', pronunciation: 'POD-ne', translation: 'Öğle vakti', example: 'Vidimo se u podne.' },
      { word: 'Ponoć', pronunciation: 'PO-noç', translation: 'Gece yarısı', example: 'Ne spavam do ponoći.' },
    ],
    grammarNote: {
      title: 'Sırplar Zamanı Nasıl Söyler',
      body: '"Pola tri" kelimesi harfiyen "üçün yarısı" yani 2:30 demek (üçe çeyrek falan değil). Bu başlarda kafa yakar! "U tri" = saat 3:00. "U četvrt do tri" = üçe çeyrek kala.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se vidimo?', translation: 'Saat kaçta görüşüyoruz?' },
      { speaker: 'B', serbian: 'U pola osam, ispred Kalemegdana.', translation: 'Yedi buçukta, Kalemegdan önünde.' },
      { speaker: 'A', serbian: 'Okej! Koliko je sati sada?', translation: 'Tamamdır! Şu an saat kaç?' },
      { speaker: 'B', serbian: 'Sada je šest sati i deset minuta.', translation: 'Şu an altıyı on geçiyor.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FOOD & DRINKS
  // ═══════════════════════════════════════════════
  'food-1': {
    scenario: "Skadarlija sokağında o meşhur 'kafana'ya girdin. Garson geldi ve bir şeyler içip hesap istemen lazım — üstelik hepsi Sırpça olacak koçum.",
    vocabulary: [
      { word: 'Voda', pronunciation: 'VO-da', translation: 'Su', example: 'Jedna voda, molim.' },
      { word: 'Pivo', pronunciation: 'Pİ-vo', translation: 'Bira', example: 'Jedno pivo, hvala.' },
      { word: 'Kafa', pronunciation: 'KA-fa', translation: 'Kahve', example: 'Domaća kafa, molim.' },
      { word: 'Sok', pronunciation: 'sok', translation: 'Meyve Suyu', example: 'Sok od jabuke.' },
      { word: 'Račun', pronunciation: 'RA-çun', translation: 'Hesap / Fiş', example: 'Račun, molim!' },
      { word: 'Gladan/Gladna sam', pronunciation: 'GLA-dan/GLA-dna sam', translation: 'Açım (eril/dişil)', example: 'Gladan sam, idemo da jedemo!' },
    ],
    culturalTip: 'Sırp kafanalarında, kimse seni masadan hemen kaldırmaz. Masada tek kahveyle saatlerce oturmak o kültürün hakkıdır. Hesabı sen "Račun, molim!" (hesap lütfen) demeden asla getirmezler.',
    dialogue: [
      { speaker: 'A', serbian: 'Šta ćete popiti?', translation: 'Ne içerdiniz?' },
      { speaker: 'B', serbian: 'Jedno pivo i jednu vodu, molim.', translation: 'Bir bira ve bir su lütfen.' },
      { speaker: 'A', serbian: 'Izvolite. Još nešto?', translation: 'Buyurun. Başka bir şey lazım mı?' },
      { speaker: 'B', serbian: 'Ne, hvala. Račun kada budete mogli!', translation: 'Yok eyvallah reis. Müsait olunca hesabı at!' },
    ],
  },

  'food-2': {
    scenario: "Sırp kankan seni pazar 'ručak'ı için evine yemeğe çağırdı. Masada bir sürü şey var, nasıl iltifat edeceğini falan bilmen lazım!",
    vocabulary: [
      { word: 'Ćevapi', pronunciation: 'çe-VA-pi', translation: 'Köfte rulosu (Cevabi)', example: 'Deset ćevapa sa lukom.' },
      { word: 'Kajmak', pronunciation: 'KAY-mak', translation: 'Klasik Balkan kaymağı', example: 'Ćevapi sa kajmakom su savršeni.' },
      { word: 'Rakija', pronunciation: 'RA-ki-ya', translation: 'Sırp meyve rakısı', example: 'Šljiva rakija je odlična.' },
      { word: 'Hleb', pronunciation: 'hleb', translation: 'Ekmek', example: 'Da li ima još hleba?' },
      { word: 'Ukusno', pronunciation: 'U-kus-no', translation: 'Lezzetli, enfes', example: 'Sve je ukusno, hvala!' },
      { word: 'Supa', pronunciation: 'SU-pa', translation: 'Çorba', example: 'Pileća supa je odlična.' },
    ],
    culturalTip: "Sırp misafirperverliği tehlikelidir — yemeği reddetmek dümdüz kabalıktır dostum. Sıklıkla 'Ukusno!' de, 'Domaće je uvek najbolje' (Ev yapımı her zaman iyidir) lafı ise 10 numara 5 yıldız sevap points yazdırır.",
    dialogue: [
      { speaker: 'A', serbian: 'Hajde, jedi! Ne budi stidljiv!', translation: 'Hadi gömül yemeğe! Utanma!' },
      { speaker: 'B', serbian: 'Sve je toliko ukusno! Šta je ovo?', translation: 'Her şey çok lezzetli kanka! Nedir bu?' },
      { speaker: 'A', serbian: 'To je kajmak. Probaj sa hlebom!', translation: 'O kaymak, ekmekle dene!' },
      { speaker: 'B', serbian: 'Neverovatno! Nikad nisam probao.', translation: 'Mükemmelmiş! Hic denememiştim sağ ol.' },
    ],
  },

  'food-3': {
    scenario: "Güneşli bir sabah ve sen Zeleni Venac pazarındasın. Satıcılar fiyatları uçuruyor, taze sebze ve meyveleri Sırpça çatır çatır pazarlıkla alman lazım!",
    vocabulary: [
      { word: 'Koliko košta?', pronunciation: 'KO-li-ko KOŞ-ta', translation: 'Kaç para, fiyatı ne?', example: 'Koliko košta kilogram jabuka?' },
      { word: 'Jabuka', pronunciation: 'YA-bu-ka', translation: 'Elma', example: 'Daj mi dva kilograma jabuka.' },
      { word: 'Paradajz', pronunciation: 'pa-ra-DAYS', translation: 'Domates', example: 'Svež paradajz, molim.' },
      { word: 'Skupo', pronunciation: 'SKU-po', translation: 'Pahalı', example: 'To je malo skupo.' },
      { word: 'Jeftino', pronunciation: 'YEF-ti-no', translation: 'Ucuz', example: 'Ovde je sve jeftino!' },
      { word: 'Kilogram', pronunciation: 'Kİ-lo-gram', translation: 'Kilo', example: 'Jedan kilogram, molim.' },
    ],
    grammarNote: {
      title: 'Pazar Kavgaları İçin Pratik Kelimeler',
      body: '"Dajte mi…" (Bana verin…), pazarlarda en çok kullanılan ifadedir dostum. Sorarken "Ima li…?" (Var mı…?) çok işine yarayacak. Bir iki kelime Sırpça, çaldığın teyze amcalar için fazlasıyla kıymetlidir.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta kilogram paradajza?', translation: 'Domatesin kilosu ne kadar aga?' },
      { speaker: 'B', serbian: 'Sto dvadeset dinara, gazda.', translation: '120 dinar, patron.' },
      { speaker: 'A', serbian: 'Malo skupo. Dajte mi pola kilograma.', translation: 'Braz tuzlu kanka. Sen bana yarım kilo ver.' },
      { speaker: 'B', serbian: 'Izvolite! Svež, direktno sa sela!', translation: 'Al babuş! Mis gibi köyden domatesler!' },
    ],
  },
};

import { LessonContent } from './contentTypes';

export const lessonContent: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // GREETINGS
  // ═══════════════════════════════════════════════
  'greetings-1': {
    scenario: "Belgrad'a yeni indin. Yüzündeki 'ben turistim' ifadesini gören sıcakkanlı bir yerli gülümsüyor. Hadi bakalım, ilk Sırpça kelimelerini kullanma zamanı!",
    scenarioEn: "You just landed in Belgrade. A friendly local smiles at you, noticing your 'I'm a tourist' look. Time to use your first Serbian words!",
    streetScenario: "Kanka Belgrad'a ayak bastın. Yüzünden turist olduğun fena belli. Hadi yerlilerle kaynaşıp ilk Sırpça laflarını patlatma zamanı!",
    vocabulary: [
      { word: 'Zdravo', pronunciation: 'ZDRAH-voh', translation: 'Merhaba', translationEn: 'Hello', streetTranslation: 'Naber / Selam', example: 'Zdravo! Ja sam Marko.' },
      { word: 'Ćao', pronunciation: 'çav', translation: 'Selam / Görüşürüz (günlük)', translationEn: 'Hi / Bye (casual)', streetTranslation: 'Eyvallah / Çav', example: 'Ćao, kako si?' },
      { word: 'Doviđenja', pronunciation: 'do-vi-CEN-ya', translation: 'Hoşçakal', translationEn: 'Goodbye', example: 'Doviđenja i hvala!' },
      { word: 'Dobro jutro', pronunciation: 'DOB-ro YUT-ro', translation: 'Günaydın', translationEn: 'Good morning', example: 'Dobro jutro, kako si?' },
      { word: 'Dobro veče', pronunciation: 'DOB-ro VE-çe', translation: 'İyi akşamlar', translationEn: 'Good evening', example: 'Dobro veče, svima!' },
      { word: 'Laku noć', pronunciation: 'LA-ku noç', translation: 'İyi geceler', translationEn: 'Good night', example: 'Laku noć, spavaj lepo.' },
    ],
    grammarNote: {
      title: 'Resmi ve Günlük (Kanka) Dili',
      titleEn: 'Formal vs. Casual Language',
      body: '"Zdravo" her yerde işe yarar. "Ćao" çok günlük bir kelimedir, sadece kankaların arasında kullanılır. "Dobar dan" (iyi günler) dükkan veya ofisler için idealdir.',
      bodyEn: '"Zdravo" works everywhere. "Ćao" is very casual, used only among friends. "Dobar dan" (good day) is ideal for shops or offices.',
    },
    culturalTip: "Belgrad'da yerliler sağ-sol-sağ olmak üzere 3 kez yanaktan öpüşür. Şaşırma koçum, tuhaf değil sadece sıcaklık göstergesi!",
    culturalTipEn: "In Belgrade, locals kiss three times on the cheek: right-left-right. Don't be surprised, it's not weird, just a sign of warmth!",
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Kako si?', translation: 'Merhaba! Nasılsın?', translationEn: 'Hello! How are you?' },
      { speaker: 'B', serbian: 'Dobro, hvala! A ti?', translation: "İyiyim, sağ ol! Ya sen?", translationEn: "Good, thanks! And you?" },
      { speaker: 'A', serbian: 'I ja sam dobro. Doviđenja!', translation: "Ben de iyiyim kanka. Görüşürüz!", translationEn: "I am good too. Goodbye!" },
      { speaker: 'B', serbian: 'Ćao!', translation: 'Eyvallah, selam!', translationEn: 'Bye!' },
    ],
  },

  'greetings-2': {
    scenario: "Şehirde bir hostelde partidesin kanka. Herkes tanışıyor. Sırpça olarak adını, nereli olduğunu söylemen ve onlara da sorman lazım!",
    scenarioEn: "You are at a hostel party in the city. Everyone is introducing themselves. You need to say your name, where you are from, and ask them too!",
    streetScenario: "Kanka hostelde ortamlara akıyorsun. Herkes birbirini kesiyor, senin de mevzuya girip adını sanını söylemen lazım!",
    vocabulary: [
      { word: 'Zovem se', pronunciation: 'ZO-vem se', translation: 'Benim adım…', translationEn: 'My name is...', example: 'Zovem se Ana.' },
      { word: 'Drago mi je', pronunciation: 'DRA-go mi ye', translation: 'Tanıştığıma memnun oldum', translationEn: 'Nice to meet you', example: 'Drago mi je, ja sam Petar.' },
      { word: 'Odakle si?', pronunciation: 'o-DAK-le si', translation: 'Nerelisin?', translationEn: 'Where are you from?', example: 'Odakle si? Iz Engleske?' },
      { word: 'Ja sam iz…', pronunciation: 'ya sam iz', translation: 'Ben ...lıyım', translationEn: 'I am from...', example: 'Ja sam iz Londona.' },
      { word: 'Koliko imaš godina?', pronunciation: 'KO-li-ko İ-maş GO-di-na', translation: 'Kaç yaşındasın?', translationEn: 'How old are you?', example: 'Koliko imaš godina?' },
    ],
    grammarNote: {
      title: '"Zovem se" vs "Ja sam"',
      titleEn: '"Zovem se" vs "Ja sam"',
      body: 'İkisi de "Benim adım / Ben" demek. "Zovem se" (Kendimi X olarak çağırıyorum) en doğal halidir. "Ja sam Marko" da gayet iyi ve sık kullanılır.',
      bodyEn: 'Both mean "My name is / I am". "Zovem se" (literal: I call myself X) is the most natural way. "Ja sam Marko" is also fine and frequently used.',
    },
    culturalTip: "Sırp isimleri genellikle -ić ile biter (Jokić, Đoković). Tanışırken 'Drago mi je' demek çok önemlidir, Sırplar nezaketi sever ama samimiyetten de asla ödün vermezler!",
    culturalTipEn: "Serbian surnames usually end in -ić (Jokić, Đoković). Saying 'Drago mi je' is very important; Serbians value politeness but are always authentic and friendly!",
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Zovem se Emma. A ti?', translation: 'Selam! Benim adım Emma. Senin?', translationEn: "Hi! My name is Emma. And you?" },
      { speaker: 'B', serbian: 'Ja sam Nikola. Drago mi je!', translation: 'Ben Nikola. Tanıştığıma memnun oldum!', translationEn: "I am Nikola. Nice to meet you!" },
      { speaker: 'A', serbian: 'Odakle si, Nikola?', translation: 'Nerelisin, Nikola?', translationEn: "Where are you from, Nikola?" },
      { speaker: 'B', serbian: 'Ja sam iz Beograda. A ti?', translation: "Ben Belgrad'danım. Ya sen?", translationEn: "I am from Belgrade. What about you?" },
    ],
  },

  'greetings-3': {
    scenario: "Knez Mihailova sokağında bilmeden birine çarpıp kahvesini döktün. Hemen özür dileyip, nazik anlayışları için teşekkür etmen lazım.",
    scenarioEn: "On Knez Mihailova Street, you accidentally bumped into someone and spilled their coffee. You need to apologize immediately and thank them for their kind understanding.",
    streetScenario: "Knez Mihailova'da yürürken bilmeden izbandut gibi birinin kahvesini döktün. Kanka dayak yemeden acil özür dilemen lazım!",
    vocabulary: [
      { word: 'Molim', pronunciation: 'MO-lim', translation: 'Lütfen / Bir şey değil', translationEn: 'Please / You are welcome', example: 'Jedno pivo, molim.' },
      { word: 'Hvala', pronunciation: 'HVA-la', translation: 'Teşekkürler / Sağ ol', translationEn: 'Thanks / Thank you', example: 'Hvala lepo!' },
      { word: 'Izvinite', pronunciation: 'iz-Vİ-ni-te', translation: 'Affedersiniz (resmi)', translationEn: 'Excuse me / I am sorry (formal)', example: 'Izvinite, gde je WC?' },
      { word: 'Izvini', pronunciation: 'iz-Vİ-ni', translation: 'Kusura bakma (günlük)', translationEn: 'Sorry / Excuse me (casual)', example: 'Izvini, nije namerno!' },
      { word: 'Žao mi je', pronunciation: 'JA-o mi ye', translation: 'Özür dilerim, üzgünüm', translationEn: 'I am sorry / I regret', example: 'Žao mi je zbog svega.' },
      { word: 'Nema na čemu', pronunciation: 'NE-ma na ÇE-mu', translation: 'Bir şey değil / Rica ederim', translationEn: 'You are welcome / No problem', example: 'Hvala! — Nema na čemu!' },
    ],
    culturalTip: '"Hvala lepo" (güzel bir şekilde teşekkürler) sadece "hvala" demekten çok daha samimidir kanka. Çaba göster, Sırplar bu emeği çok sever!',
    culturalTipEn: '"Hvala lepo" (thank you very much/nicely) is much more heartfelt than just "hvala". Put in the effort; Serbians love it when you try!',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite! Žao mi je!', translation: 'Affedersiniz! Çok üzgünüm!', translationEn: 'Excuse me! I am so sorry!' },
      { speaker: 'B', serbian: 'Nema problema, stvarno.', translation: 'Cidden hiç sorun değil ya.', translationEn: 'No problem, really.' },
      { speaker: 'A', serbian: 'Hvala lepo na razumevanju!', translation: 'Anlayışın için çok sağ ol kanka!', translationEn: 'Thank you very much for your understanding!' },
      { speaker: 'B', serbian: 'Nema na čemu. Prijatan dan!', translation: 'Ne demek. İyi günler!', translationEn: 'You are welcome. Have a nice day!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // NUMBERS
  // ═══════════════════════════════════════════════
  'numbers-1': {
    scenario: "Belgrad'da bir açık pazardasın ('pijaca'). Satıcı amcalar üstüne Sırpça fiyat bağırıyor. Eğer 1'den 10'a kadar sayıları bilmezsen kesin kazıklanırsın brate!",
    scenarioEn: "You're at an open-air market ('pijaca') in Belgrade. Vendors are shouting prices at you in Serbian. If you don't know the numbers from 1 to 10, you'll definitely get ripped off, mate!",
    streetScenario: "Belgrad'da açık pazardasın (pijaca). Dayılar üzerine Sırpça fiyat fırlatıyor. 1'den 10'a kadar sayamazsan donuna kadar alırlar brate!",
    vocabulary: [
      { word: 'Jedan / Jedna', pronunciation: 'YE-dan / YE-dna', translation: 'Bir (eril/dişil)', translationEn: 'One (masc/fem)', example: 'Jedan kilogram.' },
      { word: 'Dva / Dve', pronunciation: 'dva / dve', translation: 'İki (eril/dişil)', translationEn: 'Two (masc/fem)', example: 'Dva čaja, molim.' },
      { word: 'Tri', pronunciation: 'tri', translation: 'Üç', translationEn: 'Three', example: 'Tri kafe, hvala.' },
      { word: 'Četiri', pronunciation: 'ÇE-ti-ri', translation: 'Dört', translationEn: 'Four', example: 'Četiri osobe.' },
      { word: 'Pet', pronunciation: 'pet', translation: 'Beş', translationEn: 'Five', example: 'Pet evra.' },
      { word: 'Šest / Sedam / Osam / Devet / Deset', pronunciation: 'şest / SE-dam / O-sam / DE-vet / DE-set', translation: 'Altı / Yedi / Sekiz / Dokuz / On', translationEn: '6 / 7 / 8 / 9 / 10', example: 'Deset dinara.' },
    ],
    grammarNote: {
      title: 'Sayıların Cinsiyeti',
      titleEn: 'Gender of Numbers',
      body: '"Jedan" (1) ve "Dva" (2) kelimesinin sonuna geldiği cisme göre cinsiyeti değişiyor kanka. Örneğin "Jedan čaj" ama "Jedna kafa". "Dva stola" ama "Dve stolice". Diğer sayılarda bir değişim olmaz.',
      bodyEn: 'The gender of "Jedan" (1) and "Dva" (2) changes depending on the noun they modify. For example, "Jedan čaj" (masc.) but "Jedna kafa" (fem.). Same for "Dva stola" vs "Dve stolice". Other numbers remain the same.',
    },
    culturalTip: "Sırp pazarlarında (pijaca) elinle 3 parmağını (baş, işaret ve orta parmak) göstererek sayı saymak 'Sırp usulü' selamlaşmayı da içerir. Dikkat et, orta parmağın araya kaçmasın!",
    culturalTipEn: "At Serbian markets (pijaca), counting with three fingers (thumb, index, and middle) also doubles as a 'Serbian-style' greeting. Be careful not to use the middle finger exclusively!",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan! Jedan kilogram jabuka, molim.', translation: 'İyi günler! Bir kilo elma lütfen.', translationEn: 'Good day! One kilo of apples, please.' },
      { speaker: 'B', serbian: 'Izvolite. Još nešto?', translation: 'Buyurun. Başka bir şey?', translationEn: 'Here you go. Anything else?' },
      { speaker: 'A', serbian: 'Samo to. Koliko košta?', translation: 'Sadece bu. Ne kadar?', translationEn: 'Just that. How much?' },
      { speaker: 'B', serbian: 'Pet dinara.', translation: 'Beş dinar.', translationEn: 'Five dinars.' },
    ],
  },

  'numbers-2': {
    scenario: "Döviz bürosundasın ve biraz euro bozduracaksın. Her şeyi Sırpça anlatıyorlar, şimdi büyük sayılar oyun alanında!",
    scenarioEn: "You are at a currency exchange office and you are going to exchange some euros. They tell you everything in Serbian, now big numbers are in the playground!",
    streetScenario: "Döviz bürosunda tefeci dayıyla göz gözesin. Euro bozduracaksın, büyük sayıları bilmezsen kurdan sağlam tokat yersin!",
    vocabulary: [
      { word: 'Jedanaest – Dvadeset', pronunciation: 'ye-DA-na-est … DVA-de-set', translation: '11–20', translationEn: '11–20', example: 'Dvadeset evra.' },
      { word: 'Trideset', pronunciation: 'TRİ-de-set', translation: 'Otuz (30)', translationEn: 'Thirty (30)', example: 'Trideset minuta.' },
      { word: 'Pedeset', pronunciation: 'PE-de-set', translation: 'Elli (50)', translationEn: 'Fifty (50)', example: 'Pedeset dinara.' },
      { word: 'Sto', pronunciation: 'sto', translation: 'Yüz (100)', translationEn: 'Hundred (100)', example: 'Sto evra, molim.' },
      { word: 'Hiljada', pronunciation: 'HİL-ya-da', translation: 'Bin (1000)', translationEn: 'Thousand (1000)', example: 'Dve hiljade dinara.' },
      { word: 'Milion', pronunciation: 'mi-li-YON', translation: 'Bir Milyon', translationEn: 'One Million', example: 'Milion razloga.' },
    ],
    grammarNote: {
      title: 'Büyük Sayıları Kurmak',
      titleEn: 'Combining Large Numbers',
      body: 'Sırpça sayıları mantıklı şekilde birleşiyor brate. 21 = "dvadeset jedan", 35 = "trideset pet". Sadece Onluk dilimleri söyle ve birliği ekle, araya "ve" falan sokmana gerek yok.',
      bodyEn: 'Serbian numbers combine logically, brother. 21 = "dvadeset jedan", 35 = "trideset pet". Simply say the tens then add the ones, no need for "and" in between.',
    },
    culturalTip: "Sırbistan'da hala dinar kullanılıyor. Küçük dükkanlarda büyük banknot (örn: 5000 dinar) uzatmak dert olabilir. Her zaman 'kusur' (para üstü) için küçük paraların olsun kanka.",
    culturalTipEn: "Serbia still uses the Dinar. Using large bills (e.g., 5000 dinars) in small shops can be problematic. Always keep smaller bills for 'kusur' (change), mate.",
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta?', translation: 'Kaç para?', translationEn: 'How much is it?' },
      { speaker: 'B', serbian: 'Sto pedeset dinara.', translation: '150 dinar.', translationEn: 'One hundred and fifty dinars.' },
      { speaker: 'A', serbian: 'Imam samo dvesta. Imate kusur?', translation: 'Bende sadece 200 var. Bozuk paranız var mı?', translationEn: 'I only have two hundred. Do you have change?' },
      { speaker: 'B', serbian: 'Da, imam pedeset dinara kusur.', translation: 'Evet, elli dinar geri üstü var.', translationEn: 'Yes, I have fifty dinars change.' },
    ],
  },

  'numbers-3': {
    scenario: "Sırp kankalarınla Kalemegdan kalesinde buluşacaktın. Biri '7:30' diyor, diğeri Sırpça 'yedi buçuk'. Saati artık öğrenmelisin!",
    scenarioEn: "You were supposed to meet your Serbian friends at the Kalemegdan fortress. One says '7:30', the other says 'half past seven' in Serbian. It's time to learn the time!",
    streetScenario: "Kankalarla Kalemegdan'da buluşacan. Biri '7:30' diyor diğeri 'yedi buçuk' diyor. Saati çözemezsen ağaç olursun orada!",
    vocabulary: [
      { word: 'Koliko je sati?', pronunciation: 'KO-li-ko ye SA-ti', translation: 'Saat kaç?', translationEn: 'What time is it?', example: 'Izvinite, koliko je sati?' },
      { word: 'Sat', pronunciation: 'sat', translation: 'Saat', translationEn: 'Hour / O\'clock', example: 'Jedan sat.' },
      { word: 'Minut', pronunciation: 'Mİ-nut', translation: 'Dakika', translationEn: 'Minute', example: 'Pet minuta.' },
      { word: 'Pola', pronunciation: 'PO-la', translation: 'Buçuk / Yarım', translationEn: 'Half / Half past', example: 'Pola osam = 7:30.' },
      { word: 'Podne', pronunciation: 'POD-ne', translation: 'Öğle vakti', translationEn: 'Noon', example: 'Vidimo se u podne.' },
      { word: 'Ponoć', pronunciation: 'PO-noç', translation: 'Gece yarısı', translationEn: 'Midnight', example: 'Ne spavam do ponoći.' },
    ],
    grammarNote: {
      title: 'Sırplar Zamanı Nasıl Söyler',
      titleEn: 'How Serbians Tell Time',
      body: '"Pola tri" kelimesi harfiyen "üçün yarısı" yani 2:30 demek (üçe çeyrek falan değil). Bu başlarda kafa yakar! "U tri" = saat 3:00. "U četvrt do tri" = üçe çeyrek kala.',
      bodyEn: '"Pola tri" literally means "half of three", which is 2:30 (not quarter to three). This can be confusing at first! "U tri" = at 3:00. "U četvrt do tri" = at quarter to three.',
    },
    culturalTip: "Balkanlarda 'Sutra' (yarın) kelimesi biraz esnektir. Eğer biriyle 'pola osam'da buluşacaksan, Sırp vaktine göre 8 civarı orada olman yeterli olabilir. Dakiklik her zaman şart değil!",
    culturalTipEn: "In the Balkans, the word 'Sutra' (tomorrow) is a bit flexible. If you're meeting someone at 'pola osam' (7:30), showing up around 8:00 (Serbian time) might be perfectly fine. Punctuality isn't always strictly required!",
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se vidimo?', translation: 'Saat kaçta görüşüyoruz?', translationEn: 'What time are we meeting?' },
      { speaker: 'B', serbian: 'U pola osam, ispred Kalemegdana.', translation: 'Yedi buçukta, Kalemegdan önünde.', translationEn: 'At half-past seven, in front of Kalemegdan.' },
      { speaker: 'A', serbian: 'Okej! Koliko je sati sada?', translation: 'Tamamdır! Şu an saat kaç?', translationEn: 'Okay! What time is it now?' },
      { speaker: 'B', serbian: 'Sada je šest sati i deset minuta.', translation: 'Şu an altıyı on geçiyor.', translationEn: 'It is six ten now.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FOOD & DRINKS
  // ═══════════════════════════════════════════════
  'food-1': {
    scenario: "Skadarlija sokağında o meşhur 'kafana'ya girdin. Garson geldi ve bir şeyler içip hesap istemen lazım — üstelik hepsi Sırpça olacak koçum.",
    scenarioEn: "You entered that famous 'kafana' in Skadarlija street. The waiter arrived and you need to order something to drink and ask for the bill — and it will all be in Serbian, mate.",
    streetScenario: "Skadarlija'da efsanevi kafanaya çöktün. Garson dikildi tepene, bi şeyler ateşleyip hesabı Sırpça istemen lazım koçum.",
    vocabulary: [
      { word: 'Voda', pronunciation: 'VO-da', translation: 'Su', translationEn: 'Water', example: 'Jedna voda, molim.' },
      { word: 'Pivo', pronunciation: 'Pİ-vo', translation: 'Bira', translationEn: 'Beer', example: 'Jedno pivo, hvala.' },
      { word: 'Kafa', pronunciation: 'KA-fa', translation: 'Kahve', translationEn: 'Coffee', example: 'Domaća kafa, molim.' },
      { word: 'Sok', pronunciation: 'sok', translation: 'Meyve Suyu', translationEn: 'Juice', example: 'Sok od jabuke.' },
      { word: 'Račun', pronunciation: 'RA-çun', translation: 'Hesap / Fiş', translationEn: 'Bill / Check', example: 'Račun, molim!' },
      { word: 'Gladan/Gladna sam', pronunciation: 'GLA-dan/GLA-dna sam', translation: 'Açım (eril/dişil)', translationEn: 'I am hungry (masc/fem)', example: 'Gladan sam, idemo da jedemo!' },
    ],
    culturalTip: 'Sırp kafanalarında, kimse seni masadan hemen kaldırmaz. Masada tek kahveyle saatlerce oturmak o kültürün hakkıdır. Hesabı sen "Račun, molim!" (hesap lütfen) demeden asla getirmezler.',
    culturalTipEn: "In Serbian kafanas, no one will rush you from your table. Sitting for hours with a single coffee is a cultural right. They will never bring the bill until you say 'Račun, molim!' (Bill, please).",
    dialogue: [
      { speaker: 'A', serbian: 'Šta ćete popiti?', translation: 'Ne içerdiniz?', translationEn: 'What would you like to drink?' },
      { speaker: 'B', serbian: 'Jedno pivo i jednu vodu, molim.', translation: 'Bir bira ve bir su lütfen.', translationEn: 'A beer and a water, please.' },
      { speaker: 'A', serbian: 'Izvolite. Još nešto?', translation: 'Buyurun. Başka bir şey lazım mı?', translationEn: 'Here you go. Anything else?' },
      { speaker: 'B', serbian: 'Ne, hvala. Račun kada budete mogli!', translation: 'Yok eyvallah reis. Müsait olunca hesabı at!', translationEn: 'No, thanks. Bill when you can!' },
    ],
  },

  'food-2': {
    scenario: "Sırp kankan seni pazar 'ručak'ı için evine yemeğe çağırdı. Masada bir sürü şey var, nasıl iltifat edeceğini falan bilmen lazım!",
    scenarioEn: "Your Serbian friend invited you to their home for Sunday 'ručak' (lunch). There are many things on the table, you need to know how to compliment them and all!",
    streetScenario: "Sırp kankan pazar mangalına çağırdı. Masada kaymaklar cevabiler havada uçuşuyor. Övmezsen ayıp olur, yapıştır iltifatı!",
    vocabulary: [
      { word: 'Ćevapi', pronunciation: 'çe-VA-pi', translation: 'Köfte rulosu (Cevabi)', translationEn: 'Grilled minced meat rolls (Cevapi)', example: 'Deset ćevapa sa lukom.' },
      { word: 'Kajmak', pronunciation: 'KAY-mak', translation: 'Klasik Balkan kaymağı', translationEn: 'Classic Balkan clotted cream', example: 'Ćevapi sa kajmakom su savršeni.' },
      { word: 'Rakija', pronunciation: 'RA-ki-ya', translation: 'Sırp meyve rakısı', translationEn: 'Serbian fruit brandy', example: 'Šljiva rakija je odlična.' },
      { word: 'Hleb', pronunciation: 'hleb', translation: 'Ekmek', translationEn: 'Bread', example: 'Da li ima još hleba?' },
      { word: 'Ukusno', pronunciation: 'U-kus-no', translation: 'Lezzetli, enfes', translationEn: 'Delicious / Tasty', example: 'Sve je ukusno, hvala!' },
      { word: 'Supa', pronunciation: 'SU-pa', translation: 'Çorba', translationEn: 'Soup', example: 'Pileća supa je odlična.' },
    ],
    culturalTip: "Sırp misafirperverliği tehlikelidir — yemeği reddetmek dümdüz kabalıktır dostum. Sıklıkla 'Ukusno!' de, 'Domaće je uvek najbolje' (Ev yapımı her zaman iyidir) lafı ise 10 numara 5 yıldız sevap points yazdırır.",
    culturalTipEn: "Serbian hospitality is serious business — refusing food is plain rude, man. Say 'Ukusno!' often. Saying 'Domaće je uvek najbolje' (Homemade is always best) will earn you extra brownie points.",
    dialogue: [
      { speaker: 'A', serbian: 'Hajde, jedi! Ne budi stidljiv!', translation: 'Hadi gömül yemeğe! Utanma!', translationEn: 'Come on, eat! Don\'t be shy!' },
      { speaker: 'B', serbian: 'Sve je toliko ukusno! Šta je ovo?', translation: 'Her şey çok lezzetli kanka! Nedir bu?', translationEn: 'Everything is so delicious! What is this?' },
      { speaker: 'A', serbian: 'To je kajmak. Probaj sa hlebom!', translation: 'O kaymak, ekmekle dene!', translationEn: 'That\'s kajmak. Try it with bread!' },
      { speaker: 'B', serbian: 'Neverovatno! Nikad nisam probao.', translation: 'Mükemmelmiş! Hic denememiştim sağ ol.', translationEn: 'Incredible! I have never tried it, thanks.' },
    ],
  },

  'food-3': {
    scenario: "Güneşli bir sabah ve sen Zeleni Venac pazarındasın. Satıcılar fiyatları uçuruyor, taze sebze ve meyveleri Sırpça çatır çatır pazarlıkla alman lazım!",
    scenarioEn: "It is a sunny morning and you are at the Zeleni Venac market. Vendors are raising prices, you need to buy fresh vegetables and fruits with some Sırpça bargaining!",
    streetScenario: "Zeleni Venac pazarında kurtlar sofrasındasın. Domatesin kilosunu sorup dayılarla Sırpça sağlam bi pazarlığa girmen lazım!",
    vocabulary: [
      { word: 'Koliko košta?', pronunciation: 'KO-li-ko KOŞ-ta', translation: 'Kaç para, fiyatı ne?', translationEn: 'How much does it cost?', example: 'Koliko košta kilogram jabuka?' },
      { word: 'Jabuka', pronunciation: 'YA-bu-ka', translation: 'Elma', translationEn: 'Apple', example: 'Daj mi dva kilograma jabuka.' },
      { word: 'Paradajz', pronunciation: 'pa-ra-DAYS', translation: 'Domates', translationEn: 'Tomato', example: 'Svež paradajz, molim.' },
      { word: 'Skupo', pronunciation: 'SKU-po', translation: 'Pahalı', translationEn: 'Expensive', example: 'To je malo skupo.' },
      { word: 'Jeftino', pronunciation: 'YEF-ti-no', translation: 'Ucuz', translationEn: 'Cheap', example: 'Ovde je sve jeftino!' },
      { word: 'Kilogram', pronunciation: 'Kİ-lo-gram', translation: 'Kilo', translationEn: 'Kilogram', example: 'Jedan kilogram, molim.' },
    ],
    grammarNote: {
      title: 'Pazar Kavgaları İçin Pratik Kelimeler',
      titleEn: 'Practical Words for Market Haggling',
      body: '"Dajte mi…" (Bana verin…), pazarlarda en çok kullanılan ifadedir dostum. Sorarken "Ima li…?" (Var mı…?) çok işine yarayacak. Bir iki kelime Sırpça, çaldığın teyze amcalar için fazlasıyla kıymetlidir.',
      bodyEn: '"Dajte mi…" (Give me...) is the most used phrase in markets. Asking "Ima li…?" (Is there...?) will be very useful. A few words in Serbian mean a lot to the vendors.',
    },
    culturalTip: "Belgrad'ın en ünlü pazarlarından biri Zeleni Venac'tır. Buradan aldığın meyvelerle 'domaci sok' (ev yapımı su) yapabilirsin. Satıcıya 'gazda' diye hitap etmek samimiyeti artırır!",
    culturalTipEn: "Zeleni Venac is one of Belgrade's most famous markets. You can make 'domaci sok' (homemade juice) with the fruit you buy here. Addressing the vendor as 'gazda' (boss/host) increases friendliness!",
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta kilogram paradajza?', translation: 'Domatesin kilosu ne kadar aga?', translationEn: 'How much is a kilo of tomatoes, boss?' },
      { speaker: 'B', serbian: 'Sto dvadeset dinara, gazda.', translation: '120 dinar, patron.', translationEn: 'One hundred and twenty dinars, boss.' },
      { speaker: 'A', serbian: 'Malo skupo. Dajte mi pola kilograma.', translation: 'Braz tuzlu kanka. Sen bana yarım kilo ver.', translationEn: 'A bit expensive mate. Just give me half a kilo.' },
      { speaker: 'B', serbian: 'Izvolite! Svež, direktno sa sela!', translation: 'Al babuş! Mis gibi köyden domatesler!', translationEn: 'Here you go! Fresh, straight from the village!' },
    ],
  },
};

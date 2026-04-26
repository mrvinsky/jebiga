import { LessonContent } from './contentTypes';

export const lessonContentD: Record<string, LessonContent> = {
  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  'culture-1': {
    scenario: "Sırp bir ailenin en büyük bayramı olan 'Slava' (koruyucu aziz günü) yemeğine davetlisin. Bu efsanevi bir saygı göstergesi ve akıl almaz bir ziyafettir aga. Ne diyeceğini ve nasıl davranacağını kesinlikle bilmen lazım.",
    scenarioEn: "You are invited to a 'Slava' (Patron Saint's Day) dinner, the most significant holiday for a Serbian family. This is a legendary show of respect and an incredible feast, mate. You absolutely need to know what to say and how to behave.",
    streetScenario: "Sırp ailenin en efsanevi 'Slava' yemeğindesin. Bu işin şakası yok aga, saygıda kusur etmemen ve teyzenin yemeklerini göğe çıkarman lazım!",
    vocabulary: [
      { word: 'Slava', pronunciation: 'SLA-va', translation: 'Koruyucu Aziz Günü', translationEn: 'Patron Saint\'s Day', example: 'Srećna slava!' },
      { word: 'Gost', pronunciation: 'gost', translation: 'Misafir', translationEn: 'Guest', example: 'Imamo goste.' },
      { word: 'Poklon', pronunciation: 'PO-klon', translation: 'Hediye', translationEn: 'Gift', example: 'Ovo je mali poklon za vas.' },
      { word: 'Žito', pronunciation: 'Jİ-to', translation: 'Törenlik Buğday Tatlısı', translationEn: 'Ceremonial Wheat Dish', example: 'Da li ste uzeli žito?' },
      { word: 'Domaćin', pronunciation: 'do-MA-çin', translation: 'Ev sahibi (Erkek)', translationEn: 'Host (Male)', example: 'Domaćin je odličan čovek.' },
      { word: 'Domaćica', pronunciation: 'do-MA-çi-tsa', translation: 'Ev sahibi (Kadın)', translationEn: 'Hostess (Female)', example: 'Domaćica je spremila najbolju hranu.' }
    ],
    grammarNote: {
      title: 'Slava Selamlaşması',
      titleEn: 'Slava Greeting',
      body: 'Geleneksel selamlama "Srećna slava" (Kutlu Slava) şeklindedir. Erkekseniz, ev sahibini Sırp raconunda olduğu gibi her iki yanakta sırayla olmak üzere tam 3 kere öperek selamlarsınız.',
      bodyEn: 'The traditional greeting is "Srećna slava" (Happy Slava). If you are a man, you greet the host by kissing them exactly 3 times, alternating between cheeks, as per Serbian custom.'
    },
    culturalTip: 'Bir Sırp evine girerken, ev sahibi sana özel olarak ulan "ne izuvaj se" (çıkartma ayakkabıları) demediği sürece ayakkabıları kapıda bırakmak adettir. Evin belkemiği "Domaćica"dır (Kadın ev sahibi), çünkü mucizevi yemekler hep onun elinden çıkar. Gidin yemeği övün, bu yazılı olmayan altın kuraldır! Bir de asla eli boş gitmeyin: şarap, tatlı veya kahve güzel bir hediyedir.',
    culturalTipEn: 'When entering a Serbian home, it\'s customary to leave your shoes at the door unless the host specifically tells you "ne izuvaj se" (don\'t take your shoes off). The "Domaćica" (hostess) is the backbone of the house, as the miraculous food always comes from her hands. Go and praise the food; it\'s an unwritten golden rule! Also, never go empty-handed: wine, sweets, or coffee make a great gift.',
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, srećna slava domaćine! Srećna slava domaćice!', translation: 'İyi günler, bayramınız mübarek olsun ev sahibi amca! Teyzem seninki de kutlu olsun!', translationEn: 'Good day, happy Slava to the host! Happy Slava to the hostess!' },
      { speaker: 'B', serbian: 'Hvala! Dobrodošli. Izvolite uđite.', translation: 'Eyvallah yeenim, hoş geldiniz! Buyurun geçin içeriye.', translationEn: 'Thank you! Welcome. Please, come in.' },
      { speaker: 'A', serbian: 'Ovo je mali poklon za vas. Domaćice, hrana miriše savršeno!', translation: 'Amcacığım şu ufak hediyeyi aldık valla saygılar. Teyze, yemekler dışarıdan bile efsane kokuyor!', translationEn: 'This is a small gift for you. Hostess, the food smells perfect!' },
      { speaker: 'B', serbian: 'Nije trebalo, hvala puno! Sedite, hoćete li nešto da popijete?', translation: 'Ne zahmet ettiniz ya, çok sağ olun! Geçin oturun, ne içersiniz çocuklar?', translationEn: 'You shouldn\'t have, thank you so much! Sit down, would you like something to drink?' }
    ]
  },
  'culture-2': {
    scenario: "Ve o malum an geldi, efsanevi Rakija tokuşturma ritüeli! Önüne o ufak ama çarpan kadehler kondu. Sırpların kuralına göre 'Rakija Rules' u uygulaman lazım.",
    scenarioEn: "And that specific moment has arrived, the legendary Rakija toasting ritual! Those small but potent glasses are placed before you. You must follow the 'Rakija Rules' according to Serbian custom.",
    streetScenario: "Ve o malum an geldi, efsanevi Rakija tokuşturma ritüeli! Önüne bardaklar kondu. Sırpların kurallarına uyup raconu kesmen lazım aga.",
    vocabulary: [
      { word: 'Rakija', pronunciation: 'RA-ki-ya', translation: 'Meyve Rakısı', translationEn: 'Fruit Brandy', example: 'Domaća rakija je najbolja.' },
      { word: 'Šljivovica', pronunciation: 'ŞLYİ-vo-vi-tsa', translation: 'Erik Rakısı (Boğma)', translationEn: 'Plum Brandy', example: 'Šljivovica je nacionalno piće.' },
      { word: 'Živeli', pronunciation: 'Jİ-ve-li', translation: 'Şerefe (Çok yaşa)', translationEn: 'Cheers (Long life)', example: 'Živeli, za zdravlje!' },
      { word: 'Oči', pronunciation: 'O-çi', translation: 'Gözler', translationEn: 'Eyes', example: 'Gledaj me u oči.' },
      { word: 'Zdravlje', pronunciation: 'ZDRAV-lye', translation: 'Sağlık', translationEn: 'Health', example: 'U tvoje zdravlje!' }
    ],
    grammarNote: {
      title: 'Kadeh Kaldırmak',
      titleEn: 'Raising a Glass',
      body: '"Živeli" kelimesi "Şerefe (Hayatta olalım)" anlamına gelir. Şerefe derken "U zdravlje" veya "Za zdravlje" (sağlığına) da bolca kullanılır aga.',
      bodyEn: 'The word "Živeli" means "Cheers (Let\'s be alive)". While toasting, "U zdravlje" or "Za zdravlje" (To health) are also frequently used, mate.'
    },
    culturalTip: 'Rakija kadehlerini tokuştururken KESİNLİKLE karşıdakinin doğrudan gözünün içine bakmak zorundasın hacı. Bakmazsan adamlar bunu saygısızlık ve uğursuzluk olarak görür, külahları değişirsiniz. Sakın tekila gibi dikme; yavaş yavaş yudumla canını sevdiğim, kokusunu al.',
    culturalTipEn: 'When clinking Rakija glasses, you ABSOLUTELY must look the other person directly in the eyes, boss. If you don\'t, they\'ll see it as disrespectful and bad luck, and things might get awkward. Don\'t shoot it like tequila; sip it slowly, appreciate the aroma.',
    dialogue: [
      { speaker: 'A', serbian: 'Da nazdravimo! U tvoje zdravlje.', translation: 'Kaldır kadehleri! Senin sağlığına dostum.', translationEn: 'Let\'s toast! To your health.' },
      { speaker: 'B', serbian: 'Živeli! Gledaj me u oči, to je pravilo.', translation: 'Şerefe! Gözlerimin içine bak tokuştururken, kuralı biliyorsun.', translationEn: 'Cheers! Look me in the eyes while toasting; you know the rule.' },
      { speaker: 'A', serbian: 'Živeli! Ooh, jaka je!', translation: 'Şerefe ulan! Uff, bu ne ya kurşun gibi vurdu!', translationEn: 'Cheers! Ooh, it\'s strong!' },
      { speaker: 'B', serbian: 'Prava domaća šljivovica. Polako pij.', translation: 'İşte o has el yapımı boğma erik rakısıdır aslanım. Yavaş yudumla.', translationEn: 'That\'s real homemade plum brandy, son. Drink it slowly.' }
    ]
  },
  'culture-3': {
    scenario: "Kafana kültürünün tam ortasına düştün koçum. Burası sadece bir bar veya meyhane değildir; Sırbistan'da sosyalleşmenin, kutlamaların ya da dertlenmelerin tek ve asıl merkezidir.",
    scenarioEn: "You've landed right in the middle of 'Kafana' culture, son. This isn't just a bar or a tavern; it's the sole and primary hub for socializing, celebrations, or venting your sorrows in Serbia.",
    streetScenario: "Kafana kültürünün tam göbeğine düştün koçum. Sırbistan'da sosyalleşmenin, kutlamaların veya efkarlanıp dağıtmanın tek adresindesin!",
    vocabulary: [
      { word: 'Kafana', pronunciation: 'ka-FA-na', translation: 'Geleneksel Meyhane / Canlı Müzikli Mekan', translationEn: 'Traditional Tavern / Live Music Venue', example: 'Idemo u kafanu večeras.' },
      { word: 'Muzika', pronunciation: 'MU-zi-ka', translation: 'Müzik', translationEn: 'Music', example: 'Živa muzika je obavezna.' },
      { word: 'Bakšiš', pronunciation: 'BAK-şiş', translation: 'Bahşiş', translationEn: 'Tip', example: 'Ostavi bakšiš za muziku.' },
      { word: 'Pesma', pronunciation: 'PES-ma', translation: 'Şarkı', translationEn: 'Song', example: 'Ovo je moja omiljena pesma.' },
      { word: 'Pevač', pronunciation: 'PE-vaç', translation: 'Şarkıcı/Vokal', translationEn: 'Singer', example: 'Pevač ima super glas.' }
    ],
    grammarNote: {
      title: 'Parça İstemek',
      titleEn: 'Requesting a Song',
      body: '"Može pesma?" (Bir parça çalar mısın?) dersin. İşi daha damardan bağlamak istersen "Daj pesmu za dušu" (Ruha işleyecek bir parça yolla) de gitsin kanka.',
      bodyEn: 'You say "Može pesma?" (Can you play a song?). If you want to make it even more heartfelt, go with "Daj pesmu za dušu" (Give me a song for the soul), mate.'
    },
    culturalTip: 'Harbi bir Kafana\'daysan, elinde akordeon veya keman olan müzisyenler masaları tek tel dolanır agacım. Şansına sizin masaya gelip damardan girerlerse, enstrümanlarının tellerine falan "bakšiš" (bahşiş) sıkıştırmak adettir, boş gönderilmez.',
    culturalTipEn: 'If you\'re in a real Kafana, musicians with accordions or violins will wander from table to table, mate. If you\'re lucky and they come to your table playing something soul-stirring, it\'s customary to tuck some "bakšiš" (tip) into the strings of their instrument; don\'t send them away empty-handed.',
    dialogue: [
      { speaker: 'A', serbian: 'Ova kafana ima odličnu atmosferu.', translation: 'Dostum bu kafana harbi efsaneymiş, ortam yıkılıyor.', translationEn: 'This kafana has a great atmosphere.' },
      { speaker: 'B', serbian: 'Slušaj muziku, stižu nam svirači.', translation: 'Güzel dinle müziği, çalgıcılar bizim masaya doğru kırıyor dümeni.', translationEn: 'Listen to the music; the musicians are heading our way.' },
      { speaker: 'A', serbian: 'Može jedna pesma, za dušu?', translation: 'Ustalar, ruha işleyen bir parça patlatır mıyız?', translationEn: 'Can you play a song, for the soul?' },
      { speaker: 'B', serbian: 'Kako da ne. Za vas, može sve.', translation: 'Estafurullah abim. Sizin için, ne istenirse çalarız ulan.', translationEn: 'Of course. For you, anything is possible.' }
    ]
  }
};

import { LessonContent } from './contentTypes';

export const lessonContentD: Record<string, LessonContent> = {
  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  'culture-1': {
    scenario: "Sırp bir ailenin en büyük bayramı olan 'Slava' (koruyucu aziz günü) yemeğine davetlisin. Bu efsanevi bir saygı göstergesi ve akıl almaz bir ziyafettir aga. Ne diyeceğini ve nasıl davranacağını kesinlikle bilmen lazım.",
    vocabulary: [
      { word: 'Slava', pronunciation: 'SLA-va', translation: 'Koruyucu Aziz Günü', example: 'Srećna slava!' },
      { word: 'Gost', pronunciation: 'gost', translation: 'Misafir', example: 'Imamo goste.' },
      { word: 'Poklon', pronunciation: 'PO-klon', translation: 'Hediye', example: 'Ovo je mali poklon za vas.' },
      { word: 'Žito', pronunciation: 'Jİ-to', translation: 'Törenlik Buğday Tatlısı', example: 'Da li ste uzeli žito?' },
      { word: 'Domaćin', pronunciation: 'do-MA-çin', translation: 'Ev sahibi (Erkek)', example: 'Domaćin je odličan čovek.' },
      { word: 'Domaćica', pronunciation: 'do-MA-çi-tsa', translation: 'Ev sahibi (Kadın)', example: 'Domaćica je spremila najbolju hranu.' }
    ],
    grammarNote: {
      title: 'Slava Selamlaşması',
      body: 'Geleneksel selamlama "Srećna slava" (Kutlu Slava) şeklindedir. Erkekseniz, ev sahibini Sırp raconunda olduğu gibi her iki yanakta sırayla olmak üzere tam 3 kere öperek selamlarsınız.'
    },
    culturalTip: 'Bir Sırp evine girerken, ev sahibi sana özel olarak ulan "ne izuvaj se" (çıkartma ayakkabıları) demediği sürece ayakkabıları kapıda bırakmak adettir. Evin belkemiği "Domaćica"dır (Kadın ev sahibi), çünkü mucizevi yemekler hep onun elinden çıkar. Gidin yemeği övün, bu yazılı olmayan altın kuraldır! Bir de asla eli boş gitmeyin: şarap, tatlı veya kahve güzel bir hediyedir.',
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, srećna slava domaćine! Srećna slava domaćice!', translation: 'İyi günler, bayramınız mübarek olsun ev sahibi amca! Teyzem seninki de kutlu olsun!' },
      { speaker: 'B', serbian: 'Hvala! Dobrodošli. Izvolite uđite.', translation: 'Eyvallah yeenim, hoş geldiniz! Buyurun geçin içeriye.' },
      { speaker: 'A', serbian: 'Ovo je mali poklon za vas. Domaćice, hrana miriše savršeno!', translation: 'Amcacığım şu ufak hediyeyi aldık valla saygılar. Teyze, yemekler dışarıdan bile efsane kokuyor!' },
      { speaker: 'B', serbian: 'Nije trebalo, hvala puno! Sedite, hoćete li nešto da popijete?', translation: 'Ne zahmet ettiniz ya, çok sağ olun! Geçin oturun, ne içersiniz çocuklar?' }
    ]
  },
  'culture-2': {
    scenario: "Ve o malum an geldi, efsanevi Rakija tokuşturma ritüeli! Önüne o ufak ama çarpan kadehler kondu. Sırpların kuralına göre 'Rakija Rules' u uygulaman lazım.",
    vocabulary: [
      { word: 'Rakija', pronunciation: 'RA-ki-ya', translation: 'Meyve Rakısı', example: 'Domaća rakija je najbolja.' },
      { word: 'Šljivovica', pronunciation: 'ŞLYİ-vo-vi-tsa', translation: 'Erik Rakısı (Boğma)', example: 'Šljivovica je nacionalno piće.' },
      { word: 'Živeli', pronunciation: 'Jİ-ve-li', translation: 'Şerefe (Çok yaşa)', example: 'Živeli, za zdravlje!' },
      { word: 'Oči', pronunciation: 'O-çi', translation: 'Gözler', example: 'Gledaj me u oči.' },
      { word: 'Zdravlje', pronunciation: 'ZDRAV-lye', translation: 'Sağlık', example: 'U tvoje zdravlje!' }
    ],
    grammarNote: {
      title: 'Kadeh Kaldırmak',
      body: '"Živeli" kelimesi "Şerefe (Hayatta olalım)" anlamına gelir. Şerefe derken "U zdravlje" veya "Za zdravlje" (sağlığına) da bolca kullanılır aga.'
    },
    culturalTip: 'Rakija kadehlerini tokuştururken KESİNLİKLE karşıdakinin doğrudan gözünün içine bakmak zorundasın hacı. Bakmazsan adamlar bunu saygısızlık ve uğursuzluk olarak görür, külahları değişirsiniz. Sakın tekila gibi dikme; yavaş yavaş yudumla canını sevdiğim, kokusunu al.',
    dialogue: [
      { speaker: 'A', serbian: 'Da nazdravimo! U tvoje zdravlje.', translation: 'Kaldır kadehleri! Senin sağlığına dostum.' },
      { speaker: 'B', serbian: 'Živeli! Gledaj me u oči, to je pravilo.', translation: 'Şerefe! Gözlerimin içine bak tokuştururken, kuralı biliyorsun.' },
      { speaker: 'A', serbian: 'Živeli! Ooh, jaka je!', translation: 'Şerefe ulan! Uff, bu ne ya kurşun gibi vurdu!' },
      { speaker: 'B', serbian: 'Prava domaća šljivovica. Polako pij.', translation: 'İşte o has el yapımı boğma erik rakısıdır aslanım. Yavaş yudumla.' }
    ]
  },
  'culture-3': {
    scenario: "Kafana kültürünün tam ortasına düştün koçum. Burası sadece bir bar veya meyhane değildir; Sırbistan'da sosyalleşmenin, kutlamaların ya da dertlenmelerin tek ve asıl merkezidir.",
    vocabulary: [
      { word: 'Kafana', pronunciation: 'ka-FA-na', translation: 'Geleneksel Meyhane / Canlı Müzikli Mekan', example: 'Idemo u kafanu večeras.' },
      { word: 'Muzika', pronunciation: 'MU-zi-ka', translation: 'Müzik', example: 'Živa muzika je obavezna.' },
      { word: 'Bakšiš', pronunciation: 'BAK-şiş', translation: 'Bahşiş', example: 'Ostavi bakšiš za muziku.' },
      { word: 'Pesma', pronunciation: 'PES-ma', translation: 'Şarkı', example: 'Ovo je moja omiljena pesma.' },
      { word: 'Pevač', pronunciation: 'PE-vaç', translation: 'Şarkıcı/Vokal', example: 'Pevač ima super glas.' }
    ],
    grammarNote: {
      title: 'Parça İstemek',
      body: '"Može pesma?" (Bir parça çalar mısın?) dersin. İşi daha damardan bağlamak istersen "Daj pesmu za dušu" (Ruha işleyecek bir parça yolla) de gitsin kanka.'
    },
    culturalTip: 'Harbi bir Kafana\'daysan, elinde akordeon veya keman olan müzisyenler masaları tek tek dolanır agacım. Şansına sizin masaya gelip damardan girerlerse, enstrümanlarının tellerine falan "bakšiš" (bahşiş) sıkıştırmak adettir, boş gönderilmez.',
    dialogue: [
      { speaker: 'A', serbian: 'Ova kafana ima odličnu atmosferu.', translation: 'Dostum bu kafana harbi efsaneymiş, ortam yıkılıyor.' },
      { speaker: 'B', serbian: 'Slušaj muziku, stižu nam svirači.', translation: 'Güzel dinle müziği, çalgıcılar bizim masaya doğru kırıyor dümeni.' },
      { speaker: 'A', serbian: 'Može jedna pesma, za dušu?', translation: 'Ustalar, ruha işleyen bir parça patlatır mıyız?' },
      { speaker: 'B', serbian: 'Kako da ne. Za vas, može sve.', translation: 'Estafurullah abim. Sizin için, ne istenirse çalarız ulan.' }
    ]
  }
};

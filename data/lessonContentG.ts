import { LessonContent } from './contentTypes';

export const lessonContentG: Record<string, LessonContent> = {

  'swear-1': {
    scenario: 'Belgrad\'ın arka sokaklarında Sırp arkadaşın sana yerli argoyu öğretiyor. Hafif şeylerle başlıyoruz.',
    scenarioEn: 'In the backstreets of Belgrade, your Serbian friend teaches you local slang. Starting mild.',
    streetScenario: 'Kafanada ikinci rakija — şimdi gerçek dili öğrenme vakti. Yavaş başlıyoruz, brate.',
    vocabulary: [
      { word: 'Jebiga', pronunciation: 'ye-BI-ga', translation: 'Ne yaparsın / Lanet olsun', translationEn: 'Damn it / What can you do', example: 'Izgubio sam novac. Jebiga.', exampleEn: 'I lost my money. Damn it.' },
      { word: 'Majmun', pronunciation: 'MAY-moon', translation: 'Maymun / Aptal (hakaret)', translationEn: 'Monkey / Idiot (insult)', example: 'Šta radiš, majmune?', exampleEn: 'What are you doing, idiot?' },
      { word: 'Odjebi', pronunciation: 'OD-ye-bi', translation: 'Defol / Çık git', translationEn: 'Get lost / Screw off', example: 'Odjebi, ne mogu sada.', exampleEn: 'Get lost, I can\'t right now.' },
      { word: 'Glupost', pronunciation: 'GLOO-post', translation: 'Aptallık / Saçmalık', translationEn: 'Stupidity / Nonsense', example: 'To je čista glupost!', exampleEn: 'That\'s pure nonsense!' },
      { word: 'Bre', pronunciation: 'bre', translation: 'Hey / Bak (vurgu ünlemi)', translationEn: 'Hey / Look (emphasis interjection)', example: 'Bre, šta je ovo?', exampleEn: 'Hey, what is this?' },
      { word: 'Mater', pronunciation: 'MA-ter', translation: 'Anne (küfürlerde kullanılır)', translationEn: 'Mother (used in curses)', example: 'Jebem ti mater! (çok ağır)', exampleEn: 'Very heavy curse (mother-related)' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Brate, video si utakmicu?', translation: 'Kanka, maçı gördün mü?', translationEn: 'Bro, did you see the match?' },
      { speaker: 'B', serbian: 'Jebiga, izgubili smo opet.', translation: 'Jebiga, yine kaybettik.', translationEn: 'Damn it, we lost again.' },
      { speaker: 'A', serbian: 'Kakva glupost! Šta rade ti igrači?', translation: 'Ne saçmalık! Bu oyuncular ne yapıyor?', translationEn: 'What nonsense! What are those players doing?' },
      { speaker: 'B', serbian: 'Bre, ne pitaj me. Odjebi sa tim fudbalon.', translation: 'Hey, bana sorma. O futbolu unut.', translationEn: 'Hey, don\'t ask me. Forget about that football.' },
    ],
    grammarNote: {
      title: '"Jebiga" ve "Bre" — En Temel Argo İfadeler',
      titleEn: '"Jebiga" and "Bre" — The Most Essential Slang',
      body: '"Jebiga" hayal kırıklığı veya çaresizliği ifade eder. Türkçe\'deki "Ne yapalım" veya "İşte böyle" gibidir ama çok daha güçlüdür. "Bre" ise cümle içinde vurgu için kullanılan Balkan\'a özgü bir ünlemdir — hiçbir şey anlamına gelmez ama her şeyi güçlendirir.',
      bodyEn: '"Jebiga" expresses resignation or frustration. Similar to "What can you do" but much stronger. "Bre" is a Balkan emphasis interjection — it means nothing by itself but adds power to everything.',
    },
    culturalTip: '🇷🇸 Belgrad\'da "Jebiga" o kadar yaygındır ki günlük konuşmanın bir parçası haline gelmiştir. Sırplar bunu ağır bir küfür olarak değil, bir kader kabullenme ifadesi olarak kullanır. Doğru bağlamda kullanan yabancılar anında saygı kazanır!',
    culturalTipEn: '🇷🇸 In Belgrade, "Jebiga" is so common it has become part of daily speech. Serbians use it not as a heavy swear but as an expression of resignation. Foreigners who use it in the right context instantly earn respect!',
  },

  'swear-2': {
    scenario: 'Orta düzey argo zamanı. Bu kelimeler kafanada duyabileceğin ama dikkatli kullanman gereken ifadeler.',
    scenarioEn: 'Time for mid-level slang. These words you might hear in a kafana, but use carefully.',
    streetScenario: 'Üçüncü rakija — ellerini masaya vur ve gerçek Belgrad dilini konuş.',
    vocabulary: [
      { word: 'Kurac', pronunciation: 'KOO-rats', translation: 'Hayır! / Hiç! / Sıfır! (güçlü ret)', translationEn: 'No way! / Nothing! (strong refusal)', example: 'Kurac da ću ti dati novac!', exampleEn: 'No way I\'m giving you money!' },
      { word: 'Govno', pronunciation: 'GOV-no', translation: 'Pislik / Bok (hakaret)', translationEn: 'Crap / Shit (insult)', example: 'To je čisto govno.', exampleEn: 'That\'s pure crap.' },
      { word: 'Pička', pronunciation: 'PICH-ka', translation: 'Çok ağır küfür (kadın anatomisi)', translationEn: 'Very heavy curse (female anatomy)', example: 'Sadece çok sinirlenince kullanılır', exampleEn: 'Only used in extreme anger' },
      { word: 'Besposličar', pronunciation: 'bes-POS-li-char', translation: 'İşsiz güçsüz / Aylak', translationEn: 'Lazy bum / Slacker / Idler', example: 'On je pravi besposličar.', exampleEn: 'He\'s a real slacker.' },
      { word: 'Šupak', pronunciation: 'SHOO-pak', translation: 'Kaltak / Namert (hakaret)', translationEn: 'Asshole (insult)', example: 'Kakav šupak!', exampleEn: 'What an asshole!' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Gde si bio ceo dan?', translation: 'Bütün gün neredeydin?', translationEn: 'Where have you been all day?' },
      { speaker: 'B', serbian: 'Bio sam ovde i tamo.', translation: 'Şurda burda idim.', translationEn: 'I was here and there.' },
      { speaker: 'A', serbian: 'Pravi si besposličar, znaš to?', translation: 'Gerçek bir aylaklısın, biliyor musun?', translationEn: 'You\'re a real slacker, you know that?' },
      { speaker: 'B', serbian: 'Kurac! Ja radim.', translation: 'Hayır canım! Ben çalışıyorum.', translationEn: 'No way! I do work.' },
      { speaker: 'A', serbian: 'Govno radiš.', translation: 'Boktan çalışıyorsun.', translationEn: 'Like crap you do.' },
    ],
    grammarNote: {
      title: '"Kurac" — Güçlü Reddetme İfadesi',
      titleEn: '"Kurac" — Strong Refusal Expression',
      body: '"Kurac" anatomik bir anlam taşımasına rağmen günlük konuşmada "Hayır!", "Hiç!" veya "Asla!" anlamında kullanılır. "Kurac da ću..." yapısı (asla yapmayacağım) çok yaygındır. "Glupo govno" ise "aptal pislik" anlamına gelen bileşik bir hakarettir.',
      bodyEn: '"Kurac" carries an anatomical meaning but in daily speech is used as "No way!", "Nothing!" or "Never!". The structure "Kurac da ću..." (I will never...) is very common. "Glupo govno" is a compound insult meaning "stupid crap".',
    },
    culturalTip: '⚠️ Bu kelimeleri kafanada duyabilirsiniz ama yabancı olarak kullanmanız farklı tepkilere yol açabilir. En ağır küfürler (pička materina) gerçekten sadece çok sinirli anlarda kullanılır. Komşu masadaki birine yöneltmekten kaçının — gerginlik yaratır!',
    culturalTipEn: '⚠️ You might hear these in a kafana but using them as a foreigner may get different reactions. The heaviest curses are truly used only in extreme anger. Avoid directing them at strangers — it creates serious tension!',
  },

  'swear-3': {
    scenario: 'Son ders: Sokak dili. Bu kelimeler günlük Belgrad yaşamında duyulabilir ama bağlam her şeydir.',
    scenarioEn: 'Final lesson: Street talk. These words can be heard in everyday Belgrade life, but context is everything.',
    streetScenario: 'Son tur — kafana kapanıyor. Şimdi gerçek sokak dilini konuşuyoruz, bez filtera.',
    vocabulary: [
      { word: 'Lud', pronunciation: 'lood', translation: 'Deli / Çılgın', translationEn: 'Crazy / Nuts', example: 'Lud si! Ne mogu da verujem!', exampleEn: 'Are you crazy! I can\'t believe it!' },
      { word: 'Marš', pronunciation: 'marsh', translation: 'Defol! / Çekil! (emir)', translationEn: 'Get lost! / March off! (command)', example: 'Marš odavde!', exampleEn: 'Get out of here!' },
      { word: 'Fukara', pronunciation: 'foo-KA-ra', translation: 'Fakir / Sefil / Zavallı', translationEn: 'Poor wretch / Miserable one', example: 'Kakva fukara.', exampleEn: 'What a wretch.' },
      { word: 'Seljak', pronunciation: 'SEL-yak', translation: 'Görgüsüz / Kıro (hakaret)', translationEn: 'Redneck / Peasant (insult)', example: 'Ponašaš se kao seljak!', exampleEn: 'You\'re behaving like a redneck!' },
      { word: 'Kreten', pronunciation: 'KRE-ten', translation: 'Salak / Gerizekalı', translationEn: 'Cretin / Moron', example: 'Kakav kreten!', exampleEn: 'What a moron!' },
      { word: 'Mangup', pronunciation: 'MAN-goop', translation: 'Yaramaz / Hayta / Haylaz', translationEn: 'Scoundrel / Rascal / Troublemaker', example: 'Taj mangup opet nešto smislio.', exampleEn: 'That rascal is up to something again.' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Čuo si šta je uradio onaj seljak?', translation: 'O kıronun ne yaptığını duydun mu?', translationEn: 'Did you hear what that redneck did?' },
      { speaker: 'B', serbian: 'Kakav kreten. Lud je sigurno.', translation: 'Ne salak. Kesinlikle delirdi.', translationEn: 'What a moron. He\'s definitely crazy.' },
      { speaker: 'A', serbian: 'Marš takvi ljudi iz mog života.', translation: 'Böyle insanlar hayatımdan defol gitsin.', translationEn: 'People like that — out of my life.' },
      { speaker: 'B', serbian: 'Jebiga, ima ih svuda. Šta ćeš.', translation: 'Jebiga, her yerde var. Ne yaparsın.', translationEn: 'Damn it, they\'re everywhere. What can you do.' },
    ],
    grammarNote: {
      title: 'Türkçe\'den Geçen Sırpça Kelimeler',
      titleEn: 'Serbian Words Borrowed from Turkish',
      body: '"Marš" Almancadan, "Fukara" ise doğrudan Türkçeden Sırpçaya geçmiştir. "Mangup" da Türkçe kökenlidir. Osmanlı döneminden kalan bu kelimeler, iki dilin ne kadar iç içe geçtiğini gösterir. Bu nedenle Türkler Sırpçayı diğer Avrupalılara kıyasla çok daha hızlı öğrenir!',
      bodyEn: '"Marš" came from German, while "Fukara" came directly from Turkish. "Mangup" is also of Turkish origin. These Ottoman-era borrowings show how intertwined the two languages are — which is why Turks learn Serbian much faster than other Europeans!',
    },
    culturalTip: '🌍 Sırpça\'da pek çok kelime Türkçe\'den geçmiştir: fukara, jaran (arkadaş), mangup (yaramaz), kafana, mahala, baksuz... Ortak kültürel miras sizi çok avantajlı kılar. Sırplar bir Türkün Sırpça bildiğini görünce hem şaşırır hem çok mutlu olur!',
    culturalTipEn: '🌍 Many Serbian words come from Turkish: fukara, jaran (friend), mangup (rascal), kafana, mahala, baksuz... This shared cultural heritage gives you a huge advantage. When Serbians see a Turk speaking Serbian, they are both surprised and very happy!',
  },

};

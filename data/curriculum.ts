export type QuestionType = 'multiple-choice' | 'translate' | 'fill-blank';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  promptEn?: string; // 🇬🇧 English prompt
  streetPrompt?: string;
  answer: string;
  options?: string[];
  hint?: string;
  hintEn?: string;   // 🇬🇧 English hint
}

export interface Lesson {
  id: string;
  title: string;
  titleEn?: string;
  streetTitle: string;
  emoji: string;
  xpReward: number;
  questions: Question[];
}


export interface LessonSet {
  id: string;
  title: string;
  titleEn?: string;
  streetTitle: string;
  description: string;
  descriptionEn?: string;
  streetDescription: string;
  emoji: string;
  color: string;
  isPro?: boolean;
  lessons: Lesson[];
}


export const curriculum: LessonSet[] = [
  // ─── GREETINGS ────────────────────────────────────────────────────────────
  {
    id: 'greetings', title: 'Tanışma', titleEn: 'Greetings', streetTitle: 'Šta ima, brate?',
    description: 'Selamlaşmayı ve kendini tanıtmayı öğren',
    descriptionEn: 'Learn how to greet others and introduce yourself',
    streetDescription: "Nauči kako da se obijaviš k'o pravi Beograđanin",
    emoji: '👋', color: '#c0392b',
    lessons: [
      {
        id: 'greetings-1', title: 'Temel Selamlar', titleEn: 'Basic Greetings', streetTitle: 'Zdravo i šta ima', emoji: '👋', xpReward: 20,
        questions: [
          { id: 'g1-q1', type: 'multiple-choice', prompt: 'Sırpçada "Merhaba" nasıl denir?', promptEn: 'How do you say "Hello" in Serbian?', streetPrompt: 'Brate, "Merhaba" nasıl denir?', answer: 'Zdravo', options: ['Zdravo','Doviđenja','Hvala','Molim'] },
          { id: 'g1-q2', type: 'translate', prompt: '"Günaydın" kelimesini çevir', promptEn: 'Translate the word "Good morning"', streetPrompt: 'Vopi, "Günaydın" de bakalım!', answer: 'Dobro jutro', hint: 'dobro = iyi, jutro = sabah', hintEn: 'dobro = good, jutro = morning' },
          { id: 'g1-q3', type: 'multiple-choice', prompt: '"Kako si?" ne anlama gelir?', promptEn: 'What does "Kako si?" mean?', streetPrompt: 'Pazi, "Kako si?" ne demek?', answer: 'Nasılsın?', options: ['Adın ne?','Nasılsın?','Nerelisin?','Görüşürüz'] },
          { id: 'g1-q4', type: 'multiple-choice', prompt: '"Görüşürüz" nasıl denir?', promptEn: 'How do you say "See you later"?', streetPrompt: 'Kaçıyorsun brate — "Görüşürüz" nasıl denir?', answer: 'Doviđenja', options: ['Zdravo','Doviđenja','Hvala','Izvinite'] },
          { id: 'g1-q5', type: 'translate', prompt: '"İyi akşamlar" kelimesini çevir', promptEn: 'Translate the word "Good evening"', streetPrompt: 'Kapiram — Gece milleti nasıl selamlarsın?', answer: 'Dobro veče', hint: 'veče = akşam', hintEn: 'veče = evening' },
          { id: 'g1-q6', type: 'multiple-choice', prompt: '"Laku noć" ne anlama gelir?', promptEn: 'What does "Laku noć" mean?', streetPrompt: 'Pazi, "Laku noć" ne demek?', answer: 'İyi geceler', options: ['Günaydın','İyi akşamlar','İyi geceler','İyi uykular'] },
        ],
      },
      {
        id: 'greetings-2', title: 'Kendini Tanıtma', titleEn: 'Introducing Yourself', streetTitle: 'Ko si ti, majstore?', emoji: '🤝', xpReward: 25,
        questions: [
          { id: 'g2-q1', type: 'multiple-choice', prompt: '"Benim adım…" nasıl denir?', promptEn: 'How do you say "My name is..."?', streetPrompt: 'Bre, birine adını nasıl söylersin?', answer: 'Zovem se…', options: ['Imam se…','Zovem se…','Ja sam…','Moje je…'] },
          { id: 'g2-q2', type: 'translate', prompt: '"Tanıştığıma memnun oldum" kelimesini çevir', promptEn: 'Translate the phrase "Nice to meet you"', streetPrompt: 'Kapiram — "Memnun oldum" çevir', answer: 'Drago mi je', hint: 'drago = memnun/hoş', hintEn: 'drago = nice/dear' },
          { id: 'g2-q3', type: 'multiple-choice', prompt: '"Odakle si?" ne anlama gelir?', promptEn: 'What does "Odakle si?" mean?', streetPrompt: 'Pazi, "Odakle si?" ne demek?', answer: 'Nerelisin?', options: ['Kaç yaşındasın?','Ne iş yapıyorsun?','Nerelisin?','Sırpça biliyor musun?'] },
          { id: 'g2-q4', type: 'translate', prompt: '"Kaç yaşındasın?" kelimesini çevir', promptEn: 'Translate the question "How old are you?"', streetPrompt: 'Brate, birinin yaşını nasıl sorarsın?', answer: 'Koliko imaš godina?', hint: 'Koliko = kaç tane, godina = yıl', hintEn: 'Koliko = how many, godina = years' },
          { id: 'g2-q5', type: 'multiple-choice', prompt: '"Ben İngiltere\'denim" nasıl denir?', promptEn: 'How do you say "I am from England"?', streetPrompt: 'Bre, nereli olduğunu nasıl söylersin?', answer: 'Ja sam iz Engleske', options: ['Ja idem u Englesku','Ja sam iz Engleske','Volim Englesku','Bio sam u Engleskoj'] },
        ],
      },
      {
        id: 'greetings-3', title: 'Kibar İfadeler', titleEn: 'Polite Expressions', streetTitle: 'Kad treba biti fin', emoji: '🎩', xpReward: 25,
        questions: [
          { id: 'g3-q1', type: 'multiple-choice', prompt: '"Lütfen" nasıl denir?', promptEn: 'How do you say "Please"?', streetPrompt: 'Brate, nasıl kibarca "lütfen" istersin?', answer: 'Molim', options: ['Hvala','Molim','Izvinite','Nema na čemu'] },
          { id: 'g3-q2', type: 'multiple-choice', prompt: '"Hvala" ne anlama gelir?', promptEn: 'What does "Hvala" mean?', streetPrompt: 'Pazi — "Hvala" ne demek?', answer: 'Teşekkürler', options: ['Özür dilerim','Lütfen','Teşekkürler','Merhaba'] },
          { id: 'g3-q3', type: 'translate', prompt: '"Affedersiniz" kelimesini çevir', promptEn: 'Translate the word "Excuse me"', streetPrompt: 'Birinin dikkatini nasıl kibarca çekersin?', answer: 'Izvinite', hint: '"özür dilerim" in resmi hali', hintEn: 'formal version of sorry' },
          { id: 'g3-q4', type: 'multiple-choice', prompt: '"Nema na čemu" ne anlama gelir?', promptEn: 'What does "Nema na čemu" mean?', streetPrompt: 'Biri sana "hvala" dedi — sen ne dersin?', answer: "Rica ederim", options: ["Rica ederim",'Sorun değil','Boşver','Görüşürüz'] },
          { id: 'g3-q5', type: 'multiple-choice', prompt: '"Özür dilerim" nasıl denir?', promptEn: 'How do you say "I am sorry"?', streetPrompt: 'Bre, Sırpçada nasıl affedersin istersin?', answer: 'Žao mi je', options: ['Hvala','Molim','Žao mi je','Izvinite'] },
          { id: 'g3-q6', type: 'translate', prompt: '"Sorun değil" kelimesini çevir', promptEn: 'Translate "No problem"', streetPrompt: 'Kapiram — her şey yolunda olunca ne dersin?', answer: 'Nema problema', hint: 'nema = yok', hintEn: 'nema = no/none' },
        ],
      },
    ],
  },

  // ─── NUMBERS ──────────────────────────────────────────────────────────────
  {
    id: 'numbers', title: 'Sayılar', titleEn: 'Numbers', streetTitle: 'Pare i Brojevi',
    description: 'Bölge halkı gibi saymayı, para ya da saati halletmeyi öğren',
    descriptionEn: 'Learn to count and handle money like a local',
    streetDescription: 'Nauči da brojiš — bez toga nema šale',
    emoji: '🔢', color: '#003da5',
    lessons: [
      {
        id: 'numbers-1', title: 'Sayılar 1–10', titleEn: 'Numbers 1–10', streetTitle: '1 do 10, brate', emoji: '🔢', xpReward: 20,
        questions: [
          { id: 'n1-q1', type: 'multiple-choice', prompt: 'Sırpçada "5" nasıl denir?', promptEn: 'How do you say "5" in Serbian?', streetPrompt: 'Vopi, "5" nasıl diyorsun?', answer: 'Pet', options: ['Četiri','Pet','Šest','Sedam'] },
          { id: 'n1-q2', type: 'multiple-choice', prompt: '"Tri" hangi sayıdır?', promptEn: 'Which number is "Tri"?', streetPrompt: 'Kapiram, "Tri" hangi sayı?', answer: '3', options: ['2','3','13','30'] },
          { id: 'n1-q3', type: 'translate', prompt: '"10" sayısını Sırpçaya çevir', promptEn: 'Translate the number "10" to Serbian', streetPrompt: 'Pazi — Sırpçada 10?', answer: 'Deset', hint: 'de-set' },
          { id: 'n1-q4', type: 'multiple-choice', prompt: '"Jedan" ne anlama gelir?', promptEn: 'What does "Jedan" mean?', streetPrompt: 'Bre, "Jedan" nedir?', answer: '1', options: ['1','7','11','100'] },
          { id: 'n1-q5', type: 'multiple-choice', prompt: '"8" nasıl denir?', promptEn: 'How do you say "8"?', streetPrompt: 'Çabuk — "8" nasıl dersin brate?', answer: 'Osam', options: ['Sedam','Osam','Devet','Šest'] },
          { id: 'n1-q6', type: 'translate', prompt: '"2" sayısını Sırpçaya çevir', promptEn: 'Translate the number "2" to Serbian', streetPrompt: 'Sırpçada 2 — lako brate!', answer: 'Dva', hint: 'kısa bir kelime', hintEn: 'a very short word' },
          { id: 'n1-q7', type: 'multiple-choice', prompt: '"Devet" ne anlama gelir?', promptEn: 'What does "Devet" mean?', streetPrompt: 'Pazi — "Devet" hangi sayıdır?', answer: '9', options: ['6','7','8','9'] },
        ],
      },
      {
        id: 'numbers-2', title: 'Sayılar 11–100', titleEn: 'Numbers 11–100', streetTitle: 'Veći brojevi, veće pare', emoji: '💰', xpReward: 30,
        questions: [
          { id: 'n2-q1', type: 'multiple-choice', prompt: 'Sırpçada "20" nasıl denir?', promptEn: 'How do you say "20" in Serbian?', streetPrompt: 'Brate, "20" nasıl diyorsun?', answer: 'Dvadeset', options: ['Deset','Dvadeset','Trideset','Dvesta'] },
          { id: 'n2-q2', type: 'translate', prompt: '"100" sayısını Sırpçaya çevir', promptEn: 'Translate the number "100" to Serbian', streetPrompt: 'Yüz — u srpskom?', answer: 'Sto', hint: 'çok kısa!', hintEn: 'it is very short!' },
          { id: 'n2-q3', type: 'multiple-choice', prompt: '"Pedeset" nedir?', promptEn: 'What is "Pedeset"?', streetPrompt: 'Kapiram — "Pedeset" hangi sayıdır?', answer: '50', options: ['15','50','500','5000'] },
          { id: 'n2-q4', type: 'multiple-choice', prompt: '"11" nasıl denir?', promptEn: 'How do you say "11"?', streetPrompt: 'Pazi — Sırpçada 11?', answer: 'Jedanaest', options: ['Jedanaest','Dvanaest','Trinaest','Četrnaest'] },
          { id: 'n2-q5', type: 'translate', prompt: '"30" sayısını Sırpçaya çevir', promptEn: 'Translate "30" to Serbian', streetPrompt: 'Otuz — kaži na srpskom!', answer: 'Trideset', hint: 'tri = üç', hintEn: 'tri = three' },
          { id: 'n2-q6', type: 'multiple-choice', prompt: '"Hiljada" ne demek?', promptEn: 'What does "Hiljada" mean?', streetPrompt: 'Brate — "Hiljada" — ne kadar eder?', answer: '1000', options: ['100','500','1000','10000'] },
        ],
      },
      {
        id: 'numbers-3', title: 'Saatler ve Zaman', titleEn: 'Time and Hours', streetTitle: 'Koliko je sati, bre?', emoji: '⏰', xpReward: 30,
        questions: [
          { id: 'n3-q1', type: 'multiple-choice', prompt: '"Saat kaç?" nasıl sorulur?', promptEn: 'How do you ask "What time is it?"', streetPrompt: 'Pazi — saati nasıl soruyorsun?', answer: 'Koliko je sati?', options: ['Kako si?','Koliko je sati?','Gde je sat?','Imam sat'] },
          { id: 'n3-q2', type: 'translate', prompt: '"Saat 3" cümlesini çevir', promptEn: 'Translate the phrase "It is 3 o\'clock"', streetPrompt: 'Tri sata — çevir bunu brate!', answer: 'Tri su sata', hint: 'su = -dir (çoğul)', hintEn: 'su = are (plural marker)' },
          { id: 'n3-q3', type: 'multiple-choice', prompt: '"Podne" ne anlama gelir?', promptEn: 'What does "Podne" mean?', streetPrompt: '"Podne" — šta je to?', answer: 'Öğlen', options: ['Gece yarısı','Sabah','Öğlen','Akşam'] },
          { id: 'n3-q4', type: 'multiple-choice', prompt: '"Buçuk" (örn: saat 2 buçuk) nasıl denir?', promptEn: 'How do you say "half past"?', streetPrompt: 'Kapiram — Sırpçada "buçuk"?', answer: 'Pola tri', options: ['Dva i po','Pola tri','Tri i pola','Polovina'] },
          { id: 'n3-q5', type: 'translate', prompt: '"Dakika" kelimesini çevir', promptEn: 'Translate the word "Minute"', streetPrompt: 'Sırpçada "dakika" nedir vopi?', answer: 'Minut', hint: 'İngilizceye benziyor', hintEn: 'it is similar to English' },
        ],
      },
    ],
  },

  // ─── FOOD & DRINKS ────────────────────────────────────────────────────────
  {
    id: 'food', title: 'Yemek ve İçecek', titleEn: 'Food and Drinks', streetTitle: 'Ćevapi i Rakija',
    description: 'Yerliler gibi yemek ve içecek sipariş et',
    descriptionEn: 'Order food and drinks like a local',
    streetDescription: 'Bez ćevapa i piva nema života, kapiram?',
    emoji: '🍺', color: '#e67e22',
    lessons: [
      {
        id: 'food-1', title: 'Sipariş Vermek', titleEn: 'Ordering Food', streetTitle: 'Daj mi ćevape!', emoji: '🥙', xpReward: 25,
        questions: [
          { id: 'f1-q1', type: 'multiple-choice', prompt: '"Su" nasıl denir?', promptEn: 'How do you say "Water"?', streetPrompt: 'Pazi, "su" nasıl istersin?', answer: 'Voda', options: ['Pivo','Voda','Sok','Kafa'] },
          { id: 'f1-q2', type: 'multiple-choice', prompt: '"Kafa" nedir?', promptEn: 'What is "Kafa"?', streetPrompt: 'Brate, "Kafa" nedir?', answer: 'Kahve', options: ['Bira','Çay','Kahve','Meyve Suyu'] },
          { id: 'f1-q3', type: 'translate', prompt: '"Bir bira lütfen" cümlesini çevir', promptEn: 'Translate "A beer, please"', streetPrompt: 'Vopi, "Bir bira lütfen" çevir!', answer: 'Jedno pivo, molim', hint: 'jedno = bir, pivo = bira, molim = lütfen', hintEn: 'jedno = one, pivo = beer, molim = please' },
          { id: 'f1-q4', type: 'multiple-choice', prompt: '"Sladak" ne anlama gelir?', promptEn: 'What does "Sladak" mean?', streetPrompt: 'Kapiram, "Sladak" nedir?', answer: 'Tatlı', options: ['Tuzlu','Baharatlı','Tatlı','Ekşi'] },
          { id: 'f1-q5', type: 'translate', prompt: '"Hesap lütfen" cümlesini çevir', promptEn: 'Translate "The bill, please"', streetPrompt: 'Hesap zamanı — nasıl istersin?', answer: 'Račun, molim', hint: 'račun = hesap/fatura', hintEn: 'račun = bill/invoice' },
          { id: 'f1-q6', type: 'multiple-choice', prompt: '"Açım" nasıl denir?', promptEn: 'How do you say "I am hungry"?', streetPrompt: 'Brate, açlıktan öldüğünü nasıl söylersin?', answer: 'Gladan sam', options: ['Žedan sam','Gladan sam','Sit sam','Umoran sam'] },
        ],
      },
      {
        id: 'food-2', title: 'Sırp Mutfağı', titleEn: 'Serbian Cuisine', streetTitle: 'Srpska Kuhinja, majstore', emoji: '🍖', xpReward: 30,
        questions: [
          { id: 'f2-q1', type: 'multiple-choice', prompt: '"Ćevapi" nedir?', promptEn: 'What are "Ćevapi"?', streetPrompt: 'Brate — šta su ćevapi?', answer: 'Izgara rulo köfteler', options: ['Bir tür çorba','Izgara rulo köfteler','Kızarmış hamurişi','Dolma'] },
          { id: 'f2-q2', type: 'multiple-choice', prompt: '"Kajmak" nedir?', promptEn: 'What is "Kajmak"?', streetPrompt: 'Kapiram — "Kajmak" je šta?', answer: 'Kremamsı süt ürünü', options: ['Acı sos','Kremamsı süt ürünü','Ekşi krema çorbası','Bir tür ekmek'] },
          { id: 'f2-q3', type: 'translate', prompt: '"Ekmek" kelimesini çevir', promptEn: 'Translate the word "Bread"', streetPrompt: 'Hleb ili …? "Ekmek" çevir!', answer: 'Hleb', hint: 'h-leb', hintEn: 'starts with h' },
          { id: 'f2-q4', type: 'multiple-choice', prompt: '"Rakija" nedir?', promptEn: 'What is "Rakija"?', streetPrompt: 'Vopi — "Rakija" je šta?', answer: 'Sırbistan meyve rakısı', options: ['Köpüklü şarap','Sırbistan meyve rakısı','Kahve likörü','Elma suyu'] },
          { id: 'f2-q5', type: 'multiple-choice', prompt: '"Lezzetli" nasıl denir?', promptEn: 'How do you say "Tasty"?', streetPrompt: 'Pazi — yemeğin mükemmel olduğunu nasıl söylersin?', answer: 'Ukusno', options: ['Loše','Ukusno','Slano','Kiselo'] },
          { id: 'f2-q6', type: 'translate', prompt: '"İki kişilik masa istiyorum" cümlesini çevir', promptEn: 'Translate "I want a table for two"', streetPrompt: 'Restoran — iki kişilik masa nasıl istersin?', answer: 'Stolić za dvoje, molim', hint: 'stolić = masa (küçük), dvoje = iki kişi', hintEn: 'stolić = table (small), dvoje = two people' },
        ],
      },
      {
        id: 'food-3', title: 'Pazarda', titleEn: 'At the Market', streetTitle: 'Na pijaci, brate', emoji: '🥦', xpReward: 25,
        questions: [
          { id: 'f3-q1', type: 'multiple-choice', prompt: '"Bunun fiyatı nedir?" nasıl denir?', promptEn: 'How do you ask "How much does this cost?"', streetPrompt: 'Pijaca — fiyatı nasıl sorarsın?', answer: 'Koliko košta ovo?', options: ['Gde je to?','Koliko košta ovo?','Šta je ovo?','Da li imate ovo?'] },
          { id: 'f3-q2', type: 'translate', prompt: '"Elma" kelimesini çevir', promptEn: 'Translate the word "Apple"', streetPrompt: 'Jabuka ili …? "Elma" çevir!', answer: 'Jabuka', hint: 'ja-bu-ka', hintEn: 'ja-bu-ka' },
          { id: 'f3-q3', type: 'multiple-choice', prompt: '"Paradajz" nedir?', promptEn: 'What is "Paradajz"?', streetPrompt: 'Kapiram — "Paradajz" hangi sebzedir?', answer: 'Domates', options: ['Salatalık','Biber','Domates','Soğan'] },
          { id: 'f3-q4', type: 'multiple-choice', prompt: '"Pahalı" nasıl denir?', promptEn: 'How do you say "Expensive"?', streetPrompt: 'Brate — bir şeyin çok pahalı olduğunu nasıl söylersin?', answer: 'Skupo', options: ['Jeftino','Skupo','Besplatno','Dosta'] },
          { id: 'f3-q5', type: 'translate', prompt: '"1 kilo domates istiyorum" cümlesini çevir', promptEn: 'Translate "I want 1 kilo of tomatoes"', streetPrompt: 'Pijaca order — kilogram paradajza!', answer: 'Jedan kilogram paradajza', hint: 'jedan = bir', hintEn: 'jedan = one' },
        ],
      },
    ],
  },

  // ─── DIRECTIONS ───────────────────────────────────────────────────────────
  {
    id: 'directions', title: 'Yol Bulma', titleEn: 'Directions', streetTitle: 'Snađi se, brate',
    description: 'Belgrad ve Sırp şehirlerinde yolunu bul',
    descriptionEn: 'Find your way in Belgrade and other cities',
    streetDescription: 'Bez pravca se ne ide — osim na Kalimegdan',
    emoji: '🗺️', color: '#8e44ad',
    lessons: [
      {
        id: 'directions-1', title: 'Sol, Sağ, İleri', titleEn: 'Left, Right, Straight', streetTitle: 'Levo, desno, pravo', emoji: '🧭', xpReward: 20,
        questions: [
          { id: 'd1-q1', type: 'multiple-choice', prompt: '"Sol" nasıl denir?', promptEn: 'How do you say "Left"?', streetPrompt: 'Pazi levo — "sol" nasıl denir?', answer: 'Levo', options: ['Desno','Pravo','Levo','Gore'] },
          { id: 'd1-q2', type: 'multiple-choice', prompt: 'Yol tarifinde "Pravo" ne anlama gelir?', promptEn: 'What does "Pravo" mean in directions?', streetPrompt: 'Brate, kaybolduğunda "Pravo" nedir?', answer: 'Dümdüz ileri', options: ['Sağa dön','Geri dön','Dümdüz ileri','Sola dön'] },
          { id: 'd1-q3', type: 'translate', prompt: '"Otobüs durağı nerede?" kelimesini çevir', promptEn: 'Translate "Where is the bus stop?"', streetPrompt: 'Kapiram — otobüs durağını nasıl bulursun?', answer: 'Gde je autobuska stanica?', hint: 'Gde = nerede, je = -dir', hintEn: 'Gde = where, je = is' },
          { id: 'd1-q4', type: 'multiple-choice', prompt: '"Sağ" nasıl denir?', promptEn: 'How do you say "Right"?', streetPrompt: 'Sağa dön — bunu nasıl söylersin?', answer: 'Desno', options: ['Levo','Gore','Desno','Dole'] },
          { id: 'd1-q5', type: 'translate', prompt: '"Ne kadar uzak?" kelimesini çevir', promptEn: 'Translate "How far is it?"', streetPrompt: 'Brate, mesafeyi nasıl sorarsın?', answer: 'Koliko je daleko?', hint: 'daleko = uzak', hintEn: 'daleko = far' },
        ],
      },
      {
        id: 'directions-2', title: 'Ulaşım', titleEn: 'Transportation', streetTitle: 'Autobus ili taksi?', emoji: '🚌', xpReward: 30,
        questions: [
          { id: 'd2-q1', type: 'multiple-choice', prompt: '"Taksi" nasıl denir?', promptEn: 'How do you say "Taxi"?', streetPrompt: 'Kapiram —ynı kelime, farklı aksan?', answer: 'Taksi', options: ['Taksi','Tramvaj','Autobus','Metro'] },
          { id: 'd2-q2', type: 'translate', prompt: '"Havalimanı" kelimesini çevir', promptEn: 'Translate the word "Airport"', streetPrompt: 'Aerodrom or …? "Havalimanı" çevir!', answer: 'Aerodrom', hint: 'İngilizceye/Türkçeye benziyor!', hintEn: 'it is similar to English!' },
          { id: 'd2-q3', type: 'multiple-choice', prompt: 'Nasıl bilet istersin?', promptEn: 'How do you ask for a ticket?', streetPrompt: 'Pazi — nasıl bilet alırsın?', answer: 'Jednu kartu, molim', options: ['Daj mi vozilo','Jednu kartu, molim','Gde je taksi?','Koliko košta?'] },
          { id: 'd2-q4', type: 'multiple-choice', prompt: '"Stanica" nedir?', promptEn: 'What is "Stanica"?', streetPrompt: 'Brate — šta znači "Stanica"?', answer: 'İstasyon / Durak', options: ['İstasyon / Durak','Sokak','Şehir merkezi','Tarife'] },
          { id: 'd2-q5', type: 'translate', prompt: '"Merkeze gitmem gerekiyor" cümlesini çevir', promptEn: 'Translate "I need to go to the center"', streetPrompt: 'Taksi — şoföre nereye gideceğini nasıl söylersin?', answer: 'Treba mi da idem u centar', hint: 'treba mi = bana lazım/gerekiyor', hintEn: 'treba mi = I need' },
        ],
      },
    ],
  },

  // ─── STREET SLANG ─────────────────────────────────────────────────────────
  {
    id: 'street-slang', title: 'Sokak Ağzı 🔥', titleEn: 'Street Slang', streetTitle: 'Ulični Rečnik',
    description: 'Gerçek Sırpça — argolar, deyimler, tarz',
    descriptionEn: 'Real Serbian — slang, idioms, style',
    streetDescription: 'Jebiga, ovo je ono pravo. Ulični srpski za prave likove.',
    emoji: '💀', color: '#39ff14',
    isPro: true,
    lessons: [
      {
        id: 'slang-1', title: 'Temel Sokak Ağzı', titleEn: 'Basic Street Slang', streetTitle: 'Mora da znaš ovo', emoji: '🔥', xpReward: 50,
        questions: [
          { id: 's1-q1', type: 'multiple-choice', prompt: '"Jebiga" ne ifade eder?', promptEn: 'What does "Jebiga" express?', streetPrompt: 'Brate, šta znači "Jebiga"?', answer: 'Ne yaparsın / Aman boşver', options: ['Seni seviyorum','Ne yaparsın / Aman boşver',"Hadi gidelim",'Sorun değil'] },
          { id: 's1-q2', type: 'multiple-choice', prompt: '"Brate" arkadaşlar arasında ne demektir?', promptEn: 'What does "Brate" mean among friends?', streetPrompt: 'Pazi, šta znači "Brate"?', answer: 'Kardeşim / Kanka', options: ['Erkek Kardeş (resmi)','Kardeşim / Kanka','Düşman','Yabancı'] },
          { id: 's1-q3', type: 'multiple-choice', prompt: 'Biri sana "Kapiram" derse, ne diyordur?', promptEn: 'If someone tells you "Kapiram", what are they saying?', streetPrompt: 'Vopi, šta znači "Kapiram"?', answer: 'Anlıyorum / Çakıyorum', options: ['Açım','Anlıyorum / Çakıyorum','Gidiyorum','Katılmıyorum'] },
          { id: 's1-q4', type: 'multiple-choice', prompt: '"Ajde" ne anlama gelir?', promptEn: 'What does "Ajde" mean?', streetPrompt: 'Ajde — šta ovo znači?', answer: "Hadi / Bas git", options: ['Dur',"Hadi / Bas git",'Bekle','Boşver'] },
          { id: 's1-q5', type: 'translate', prompt: '"Boşver / Takma" (argo) nasıl denir?', promptEn: 'How to say "Forget it / Don\'t bother" (slang)?', streetPrompt: 'Sırpça "kanka takma" naısl dersin?', answer: 'Jebiga', hint: 'Bu kelimenin kendisi uygulamanın adı 😏', hintEn: 'This word is the name of the app 😏' },
        ],
      },
      {
        id: 'slang-2', title: 'Balkan Ruh Hali', titleEn: 'Balkan Vibe', streetTitle: 'Balkanski stil', emoji: '😤', xpReward: 50,
        questions: [
          { id: 's2-q1', type: 'multiple-choice', prompt: '"Šta ima?" ne anlama gelir?', promptEn: 'What does "Šta ima?" mean?', streetPrompt: 'Pazi — "Šta ima?" ne tür bir selamdır?', answer: "Naber? / Ne var ne yok?", options: ['Sende ne var?',"Naber? / Ne var ne yok?",'Ne oldu?','Ne istiyorsun?'] },
          { id: 's2-q2', type: 'multiple-choice', prompt: 'Cümle sonundaki "Bre" ne anlama gelir?', promptEn: 'What does "Bre" mean at the end of a sentence?', streetPrompt: 'Kapiram — "Bre" šta je to?', answer: 'Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)', options: ['Görüşürüz','Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)','Evet','Lütfen'] },
          { id: 's2-q3', type: 'translate', prompt: '"Sakin ol!" (argo: "Smiri se!") cümlesini çevir', promptEn: 'Translate "Calm down!" (slang: "Smiri se!")', streetPrompt: 'Sırpçada birine sakin olmasını nasıl söylersin?', answer: 'Smiri se', hint: 'smiriti = sakinleşmek', hintEn: 'smiriti = to calm down' },
          { id: 's2-q4', type: 'multiple-choice', prompt: '"Mrak" kelime anlamında karanlıktır, argoda nedir?', promptEn: 'What does "Mrak" mean in slang?', streetPrompt: 'Brate — "Mrak" — šta je to?', answer: 'Karanlık, ama argoda "Harika/Efsane"', options: ['Berbat','Karanlık, ama argoda "Harika/Efsane"','Sıkıcı','Soğuk'] },
          { id: 's2-q5', type: 'multiple-choice', prompt: '"Sve pet" ne anlama gelir?', promptEn: 'What does "Sve pet" mean?', streetPrompt: 'Vopi — "Sve pet" — šta znači?', answer: 'Her şey on numara beş yıldız', options: ['Beş kişi','Her şey on numara beş yıldız','Çak bi beşlik','Beş liram var'] },
          { id: 's2-q6', type: 'translate', prompt: '"Umrumda değil" (argo) nasıl denir?', promptEn: 'How to say "I don\'t care" (slang)?', streetPrompt: 'Kapiram — hiç sallamadığını nasıl söylersin?', answer: 'Boli me uvo', hint: '"Kulağım ağrıyor" — Sırpların "Umrumda değil" deme şekli 😂', hintEn: '"My ear hurts" — The Serbian way to say "I don\'t care" 😂' },
        ],
      },
      {
        id: 'slang-3', title: 'Küfürler ve Tepkiler', titleEn: 'Cursing and Reactions', streetTitle: 'Psovke i izrazi', emoji: '💥', xpReward: 60,
        questions: [
          { id: 's3-q1', type: 'multiple-choice', prompt: '"Majku mu" ne ifade eder?', promptEn: 'What does "Majku mu" express?', streetPrompt: 'Pazi brate — "Majku mu" ne tür bir ifade?', answer: 'Bir sinirlenme/hayal kırıklığı sözü', options: ['Bir iltifat','Bir sinirlenme/hayal kırıklığı sözü','Bir selamlama','Bir veda'] },
          { id: 's3-q2', type: 'multiple-choice', prompt: '"Idi" ne anlama gelir?', promptEn: 'What does "Idi" mean?', streetPrompt: 'Biri sana "Idi!" diye bağırıyor, ne istiyor?', answer: 'Çek git / Kaybol!', options: ['Buraya gel!','Çek git / Kaybol!','Otur ulan!','Dur!'] },
          { id: 's3-q3', type: 'multiple-choice', prompt: '"Ma daj!" ne ifade eder?', promptEn: 'What does "Ma daj!" mean?', streetPrompt: '"Ma daj!" — šta to znači, brate?', answer: 'Yok artık! / Hadi canım!', options: ['Bana daha ver','Yok artık! / Hadi canım!','Anlıyorum','Elbette'] },
          { id: 's3-q4', type: 'translate', prompt: '"Beni rahat bırak!" (samimi) cümlesini çevir', promptEn: 'Translate "Leave me alone!" (informal)', streetPrompt: 'Brate, birine uzak durmasını nasıl söylersin?', answer: 'Ostavi me na miru', hint: 'mir = barış/huzur', hintEn: 'mir = peace/tranquility' },
          { id: 's3-q5', type: 'multiple-choice', prompt: '"Odlično" ne anlama gelir?', promptEn: 'What does "Odlično" mean?', streetPrompt: 'Vopi — "Odlično" — šta je to?', answer: 'Mükemmel!', options: ['Berbat','İdare eder','Mükemmel!','Tuhaf'] },
        ],
      },
      {
        id: 'slang-4', title: 'Flört & İlişkiler', titleEn: 'Flirting & Relationships', streetTitle: 'Muvanje i kafana', emoji: '💕', xpReward: 60,
        questions: [
          { id: 's4-q1', type: 'multiple-choice', prompt: '"Smuvati" ne anlama gelir?', promptEn: 'What does "Smuvati" mean?', streetPrompt: 'Pazi brate — šta znači "smuvati"?', answer: 'Tavlamak / Biriyle başarılı flörtleşmek', options: ['Kavga etmek','Kaçmak','Tavlamak / Biriyle başarılı flörtleşmek','Sarhoş olmak'] },
          { id: 's4-q2', type: 'multiple-choice', prompt: '"Vrh" kelime anlamı olarak nedir ve argoda ne demektir?', promptEn: 'What is "Vrh" in literal and slang meaning?', streetPrompt: 'Brate, what is "Vrh"?', answer: 'Kelime: Zirve / Argo: Muazzam/Harika', options: ['Kelime: Dip / Argo: Berbat','Kelime: Kenar / Argo: İdare Eder','Kelime: Son / Argo: Bitti','Kelime: Zirve / Argo: Muazzam/Harika'] },
          { id: 's4-q3', type: 'translate', prompt: '"Şerefe!" cümlesini çevir', promptEn: 'Translate "Cheers!"', streetPrompt: 'Rakı ile ne söylersin?', answer: 'Živeli', hint: 'zhi-ve-li', hintEn: 'zhi-ve-li' },
          { id: 's4-q4', type: 'multiple-choice', prompt: '"Šmeker" kime denir?', promptEn: 'Who is called a "Šmeker"?', streetPrompt: 'Kendini "Šmeker" sanıyor — o da nedir?', answer: 'Ortamların adamı / Yakışıklı Çapkın', options: ['Ezik','İnek','Ortamların adamı / Yakışıklı Çapkın','Patron'] },
        ],
      },
      {
        id: 'slang-5', title: 'Partilemek', titleEn: 'Partying', streetTitle: 'Luda žurka', emoji: '🍻', xpReward: 60,
        questions: [
          { id: 's5-q1', type: 'multiple-choice', prompt: '"Ludo" ne anlama gelir?', promptEn: 'What does "Ludo" mean?', streetPrompt: 'Kakva noć! "Ludo" je!', answer: 'Çılgın / Delice', options: ['Sıkıcı','Gürültülü','Çılgın / Delice','Soğuk'] },
          { id: 's5-q2', type: 'translate', prompt: '"Parti" kelimesini çevir', promptEn: 'Translate the word "Party"', streetPrompt: 'Žurka or …? "parti" kelimesini çevir!', answer: 'Žurka', hint: 'zhur-ka', hintEn: 'zhur-ka' },
          { id: 's5-q3', type: 'multiple-choice', prompt: '"Pijan kao letva" ne anlama gelir?', promptEn: 'What does "Pijan kao letva" mean?', streetPrompt: 'Pazi brate — "Pijan kao letva"?', answer: 'Kütük gibi sarhoş', options: ['Sadece biraz çakırkeyif','Kütük gibi sarhoş','Su içiyor','Ayık'] },
          { id: 's5-q4', type: 'translate', prompt: 'Akşamdan kalmalık ("hangover") kelimesini çevir', promptEn: 'Translate the word "Hangover"', streetPrompt: 'Ertesi sabah… sende ne var?', answer: 'Mamurluk', hint: 'ma-mur-luk', hintEn: 'ma-mur-luk' },
        ],
      },
    ],
  },

  // ─── DAILY LIFE ───────────────────────────────────────────────────────────
  {
    id: 'daily-life', title: 'Günlük Yaşam', titleEn: 'Daily Life', streetTitle: 'Svaki dan, majstore',
    description: 'Günlük hayatın ve rutinlerin hakkında konuş',
    descriptionEn: 'Talk about your daily life and routines',
    streetDescription: 'Šta radiš svaki dan? Nauči da pričaš o životu.',
    emoji: '☀️', color: '#16a085',
    isPro: true,
    lessons: [
      {
        id: 'daily-1', title: 'Sabah Rutini', titleEn: 'Morning Routine', streetTitle: 'Jutro je, ustaj!', emoji: '🌅', xpReward: 25,
        questions: [
          { id: 'dl1-q1', type: 'multiple-choice', prompt: '"Uyanıyorum" nasıl denir?', promptEn: 'How to say "I am waking up"?', streetPrompt: 'Pazi — uyandığını nasıl söylersin?', answer: 'Buđim se', options: ['Spavam','Buđim se','Jedem','Idem'] },
          { id: 'dl1-q2', type: 'translate', prompt: '"Her sabah kahve içerim" cümlesini çevir', promptEn: 'Translate "I drink coffee every morning"', streetPrompt: 'Kapiram — sabah kahveni söyle bakalım!', answer: 'Pijem kafu svako jutro', hint: 'pijem = içerim, svako = her', hintEn: 'pijem = I drink, svako = every/each' },
          { id: 'dl1-q3', type: 'multiple-choice', prompt: '"Kupatilo" ne anlama gelir?', promptEn: 'What does "Kupatilo" mean?', streetPrompt: 'Brate — "Kupatilo" — šta je to?', answer: 'Banyo', options: ['Mutfak','Yatak odası','Banyo','Oturma odası'] },
          { id: 'dl1-q4', type: 'multiple-choice', prompt: '"İşe gidiyorum" nasıl denir?', promptEn: 'How to say "I am going to work"?', streetPrompt: 'Pazartesi sendromu — işe gittiğini nasıl söylersin?', answer: 'Idem na posao', options: ['Idem kući','Idem na posao','Radim kod kuće','Ne radim'] },
          { id: 'dl1-q5', type: 'translate', prompt: '"Yorgunum" cümlesini çevir', promptEn: 'Translate "I am tired"', streetPrompt: 'Brate, çok yorgun olduğunu nasıl söylersin?', answer: 'Umoran sam', hint: 'umoran = yorgun (erkek), umorna = yorgun (kadın)', hintEn: 'umoran = tired (male), umorna = tired (female)' },
        ],
      },
      {
        id: 'daily-2', title: 'Evde', titleEn: 'At Home', streetTitle: 'Kod kuće, opušten', emoji: '🏠', xpReward: 25,
        questions: [
          { id: 'dl2-q1', type: 'multiple-choice', prompt: '"Kuća" ne anlama gelir?', promptEn: 'What does "Kuća" mean?', streetPrompt: '"Kuća" — šta je to?', answer: 'Ev', options: ['Apartman','Ev','Oda','Bina'] },
          { id: 'dl2-q2', type: 'translate', prompt: '"Oturma odası" kelimesini çevir', promptEn: 'Translate the phrase "Living room"', streetPrompt: 'Dnevna soba or …? "Oturma odası" çevir!', answer: 'Dnevna soba', hint: 'dnevna = günlük, soba = oda', hintEn: 'dnevna = daily/living, soba = room' },
          { id: 'dl2-q3', type: 'multiple-choice', prompt: '"Televizyon izliyorum" nasıl denir?', promptEn: 'How to say "I am watching television"?', streetPrompt: 'Kapiram — evde takılıyorsun, ne yapıyorsun?', answer: 'Gledam televiziju', options: ['Slušam muziku','Gledam televiziju','Čitam knjigu','Spavam'] },
          { id: 'dl2-q4', type: 'multiple-choice', prompt: '"Prozor" nedir?', promptEn: 'What is "Prozor"?', streetPrompt: 'Brate — "Prozor"?', answer: 'Pencere', options: ['Kapı','Tavan','Pencere','Zemin'] },
          { id: 'dl2-q5', type: 'translate', prompt: '"Pencereyi açabilir misin?" cümlesini çevir', promptEn: 'Translate "Can you open the window?"', streetPrompt: 'Çok sıcak — birinin pencereyi açmasını nasıl istersin?', answer: 'Možeš li otvoriti prozor?', hint: 'možeš li = yapabilir misin, otvoriti = açmak', hintEn: 'možeš li = can you, otvoriti = to open' },
        ],
      },
      {
        id: 'daily-3', title: 'İş ve Okul', titleEn: 'Work and School', streetTitle: 'Posao i škola', emoji: '💼', xpReward: 30,
        questions: [
          { id: 'dl3-q1', type: 'multiple-choice', prompt: '"Bir ofiste çalışıyorum" nasıl denir?', promptEn: 'How to say "I work in an office"?', streetPrompt: 'Pazi — plaza çalışanı, nasıl söylersin?', answer: 'Radim u kancelariji', options: ['Radim u fabrici','Radim u kancelariji','Radim kod kuće','Ne radim'] },
          { id: 'dl3-q2', type: 'translate', prompt: '"Toplantı" kelimesini çevir', promptEn: 'Translate the word "Meeting"', streetPrompt: 'Sastanak or …? "Toplantı" nasıl denir?', answer: 'Sastanak', hint: 'sa-sta-nak', hintEn: 'sa-sta-nak' },
          { id: 'dl3-q3', type: 'multiple-choice', prompt: '"Škola" ne anlama gelir?', promptEn: 'What does "Škola" mean?', streetPrompt: '"Škola" — šta je to?', answer: 'Okul', options: ['Hastane','Okul','Üniversite','Kütüphane'] },
          { id: 'dl3-q4', type: 'multiple-choice', prompt: '"Sırpça çalışıyorum" nasıl denir?', promptEn: 'How to say "I am studying Serbian"?', streetPrompt: 'Kapiram — Sırpça öğreniyorsun, nasıl söylersin?', answer: 'Učim srpski', options: ['Pričam srpski','Učim srpski','Volim srpski','Govorim srpski'] },
          { id: 'dl3-q5', type: 'translate', prompt: '"Toplantı saat 9\'da" cümlesini çevir', promptEn: 'Translate "The meeting is at 9 o\'clock"', streetPrompt: 'Pazi — toplantının kaçta olduğunu nasıl söylersin?', answer: 'Sastanak je u devet', hint: 'je = -dir, u = -de/-da', hintEn: 'je = is, u = at/in' },
        ],
      },
    ],
  },

  // ─── EMOTIONS & FEELINGS ──────────────────────────────────────────────────
  {
    id: 'emotions', title: 'Duygular', titleEn: 'Emotions', streetTitle: 'Kako se osećaš?',
    description: 'Sırpça duygularını ifade et',
    descriptionEn: 'Express your feelings in Serbian',
    streetDescription: 'Brate, kako se osećaš? Nauči da kažeš.',
    emoji: '❤️', color: '#e91e63',
    isPro: true,
    lessons: [
      {
        id: 'emotions-1', title: 'Temel Duygular', titleEn: 'Basic Emotions', streetTitle: 'Sreća, tuga, bes', emoji: '😊', xpReward: 25,
        questions: [
          { id: 'em1-q1', type: 'multiple-choice', prompt: '"Mutluyum" nasıl denir?', promptEn: 'How to say "I am happy"?', streetPrompt: 'Brate — mutlu olduğunu nasıl söylersin?', answer: 'Srećan sam', options: ['Tužan sam','Srećan sam','Ljut sam','Uplašen sam'] },
          { id: 'em1-q2', type: 'translate', prompt: '"Üzgünüm" cümlesini çevir', promptEn: 'Translate "I am sorry/sad"', streetPrompt: 'Kapiram — üzüntünü nasıl ifade edersin?', answer: 'Tužan sam', hint: 'tužan = üzgün (erkek); tužna = üzgün (kadın)', hintEn: 'tužan = sad (male); tužna = sad (female)' },
          { id: 'em1-q3', type: 'multiple-choice', prompt: '"Ljut" ne anlama gelir?', promptEn: 'What does "Ljut" mean?', streetPrompt: '"Ljut" — kako se osećaš?', answer: 'Sinirli', options: ['Heyecanlı','Sıkkın','Sinirli','Korkmuş'] },
          { id: 'em1-q4', type: 'multiple-choice', prompt: '"Seni seviyorum" nasıl denir?', promptEn: 'How to say "I love you"?', streetPrompt: 'Pazi — en büyük cümle! "Seni seviyorum" nasıl denir?', answer: 'Volim te', options: ['Sviđaš mi se','Volim te','Nedostaješ mi','Znam te'] },
          { id: 'em1-q5', type: 'translate', prompt: '"Seni özledim" cümlesini çevir', promptEn: 'Translate "I missed you"', streetPrompt: 'Brate — birini özlediğini nasıl söylersin?', answer: 'Nedostaješ mi', hint: 'nedostajati = eksiklik hissetmek/özlemek', hintEn: 'nedostajati = to miss someone' },
          { id: 'em1-q6', type: 'multiple-choice', prompt: '"Usamljen" nedir?', promptEn: 'What is "Usamljen"?', streetPrompt: '"Usamljen" — šta je to?', answer: 'Yalnız', options: ['Yorgun','Yalnız','Heyecanlı','Mutlu'] },
        ],
      },
      {
        id: 'emotions-2', title: 'Fikirler', titleEn: 'Ideas & Opinions', streetTitle: 'Šta misliš?', emoji: '🤔', xpReward: 30,
        questions: [
          { id: 'em2-q1', type: 'multiple-choice', prompt: '"Bence…" nasıl denir?', promptEn: 'How to say "I think..."?', streetPrompt: 'Pazi — fikrini nasıl paylaşırsın?', answer: 'Mislim da…', options: ['Znam da…','Mislim da…','Vidim da…','Hoću da…'] },
          { id: 'em2-q2', type: 'translate', prompt: '"Bana göre / Benim fikrimce" cümlesini çevir', promptEn: 'Translate "In my opinion"', streetPrompt: 'Kapiram — bir fikre nasıl başlarsın?', answer: 'Po mom mišljenju', hint: 'mišljenje = fikir/görüş', hintEn: 'mišljenje = opinion/view' },
          { id: 'em2-q3', type: 'multiple-choice', prompt: 'Biriyle aynı fikirde olduğunu nasıl söylersin?', promptEn: 'How to say "I agree"?', streetPrompt: 'Brate — "Katılıyorum" nasıl denir?', answer: 'Slažem se', options: ['Ne slažem se','Slažem se','Ne znam','Možda'] },
          { id: 'em2-q4', type: 'multiple-choice', prompt: '"Možda" ne anlama gelir?', promptEn: 'What does "Možda" mean?', streetPrompt: '"Možda" — šta je to?', answer: 'Belki / Olabilir', options: ['Evet','Hayır','Belki / Olabilir','Asla'] },
          { id: 'em2-q5', type: 'translate', prompt: '"Bilmiyorum" cümlesini çevir', promptEn: 'Translate "I don\'t know"', streetPrompt: 'Pazi — bilmediğini nasıl söylersin?', answer: 'Ne znam', hint: 'ne = hayır/değil, znam = biliyorum', hintEn: 'ne = no/not, znam = I know' },
        ],
      },
    ],
  },

  // ─── WEATHER ──────────────────────────────────────────────────────────────
  {
    id: 'weather', title: 'Hava Durumu', titleEn: 'Weather', streetTitle: 'Kakvo je vreme?',
    description: 'Hava durumu hakkında Sırpça konuş',
    descriptionEn: 'Talk about the weather in Serbian',
    streetDescription: 'Beograd ima sve — güneşi de var, karı da.',
    emoji: '⛅', color: '#2980b9',
    isPro: true,
    lessons: [
      {
        id: 'weather-1', title: 'Temel Hava', titleEn: 'Basic Weather', streetTitle: 'Kiša ili sunce?', emoji: '🌤️', xpReward: 20,
        questions: [
          { id: 'w1-q1', type: 'multiple-choice', prompt: '"Hava nasıl?" diye nasıl sorulur?', promptEn: 'How to ask "What is the weather like?"', streetPrompt: 'Pazi — havanın nasıl olduğunu nasıl sorarsın?', answer: 'Kakvo je vreme?', options: ['Koliko je toplo?','Kakvo je vreme?','Da li pada kiša?','Je li sunčano?'] },
          { id: 'w1-q2', type: 'translate', prompt: '"Yağmur yağıyor" cümlesini çevir', promptEn: 'Translate "It is raining"', streetPrompt: 'Kiša pada — yağmur yağdığını nasıl söylersin?', answer: 'Pada kiša', hint: 'pada = düşüyor, kiša = yağmur', hintEn: 'pada = falls, kiša = rain' },
          { id: 'w1-q3', type: 'multiple-choice', prompt: '"Sunčano" ne anlama gelir?', promptEn: 'What does "Sunčano" mean?', streetPrompt: '"Sunčano" — kakvo je vreme?', answer: 'Güneşli', options: ['Bulutlu','Rüzgarlı','Güneşli','Yağmurlu'] },
          { id: 'w1-q4', type: 'multiple-choice', prompt: '"Hava soğuk" nasıl denir?', promptEn: 'How to say "It is cold"?', streetPrompt: 'Brrr — havanın soğuk olduğunu Sırpçada nasıl söylersin?', answer: 'Hladno je', options: ['Toplo je','Hladno je','Vetrovito je','Vlažno je'] },
          { id: 'w1-q5', type: 'translate', prompt: '"Kar" kelimesini çevir', promptEn: 'Translate the word "Snow"', streetPrompt: 'Beograd zimi — "kar" kelimesini çevir!', answer: 'Sneg', hint: 's-neg', hintEn: 's-neg' },
          { id: 'w1-q6', type: 'multiple-choice', prompt: '"Oblačno" ne anlama gelir?', promptEn: 'What does "Oblačno" mean?', streetPrompt: '"Oblačno" — kakvo je vreme?', answer: 'Bulutlu', options: ['Güneşli','Soğuk','Bulutlu','Sıcak'] },
        ],
      },
      {
        id: 'weather-2', title: 'Mevsimler', titleEn: 'Seasons', streetTitle: 'Godišnja doba', emoji: '🍂', xpReward: 25,
        questions: [
          { id: 'w2-q1', type: 'multiple-choice', prompt: '"Yaz" nasıl denir?', promptEn: 'How to say "Summer"?', streetPrompt: 'Kapiram — Sırpçada "Yaz"?', answer: 'Leto', options: ['Zima','Proleće','Leto','Jesen'] },
          { id: 'w2-q2', type: 'translate', prompt: '"Kış" kelimesini çevir', promptEn: 'Translate the word "Winter"', streetPrompt: 'Brrr — Sırpçada "Kış"?', answer: 'Zima', hint: 'zi-ma', hintEn: 'zi-ma' },
          { id: 'w2-q3', type: 'multiple-choice', prompt: '"Proleće" nedir?', promptEn: 'What is "Proleće"?', streetPrompt: '"Proleće" — hangi mevsim?', answer: 'İlkbahar', options: ['Sonbahar','Kış','İlkbahar','Yaz'] },
          { id: 'w2-q4', type: 'multiple-choice', prompt: '"Sonbahar" nasıl denir?', promptEn: 'How to say "Autumn"?', streetPrompt: 'Pazi — hangi kelime sonbahar demek?', answer: 'Jesen', options: ['Leto','Zima','Proleće','Jesen'] },
          { id: 'w2-q5', type: 'translate', prompt: '"Yazı seviyorum" cümlesini çevir', promptEn: 'Translate "I love summer"', streetPrompt: 'Brate — yaz mevsimine bayıldığını söyle!', answer: 'Volim leto', hint: 'volim = seviyorum', hintEn: 'volim = I love' },
        ],
      },
    ],
  },

  // ─── FAMILY ───────────────────────────────────────────────────────────────
  {
    id: 'family', title: 'Aile', titleEn: 'Family', streetTitle: 'Porodica, brate',
    description: 'Aile üyelerin hakkında konuş',
    descriptionEn: 'Talk about your family members',
    streetDescription: 'Porodica je sve — aile candır, sülaleyi öğren.',
    emoji: '👨‍👩‍👧', color: '#27ae60',
    isPro: true,
    lessons: [
      {
        id: 'family-1', title: 'Aile Üyeleri', titleEn: 'Family Members', streetTitle: 'Ko je ko u familiji', emoji: '👪', xpReward: 25,
        questions: [
          { id: 'fam1-q1', type: 'multiple-choice', prompt: '"Anne" nasıl denir?', promptEn: 'How to say "Mother"?', streetPrompt: 'Pazi — Sırpçada "Anne"?', answer: 'Majka', options: ['Otac','Majka','Brat','Sestra'] },
          { id: 'fam1-q2', type: 'translate', prompt: '"Baba" kelimesini çevir', promptEn: 'Translate the word "Father"', streetPrompt: 'Brate — Sırpçada "Baba"?', answer: 'Otac', hint: 'o-tac', hintEn: 'o-tac' },
          { id: 'fam1-q3', type: 'multiple-choice', prompt: '"Brat" ne anlama gelir?', promptEn: 'What does "Brat" mean?', streetPrompt: '"Brat" — šta je to?', answer: 'Erkek Kardeş', options: ['Kız kardeş','Baba','Erkek Kardeş','Oğul'] },
          { id: 'fam1-q4', type: 'multiple-choice', prompt: '"Büyükanne/Nine" nasıl denir?', promptEn: 'How to say "Grandmother"?', streetPrompt: 'Kapiram — neneye nasıl seslenirsin?', answer: 'Baka', options: ['Deda','Baka','Tetka','Strina'] },
          { id: 'fam1-q5', type: 'translate', prompt: '"İki erkek kardeşim var" cümlesini çevir', promptEn: 'Translate "I have two brothers"', streetPrompt: 'Brate — iki erkek kardeşin olduğunu nasıl söylersin?', answer: 'Imam dva brata', hint: 'imam = sahibim/var, dva = iki', hintEn: 'imam = I have, dva = two' },
          { id: 'fam1-q6', type: 'multiple-choice', prompt: '"Deda" kimdir?', promptEn: 'Who is "Deda"?', streetPrompt: '"Deda" is who?', answer: 'Babaanne/Büyükbaba', options: ['Amca','Baba','Dede / Büyükbaba','Oğul'] },
        ],
      },
      {
        id: 'family-2', title: 'Aileyi Anlatmak', titleEn: 'Describing Family', streetTitle: 'Kakva je tvoja familija?', emoji: '🧬', xpReward: 30,
        questions: [
          { id: 'fam2-q1', type: 'multiple-choice', prompt: '"Ailem büyük" nasıl denir?', promptEn: 'How to say "My family is large"?', streetPrompt: 'Kapiram — büyük aileni anlat bakalım!', answer: 'Moja porodica je velika', options: ['Moja porodica je mala','Moja porodica je velika','Imam porodicu','Volim porodicu'] },
          { id: 'fam2-q2', type: 'translate', prompt: '"Kız kardeşim genç/küçük" cümlesini çevir', promptEn: 'Translate "My sister is young"', streetPrompt: 'Pazi — kız kardeşinin genç olduğunu nasıl söylersin?', answer: 'Moja sestra je mlada', hint: 'mlada = genç (kadın/dişil)', hintEn: 'mlada = young (female)' },
          { id: 'fam2-q3', type: 'multiple-choice', prompt: '"Star" ne anlama gelir?', promptEn: 'What does "Star" mean?', streetPrompt: '"Star" — šta znači?', answer: 'Yaşlı / Eski', options: ['Genç','Uzun','Yaşlı / Eski','Zeki'] },
          { id: 'fam2-q4', type: 'multiple-choice', prompt: '"Babam Belgrad\'da çalışıyor" nasıl denir?', promptEn: 'How to say "My father works in Belgrade"?', streetPrompt: 'Brate — babanın nerede çalıştığını nasıl anlatırsın?', answer: 'Moj otac radi u Beogradu', options: ['Moj otac je u Beogradu','Moj otac radi u Beogradu','Moj otac živi u Beogradu','Moj otac ide u Beograd'] },
          { id: 'fam2-q5', type: 'translate', prompt: '"Kardeşlerin var mı?" cümlesini çevir', promptEn: 'Translate "Do you have siblings?"', streetPrompt: 'Kapiram — birine kardeşleri olup olmadığını sor bakalım.', answer: 'Imaš li braću i sestre?', hint: 'braća = erkek kardeşler (çoğul yalın)', hintEn: 'braća = brothers (plural)' },
        ],
      },
    ],
  },

  // ─── TRAVEL & PLACES ────────────────────────────────────────────────────────
  {
    id: 'travel', title: 'Seyahat', titleEn: 'Travel', streetTitle: 'Putevi i Mesta',
    description: 'Otel, havalimanı ve daha uzaklara gitmek için gerekenler.',
    descriptionEn: 'Everything you need for hotels, airports, and beyond.',
    streetDescription: 'Idemo negde na put! Aerodromi, hoteli i sve to.',
    emoji: '✈️', color: '#3498db',
    isPro: true,
    lessons: [
      {
        id: 'travel-1', title: 'Otel Girişi', titleEn: 'Hotel Check-in', streetTitle: 'Soba i ključ', emoji: '🏨', xpReward: 25,
        questions: [
          { id: 'tr1-q1', type: 'multiple-choice', prompt: '"Otel" nasıl denir?', promptEn: 'How to say "Hotel"?', streetPrompt: 'Otele ne diyorsunuz brate?', answer: 'Hotel', options: ['Soba', 'Restoran', 'Kuća', 'Hotel'] },
          { id: 'tr1-q2', type: 'translate', prompt: '"Rezervasyonum var" cümlesini çevir', promptEn: 'Translate "I have a reservation"', streetPrompt: 'Kapiram — odanı ayarladın, resepsiyonda ne dersin?', answer: 'Imam rezervaciju', hint: 'imam = sahibim, rezervacija = rezervasyon', hintEn: 'imam = I have, rezervacija = reservation' },
          { id: 'tr1-q3', type: 'multiple-choice', prompt: '"Soba" ne anlama gelir?', promptEn: 'What does "Soba" mean?', streetPrompt: 'Brate, "soba" nedir?', answer: 'Oda', options: ['Bina', 'Oda', 'Mutfak', 'Yatak'] },
          { id: 'tr1-q4', type: 'translate', prompt: '"Pasaport" kelimesini çevir', promptEn: 'Translate the word "Passport"', streetPrompt: 'Sınırda lazım olan şey?', answer: 'Pasoš', hint: 'pa-soš', hintEn: 'pa-soš' },
        ],
      },
      {
        id: 'travel-2', title: 'Havalimanı & Uçuşlar', titleEn: 'Airport & Flights', streetTitle: 'Letimo na aerodrom', emoji: '🛫', xpReward: 30,
        questions: [
          { id: 'tr2-q1', type: 'multiple-choice', prompt: '"Uçuş" nasıl denir?', promptEn: 'How to say "Flight"?', streetPrompt: 'Pazi — havaya yükseliyorsun?', answer: 'Let', options: ['Karta', 'Let', 'Avion', 'Put'] },
          { id: 'tr2-q2', type: 'multiple-choice', prompt: '"Kofer" ne anlama gelir?', promptEn: 'What does "Kofer" mean?', streetPrompt: 'Brate — "kofer"?', answer: 'Bavul', options: ['Sırt çantası', 'Bilet', 'Bavul', 'Cüzdan'] },
          { id: 'tr2-q3', type: 'translate', prompt: '"Bagajım nerede?" cümlesini çevir', promptEn: 'Translate "Where is my luggage?"', streetPrompt: 'Gde je... bagaj ne demekti?', answer: 'Gde je moj prtljag?', hint: 'moj = benim, prtljag = bagaj', hintEn: 'moj = my, prtljag = luggage' },
        ],
      },
    ],
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  {
    id: 'shopping', title: 'Alışveriş', titleEn: 'Shopping', streetTitle: 'Šoping vreme',
    description: 'Alışveriş, kıyafet alma ve pazarlık kelimelerini öğren.',
    descriptionEn: 'Learn shopping, buying clothes, and bargaining words.',
    streetDescription: 'Brate, idemo u šoping. Trošimo pare danas!',
    emoji: '🛍️', color: '#9b59b6',
    isPro: true,
    lessons: [
      {
        id: 'shopping-1', title: 'Kıyafetler', titleEn: 'Clothes', streetTitle: 'Odeća i patike', emoji: '👕', xpReward: 30,
        questions: [
          { id: 'sh1-q1', type: 'multiple-choice', prompt: '"Ti-şört" kelimesi nedir?', promptEn: 'What is the word for "T-shirt"?', streetPrompt: 'Kapiram — kısa kollu tişört nedir?', answer: 'Majica', options: ['Jakna', 'Cipele', 'Košulja', 'Majica'] },
          { id: 'sh1-q2', type: 'translate', prompt: '"Ayakkabı" kelimesini çevir', promptEn: 'Translate the word "Shoes"', streetPrompt: 'Ayağa ne giyilir?', answer: 'Cipele', hint: 'ci-pe-le', hintEn: 'ci-pe-le' },
          { id: 'sh1-q3', type: 'multiple-choice', prompt: '"Jeftino" ne anlama gelir?', promptEn: 'What does "Jeftino" mean?', streetPrompt: 'Brate — "jeftino"?', answer: 'Ucuz', options: ['İyi', 'Pahalı', 'Ucuz', 'Ağır'] },
          { id: 'sh1-q4', type: 'translate', prompt: '"Pahalı" kelimesini çevir', promptEn: 'Translate the word "Expensive"', streetPrompt: 'Çok fazla para — bunun Sırpçası nedir?', answer: 'Skupo', hint: 'sku-po', hintEn: 'sku-po' },
        ],
      },
      {
        id: 'shopping-2', title: 'Kadın Modası', titleEn: 'Women\'s Fashion', streetTitle: 'Ženska Moda', emoji: '👗', xpReward: 35,
        questions: [
          { id: 'sh2-q1', type: 'multiple-choice', prompt: '"Elbise" nasıl denir?', promptEn: 'How to say "Dress"?', streetPrompt: 'Brate, elbiseye ne denir?', answer: 'Haljina', options: ['Pantalone', 'Haljina', 'Jakna', 'Košulja'] },
          { id: 'sh2-q2', type: 'translate', prompt: '"Etek" kelimesini çevir', promptEn: 'Translate the word "Skirt"', streetPrompt: 'Sırpçada etek nedir?', answer: 'Suknja', hint: 'suk-nya', hintEn: 'suk-nya' },
          { id: 'sh2-q3', type: 'multiple-choice', prompt: '"Štikle" nedir?', promptEn: 'What are "Štikle"?', streetPrompt: 'Bu gece dışarı çıkıyor — "Štikle" nedir?', answer: 'Topuklu ayakkabı', options: ['Spor ayakkabı', 'Topuklu ayakkabı', 'Bot', 'Sandalet'] },
          { id: 'sh2-q4', type: 'translate', prompt: '"Güzel elbise" kelimesini çevir', promptEn: 'Translate the phrase "Beautiful dress"', streetPrompt: 'Bir elbiseye nasıl iltifat edersin?', answer: 'Lepa haljina', hint: 'lepa = güzel', hintEn: 'lepa = beautiful' },
        ],
      },
      {
        id: 'shopping-3', title: 'Erkek Modası', titleEn: 'Men\'s Fashion', streetTitle: 'Muška Moda', emoji: '👔', xpReward: 35,
        questions: [
          { id: 'sh3-q1', type: 'multiple-choice', prompt: '"Şort" nasıl denir?', promptEn: 'How to say "Shorts"?', streetPrompt: 'Yaz geldi kanka — şort nedir?', answer: 'Šorts', options: ['Šorts', 'Odelo', 'Kapa', 'Kaiš'] },
          { id: 'sh3-q2', type: 'multiple-choice', prompt: '"Odelo" nedir?', promptEn: 'What is "Odelo"?', streetPrompt: 'Şık giyinmek — "Odelo" nedir?', answer: 'Takım elbise', options: ['Tişört', 'Kravat', 'Takım elbise', 'Pantolon'] },
          { id: 'sh3-q3', type: 'translate', prompt: '"Pantolon" kelimesini çevir', promptEn: 'Translate the word "Pants"', streetPrompt: 'Pantolon Sırpçada nasıl?', answer: 'Pantalone', hint: 'pan-ta-lo-ne', hintEn: 'pan-ta-lo-ne' },
          { id: 'sh3-q4', type: 'multiple-choice', prompt: '"Ceket" nasıl denir?', promptEn: 'How to say "Jacket"?', streetPrompt: 'Hava soğuk kanka — bir tane...', answer: 'Jakna', options: ['Kravata', 'Čarapa', 'Jakna', 'Prsluk'] },
        ],
      },
    ],
  },

  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  {
    id: 'culture', title: 'Serbian Culture', titleEn: 'Serbian Culture', streetTitle: 'Svi Srbi Zidaju',
    description: 'Understand the soul of Serbia: Slava, Rakija, and Kafana rules.',
    descriptionEn: 'Understand the soul of Serbia: Slava, Rakija, and Kafana rules.',
    streetDescription: 'Upoznaj pravu Srbiju. Budi kao domaći.',
    emoji: '🦅', color: '#B22222',
    isPro: true,
    lessons: [
      {
        id: 'culture-1', title: 'Slava', titleEn: 'Slava', streetTitle: 'Slava i Gosti', emoji: '🕯️', xpReward: 35,
        questions: [
          { id: 'c1-q1', type: 'multiple-choice', prompt: '"Slava" nedir?', promptEn: 'What is "Slava"?', streetPrompt: 'Sırp aileleri için en önemli gün nedir?', answer: 'Aziz günü', options: ['Aziz günü','Düğün','Doğum günü','Yeni Yıl'] },
          { id: 'c1-q2', type: 'multiple-choice', prompt: 'Bir Sırp evine misafir olarak girerken ne yapmalısın?', promptEn: 'What should you do when entering a Serbian home as a guest?', streetPrompt: 'Eve girerken — en önemli kural nedir?', answer: 'Ayakkabılarını çıkar', options: ['Ev sahibini 4 kez öp','Yüksek sesle kapıyı çal','Ayakkabılarını çıkar','Para öde'] },
          { id: 'c1-q3', type: 'translate', prompt: '"Mutlu Slava!" cümlesini çevir', promptEn: 'Translate "Happy Slava!"', streetPrompt: 'Ev sahibini Slava için nasıl tebrik edersin?', answer: 'Srećna slava', hint: 'srećna = mutlu', hintEn: 'srećna = happy' },
          { id: 'c1-q4', type: 'multiple-choice', prompt: 'Evin kadın ev sahibine ne denir?', promptEn: 'What is the female hostess of the house called?', streetPrompt: 'Ona saygı duymalısın — kadın ev sahibine ne denir?', answer: 'Domaćica', options: ['Kraljica','Domaćica','Prijateljica','Sestra'] },
          { id: 'c1-q5', type: 'multiple-choice', prompt: 'Birinin evine giderken genellikle ne hediye götürürsün?', promptEn: 'What gift do you usually bring when going to someone\'s house?', streetPrompt: 'Ev sahibi için standart hediye nedir?', answer: 'Kahve, şarap veya çikolata', options: ['Büyük bir bitki','Kahve, şarap veya çikolata','Para','Taze ekmek'] },
        ],
      },
      {
        id: 'culture-2', title: 'Rakija Kuralları', titleEn: 'Rakija Rules', streetTitle: 'Pravila Rakije', emoji: '🥃', xpReward: 35,
        questions: [
          { id: 'c2-q1', type: 'multiple-choice', prompt: 'Rakija ile kadeh kaldırırken altın kural nedir?', promptEn: 'What is the golden rule when toasting with Rakija?', streetPrompt: 'Kadeh tokuştururken — ne yapmalısın?', answer: 'Gözlerinin içine bak', options: ['Tek dikişte iç','Gözlerinin içine bak','Kadehe bak','Yüksek sesle bağır'] },
          { id: 'c2-q2', type: 'translate', prompt: '"Sağlığına / Şerefe!" cümlesini çevir', promptEn: 'Translate "To your health / Cheers!"', streetPrompt: 'Nasıl kadeh kaldırırız?', answer: 'U tvoje zdravlje', hint: 'zdravlje = sağlık', hintEn: 'zdravlje = health' },
          { id: 'c2-q3', type: 'multiple-choice', prompt: '"Šljivovica" nedir?', promptEn: 'What is "Šljivovica"?', streetPrompt: 'En ünlü Rakija türü?', answer: 'Erik rakısı', options: ['Üzüm rakısı','Erik rakısı','Vişne rakısı','Bal rakısı'] },
          { id: 'c2-q4', type: 'translate', prompt: '"Şerefe" kelimesini çevir', promptEn: 'Translate the word "Cheers"', streetPrompt: 'Yaygın kadeh kaldırma kelimesi?', answer: 'Živeli', hint: 'zhi-ve-li', hintEn: 'zhi-ve-li' },
        ],
      },
      {
        id: 'culture-3', title: 'Kafana Hayatı', titleEn: 'Kafana Life', streetTitle: 'Noć u Kafani', emoji: '🎻', xpReward: 40,
        questions: [
          { id: 'c3-q1', type: 'multiple-choice', prompt: '"Kafana" nedir?', promptEn: 'What is a "Kafana"?', streetPrompt: 'En iyi gece hayatı nerede?', answer: 'Geleneksel meyhane', options: ['Gece kulübü','Kafe','Süpermarket','Geleneksel meyhane'] },
          { id: 'c3-q2', type: 'multiple-choice', prompt: 'Müzisyenler masana gelirse onlara ne vermelisin?', promptEn: 'What should you give musicians if they come to your table?', streetPrompt: 'Müzik masana geldi — ne verirsin?', answer: 'Bakšiš (Bahşiş)', options: ['Rakija','Bakšiš (Bahşiş)','Bir şarkı','Yemek'] },
          { id: 'c3-q3', type: 'translate', prompt: '"Canlı müzik" cümlesini çevir', promptEn: 'Translate the phrase "Live music"', streetPrompt: 'Kafana\'yı özel kılan nedir?', answer: 'Živa muzika', hint: 'živa = canlı, muzika = müzik', hintEn: 'živa = live/alive, muzika = music' },
        ],
      },
    ],
  },

  // ─── HOBBIES & INTERESTS (FREE) ──────────────────────────────────────────
  {
    id: 'hobbies', title: 'Hobiler & Eğlence', titleEn: 'Hobbies & Entertainment', streetTitle: 'Šta radiš za vikend?',
    description: 'Hobilerin ve boş zaman aktivitelerin hakkında konuş.',
    descriptionEn: 'Talk about your hobbies and leisure activities.',
    streetDescription: 'Odmaranje, sport i pivo! Nauči o hobijima.',
    emoji: '⚽', color: '#e67e22',
    isPro: true,
    lessons: [
      {
        id: 'hobbies-1', title: 'Boş Zaman', titleEn: 'Leisure Time', streetTitle: 'Slobodno vreme', emoji: '🎸', xpReward: 30,
        questions: [
          { id: 'hb1-q1', type: 'multiple-choice', prompt: '"Müzik dinliyorum" nasıl denir?', promptEn: 'How to say "I am listening to music"?', streetPrompt: 'Slušalice u uši — müzik dinlediğini nasıl söylersin?', answer: 'Slušam muziku', options: ['Gledam film', 'Slušam muziku', 'Igram fudbal', 'Čitam knjigu'] },
          { id: 'hb1-q2', type: 'translate', prompt: '"Kitap okuyorum" cümlesini çevir', promptEn: 'Translate "I am reading a book"', streetPrompt: 'Kapiram — "Kitap okuyorum" nedir?', answer: 'Čitam knjigu', hint: 'čitam = okuyorum, knjigu = kitap', hintEn: 'čitam = I am reading, knjigu = book' },
          { id: 'hb1-q3', type: 'multiple-choice', prompt: '"Pevam" ne anlama gelir?', promptEn: 'What does "Pevam" mean?', streetPrompt: 'Idemo — "Pevam"?!', answer: 'Şarkı söylüyorum', options: ['Dans ediyorum', 'Şarkı söylüyorum', 'Yüzüyorum', 'Koşuyorum'] },
          { id: 'hb1-q4', type: 'translate', prompt: '"Dans etmeyi seviyorum" cümlesini çevir', promptEn: 'Translate "I love to dance"', streetPrompt: 'Klubovi! Dans etmeyi sevdiğini anlat!', answer: 'Volim da plešem', hint: 'volim = seviyorum, da plešem = dans etmeyi', hintEn: 'volim = I love, da plešem = to dance' },
        ],
      },
      {
        id: 'hobbies-2', title: 'Spor & Oyun', titleEn: 'Sports & Games', streetTitle: 'Sport i Pivo', emoji: '🏆', xpReward: 35,
        questions: [
          { id: 'hb2-q1', type: 'multiple-choice', prompt: '"Fudbal" nedir?', promptEn: 'What is "Fudbal"?', streetPrompt: 'Najbitnija sporedna stvar na svetu?', answer: 'Futbol', options: ['Basketbol', 'Tenis', 'Futbol', 'Voleybol'] },
          { id: 'hb2-q2', type: 'multiple-choice', prompt: '"Oyun oynuyorum" nasıl denir?', promptEn: 'How to say "I am playing games"?', streetPrompt: 'Brate — oyun oynadığını nasıl söylersin?', answer: 'Igram igrice', options: ['Spavam', 'Gledam TV', 'Igram igrice', 'Jedem'] },
          { id: 'hb2-q3', type: 'translate', prompt: '"Koşuyorum" kelimesini çevir', promptEn: 'Translate the word "I am running"', streetPrompt: 'Brate — "koşuyorum" nedir?', answer: 'Trčim', hint: 'tr-čim', hintEn: 'tr-čim' },
          { id: 'hb2-q4', type: 'multiple-choice', prompt: '"Teretana" nedir?', promptEn: 'What is "Teretana"?', streetPrompt: 'Brate, idemo vežbamo — "Teretana" nedir?', answer: 'Spor salonu', options: ['Kütüphane', 'Spor salonu', 'Market', 'Hastane'] },
        ],
      },
    ],
  },
  
  // ─── TECHNOLOGY (PRO) ────────────────────────────────────────────────────
  {
    id: 'technology', title: 'Teknoloji & İnternet', titleEn: 'Technology & Internet', streetTitle: 'Na Mreži',
    description: 'Telefonlar, bilgisayarlar ve internet kelimeleri.',
    descriptionEn: 'Phones, computers, and internet terminology.',
    streetDescription: 'Brate, gde ti je punjač? Pričamo o tehnologiji.',
    emoji: '💻', color: '#34495e',
    isPro: true,
    lessons: [
      {
        id: 'tech-1', title: 'Cep Telefonunuz', titleEn: 'Your Mobile Phone', streetTitle: 'Mobilni', emoji: '📱', xpReward: 30,
        questions: [
          { id: 'tc1-q1', type: 'multiple-choice', prompt: '"Telefon" nasıl denir?', promptEn: 'How to say "Phone"?', streetPrompt: 'Brate, cebinde ne var?', answer: 'Telefon', options: ['Sat', 'Novčanik', 'Ključ', 'Telefon'] },
          { id: 'tc1-q2', type: 'translate', prompt: '"Bataryam bitti" cümlesini çevir', promptEn: 'Translate "My battery is dead"', streetPrompt: 'En kötüsü — şarj bitti?', answer: 'Prazna mi je baterija', hint: 'prazna = boş, baterija = batarya', hintEn: 'prazna = empty, baterija = battery' },
          { id: 'tc1-q3', type: 'multiple-choice', prompt: '"Punjač" nedir?', promptEn: 'What is a "Punjač"?', streetPrompt: 'Kapiram, "punjač" lazım sana. Nedir o?', answer: 'Şarj aleti', options: ['Kulaklık', 'Kılıf', 'Ekran', 'Şarj aleti'] },
          { id: 'tc1-q4', type: 'multiple-choice', prompt: '"Poruka" ne anlama gelir?', promptEn: 'What does "Poruka" mean?', streetPrompt: 'Bzz bzz... "poruka" geldi?', answer: 'Mesaj', options: ['Arama', 'Mesaj', 'Fotoğraf', 'Video'] },
        ],
      },
      {
        id: 'tech-2', title: 'İnternet', titleEn: 'Internet', streetTitle: 'Na internetu', emoji: '🌐', xpReward: 30,
        questions: [
          { id: 'tc2-q1', type: 'multiple-choice', prompt: '"Bilgisayar" nasıl denir?', promptEn: 'How to say "Computer"?', streetPrompt: 'Evde masaüstünde ne var?', answer: 'Kompjuter', options: ['Kompjuter', 'Televizor', 'Radio', 'Šporet'] },
          { id: 'tc2-q2', type: 'translate', prompt: '"Wi-Fi şifresi nedir?" cümlesini çevir', promptEn: 'Translate "What is the Wi-Fi password?"', streetPrompt: 'Kafeye oturdun, net lazım. Ne sorarsın?', answer: 'Koja je šifra za internet?', hint: 'koja = nedir/hangisi, šifra = şifre', hintEn: 'koja = which/what is, šifra = password' },
          { id: 'tc2-q3', type: 'multiple-choice', prompt: '"Društvene mreže" ne anlama gelir?', promptEn: 'What does "Društvene mreže" mean?', streetPrompt: 'Brate — her gün kaydırdığın şey?', answer: 'Sosyal Medya', options: ['Spor', 'Haberler', 'Sosyal Medya', 'Müzik'] },
          { id: 'tc2-q4', type: 'translate', prompt: '"Ekrana bakıyorum" cümlesini çevir', promptEn: 'Translate "I am looking at the screen"', streetPrompt: 'Gözün nerede?', answer: 'Gledam u ekran', hint: 'gledam = bakıyorum/izliyorum, u = -e/üzerinde', hintEn: 'gledam = I am looking/watching, u = at/on' },
        ],
      },
    ],
  },

  // ─── WORK (PRO) ──────────────────────────────────────────────────────────
  {
    id: 'work', title: 'İş & Kariyer', titleEn: 'Work & Career', streetTitle: 'Na Poslu',
    description: 'İş yerinde kullanılan meslekler ve kelimeler.',
    descriptionEn: 'Professions and vocabulary used in the workplace.',
    streetDescription: 'Mora da se radi, brate. Nauči kako da pričaš o poslu.',
    emoji: '💼', color: '#1abc9c',
    isPro: true,
    lessons: [
      {
        id: 'work-1', title: 'Meslekler', titleEn: 'Professions', streetTitle: 'Šta radiš u životu?', emoji: '🧑‍💼', xpReward: 35,
        questions: [
          { id: 'wk1-q1', type: 'multiple-choice', prompt: '"Şef / Patron" nasıl denir?', promptEn: 'How to say "Chef / Boss"?', streetPrompt: 'En tepedeki adama ne denir?', answer: 'Šef', options: ['Radnik', 'Šef', 'Klijent', 'Praktikant'] },
          { id: 'wk1-q2', type: 'multiple-choice', prompt: '"Učenik / Öğrenci" ne anlama gelir?', promptEn: 'What does "Učenik / Student" mean?', streetPrompt: '"Student" nedir?', answer: 'Üniversite Öğrencisi', options: ['Öğretmen', 'Üniversite Öğrencisi', 'Doktor', 'Mühendis'] },
          { id: 'wk1-q3', type: 'translate', prompt: '"Doktor" kelimesini çevir', promptEn: 'Translate the word "Doctor"', streetPrompt: 'Hastanedesin. Kimdir o?', answer: 'Doktor', hint: 'Doktor/Lekar', hintEn: 'Doktor or Lekar' },
          { id: 'wk1-q4', type: 'multiple-choice', prompt: '"Radnik" nedir?', promptEn: 'What is a "Radnik"?', streetPrompt: 'Brate, "Radnik" kimdir?', answer: 'İşçi / Çalışan', options: ['Patron', 'Müşteri', 'İşçi / Çalışan', 'Öğrenci'] },
        ],
      },
      {
        id: 'work-2', title: 'Ofiste', titleEn: 'In the Office', streetTitle: 'Kancelarija', emoji: '🏢', xpReward: 35,
        questions: [
          { id: 'wk2-q1', type: 'multiple-choice', prompt: '"Toplantı" nasıl denir?', promptEn: 'How to say "Meeting"?', streetPrompt: 'Patron çağırdı, ne bu?', answer: 'Sastanak', options: ['Odmor', 'Sastanak', 'Ručak', 'Pauza'] },
          { id: 'wk2-q2', type: 'translate', prompt: '"Meşgulüm" cümlesini çevir', promptEn: 'Translate "I am busy"', streetPrompt: 'Vaktin yok, yetiştireceğin iş var, ne dersin?', answer: 'Zauzet sam', hint: 'zauzet = meşgul/dolu', hintEn: 'zauzet = busy/full' },
          { id: 'wk2-q3', type: 'multiple-choice', prompt: '"Mola / Ara" ne anlama gelir? ("Pauza")', promptEn: 'What does "Mola / Pause" mean? ("Pauza")', streetPrompt: 'Ajde na pauzu! "Pauza" nedir?', answer: 'Mola', options: ['İş', 'Mola', 'Toplantı', 'Maaş'] },
          { id: 'wk2-q4', type: 'translate', prompt: '"Maaş" kelimesini çevir', promptEn: 'Translate the word "Salary"', streetPrompt: 'Herkes bunu bekliyor...', answer: 'Plata', hint: 'pla-ta', hintEn: 'pla-ta' },
        ],
      },
    ],
  },

  // ─── COLORS & DESCRIPTIONS (FREE) ───────────────────────────────────────
  {
    id: 'colors', title: 'Renkler', titleEn: 'Colors', streetTitle: 'Crveno i Crno',
    description: 'Etrafındaki dünyayı renklerle anlatmayı öğren.',
    descriptionEn: 'Learn to describe the world around you with colors.',
    streetDescription: 'Koje je boje tvoj auto, majstore?',
    emoji: '🎨', color: '#f1c40f',
    lessons: [
      {
        id: 'colors-1', title: 'Ana Renkler', titleEn: 'Primary Colors', streetTitle: 'Glavne boje', emoji: '🔴', xpReward: 20,
        questions: [
          { id: 'col1-q1', type: 'translate', prompt: '"Kırmızı" kelimesini çevir', promptEn: 'Translate the word "Red"', streetPrompt: 'Kızılyıldızın rengi!', answer: 'Crvena', hint: 'cr-ve-na', hintEn: 'cr-ve-na' },
          { id: 'col1-q2', type: 'translate', prompt: '"Siyah" kelimesini çevir', promptEn: 'Translate the word "Black"', streetPrompt: 'Partizanın rengi!', answer: 'Crna', hint: 'cr-na', hintEn: 'cr-na' },
          { id: 'col1-q3', type: 'multiple-choice', prompt: '"Belo" hangi renktir?', promptEn: 'What color is "Belo"?', streetPrompt: '"Beo-grad" Beyaz Şehir demek. O halde "Belo" nedir?', answer: 'Beyaz', options: ['Mavi', 'Beyaz', 'Sarı', 'Yeşil'] },
          { id: 'col1-q4', type: 'multiple-choice', prompt: '"Mavi" nasıl denir?', promptEn: 'How to say "Blue"?', streetPrompt: 'Gökyüzü ne renk?', answer: 'Plava', options: ['Žuta', 'Zelena', 'Plava', 'Siva'] },
        ],
      },
    ]
  },

  // ─── BALKAN SURVIVAL (PRO) ───────────────────────────────────────────────
  {
    id: 'survival', title: 'Balkanlarda Hayatta Kalma', titleEn: 'Balkan Survival', streetTitle: 'Preživljavanje Šaltera',
    description: 'Bürokrasi, devlet daireleri ve efsanelerle başa çık.',
    descriptionEn: 'Deal with bureaucracy, government offices, and legends.',
    streetDescription: 'Šalteri, birokratija i promaja. Budi spreman.',
    emoji: '🛡️', color: '#34495e',
    isPro: true,
    lessons: [
      {
        id: 'surv-1', title: 'Bürokrasi', titleEn: 'Bureaucracy', streetTitle: 'Fali Ti Jedan Papir (FT1P)', emoji: '📄', xpReward: 40,
        questions: [
          { id: 'sv1-q1', type: 'multiple-choice', prompt: '"Šalter" ne anlama gelir?', promptEn: 'What does "Šalter" mean?', streetPrompt: 'Memurla kavga etmek için nereye gidersin?', answer: 'Vezne / Gişe', options: ['Banka kasası', 'Vezne / Gişe', 'Tuvalet', 'Çıkış'] },
          { id: 'sv1-q2', type: 'translate', prompt: '"Mühür" kelimesini çevir', promptEn: 'Translate the word "Stamp/Seal"', streetPrompt: 'Bez ovoga papir ne vredi ništa!', answer: 'Pečat', hint: 'pe-čat', hintEn: 'pe-chat' },
          { id: 'sv1-q3', type: 'multiple-choice', prompt: '"Fali ti jedan papir" ne anlama gelir? (Efsanevi FT1P)', promptEn: 'What does "Fali ti jedan papir" mean? (Legendary FT1P)', streetPrompt: 'Memur teyze sana her zaman ne der?', answer: 'Bir evrak eksik', options: ['Onaylandın', 'Bir evrak eksik', 'Lütfen dışarıda bekle', 'Yarın gel'] },
          { id: 'sv1-q4', type: 'translate', prompt: '"İmza" kelimesini çevir', promptEn: 'Translate the word "Signature"', streetPrompt: 'Nereye atıyorsun, brate?', answer: 'Potpis', hint: 'pot-pis', hintEn: 'pot-pis' },
        ],
      },
      {
        id: 'surv-2', title: 'Sağlık & Mitler', titleEn: 'Health & Myths', streetTitle: 'Čuvaj Se Promaje', emoji: '🥶', xpReward: 40,
        questions: [
          { id: 'sv2-q1', type: 'multiple-choice', prompt: '"Promaja" nedir?', promptEn: 'What is "Promaja"?', streetPrompt: 'Balkanlardaki en ölümcül şey?', answer: 'Cereyanda kalmak', options: ['Vahşi bir hayvan', 'Cereyanda kalmak', 'Bir rakı türü', 'Kötü bir büyü'] },
          { id: 'sv2-q2', type: 'translate', prompt: '"Hastayım" cümlesini çevir', promptEn: 'Translate "I am sick"', streetPrompt: 'Kako kažeš da si bolestan?', answer: 'Bolestan sam', hint: 'bolestan = hasta', hintEn: 'bolestan = sick' },
          { id: 'sv2-q3', type: 'multiple-choice', prompt: '"Doktor" nasıl denir?', promptEn: 'How to say "Doctor"?', streetPrompt: 'Promaja çarpınca kimi ararsın?', answer: 'Doktor / Lekar', options: ['Zubar', 'Doktor / Lekar', 'Majstor', 'Policija'] },
        ],
      },
    ],
  },

  // ─── SPORTS (PRO) ────────────────────────────────────────────────────────
  {
    id: 'sports', title: 'Spor Kültürü', titleEn: 'Sports Culture', streetTitle: 'Fudbal i Derbi',
    description: 'Futbol, basketbol ve taraftarlık kültürü.',
    descriptionEn: 'Football, basketball, and fan culture.',
    streetDescription: 'Zvezda ili Partizan? Nauči da navijaš.',
    emoji: '⚽', color: '#d35400',
    isPro: true,
    lessons: [
      {
        id: 'sport-1', title: 'Ebedi Derbi', titleEn: 'The Eternal Derby', streetTitle: 'Večiti Derbi', emoji: '🏟️', xpReward: 35,
        questions: [
          { id: 'sp1-q1', type: 'multiple-choice', prompt: '"Večiti Derbi" nedir?', promptEn: 'What is "Večiti Derbi"?', streetPrompt: 'Najveća utakmica u Srbiji?', answer: 'Ebedi Derbi (Kızılyıldız vs Partizan)', options: ['Basketbol turnuvası', 'Ebedi Derbi (Kızılyıldız vs Partizan)', 'Ulusal kupa', 'Tenis maçı'] },
          { id: 'sp1-q2', type: 'multiple-choice', prompt: '"Navijač" ne anlama gelir?', promptEn: 'What does "Navijač" mean?', streetPrompt: 'Ko ide na stadion?', answer: 'Taraftar', options: ['Oyuncu', 'Hakem', 'Taraftar', 'Antrenör'] },
          { id: 'sp1-q3', type: 'translate', prompt: '"Stadyum" kelimesini çevir', promptEn: 'Translate the word "Stadium"', streetPrompt: 'Gde se igra fudbal?', answer: 'Stadion', hint: 'İngilizce ve Türkçeye çok benzer', hintEn: 'Very similar to English and Turkish' },
          { id: 'sp1-q4', type: 'multiple-choice', prompt: 'Biri "Sudija!" diye bağırırsa, kime bağırıyordur?', promptEn: 'If someone yells "Sudija!", who are they yelling at?', streetPrompt: 'Brate, ko je kriv za sve?', answer: 'Hakem', options: ['Kaleciye', 'Antrenöre', 'Hakem', 'Santrafora'] },
        ],
      },
      {
        id: 'sport-2', title: 'Spor Yapmak', titleEn: 'Doing Sports', streetTitle: 'Idemo na basket', emoji: '🏀', xpReward: 35,
        questions: [
          { id: 'sp2-q1', type: 'translate', prompt: '"Basketbol" kelimesini çevir', promptEn: 'Translate the word "Basketball"', streetPrompt: 'Jokićev sport!', answer: 'Košarka', hint: 'koš = pota/basket', hintEn: 'kosh = basket' },
          { id: 'sp2-q2', type: 'multiple-choice', prompt: '"Pobeda" ne anlama gelir?', promptEn: 'What does "Pobeda" mean?', streetPrompt: 'Šta želimo na kraju utakmice?', answer: 'Zafer / Galibiyet', options: ['Mağlubiyet', 'Beraberlik', 'Zafer / Galibiyet', 'Uzatma'] },
          { id: 'sp2-q3', type: 'translate', prompt: '"Top" kelimesini çevir', promptEn: 'Translate the word "Ball"', streetPrompt: 'Dodaj mi... šta?', answer: 'Lopta', hint: 'lop-ta', hintEn: 'lop-ta' },
        ],
      },
    ]
  },

  // ─── ROMANCE (PRO) ───────────────────────────────────────────────────────
  {
    id: 'romance', title: 'Romantizm & Drama', titleEn: 'Romance & Drama', streetTitle: 'Ljubav i Ljubomora',
    description: 'Tatlı sözler ve ilişki draması.',
    descriptionEn: 'Sweet words and relationship drama.',
    streetDescription: 'Od "ljubavi" do svađe. Balkan romansa.',
    emoji: '💘', color: '#c23616',
    isPro: true,
    lessons: [
      {
        id: 'rom-1', title: 'Tatlı İfadeler', titleEn: 'Sweet Expressions', streetTitle: 'Slatke Reči', emoji: '💋', xpReward: 40,
        questions: [
          { id: 'ro1-q1', type: 'multiple-choice', prompt: '"Dušo" ne anlama gelir?', promptEn: 'What does "Dušo" mean?', streetPrompt: 'Kako zoveš devojku/momka?', answer: 'Canım / Ruhum', options: ['Arkadaşım', 'Canım / Ruhum', 'Patronum', 'Düşmanım'] },
          { id: 'ro1-q2', type: 'translate', prompt: '"Aşkım" kelimesini çevir', promptEn: 'Translate the word "My Love"', streetPrompt: 'Ljubav moja!', answer: 'Ljubavi', hint: 'ljubav kelimesinin seslenme hali', hintEn: 'Vocative form of the word ljubavl (love)' },
          { id: 'ro1-q3', type: 'multiple-choice', prompt: 'Birine "Zlato" diye seslenmek harfiyen ne anlama gelir?', promptEn: 'What does calling someone "Zlato" literally mean?', streetPrompt: 'Malo zlato moje?', answer: 'Altın', options: ['Gümüş', 'Elmas', 'Altın', 'Para'] },
        ],
      },
      {
        id: 'rom-2', title: 'Balkan Draması', titleEn: 'Balkan Drama', streetTitle: 'Gde si bio?!', emoji: '💔', xpReward: 45,
        questions: [
          { id: 'ro2-q1', type: 'multiple-choice', prompt: '"Neredeydin?" sorusu agresif bir şekilde nasıl sorulur?', promptEn: 'How to ask "Where were you?" aggressively?', streetPrompt: 'Problem in paradise! Ask where they were!', answer: 'Gde si bio?!', options: ['Šta radiš?!', 'Gde si bio?!', 'Ko si ti?!', 'Kada dolaziš?!'] },
          { id: 'ro2-q2', type: 'translate', prompt: '"Kıskancım" cümlesini çevir', promptEn: 'Translate "I am jealous"', streetPrompt: 'Zašto gledaš nju? Translate "jealous"!', answer: 'Ljubomoran sam', hint: 'ljubomoran = kıskanç (erkek)', hintEn: 'ljubomoran = jealous (male)' },
          { id: 'ro2-q3', type: 'multiple-choice', prompt: '"Raskid" ne anlama gelir?', promptEn: 'What does "Raskid" mean?', streetPrompt: 'Kraj priče brate. Šta je "Raskid"?', answer: 'Ayrılık', options: ['Düğün', 'Ayrılık', 'İlk buluşma', 'Kavga'] },
        ],
      },
    ],
  },

  // ─── HEALTH & EMERGENCIES (FREE) ─────────────────────────────────────────
  {
    id: 'health', title: 'Sağlık & Acil', titleEn: 'Health & Emergencies', streetTitle: 'Zovi pomoć, brate!',
    description: 'Sağlık sorunlarında ne diyeceğini öğren.',
    descriptionEn: 'Learn what to say in health emergencies.',
    streetDescription: 'Boli me glava. Zovi doktora. Preživi!',
    emoji: '🏥', color: '#e74c3c',
    lessons: [
      {
        id: 'health-1', title: 'Vücut & Ağrı', titleEn: 'Body & Pain', streetTitle: 'Šta te boli?', emoji: '🤒', xpReward: 25,
        questions: [
          { id: 'hl1-q1', type: 'multiple-choice', prompt: '\"Başım ağrıyor\" nasıl denir?', promptEn: 'How to say "My head hurts"?', streetPrompt: 'Brate — başın mı patladı?', answer: 'Boli me glava', options: ['Boli me stomak', 'Boli me glava', 'Boli me zub', 'Boli me leđa'] },
          { id: 'hl1-q2', type: 'translate', prompt: '\"Yardım edin!\" cümlesini çevir', promptEn: 'Translate "Help me!"', streetPrompt: 'Acil durum — hemen ne bağırırsın?', answer: 'Pomozite!', hint: 'pom-o-zi-te', hintEn: 'pom-o-zi-te' },
          { id: 'hl1-q3', type: 'multiple-choice', prompt: '\"Bolnica\" nedir?', promptEn: 'What is a "Bolnica"?', streetPrompt: 'Doktor nerede? \"Bolnica\" nedir?', answer: 'Hastane', options: ['Eczane', 'Klinik', 'Hastane', 'Ambulans'] },
          { id: 'hl1-q4', type: 'multiple-choice', prompt: '\"Ateşim var\" nasıl denir?', promptEn: 'How to say "I have a fever"?', streetPrompt: 'Pazi — ateşin yüksek, ne dersin?', answer: 'Imam temperaturu', options: ['Imam bol', 'Imam temperaturu', 'Imam grip', 'Imam alergiju'] },
          { id: 'hl1-q5', type: 'translate', prompt: '\"İlaç\" kelimesini çevir', promptEn: 'Translate the word "Medicine"', streetPrompt: 'Eczanede ne istersin?', answer: 'Lek', hint: 'tek hece, kolay!', hintEn: 'One syllable, easy!' },
          { id: 'hl1-q6', type: 'multiple-choice', prompt: '\"Ambulans çağırın!\" nasıl denir?', promptEn: 'How to say "Call an ambulance!"', streetPrompt: 'Kapiram acil — ne bağırırsın?', answer: 'Zovite hitnu pomoć!', options: ['Zovite policiju!', 'Zovite vatrogasce!', 'Zovite hitnu pomoć!', 'Zovite taksija!'] },
        ],
      },
      {
        id: 'health-2', title: 'Eczanede', titleEn: 'At the Pharmacy', streetTitle: 'U apoteci', emoji: '💊', xpReward: 25,
        questions: [
          { id: 'hl2-q1', type: 'multiple-choice', prompt: '\"Eczane\" nasıl denir?', promptEn: 'How to say "Pharmacy"?', streetPrompt: 'İlaç almak için nereye gidersin?', answer: 'Apoteka', options: ['Bolnica', 'Apoteka', 'Klinika', 'Ambulanta'] },
          { id: 'hl2-q2', type: 'translate', prompt: '\"Ağrı kesici var mı?\" cümlesini çevir', promptEn: 'Translate "Is there any painkiller?"', streetPrompt: 'Eczacıya ne sorarsın?', answer: 'Imate li analgetik?', hint: 'analgetik = ağrı kesici', hintEn: 'analgetik = painkiller' },
          { id: 'hl2-q3', type: 'multiple-choice', prompt: '\"Alerji\" kelimesi Sırpçada nedir?', promptEn: 'What is the word for "Allergy" in Serbian?', streetPrompt: 'Brate, alerji nedir Sırpçada?', answer: 'Alergija', options: ['Bolest', 'Alergija', 'Kašalj', 'Groznica'] },
          { id: 'hl2-q4', type: 'multiple-choice', prompt: 'Penisilini alerjini nasıl bildirirsin?', promptEn: 'How do you report your penicillin allergy?', streetPrompt: 'Doktora alerjini nasıl söylersin?', answer: 'Alergičan sam na penicilin', options: ['Volim penicilin', 'Uzimam penicilin', 'Alergičan sam na penicilin', 'Trebam penicilin'] },
          { id: 'hl2-q5', type: 'translate', prompt: '\"Reçete\" kelimesini çevir', promptEn: 'Translate the word "Prescription"', streetPrompt: 'Doktor sana ne verdi?', answer: 'Recept', hint: 'rec-ept', hintEn: 'rec-ept' },
        ],
      },
    ],
  },

  // ─── BELGRADE CITY & PLACES (FREE) ──────────────────────────────────────
  {
    id: 'belgrade', title: 'Belgrad & Şehir', titleEn: 'Belgrade & the City', streetTitle: 'Beograd, majstore',
    description: 'Belgradin semtlerini, meydanlarini ve yerlerini tani.',
    descriptionEn: 'Get to know Belgrade\'s neighborhoods, squares, and places.',
    streetDescription: 'Kalemegdan, Skadarlija, Zemun... Nauči gde šta je.',
    emoji: '🏙️', color: '#2c3e50',
    lessons: [
      {
        id: 'belgrade-1', title: 'Semtler & Meydanlar', titleEn: 'Neighborhoods & Squares', streetTitle: 'Kvartovi i Trg', emoji: '🗺️', xpReward: 25,
        questions: [
          { id: 'bg1-q1', type: 'multiple-choice', prompt: '\"Centar\" ne anlama gelir?', promptEn: 'What does "Centar" mean?', streetPrompt: 'Brate — Centar nedir?', answer: 'Şehir merkezi', options: ['Park', 'Şehir merkezi', 'Köprü', 'Pazar'] },
          { id: 'bg1-q2', type: 'translate', prompt: '\"Köprü\" kelimesini çevir', promptEn: 'Translate the word "Bridge"', streetPrompt: 'Sava üzerindeki yapı?', answer: 'Most', hint: 'most — kısa!', hintEn: 'most — short!' },
          { id: 'bg1-q3', type: 'multiple-choice', prompt: '\"Kalemegdan\" nedir?', promptEn: 'What is "Kalemegdan"?', streetPrompt: 'Beogradın kalbi nerede?', answer: 'Belgradın tarihi kalesi ve parkı', options: ['Bir alışveriş merkezi', 'Bir spor salonu', 'Belgradın tarihi kalesi ve parkı', 'Bir kafana'] },
          { id: 'bg1-q4', type: 'multiple-choice', prompt: '\"Trg\" ne anlama gelir?', promptEn: 'What does "Trg" mean?', streetPrompt: 'Pazi — Trg šta je?', answer: 'Meydan', options: ['Çarşı', 'Cadde', 'Meydan', 'Park'] },
          { id: 'bg1-q5', type: 'translate', prompt: '\"Nereye gidiyorsun?\" cümlesini çevir', promptEn: 'Translate "Where are you going?"', streetPrompt: 'Biri sana soruyor — ne diyorsun?', answer: 'Kuda ideš?', hint: 'kuda = nereye, ideš = gidiyorsun', hintEn: 'kuda = where, idesh = you are going' },
        ],
      },
      {
        id: 'belgrade-2', title: 'Nehirler & Plajlar', titleEn: 'Rivers & Beaches', streetTitle: 'Sava i Dunav', emoji: '🏖️', xpReward: 30,
        questions: [
          { id: 'bg2-q1', type: 'multiple-choice', prompt: 'Belgraddan geçen iki büyük nehir hangisidir?', promptEn: 'Which are the two main rivers passing through Belgrade?', streetPrompt: 'Brate — Belgrad hangi nehirlerin kavsaginda?', answer: 'Sava ve Dunav (Tuna)', options: ['Morava ve Drina', 'Sava ve Dunav (Tuna)', 'Tisa ve Nišava', 'Kolubara ve Toplica'] },
          { id: 'bg2-q2', type: 'translate', prompt: '\"Nehir\" kelimesini çevir', promptEn: 'Translate the word "River"', streetPrompt: 'Sava i Dunav su...', answer: 'Reka', hint: 're-ka', hintEn: 're-ka' },
          { id: 'bg2-q3', type: 'multiple-choice', prompt: '\"Splavovi\" nedir?', promptEn: 'What are "Splavovi"?', streetPrompt: 'Yaz gelince herkes nereye gider kanka?', answer: 'Nehir üstü yüzen mekanlar (splavlar)', options: ['Spor kulüpleri', 'Nehir üstü yüzen mekanlar (splavlar)', 'Yazlık evler', 'Balık restoranları'] },
          { id: 'bg2-q4', type: 'translate', prompt: '\"Ada\" kelimesini çevir', promptEn: 'Translate the word "Island"', streetPrompt: 'Ada Ciganlija — Ada ne demek?', answer: 'Ada', hint: 'Türkçe ile aynı: Ada', hintEn: 'Same as Turkish: Ada' },
          { id: 'bg2-q5', type: 'multiple-choice', prompt: '\"Plaj\" nasıl denir Sırpçada?', promptEn: 'How to say "Beach" in Serbian?', streetPrompt: 'Yaz sicaginda herkes nereye kosar?', answer: 'Plaža', options: ['Jezero', 'Plaža', 'More', 'Bazen'] },
        ],
      },
    ],
  },

  // ─── SERBIAN NIGHTLIFE (PRO) ─────────────────────────────────────────────
  {
    id: 'nightlife', title: 'Sırp Gece Hayatı', titleEn: 'Serbian Nightlife', streetTitle: 'Nocni Zivot',
    description: 'Kafanalar, splavlar ve Belgrad gecelerini yasa.',
    descriptionEn: 'Experience Kafanas, splavs, and Belgrade nights.',
    streetDescription: 'Beograd noću je drugi svet. Nauči kako da preživiš.',
    emoji: '🌃', color: '#6c3483',
    isPro: true,
    lessons: [
      {
        id: 'night-1', title: 'Gece Hazırlığı', titleEn: 'Night Prep', streetTitle: 'Šta večeras?', emoji: '🎉', xpReward: 40,
        questions: [
          { id: 'ni1-q1', type: 'multiple-choice', prompt: '\"Bu gece dışarı çıkıyoruz mu?\" nasıl denir?', promptEn: 'How to say "Are we going out tonight?"', streetPrompt: 'Brate — gece planı var mı?', answer: 'Idemo večeras van?', options: ['Spavamo večeras?', 'Idemo večeras van?', 'Jedemo večeras?', 'Radimo večeras?'] },
          { id: 'ni1-q2', type: 'translate', prompt: '\"Hazır mısın?\" cümlesini çevir', promptEn: 'Translate "Are you ready?"', streetPrompt: 'Arkadasini acele ettir!', answer: 'Jesi li spreman?', hint: 'spreman = hazır (erkek)', hintEn: 'spreman = ready (male)' },
          { id: 'ni1-q3', type: 'multiple-choice', prompt: '\"Kuda idemo?\" ne anlama gelir?', promptEn: 'What does "Kuda idemo?" mean?', streetPrompt: 'Pazi — Kuda idemo?', answer: 'Nereye gidiyoruz?', options: ['Ne zaman gidiyoruz?', 'Nasıl gidiyoruz?', 'Nereye gidiyoruz?', 'Neden gidiyoruz?'] },
          { id: 'ni1-q4', type: 'translate', prompt: '\"Taksi çağırıyorum\" cümlesini çevir', promptEn: 'Translate "I am calling a taxi"', streetPrompt: 'Zovem...', answer: 'Zovem taksi', hint: 'zovem = çağırıyorum', hintEn: 'zovem = I am calling' },
          { id: 'ni1-q5', type: 'multiple-choice', prompt: '\"Rezervasyon yaptın mı?\" nasıl denir?', promptEn: 'How to say "Did you make a reservation?"', streetPrompt: 'Kafana doluysa ne derler sana?', answer: 'Da li si rezervisao?', options: ['Da li si došao?', 'Da li si rezervisao?', 'Da li si platio?', 'Da li si pojeo?'] },
        ],
      },
      {
        id: 'night-2', title: 'Kafana & Splav', titleEn: 'Kafana & Splav', streetTitle: 'Na Splavu!', emoji: '🥂', xpReward: 45,
        questions: [
          { id: 'ni2-q1', type: 'multiple-choice', prompt: '\"Gürültü çok fazla\" nasıl söylersin?', promptEn: 'How to say "It\'s too loud"?', streetPrompt: 'Kulağın patladı mı kanka?', answer: 'Previše je buka', options: ['Puno je muzike', 'Previše je buka', 'Nema zvuka', 'Tiho je'] },
          { id: 'ni2-q2', type: 'translate', prompt: '\"Bir tur daha!\" cümlesini çevir', promptEn: 'Translate "One more round!"', streetPrompt: 'Üçüncü tur geldi...', answer: 'Još jedna runda!', hint: 'još = daha, runda = tur', hintEn: 'jos = more, runda = round' },
          { id: 'ni2-q3', type: 'multiple-choice', prompt: '\"Masa ayrılmış\" nasıl denir?', promptEn: 'How to say "The table is reserved"?', streetPrompt: 'Garson sana ne der?', answer: 'Sto je rezervisan', options: ['Sto je slobodan', 'Sto je rezervisan', 'Sto je zauzet', 'Sto je zatvoren'] },
          { id: 'ni2-q4', type: 'translate', prompt: '\"Dans pistine gidelim!\" cümlesini çevir', promptEn: 'Translate "Let\'s go to the dance floor!"', streetPrompt: 'Müzik başladı!', answer: 'Ajde na podijum!', hint: 'ajde = hadi, podijum = dans pisti', hintEn: 'ajde = come on, podijum = dance floor' },
          { id: 'ni2-q5', type: 'multiple-choice', prompt: '\"Eve gitmek istiyorum\" nasıl dersin?', promptEn: 'How to say "I want to go home"?', streetPrompt: 'Artık bitti — eve dönüş!', answer: 'Hoću kući', options: ['Ostaje kući', 'Idi kući', 'Hoću kući', 'Idem napolje'] },
        ],
      },
    ],
  },

  // ─── ADVANCED GRAMMAR (PRO) ───────────────────────────────────────────────
  {
    id: 'grammar', title: 'İleri Dilbilgisi', titleEn: 'Advanced Grammar', streetTitle: 'Srpska Gramatika',
    description: 'Geçmiş zaman, fiil çekimleri ve cümle yapısı.',
    descriptionEn: 'Past tense, verb conjugations, and sentence structure.',
    streetDescription: 'Ajde brate, nauči da pričaš ko pravi Srbin.',
    emoji: '📚', color: '#1a5276',
    isPro: true,
    lessons: [
      {
        id: 'grammar-1', title: 'Geçmiş Zaman', titleEn: 'Past Tense', streetTitle: 'Šta si radio juče?', emoji: '⏪', xpReward: 40,
        questions: [
          { id: 'gr1-q1', type: 'multiple-choice', prompt: '\"Dün gittim\" nasıl denir?', promptEn: 'How to say "I went yesterday"?', streetPrompt: 'Pazi — geçmiş zamana dikkat!', answer: 'Išao sam juče', options: ['Idem juče', 'Išao sam juče', 'Idi juče', 'Ću ići juče'] },
          { id: 'gr1-q2', type: 'translate', prompt: '\"Dün ne yaptın?\" cümlesini çevir', promptEn: 'Translate "What did you do yesterday?"', streetPrompt: 'Kapiram — dünü sor bakalım.', answer: 'Šta si radio juče?', hint: 'radio si = yaptın (geçmiş/erkek)', hintEn: 'radio si = you did (past/male)' },
          { id: 'gr1-q3', type: 'multiple-choice', prompt: '\"Radio sam\" ne anlama gelir?', promptEn: 'What does "Radio sam" mean?', streetPrompt: 'Brate — Radio sam nedir?', answer: 'Yaptım (erkek)', options: ['Yapıyorum', 'Yapacağım', 'Yaptım (erkek)', 'Yapardım'] },
          { id: 'gr1-q4', type: 'multiple-choice', prompt: '\"Spavala sam\" kimin için kullanılır?', promptEn: 'Who is "Spavala sam" for?', streetPrompt: 'Brate — Spavala sam kim söyler?', answer: 'Kadın konuşmacı (uyudum)', options: ['Erkek komşu', 'Kadın konuşmacı (uyudum)', 'Çoğul (uyudular)', 'Hepsi'] },
          { id: 'gr1-q5', type: 'translate', prompt: '\"Dün akşam kafanaya gittik\" cümlesini çevir', promptEn: 'Translate "Last night we went to the kafana"', streetPrompt: 'Geçen gece ne yaptınız?', answer: 'Išli smo juče u kafanu', hint: 'išli smo = gittik (çoğul)', hintEn: 'ishli smo = we went (plural)' },
          { id: 'gr1-q6', type: 'multiple-choice', prompt: '\"Jesam li\" ne için kullanılır?', promptEn: 'What is "Jesam li" used for?', streetPrompt: 'Kapiram — Jesam li nasıl bir yapıdır?', answer: 'Soru sorma (Ben mi...?)', options: ['Olumsuz cümle', 'Emir kipi', 'Soru sorma (Ben mi...?)', 'Gelecek zaman'] },
        ],
      },
      {
        id: 'grammar-2', title: 'Gelecek Zaman', titleEn: 'Future Tense', streetTitle: 'Šta ces da kazes?', emoji: '🗣️', xpReward: 40,
        questions: [
          { id: 'gr2-q1', type: 'multiple-choice', prompt: 'Gelecek zaman için hangi yardımcı fiil kullanılır?', promptEn: 'Which auxiliary verb is used for the future tense?', streetPrompt: 'Brate — yarın bir şey yapacaksan nasıl söylersin?', answer: 'Cu yardimci fiili', options: ['Sam', 'Jest', 'Cu yardimci fiili', 'Bi'] },
          { id: 'gr2-q2', type: 'translate', prompt: '\"Yarın gelirim\" cümlesini çevir', promptEn: 'Translate "I will come tomorrow"', streetPrompt: 'Söz ver birine — yarın geleceğini söyle!', answer: 'Doći ću sutra', hint: 'doći = gelmek, sutra = yarın', hintEn: 'doci = to come, sutra = tomorrow' },
          { id: 'gr2-q3', type: 'multiple-choice', prompt: '\"Ne bih hteo\" ne anlama gelir?', promptEn: 'What does "Ne bih hteo" mean?', streetPrompt: 'Kibar reddetme — Ne bih hteo?', answer: 'İstemezdim', options: ['Kesinlikle istiyorum', 'Belki', 'İstemezdim', 'Bilmiyorum'] },
          { id: 'gr2-q4', type: 'translate', prompt: '\"Sence ne yapmalıyım?\" cümlesini çevir', promptEn: 'Translate "What do you think I should do?"', streetPrompt: 'Kafana Dayısına ne sorarsın?', answer: 'Šta misliš da treba da uradim?', hint: 'šta misliš = ne düşünüyorsun', hintEn: 'shta mislish = what do you think' },
          { id: 'gr2-q5', type: 'multiple-choice', prompt: '\"Mogu da\" ne anlama gelir?', promptEn: 'What does "Mogu da" mean?', streetPrompt: 'Pazi — bir şeyi yapabildiğini nasıl söylersin?', answer: 'Yapabilirim', options: ['Yapmak istiyorum', 'Yapabilirim', 'Yapmam lazım', 'Yapacağım'] },
        ],
      },
    ],
  },

  // ─── PHONE & COMMUNICATION (PRO) ─────────────────────────────────────────
  {
    id: 'communication', title: 'Telefon & İletişim', titleEn: 'Phone & Communication', streetTitle: 'Na Telefonu',
    description: 'Telefon görüşmeleri ve mesajlaşma.',
    descriptionEn: 'Phone calls and messaging.',
    streetDescription: 'Ko te zove, brate? Nauči da pričaš na telefonu.',
    emoji: '📞', color: '#27ae60',
    isPro: true,
    lessons: [
      {
        id: 'comm-1', title: 'Telefon Görüşmesi', titleEn: 'Phone Call', streetTitle: 'Alo, ko je?', emoji: '📞', xpReward: 30,
        questions: [
          { id: 'cm1-q1', type: 'multiple-choice', prompt: 'Telefona cevap verirken ne dersin?', promptEn: 'What do you say when answering the phone?', streetPrompt: 'Ring ring — telefon çalıyor!', answer: 'Alo!', options: ['Zdravo!', 'Alo!', 'Hej!', 'Dobro!'] },
          { id: 'cm1-q2', type: 'translate', prompt: '\"Şu an konuşamam\" cümlesini çevir', promptEn: 'Translate "I can\'t talk right now"', streetPrompt: 'Meşgulsün — ne dersin?', answer: 'Ne mogu sada da pričam', hint: 'ne mogu = yapamam, sada = şimdi', hintEn: 'ne mogu = I can\'t, sada = now' },
          { id: 'cm1-q3', type: 'multiple-choice', prompt: '\"Duyamıyorum seni\" nasıl denir?', promptEn: 'How to say "I can\'t hear you"?', streetPrompt: 'Hat kötü — ne dersin?', answer: 'Ne čujem te', options: ['Ne vidim te', 'Ne čujem te', 'Ne razumem te', 'Ne slušam te'] },
          { id: 'cm1-q4', type: 'translate', prompt: '\"Mesaj atacağım\" cümlesini çevir', promptEn: 'Translate "I will send a message"', streetPrompt: 'Kapiram — yazarım sana?', answer: 'Pisaću ti poruku', hint: 'pisaću = yazacağım, poruku = mesaj', hintEn: 'pisacu = I will write, poruku = message' },
          { id: 'cm1-q5', type: 'multiple-choice', prompt: '\"Geri arar mısın?\" nasıl denir?', promptEn: 'How to say "Can you call back?"', streetPrompt: 'Brate — geri aranmasını istiyorsun!', answer: 'Možeš li da me pozivaš?', options: ['Zovi me!', 'Možeš li da me pozivaš?', 'Pošalji mi poruku!', 'Dođi kod mene!'] },
        ],
      },
      {
        id: 'comm-2', title: 'Sosyal Medya & Mesaj', titleEn: 'Social Media & Message', streetTitle: 'DM i Stories', emoji: '💬', xpReward: 30,
        questions: [
          { id: 'cm2-q1', type: 'multiple-choice', prompt: '\"Mesaj attım\" nasıl denir?', promptEn: 'How to say "I sent a message"?', streetPrompt: 'DM gonderdim — nasıl söylersin?', answer: 'Poslao sam poruku', options: ['Primio sam poruku', 'Poslao sam poruku', 'Čitao sam poruku', 'Obrisao sam poruku'] },
          { id: 'cm2-q2', type: 'translate', prompt: '\"Konumunu gönder\" cümlesini çevir', promptEn: 'Translate "Send your location"', streetPrompt: 'Nerede olduğunu bilmem lazım!', answer: 'Pošalji mi lokaciju', hint: 'pošalji = gönder, lokaciju = konumu', hintEn: 'poshalji = send, lokaciju = location' },
          { id: 'cm2-q3', type: 'multiple-choice', prompt: '\"Grupta yazıyorum\" nasıl denir?', promptEn: 'How to say "I am writing in the group"?', streetPrompt: 'Gruba mesaj atıyorsun — ne dersin?', answer: 'Pišem u grupi', options: ['Čitam grupu', 'Pišem u grupi', 'Napustio sam grupu', 'Kreiram grupu'] },
          { id: 'cm2-q4', type: 'translate', prompt: '\"Fotoğraf gönder\" diye nasıl söylersin?', promptEn: 'How to say "Send a photo"?', streetPrompt: 'Kapiram — fotoğraf iste!', answer: 'Pošalji mi sliku', hint: 'slika = fotoğraf', hintEn: 'slika = picture/photo' },
          { id: 'cm2-q5', type: 'multiple-choice', prompt: '\"Sessize aldım\" nasıl denir?', promptEn: 'How to say "I muted (it)"?', streetPrompt: 'O bildirimler çok fazla — ne yaptın?', answer: 'Isključio sam obaveštenja', options: ['Obrisao sam kontakt', 'Blokirao sam ga', 'Isključio sam obaveštenja', 'Zatvorio sam aplikaciju'] },
        ],
      },
    ],
  },
];

export const getAllLessons = () =>
  curriculum.flatMap((set) =>
    set.lessons.map((lesson) => ({
      ...lesson,
      setId: set.id,
      setTitle: set.title,
      setStreetTitle: set.streetTitle,
      color: set.color,
      isPro: set.isPro,
    }))
  );

export type QuestionType = 'multiple-choice' | 'translate' | 'fill-blank';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  promptEn?: string; // 🇬🇧 English prompt
  streetPrompt?: string;
  answer: string;
  answerEn?: string; // 🇬🇧 English answer
  options?: string[];
  optionsEn?: string[]; // 🇬🇧 English options
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
        id: 'greetings-1', title: 'Temel Selamlar', titleEn: 'Basic Greetings', streetTitle: 'Zdravo i šta ima', emoji: '👋', xpReward: 100,
        questions: [
          { id: 'g1-q1', type: 'multiple-choice', prompt: 'Sırpçada "Merhaba" nasıl denir?', promptEn: 'How do you say "Hello" in Serbian?', streetPrompt: 'Brate, "Merhaba" nasıl denir?', answer: 'Zdravo', answerEn: 'Zdravo', options: ['Zdravo','Doviđenja','Hvala','Molim'], optionsEn: ['Zdravo','Doviđenja','Hvala','Molim'] },
          { id: 'g1-q2', type: 'translate', prompt: '"Günaydın" kelimesini çevir', promptEn: 'Translate the word "Good morning"', streetPrompt: 'Ej, "Günaydın" de bakalım!', answer: 'Dobro jutro', hint: 'dobro = iyi, jutro = sabah', hintEn: 'dobro = good, jutro = morning' },
          { id: 'g1-q3', type: 'multiple-choice', prompt: '"Kako si?" ne anlama gelir?', promptEn: 'What does "Kako si?" mean?', streetPrompt: 'Pazi, "Kako si?" ne demek?', answer: 'Nasılsın?', answerEn: 'How are you?', options: ['Adın ne?','Nasılsın?','Nerelisin?','Görüşürüz'], optionsEn: ['What is your name?','How are you?','Where are you from?','See you'] },
          { id: 'g1-q4', type: 'multiple-choice', prompt: '"Görüşürüz" nasıl denir?', promptEn: 'How do you say "See you later"?', streetPrompt: 'Kaçıyorsun brate — "Görüşürüz" nasıl denir?', answer: 'Doviđenja', answerEn: 'Doviđenja', options: ['Zdravo','Doviđenja','Hvala','Izvinite'], optionsEn: ['Zdravo','Doviđenja','Hvala','Izvinite'] },
          { id: 'g1-q5', type: 'translate', prompt: '"İyi akşamlar" kelimesini çevir', promptEn: 'Translate the word "Good evening"', streetPrompt: 'Kapiram — Gece milleti nasıl selamlarsın?', answer: 'Dobro veče', hint: 'veče = akşam', hintEn: 'veče = evening' },
          { id: 'g1-q6', type: 'multiple-choice', prompt: '"Laku noć" ne anlama gelir?', promptEn: 'What does "Laku noć" mean?', streetPrompt: 'Pazi, "Laku noć" ne demek?', answer: 'İyi geceler', answerEn: 'Good night', options: ['Günaydın','İyi akşamlar','İyi geceler','İyi uykular'], optionsEn: ['Good morning','Good evening','Good night','Sleep well'] },
          { id: 'g1-q7', type: 'translate', prompt: '"Nasilsiniz?" (Resmi)', promptEn: 'Translate "How are you?" (Formal)', streetPrompt: 'Patrona nasilsin diye nasil sorarsin?', answer: 'Kako ste?', hint: 'kako = nasil, ste = siniz (cogul/resmi)', hintEn: 'kako = how, ste = are you (formal)' },
          { id: 'g1-q8', type: 'multiple-choice', prompt: '"İyi" nasil denir?', promptEn: 'How to say "Good"?', streetPrompt: 'Nasılsın sorusuna "İyi" nasil cevap verirsin?', answer: 'Dobro', answerEn: 'Dobro', options: ['Lose', 'Dobro', 'Zlo', 'Hladno'], optionsEn: ['Lose', 'Dobro', 'Zlo', 'Hladno'] },
        ],
      },
      {
        id: 'greetings-2', title: 'Kendini Tanıtma', titleEn: 'Introducing Yourself', streetTitle: 'Ko si ti, majstore?', emoji: '🤝', xpReward: 100,
        questions: [
          { id: 'g2-q1', type: 'multiple-choice', prompt: '"Benim adım…" nasıl denir?', promptEn: 'How do you say "My name is..."?', streetPrompt: 'Bre, birine adını nasıl söylersin?', answer: 'Zovem se…', answerEn: 'Zovem se…', options: ['Imam se…','Zovem se…','Ja sam…','Moje je…'], optionsEn: ['Imam se…','Zovem se…','Ja sam…','Moje je…'] },
          { id: 'g2-q2', type: 'translate', prompt: '"Tanıştığıma memnun oldum" kelimesini çevir', promptEn: 'Translate the phrase "Nice to meet you"', streetPrompt: 'Kapiram — "Memnun oldum" çevir', answer: 'Drago mi je', hint: 'drago = memnun/hoş', hintEn: 'drago = nice/dear' },
          { id: 'g2-q3', type: 'multiple-choice', prompt: '"Odakle si?" ne anlama gelir?', promptEn: 'What does "Odakle si?" mean?', streetPrompt: 'Pazi, "Odakle si?" ne demek?', answer: 'Nerelisin?', answerEn: 'Where are you from?', options: ['Kaç yaşındasın?','Ne iş yapıyorsun?','Nerelisin?','Sırpça biliyor musun?'], optionsEn: ['How old are you?','What do you do for a living?','Where are you from?','Do you know Serbian?'] },
          { id: 'g2-q4', type: 'translate', prompt: '"Kaç yaşındasın?" kelimesini çevir', promptEn: 'Translate the question "How old are you?"', streetPrompt: 'Brate, birinin yaşını nasıl sorarsın?', answer: 'Koliko imaš godina?', hint: 'Koliko = kaç tane, godina = yıl', hintEn: 'Koliko = how many, godina = years' },
          { id: 'g2-q5', type: 'multiple-choice', prompt: '"Ben İngiltere\'denim" nasıl denir?', promptEn: 'How do you say "I am from England"?', streetPrompt: 'Bre, nereli olduğunu nasıl söylersin?', answer: 'Ja sam iz Engleske', answerEn: 'Ja sam iz Engleske', options: ['Ja idem u Englesku','Ja sam iz Engleske','Volim Englesku','Bio sam u Engleskoj'], optionsEn: ['Ja idem u Englesku','Ja sam iz Engleske','Volim Englesku','Bio sam u Engleskoj'] },
        ],
      },
      {
        id: 'greetings-3', title: 'Kibar İfadeler', titleEn: 'Polite Expressions', streetTitle: 'Kad treba biti fin', emoji: '🎩', xpReward: 100,
        questions: [
          { id: 'g3-q1', type: 'multiple-choice', prompt: '"Lütfen" nasıl denir?', promptEn: 'How do you say "Please"?', streetPrompt: 'Brate, nasıl kibarca "lütfen" istersin?', answer: 'Molim', answerEn: 'Molim', options: ['Hvala','Molim','Izvinite','Nema na čemu'], optionsEn: ['Hvala','Molim','Izvinite','Nema na čemu'] },
          { id: 'g3-q2', type: 'multiple-choice', prompt: '"Hvala" ne anlama gelir?', promptEn: 'What does "Hvala" mean?', streetPrompt: 'Pazi — "Hvala" ne demek?', answer: 'Teşekkürler', answerEn: 'Thanks', options: ['Özür dilerim','Lütfen','Teşekkürler','Merhaba'], optionsEn: ['I am sorry','Please','Thanks','Hello'] },
          { id: 'g3-q3', type: 'translate', prompt: '"Affedersiniz" kelimesini çevir', promptEn: 'Translate the word "Excuse me"', streetPrompt: 'Birinin dikkatini nasıl kibarca çekersin?', answer: 'Izvinite', hint: '"özür dilerim" in resmi hali', hintEn: 'formal version of sorry' },
          { id: 'g3-q4', type: 'multiple-choice', prompt: '"Nema na čemu" ne anlama gelir?', promptEn: 'What does "Nema na čemu" mean?', streetPrompt: 'Biri sana "hvala" dedi — sen ne dersin?', answer: "Rica ederim", answerEn: "You are welcome", options: ["Rica ederim",'Sorun değil','Boşver','Görüşürüz'], optionsEn: ["You are welcome",'No problem','Never mind','See you'] },
          { id: 'g3-q5', type: 'multiple-choice', prompt: '"Özür dilerim" nasıl denir?', promptEn: 'How do you say "I am sorry"?', streetPrompt: 'Bre, Sırpçada nasıl affedersin istersin?', answer: 'Žao mi je', answerEn: 'Žao mi je', options: ['Hvala','Molim','Žao mi je','Izvinite'], optionsEn: ['Hvala','Molim','Žao mi je','Izvinite'] },
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
        id: 'numbers-1', title: 'Sayılar 1–10', titleEn: 'Numbers 1–10', streetTitle: '1 do 10, brate', emoji: '🔢', xpReward: 100,
        questions: [
          { id: 'n1-q1', type: 'multiple-choice', prompt: 'Sırpçada "5" nasıl denir?', promptEn: 'How do you say "5" in Serbian?', streetPrompt: 'Brate, "5" nasıl diyorsun?', answer: 'Pet', answerEn: 'Pet', options: ['Četiri','Pet','Šest','Sedam'], optionsEn: ['Četiri','Pet','Šest','Sedam'] },
          { id: 'n1-q2', type: 'multiple-choice', prompt: '"Tri" hangi sayıdır?', promptEn: 'Which number is "Tri"?', streetPrompt: 'Kapiram, "Tri" hangi sayı?', answer: '3', answerEn: '3', options: ['2','3','13','30'], optionsEn: ['2','3','13','30'] },
          { id: 'n1-q3', type: 'translate', prompt: '"10" sayısını Sırpçaya çevir', promptEn: 'Translate the number "10" to Serbian', streetPrompt: 'Pazi — Sırpçada 10?', answer: 'Deset', hint: 'de-set' },
          { id: 'n1-q4', type: 'multiple-choice', prompt: '"Jedan" ne anlama gelir?', promptEn: 'What does "Jedan" mean?', streetPrompt: 'Bre, "Jedan" nedir?', answer: '1', answerEn: '1', options: ['1','7','11','100'], optionsEn: ['1','7','11','100'] },
          { id: 'n1-q5', type: 'multiple-choice', prompt: '"8" nasıl denir?', promptEn: 'How do you say "8"?', streetPrompt: 'Çabuk — "8" nasıl dersin brate?', answer: 'Osam', answerEn: 'Osam', options: ['Sedam','Osam','Devet','Šest'], optionsEn: ['Sedam','Osam','Devet','Šest'] },
          { id: 'n1-q6', type: 'translate', prompt: '"2" sayısını Sırpçaya çevir', promptEn: 'Translate the number "2" to Serbian', streetPrompt: 'Sırpçada 2 — lako brate!', answer: 'Dva', hint: 'kısa bir kelime', hintEn: 'a very short word' },
          { id: 'n1-q7', type: 'multiple-choice', prompt: '"Devet" ne anlama gelir?', promptEn: 'What does "Devet" mean?', streetPrompt: 'Pazi — "Devet" hangi sayıdır?', answer: '9', answerEn: '9', options: ['6','7','8','9'], optionsEn: ['6','7','8','9'] },
        ],
      },
      {
        id: 'numbers-2', title: 'Sayılar 11–100', titleEn: 'Numbers 11–100', streetTitle: 'Veći brojevi, veće pare', emoji: '💰', xpReward: 100,
        questions: [
          { id: 'n2-q1', type: 'multiple-choice', prompt: 'Sırpçada "20" nasıl denir?', promptEn: 'How do you say "20" in Serbian?', streetPrompt: 'Brate, "20" nasıl diyorsun?', answer: 'Dvadeset', answerEn: 'Dvadeset', options: ['Deset','Dvadeset','Trideset','Dvesta'], optionsEn: ['Deset','Dvadeset','Trideset','Dvesta'] },
          { id: 'n2-q2', type: 'translate', prompt: '"100" sayısını Sırpçaya çevir', promptEn: 'Translate the number "100" to Serbian', streetPrompt: 'Yüz — u srpskom?', answer: 'Sto', hint: 'çok kısa!', hintEn: 'it is very short!' },
          { id: 'n2-q3', type: 'multiple-choice', prompt: '"Pedeset" nedir?', promptEn: 'What is "Pedeset"?', streetPrompt: 'Kapiram — "Pedeset" hangi sayıdır?', answer: '50', answerEn: '50', options: ['15','50','500','5000'], optionsEn: ['15','50','500','5000'] },
          { id: 'n2-q4', type: 'multiple-choice', prompt: '"11" nasıl denir?', promptEn: 'How do you say "11"?', streetPrompt: 'Pazi — Sırpçada 11?', answer: 'Jedanaest', answerEn: 'Jedanaest', options: ['Jedanaest','Dvanaest','Trinaest','Četrnaest'], optionsEn: ['Jedanaest','Dvanaest','Trinaest','Četrnaest'] },
          { id: 'n2-q5', type: 'translate', prompt: '"30" sayısını Sırpçaya çevir', promptEn: 'Translate "30" to Serbian', streetPrompt: 'Otuz — kaži na srpskom!', answer: 'Trideset', hint: 'tri = üç', hintEn: 'tri = three' },
          { id: 'n2-q6', type: 'multiple-choice', prompt: '"Hiljada" ne demek?', promptEn: 'What does "Hiljada" mean?', streetPrompt: 'Brate — "Hiljada" — ne kadar eder?', answer: '1000', answerEn: '1000', options: ['100','500','1000','10000'], optionsEn: ['100','500','1000','10000'] },
        ],
      },
      {
        id: 'numbers-3', title: 'Saatler ve Zaman', titleEn: 'Time and Hours', streetTitle: 'Koliko je sati, bre?', emoji: '⏰', xpReward: 100,
        questions: [
          { id: 'n3-q1', type: 'multiple-choice', prompt: '"Saat kaç?" nasıl sorulur?', promptEn: 'How do you ask "What time is it?"', streetPrompt: 'Pazi — saati nasıl soruyorsun?', answer: 'Koliko je sati?', answerEn: 'Koliko je sati?', options: ['Kako si?','Koliko je sati?','Gde je sat?','Imam sat'], optionsEn: ['How are you?','What time is it?','Where is the clock?','I have a clock'] },
          { id: 'n3-q2', type: 'translate', prompt: '"Saat 3" cümlesini çevir', promptEn: 'Translate the phrase "It is 3 o\'clock"', streetPrompt: 'Tri sata — çevir bunu brate!', answer: 'Tri sata', hint: 'Tri sata = Saat üç', hintEn: 'Tri sata = Three o\'clock' },
          { id: 'n3-q3', type: 'multiple-choice', prompt: '"Podne" ne anlama gelir?', promptEn: 'What does "Podne" mean?', streetPrompt: '"Podne" — šta je to?', answer: 'Öğlen', answerEn: 'Noon', options: ['Gece yarısı','Sabah','Öğlen','Akşam'], optionsEn: ['Midnight','Morning','Noon','Evening'] },
          { id: 'n3-q4', type: 'multiple-choice', prompt: '"Buçuk" (örn: saat 2 buçuk) nasıl denir?', promptEn: 'How do you say "half past"?', streetPrompt: 'Kapiram — Sırpçada "buçuk"?', answer: 'Pola tri', answerEn: 'Pola tri', options: ['Dva i po','Pola tri','Tri i pola','Polovina'], optionsEn: ['Two and a half','Half past two','Three and a half','Half'] },
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
        id: 'food-1', title: 'Sipariş Vermek', titleEn: 'Ordering Food', streetTitle: 'Daj mi ćevape!', emoji: '🥙', xpReward: 100,
        questions: [
          { id: 'f1-q1', type: 'multiple-choice', prompt: '"Su" nasıl denir?', promptEn: 'How do you say "Water"?', streetPrompt: 'Pazi, "su" nasıl istersin?', answer: 'Voda', answerEn: 'Voda', options: ['Pivo','Voda','Sok','Kafa'], optionsEn: ['Pivo','Voda','Sok','Kafa'] },
          { id: 'f1-q2', type: 'multiple-choice', prompt: '"Kafa" nedir?', promptEn: 'What is "Kafa"?', streetPrompt: 'Brate, "Kafa" nedir?', answer: 'Kahve', answerEn: 'Coffee', options: ['Bira','Çay','Kahve','Meyve Suyu'], optionsEn: ['Beer','Tea','Coffee','Juice'] },
          { id: 'f1-q3', type: 'translate', prompt: '"Bir bira lütfen" cümlesini çevir', promptEn: 'Translate "A beer, please"', streetPrompt: 'Ej, "Bir bira lütfen" çevir!', answer: 'Jedno pivo, molim', hint: 'jedno = bir, pivo = bira, molim = lütfen', hintEn: 'jedno = one, pivo = beer, molim = please' },
          { id: 'f1-q4', type: 'multiple-choice', prompt: '"Sladak" ne anlama gelir?', promptEn: 'What does "Sladak" mean?', streetPrompt: 'Kapiram, "Sladak" nedir?', answer: 'Tatlı', answerEn: 'Sweet', options: ['Tuzlu','Baharatlı','Tatlı','Ekşi'], optionsEn: ['Salty','Spicy','Sweet','Sour'] },
          { id: 'f1-q5', type: 'translate', prompt: '"Hesap lütfen" cümlesini çevir', promptEn: 'Translate "The bill, please"', streetPrompt: 'Hesap zamanı — nasıl istersin?', answer: 'Račun, molim', hint: 'račun = hesap/fatura', hintEn: 'račun = bill/invoice' },
          { id: 'f1-q6', type: 'multiple-choice', prompt: '"Açım" nasıl denir?', promptEn: 'How do you say "I am hungry"?', streetPrompt: 'Brate, açlıktan öldüğünü nasıl söylersin?', answer: 'Gladan sam', answerEn: 'Gladan sam', options: ['Žedan sam','Gladan sam','Sit sam','Umoran sam'], optionsEn: ['Žedan sam','Gladan sam','Sit sam','Umoran sam'] },
        ],
      },
      {
        id: 'food-2', title: 'Sırp Mutfağı', titleEn: 'Serbian Cuisine', streetTitle: 'Srpska Kuhinja, majstore', emoji: '🍖', xpReward: 100,
        questions: [
          { id: 'f2-q1', type: 'multiple-choice', prompt: '"Ćevapi" nedir?', promptEn: 'What are "Ćevapi"?', streetPrompt: 'Brate — šta su ćevapi?', answer: 'Izgara rulo köfteler', answerEn: 'Grilled minced meat rolls', options: ['Bir tür çorba','Izgara rulo köfteler','Kızarmış hamurişi','Dolma'], optionsEn: ['A type of soup','Grilled minced meat rolls','Fried pastry','Stuffed peppers'] },
          { id: 'f2-q2', type: 'multiple-choice', prompt: '"Kajmak" nedir?', promptEn: 'What is "Kajmak"?', streetPrompt: 'Kapiram — "Kajmak" je šta?', answer: 'Kremamsı süt ürünü', answerEn: 'Creamy dairy product', options: ['Acı sos','Kremamsı süt ürünü','Ekşi krema çorbası','Bir tür ekmek'], optionsEn: ['Spicy sauce','Creamy dairy product','Sour cream soup','A type of bread'] },
          { id: 'f2-q3', type: 'translate', prompt: '"Ekmek" kelimesini çevir', promptEn: 'Translate the word "Bread"', streetPrompt: 'Hleb ili …? "Ekmek" çevir!', answer: 'Hleb', hint: 'h-leb', hintEn: 'starts with h' },
          { id: 'f2-q4', type: 'multiple-choice', prompt: '"Rakija" nedir?', promptEn: 'What is "Rakija"?', streetPrompt: 'Ej — "Rakija" je šta?', answer: 'Sırbistan meyve rakısı', answerEn: 'Serbian fruit brandy', options: ['Köpüklü şarap','Sırbistan meyve rakısı','Kahve likörü','Elma suyu'], optionsEn: ['Sparkling wine','Serbian fruit brandy','Coffee liqueur','Apple juice'] },
          { id: 'f2-q5', type: 'multiple-choice', prompt: '"Lezzetli" nasıl denir?', promptEn: 'How do you say "Tasty"?', streetPrompt: 'Pazi — yemeğin mükemmel olduğunu nasıl söylersin?', answer: 'Ukusno', answerEn: 'Ukusno', options: ['Loše','Ukusno','Slano','Kiselo'], optionsEn: ['Bad','Ukusno','Salty','Sour'] },
          { id: 'f2-q6', type: 'translate', prompt: '"İki kişilik masa istiyorum" cümlesini çevir', promptEn: 'Translate "I want a table for two"', streetPrompt: 'Restoran — iki kişilik masa nasıl istersin?', answer: 'Stolić za dvoje, molim', hint: 'stolić = masa (küçük), dvoje = iki kişi', hintEn: 'stolić = table (small), dvoje = two people' },
        ],
      },
      {
        id: 'food-3', title: 'Pazarda', titleEn: 'At the Market', streetTitle: 'Na pijaci, brate', emoji: '🥦', xpReward: 100,
        questions: [
          { id: 'f3-q1', type: 'multiple-choice', prompt: '"Bunun fiyatı nedir?" nasıl denir?', promptEn: 'How do you ask "How much does this cost?"', streetPrompt: 'Pijaca — fiyatı nasıl sorarsın?', answer: 'Koliko košta ovo?', answerEn: 'Koliko košta ovo?', options: ['Gde je to?','Koliko košta ovo?','Šta je ovo?','Da li imate ovo?'], optionsEn: ['Where is it?','How much does this cost?','What is this?','Do you have this?'] },
          { id: 'f3-q2', type: 'translate', prompt: '"Elma" kelimesini çevir', promptEn: 'Translate the word "Apple"', streetPrompt: 'Jabuka ili …? "Elma" çevir!', answer: 'Jabuka', hint: 'ja-bu-ka', hintEn: 'ja-bu-ka' },
          { id: 'f3-q3', type: 'multiple-choice', prompt: '"Paradajz" nedir?', promptEn: 'What is "Paradajz"?', streetPrompt: 'Kapiram — "Paradajz" hangi sebzedir?', answer: 'Domates', answerEn: 'Tomato', options: ['Salatalık','Biber','Domates','Soğan'], optionsEn: ['Cucumber','Pepper','Tomato','Onion'] },
          { id: 'f3-q4', type: 'multiple-choice', prompt: '"Pahalı" nasıl denir?', promptEn: 'How do you say "Expensive"?', streetPrompt: 'Brate — bir şeyin çok pahalı olduğunu nasıl söylersin?', answer: 'Skupo', answerEn: 'Skupo', options: ['Jeftino','Skupo','Besplatno','Dosta'], optionsEn: ['Cheap','Skupo','Free','Enough'] },
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
        id: 'directions-1', title: 'Sol, Sağ, İleri', titleEn: 'Left, Right, Straight', streetTitle: 'Levo, desno, pravo', emoji: '🧭', xpReward: 100,
        questions: [
          { id: 'd1-q1', type: 'multiple-choice', prompt: '"Sol" nasıl denir?', promptEn: 'How do you say "Left"?', streetPrompt: 'Pazi levo — "sol" nasıl denir?', answer: 'Levo', answerEn: 'Levo', options: ['Desno','Pravo','Levo','Gore'], optionsEn: ['Desno','Pravo','Levo','Gore'] },
          { id: 'd1-q2', type: 'multiple-choice', prompt: 'Yol tarifinde "Pravo" ne anlama gelir?', promptEn: 'What does "Pravo" mean in directions?', streetPrompt: 'Brate, kaybolduğunda "Pravo" nedir?', answer: 'Dümdüz ileri', answerEn: 'Straight ahead', options: ['Sağa dön','Geri dön','Dümdüz ileri','Sola dön'], optionsEn: ['Turn right','Turn back','Straight ahead','Turn left'] },
          { id: 'd1-q3', type: 'translate', prompt: '"Otobüs durağı nerede?" kelimesini çevir', promptEn: 'Translate "Where is the bus stop?"', streetPrompt: 'Kapiram — otobüs durağını nasıl bulursun?', answer: 'Gde je autobuska stanica?', hint: 'Gde = nerede, je = -dir', hintEn: 'Gde = where, je = is' },
          { id: 'd1-q4', type: 'multiple-choice', prompt: '"Sağ" nasıl denir?', promptEn: 'How do you say "Right"?', streetPrompt: 'Sağa dön — bunu nasıl söylersin?', answer: 'Desno', answerEn: 'Desno', options: ['Levo','Gore','Desno','Dole'], optionsEn: ['Levo','Gore','Desno','Dole'] },
          { id: 'd1-q5', type: 'translate', prompt: '"Ne kadar uzak?" kelimesini çevir', promptEn: 'Translate "How far is it?"', streetPrompt: 'Brate, mesafeyi nasıl sorarsın?', answer: 'Koliko je daleko?', hint: 'daleko = uzak', hintEn: 'daleko = far' },
        ],
      },
      {
        id: 'directions-2', title: 'Ulaşım', titleEn: 'Transportation', streetTitle: 'Autobus ili taksi?', emoji: '🚌', xpReward: 100,
        questions: [
          { id: 'd2-q1', type: 'multiple-choice', prompt: '"Taksi" nasıl denir?', promptEn: 'How do you say "Taxi"?', streetPrompt: 'Kapiram —ynı kelime, farklı aksan?', answer: 'Taksi', answerEn: 'Taksi', options: ['Taksi','Tramvaj','Autobus','Metro'], optionsEn: ['Taksi','Tramvaj','Autobus','Metro'] },
          { id: 'd2-q2', type: 'translate', prompt: '"Havalimanı" kelimesini çevir', promptEn: 'Translate the word "Airport"', streetPrompt: 'Aerodrom or …? "Havalimanı" çevir!', answer: 'Aerodrom', hint: 'İngilizceye/Türkçeye benziyor!', hintEn: 'it is similar to English!' },
          { id: 'd2-q3', type: 'multiple-choice', prompt: 'Nasıl bilet istersin?', promptEn: 'How do you ask for a ticket?', streetPrompt: 'Pazi — nasıl bilet alırsın?', answer: 'Jednu kartu, molim', answerEn: 'Jednu kartu, molim', options: ['Daj mi vozilo','Jednu kartu, molim','Gde je taksi?','Koliko košta?'], optionsEn: ['Give me a vehicle','Jednu kartu, molim','Where is the taxi?','How much is it?'] },
          { id: 'd2-q4', type: 'multiple-choice', prompt: '"Stanica" nedir?', promptEn: 'What is "Stanica"?', streetPrompt: 'Brate — šta znači "Stanica"?', answer: 'İstasyon / Durak', answerEn: 'Station / Stop', options: ['İstasyon / Durak','Sokak','Şehir merkezi','Tarife'], optionsEn: ['Station / Stop','Street','City center','Schedule'] },
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
        id: 'slang-1', title: 'Temel Sokak Ağzı', titleEn: 'Basic Street Slang', streetTitle: 'Mora da znaš ovo', emoji: '🔥', xpReward: 100,
        questions: [
          { id: 's1-q1', type: 'multiple-choice', prompt: '"Jebiga" ne ifade eder?', promptEn: 'What does "Jebiga" express?', streetPrompt: 'Brate, šta znači "Jebiga"?', answer: 'Ne yaparsın / Aman boşver', answerEn: 'What can you do / Never mind', options: ['Seni seviyorum','Ne yaparsın / Aman boşver',"Hadi gidelim",'Sorun değil'], optionsEn: ['I love you','What can you do / Never mind',"Let's go",'No problem'] },
          { id: 's1-q2', type: 'multiple-choice', prompt: '"Brate" arkadaşlar arasında ne demektir?', promptEn: 'What does "Brate" mean among friends?', streetPrompt: 'Pazi, šta znači "Brate"?', answer: 'Kardeşim / Kanka', answerEn: 'Brother / Mate', options: ['Erkek Kardeş (resmi)','Kardeşim / Kanka','Düşman','Yabancı'], optionsEn: ['Brother (formal)','Brother / Mate','Enemy','Stranger'] },
          { id: 's1-q3', type: 'multiple-choice', prompt: 'Biri sana "Kapiram" derse, ne diyordur?', promptEn: 'If someone tells you "Kapiram", what are they saying?', streetPrompt: 'Ej, šta znači "Kapiram"?', answer: 'Anlıyorum / Çakıyorum', answerEn: 'I understand / I get it', options: ['Açım','Anlıyorum / Çakıyorum','Gidiyorum','Katılmıyorum'], optionsEn: ['I am hungry','I understand / I get it','I am going',"I don't agree"] },
          { id: 's1-q4', type: 'multiple-choice', prompt: '"Ajde" ne anlama gelir?', promptEn: 'What does "Ajde" mean?', streetPrompt: 'Ajde — šta ovo znači?', answer: "Hadi / Bas git", answerEn: "Come on / Go away", options: ['Dur',"Hadi / Bas git",'Bekle','Boşver'], optionsEn: ['Stop',"Come on / Go away",'Wait','Never mind'] },
          { id: 's1-q5', type: 'translate', prompt: '"Boşver / Takma" (argo) nasıl denir?', promptEn: 'How to say "Forget it / Don\'t bother" (slang)?', streetPrompt: 'Sırpça "kanka takma" naısl dersin?', answer: 'Jebiga', hint: 'Bu kelimenin kendisi uygulamanın adı 😏', hintEn: 'This word is the name of the app 😏' },
        ],
      },
      {
        id: 'slang-2', title: 'Balkan Ruh Hali', titleEn: 'Balkan Vibe', streetTitle: 'Balkanski stil', emoji: '😤', xpReward: 100,
        questions: [
          { id: 's2-q1', type: 'multiple-choice', prompt: '"Šta ima?" ne anlama gelir?', promptEn: 'What does "Šta ima?" mean?', streetPrompt: 'Pazi — "Šta ima?" ne tür bir selamdır?', answer: "Naber? / Ne var ne yok?", answerEn: "What's up?", options: ['Sende ne var?',"Naber? / Ne var ne yok?",'Ne oldu?','Ne istiyorsun?'], optionsEn: ["What's with you?","What's up?","What happened?","What do you want?"] },
          { id: 's2-q2', type: 'multiple-choice', prompt: 'Cümle sonundaki "Bre" ne anlama gelir?', promptEn: 'What does "Bre" mean at the end of a sentence?', streetPrompt: 'Kapiram — "Bre" šta je to?', answer: 'Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)', answerEn: 'An emphasis word', options: ['Görüşürüz','Bir vurgu kelimesi (Bizdeki "be" veya "yaa" gibi)','Evet','Lütfen'], optionsEn: ['See you','An emphasis word','Yes','Please'] },
          { id: 's2-q3', type: 'translate', prompt: '"Rahat ol / Sıkıntı yok" (argo: "Opušteno") cümlesini çevir', promptEn: 'Translate "Relax / Chill" (slang: "Opušteno")', streetPrompt: 'Sırpçada kankana rahat olmasını nasıl söylersin?', answer: 'Opušteno', hint: 'opustiti se = rahatlamak', hintEn: 'opustiti se = to relax' },
          { id: 's2-q4', type: 'multiple-choice', prompt: '"Vrh" kelime anlamında zirvedir, argoda nedir?', promptEn: 'What does "Vrh" mean in slang?', streetPrompt: 'Brate — "Vrh" — šta je to?', answer: 'Zirve, ama argoda "Efsane/On numara"', answerEn: 'Summit, but in slang "Great/Peak"', options: ['Berbat','Zirve, ama argoda "Efsane/On numara"','Sıkıcı','Soğuk'], optionsEn: ['Terrible','Summit, but in slang "Great/Peak"','Boring','Cold'] },
          { id: 's2-q5', type: 'multiple-choice', prompt: '"Top" kelimesi argoda ne anlama gelir?', promptEn: 'What does "Top" mean in slang?', streetPrompt: 'Brate — "Top" — šta znači?', answer: 'Her şey on numara / Harika', answerEn: 'Everything is great / Top', options: ['Sıcak','Her şey on numara / Harika','Silah','Yorgun'], optionsEn: ['Hot','Everything is great / Top','Gun','Tired'] },
          { id: 's2-q6', type: 'translate', prompt: '"Umrumda değil" (argo) nasıl denir?', promptEn: 'How to say "I don\'t care" (slang)?', streetPrompt: 'Kapiram — hiç sallamadığını nasıl söylersin?', answer: 'Boli me uvo', hint: '"Kulağım ağrıyor" — Sırpların "Umrumda değil" deme şekli 😂', hintEn: '"My ear hurts" — The Serbian way to say "I don\'t care" 😂' },
          { id: 's2-q7', type: 'multiple-choice', prompt: '"Gajba" ne anlama gelir?', promptEn: 'What does "Gajba" mean?', streetPrompt: 'Idemo kod mene na gajbu — ne diyor?', answer: 'Ev / Daire', answerEn: 'House / Apartment', options: ['Araba','Ev / Daire','İş','Okul'], optionsEn: ['Car','House / Apartment','Work','School'] },
          { id: 's2-q8', type: 'multiple-choice', prompt: '"Vopi" nedir?', promptEn: 'What is "Vopi"?', streetPrompt: 'Hadi bir vopi içelim!', answer: 'Bira', answerEn: 'Beer', options: ['Su','Bira','Şarap','Rakı'], optionsEn: ['Water','Beer','Wine','Rakija'] },
        ],
      },
      {
        id: 'slang-3', title: 'Küfürler ve Tepkiler', titleEn: 'Cursing and Reactions', streetTitle: 'Psovke i izrazi', emoji: '💥', xpReward: 100,
        questions: [
          { id: 's3-q1', type: 'multiple-choice', prompt: '"Majku mu" ne ifade eder?', promptEn: 'What does "Majku mu" express?', streetPrompt: 'Pazi brate — "Majku mu" ne tür bir ifade?', answer: 'Bir sinirlenme/hayal kırıklığı sözü', answerEn: 'A word of annoyance/frustration', options: ['Bir iltifat','Bir sinirlenme/hayal kırıklığı sözü','Bir selamlama','Bir veda'], optionsEn: ['A compliment','A word of annoyance/frustration','A greeting','A farewell'] },
          { id: 's3-q2', type: 'multiple-choice', prompt: '"Beži bre" ne anlama gelir?', promptEn: 'What does "Beži bre" mean?', streetPrompt: 'Biri sana "Beži bre!" diye bağırıyor, ne istiyor?', answer: 'Yürü git / Kaybol / Beat it!', answerEn: 'Go away / Get lost / Beat it!', options: ['Buraya gel!','Yürü git / Kaybol / Beat it!','Otur ulan!','Dur!'], optionsEn: ['Come here!','Go away / Get lost / Beat it!','Sit down!','Stop!'] },
          { id: 's3-q3', type: 'multiple-choice', prompt: '"Ma daj!" ne ifade eder?', promptEn: 'What does "Ma daj!" mean?', streetPrompt: '"Ma daj!" — šta to znači, brate?', answer: 'Yok artık! / Hadi canım!', answerEn: 'No way! / Come on!', options: ['Bana daha ver','Yok artık! / Hadi canım!','Anlıyorum','Elbette'], optionsEn: ['Give me more','No way! / Come on!','I understand','Of course'] },
          { id: 's3-q4', type: 'translate', prompt: '"Beni rahat bırak!" (samimi) cümlesini çevir', promptEn: 'Translate "Leave me alone!" (informal)', streetPrompt: 'Brate, birine uzak durmasını nasıl söylersin?', answer: 'Ostavi me na miru', hint: 'mir = barış/huzur', hintEn: 'mir = peace/tranquility' },
          { id: 's3-q5', type: 'multiple-choice', prompt: '"Odlično" ne anlama gelir?', promptEn: 'What does "Odlično" mean?', streetPrompt: 'Ej — "Odlično" — šta je to?', answer: 'Mükemmel!', answerEn: 'Excellent!', options: ['Berbat','İdare eder','Mükemmel!','Tuhaf'], optionsEn: ['Terrible','It is okay','Excellent!','Strange'] },
          { id: 's3-q6', type: 'multiple-choice', prompt: '"Sranje" ne anlama gelir?', promptEn: 'What does "Sranje" mean?', streetPrompt: 'Pazi — "Sranje" — nedir bu?', answer: 'Boktan / Saçma sapan', answerEn: 'Shit / Crap', options: ['Harika','Boktan / Saçma sapan','Sıkıcı','Güzel'], optionsEn: ['Great','Shit / Crap','Boring','Beautiful'] },
        ],
      },
      {
        id: 'slang-4', title: 'Flört & İlişkiler', titleEn: 'Flirting & Relationships', streetTitle: 'Muvanje i kafana', emoji: '💕', xpReward: 100,
        questions: [
          { id: 's4-q1', type: 'multiple-choice', prompt: '"Smuvati" ne anlama gelir?', promptEn: 'What does "Smuvati" mean?', streetPrompt: 'Pazi brate — šta znači "smuvati"?', answer: 'Ayarlamak / Hook up / Biriyle çıkmaya başlamak', answerEn: 'To hook up / To start dating someone', options: ['Kavga etmek','Kaçmak','Ayarlamak / Hook up / Biriyle çıkmaya başlamak','Sarhoş olmak'], optionsEn: ['To fight','To run away','To hook up / To start dating someone','To get drunk'] },
          { id: 's4-q5', type: 'multiple-choice', prompt: '"Muvati" ne anlama gelir?', promptEn: 'What does "Muvati" mean?', streetPrompt: 'Šta radiš tamo? "Muvati"?', answer: 'Flört etmek / Tavlamaya çalışmak', answerEn: 'To flirt / To hit on someone', options: ['Uyumak','Yemek yemek','Flört etmek / Tavlamaya çalışmak','Şarkı söylemek'], optionsEn: ['To sleep','To eat','To flirt / To hit on someone','To sing'] },
          { id: 's4-q2', type: 'multiple-choice', prompt: '"Vrh" kelime anlamı olarak nedir ve argoda ne demektir?', promptEn: 'What is "Vrh" in literal and slang meaning?', streetPrompt: 'Brate, what is "Vrh"?', answer: 'Kelime: Zirve / Argo: Muazzam/Harika', answerEn: 'Literal: Summit / Slang: Great/Epic', options: ['Kelime: Dip / Argo: Berbat','Kelime: Kenar / Argo: İdare Eder','Kelime: Son / Argo: Bitti','Kelime: Zirve / Argo: Muazzam/Harika'], optionsEn: ['Literal: Bottom / Slang: Terrible','Literal: Edge / Slang: It is okay','Literal: End / Slang: Over','Literal: Summit / Slang: Great/Epic'] },
          { id: 's4-q3', type: 'translate', prompt: '"Şerefe!" cümlesini çevir', promptEn: 'Translate "Cheers!"', streetPrompt: 'Rakı ile ne söylersin?', answer: 'Živeli', hint: 'zhi-ve-li', hintEn: 'zhi-ve-li' },
          { id: 's4-q4', type: 'multiple-choice', prompt: '"Šmeker" kime denir?', promptEn: 'Who is called a "Šmeker"?', streetPrompt: 'Kendini "Šmeker" sanıyor — o da nedir?', answer: 'Ortamların adamı / Yakışıklı Çapkın', answerEn: 'A charmer / Cool guy', options: ['Ezik','İnek','Ortamların adamı / Yakışıklı Çapkın','Patron'], optionsEn: ['Loser','Nerd','A charmer / Cool guy','Boss'] },
        ],
      },
      {
        id: 'slang-5', title: 'Partilemek', titleEn: 'Partying', streetTitle: 'Luda žurka', emoji: '🍻', xpReward: 100,
        questions: [
          { id: 's5-q1', type: 'multiple-choice', prompt: '"Ludo" ne anlama gelir?', promptEn: 'What does "Ludo" mean?', streetPrompt: 'Kakva noć! "Ludo" je!', answer: 'Çılgın / Delice', answerEn: 'Crazy / Mad', options: ['Sıkıcı','Gürültülü','Çılgın / Delice','Soğuk'], optionsEn: ['Boring','Noisy','Crazy / Mad','Cold'] },
          { id: 's5-q2', type: 'translate', prompt: '"Parti" kelimesini çevir', promptEn: 'Translate the word "Party"', streetPrompt: 'Žurka or …? "parti" kelimesini çevir!', answer: 'Žurka', hint: 'zhur-ka', hintEn: 'zhur-ka' },
          { id: 's5-q3', type: 'multiple-choice', prompt: '"Pijan kao letva" ne anlama gelir?', promptEn: 'What does "Pijan kao letva" mean?', streetPrompt: 'Pazi brate — "Pijan kao letva"?', answer: 'Kütük gibi sarhoş', answerEn: 'Drunk as a skunk', options: ['Sadece biraz çakırkeyif','Kütük gibi sarhoş','Su içiyor','Ayık'], optionsEn: ['Just a bit tipsy','Drunk as a skunk','Drinking water','Sober'] },
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
        id: 'daily-1', title: 'Sabah Rutini', titleEn: 'Morning Routine', streetTitle: 'Jutro je, ustaj!', emoji: '🌅', xpReward: 100,
        questions: [
          { id: 'dl1-q1', type: 'multiple-choice', prompt: '"Uyanıyorum" nasıl denir?', promptEn: 'How to say "I am waking up"?', streetPrompt: 'Pazi — uyandığını nasıl söylersin?', answer: 'Budim se', answerEn: 'Budim se', options: ['Spavam','Budim se','Jedem','Idem'], optionsEn: ['Spavam','Budim se','Jedem','Idem'] },
          { id: 'dl1-q2', type: 'translate', prompt: '"Her sabah kahve içerim" cümlesini çevir', promptEn: 'Translate "I drink coffee every morning"', streetPrompt: 'Kapiram — sabah kahveni söyle bakalım!', answer: 'Pijem kafu svako jutro', hint: 'pijem = içerim, svako = her', hintEn: 'pijem = I drink, svako = every/each' },
          { id: 'dl1-q3', type: 'multiple-choice', prompt: '"Kupatilo" ne anlama gelir?', promptEn: 'What does "Kupatilo" mean?', streetPrompt: 'Brate — "Kupatilo" — šta je to?', answer: 'Banyo', answerEn: 'Bathroom', options: ['Mutfak','Yatak odası','Banyo','Oturma odası'], optionsEn: ['Kitchen','Bedroom','Bathroom','Living room'] },
          { id: 'dl1-q4', type: 'multiple-choice', prompt: '"İşe gidiyorum" nasıl denir?', promptEn: 'How to say "I am going to work"?', streetPrompt: 'Pazartesi sendromu — işe gittiğini nasıl söylersin?', answer: 'Idem na posao', answerEn: 'Idem na posao', options: ['Idem kući','Idem na posao','Radim kod kuće','Ne radim'], optionsEn: ['Idem kući','Idem na posao','Radim kod kuće','Ne radim'] },
          { id: 'dl1-q5', type: 'translate', prompt: '"Yorgunum" cümlesini çevir', promptEn: 'Translate "I am tired"', streetPrompt: 'Brate, çok yorgun olduğunu nasıl söylersin?', answer: 'Umoran sam', hint: 'umoran = yorgun (erkek), umorna = yorgun (kadın)', hintEn: 'umoran = tired (male), umorna = tired (female)' },
        ],
      },
      {
        id: 'daily-2', title: 'Evde', titleEn: 'At Home', streetTitle: 'Kod kuće, opušten', emoji: '🏠', xpReward: 100,
        questions: [
          { id: 'dl2-q1', type: 'multiple-choice', prompt: '"Kuća" ne anlama gelir?', promptEn: 'What does "Kuća" mean?', streetPrompt: '"Kuća" — šta je to?', answer: 'Ev', answerEn: 'House', options: ['Apartman','Ev','Oda','Bina'], optionsEn: ['Apartment','House','Room','Building'] },
          { id: 'dl2-q2', type: 'translate', prompt: '"Oturma odası" kelimesini çevir', promptEn: 'Translate the phrase "Living room"', streetPrompt: 'Dnevna soba or …? "Oturma odası" çevir!', answer: 'Dnevna soba', hint: 'dnevna = günlük, soba = oda', hintEn: 'dnevna = daily/living, soba = room' },
          { id: 'dl2-q3', type: 'multiple-choice', prompt: '"Televizyon izliyorum" nasıl denir?', promptEn: 'How to say "I am watching television"?', streetPrompt: 'Kapiram — evde takılıyorsun, ne yapıyorsun?', answer: 'Gledam televiziju', answerEn: 'Gledam televiziju', options: ['Slušam muziku','Gledam televiziju','Čitam knjigu','Spavam'], optionsEn: ['Slušam muziku','Gledam televiziju','Čitam knjigu','Spavam'] },
          { id: 'dl2-q4', type: 'multiple-choice', prompt: '"Prozor" nedir?', promptEn: 'What is "Prozor"?', streetPrompt: 'Brate — "Prozor"?', answer: 'Pencere', answerEn: 'Window', options: ['Kapı','Tavan','Pencere','Zemin'], optionsEn: ['Door','Ceiling','Window','Floor'] },
          { id: 'dl2-q5', type: 'translate', prompt: '"Pencereyi açabilir misin?" cümlesini çevir', promptEn: 'Translate "Can you open the window?"', streetPrompt: 'Çok sıcak — birinin pencereyi açmasını nasıl istersin?', answer: 'Možeš li otvoriti prozor?', hint: 'možeš li = yapabilir misin, otvoriti = açmak', hintEn: 'možeš li = can you, otvoriti = to open' },
        ],
      },
      {
        id: 'daily-3', title: 'İş ve Okul', titleEn: 'Work and School', streetTitle: 'Posao i škola', emoji: '💼', xpReward: 100,
        questions: [
          { id: 'dl3-q1', type: 'multiple-choice', prompt: '"Bir ofiste çalışıyorum" nasıl denir?', promptEn: 'How to say "I work in an office"?', streetPrompt: 'Pazi — plaza çalışanı, nasıl söylersin?', answer: 'Radim u kancelariji', answerEn: 'Radim u kancelariji', options: ['Radim u fabrici','Radim u kancelariji','Radim kod kuće','Ne radim'], optionsEn: ['Radim u fabrici','Radim u kancelariji','Radim kod kuće','Ne radim'] },
          { id: 'dl3-q2', type: 'translate', prompt: '"Toplantı" kelimesini çevir', promptEn: 'Translate the word "Meeting"', streetPrompt: 'Sastanak or …? "Toplantı" nasıl denir?', answer: 'Sastanak', hint: 'sa-sta-nak', hintEn: 'sa-sta-nak' },
          { id: 'dl3-q3', type: 'multiple-choice', prompt: '"Škola" ne anlama gelir?', promptEn: 'What does "Škola" mean?', streetPrompt: '"Škola" — šta je to?', answer: 'Okul', answerEn: 'School', options: ['Hastane','Okul','Üniversite','Kütüphane'], optionsEn: ['Hospital','School','University','Library'] },
          { id: 'dl3-q4', type: 'multiple-choice', prompt: '"Sırpça çalışıyorum" nasıl denir?', promptEn: 'How to say "I am studying Serbian"?', streetPrompt: 'Kapiram — Sırpça öğreniyorsun, nasıl söylersin?', answer: 'Učim srpski', answerEn: 'Učim srpski', options: ['Pričam srpski','Učim srpski','Volim srpski','Govorim srpski'], optionsEn: ['Pričam srpski','Učim srpski','Volim srpski','Govorim srpski'] },
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
        id: 'emotions-1', title: 'Temel Duygular', titleEn: 'Basic Emotions', streetTitle: 'Sreća, tuga, bes', emoji: '😊', xpReward: 100,
        questions: [
          { id: 'em1-q1', type: 'multiple-choice', prompt: '"Mutluyum" nasıl denir?', promptEn: 'How to say "I am happy"?', streetPrompt: 'Brate — mutlu olduğunu nasıl söylersin?', answer: 'Srećan sam', answerEn: 'Srećan sam', options: ['Tužan sam','Srećan sam','Ljut sam','Uplašen sam'], optionsEn: ['Tužan sam','Srećan sam','Ljut sam','Uplašen sam'] },
          { id: 'em1-q2', type: 'translate', prompt: '"Üzgünüm" cümlesini çevir', promptEn: 'Translate "I am sorry/sad"', streetPrompt: 'Kapiram — üzüntünü nasıl ifade edersin?', answer: 'Tužan sam', hint: 'tužan = üzgün (erkek); tužna = üzgün (kadın)', hintEn: 'tužan = sad (male); tužna = sad (female)' },
          { id: 'em1-q3', type: 'multiple-choice', prompt: '"Ljut" ne anlama gelir?', promptEn: 'What does "Ljut" mean?', streetPrompt: '"Ljut" — kako se osećaš?', answer: 'Sinirli', answerEn: 'Angry', options: ['Heyecanlı','Sıkkın','Sinirli','Korkmuş'], optionsEn: ['Excited','Bored','Angry','Scared'] },
          { id: 'em1-q4', type: 'multiple-choice', prompt: '"Seni seviyorum" nasıl denir?', promptEn: 'How to say "I love you"?', streetPrompt: 'Pazi — en büyük cümle! "Seni seviyorum" nasıl denir?', answer: 'Volim te', answerEn: 'Volim te', options: ['Sviđaš mi se','Volim te','Nedostaješ mi','Znam te'], optionsEn: ['Sviđaš mi se','Volim te','Nedostaješ mi','Znam te'] },
          { id: 'em1-q5', type: 'translate', prompt: '"Seni özledim" cümlesini çevir', promptEn: 'Translate "I missed you"', streetPrompt: 'Brate — birini özlediğini nasıl söylersin?', answer: 'Nedostaješ mi', hint: 'nedostajati = eksiklik hissetmek/özlemek', hintEn: 'nedostajati = to miss someone' },
          { id: 'em1-q6', type: 'multiple-choice', prompt: '"Usamljen" nedir?', promptEn: 'What is "Usamljen"?', streetPrompt: '"Usamljen" — šta je to?', answer: 'Yalnız', answerEn: 'Lonely', options: ['Yorgun','Yalnız','Heyecanlı','Mutlu'], optionsEn: ['Tired','Lonely','Excited','Happy'] },
        ],
      },
      {
        id: 'emotions-2', title: 'Fikirler', titleEn: 'Ideas & Opinions', streetTitle: 'Šta misliš?', emoji: '🤔', xpReward: 100,
        questions: [
          { id: 'em2-q1', type: 'multiple-choice', prompt: '"Bence…" nasıl denir?', promptEn: 'How to say "I think..."?', streetPrompt: 'Pazi — fikrini nasıl paylaşırsın?', answer: 'Mislim da…', answerEn: 'Mislim da…', options: ['Znam da…','Mislim da…','Vidim da…','Hoću da…'], optionsEn: ['Znam da…','Mislim da…','Vidim da…','Hoću da…'] },
          { id: 'em2-q2', type: 'translate', prompt: '"Bana göre / Benim fikrimce" cümlesini çevir', promptEn: 'Translate "In my opinion"', streetPrompt: 'Kapiram — bir fikre nasıl başlarsın?', answer: 'Po mom mišljenju', hint: 'mišljenje = fikir/görüş', hintEn: 'mišljenje = opinion/view' },
          { id: 'em2-q3', type: 'multiple-choice', prompt: 'Biriyle aynı fikirde olduğunu nasıl söylersin?', promptEn: 'How to say "I agree"?', streetPrompt: 'Brate — "Katılıyorum" nasıl denir?', answer: 'Slažem se', answerEn: 'Slažem se', options: ['Ne slažem se','Slažem se','Ne znam','Možda'], optionsEn: ['Ne slažem se','Slažem se','Ne znam','Možda'] },
          { id: 'em2-q4', type: 'multiple-choice', prompt: '"Možda" ne anlama gelir?', promptEn: 'What does "Možda" mean?', streetPrompt: '"Možda" — šta je to?', answer: 'Belki / Olabilir', answerEn: 'Maybe / Could be', options: ['Evet','Hayır','Belki / Olabilir','Asla'], optionsEn: ['Yes','No','Maybe / Could be','Never'] },
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
        id: 'weather-1', title: 'Temel Hava', titleEn: 'Basic Weather', streetTitle: 'Kiša ili sunce?', emoji: '🌤️', xpReward: 100,
        questions: [
          { id: 'w1-q1', type: 'multiple-choice', prompt: '"Hava nasıl?" diye nasıl sorulur?', promptEn: 'How to ask "What is the weather like?"', streetPrompt: 'Pazi — havanın nasıl olduğunu nasıl sorarsın?', answer: 'Kakvo je vreme?', answerEn: 'Kakvo je vreme?', options: ['Koliko je toplo?','Kakvo je vreme?','Da li pada kiša?','Je li sunčano?'], optionsEn: ['Koliko je toplo?','Kakvo je vreme?','Da li pada kiša?','Je li sunčano?'] },
          { id: 'w1-q2', type: 'translate', prompt: '"Yağmur yağıyor" cümlesini çevir', promptEn: 'Translate "It is raining"', streetPrompt: 'Kiša pada — yağmur yağdığını nasıl söylersin?', answer: 'Pada kiša', hint: 'pada = düşüyor, kiša = yağmur', hintEn: 'pada = falls, kiša = rain' },
          { id: 'w1-q3', type: 'multiple-choice', prompt: '"Sunčano" ne anlama gelir?', promptEn: 'What does "Sunčano" mean?', streetPrompt: '"Sunčano" — kakvo je vreme?', answer: 'Güneşli', answerEn: 'Sunny', options: ['Bulutlu','Rüzgarlı','Güneşli','Yağmurlu'], optionsEn: ['Cloudy','Windy','Sunny','Rainy'] },
          { id: 'w1-q4', type: 'multiple-choice', prompt: '"Hava soğuk" nasıl denir?', promptEn: 'How to say "It is cold"?', streetPrompt: 'Brrr — havanın soğuk olduğunu Sırpçada nasıl söylersin?', answer: 'Hladno je', answerEn: 'Hladno je', options: ['Toplo je','Hladno je','Vetrovito je','Vlažno je'], optionsEn: ['Toplo je','Hladno je','Vetrovito je','Vlažno je'] },
          { id: 'w1-q5', type: 'translate', prompt: '"Kar" kelimesini çevir', promptEn: 'Translate the word "Snow"', streetPrompt: 'Beograd zimi — "kar" kelimesini çevir!', answer: 'Sneg', hint: 's-neg', hintEn: 's-neg' },
          { id: 'w1-q6', type: 'multiple-choice', prompt: '"Oblačno" ne anlama gelir?', promptEn: 'What does "Oblačno" mean?', streetPrompt: '"Oblačno" — kakvo je vreme?', answer: 'Bulutlu', answerEn: 'Cloudy', options: ['Güneşli','Soğuk','Bulutlu','Sıcak'], optionsEn: ['Sunny','Cold','Cloudy','Hot'] },
        ],
      },
      {
        id: 'weather-2', title: 'Mevsimler', titleEn: 'Seasons', streetTitle: 'Godišnja doba', emoji: '🍂', xpReward: 100,
        questions: [
          { id: 'w2-q1', type: 'multiple-choice', prompt: '"Yaz" nasıl denir?', promptEn: 'How to say "Summer"?', streetPrompt: 'Kapiram — Sırpçada "Yaz"?', answer: 'Leto', answerEn: 'Leto', options: ['Zima','Proleće','Leto','Jesen'], optionsEn: ['Zima','Proleće','Leto','Jesen'] },
          { id: 'w2-q2', type: 'translate', prompt: '"Kış" kelimesini çevir', promptEn: 'Translate the word "Winter"', streetPrompt: 'Brrr — Sırpçada "Kış"?', answer: 'Zima', hint: 'zi-ma', hintEn: 'zi-ma' },
          { id: 'w2-q3', type: 'multiple-choice', prompt: '"Proleće" nedir?', promptEn: 'What is "Proleće"?', streetPrompt: '"Proleće" — hangi mevsim?', answer: 'İlkbahar', answerEn: 'Spring', options: ['Sonbahar','Kış','İlkbahar','Yaz'], optionsEn: ['Autumn','Winter','Spring','Summer'] },
          { id: 'w2-q4', type: 'multiple-choice', prompt: '"Sonbahar" nasıl denir?', promptEn: 'How to say "Autumn"?', streetPrompt: 'Pazi — hangi kelime sonbahar demek?', answer: 'Jesen', answerEn: 'Jesen', options: ['Leto','Zima','Proleće','Jesen'], optionsEn: ['Leto','Zima','Proleće','Jesen'] },
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
        id: 'family-1', title: 'Aile Üyeleri', titleEn: 'Family Members', streetTitle: 'Ko je ko u familiji', emoji: '👪', xpReward: 100,
        questions: [
          { id: 'fam1-q1', type: 'multiple-choice', prompt: '"Anne" nasıl denir?', promptEn: 'How to say "Mother"?', streetPrompt: 'Pazi — Sırpçada "Anne"?', answer: 'Majka', answerEn: 'Majka', options: ['Otac','Majka','Brat','Sestra'], optionsEn: ['Otac','Majka','Brat','Sestra'] },
          { id: 'fam1-q2', type: 'translate', prompt: '"Baba" kelimesini çevir', promptEn: 'Translate the word "Father"', streetPrompt: 'Brate — Sırpçada "Baba"?', answer: 'Otac', hint: 'o-tac', hintEn: 'o-tac' },
          { id: 'fam1-q3', type: 'multiple-choice', prompt: '"Brat" ne anlama gelir?', promptEn: 'What does "Brat" mean?', streetPrompt: '"Brat" — šta je to?', answer: 'Erkek Kardeş', answerEn: 'Brother', options: ['Kız kardeş','Baba','Erkek Kardeş','Oğul'], optionsEn: ['Sister','Father','Brother','Son'] },
          { id: 'fam1-q4', type: 'multiple-choice', prompt: '"Büyükanne/Nine" nasıl denir?', promptEn: 'How to say "Grandmother"?', streetPrompt: 'Kapiram — neneye nasıl seslenirsin?', answer: 'Baka', answerEn: 'Baka', options: ['Deda','Baka','Tetka','Strina'], optionsEn: ['Deda','Baka','Tetka','Strina'] },
          { id: 'fam1-q5', type: 'translate', prompt: '"İki erkek kardeşim var" cümlesini çevir', promptEn: 'Translate "I have two brothers"', streetPrompt: 'Brate — iki erkek kardeşin olduğunu nasıl söylersin?', answer: 'Imam dva brata', hint: 'imam = sahibim/var, dva = iki', hintEn: 'imam = I have, dva = two' },
          { id: 'fam1-q6', type: 'multiple-choice', prompt: '"Deda" kimdir?', promptEn: 'Who is "Deda"?', streetPrompt: '"Deda" is who?', answer: 'Babaanne/Büyükbaba', answerEn: 'Grandpa', options: ['Amca','Baba','Dede / Büyükbaba','Oğul'], optionsEn: ['Uncle','Father','Grandpa','Son'] },
        ],
      },
      {
        id: 'family-2', title: 'Aileyi Anlatmak', titleEn: 'Describing Family', streetTitle: 'Kakva je tvoja familija?', emoji: '🧬', xpReward: 100,
        questions: [
          { id: 'fam2-q1', type: 'multiple-choice', prompt: '"Ailem büyük" nasıl denir?', promptEn: 'How to say "My family is large"?', streetPrompt: 'Kapiram — büyük aileni anlat bakalım!', answer: 'Moja porodica je velika', answerEn: 'Moja porodica je velika', options: ['Moja porodica je mala','Moja porodica je velika','Imam porodicu','Volim porodicu'], optionsEn: ['Moja porodica je mala','Moja porodica je velika','Imam porodicu','Volim porodicu'] },
          { id: 'fam2-q2', type: 'translate', prompt: '"Kız kardeşim genç/küçük" cümlesini çevir', promptEn: 'Translate "My sister is young"', streetPrompt: 'Pazi — kız kardeşinin genç olduğunu nasıl söylersin?', answer: 'Moja sestra je mlada', hint: 'mlada = genç (kadın/dişil)', hintEn: 'mlada = young (female)' },
          { id: 'fam2-q3', type: 'multiple-choice', prompt: '"Star" ne anlama gelir?', promptEn: 'What does "Star" mean?', streetPrompt: '"Star" — šta znači?', answer: 'Yaşlı / Eski', answerEn: 'Old / Ancient', options: ['Genç','Uzun','Yaşlı / Eski','Zeki'], optionsEn: ['Young','Tall','Old / Ancient','Smart'] },
          { id: 'fam2-q4', type: 'multiple-choice', prompt: '"Babam Belgrad\'da çalışıyor" nasıl denir?', promptEn: 'How to say "My father works in Belgrade"?', streetPrompt: 'Brate — babanın nerede çalıştığını nasıl anlatırsın?', answer: 'Moj otac radi u Beogradu', answerEn: 'Moj otac radi u Beogradu', options: ['Moj otac je u Beogradu','Moj otac radi u Beogradu','Moj otac živi u Beogradu','Moj otac ide u Beograd'], optionsEn: ['Moj otac je u Beogradu','Moj otac radi u Beogradu','Moj otac živi u Beogradu','Moj otac ide u Beograd'] },
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
        id: 'travel-1', title: 'Otel Girişi', titleEn: 'Hotel Check-in', streetTitle: 'Soba i ključ', emoji: '🏨', xpReward: 100,
        questions: [
          { id: 'tr1-q1', type: 'multiple-choice', prompt: '"Otel" nasıl denir?', promptEn: 'How to say "Hotel"?', streetPrompt: 'Otele ne diyorsunuz brate?', answer: 'Hotel', answerEn: 'Hotel', options: ['Soba', 'Restoran', 'Kuća', 'Hotel'], optionsEn: ['Soba', 'Restoran', 'Kuća', 'Hotel'] },
          { id: 'tr1-q2', type: 'translate', prompt: '"Rezervasyonum var" cümlesini çevir', promptEn: 'Translate "I have a reservation"', streetPrompt: 'Kapiram — odanı ayarladın, resepsiyonda ne dersin?', answer: 'Imam rezervaciju', hint: 'imam = sahibim, rezervacija = rezervasyon', hintEn: 'imam = I have, rezervacija = reservation' },
          { id: 'tr1-q3', type: 'multiple-choice', prompt: '"Soba" ne anlama gelir?', promptEn: 'What does "Soba" mean?', streetPrompt: 'Brate, "soba" nedir?', answer: 'Oda', answerEn: 'Room', options: ['Bina', 'Oda', 'Mutfak', 'Yatak'], optionsEn: ['Building', 'Room', 'Kitchen', 'Bed'] },
          { id: 'tr1-q4', type: 'translate', prompt: '"Pasaport" kelimesini çevir', promptEn: 'Translate the word "Passport"', streetPrompt: 'Sınırda lazım olan şey?', answer: 'Pasoš', hint: 'pa-soš', hintEn: 'pa-soš' },
        ],
      },
      {
        id: 'travel-2', title: 'Havalimanı & Uçuşlar', titleEn: 'Airport & Flights', streetTitle: 'Letimo na aerodrom', emoji: '🛫', xpReward: 100,
        questions: [
          { id: 'tr2-q1', type: 'multiple-choice', prompt: '"Uçuş" nasıl denir?', promptEn: 'How to say "Flight"?', streetPrompt: 'Pazi — havaya yükseliyorsun?', answer: 'Let', answerEn: 'Let', options: ['Karta', 'Let', 'Avion', 'Put'], optionsEn: ['Karta', 'Let', 'Avion', 'Put'] },
          { id: 'tr2-q2', type: 'multiple-choice', prompt: '"Kofer" ne anlama gelir?', promptEn: 'What does "Kofer" mean?', streetPrompt: 'Brate — "kofer"?', answer: 'Bavul', answerEn: 'Suitcase', options: ['Sırt çantası', 'Bilet', 'Bavul', 'Cüzdan'], optionsEn: ['Backpack', 'Ticket', 'Suitcase', 'Wallet'] },
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
        id: 'shopping-1', title: 'Kıyafetler', titleEn: 'Clothes', streetTitle: 'Odeća i patike', emoji: '👕', xpReward: 100,
        questions: [
          { id: 'sh1-q1', type: 'multiple-choice', prompt: '"Ti-şört" kelimesi nedir?', promptEn: 'What is the word for "T-shirt"?', streetPrompt: 'Kapiram — kısa kollu tişört nedir?', answer: 'Majica', answerEn: 'Majica', options: ['Jakna', 'Cipele', 'Košulja', 'Majica'], optionsEn: ['Jakna', 'Cipele', 'Košulja', 'Majica'] },
          { id: 'sh1-q2', type: 'translate', prompt: '"Ayakkabı" kelimesini çevir', promptEn: 'Translate the word "Shoes"', streetPrompt: 'Ayağa ne giyilir?', answer: 'Cipele', hint: 'ci-pe-le', hintEn: 'ci-pe-le' },
          { id: 'sh1-q3', type: 'multiple-choice', prompt: '"Jeftino" ne anlama gelir?', promptEn: 'What does "Jeftino" mean?', streetPrompt: 'Brate — "jeftino"?', answer: 'Ucuz', answerEn: 'Cheap', options: ['İyi', 'Pahalı', 'Ucuz', 'Ağır'], optionsEn: ['Good', 'Expensive', 'Cheap', 'Heavy'] },
          { id: 'sh1-q4', type: 'translate', prompt: '"Pahalı" kelimesini çevir', promptEn: 'Translate the word "Expensive"', streetPrompt: 'Çok fazla para — bunun Sırpçası nedir?', answer: 'Skupo', hint: 'sku-po', hintEn: 'sku-po' },
        ],
      },
      {
        id: 'shopping-2', title: 'Kadın Modası', titleEn: 'Women\'s Fashion', streetTitle: 'Ženska Moda', emoji: '👗', xpReward: 100,
        questions: [
          { id: 'sh2-q1', type: 'multiple-choice', prompt: '"Elbise" nasıl denir?', promptEn: 'How to say "Dress"?', streetPrompt: 'Brate, elbiseye ne denir?', answer: 'Haljina', answerEn: 'Haljina', options: ['Pantalone', 'Haljina', 'Jakna', 'Košulja'], optionsEn: ['Pantalone', 'Haljina', 'Jakna', 'Košulja'] },
          { id: 'sh2-q2', type: 'translate', prompt: '"Etek" kelimesini çevir', promptEn: 'Translate the word "Skirt"', streetPrompt: 'Sırpçada etek nedir?', answer: 'Suknja', hint: 'suk-nya', hintEn: 'suk-nya' },
          { id: 'sh2-q3', type: 'multiple-choice', prompt: '"Štikle" nedir?', promptEn: 'What are "Štikle"?', streetPrompt: 'Bu gece dışarı çıkıyor — "Štikle" nedir?', answer: 'Topuklu ayakkabı', answerEn: 'High heels', options: ['Spor ayakkabı', 'Topuklu ayakkabı', 'Bot', 'Sandalet'], optionsEn: ['Sneakers', 'High heels', 'Boots', 'Sandals'] },
          { id: 'sh2-q4', type: 'translate', prompt: '"Güzel elbise" kelimesini çevir', promptEn: 'Translate the phrase "Beautiful dress"', streetPrompt: 'Bir elbiseye nasıl iltifat edersin?', answer: 'Lepa haljina', hint: 'lepa = güzel', hintEn: 'lepa = beautiful' },
        ],
      },
      {
        id: 'shopping-3', title: 'Erkek Modası', titleEn: 'Men\'s Fashion', streetTitle: 'Muška Moda', emoji: '👔', xpReward: 100,
        questions: [
          { id: 'sh3-q1', type: 'multiple-choice', prompt: '"Şort" nasıl denir?', promptEn: 'How to say "Shorts"?', streetPrompt: 'Yaz geldi kanka — şort nedir?', answer: 'Šorts', answerEn: 'Šorts', options: ['Šorts', 'Odelo', 'Kapa', 'Kaiš'], optionsEn: ['Šorts', 'Odelo', 'Kapa', 'Kaiš'] },
          { id: 'sh3-q2', type: 'multiple-choice', prompt: '"Odelo" nedir?', promptEn: 'What is "Odelo"?', streetPrompt: 'Şık giyinmek — "Odelo" nedir?', answer: 'Takım elbise', answerEn: 'Suit', options: ['Tişört', 'Kravat', 'Takım elbise', 'Pantolon'], optionsEn: ['T-shirt', 'Tie', 'Suit', 'Pants'] },
          { id: 'sh3-q3', type: 'translate', prompt: '"Pantolon" kelimesini çevir', promptEn: 'Translate the word "Pants"', streetPrompt: 'Pantolon Sırpçada nasıl?', answer: 'Pantalone', hint: 'pan-ta-lo-ne', hintEn: 'pan-ta-lo-ne' },
          { id: 'sh3-q4', type: 'multiple-choice', prompt: '"Ceket" nasıl denir?', promptEn: 'How to say "Jacket"?', streetPrompt: 'Hava soğuk kanka — bir tane...', answer: 'Jakna', answerEn: 'Jakna', options: ['Kravata', 'Čarapa', 'Jakna', 'Prsluk'], optionsEn: ['Kravata', 'Čarapa', 'Jakna', 'Prsluk'] },
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
        id: 'culture-1', title: 'Slava', titleEn: 'Slava', streetTitle: 'Slava i Gosti', emoji: '🕯️', xpReward: 100,
        questions: [
          { id: 'c1-q1', type: 'multiple-choice', prompt: '"Slava" nedir?', promptEn: 'What is "Slava"?', streetPrompt: 'Sırp aileleri için en önemli gün nedir?', answer: 'Aziz günü', answerEn: 'Saint Day (Patron Saint Day)', options: ['Aziz günü','Düğün','Doğum günü','Yeni Yıl'], optionsEn: ['Saint Day','Wedding','Birthday','New Year'] },
          { id: 'c1-q2', type: 'multiple-choice', prompt: 'Bir Sırp evine misafir olarak girerken ne yapmalısın?', promptEn: 'What should you do when entering a Serbian home as a guest?', streetPrompt: 'Eve girerken — en önemli kural nedir?', answer: 'Ayakkabılarını çıkar', answerEn: 'Take off your shoes', options: ['Ev sahibini 4 kez öp','Yüksek sesle kapıyı çal','Ayakkabılarını çıkar','Para öde'], optionsEn: ['Kiss the host 4 times','Knock loudly','Take off your shoes','Pay money'] },
          { id: 'c1-q3', type: 'translate', prompt: '"Mutlu Slava!" cümlesini çevir', promptEn: 'Translate "Happy Slava!"', streetPrompt: 'Ev sahibini Slava için nasıl tebrik edersin?', answer: 'Srećna slava', hint: 'srećna = mutlu', hintEn: 'srećna = happy' },
          { id: 'c1-q4', type: 'multiple-choice', prompt: 'Evin kadın ev sahibine ne denir?', promptEn: 'What is the female hostess of the house called?', streetPrompt: 'Ona saygı duymalısın — kadın ev sahibine ne denir?', answer: 'Domaćica', answerEn: 'Domaćica', options: ['Kraljica','Domaćica','Prijateljica','Sestra'], optionsEn: ['Queen','Domaćica','Friend','Sister'] },
          { id: 'c1-q5', type: 'multiple-choice', prompt: 'Birinin evine giderken genellikle ne hediye götürürsün?', promptEn: 'What gift do you usually bring when going to someone\'s house?', streetPrompt: 'Ev sahibi için standart hediye nedir?', answer: 'Kahve, şarap veya çikolata', answerEn: 'Coffee, wine or chocolate', options: ['Büyük bir bitki','Kahve, şarap veya çikolata','Para','Taze ekmek'], optionsEn: ['A large plant','Coffee, wine or chocolate','Money','Fresh bread'] },
        ],
      },
      {
        id: 'culture-2', title: 'Rakija Kuralları', titleEn: 'Rakija Rules', streetTitle: 'Pravila Rakije', emoji: '🥃', xpReward: 100,
        questions: [
          { id: 'c2-q1', type: 'multiple-choice', prompt: 'Rakija ile kadeh kaldırırken altın kural nedir?', promptEn: 'What is the golden rule when toasting with Rakija?', streetPrompt: 'Kadeh tokuştururken — ne yapmalısın?', answer: 'Gözlerinin içine bak', answerEn: 'Look in their eyes', options: ['Tek dikişte iç','Gözlerinin içine bak','Kadehe bak','Yüksek sesle bağır'], optionsEn: ['Drink in one go','Look in their eyes','Look at the glass','Shout loudly'] },
          { id: 'c2-q2', type: 'translate', prompt: '"Sağlığına / Şerefe!" cümlesini çevir', promptEn: 'Translate "To your health / Cheers!"', streetPrompt: 'Nasıl kadeh kaldırırız?', answer: 'U tvoje zdravlje', hint: 'zdravlje = sağlık', hintEn: 'zdravlje = health' },
          { id: 'c2-q3', type: 'multiple-choice', prompt: '"Šljivovica" nedir?', promptEn: 'What is "Šljivovica"?', streetPrompt: 'En ünlü Rakija türü?', answer: 'Erik rakısı', answerEn: 'Plum brandy', options: ['Üzüm rakısı','Erik rakısı','Vişne rakısı','Bal rakısı'], optionsEn: ['Grape brandy','Plum brandy','Cherry brandy','Honey brandy'] },
          { id: 'c2-q4', type: 'translate', prompt: '"Şerefe" kelimesini çevir', promptEn: 'Translate the word "Cheers"', streetPrompt: 'Yaygın kadeh kaldırma kelimesi?', answer: 'Živeli', hint: 'zhi-ve-li', hintEn: 'zhi-ve-li' },
        ],
      },
      {
        id: 'culture-3', title: 'Kafana Hayatı', titleEn: 'Kafana Life', streetTitle: 'Noć u Kafani', emoji: '🎻', xpReward: 100,
        questions: [
          { id: 'c3-q1', type: 'multiple-choice', prompt: '"Kafana" nedir?', promptEn: 'What is a "Kafana"?', streetPrompt: 'En iyi gece hayatı nerede?', answer: 'Geleneksel meyhane', answerEn: 'Traditional tavern', options: ['Gece kulübü','Kafe','Süpermarket','Geleneksel meyhane'], optionsEn: ['Night club','Cafe','Supermarket','Traditional tavern'] },
          { id: 'c3-q2', type: 'multiple-choice', prompt: 'Müzisyenler masana gelirse onlara ne vermelisin?', promptEn: 'What should you give musicians if they come to your table?', streetPrompt: 'Müzik masana geldi — ne verirsin?', answer: 'Bakšiš (Bahşiş)', answerEn: 'Tip', options: ['Rakija','Bakšiš (Bahşiş)','Bir şarkı','Yemek'], optionsEn: ['Rakija','Tip','A song','Food'] },
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
        id: 'hobbies-1', title: 'Boş Zaman', titleEn: 'Leisure Time', streetTitle: 'Slobodno vreme', emoji: '🎸', xpReward: 100,
        questions: [
          { id: 'hb1-q1', type: 'multiple-choice', prompt: '"Müzik dinliyorum" nasıl denir?', promptEn: 'How to say "I am listening to music"?', streetPrompt: 'Slušalice u uši — müzik dinlediğini nasıl söylersin?', answer: 'Slušam muziku', answerEn: 'Slušam muziku', options: ['Gledam film', 'Slušam muziku', 'Igram fudbal', 'Čitam knjigu'], optionsEn: ['Gledam film', 'Slušam muziku', 'Igram fudbal', 'Čitam knjigu'] },
          { id: 'hb1-q2', type: 'translate', prompt: '"Kitap okuyorum" cümlesini çevir', promptEn: 'Translate "I am reading a book"', streetPrompt: 'Kapiram — "Kitap okuyorum" nedir?', answer: 'Čitam knjigu', hint: 'čitam = okuyorum, knjigu = kitap', hintEn: 'čitam = I am reading, knjigu = book' },
          { id: 'hb1-q3', type: 'multiple-choice', prompt: '"Pevam" ne anlama gelir?', promptEn: 'What does "Pevam" mean?', streetPrompt: 'Idemo — "Pevam"?!', answer: 'Şarkı söylüyorum', answerEn: 'I am singing', options: ['Dans ediyorum', 'Şarkı söylüyorum', 'Yüzüyorum', 'Koşuyorum'], optionsEn: ['I am dancing', 'I am singing', 'I am swimming', 'I am running'] },
          { id: 'hb1-q4', type: 'translate', prompt: '"Dans etmeyi seviyorum" cümlesini çevir', promptEn: 'Translate "I love to dance"', streetPrompt: 'Klubovi! Dans etmeyi sevdiğini anlat!', answer: 'Volim da plešem', hint: 'volim = seviyorum, da plešem = dans etmeyi', hintEn: 'volim = I love, da plešem = to dance' },
        ],
      },
      {
        id: 'hobbies-2', title: 'Spor & Oyun', titleEn: 'Sports & Games', streetTitle: 'Sport i Pivo', emoji: '🏆', xpReward: 100,
        questions: [
          { id: 'hb2-q1', type: 'multiple-choice', prompt: '"Fudbal" nedir?', promptEn: 'What is "Fudbal"?', streetPrompt: 'Najbitnija sporedna stvar na svetu?', answer: 'Futbol', answerEn: 'Football', options: ['Basketbol', 'Tenis', 'Futbol', 'Voleybol'], optionsEn: ['Basketball', 'Tennis', 'Football', 'Volleyball'] },
          { id: 'hb2-q2', type: 'multiple-choice', prompt: '"Oyun oynuyorum" nasıl denir?', promptEn: 'How to say "I am playing games"?', streetPrompt: 'Brate — oyun oynadığını nasıl söylersin?', answer: 'Igram igrice', answerEn: 'Igram igrice', options: ['Spavam', 'Gledam TV', 'Igram igrice', 'Jedem'], optionsEn: ['Spavam', 'Gledam TV', 'Igram igrice', 'Jedem'] },
          { id: 'hb2-q3', type: 'translate', prompt: '"Koşuyorum" kelimesini çevir', promptEn: 'Translate the word "I am running"', streetPrompt: 'Brate — "koşuyorum" nedir?', answer: 'Trčim', hint: 'tr-čim', hintEn: 'tr-čim' },
          { id: 'hb2-q4', type: 'multiple-choice', prompt: '"Teretana" nedir?', promptEn: 'What is "Teretana"?', streetPrompt: 'Brate, idemo vežbamo — "Teretana" nedir?', answer: 'Spor salonu', answerEn: 'Gym', options: ['Kütüphane', 'Spor salonu', 'Market', 'Hastane'], optionsEn: ['Library', 'Gym', 'Market', 'Hospital'] },
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
        id: 'tech-1', title: 'Cep Telefonunuz', titleEn: 'Your Mobile Phone', streetTitle: 'Mobilni', emoji: '📱', xpReward: 100,
        questions: [
          { id: 'tc1-q1', type: 'multiple-choice', prompt: '"Telefon" nasıl denir?', promptEn: 'How to say "Phone"?', streetPrompt: 'Brate, cebinde ne var?', answer: 'Telefon', answerEn: 'Telefon', options: ['Sat', 'Novčanik', 'Ključ', 'Telefon'], optionsEn: ['Sat', 'Novčanik', 'Ključ', 'Telefon'] },
          { id: 'tc1-q2', type: 'translate', prompt: '"Bataryam bitti" cümlesini çevir', promptEn: 'Translate "My battery is dead"', streetPrompt: 'En kötüsü — şarj bitti?', answer: 'Prazna mi je baterija', hint: 'prazna = boş, baterija = batarya', hintEn: 'prazna = empty, baterija = battery' },
          { id: 'tc1-q3', type: 'multiple-choice', prompt: '"Punjač" nedir?', promptEn: 'What is a "Punjač"?', streetPrompt: 'Kapiram, "punjač" lazım sana. Nedir o?', answer: 'Şarj aleti', answerEn: 'Charger', options: ['Kulaklık', 'Kılıf', 'Ekran', 'Şarj aleti'], optionsEn: ['Headphones', 'Case', 'Screen', 'Charger'] },
          { id: 'tc1-q4', type: 'multiple-choice', prompt: '"Poruka" ne anlama gelir?', promptEn: 'What does "Poruka" mean?', streetPrompt: 'Bzz bzz... "poruka" geldi?', answer: 'Mesaj', answerEn: 'Message', options: ['Arama', 'Mesaj', 'Fotoğraf', 'Video'], optionsEn: ['Call', 'Message', 'Photo', 'Video'] },
        ],
      },
      {
        id: 'tech-2', title: 'İnternet', titleEn: 'Internet', streetTitle: 'Na internetu', emoji: '🌐', xpReward: 100,
        questions: [
          { id: 'tc2-q1', type: 'multiple-choice', prompt: '"Bilgisayar" nasıl denir?', promptEn: 'How to say "Computer"?', streetPrompt: 'Evde masaüstünde ne var?', answer: 'Kompjuter', answerEn: 'Kompjuter', options: ['Kompjuter', 'Televizor', 'Radio', 'Šporet'], optionsEn: ['Kompjuter', 'Televizor', 'Radio', 'Šporet'] },
          { id: 'tc2-q2', type: 'translate', prompt: '"Wi-Fi şifresi nedir?" cümlesini çevir', promptEn: 'Translate "What is the Wi-Fi password?"', streetPrompt: 'Kafeye oturdun, net lazım. Ne sorarsın?', answer: 'Koja je šifra za internet?', hint: 'koja = nedir/hangisi, šifra = şifre', hintEn: 'koja = which/what is, šifra = password' },
          { id: 'tc2-q3', type: 'multiple-choice', prompt: '"Društvene mreže" ne anlama gelir?', promptEn: 'What does "Društvene mreže" mean?', streetPrompt: 'Brate — her gün kaydırdığın şey?', answer: 'Sosyal Medya', answerEn: 'Social Media', options: ['Spor', 'Haberler', 'Sosyal Medya', 'Müzik'], optionsEn: ['Sports', 'News', 'Social Media', 'Music'] },
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
        id: 'work-1', title: 'Meslekler', titleEn: 'Professions', streetTitle: 'Šta radiš u životu?', emoji: '🧑‍💼', xpReward: 100,
        questions: [
          { id: 'wk1-q1', type: 'multiple-choice', prompt: '"Şef / Patron" nasıl denir?', promptEn: 'How to say "Chef / Boss"?', streetPrompt: 'En tepedeki adama ne denir?', answer: 'Šef', answerEn: 'Šef', options: ['Radnik', 'Šef', 'Klijent', 'Praktikant'], optionsEn: ['Radnik', 'Šef', 'Klijent', 'Praktikant'] },
          { id: 'wk1-q2', type: 'multiple-choice', prompt: '"Učenik / Öğrenci" ne anlama gelir?', promptEn: 'What does "Učenik / Student" mean?', streetPrompt: '"Student" nedir?', answer: 'Üniversite Öğrencisi', answerEn: 'University Student', options: ['Öğretmen', 'Üniversite Öğrencisi', 'Doktor', 'Mühendis'], optionsEn: ['Teacher', 'University Student', 'Doctor', 'Engineer'] },
          { id: 'wk1-q3', type: 'translate', prompt: '"Doktor" kelimesini çevir', promptEn: 'Translate the word "Doctor"', streetPrompt: 'Hastanedesin. Kimdir o?', answer: 'Doktor', hint: 'Doktor/Lekar', hintEn: 'Doktor or Lekar' },
          { id: 'wk1-q4', type: 'multiple-choice', prompt: '"Radnik" nedir?', promptEn: 'What is a "Radnik"?', streetPrompt: 'Brate, "Radnik" kimdir?', answer: 'İşçi / Çalışan', answerEn: 'Worker / Employee', options: ['Patron', 'Müşteri', 'İşçi / Çalışan', 'Öğrenci'], optionsEn: ['Boss', 'Customer', 'Worker / Employee', 'Student'] },
        ],
      },
      {
        id: 'work-2', title: 'Ofiste', titleEn: 'In the Office', streetTitle: 'Kancelarija', emoji: '🏢', xpReward: 100,
        questions: [
          { id: 'wk2-q1', type: 'multiple-choice', prompt: '"Toplantı" nasıl denir?', promptEn: 'How to say "Meeting"?', streetPrompt: 'Patron çağırdı, ne bu?', answer: 'Sastanak', answerEn: 'Sastanak', options: ['Odmor', 'Sastanak', 'Ručak', 'Pauza'], optionsEn: ['Odmor', 'Sastanak', 'Ručak', 'Pauza'] },
          { id: 'wk2-q2', type: 'translate', prompt: '"Meşgulüm" cümlesini çevir', promptEn: 'Translate "I am busy"', streetPrompt: 'Vaktin yok, yetiştireceğin iş var, ne dersin?', answer: 'Zauzet sam', hint: 'zauzet = meşgul/dolu', hintEn: 'zauzet = busy/full' },
          { id: 'wk2-q3', type: 'multiple-choice', prompt: '"Mola / Ara" ne anlama gelir? ("Pauza")', promptEn: 'What does "Mola / Pause" mean? ("Pauza")', streetPrompt: 'Ajde na pauzu! "Pauza" nedir?', answer: 'Mola', answerEn: 'Break', options: ['İş', 'Mola', 'Toplantı', 'Maaş'], optionsEn: ['Work', 'Break', 'Meeting', 'Salary'] },
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
        id: 'colors-1', title: 'Ana Renkler', titleEn: 'Primary Colors', streetTitle: 'Glavne boje', emoji: '🔴', xpReward: 100,
        questions: [
          { id: 'col1-q1', type: 'translate', prompt: '"Kırmızı" kelimesini çevir', promptEn: 'Translate the word "Red"', streetPrompt: 'Kızılyıldızın rengi!', answer: 'Crvena', hint: 'cr-ve-na', hintEn: 'cr-ve-na' },
          { id: 'col1-q2', type: 'translate', prompt: '"Siyah" kelimesini çevir', promptEn: 'Translate the word "Black"', streetPrompt: 'Partizanın rengi!', answer: 'Crna', hint: 'cr-na', hintEn: 'cr-na' },
          { id: 'col1-q3', type: 'multiple-choice', prompt: '"Belo" hangi renktir?', promptEn: 'What color is "Belo"?', streetPrompt: '"Beo-grad" Beyaz Şehir demek. O halde "Belo" nedir?', answer: 'Beyaz', answerEn: 'White', options: ['Mavi', 'Beyaz', 'Sarı', 'Yeşil'], optionsEn: ['Blue', 'White', 'Yellow', 'Green'] },
          { id: 'col1-q4', type: 'multiple-choice', prompt: '"Mavi" nasıl denir?', promptEn: 'How to say "Blue"?', streetPrompt: 'Gökyüzü ne renk?', answer: 'Plava', answerEn: 'Plava', options: ['Žuta', 'Zelena', 'Plava', 'Siva'], optionsEn: ['Žuta', 'Zelena', 'Plava', 'Siva'] },
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
        id: 'surv-1', title: 'Bürokrasi', titleEn: 'Bureaucracy', streetTitle: 'Fali Ti Jedan Papir (FT1P)', emoji: '📄', xpReward: 100,
        questions: [
          { id: 'sv1-q1', type: 'multiple-choice', prompt: '"Šalter" ne anlama gelir?', promptEn: 'What does "Šalter" mean?', streetPrompt: 'Memurla kavga etmek için nereye gidersin?', answer: 'Vezne / Gişe', answerEn: 'Counter / Window', options: ['Banka kasası', 'Vezne / Gişe', 'Tuvalet', 'Çıkış'], optionsEn: ['Bank safe', 'Counter / Window', 'Toilet', 'Exit'] },
          { id: 'sv1-q2', type: 'translate', prompt: '"Mühür" kelimesini çevir', promptEn: 'Translate the word "Stamp/Seal"', streetPrompt: 'Bez ovoga papir ne vredi ništa!', answer: 'Pečat', hint: 'pe-čat', hintEn: 'pe-chat' },
          { id: 'sv1-q3', type: 'multiple-choice', prompt: '"Fali ti jedan papir" ne anlama gelir? (Efsanevi FT1P)', promptEn: 'What does "Fali ti jedan papir" mean? (Legendary FT1P)', streetPrompt: 'Memur teyze sana her zaman ne der?', answer: 'Bir evrak eksik', answerEn: 'One document is missing', options: ['Onaylandın', 'Bir evrak eksik', 'Lütfen dışarıda bekle', 'Yarın gel'], optionsEn: ['You are approved', 'One document is missing', 'Please wait outside', 'Come tomorrow'] },
          { id: 'sv1-q4', type: 'translate', prompt: '"İmza" kelimesini çevir', promptEn: 'Translate the word "Signature"', streetPrompt: 'Nereye atıyorsun, brate?', answer: 'Potpis', hint: 'pot-pis', hintEn: 'pot-pis' },
        ],
      },
      {
        id: 'surv-2', title: 'Sağlık & Mitler', titleEn: 'Health & Myths', streetTitle: 'Čuvaj Se Promaje', emoji: '🥶', xpReward: 100,
        questions: [
          { id: 'sv2-q1', type: 'multiple-choice', prompt: '"Promaja" nedir?', promptEn: 'What is "Promaja"?', streetPrompt: 'Balkanlardaki en ölümcül şey?', answer: 'Cereyanda kalmak', answerEn: 'Draught (of air)', options: ['Vahşi bir hayvan', 'Cereyanda kalmak', 'Bir rakı türü', 'Kötü bir büyü'], optionsEn: ['A wild animal', 'Draught (of air)', 'A type of rakija', 'A bad spell'] },
          { id: 'sv2-q2', type: 'translate', prompt: '"Hastayım" cümlesini çevir', promptEn: 'Translate "I am sick"', streetPrompt: 'Kako kažeš da si bolestan?', answer: 'Bolestan sam', hint: 'bolestan = hasta', hintEn: 'bolestan = sick' },
          { id: 'sv2-q3', type: 'multiple-choice', prompt: '"Doktor" nasıl denir?', promptEn: 'How to say "Doctor"?', streetPrompt: 'Promaja çarpınca kimi ararsın?', answer: 'Doktor / Lekar', answerEn: 'Doktor / Lekar', options: ['Zubar', 'Doktor / Lekar', 'Majstor', 'Policija'], optionsEn: ['Zubar', 'Doktor / Lekar', 'Majstor', 'Policija'] },
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
        id: 'sport-1', title: 'Ebedi Derbi', titleEn: 'The Eternal Derby', streetTitle: 'Večiti Derbi', emoji: '🏟️', xpReward: 100,
        questions: [
          { id: 'sp1-q1', type: 'multiple-choice', prompt: '"Večiti Derbi" nedir?', promptEn: 'What is "Večiti Derbi"?', streetPrompt: 'Najveća utakmica u Srbiji?', answer: 'Ebedi Derbi (Kızılyıldız vs Partizan)', answerEn: 'Eternal Derby (Red Star vs Partizan)', options: ['Basketbol turnuvası', 'Ebedi Derbi (Kızılyıldız vs Partizan)', 'Ulusal kupa', 'Tenis maçı'], optionsEn: ['Basketball tournament', 'Eternal Derby (Red Star vs Partizan)', 'National cup', 'Tennis match'] },
          { id: 'sp1-q2', type: 'multiple-choice', prompt: '"Navijač" ne anlama gelir?', promptEn: 'What does "Navijač" mean?', streetPrompt: 'Ko ide na stadion?', answer: 'Taraftar', answerEn: 'Fan', options: ['Oyuncu', 'Hakem', 'Taraftar', 'Antrenör'], optionsEn: ['Player', 'Referee', 'Fan', 'Coach'] },
          { id: 'sp1-q3', type: 'translate', prompt: '"Stadyum" kelimesini çevir', promptEn: 'Translate the word "Stadium"', streetPrompt: 'Gde se igra fudbal?', answer: 'Stadion', hint: 'İngilizce ve Türkçeye çok benzer', hintEn: 'Very similar to English and Turkish' },
          { id: 'sp1-q4', type: 'multiple-choice', prompt: 'Biri "Sudija!" diye bağırırsa, kime bağırıyordur?', promptEn: 'If someone yells "Sudija!", who are they yelling at?', streetPrompt: 'Brate, ko je kriv za sve?', answer: 'Hakem', answerEn: 'Referee', options: ['Kaleciye', 'Antrenöre', 'Hakem', 'Santrafora'], optionsEn: ['Goalkeeper', 'Coach', 'Referee', 'Forward'] },
        ],
      },
      {
        id: 'sport-2', title: 'Spor Yapmak', titleEn: 'Doing Sports', streetTitle: 'Idemo na basket', emoji: '🏀', xpReward: 100,
        questions: [
          { id: 'sp2-q1', type: 'translate', prompt: '"Basketbol" kelimesini çevir', promptEn: 'Translate the word "Basketball"', streetPrompt: 'Jokićev sport!', answer: 'Košarka', hint: 'koš = pota/basket', hintEn: 'kosh = basket' },
          { id: 'sp2-q2', type: 'multiple-choice', prompt: '"Pobeda" ne anlama gelir?', promptEn: 'What does "Pobeda" mean?', streetPrompt: 'Šta želimo na kraju utakmice?', answer: 'Zafer / Galibiyet', answerEn: 'Victory / Win', options: ['Mağlubiyet', 'Beraberlik', 'Zafer / Galibiyet', 'Uzatma'], optionsEn: ['Defeat', 'Draw', 'Victory / Win', 'Overtime'] },
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
        id: 'rom-1', title: 'Tatlı İfadeler', titleEn: 'Sweet Expressions', streetTitle: 'Slatke Reči', emoji: '💋', xpReward: 100,
        questions: [
          { id: 'ro1-q1', type: 'multiple-choice', prompt: '"Dušo" ne anlama gelir?', promptEn: 'What does "Dušo" mean?', streetPrompt: 'Kako zoveš devojku/momka?', answer: 'Canım / Ruhum', answerEn: 'My Soul / Sweetheart', options: ['Arkadaşım', 'Canım / Ruhum', 'Patronum', 'Düşmanım'], optionsEn: ['My friend', 'My Soul / Sweetheart', 'My boss', 'My enemy'] },
          { id: 'ro1-q2', type: 'translate', prompt: '"Aşkım" kelimesini çevir', promptEn: 'Translate the word "My Love"', streetPrompt: 'Ljubav moja!', answer: 'Ljubavi', hint: 'ljubav kelimesinin seslenme hali', hintEn: 'Vocative form of the word ljubavl (love)' },
          { id: 'ro1-q3', type: 'multiple-choice', prompt: 'Birine "Zlato" diye seslenmek harfiyen ne anlama gelir?', promptEn: 'What does calling someone "Zlato" literally mean?', streetPrompt: 'Malo zlato moje?', answer: 'Altın', answerEn: 'Gold', options: ['Gümüş', 'Elmas', 'Altın', 'Para'], optionsEn: ['Silver', 'Diamond', 'Gold', 'Money'] },
        ],
      },
      {
        id: 'rom-2', title: 'Balkan Draması', titleEn: 'Balkan Drama', streetTitle: 'Gde si bio?!', emoji: '💔', xpReward: 100,
        questions: [
          { id: 'ro2-q1', type: 'multiple-choice', prompt: '"Neredeydin?" sorusu agresif bir şekilde nasıl sorulur?', promptEn: 'How to ask "Where were you?" aggressively?', streetPrompt: 'Problem in paradise! Ask where they were!', answer: 'Gde si bio?!', answerEn: 'Gde si bio?!', options: ['Šta radiš?!', 'Gde si bio?!', 'Ko si ti?!', 'Kada dolaziš?!'], optionsEn: ['Šta radiš?!', 'Gde si bio?!', 'Ko si ti?!', 'Kada dolaziš?!'] },
          { id: 'ro2-q2', type: 'translate', prompt: '"Kıskancım" cümlesini çevir', promptEn: 'Translate "I am jealous"', streetPrompt: 'Zašto gledaš nju? Translate "jealous"!', answer: 'Ljubomoran sam', hint: 'ljubomoran = kıskanç (erkek)', hintEn: 'ljubomoran = jealous (male)' },
          { id: 'ro2-q3', type: 'multiple-choice', prompt: '"Raskid" ne anlama gelir?', promptEn: 'What does "Raskid" mean?', streetPrompt: 'Kraj priče brate. Šta je "Raskid"?', answer: 'Ayrılık', answerEn: 'Breakup', options: ['Düğün', 'Ayrılık', 'İlk buluşma', 'Kavga'], optionsEn: ['Wedding', 'Breakup', 'First date', 'Fight'] },
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
        id: 'health-1', title: 'Vücut & Ağrı', titleEn: 'Body & Pain', streetTitle: 'Šta te boli?', emoji: '🤒', xpReward: 100,
        questions: [
          { id: 'hl1-q1', type: 'multiple-choice', prompt: '\"Başım ağrıyor\" nasıl denir?', promptEn: 'How to say "My head hurts"?', streetPrompt: 'Brate — başın mı patladı?', answer: 'Boli me glava', answerEn: 'Boli me glava', options: ['Boli me stomak', 'Boli me glava', 'Boli me zub', 'Boli me leđa'], optionsEn: ['Boli me stomak', 'Boli me glava', 'Boli me zub', 'Boli me leđa'] },
          { id: 'hl1-q2', type: 'translate', prompt: '\"Yardım edin!\" cümlesini çevir', promptEn: 'Translate "Help me!"', streetPrompt: 'Acil durum — hemen ne bağırırsın?', answer: 'Pomozite!', hint: 'pom-o-zi-te', hintEn: 'pom-o-zi-te' },
          { id: 'hl1-q3', type: 'multiple-choice', prompt: '\"Bolnica\" nedir?', promptEn: 'What is a "Bolnica"?', streetPrompt: 'Doktor nerede? \"Bolnica\" nedir?', answer: 'Hastane', answerEn: 'Hospital', options: ['Eczane', 'Klinik', 'Hastane', 'Ambulans'], optionsEn: ['Pharmacy', 'Clinic', 'Hospital', 'Ambulance'] },
          { id: 'hl1-q4', type: 'multiple-choice', prompt: '\"Ateşim var\" nasıl denir?', promptEn: 'How to say "I have a fever"?', streetPrompt: 'Pazi — ateşin yüksek, ne dersin?', answer: 'Imam temperaturu', answerEn: 'Imam temperaturu', options: ['Imam bol', 'Imam temperaturu', 'Imam grip', 'Imam alergiju'], optionsEn: ['Imam bol', 'Imam temperaturu', 'Imam grip', 'Imam alergiju'] },
          { id: 'hl1-q5', type: 'translate', prompt: '\"İlaç\" kelimesini çevir', promptEn: 'Translate the word "Medicine"', streetPrompt: 'Eczanede ne istersin?', answer: 'Lek', hint: 'tek hece, kolay!', hintEn: 'One syllable, easy!' },
          { id: 'hl1-q6', type: 'multiple-choice', prompt: '\"Ambulans çağırın!\" nasıl denir?', promptEn: 'How to say "Call an ambulance!"', streetPrompt: 'Kapiram acil — ne bağırırsın?', answer: 'Zovite hitnu pomoć!', answerEn: 'Zovite hitnu pomoć!', options: ['Zovite policiju!', 'Zovite vatrogasce!', 'Zovite hitnu pomoć!', 'Zovite taksija!'], optionsEn: ['Zovite policiju!', 'Zovite vatrogasce!', 'Zovite hitnu pomoć!', 'Zovite taksija!'] },
        ],
      },
      {
        id: 'health-2', title: 'Eczanede', titleEn: 'At the Pharmacy', streetTitle: 'U apoteci', emoji: '💊', xpReward: 100,
        questions: [
          { id: 'hl2-q1', type: 'multiple-choice', prompt: '\"Eczane\" nasıl denir?', promptEn: 'How to say "Pharmacy"?', streetPrompt: 'İlaç almak için nereye gidersin?', answer: 'Apoteka', answerEn: 'Apoteka', options: ['Bolnica', 'Apoteka', 'Klinika', 'Ambulanta'], optionsEn: ['Bolnica', 'Apoteka', 'Klinika', 'Ambulanta'] },
          { id: 'hl2-q2', type: 'translate', prompt: '\"Ağrı kesici var mı?\" cümlesini çevir', promptEn: 'Translate "Is there any painkiller?"', streetPrompt: 'Eczacıya ne sorarsın?', answer: 'Imate li analgetik?', hint: 'analgetik = ağrı kesici', hintEn: 'analgetik = painkiller' },
          { id: 'hl2-q3', type: 'multiple-choice', prompt: '\"Alerji\" kelimesi Sırpçada nedir?', promptEn: 'What is the word for "Allergy" in Serbian?', streetPrompt: 'Brate, alerji nedir Sırpçada?', answer: 'Alergija', answerEn: 'Alergija', options: ['Bolest', 'Alergija', 'Kašalj', 'Groznica'], optionsEn: ['Bolest', 'Alergija', 'Kašalj', 'Groznica'] },
          { id: 'hl2-q4', type: 'multiple-choice', prompt: 'Penisilini alerjini nasıl bildirirsin?', promptEn: 'How do you report your penicillin allergy?', streetPrompt: 'Doktora alerjini nasıl söylersin?', answer: 'Alergičan sam na penicilin', answerEn: 'Alergičan sam na penicilin', options: ['Volim penicilin', 'Uzimam penicilin', 'Alergičan sam na penicilin', 'Trebam penicilin'], optionsEn: ['Volim penicilin', 'Uzimam penicilin', 'Alergičan sam na penicilin', 'Trebam penicilin'] },
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
        id: 'belgrade-1', title: 'Semtler & Meydanlar', titleEn: 'Neighborhoods & Squares', streetTitle: 'Kvartovi i Trg', emoji: '🗺️', xpReward: 100,
        questions: [
          { id: 'bg1-q1', type: 'multiple-choice', prompt: '\"Centar\" ne anlama gelir?', promptEn: 'What does "Centar" mean?', streetPrompt: 'Brate — Centar nedir?', answer: 'Şehir merkezi', answerEn: 'City center', options: ['Park', 'Şehir merkezi', 'Köprü', 'Pazar'], optionsEn: ['Park', 'City center', 'Bridge', 'Market'] },
          { id: 'bg1-q2', type: 'translate', prompt: '\"Köprü\" kelimesini çevir', promptEn: 'Translate the word "Bridge"', streetPrompt: 'Sava üzerindeki yapı?', answer: 'Most', hint: 'most — kısa!', hintEn: 'most — short!' },
          { id: 'bg1-q3', type: 'multiple-choice', prompt: '\"Kalemegdan\" nedir?', promptEn: 'What is "Kalemegdan"?', streetPrompt: 'Belgradın kalbi nerede?', answer: 'Belgradın tarihi kalesi ve parkı', answerEn: "Belgrade's historic fortress and park", options: ['Bir alışveriş merkezi', 'Bir spor salonu', 'Belgradın tarihi kalesi ve parkı', 'Bir kafana'], optionsEn: ['A shopping mall', 'A gym', "Belgrade's historic fortress and park", 'A kafana'] },
          { id: 'bg1-q4', type: 'multiple-choice', prompt: '\"Trg\" ne anlama gelir?', promptEn: 'What does "Trg" mean?', streetPrompt: 'Pazi — Trg šta je?', answer: 'Meydan', answerEn: 'Square', options: ['Çarşı', 'Cadde', 'Meydan', 'Park'], optionsEn: ['Bazaar', 'Street', 'Square', 'Park'] },
          { id: 'bg1-q5', type: 'translate', prompt: '\"Nereye gidiyorsun?\" cümlesini çevir', promptEn: 'Translate "Where are you going?"', streetPrompt: 'Biri sana soruyor — ne diyorsun?', answer: 'Kuda ideš?', hint: 'kuda = nereye, ideš = gidiyorsun', hintEn: 'kuda = where, idesh = you are going' },
        ],
      },
      {
        id: 'belgrade-2', title: 'Nehirler & Plajlar', titleEn: 'Rivers & Beaches', streetTitle: 'Sava i Dunav', emoji: '🏖️', xpReward: 100,
        questions: [
          { id: 'bg2-q1', type: 'multiple-choice', prompt: 'Belgraddan geçen iki büyük nehir hangisidir?', promptEn: 'Which are the two main rivers passing through Belgrade?', streetPrompt: 'Brate — Belgrad hangi nehirlerin kavsaginda?', answer: 'Sava ve Dunav (Tuna)', answerEn: 'Sava and Danube', options: ['Morava ve Drina', 'Sava ve Dunav (Tuna)', 'Tisa ve Nišava', 'Kolubara ve Toplica'], optionsEn: ['Morava and Drina', 'Sava and Danube', 'Tisa and Nišava', 'Kolubara and Toplica'] },
          { id: 'bg2-q2', type: 'translate', prompt: '\"Nehir\" kelimesini çevir', promptEn: 'Translate the word "River"', streetPrompt: 'Sava i Dunav su...', answer: 'Reka', hint: 're-ka', hintEn: 're-ka' },
          { id: 'bg2-q3', type: 'multiple-choice', prompt: '\"Splavovi\" nedir?', promptEn: 'What are "Splavovi"?', streetPrompt: 'Yaz gelince herkes nereye gider kanka?', answer: 'Nehir üstü yüzen mekanlar (splavlar)', answerEn: 'Floating river clubs (splavs)', options: ['Spor kulüpleri', 'Nehir üstü yüzen mekanlar (splavlar)', 'Yazlık evler', 'Balık restoranları'], optionsEn: ['Sports clubs', 'Floating river clubs (splavs)', 'Summer houses', 'Fish restaurants'] },
          { id: 'bg2-q4', type: 'translate', prompt: '\"Ada\" kelimesini çevir', promptEn: 'Translate the word "Island"', streetPrompt: 'Ada Ciganlija — Ada ne demek?', answer: 'Ada', hint: 'Türkçe ile aynı: Ada', hintEn: 'Same as Turkish: Ada' },
          { id: 'bg2-q5', type: 'multiple-choice', prompt: '\"Plaj\" nasıl denir Sırpçada?', promptEn: 'How to say "Beach" in Serbian?', streetPrompt: 'Yaz sicaginda herkes nereye kosar?', answer: 'Plaža', answerEn: 'Plaža', options: ['Jezero', 'Plaža', 'More', 'Bazen'], optionsEn: ['Lake', 'Plaža', 'Sea', 'Pool'] },
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
        id: 'night-1', title: 'Gece Hazırlığı', titleEn: 'Night Prep', streetTitle: 'Šta večeras?', emoji: '🎉', xpReward: 100,
        questions: [
          { id: 'ni1-q1', type: 'multiple-choice', prompt: '\"Bu gece dışarı çıkıyoruz mu?\" nasıl denir?', promptEn: 'How to say "Are we going out tonight?"', streetPrompt: 'Brate — gece planı var mı?', answer: 'Idemo večeras van?', options: ['Spavamo večeras?', 'Idemo večeras van?', 'Jedemo večeras?', 'Radimo večeras?'] },
          { id: 'ni1-q2', type: 'translate', prompt: '\"Hazır mısın?\" cümlesini çevir', promptEn: 'Translate "Are you ready?"', streetPrompt: 'Arkadasini acele ettir!', answer: 'Jesi li spreman?', hint: 'spreman = hazır (erkek)', hintEn: 'spreman = ready (male)' },
          { id: 'ni1-q3', type: 'multiple-choice', prompt: '\"Kuda idemo?\" ne anlama gelir?', promptEn: 'What does "Kuda idemo?" mean?', streetPrompt: 'Pazi — Kuda idemo?', answer: 'Nereye gidiyoruz?', answerEn: 'Where are we going?', options: ['Ne zaman gidiyoruz?', 'Nasıl gidiyoruz?', 'Nereye gidiyoruz?', 'Neden gidiyoruz?'], optionsEn: ['When are we going?', 'How are we going?', 'Where are we going?', 'Why are we going?'] },
          { id: 'ni1-q4', type: 'translate', prompt: '\"Taksi çağırıyorum\" cümlesini çevir', promptEn: 'Translate "I am calling a taxi"', streetPrompt: 'Zovem...', answer: 'Zovem taksi', hint: 'zovem = çağırıyorum', hintEn: 'zovem = I am calling' },
          { id: 'ni1-q5', type: 'multiple-choice', prompt: '\"Rezervasyon yaptın mı?\" nasıl denir?', promptEn: 'How to say "Did you make a reservation?"', streetPrompt: 'Kafana doluysa ne derler sana?', answer: 'Da li si rezervisao?', answerEn: 'Da li si rezervisao?', options: ['Da li si došao?', 'Da li si rezervisao?', 'Da li si platio?', 'Da li si pojeo?'], optionsEn: ['Da li si došao?', 'Da li si rezervisao?', 'Da li si platio?', 'Da li si pojeo?'] },
        ],
      },
      {
        id: 'night-2', title: 'Kafana & Splav', titleEn: 'Kafana & Splav', streetTitle: 'Na Splavu!', emoji: '🥂', xpReward: 100,
        questions: [
          { id: 'ni2-q1', type: 'multiple-choice', prompt: '\"Gürültü çok fazla\" nasıl söylersin?', promptEn: 'How to say "It\'s too loud"?', streetPrompt: 'Kulağın patladı mı kanka?', answer: 'Previše je buka', answerEn: 'Previše je buka', options: ['Puno je muzike', 'Previše je buka', 'Nema zvuka', 'Tiho je'], optionsEn: ['Puno je muzike', 'Previše je buka', 'Nema zvuka', 'Tiho je'] },
          { id: 'ni2-q2', type: 'translate', prompt: '\"Bir tur daha!\" cümlesini çevir', promptEn: 'Translate "One more round!"', streetPrompt: 'Üçüncü tur geldi...', answer: 'Još jedna runda!', hint: 'još = daha, runda = tur', hintEn: 'jos = more, runda = round' },
          { id: 'ni2-q3', type: 'multiple-choice', prompt: '\"Masa ayrılmış\" nasıl denir?', promptEn: 'How to say "The table is reserved"?', streetPrompt: 'Garson sana ne der?', answer: 'Sto je rezervisan', answerEn: 'Sto je rezervisan', options: ['Sto je slobodan', 'Sto je rezervisan', 'Sto je zauzet', 'Sto je zatvoren'], optionsEn: ['Sto je slobodan', 'Sto je rezervisan', 'Sto je zauzet', 'Sto je zatvoren'] },
          { id: 'ni2-q4', type: 'translate', prompt: '\"Dans pistine gidelim!\" cümlesini çevir', promptEn: 'Translate "Let\'s go to the dance floor!"', streetPrompt: 'Müzik başladı!', answer: 'Ajde na podijum!', hint: 'ajde = hadi, podijum = dans pisti', hintEn: 'ajde = come on, podijum = dance floor' },
          { id: 'ni2-q5', type: 'multiple-choice', prompt: '\"Eve gitmek istiyorum\" nasıl dersin?', promptEn: 'How to say "I want to go home"?', streetPrompt: 'Artık bitti — eve dönüş!', answer: 'Hoću kući', answerEn: 'Hoću kući', options: ['Ostaje kući', 'Idi kući', 'Hoću kući', 'Idem napolje'], optionsEn: ['Ostaje kući', 'Idi kući', 'Hoću kući', 'Idem napolje'] },
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
        id: 'grammar-1', title: 'Geçmiş Zaman', titleEn: 'Past Tense', streetTitle: 'Šta si radio juče?', emoji: '⏪', xpReward: 100,
        questions: [
          { id: 'gr1-q1', type: 'multiple-choice', prompt: '\"Dün gittim\" nasıl denir?', promptEn: 'How to say "I went yesterday"?', streetPrompt: 'Pazi — geçmiş zamana dikkat!', answer: 'Išao sam juče', answerEn: 'Išao sam juče', options: ['Idem juče', 'Išao sam juče', 'Idi juče', 'Ću ići juče'], optionsEn: ['Idem juče', 'Išao sam juče', 'Idi juče', 'Ću ići juče'] },
          { id: 'gr1-q2', type: 'translate', prompt: '\"Dün ne yaptın?\" cümlesini çevir', promptEn: 'Translate "What did you do yesterday?"', streetPrompt: 'Kapiram — dünü sor bakalım.', answer: 'Šta si radio juče?', hint: 'radio si = yaptın (geçmiş/erkek)', hintEn: 'radio si = you did (past/male)' },
          { id: 'gr1-q3', type: 'multiple-choice', prompt: '\"Radio sam\" ne anlama gelir?', promptEn: 'What does "Radio sam" mean?', streetPrompt: 'Brate — Radio sam nedir?', answer: 'Yaptım (erkek)', answerEn: 'I did (male)', options: ['Yapıyorum', 'Yapacağım', 'Yaptım (erkek)', 'Yapardım'], optionsEn: ['I am doing', 'I will do', 'I did (male)', 'I used to do'] },
          { id: 'gr1-q4', type: 'multiple-choice', prompt: '\"Spavala sam\" kimin için kullanılır?', promptEn: 'Who is "Spavala sam" for?', streetPrompt: 'Brate — Spavala sam kim söyler?', answer: 'Kadın konuşmacı (uyudum)', answerEn: 'Female speaker (I slept)', options: ['Erkek komşu', 'Kadın konuşmacı (uyudum)', 'Çoğul (uyudular)', 'Hepsi'], optionsEn: ['Male neighbor', 'Female speaker (I slept)', 'Plural (they slept)', 'All'] },
          { id: 'gr1-q5', type: 'translate', prompt: '\"Dün akşam kafanaya gittik\" cümlesini çevir', promptEn: 'Translate "Last night we went to the kafana"', streetPrompt: 'Geçen gece ne yaptınız?', answer: 'Išli smo juče u kafanu', hint: 'išli smo = gittik (çoğul)', hintEn: 'ishli smo = we went (plural)' },
          { id: 'gr1-q6', type: 'multiple-choice', prompt: '\"Jesam li\" ne için kullanılır?', promptEn: 'What is "Jesam li" used for?', streetPrompt: 'Kapiram — Jesam li nasıl bir yapıdır?', answer: 'Soru sorma (Ben mi...?)', answerEn: 'Asking a question (Am I...?)', options: ['Olumsuz cümle', 'Emir kipi', 'Soru sorma (Ben mi...?)', 'Gelecek zaman'], optionsEn: ['Negative sentence', 'Imperative mood', 'Asking a question (Am I...?)', 'Future tense'] },
        ],
      },
      {
        id: 'grammar-2', title: 'Gelecek Zaman', titleEn: 'Future Tense', streetTitle: 'Šta ces da kazes?', emoji: '🗣️', xpReward: 100,
        questions: [
          { id: 'gr2-q1', type: 'multiple-choice', prompt: 'Gelecek zaman için hangi yardımcı fiil kullanılır?', promptEn: 'Which auxiliary verb is used for the future tense?', streetPrompt: 'Brate — yarın bir şey yapacaksan nasıl söylersin?', answer: 'Cu yardimci fiili', answerEn: 'Cu auxiliary verb', options: ['Sam', 'Jest', 'Cu yardimci fiili', 'Bi'], optionsEn: ['Sam', 'Jest', 'Cu auxiliary verb', 'Bi'] },
          { id: 'gr2-q2', type: 'translate', prompt: '\"Yarın gelirim\" cümlesini çevir', promptEn: 'Translate "I will come tomorrow"', streetPrompt: 'Söz ver birine — yarın geleceğini söyle!', answer: 'Doći ću sutra', hint: 'doći = gelmek, sutra = yarın', hintEn: 'doci = to come, sutra = tomorrow' },
          { id: 'gr2-q3', type: 'multiple-choice', prompt: '\"Ne bih hteo\" ne anlama gelir?', promptEn: 'What does "Ne bih hteo" mean?', streetPrompt: 'Kibar reddetme — Ne bih hteo?', answer: 'İstemezdim', answerEn: 'I would not want', options: ['Kesinlikle istiyorum', 'Belki', 'İstemezdim', 'Bilmiyorum'], optionsEn: ['I definitely want', 'Maybe', 'I would not want', "I don't know"] },
          { id: 'gr2-q4', type: 'translate', prompt: '\"Sence ne yapmalıyım?\" cümlesini çevir', promptEn: 'Translate "What do you think I should do?"', streetPrompt: 'Kafana Dayısına ne sorarsın?', answer: 'Šta misliš da treba da uradim?', hint: 'šta misliš = ne düşünüyorsun', hintEn: 'shta mislish = what do you think' },
          { id: 'gr2-q5', type: 'multiple-choice', prompt: '\"Mogu da\" ne anlama gelir?', promptEn: 'What does "Mogu da" mean?', streetPrompt: 'Pazi — bir şeyi yapabildiğini nasıl söylersin?', answer: 'Yapabilirim', answerEn: 'I can / I am able to', options: ['Yapmak istiyorum', 'Yapabilirim', 'Yapmam lazım', 'Yapacağım'], optionsEn: ['I want to do', 'I can / I am able to', 'I need to do', 'I will do'] },
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
        id: 'comm-1', title: 'Telefon Görüşmesi', titleEn: 'Phone Call', streetTitle: 'Alo, ko je?', emoji: '📞', xpReward: 100,
        questions: [
          { id: 'cm1-q1', type: 'multiple-choice', prompt: 'Telefona cevap verirken ne dersin?', promptEn: 'What do you say when answering the phone?', streetPrompt: 'Ring ring — telefon çalıyor!', answer: 'Alo!', answerEn: 'Alo!', options: ['Zdravo!', 'Alo!', 'Hej!', 'Dobro!'], optionsEn: ['Zdravo!', 'Alo!', 'Hej!', 'Dobro!'] },
          { id: 'cm1-q2', type: 'translate', prompt: '\"Şu an konuşamam\" cümlesini çevir', promptEn: 'Translate "I can\'t talk right now"', streetPrompt: 'Meşgulsün — ne dersin?', answer: 'Ne mogu sada da pričam', hint: 'ne mogu = yapamam, sada = şimdi', hintEn: 'ne mogu = I can\'t, sada = now' },
          { id: 'cm1-q3', type: 'multiple-choice', prompt: '\"Duyamıyorum seni\" nasıl denir?', promptEn: 'How to say "I can\'t hear you"?', streetPrompt: 'Hat kötü — ne dersin?', answer: 'Ne čujem te', answerEn: 'Ne čujem te', options: ['Ne vidim te', 'Ne čujem te', 'Ne razumem te', 'Ne slušam te'], optionsEn: ['Ne vidim te', 'Ne čujem te', 'Ne razumem te', 'Ne slušam te'] },
          { id: 'cm1-q4', type: 'translate', prompt: '\"Mesaj atacağım\" cümlesini çevir', promptEn: 'Translate "I will send a message"', streetPrompt: 'Kapiram — yazarım sana?', answer: 'Pisaću ti poruku', hint: 'pisaću = yazacağım, poruku = mesaj', hintEn: 'pisacu = I will write, poruku = message' },
          { id: 'cm1-q5', type: 'multiple-choice', prompt: '\"Geri arar mısın?\" nasıl denir?', promptEn: 'How to say "Can you call back?"', streetPrompt: 'Brate — geri aranmasını istiyorsun!', answer: 'Možeš li da me pozivaš?', answerEn: 'Možeš li da me pozivaš?', options: ['Zovi me!', 'Možeš li da me pozivaš?', 'Pošalji mi poruku!', 'Dođi kod mene!'], optionsEn: ['Zovi me!', 'Možeš li da me pozivaš?', 'Pošalji mi poruku!', 'Dođi kod mene!'] },
        ],
      },
      {
        id: 'comm-2', title: 'Sosyal Medya & Mesaj', titleEn: 'Social Media & Message', streetTitle: 'DM i Stories', emoji: '💬', xpReward: 100,
        questions: [
          { id: 'cm2-q1', type: 'multiple-choice', prompt: '\"Mesaj attım\" nasıl denir?', promptEn: 'How to say "I sent a message"?', streetPrompt: 'DM gonderdim — nasıl söylersin?', answer: 'Poslao sam poruku', answerEn: 'Poslao sam poruku', options: ['Primio sam poruku', 'Poslao sam poruku', 'Čitao sam poruku', 'Obrisao sam poruku'], optionsEn: ['Primio sam poruku', 'Poslao sam poruku', 'Čitao sam poruku', 'Obrisao sam poruku'] },
          { id: 'cm2-q2', type: 'translate', prompt: '\"Konumunu gönder\" cümlesini çevir', promptEn: 'Translate "Send your location"', streetPrompt: 'Nerede olduğunu bilmem lazım!', answer: 'Pošalji mi lokaciju', hint: 'pošalji = gönder, lokaciju = konumu', hintEn: 'poshalji = send, lokaciju = location' },
          { id: 'cm2-q3', type: 'multiple-choice', prompt: '\"Grupta yazıyorum\" nasıl denir?', promptEn: 'How to say "I am writing in the group"?', streetPrompt: 'Gruba mesaj atıyorsun — ne dersin?', answer: 'Pišem u grupi', answerEn: 'Pišem u grupi', options: ['Čitam grupu', 'Pišem u grupi', 'Napustio sam grupu', 'Kreiram grupu'], optionsEn: ['Čitam grupu', 'Pišem u grupi', 'Napustio sam grupu', 'Kreiram grupu'] },
          { id: 'cm2-q4', type: 'translate', prompt: '\"Fotoğraf gönder\" diye nasıl söylersin?', promptEn: 'How to say "Send a photo"?', streetPrompt: 'Kapiram — fotoğraf iste!', answer: 'Pošalji mi sliku', hint: 'slika = fotoğraf', hintEn: 'slika = picture/photo' },
          { id: 'cm2-q5', type: 'multiple-choice', prompt: '\"Sessize aldım\" nasıl denir?', promptEn: 'How to say "I muted (it)"?', streetPrompt: 'O bildirimler çok fazla — ne yaptın?', answer: 'Isključio sam obaveštenja', answerEn: 'Isključio sam obaveštenja', options: ['Obrisao sam kontakt', 'Blokirao sam ga', 'Isključio sam obaveštenja', 'Zatvorio sam aplikaciju'], optionsEn: ['Obrisao sam kontakt', 'Blokirao sam ga', 'Isključio sam obaveštenja', 'Zatvorio sam aplikaciju'] },
        ],
      },
    ],
  },


  // ─── KÜFÜRLER & ARGO (PRO) ────────────────────────────────────────────────
  {
    id: 'swearing', title: 'Küfürler & Argo', titleEn: 'Swearing & Slang',
    streetTitle: 'Pravi Beogradski Rečnik 💀',
    description: 'Gerçek Sırpça küfürler ve sokak argosu. Yalnızca yetişkinlere.',
    descriptionEn: 'Real Serbian swear words and street slang. Adults only.',
    streetDescription: 'Bez cenzure — pravi jezik ulice.',
    emoji: '🤬', color: '#8e44ad',
    isPro: true,
    lessons: [
      {
        id: 'swear-1', title: 'Hafif Argo', titleEn: 'Mild Slang', streetTitle: 'Lagan početak', emoji: '😤', xpReward: 100,
        questions: [
          { id: 'sw1-q1', type: 'multiple-choice', prompt: '"Jebiga" ne anlama gelir?', promptEn: 'What does "Jebiga" mean?', streetPrompt: 'Brate — "Jebiga" ne demek?', answer: 'Ne yaparsın, oldu işte / Lanet olsun', answerEn: 'What can you do / Damn it', options: ['Merhaba!', 'Ne yaparsın, oldu işte / Lanet olsun', 'Görüşürüz', 'Tamam anlaştık'], optionsEn: ['Hello!', 'What can you do / Damn it', 'See you', 'Deal'] },
          { id: 'sw1-q2', type: 'multiple-choice', prompt: '"Majmune!" kime denir?', promptEn: 'Who do you call "Majmune!"?', streetPrompt: 'Biri aptalca bir şey yaptı — ne dersin?', answer: 'Aptal / Maymun (hakaret)', answerEn: 'Idiot / Monkey (insult)', options: ['Arkadaşa övgü', 'Aptal / Maymun (hakaret)', 'Sevgiliye', 'Patrona'], optionsEn: ['Praise to a friend', 'Idiot / Monkey (insult)', 'To a lover', 'To the boss'] },
          { id: 'sw1-q3', type: 'translate', prompt: '"Çık git!" anlamına gelen argo sözcük nedir?', promptEn: 'What is the slang word meaning "Get lost!"?', streetPrompt: 'Birini kovmak istiyorsun — ne dersin?', answer: 'Odjebi', hint: 'od + jebi', hintEn: 'od + jebi' },
          { id: 'sw1-q4', type: 'multiple-choice', prompt: '"Glupost" ne anlama gelir?', promptEn: 'What does "Glupost" mean?', streetPrompt: 'Pazi — "Glupost" nedir?', answer: 'Aptallık / Saçmalık', answerEn: 'Stupidity / Nonsense', options: ['Zeka', 'Aptallık / Saçmalık', 'Macera', 'Haber'], optionsEn: ['Intelligence', 'Stupidity / Nonsense', 'Adventure', 'News'] },
          { id: 'sw1-q5', type: 'translate', prompt: '"Sikter!" Türkçede ne demek, Sırpçada nasıl denir?', promptEn: 'How do you say "Get lost!" (strong) in Serbian?', streetPrompt: 'En güçlü "defol" nasıl?', answer: 'Jebem ti mater', hint: 'En ağır karşılık', hintEn: 'The strongest equivalent' },
          { id: 'sw1-q6', type: 'multiple-choice', prompt: '"Bre!" hangi durumda kullanılır?', promptEn: 'When is "Bre!" used?', streetPrompt: 'Kapiram — "Bre!" ne zaman dersin?', answer: 'Dikkat çekmek veya vurgu için', answerEn: 'To get attention or for emphasis', options: ['Teşekkür için', 'Dikkat çekmek veya vurgu için', 'Özür dilemek için', 'Yön sormak için'], optionsEn: ['To thank', 'To get attention or for emphasis', 'To apologize', 'To ask directions'] },
        ],
      },
      {
        id: 'swear-2', title: 'Orta Ağırlık', titleEn: 'Medium Weight', streetTitle: 'Srednji nivo, brate', emoji: '🤬', xpReward: 100,
        questions: [
          { id: 'sw2-q1', type: 'multiple-choice', prompt: '"Kurac!" hangi anlamda kullanılır?', promptEn: 'What does "Kurac!" express?', streetPrompt: 'Hayal kırıklığı veya red için ne dersin?', answer: 'Hayır! / Sıfır! / Hiç! (güçlü ret)', answerEn: 'No way! / Nothing! (strong refusal)', options: ['Evet tabii', 'Hayır! / Sıfır! / Hiç! (güçlü ret)', 'Belki', 'Hemen geliyorum'], optionsEn: ['Of course yes', 'No way! / Nothing! (strong refusal)', 'Maybe', 'Coming right away'] },
          { id: 'sw2-q2', type: 'translate', prompt: '"Glupo govno" kelimesini Türkçeye çevir', promptEn: 'Translate "Glupo govno"', streetPrompt: 'Biri seni çok sinirletti — ne dersin?', answer: 'Aptal pislik / Salak herif', answerEn: 'Stupid piece of crap', hint: 'glupo = aptal, govno = pislik', hintEn: 'glupo = stupid, govno = crap' },
          { id: 'sw2-q3', type: 'multiple-choice', prompt: '"Pička materina!" en yakın Türkçe karşılığı hangisi?', promptEn: 'What is the closest meaning of "Pička materina!"?', streetPrompt: 'En ağır Sırpça küfür — ne demek?', answer: 'Çok ağır bir hakaret (anaya dair)', answerEn: 'Very heavy insult (mother-related)', options: ['Bravo!', 'Çok ağır bir hakaret (anaya dair)', 'Günaydın', 'Şerefe!'], optionsEn: ['Bravo!', 'Very heavy insult (mother-related)', 'Good morning', 'Cheers!'] },
          { id: 'sw2-q4', type: 'translate', prompt: '"İşe yaramaz biri" demek için ne kullanırsın?', promptEn: 'What word means "useless person" in street Serbian?', streetPrompt: 'Bekar adam hiçbir şey yapamıyor — ne dersin?', answer: 'Besposličar', hint: 'bes + posao = işsiz', hintEn: 'bes + posao = without work' },
          { id: 'sw2-q5', type: 'multiple-choice', prompt: '"Šupak" ne anlama gelir?', promptEn: 'What does "Šupak" mean?', streetPrompt: 'Biri seni ihanete uğrattı — ne dersin?', answer: 'Kaltak / İbne (hakaret)', answerEn: 'Asshole (insult)', options: ['Kahraman', 'Kaltak / İbne (hakaret)', 'Çok akıllı', 'Güzel adam'], optionsEn: ['Hero', 'Asshole (insult)', 'Very smart', 'Handsome man'] },
          { id: 'sw2-q6', type: 'multiple-choice', prompt: '"Nabijem te na kurac" ne anlama gelir (kontekst)?', promptEn: 'What does "Nabijem te na kurac" express?', streetPrompt: 'Kafanaya girdik — en ağır tehdit?', answer: 'Çok ağır tehdit / hakaret', answerEn: 'Very heavy threat / insult', options: ['Seni seviyorum', 'Çok ağır tehdit / hakaret', 'İyi geceler', 'Teşekkürler'], optionsEn: ['I love you', 'Very heavy threat / insult', 'Good night', 'Thank you'] },
        ],
      },
      {
        id: 'swear-3', title: 'Sokak Dili', titleEn: 'Street Talk', streetTitle: 'Čist ulični jezik', emoji: '🗣️', xpReward: 100,
        questions: [
          { id: 'sw3-q1', type: 'multiple-choice', prompt: '"Lud si!" ne anlama gelir?', promptEn: 'What does "Lud si!" mean?', streetPrompt: 'Biri çıldırmış gibi davranıyor — ne dersin?', answer: 'Deli misin! / Çıldırdın!', answerEn: 'Are you crazy! / You are nuts!', options: ['Ne kadar akıllısın!', 'Deli misin! / Çıldırdın!', 'Çok güzel!', 'Yavaşla!'], optionsEn: ['How smart you are!', 'Are you crazy! / You are nuts!', 'So beautiful!', 'Slow down!'] },
          { id: 'sw3-q2', type: 'translate', prompt: '"Marš!" ne anlama gelir ve ne zaman kullanılır?', promptEn: 'What does "Marš!" mean and when is it used?', streetPrompt: 'Birisini çok sert bir şekilde kovmak?', answer: 'Defol! / Çekil karşımdan!', answerEn: 'Get lost! / Get out of my sight!', hint: 'Alman askeri komutundan gelir', hintEn: 'From German military command' },
          { id: 'sw3-q3', type: 'multiple-choice', prompt: '"Fukara" kelimesi Sırpçada ne anlama gelir?', promptEn: 'What does "Fukara" mean in Serbian?', streetPrompt: 'Düşkün biri için ne dersin?', answer: 'Fakir / Sefil / Zavallı', answerEn: 'Poor / Wretched / Pitiful', options: ['Zengin', 'Fakir / Sefil / Zavallı', 'Güçlü', 'Mutlu'], optionsEn: ['Rich', 'Poor / Wretched / Pitiful', 'Strong', 'Happy'] },
          { id: 'sw3-q4', type: 'multiple-choice', prompt: '"Seljak!" kime denir?', promptEn: 'Who do you call "Seljak!"?', streetPrompt: 'Kaba davranan biri geldi — ne dersin?', answer: 'Görgüsüz / Kıro (hakaret)', answerEn: 'Redneck / Peasant (insult)', options: ['Şehirli sofistike biri', 'Görgüsüz / Kıro (hakaret)', 'Çok zeki biri', 'Başarılı işadamı'], optionsEn: ['Sophisticated city person', 'Redneck / Peasant (insult)', 'Very smart person', 'Successful businessman'] },
          { id: 'sw3-q5', type: 'translate', prompt: 'Birini "tam bir salak" olarak tanımlamak için ne dersin?', promptEn: 'How do you call someone "a complete idiot" in Serbian slang?', streetPrompt: 'En ağır "aptal" hakareti?', answer: 'Kreten', hint: 'Fransızcadan geçmiş', hintEn: 'Borrowed from French' },
          { id: 'sw3-q6', type: 'multiple-choice', prompt: '"Pare ili život!" ne anlama gelir?', promptEn: 'What does "Pare ili život!" mean?', streetPrompt: 'Film sahnesi — haydut ne diyor?', answer: 'Para ya da can! (tehdit)', answerEn: 'Money or your life! (threat)', options: ['Para ver hayat kazan (yarışma)', 'Para ya da can! (tehdit)', 'Para önemli değil', 'Hayat güzel'], optionsEn: ['Give money win life (game show)', 'Money or your life! (threat)', 'Money does not matter', 'Life is beautiful'] },
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

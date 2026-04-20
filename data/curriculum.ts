export type QuestionType = 'multiple-choice' | 'translate' | 'fill-blank';

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  streetPrompt?: string;
  answer: string;
  options?: string[];
  hint?: string;
}

export interface Lesson {
  id: string;
  title: string;
  streetTitle: string;
  emoji: string;
  xpReward: number;
  questions: Question[];
}

export interface LessonSet {
  id: string;
  title: string;
  streetTitle: string;
  description: string;
  streetDescription: string;
  emoji: string;
  color: string;
  isPro?: boolean;
  lessons: Lesson[];
}

export const curriculum: LessonSet[] = [
  // ─── GREETINGS ────────────────────────────────────────────────────────────
  {
    id: 'greetings', title: 'Greetings', streetTitle: 'Šta ima, brate?',
    description: 'Learn how to say hello and introduce yourself',
    streetDescription: "Nauči kako da se obijaviš k'o pravi Beograđanin",
    emoji: '👋', color: '#c0392b',
    lessons: [
      {
        id: 'greetings-1', title: 'Basic Hellos', streetTitle: 'Zdravo i šta ima', emoji: '👋', xpReward: 20,
        questions: [
          { id: 'g1-q1', type: 'multiple-choice', prompt: 'How do you say "Hello" in Serbian?', streetPrompt: 'Brate, how do you say "Hello"?', answer: 'Zdravo', options: ['Zdravo','Doviđenja','Hvala','Molim'] },
          { id: 'g1-q2', type: 'translate', prompt: 'Translate "Good morning"', streetPrompt: 'Vopi, translate "Good morning"!', answer: 'Dobro jutro', hint: 'dobro = good, jutro = morning' },
          { id: 'g1-q3', type: 'multiple-choice', prompt: 'What does "Kako si?" mean?', streetPrompt: 'Pazi, what does "Kako si?" mean?', answer: 'How are you?', options: ['What is your name?','How are you?','Where are you from?','Goodbye'] },
          { id: 'g1-q4', type: 'multiple-choice', prompt: 'How do you say "Goodbye"?', streetPrompt: 'Later brate — how do you say "Goodbye"?', answer: 'Doviđenja', options: ['Zdravo','Doviđenja','Hvala','Izvinite'] },
          { id: 'g1-q5', type: 'translate', prompt: 'Translate "Good evening"', streetPrompt: 'Kapiram — how do you greet someone at night?', answer: 'Dobro veče', hint: 'veče = evening' },
          { id: 'g1-q6', type: 'multiple-choice', prompt: 'What does "Laku noć" mean?', streetPrompt: 'Pazi, šta znači "Laku noć"?', answer: 'Good night', options: ['Good morning','Good evening','Good night','Sleep well'] },
        ],
      },
      {
        id: 'greetings-2', title: 'Introductions', streetTitle: 'Ko si ti, majstore?', emoji: '🤝', xpReward: 25,
        questions: [
          { id: 'g2-q1', type: 'multiple-choice', prompt: 'How do you say "My name is…"?', streetPrompt: 'Bre, how do you tell someone your name?', answer: 'Zovem se…', options: ['Imam se…','Zovem se…','Ja sam…','Moje je…'] },
          { id: 'g2-q2', type: 'translate', prompt: 'Translate "Nice to meet you"', streetPrompt: 'Kapiram — translate "Nice to meet you"', answer: 'Drago mi je', hint: 'drago = nice/glad' },
          { id: 'g2-q3', type: 'multiple-choice', prompt: 'What does "Odakle si?" mean?', streetPrompt: 'Pazi, what does "Odakle si?" mean?', answer: 'Where are you from?', options: ['How old are you?','What do you do?','Where are you from?','Do you speak Serbian?'] },
          { id: 'g2-q4', type: 'translate', prompt: 'Translate "How old are you?"', streetPrompt: 'Brate, how do you ask someone\'s age?', answer: 'Koliko imaš godina?', hint: 'Koliko = how many, godina = years' },
          { id: 'g2-q5', type: 'multiple-choice', prompt: 'How do you say "I am from England"?', streetPrompt: 'Bre, how do you say where you\'re from?', answer: 'Ja sam iz Engleske', options: ['Ja idem u Englesku','Ja sam iz Engleske','Volim Englesku','Bio sam u Engleskoj'] },
        ],
      },
      {
        id: 'greetings-3', title: 'Polite Phrases', streetTitle: 'Kad treba biti fin', emoji: '🎩', xpReward: 25,
        questions: [
          { id: 'g3-q1', type: 'multiple-choice', prompt: 'How do you say "Please"?', streetPrompt: 'Brate, how do you say "please" properly?', answer: 'Molim', options: ['Hvala','Molim','Izvinite','Nema na čemu'] },
          { id: 'g3-q2', type: 'multiple-choice', prompt: 'What does "Hvala" mean?', streetPrompt: 'Pazi — šta znači "Hvala"?', answer: 'Thank you', options: ['Sorry','Please','Thank you','Hello'] },
          { id: 'g3-q3', type: 'translate', prompt: 'Translate "Excuse me"', streetPrompt: 'How do you get someone\'s attention politely?', answer: 'Izvinite', hint: 'formal version of "excuse me"' },
          { id: 'g3-q4', type: 'multiple-choice', prompt: 'What does "Nema na čemu" mean?', streetPrompt: 'Someone says "hvala" — what do you reply?', answer: "You're welcome", options: ["You're welcome",'No problem','Never mind','Goodbye'] },
          { id: 'g3-q5', type: 'multiple-choice', prompt: 'How do you say "I\'m sorry"?', streetPrompt: 'Bre, how do you apologise in Serbian?', answer: 'Žao mi je', options: ['Hvala','Molim','Žao mi je','Izvinite'] },
          { id: 'g3-q6', type: 'translate', prompt: 'Translate "No problem"', streetPrompt: 'Kapiram — what do you say when it\'s all fine?', answer: 'Nema problema', hint: 'nema = there is no' },
        ],
      },
    ],
  },

  // ─── NUMBERS ──────────────────────────────────────────────────────────────
  {
    id: 'numbers', title: 'Numbers', streetTitle: 'Pare i Brojevi',
    description: 'Count like a native, handle money and time',
    streetDescription: 'Nauči da brojiš — bez toga nema šale',
    emoji: '🔢', color: '#003da5',
    lessons: [
      {
        id: 'numbers-1', title: 'Numbers 1–10', streetTitle: '1 do 10, brate', emoji: '🔢', xpReward: 20,
        questions: [
          { id: 'n1-q1', type: 'multiple-choice', prompt: 'How do you say "5" in Serbian?', streetPrompt: 'Vopi, how do you say "5"?', answer: 'Pet', options: ['Četiri','Pet','Šest','Sedam'] },
          { id: 'n1-q2', type: 'multiple-choice', prompt: 'What number is "Tri"?', streetPrompt: 'Kapiram, what number is "Tri"?', answer: '3', options: ['2','3','13','30'] },
          { id: 'n1-q3', type: 'translate', prompt: 'Translate "10" to Serbian', streetPrompt: 'Pazi — ten in Serbian?', answer: 'Deset', hint: 'de-set' },
          { id: 'n1-q4', type: 'multiple-choice', prompt: 'What does "Jedan" mean?', streetPrompt: 'Bre, what is "Jedan"?', answer: '1', options: ['1','7','11','100'] },
          { id: 'n1-q5', type: 'multiple-choice', prompt: 'How do you say "8"?', streetPrompt: 'Quick — how do you say "8", brate?', answer: 'Osam', options: ['Sedam','Osam','Devet','Šest'] },
          { id: 'n1-q6', type: 'translate', prompt: 'Translate "2" to Serbian', streetPrompt: 'Two in Serbian — lako brate!', answer: 'Dva', hint: 'short word' },
          { id: 'n1-q7', type: 'multiple-choice', prompt: 'What does "Devet" mean?', streetPrompt: 'Pazi — "Devet" is which number?', answer: '9', options: ['6','7','8','9'] },
        ],
      },
      {
        id: 'numbers-2', title: 'Numbers 11–100', streetTitle: 'Veći brojevi, veće pare', emoji: '💰', xpReward: 30,
        questions: [
          { id: 'n2-q1', type: 'multiple-choice', prompt: 'How do you say "20" in Serbian?', streetPrompt: 'Brate, how do you say "20"?', answer: 'Dvadeset', options: ['Deset','Dvadeset','Trideset','Dvesta'] },
          { id: 'n2-q2', type: 'translate', prompt: 'Translate "100" to Serbian', streetPrompt: 'One hundred — u srpskom?', answer: 'Sto', hint: 'very short!' },
          { id: 'n2-q3', type: 'multiple-choice', prompt: 'What is "Pedeset"?', streetPrompt: 'Kapiram — "Pedeset" is which number?', answer: '50', options: ['15','50','500','5000'] },
          { id: 'n2-q4', type: 'multiple-choice', prompt: 'How do you say "11"?', streetPrompt: 'Pazi — eleven in Serbian?', answer: 'Jedanaest', options: ['Jedanaest','Dvanaest','Trinaest','Četrnaest'] },
          { id: 'n2-q5', type: 'translate', prompt: 'Translate "30" to Serbian', streetPrompt: 'Thirty — kaži na srpskom!', answer: 'Trideset', hint: 'tri = three' },
          { id: 'n2-q6', type: 'multiple-choice', prompt: 'What does "Hiljada" mean?', streetPrompt: 'Brate — "Hiljada" — koliko je to?', answer: '1000', options: ['100','500','1000','10000'] },
        ],
      },
      {
        id: 'numbers-3', title: 'Time & Clock', streetTitle: 'Koliko je sati, bre?', emoji: '⏰', xpReward: 30,
        questions: [
          { id: 'n3-q1', type: 'multiple-choice', prompt: 'How do you ask "What time is it?"', streetPrompt: 'Pazi — how do you ask for the time?', answer: 'Koliko je sati?', options: ['Kako si?','Koliko je sati?','Gde je sat?','Imam sat'] },
          { id: 'n3-q2', type: 'translate', prompt: 'Translate "It is 3 o\'clock"', streetPrompt: 'Tri sata — translate it brate!', answer: 'Tri su sata', hint: 'su = are (plural)' },
          { id: 'n3-q3', type: 'multiple-choice', prompt: 'What does "Podne" mean?', streetPrompt: '"Podne" — šta je to?', answer: 'Noon / Midday', options: ['Midnight','Morning','Noon / Midday','Evening'] },
          { id: 'n3-q4', type: 'multiple-choice', prompt: 'How do you say "half past" (e.g. half past 2)?', streetPrompt: 'Kapiram — "half past" in Serbian?', answer: 'Pola tri', options: ['Dva i po','Pola tri','Tri i pola','Polovina'] },
          { id: 'n3-q5', type: 'translate', prompt: 'Translate "minute"', streetPrompt: 'What is "minute" in Serbian, vopi?', answer: 'Minut', hint: 'sounds similar to English' },
        ],
      },
    ],
  },

  // ─── FOOD & DRINKS ────────────────────────────────────────────────────────
  {
    id: 'food', title: 'Food & Drinks', streetTitle: 'Ćevapi i Rakija',
    description: 'Order food and drinks like a local',
    streetDescription: 'Bez ćevapa i piva nema života, kapiram?',
    emoji: '🍺', color: '#e67e22',
    lessons: [
      {
        id: 'food-1', title: 'Ordering Food', streetTitle: 'Daj mi ćevape!', emoji: '🥙', xpReward: 25,
        questions: [
          { id: 'f1-q1', type: 'multiple-choice', prompt: 'How do you say "water"?', streetPrompt: 'Pazi, how do you ask for "water"?', answer: 'Voda', options: ['Pivo','Voda','Sok','Kafa'] },
          { id: 'f1-q2', type: 'multiple-choice', prompt: 'What is "Kafa"?', streetPrompt: 'Brate, what is "Kafa"?', answer: 'Coffee', options: ['Beer','Tea','Coffee','Juice'] },
          { id: 'f1-q3', type: 'translate', prompt: 'Translate "One beer, please"', streetPrompt: 'Vopi, translate "One beer, please"!', answer: 'Jedno pivo, molim', hint: 'jedno = one, pivo = beer, molim = please' },
          { id: 'f1-q4', type: 'multiple-choice', prompt: 'What does "Sladak" mean?', streetPrompt: 'Kapiram, what does "Sladak" mean?', answer: 'Sweet', options: ['Salty','Spicy','Sweet','Sour'] },
          { id: 'f1-q5', type: 'translate', prompt: 'Translate "The bill, please"', streetPrompt: 'Time to pay — how do you ask for the bill?', answer: 'Račun, molim', hint: 'račun = bill/account' },
          { id: 'f1-q6', type: 'multiple-choice', prompt: 'How do you say "I am hungry"?', streetPrompt: 'Brate, how do you say you\'re starving?', answer: 'Gladan sam', options: ['Žedan sam','Gladan sam','Sit sam','Umoran sam'] },
        ],
      },
      {
        id: 'food-2', title: 'Serbian Cuisine', streetTitle: 'Srpska Kuhinja, majstore', emoji: '🍖', xpReward: 30,
        questions: [
          { id: 'f2-q1', type: 'multiple-choice', prompt: 'What are "Ćevapi"?', streetPrompt: 'Brate — šta su ćevapi?', answer: 'Grilled minced meat rolls', options: ['A type of soup','Grilled minced meat rolls','A fried pastry','Stuffed peppers'] },
          { id: 'f2-q2', type: 'multiple-choice', prompt: 'What is "Kajmak"?', streetPrompt: 'Kapiram — "Kajmak" je šta?', answer: 'Creamy dairy spread', options: ['A hot sauce','Creamy dairy spread','Sour cream soup','A type of bread'] },
          { id: 'f2-q3', type: 'translate', prompt: 'Translate "bread"', streetPrompt: 'Hleb ili …? Translate "bread"!', answer: 'Hleb', hint: 'h-leb' },
          { id: 'f2-q4', type: 'multiple-choice', prompt: 'What is "Rakija"?', streetPrompt: 'Vopi — "Rakija" je šta?', answer: 'Serbian fruit brandy', options: ['Sparkling wine','Serbian fruit brandy','Coffee liqueur','Apple juice'] },
          { id: 'f2-q5', type: 'multiple-choice', prompt: 'How do you say "delicious"?', streetPrompt: 'Pazi — how do you say the food is amazing?', answer: 'Ukusno', options: ['Loše','Ukusno','Slano','Kiselo'] },
          { id: 'f2-q6', type: 'translate', prompt: 'Translate "I would like a table for two"', streetPrompt: 'Restoran — how do you get a table for two?', answer: 'Stolić za dvoje, molim', hint: 'stolić = table (small), dvoje = two people' },
        ],
      },
      {
        id: 'food-3', title: 'At the Market', streetTitle: 'Na pijaci, brate', emoji: '🥦', xpReward: 25,
        questions: [
          { id: 'f3-q1', type: 'multiple-choice', prompt: 'How do you say "How much does this cost?"', streetPrompt: 'Pijaca — how do you ask the price?', answer: 'Koliko košta ovo?', options: ['Gde je to?','Koliko košta ovo?','Šta je ovo?','Da li imate ovo?'] },
          { id: 'f3-q2', type: 'translate', prompt: 'Translate "apple"', streetPrompt: 'Jabuka ili …? Translate "apple"!', answer: 'Jabuka', hint: 'ja-bu-ka' },
          { id: 'f3-q3', type: 'multiple-choice', prompt: 'What is "Paradajz"?', streetPrompt: 'Kapiram — "Paradajz" is which vegetable?', answer: 'Tomato', options: ['Cucumber','Pepper','Tomato','Onion'] },
          { id: 'f3-q4', type: 'multiple-choice', prompt: 'How do you say "expensive"?', streetPrompt: 'Brate — how do you say something costs too much?', answer: 'Skupo', options: ['Jeftino','Skupo','Besplatno','Dosta'] },
          { id: 'f3-q5', type: 'translate', prompt: 'Translate "I want 1 kilogram of tomatoes"', streetPrompt: 'Pijaca order — kilogram paradajza!', answer: 'Jedan kilogram paradajza', hint: 'jedan = one' },
        ],
      },
    ],
  },

  // ─── DIRECTIONS ───────────────────────────────────────────────────────────
  {
    id: 'directions', title: 'Getting Around', streetTitle: 'Snađi se, brate',
    description: 'Navigate Belgrade and Serbian cities',
    streetDescription: 'Bez pravca se ne ide — osim na Kalimegdan',
    emoji: '🗺️', color: '#8e44ad',
    lessons: [
      {
        id: 'directions-1', title: 'Left, Right, Forward', streetTitle: 'Levo, desno, pravo', emoji: '🧭', xpReward: 20,
        questions: [
          { id: 'd1-q1', type: 'multiple-choice', prompt: 'How do you say "left"?', streetPrompt: 'Pazi levo — how do you say "left"?', answer: 'Levo', options: ['Desno','Pravo','Levo','Gore'] },
          { id: 'd1-q2', type: 'multiple-choice', prompt: 'What does "Pravo" mean giving directions?', streetPrompt: 'Brate, "Pravo" means what when lost?', answer: 'Straight ahead', options: ['Turn right','Go back','Straight ahead','Turn left'] },
          { id: 'd1-q3', type: 'translate', prompt: 'Translate "Where is the bus station?"', streetPrompt: 'Kapiram — how do you find the bus stop?', answer: 'Gde je autobuska stanica?', hint: 'Gde = where, je = is' },
          { id: 'd1-q4', type: 'multiple-choice', prompt: 'How do you say "right"?', streetPrompt: 'Turn right — how do you say it?', answer: 'Desno', options: ['Levo','Gore','Desno','Dole'] },
          { id: 'd1-q5', type: 'translate', prompt: 'Translate "How far is it?"', streetPrompt: 'Brate, how do you ask how far something is?', answer: 'Koliko je daleko?', hint: 'daleko = far' },
        ],
      },
      {
        id: 'directions-2', title: 'Transport', streetTitle: 'Autobus ili taksi?', emoji: '🚌', xpReward: 30,
        questions: [
          { id: 'd2-q1', type: 'multiple-choice', prompt: 'How do you say "taxi"?', streetPrompt: 'Kapiram — same word, different accent?', answer: 'Taksi', options: ['Taksi','Tramvaj','Autobus','Metro'] },
          { id: 'd2-q2', type: 'translate', prompt: 'Translate "the airport"', streetPrompt: 'Aerodrom or …? Translate "the airport"!', answer: 'Aerodrom', hint: 'sounds like English!' },
          { id: 'd2-q3', type: 'multiple-choice', prompt: 'How do you ask for a ticket?', streetPrompt: 'Pazi — how do you buy a ticket?', answer: 'Jednu kartu, molim', options: ['Daj mi vozilo','Jednu kartu, molim','Gde je taksi?','Koliko košta?'] },
          { id: 'd2-q4', type: 'multiple-choice', prompt: 'What is "Stanica"?', streetPrompt: 'Brate — šta znači "Stanica"?', answer: 'Station / Stop', options: ['Station / Stop','Street','City centre','Timetable'] },
          { id: 'd2-q5', type: 'translate', prompt: 'Translate "I need to go to the centre"', streetPrompt: 'Taksi — how do you tell the driver where to go?', answer: 'Treba mi da idem u centar', hint: 'treba mi = I need' },
        ],
      },
    ],
  },

  // ─── STREET SLANG ─────────────────────────────────────────────────────────
  {
    id: 'street-slang', title: 'Street Slang 🔥', streetTitle: 'Ulični Rečnik',
    description: 'The real Serbian — slang, expressions, attitude',
    streetDescription: 'Jebiga, ovo je ono pravo. Ulični srpski za prave likove.',
    emoji: '💀', color: '#39ff14',
    isPro: true,
    lessons: [
      {
        id: 'slang-1', title: 'Essential Slang', streetTitle: 'Mora da znaš ovo', emoji: '🔥', xpReward: 50,
        questions: [
          { id: 's1-q1', type: 'multiple-choice', prompt: 'What does "Jebiga" express?', streetPrompt: 'Brate, šta znači "Jebiga"?', answer: 'Oh well / What can you do', options: ['I love you','Oh well / What can you do',"Let's go",'No problem'] },
          { id: 's1-q2', type: 'multiple-choice', prompt: 'What does "Brate" mean with friends?', streetPrompt: 'Pazi, šta znači "Brate"?', answer: 'Bro / Dude', options: ['Brother (formal)','Bro / Dude','Enemy','Stranger'] },
          { id: 's1-q3', type: 'multiple-choice', prompt: 'If someone says "Kapiram" — what are they saying?', streetPrompt: 'Vopi, šta znači "Kapiram"?', answer: 'I understand / I get it', options: ['I am hungry','I understand / I get it','I am leaving','I disagree'] },
          { id: 's1-q4', type: 'multiple-choice', prompt: 'What does "Ajde" mean?', streetPrompt: 'Ajde — šta ovo znači?', answer: "Come on / Let's go", options: ['Stop',"Come on / Let's go",'Wait','Never mind'] },
          { id: 's1-q5', type: 'translate', prompt: 'How do you say "No worries / Whatever" (slang)?', streetPrompt: 'Kako se kaže "whatever, brate"?', answer: 'Jebiga', hint: 'This is literally the app name 😏' },
        ],
      },
      {
        id: 'slang-2', title: 'Balkan Vibes', streetTitle: 'Balkanski stil', emoji: '😤', xpReward: 50,
        questions: [
          { id: 's2-q1', type: 'multiple-choice', prompt: 'What does "Šta ima?" mean?', streetPrompt: 'Pazi — "Šta ima?" is what kind of greeting?', answer: "What's up? / What's new?", options: ['What do you have?',"What's up? / What's new?",'What happened?','What do you want?'] },
          { id: 's2-q2', type: 'multiple-choice', prompt: 'What does "Bre" mean at the end of a sentence?', streetPrompt: 'Kapiram — "Bre" šta je to?', answer: 'An emphasis word (like "man" or "dude")', options: ['Goodbye','An emphasis word (like "man" or "dude")','Yes','Please'] },
          { id: 's2-q3', type: 'translate', prompt: 'Translate "Chill out!"  (slang: "Smiri se!")', streetPrompt: 'How do you tell someone to relax in Serbian?', answer: 'Smiri se', hint: 'smiriti = to calm' },
          { id: 's2-q4', type: 'multiple-choice', prompt: 'What does "Mrak" literally mean, but also as slang?', streetPrompt: 'Brate — "Mrak" — šta je to?', answer: 'Darkness, but slang for "awesome"', options: ['Terrible','Darkness, but slang for "awesome"','Boring','Cold'] },
          { id: 's2-q5', type: 'multiple-choice', prompt: 'What does "Sve pet" mean?', streetPrompt: 'Vopi — "Sve pet" — šta znači?', answer: 'Everything is great / Five stars', options: ['Five people','Everything is great / Five stars','High five','I have five'] },
          { id: 's2-q6', type: 'translate', prompt: 'How do you say "I don\'t care" (slang)?', streetPrompt: 'Kapiram — how do you say you couldn\'t care less?', answer: 'Boli me uvo', hint: '"My ear hurts" — Serbian way of saying I don\'t care 😂' },
        ],
      },
      {
        id: 'slang-3', title: 'Curses & Expressions', streetTitle: 'Psovke i izrazi', emoji: '💥', xpReward: 60,
        questions: [
          { id: 's3-q1', type: 'multiple-choice', prompt: 'What does "Majku mu" express?', streetPrompt: 'Pazi brate — "Majku mu" is what kind of expression?', answer: 'An expression of frustration', options: ['A compliment','An expression of frustration','A greeting','A farewell'] },
          { id: 's3-q2', type: 'multiple-choice', prompt: 'What does "Idi" mean?', streetPrompt: 'Someone yells "Idi!" — what do they want?', answer: 'Go away!', options: ['Come here!','Go away!','Sit down!','Stop!'] },
          { id: 's3-q3', type: 'multiple-choice', prompt: 'What does "Ma daj!" express?', streetPrompt: '"Ma daj!" — šta to znači, brate?', answer: 'No way! / Come on!', options: ['Give me more','No way! / Come on!','I understand','Of course'] },
          { id: 's3-q4', type: 'translate', prompt: 'Translate "Leave me alone!" (informal)', streetPrompt: 'Brate, how do you tell someone to back off?', answer: 'Ostavi me na miru', hint: 'mir = peace' },
          { id: 's3-q5', type: 'multiple-choice', prompt: 'What does "Odlično" mean?', streetPrompt: 'Vopi — "Odlično" — šta je to?', answer: 'Excellent!', options: ['Terrible','Okay','Excellent!','Strange'] },
        ],
      },
      {
        id: 'slang-4', title: 'Flirting & Dating', streetTitle: 'Muvanje i kafana', emoji: '💕', xpReward: 60,
        questions: [
          { id: 's4-q1', type: 'multiple-choice', prompt: 'What does "Smuvati" mean?', streetPrompt: 'Pazi brate — šta znači "smuvati"?', answer: 'To hook up / successfully flirt', options: ['To fight','To run away','To hook up / successfully flirt','To get drunk'] },
          { id: 's4-q2', type: 'multiple-choice', prompt: 'What does "Vrh" literally mean, and what is its slang meaning?', streetPrompt: 'Brate, what is "Vrh"?', answer: 'Lit. peak / Slang: awesome', options: ['Lit. bottom / Slang: terrible','Lit. side / Slang: okay','Lit. end / Slang: finished','Lit. peak / Slang: awesome'] },
          { id: 's4-q3', type: 'translate', prompt: 'Translate "Cheers!"', streetPrompt: 'What do you say with rakija?', answer: 'Živeli', hint: 'zhi-ve-li' },
          { id: 's4-q4', type: 'multiple-choice', prompt: 'What is a "Šmeker"?', streetPrompt: 'He thinks he is a "Šmeker" — what is that?', answer: 'Smooth operator / player', options: ['Loser','Nerd','Smooth operator / player','Boss'] },
        ],
      },
      {
        id: 'slang-5', title: 'Partying', streetTitle: 'Luda žurka', emoji: '🍻', xpReward: 60,
        questions: [
          { id: 's5-q1', type: 'multiple-choice', prompt: 'What does "Ludo" mean?', streetPrompt: 'Kakva noć! "Ludo" je!', answer: 'Crazy', options: ['Boring','Loud','Crazy','Cold'] },
          { id: 's5-q2', type: 'translate', prompt: 'Translate "Party"', streetPrompt: 'Žurka or …? Translate "party"!', answer: 'Žurka', hint: 'zhur-ka' },
          { id: 's5-q3', type: 'multiple-choice', prompt: 'What does "Pijan kao letva" mean?', streetPrompt: 'Pazi brate — "Pijan kao letva"?', answer: 'Completely drunk (lit. drunk as a plank)', options: ['Just a little tipsy','Completely drunk (lit. drunk as a plank)','Drinking water','Sober'] },
          { id: 's5-q4', type: 'translate', prompt: 'Translate "hangover"', streetPrompt: 'The next morning… what do you have?', answer: 'Mamurluk', hint: 'ma-mur-luk' },
        ],
      },
    ],
  },

  // ─── DAILY LIFE ───────────────────────────────────────────────────────────
  {
    id: 'daily-life', title: 'Daily Life', streetTitle: 'Svaki dan, majstore',
    description: 'Talk about your everyday routine and activities',
    streetDescription: 'Šta radiš svaki dan? Nauči da pričaš o životu.',
    emoji: '☀️', color: '#16a085',
    isPro: true,
    lessons: [
      {
        id: 'daily-1', title: 'Morning Routine', streetTitle: 'Jutro je, ustaj!', emoji: '🌅', xpReward: 25,
        questions: [
          { id: 'dl1-q1', type: 'multiple-choice', prompt: 'How do you say "I wake up"?', streetPrompt: 'Pazi — how do you say you woke up?', answer: 'Buđim se', options: ['Spavam','Buđim se','Jedem','Idem'] },
          { id: 'dl1-q2', type: 'translate', prompt: 'Translate "I drink coffee every morning"', streetPrompt: 'Kapiram — tell me about your morning coffee!', answer: 'Pijem kafu svako jutro', hint: 'pijem = I drink, svako = every' },
          { id: 'dl1-q3', type: 'multiple-choice', prompt: 'What does "Kupatilo" mean?', streetPrompt: 'Brate — "Kupatilo" — šta je to?', answer: 'Bathroom', options: ['Kitchen','Bedroom','Bathroom','Living room'] },
          { id: 'dl1-q4', type: 'multiple-choice', prompt: 'How do you say "I go to work"?', streetPrompt: 'Monday mood — how do you say you\'re heading to work?', answer: 'Idem na posao', options: ['Idem kući','Idem na posao','Radim kod kuće','Ne radim'] },
          { id: 'dl1-q5', type: 'translate', prompt: 'Translate "I am tired"', streetPrompt: 'Brate, how do you say you\'re exhausted?', answer: 'Umoran sam', hint: 'umoran = tired (male), umorna = tired (female)' },
        ],
      },
      {
        id: 'daily-2', title: 'At Home', streetTitle: 'Kod kuće, opušten', emoji: '🏠', xpReward: 25,
        questions: [
          { id: 'dl2-q1', type: 'multiple-choice', prompt: 'What does "Kuća" mean?', streetPrompt: '"Kuća" — šta je to?', answer: 'House', options: ['Apartment','House','Room','Building'] },
          { id: 'dl2-q2', type: 'translate', prompt: 'Translate "living room"', streetPrompt: 'Dnevna soba or …? Translate "living room"!', answer: 'Dnevna soba', hint: 'dnevna = daily, soba = room' },
          { id: 'dl2-q3', type: 'multiple-choice', prompt: 'How do you say "I am watching TV"?', streetPrompt: 'Kapiram — chilling at home, what are you doing?', answer: 'Gledam televiziju', options: ['Slušam muziku','Gledam televiziju','Čitam knjigu','Spavam'] },
          { id: 'dl2-q4', type: 'multiple-choice', prompt: 'What does "Prozor" mean?', streetPrompt: 'Brate — "Prozor"?', answer: 'Window', options: ['Door','Ceiling','Window','Floor'] },
          { id: 'dl2-q5', type: 'translate', prompt: 'Translate "Can you open the window?"', streetPrompt: 'It\'s hot — how do you ask someone to open the window?', answer: 'Možeš li otvoriti prozor?', hint: 'možeš li = can you, otvoriti = open' },
        ],
      },
      {
        id: 'daily-3', title: 'Work & Study', streetTitle: 'Posao i škola', emoji: '💼', xpReward: 30,
        questions: [
          { id: 'dl3-q1', type: 'multiple-choice', prompt: 'How do you say "I work in an office"?', streetPrompt: 'Pazi — office worker, how do you say it?', answer: 'Radim u kancelariji', options: ['Radim u fabrici','Radim u kancelariji','Radim kod kuće','Ne radim'] },
          { id: 'dl3-q2', type: 'translate', prompt: 'Translate "meeting"', streetPrompt: 'Sastanak or …? How do you say "meeting"?', answer: 'Sastanak', hint: 'sa-sta-nak' },
          { id: 'dl3-q3', type: 'multiple-choice', prompt: 'What does "Škola" mean?', streetPrompt: '"Škola" — šta je to?', answer: 'School', options: ['Hospital','School','University','Library'] },
          { id: 'dl3-q4', type: 'multiple-choice', prompt: 'How do you say "I study Serbian"?', streetPrompt: 'Kapiram — you\'re learning Serbian, how do you say it?', answer: 'Učim srpski', options: ['Pričam srpski','Učim srpski','Volim srpski','Govorim srpski'] },
          { id: 'dl3-q5', type: 'translate', prompt: 'Translate "The meeting is at 9"', streetPrompt: 'Pazi — how do you say when the meeting is?', answer: 'Sastanak je u devet', hint: 'je = is, u = at' },
        ],
      },
    ],
  },

  // ─── EMOTIONS & FEELINGS ──────────────────────────────────────────────────
  {
    id: 'emotions', title: 'Feelings', streetTitle: 'Kako se osećaš?',
    description: 'Express your emotions and feelings in Serbian',
    streetDescription: 'Brate, kako se osećaš? Nauči da kažeš.',
    emoji: '❤️', color: '#e91e63',
    isPro: true,
    lessons: [
      {
        id: 'emotions-1', title: 'Basic Emotions', streetTitle: 'Sreća, tuga, bes', emoji: '😊', xpReward: 25,
        questions: [
          { id: 'em1-q1', type: 'multiple-choice', prompt: 'How do you say "I am happy"?', streetPrompt: 'Brate — how do you say you\'re happy?', answer: 'Srećan sam', options: ['Tužan sam','Srećan sam','Ljut sam','Uplašen sam'] },
          { id: 'em1-q2', type: 'translate', prompt: 'Translate "I am sad"', streetPrompt: 'Kapiram — how do you express sadness?', answer: 'Tužan sam', hint: 'tužan = sad (male); tužna = sad (female)' },
          { id: 'em1-q3', type: 'multiple-choice', prompt: 'What does "Ljut" mean?', streetPrompt: '"Ljut" — kako se osećaš?', answer: 'Angry', options: ['Excited','Bored','Angry','Scared'] },
          { id: 'em1-q4', type: 'multiple-choice', prompt: 'How do you say "I love you"?', streetPrompt: 'Pazi — the big one! How do you say "I love you"?', answer: 'Volim te', options: ['Sviđaš mi se','Volim te','Nedostaješ mi','Znam te'] },
          { id: 'em1-q5', type: 'translate', prompt: 'Translate "I miss you"', streetPrompt: 'Brate — how do you say someone is missed?', answer: 'Nedostaješ mi', hint: 'nedostajati = to be missed' },
          { id: 'em1-q6', type: 'multiple-choice', prompt: 'What does "Usamljen" mean?', streetPrompt: '"Usamljen" — šta je to?', answer: 'Lonely', options: ['Tired','Lonely','Excited','Happy'] },
        ],
      },
      {
        id: 'emotions-2', title: 'Opinions', streetTitle: 'Šta misliš?', emoji: '🤔', xpReward: 30,
        questions: [
          { id: 'em2-q1', type: 'multiple-choice', prompt: 'How do you say "I think that…"?', streetPrompt: 'Pazi — how do you share your opinion?', answer: 'Mislim da…', options: ['Znam da…','Mislim da…','Vidim da…','Hoću da…'] },
          { id: 'em2-q2', type: 'translate', prompt: 'Translate "In my opinion"', streetPrompt: 'Kapiram — how do you start an opinion?', answer: 'Po mom mišljenju', hint: 'mišljenje = opinion' },
          { id: 'em2-q3', type: 'multiple-choice', prompt: 'How do you agree with someone?', streetPrompt: 'Brate — how do you say "I agree"?', answer: 'Slažem se', options: ['Ne slažem se','Slažem se','Ne znam','Možda'] },
          { id: 'em2-q4', type: 'multiple-choice', prompt: 'What does "Možda" mean?', streetPrompt: '"Možda" — šta je to?', answer: 'Maybe / Perhaps', options: ['Yes','No','Maybe / Perhaps','Never'] },
          { id: 'em2-q5', type: 'translate', prompt: 'Translate "I don\'t know"', streetPrompt: 'Pazi — how do you say you don\'t know?', answer: 'Ne znam', hint: 'ne = no/not, znam = I know' },
        ],
      },
    ],
  },

  // ─── WEATHER ──────────────────────────────────────────────────────────────
  {
    id: 'weather', title: 'Weather', streetTitle: 'Kakvo je vreme?',
    description: 'Talk about the weather in Serbian',
    streetDescription: 'Beograd ima sve — sun, rain, snow. Nauči kako da pričaš o tome.',
    emoji: '⛅', color: '#2980b9',
    isPro: true,
    lessons: [
      {
        id: 'weather-1', title: 'Basic Weather', streetTitle: 'Kiša ili sunce?', emoji: '🌤️', xpReward: 20,
        questions: [
          { id: 'w1-q1', type: 'multiple-choice', prompt: 'How do you ask "What\'s the weather like?"', streetPrompt: 'Pazi — how do you ask about the weather?', answer: 'Kakvo je vreme?', options: ['Koliko je toplo?','Kakvo je vreme?','Da li pada kiša?','Je li sunčano?'] },
          { id: 'w1-q2', type: 'translate', prompt: 'Translate "It is raining"', streetPrompt: 'Kiša pada — how do you say it\'s raining?', answer: 'Pada kiša', hint: 'pada = falls, kiša = rain' },
          { id: 'w1-q3', type: 'multiple-choice', prompt: 'What does "Sunčano" mean?', streetPrompt: '"Sunčano" — kakvo je vreme?', answer: 'Sunny', options: ['Cloudy','Windy','Sunny','Rainy'] },
          { id: 'w1-q4', type: 'multiple-choice', prompt: 'How do you say "It is cold"?', streetPrompt: 'Brrr — how do you say it\'s cold in Serbian?', answer: 'Hladno je', options: ['Toplo je','Hladno je','Vetrovito je','Vlažno je'] },
          { id: 'w1-q5', type: 'translate', prompt: 'Translate "snow"', streetPrompt: 'Beograd zimi — translate "snow"!', answer: 'Sneg', hint: 's-neg' },
          { id: 'w1-q6', type: 'multiple-choice', prompt: 'What does "Oblačno" mean?', streetPrompt: '"Oblačno" — kakvo je vreme?', answer: 'Cloudy', options: ['Sunny','Cold','Cloudy','Hot'] },
        ],
      },
      {
        id: 'weather-2', title: 'Seasons', streetTitle: 'Godišnja doba', emoji: '🍂', xpReward: 25,
        questions: [
          { id: 'w2-q1', type: 'multiple-choice', prompt: 'How do you say "summer"?', streetPrompt: 'Kapiram — "summer" in Serbian?', answer: 'Leto', options: ['Zima','Proleće','Leto','Jesen'] },
          { id: 'w2-q2', type: 'translate', prompt: 'Translate "winter"', streetPrompt: 'Brrr — "winter" in Serbian?', answer: 'Zima', hint: 'zi-ma' },
          { id: 'w2-q3', type: 'multiple-choice', prompt: 'What does "Proleće" mean?', streetPrompt: '"Proleće" — which season?', answer: 'Spring', options: ['Autumn','Winter','Spring','Summer'] },
          { id: 'w2-q4', type: 'multiple-choice', prompt: 'How do you say "autumn / fall"?', streetPrompt: 'Pazi — which word means autumn?', answer: 'Jesen', options: ['Leto','Zima','Proleće','Jesen'] },
          { id: 'w2-q5', type: 'translate', prompt: 'Translate "I love summer"', streetPrompt: 'Brate — tell me you love summer!', answer: 'Volim leto', hint: 'volim = I love' },
        ],
      },
    ],
  },

  // ─── FAMILY ───────────────────────────────────────────────────────────────
  {
    id: 'family', title: 'Family', streetTitle: 'Porodica, brate',
    description: 'Talk about your family members',
    streetDescription: 'Porodica je sve — nauči kako se zovu svi.',
    emoji: '👨‍👩‍👧', color: '#27ae60',
    isPro: true,
    lessons: [
      {
        id: 'family-1', title: 'Family Members', streetTitle: 'Ko je ko u familiji', emoji: '👪', xpReward: 25,
        questions: [
          { id: 'fam1-q1', type: 'multiple-choice', prompt: 'How do you say "mother"?', streetPrompt: 'Pazi — "mother" in Serbian?', answer: 'Majka', options: ['Otac','Majka','Brat','Sestra'] },
          { id: 'fam1-q2', type: 'translate', prompt: 'Translate "father"', streetPrompt: 'Brate — "father" u srpskom?', answer: 'Otac', hint: 'o-tac' },
          { id: 'fam1-q3', type: 'multiple-choice', prompt: 'What does "Brat" mean?', streetPrompt: '"Brat" — šta je to?', answer: 'Brother', options: ['Sister','Father','Brother','Son'] },
          { id: 'fam1-q4', type: 'multiple-choice', prompt: 'How do you say "grandmother"?', streetPrompt: 'Kapiram — how do you say "grandma"?', answer: 'Baka', options: ['Deda','Baka','Tetka','Strina'] },
          { id: 'fam1-q5', type: 'translate', prompt: 'Translate "I have two brothers"', streetPrompt: 'Brate — how do you say you have two brothers?', answer: 'Imam dva brata', hint: 'imam = I have, dva = two' },
          { id: 'fam1-q6', type: 'multiple-choice', prompt: 'What does "Deda" mean?', streetPrompt: '"Deda" is who?', answer: 'Grandfather', options: ['Uncle','Father','Grandfather','Son'] },
        ],
      },
      {
        id: 'family-2', title: 'Describing Family', streetTitle: 'Kakva je tvoja familija?', emoji: '🧬', xpReward: 30,
        questions: [
          { id: 'fam2-q1', type: 'multiple-choice', prompt: 'How do you say "My family is big"?', streetPrompt: 'Kapiram — describe your big family!', answer: 'Moja porodica je velika', options: ['Moja porodica je mala','Moja porodica je velika','Imam porodicu','Volim porodicu'] },
          { id: 'fam2-q2', type: 'translate', prompt: 'Translate "My sister is young"', streetPrompt: 'Pazi — how do you say your sister is young?', answer: 'Moja sestra je mlada', hint: 'mlada = young (female)' },
          { id: 'fam2-q3', type: 'multiple-choice', prompt: 'What does "Star" mean?', streetPrompt: '"Star" — šta znači?', answer: 'Old', options: ['Young','Tall','Old','Smart'] },
          { id: 'fam2-q4', type: 'multiple-choice', prompt: 'How do you say "My father works in Belgrade"?', streetPrompt: 'Brate — how do you talk about your dad\'s job?', answer: 'Moj otac radi u Beogradu', options: ['Moj otac je u Beogradu','Moj otac radi u Beogradu','Moj otac živi u Beogradu','Moj otac ide u Beograd'] },
          { id: 'fam2-q5', type: 'translate', prompt: 'Translate "Do you have siblings?"', streetPrompt: 'Kapiram — how do you ask if someone has brothers or sisters?', answer: 'Imaš li braću i sestre?', hint: 'braća = brothers (plural nominative)' },
        ],
      },
    ],
  },

  // ─── TRAVEL & PLACES ────────────────────────────────────────────────────────
  {
    id: 'travel', title: 'Travel & Places', streetTitle: 'Putevi i Mesta',
    description: 'Learn vocabulary for hotels, airports, and getting around further afield.',
    streetDescription: 'Idemo negde na put! Aerodromi, hoteli i sve to.',
    emoji: '✈️', color: '#3498db',
    isPro: true,
    lessons: [
      {
        id: 'travel-1', title: 'Hotel Check-in', streetTitle: 'Soba i ključ', emoji: '🏨', xpReward: 25,
        questions: [
          { id: 'tr1-q1', type: 'multiple-choice', prompt: 'How do you say "Hotel"?', streetPrompt: 'How do you say "Hotel" brate?', answer: 'Hotel', options: ['Soba', 'Restoran', 'Kuća', 'Hotel'] },
          { id: 'tr1-q2', type: 'translate', prompt: 'Translate "I have a reservation"', streetPrompt: 'Kapiram — you got a room booked, what do you say?', answer: 'Imam rezervaciju', hint: 'imam = I have, rezervacija = reservation' },
          { id: 'tr1-q3', type: 'multiple-choice', prompt: 'What does "Soba" mean?', streetPrompt: 'Brate, what is "soba"?', answer: 'Room', options: ['Building', 'Room', 'Kitchen', 'Bed'] },
          { id: 'tr1-q4', type: 'translate', prompt: 'Translate "passport"', streetPrompt: 'What is it called in Serbian?', answer: 'Pasoš', hint: 'pa-soš' },
        ],
      },
      {
        id: 'travel-2', title: 'Airport & Flights', streetTitle: 'Letimo na aerodrom', emoji: '🛫', xpReward: 30,
        questions: [
          { id: 'tr2-q1', type: 'multiple-choice', prompt: 'How do you say "flight"?', streetPrompt: 'Pazi — going up in the air?', answer: 'Let', options: ['Karta', 'Let', 'Avion', 'Put'] },
          { id: 'tr2-q2', type: 'multiple-choice', prompt: 'What does "Kofer" mean?', streetPrompt: 'Brate — "kofer"?', answer: 'Suitcase', options: ['Backpack', 'Ticket', 'Suitcase', 'Wallet'] },
          { id: 'tr2-q3', type: 'translate', prompt: 'Translate "Where is my luggage?"', streetPrompt: 'Gde je... what is luggage called?', answer: 'Gde je moj prtljag?', hint: 'moj = my, prtljag = luggage' },
        ],
      },
    ],
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  {
    id: 'shopping', title: 'Shopping', streetTitle: 'Šoping vreme',
    description: 'Learn vocabulary for shopping, buying clothes, and negotiating prices.',
    streetDescription: 'Brate, idemo u šoping. Trošimo pare danas!',
    emoji: '🛍️', color: '#9b59b6',
    isPro: true,
    lessons: [
      {
        id: 'shopping-1', title: 'Clothes', streetTitle: 'Odeća i patike', emoji: '👕', xpReward: 30,
        questions: [
          { id: 'sh1-q1', type: 'multiple-choice', prompt: 'How do you say "t-shirt"?', streetPrompt: 'Kapiram — what is a short-sleeved top?', answer: 'Majica', options: ['Jakna', 'Cipele', 'Košulja', 'Majica'] },
          { id: 'sh1-q2', type: 'translate', prompt: 'Translate "shoes"', streetPrompt: 'What goes on your feet?', answer: 'Cipele', hint: 'ci-pe-le' },
          { id: 'sh1-q3', type: 'multiple-choice', prompt: 'What does "Jeftino" mean?', streetPrompt: 'Brate — "jeftino"?', answer: 'Cheap', options: ['Good', 'Expensive', 'Cheap', 'Heavy'] },
          { id: 'sh1-q4', type: 'translate', prompt: 'Translate "expensive"', streetPrompt: 'Too much money — what is that in Serbian?', answer: 'Skupo', hint: 'sku-po' },
        ],
      },
      {
        id: 'shopping-2', title: 'Women\'s Fashion', streetTitle: 'Ženska Moda', emoji: '👗', xpReward: 35,
        questions: [
          { id: 'sh2-q1', type: 'multiple-choice', prompt: 'How do you say "dress"?', streetPrompt: 'Brate, what is a dress called?', answer: 'Haljina', options: ['Pantalone', 'Haljina', 'Jakna', 'Košulja'] },
          { id: 'sh2-q2', type: 'translate', prompt: 'Translate "skirt"', streetPrompt: 'What is a skirt in Serbian?', answer: 'Suknja', hint: 'suk-nya' },
          { id: 'sh2-q3', type: 'multiple-choice', prompt: 'What does "Štikle" mean?', streetPrompt: 'Going out tonight — what are "Štikle"?', answer: 'High heels', options: ['Sneakers', 'High heels', 'Boots', 'Sandals'] },
          { id: 'sh2-q4', type: 'translate', prompt: 'Translate "beautiful dress"', streetPrompt: 'How do you compliment a dress?', answer: 'Lepa haljina', hint: 'lepa = beautiful' },
        ],
      },
      {
        id: 'shopping-3', title: 'Men\'s Fashion', streetTitle: 'Muška Moda', emoji: '👔', xpReward: 35,
        questions: [
          { id: 'sh3-q1', type: 'multiple-choice', prompt: 'How do you say "shorts"?', streetPrompt: 'Summer is here — what are shorts?', answer: 'Šorts', options: ['Šorts', 'Odelo', 'Kapa', 'Kaiš'] },
          { id: 'sh3-q2', type: 'multiple-choice', prompt: 'What is "Odelo"?', streetPrompt: 'Dressing sharp — what is an "Odelo"?', answer: 'Suit', options: ['T-shirt', 'Tie', 'Suit', 'Pants'] },
          { id: 'sh3-q3', type: 'translate', prompt: 'Translate "pants / trousers"', streetPrompt: 'What do you wear on your legs?', answer: 'Pantalone', hint: 'pan-ta-lo-ne' },
          { id: 'sh3-q4', type: 'multiple-choice', prompt: 'How do you say "jacket"?', streetPrompt: 'It\'s cold — put on a...', answer: 'Jakna', options: ['Kravata', 'Čarapa', 'Jakna', 'Prsluk'] },
        ],
      },
    ],
  },

  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  {
    id: 'culture', title: 'Serbian Culture', streetTitle: 'Svi Srbi Zidaju',
    description: 'Understand the soul of Serbia: Slava, Rakija, and Kafana rules.',
    streetDescription: 'Upoznaj pravu Srbiju. Budi kao domaći.',
    emoji: '🦅', color: '#B22222',
    isPro: true,
    lessons: [
      {
        id: 'culture-1', title: 'The Slava', streetTitle: 'Slava i Gosti', emoji: '🕯️', xpReward: 35,
        questions: [
          { id: 'c1-q1', type: 'multiple-choice', prompt: 'What is a "Slava"?', streetPrompt: 'What is the most important Serbian family day?', answer: 'Patron saint day', options: ['Patron saint day','Wedding','Birthday','New Year'] },
          { id: 'c1-q2', type: 'multiple-choice', prompt: 'What should you do when entering a Serbian home as a guest?', streetPrompt: 'Entering a house — what is the crucial rule?', answer: 'Take off your shoes', options: ['Kiss the host 4 times','Knock loudly','Take off your shoes','Pay money'] },
          { id: 'c1-q3', type: 'translate', prompt: 'Translate "Happy Slava!"', streetPrompt: 'How do you congratulate the host on Slava?', answer: 'Srećna slava', hint: 'srećna = happy' },
          { id: 'c1-q4', type: 'multiple-choice', prompt: 'What do you call the female host of the house?', streetPrompt: 'You better respect her — what is the female host called?', answer: 'Domaćica', options: ['Kraljica','Domaćica','Prijateljica','Sestra'] },
          { id: 'c1-q5', type: 'multiple-choice', prompt: 'What gift do you usually bring to someone\'s house?', streetPrompt: 'What is a standard gift for the host?', answer: 'Coffee, wine, or chocolate', options: ['A large plant','Coffee, wine, or chocolate','Money','Fresh bread'] },
        ],
      },
      {
        id: 'culture-2', title: 'Rakija Rules', streetTitle: 'Pravila Rakije', emoji: '🥃', xpReward: 35,
        questions: [
          { id: 'c2-q1', type: 'multiple-choice', prompt: 'What is the golden rule when toasting with Rakija?', streetPrompt: 'Clinking glasses — what MUST you do?', answer: 'Look them in the eyes', options: ['Drink it in one gulp','Look them in the eyes','Look at the glass','Shout loudly'] },
          { id: 'c2-q2', type: 'translate', prompt: 'Translate "To your health / Cheers!"', streetPrompt: 'How do we toast?', answer: 'U tvoje zdravlje', hint: 'zdravlje = health' },
          { id: 'c2-q3', type: 'multiple-choice', prompt: 'What is "Šljivovica"?', streetPrompt: 'Most famous Rakija type?', answer: 'Plum brandy', options: ['Grape brandy','Plum brandy','Cherry brandy','Honey brandy'] },
          { id: 'c2-q4', type: 'translate', prompt: 'Translate "cheers"', streetPrompt: 'Common toast word?', answer: 'Živeli', hint: 'zhi-ve-li' },
        ],
      },
      {
        id: 'culture-3', title: 'Kafana Life', streetTitle: 'Noć u Kafani', emoji: '🎻', xpReward: 40,
        questions: [
          { id: 'c3-q1', type: 'multiple-choice', prompt: 'What is a "Kafana"?', streetPrompt: 'Where is the best nightlife?', answer: 'Traditional tavern', options: ['Nightclub','Coffee shop','Supermarket','Traditional tavern'] },
          { id: 'c3-q2', type: 'multiple-choice', prompt: 'If musicians play at your table, what should you give them?', streetPrompt: 'Music comes your way — what do you give?', answer: 'Bakšiš (Tip)', options: ['Rakija','Bakšiš (Tip)','A song','Food'] },
          { id: 'c3-q3', type: 'translate', prompt: 'Translate "live music"', streetPrompt: 'What makes a Kafana special?', answer: 'Živa muzika', hint: 'živa = live, muzika = music' },
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

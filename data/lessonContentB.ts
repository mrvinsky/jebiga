import { LessonContent } from './contentTypes';

export const lessonContentB: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // DIRECTIONS
  // ═══════════════════════════════════════════════
  'directions-1': {
    scenario: "You're completely lost near Republika Square. A kind local stops and asks if you need help — but they only speak Serbian. Directions are your lifeline right now!",
    vocabulary: [
      { word: 'Levo', pronunciation: 'LEH-voh', translation: 'Left', example: 'Skrenite levo kod semafora.' },
      { word: 'Desno', pronunciation: 'DES-noh', translation: 'Right', example: 'Restoran je desno.' },
      { word: 'Pravo', pronunciation: 'PRAH-voh', translation: 'Straight ahead', example: 'Idite pravo sto metara.' },
      { word: 'Gde je…?', pronunciation: 'gdeh yeh', translation: 'Where is…?', example: 'Gde je autobuska stanica?' },
      { word: 'Daleko', pronunciation: 'DAH-leh-koh', translation: 'Far', example: 'Daleko je — uzmite taksi.' },
      { word: 'Blizu', pronunciation: 'BLEE-zoo', translation: 'Near / Close', example: 'Blizu je, pet minuta peške.' },
    ],
    grammarNote: {
      title: 'Asking for Directions',
      body: '"Izvinite, gde je…?" (Excuse me, where is…?) is the magic phrase. Add "molim vas" (please) to sound extra polite. Locals often say distances in minutes walking ("pet minuta peške") rather than metres.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, gde je Kalemegdan?', translation: 'Excuse me, where is Kalemegdan?' },
      { speaker: 'B', serbian: 'Idite pravo, pa skrenite levo.', translation: 'Go straight, then turn left.' },
      { speaker: 'A', serbian: 'Daleko je?', translation: 'Is it far?' },
      { speaker: 'B', serbian: 'Ne, blizu je. Deset minuta peške.', translation: 'No, it\'s close. Ten minutes on foot.' },
    ],
  },

  'directions-2': {
    scenario: "You need to get from your hostel to the train station. You'll navigate Belgrade's public transport — taxis, buses, trams. All announcements are in Serbian!",
    vocabulary: [
      { word: 'Taksi', pronunciation: 'TAK-see', translation: 'Taxi', example: 'Zovite mi taksi, molim.' },
      { word: 'Autobus', pronunciation: 'OW-toh-boos', translation: 'Bus', example: 'Koji autobus ide do centra?' },
      { word: 'Stanica', pronunciation: 'STAH-nee-tsa', translation: 'Station / Stop', example: 'Gde je autobuska stanica?' },
      { word: 'Aerodrom', pronunciation: 'ah-EH-roh-drom', translation: 'Airport', example: 'Taksi do aerodroma, molim.' },
      { word: 'Karta', pronunciation: 'KAR-ta', translation: 'Ticket', example: 'Jednu kartu, molim.' },
      { word: 'Centar', pronunciation: 'TSEN-tar', translation: 'City centre', example: 'Idemo u centar?' },
    ],
    culturalTip: "Belgrade taxis — always use Pink Taxi or Car:Go app to avoid being overcharged. If you hail one on the street, agree on the price first or insist on the meter ('na taksimetar, molim').",
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan! Do aerodroma, molim.', translation: 'Good day! To the airport, please.' },
      { speaker: 'B', serbian: 'Izvolite. Na taksimetar?', translation: 'Sure. On the meter?' },
      { speaker: 'A', serbian: 'Da, naravno. Koliko dugo traje?', translation: 'Yes, of course. How long does it take?' },
      { speaker: 'B', serbian: 'Oko trideset minuta, zavisno od gužve.', translation: 'About 30 minutes, depending on traffic.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // STREET SLANG
  // ═══════════════════════════════════════════════
  'slang-1': {
    scenario: "You're at a rooftop bar in Savamala — Belgrade's coolest neighbourhood. A group of locals invites you over. You need the essential slang to not sound like a tourist.",
    vocabulary: [
      { word: 'Jebiga', pronunciation: 'YEH-bee-ga', translation: 'Oh well / What can you do', example: 'Kasni voz? Jebiga.' },
      { word: 'Brate', pronunciation: 'BRAH-teh', translation: 'Bro / Dude', example: 'Stani, brate, to nije fer.' },
      { word: 'Kapiram', pronunciation: 'KAH-pee-ram', translation: 'I get it / I understand', example: 'Kapiram, nema problema.' },
      { word: 'Ajde', pronunciation: 'AY-deh', translation: 'Come on / Let\'s go / OK', example: 'Ajde, idemo!' },
      { word: 'Vopi', pronunciation: 'VOH-pee', translation: 'Yo / Hey (casual call)', example: 'Vopi, čekaj me malo!' },
    ],
    culturalTip: '"Jebiga" is the Serbian national philosophy — a shrug at life\'s absurdity. It\'s not vulgar in casual use; it\'s more like a cultural coping mechanism. Use it when things go wrong and you\'ll instantly bond with locals.',
    dialogue: [
      { speaker: 'A', serbian: 'Vopi, brate, šta ima?', translation: 'Yo, bro, what\'s up?' },
      { speaker: 'B', serbian: 'Ma ništa, kapiram ti ja. Dosadno je.', translation: 'Nothing much, I get you man. It\'s boring.' },
      { speaker: 'A', serbian: 'Ajde da idemo negde!', translation: 'Come on let\'s go somewhere!' },
      { speaker: 'B', serbian: 'Nemam para. Jebiga.', translation: 'I have no money. Oh well.' },
    ],
  },

  'slang-2': {
    scenario: "You're hanging at a friend's place watching football. Serbia scores. Everyone explodes. You need to understand the Balkan expressions flying around — and join in!",
    vocabulary: [
      { word: 'Šta ima?', pronunciation: 'shta EE-ma', translation: 'What\'s up? / What\'s new?', example: 'Ej, šta ima, stari?' },
      { word: 'Bre', pronunciation: 'breh', translation: 'Man / Dude (emphasis, end of sentence)', example: 'Ne mogu, bre!' },
      { word: 'Mrak', pronunciation: 'mrak', translation: 'Lit. darkness → Slang: Awesome!', example: 'Taj gol je bio mrak!' },
      { word: 'Sve pet', pronunciation: 'sveh pet', translation: 'All five → Everything\'s great!', example: 'Kako si? — Sve pet!' },
      { word: 'Smiri se', pronunciation: 'SMEE-ree seh', translation: 'Chill out / Calm down', example: 'Smiri se, nije kraj sveta.' },
      { word: 'Boli me uvo', pronunciation: 'BOH-lee meh OO-voh', translation: 'Lit. My ear hurts → I don\'t care', example: 'Šta on misli? — Boli me uvo.' },
    ],
    grammarNote: {
      title: '"Bre" — The Serbian Verbal Tic',
      body: '"Bre" is added at the end of sentences for emphasis, like "man" in English. "Ne znam, bre!" = "I don\'t know, man!" It comes from Turkish "bir" and is especially common in South Serbia and Belgrade slang.',
    },
    culturalTip: 'Serbians use "Mrak" the way Americans say "fire" or "lit". If something is "mrak", it\'s excellent. The literal meaning (darkness) and slang meaning are completely opposite — very Balkan!',
    dialogue: [
      { speaker: 'A', serbian: 'Šta ima, bre, sve pet?', translation: 'What\'s up man, all good?' },
      { speaker: 'B', serbian: 'Ma ide nekako. Boli me uvo za posao.', translation: 'It\'s going somehow. I don\'t care about work.' },
      { speaker: 'A', serbian: 'Smiri se, brate. Idemo na kafu?', translation: 'Chill out, bro. Should we go for coffee?' },
      { speaker: 'B', serbian: 'Mrak ideja! Ajde!', translation: 'Awesome idea! Let\'s go!' },
    ],
  },

  'slang-3': {
    scenario: "Something went wrong — your bag got lost, you missed the bus, it started raining. Time to express frustration the authentic Serbian way, without holding back.",
    vocabulary: [
      { word: 'Ma daj!', pronunciation: 'ma dye', translation: 'No way! / Come on! / Seriously?', example: 'Ma daj, ne može biti!' },
      { word: 'Idi', pronunciation: 'EE-dee', translation: 'Go (away)!', example: 'Idi, ne smetaj mi.' },
      { word: 'Ostavi me na miru', pronunciation: 'oh-STAH-vee meh na MEE-roo', translation: 'Leave me alone / Leave me in peace', example: 'Molim te, ostavi me na miru.' },
      { word: 'Odlično', pronunciation: 'OD-leech-noh', translation: 'Excellent / Great', example: 'Odlično si to uradio!' },
      { word: 'Majku mu', pronunciation: 'MY-koo moo', translation: 'Damn it! (mild expletive)', example: 'Majku mu, zaboravio sam ključ!' },
    ],
    culturalTip: 'Serbian expressive outbursts sound intense but are rarely hostile — they\'re just… theatrical. "Majku mu" said in frustration is like saying "damn it." Context matters. When a local uses it with a smile, it\'s affection, not anger.',
    dialogue: [
      { speaker: 'A', serbian: 'Ma daj! Autobus je otišao!', translation: 'No way! The bus has left!' },
      { speaker: 'B', serbian: 'Odlično, i sad šta?', translation: 'Great, and now what?' },
      { speaker: 'A', serbian: 'Majku mu… uzimamo taksi.', translation: 'Damn it… we\'re taking a taxi.' },
      { speaker: 'B', serbian: 'Skupo je, bre. Jebiga.', translation: 'It\'s expensive, man. Oh well.' },
    ],
  },

  'slang-4': {
    scenario: "You're at a packed kafana when you lock eyes with someone. In Serbia, people don't do formal dating—it's all about flirting, direct moves, and bold words.",
    vocabulary: [
      { word: 'Smuvati', pronunciation: 'SMOO-vah-tee', translation: 'To hook up / to successfully flirt', example: 'Hoću da je smuvam.' },
      { word: 'Cica', pronunciation: 'TSEE-tsa', translation: 'Hot girl / babe', example: 'Gledaj onu cicu tamo.' },
      { word: 'Šmeker', pronunciation: 'SHMEH-ker', translation: 'Smooth operator / player', example: 'On misli da je šmeker.' },
      { word: 'Vrh', pronunciation: 'vurh', translation: 'Awesome / Top (lit. Peak)', example: 'Ova pesma je vrh!' },
      { word: 'Živeli', pronunciation: 'ZHEE-veh-lee', translation: 'Cheers!', example: 'Ajde, brate, živeli!' },
    ],
    culturalTip: '"Kafana" is the traditional Serbian tavern where you drink, listen to live folk music, and socialize. When "muvanje" (flirting) happens here, direct eye contact and confidence are everything.',
    dialogue: [
      { speaker: 'A', serbian: 'Izgledaš vrh večeras.', translation: 'You look awesome tonight.' },
      { speaker: 'B', serbian: 'Hvala, šmekeru. Šta piješ?', translation: 'Thanks, smooth operator. What are you drinking?' },
      { speaker: 'A', serbian: 'Rakiju. Možemo da nazdravimo?', translation: 'Rakija. Can we make a toast?' },
      { speaker: 'B', serbian: 'Ajde, živeli!', translation: 'Come on, cheers!' },
    ],
  },

  'slang-5': {
    scenario: "It's 3 AM in Belgrade. The party at the splav (river club) is peaking. You want to express how epic the night is and maybe warn a buddy who has had too much rakija.",
    vocabulary: [
      { word: 'Ludo', pronunciation: 'LOO-doh', translation: 'Crazy', example: 'Brate, ovo je ludo!' },
      { word: 'Žurka', pronunciation: 'ZHOOR-ka', translation: 'Party', example: 'Gde je najbolja žurka?' },
      { word: 'Pijan / Pijana', pronunciation: 'PEE-yan / PEE-yah-na', translation: 'Drunk (m/f)', example: 'On je pijan kao letva.' },
      { word: 'Mamurluk', pronunciation: 'MAH-moor-look', translation: 'Hangover', example: 'Sutra će biti težak mamurluk.' },
      { word: 'Cimanje', pronunciation: 'TSEE-mah-nyeh', translation: 'Hassle / Effort', example: 'Neću tamo, preveliko je cimanje.' },
    ],
    grammarNote: {
      title: 'Pijan kao letva',
      body: 'Literally "drunk as a wooden plank." It\'s the standard Serbian idiom for being completely wasted.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Kakva žurka, čoveče! Ludo je!', translation: 'What a party, man! It\'s crazy!' },
      { speaker: 'B', serbian: 'Da, ali pazi na brata. Pijan je.', translation: 'Yes, but watch out for your brother. He is drunk.' },
      { speaker: 'A', serbian: 'Jebiga, previše rakije.', translation: 'Oh well, too much rakija.' },
      { speaker: 'B', serbian: 'Sutra ga čeka mamurluk.', translation: 'A hangover is waiting for him tomorrow.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // DAILY LIFE
  // ═══════════════════════════════════════════════
  'daily-1': {
    scenario: "It's Monday morning in Belgrade. You describe your morning routine to your Serbian language partner over coffee. Wake up, shower, coffee, commute — let's talk about it in Serbian!",
    vocabulary: [
      { word: 'Buđim se', pronunciation: 'BOO-jeem seh', translation: 'I wake up', example: 'Buđim se u sedam.' },
      { word: 'Tuširam se', pronunciation: 'too-SHEE-ram seh', translation: 'I shower', example: 'Tuširam se ujutru.' },
      { word: 'Pijem kafu', pronunciation: 'PEE-yem KAH-foo', translation: 'I drink coffee', example: 'Pijem kafu svako jutro.' },
      { word: 'Kupatilo', pronunciation: 'koo-PAH-tee-loh', translation: 'Bathroom', example: 'Kupatilo je zauzeto.' },
      { word: 'Posao', pronunciation: 'POH-sa-oh', translation: 'Work / Job', example: 'Idem na posao u osam.' },
      { word: 'Umoran/Umorna sam', pronunciation: 'OO-moh-ran/OO-moh-rna sam', translation: 'I am tired (m/f)', example: 'Umoran sam, loše sam spavao.' },
    ],
    grammarNote: {
      title: 'Reflexive Verbs with "-se"',
      body: 'Many Serbian daily verbs use "-se": "buđim se" (I wake up), "tuširam se" (I shower), "oblačim se" (I get dressed). The "-se" means the action is done to yourself. Don\'t forget it — "budim" alone doesn\'t make sense here.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se buđiš obično?', translation: 'What time do you usually wake up?' },
      { speaker: 'B', serbian: 'U šest i po. Umoran sam uvek.', translation: 'At 6:30. I\'m always tired.' },
      { speaker: 'A', serbian: 'Piješ li kafu ujutru?', translation: 'Do you drink coffee in the morning?' },
      { speaker: 'B', serbian: 'Naravno! Bez kafe ne mogu na posao.', translation: 'Of course! I can\'t go to work without coffee.' },
    ],
  },

  'daily-2': {
    scenario: "Your Serbian friend is giving you a tour of their apartment in Novi Beograd. They name every room and object — you need to follow along and ask questions about what you see!",
    vocabulary: [
      { word: 'Kuća / Stan', pronunciation: 'KOO-cha / stan', translation: 'House / Apartment', example: 'Živim u stanu u centru.' },
      { word: 'Dnevna soba', pronunciation: 'DNEV-na SOH-ba', translation: 'Living room', example: 'Dnevna soba je velika.' },
      { word: 'Kuhinja', pronunciation: 'KOO-hee-nyah', translation: 'Kitchen', example: 'Kuhinju koristim svaki dan.' },
      { word: 'Prozor', pronunciation: 'PROH-zor', translation: 'Window', example: 'Otvori prozor, molim te.' },
      { word: 'Vrata', pronunciation: 'VRAH-ta', translation: 'Door', example: 'Zatvori vrata, hvala.' },
      { word: 'Gledam televiziju', pronunciation: 'GLEH-dam teh-leh-VEE-zee-yoo', translation: 'I am watching TV', example: 'Gledam televiziju svake večeri.' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Ovo je dnevna soba. Sviđa ti se?', translation: 'This is the living room. Do you like it?' },
      { speaker: 'B', serbian: 'Da, lepo je! Veliki prozori.', translation: 'Yes, it\'s nice! Big windows.' },
      { speaker: 'A', serbian: 'A tamo je kuhinja i kupatilo.', translation: 'And over there is the kitchen and bathroom.' },
      { speaker: 'B', serbian: 'Odličan stan! Koliko si ovde?', translation: 'Great apartment! How long have you been here?' },
    ],
  },

  'daily-3': {
    scenario: "First day at a Belgrade co-working space. You introduce yourself to colleagues, explain what you do, and try to understand their work schedules — in Serbian!",
    vocabulary: [
      { word: 'Radim u…', pronunciation: 'RAH-deem oo', translation: 'I work in / at…', example: 'Radim u kancelariji.' },
      { word: 'Kancelarija', pronunciation: 'kan-tse-LAH-ree-ya', translation: 'Office', example: 'Kancelarija je u centru.' },
      { word: 'Sastanak', pronunciation: 'SAH-sta-nak', translation: 'Meeting', example: 'Imam sastanak u deset.' },
      { word: 'Učim srpski', pronunciation: 'OO-cheem SRP-skee', translation: 'I study Serbian', example: 'Učim srpski već tri meseca.' },
      { word: 'Škola', pronunciation: 'SHKOH-la', translation: 'School', example: 'Škola je blizu.' },
      { word: 'Odmor', pronunciation: 'OD-mor', translation: 'Break / Holiday', example: 'Kada je odmor?' },
    ],
    grammarNote: {
      title: 'Present Tense "Raditi" (to work)',
      body: 'Ja radim (I work), Ti radiš (You work), On/Ona radi (He/She works), Mi radimo (We work), Vi radite (You all work), Oni rade (They work). Serbian verbs change endings — learn these patterns.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Čime se baviš?', translation: 'What do you do (for work)?' },
      { speaker: 'B', serbian: 'Radim u IT kompaniji. A ti?', translation: 'I work in an IT company. And you?' },
      { speaker: 'A', serbian: 'Ja sam slobodnjak. I učim srpski.', translation: 'I\'m a freelancer. And I\'m learning Serbian.' },
      { speaker: 'B', serbian: 'Super! Srpski je težak, znam.', translation: 'Cool! Serbian is hard, I know.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // EMOTIONS
  // ═══════════════════════════════════════════════
  'emotions-1': {
    scenario: "Your Serbian friend calls to check in. They ask how you're feeling after your first week in Belgrade. Time to express emotions — beyond just 'dobro'!",
    vocabulary: [
      { word: 'Srećan/Srećna sam', pronunciation: 'SREH-chan/SREH-chna sam', translation: 'I am happy (m/f)', example: 'Srećna sam što sam ovde.' },
      { word: 'Tužan/Tužna sam', pronunciation: 'TOO-zhan/TOO-zhna sam', translation: 'I am sad (m/f)', example: 'Tužan sam što odlazim.' },
      { word: 'Ljut/Ljuta sam', pronunciation: 'lyoot/LYOO-ta sam', translation: 'I am angry (m/f)', example: 'Ljuta sam na njega.' },
      { word: 'Volim te', pronunciation: 'VOH-leem teh', translation: 'I love you', example: 'Volim te, mama.' },
      { word: 'Nedostaješ mi', pronunciation: 'neh-DOH-sta-yesh mee', translation: 'I miss you', example: 'Nedostaješ mi svaki dan.' },
      { word: 'Usamljen/Usamljena sam', pronunciation: 'oo-SAM-lyen/…na sam', translation: 'I am lonely (m/f)', example: 'Malo sam usamljen u novom gradu.' },
    ],
    grammarNote: {
      title: 'Gender Agreement in Adjectives',
      body: 'Serbian adjectives change based on the gender of the subject. "Srećan sam" (I am happy — male), "Srećna sam" (I am happy — female). When learning, always learn both forms — they differ by the ending.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Kako se osećaš?', translation: 'How are you feeling?' },
      { speaker: 'B', serbian: 'Srećan sam ali malo usamljen.', translation: 'I am happy but a bit lonely.' },
      { speaker: 'A', serbian: 'Razumem te. Nedostajiš mi kad nisi tu.', translation: 'I understand you. I miss you when you\'re not here.' },
      { speaker: 'B', serbian: 'Hvala. I ti meni nedostaješ.', translation: 'Thanks. I miss you too.' },
    ],
  },

  'emotions-2': {
    scenario: "Over dinner, your Serbian friends debate whether Belgrade is the best city in Europe. You need to express your opinion, agree, disagree — in Serbian!",
    vocabulary: [
      { word: 'Mislim da…', pronunciation: 'MEES-leem da', translation: 'I think that…', example: 'Mislim da je Beograd sjajan.' },
      { word: 'Po mom mišljenju', pronunciation: 'poh mohm MEESH-lye-nyoo', translation: 'In my opinion', example: 'Po mom mišljenju, Beograd je pun života.' },
      { word: 'Slažem se', pronunciation: 'SLAH-zhem seh', translation: 'I agree', example: 'Slažem se s tobom.' },
      { word: 'Ne slažem se', pronunciation: 'neh SLAH-zhem seh', translation: 'I disagree', example: 'Ne slažem se, brate.' },
      { word: 'Možda', pronunciation: 'MOZH-da', translation: 'Maybe / Perhaps', example: 'Možda imaš pravo.' },
      { word: 'Ne znam', pronunciation: 'neh znam', translation: 'I don\'t know', example: 'Ne znam, to je teško pitanje.' },
    ],
    dialogue: [
      { speaker: 'A', serbian: 'Mislim da je Beograd najbolji grad na svetu!', translation: 'I think Belgrade is the best city in the world!' },
      { speaker: 'B', serbian: 'Ne slažem se baš. Ali je odličan.', translation: 'I don\'t quite agree. But it is excellent.' },
      { speaker: 'A', serbian: 'Po mom mišljenju, nema boljeg noćnog života.', translation: 'In my opinion, there\'s no better nightlife.' },
      { speaker: 'B', serbian: 'Tu se slažem! To je istina.', translation: 'I agree on that! That\'s true.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // WEATHER
  // ═══════════════════════════════════════════════
  'weather-1': {
    scenario: "You and your Serbian friend are planning a day trip to Fruška Gora mountain. First, you need to check the weather and talk about what to expect — in Serbian!",
    vocabulary: [
      { word: 'Kakvo je vreme?', pronunciation: 'KAK-voh yeh VREH-meh', translation: 'What\'s the weather like?', example: 'Kakvo je vreme danas?' },
      { word: 'Pada kiša', pronunciation: 'PAH-da KEE-sha', translation: 'It is raining', example: 'Pada kiša, uzmi kišobran.' },
      { word: 'Sunčano', pronunciation: 'SOON-cha-noh', translation: 'Sunny', example: 'Sutra će biti sunčano.' },
      { word: 'Hladno je', pronunciation: 'HLAD-noh yeh', translation: 'It is cold', example: 'Hladno je, obuci jaknu.' },
      { word: 'Sneg', pronunciation: 'sneg', translation: 'Snow', example: 'Pada sneg! Divno!' },
      { word: 'Oblačno', pronunciation: 'OB-lach-noh', translation: 'Cloudy', example: 'Malo je oblačno ali neće padati.' },
    ],
    culturalTip: "Belgrade weather is extreme — scorching summers (40°C+) and cold, snowy winters. Locals complain about both equally. Joining in with 'Strašna vrućina!' (terrible heat!) or 'Pakao od zime!' (hell of a winter!) immediately makes you one of them.",
    dialogue: [
      { speaker: 'A', serbian: 'Kakvo je vreme sutra na Fruškoj gori?', translation: 'What\'s the weather like tomorrow on Fruška Gora?' },
      { speaker: 'B', serbian: 'Oblačno ujutru, ali posle podne sunčano.', translation: 'Cloudy in the morning, but sunny in the afternoon.' },
      { speaker: 'A', serbian: 'Hoće li padati kiša?', translation: 'Will it rain?' },
      { speaker: 'B', serbian: 'Verovatno ne. Ali ponesi jaknu — hladno je gore.', translation: 'Probably not. But bring a jacket — it\'s cold up there.' },
    ],
  },

  'weather-2': {
    scenario: "Someone asks you what your favourite season is and what you do during each one. A great chance to talk about Serbian seasons — and share some seasonal culture!",
    vocabulary: [
      { word: 'Proleće', pronunciation: 'proh-LEH-cheh', translation: 'Spring', example: 'U proleće cveća i kafane.' },
      { word: 'Leto', pronunciation: 'LEH-toh', translation: 'Summer', example: 'Leto u Beogradu je haotično.' },
      { word: 'Jesen', pronunciation: 'YEH-sen', translation: 'Autumn / Fall', example: 'Jesen je najlepše doba godine.' },
      { word: 'Zima', pronunciation: 'ZEE-ma', translation: 'Winter', example: 'Zima je hladna ali ima čari.' },
      { word: 'Godišnje doba', pronunciation: 'goh-DEESH-nyeh DOH-ba', translation: 'Season (of the year)', example: 'Koje godišnje doba voliš?' },
      { word: 'Volim leto', pronunciation: 'VOH-leem LEH-toh', translation: 'I love summer', example: 'Volim leto jer je toplo.' },
    ],
    culturalTip: '"Exit Festival" in Novi Sad happens every July — it\'s the biggest music festival in Southeast Europe. Every Serb has a summer festival story. Saying you want to go to Exit immediately connects you with younger locals.',
    dialogue: [
      { speaker: 'A', serbian: 'Koje godišnje doba najviše voliš?', translation: 'Which season do you like the most?' },
      { speaker: 'B', serbian: 'Volim leto! Toplo je i ima puno eventi.', translation: 'I love summer! It\'s warm and there are lots of events.' },
      { speaker: 'A', serbian: 'Ja više volim jesen. Mirnije je.', translation: 'I prefer autumn. It\'s more peaceful.' },
      { speaker: 'B', serbian: 'Svako svoje! Zima mi je najgora.', translation: 'To each their own! Winter is the worst for me.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FAMILY
  // ═══════════════════════════════════════════════
  'family-1': {
    scenario: "Your Serbian host pulls out a family photo album. They start pointing at every person, naming them. You need to know all the family words or the explanation could go on all night!",
    vocabulary: [
      { word: 'Majka / Mama', pronunciation: 'MY-ka / MAH-ma', translation: 'Mother / Mum', example: 'Moja mama je doktor.' },
      { word: 'Otac / Tata', pronunciation: 'OH-tats / TAH-ta', translation: 'Father / Dad', example: 'Moj tata radi u fabrici.' },
      { word: 'Brat', pronunciation: 'brat', translation: 'Brother', example: 'Imam jednog brata.' },
      { word: 'Sestra', pronunciation: 'SES-tra', translation: 'Sister', example: 'Moja sestra je mlađa.' },
      { word: 'Baka', pronunciation: 'BAH-ka', translation: 'Grandmother', example: 'Baka pravi najboliju sarmu.' },
      { word: 'Deda', pronunciation: 'DEH-da', translation: 'Grandfather', example: 'Deda je penzioner.' },
    ],
    culturalTip: 'Serbian families are very close-knit. Sunday "ručak" (lunch) at the grandparents\' is sacred — the whole extended family gathers. "Baka\'s food" is universally considered the best food by every Serbian person without exception.',
    dialogue: [
      { speaker: 'A', serbian: 'Ko je ovo na fotografiji?', translation: 'Who is this in the photo?' },
      { speaker: 'B', serbian: 'To je moja baka. Ima 78 godina.', translation: 'That\'s my grandmother. She is 78.' },
      { speaker: 'A', serbian: 'A ovo?', translation: 'And this one?' },
      { speaker: 'B', serbian: 'Moj brat i njegova žena. Mladi su.', translation: 'My brother and his wife. They are young.' },
    ],
  },

  'family-2': {
    scenario: "You're filling out a form and someone nearby starts asking questions about your family background. Describe your family — size, ages, personalities — in Serbian!",
    vocabulary: [
      { word: 'Porodica', pronunciation: 'pohr-OH-dee-tsa', translation: 'Family', example: 'Moja porodica je mala.' },
      { word: 'Velika porodica', pronunciation: 'VEH-lee-ka poh-ROH-dee-tsa', translation: 'Big family', example: 'Srbi obično imaju veliku porodicu.' },
      { word: 'Star/Stara', pronunciation: 'star/STAH-ra', translation: 'Old (m/f)', example: 'Moj otac je star.' },
      { word: 'Mlad/Mlada', pronunciation: 'mlad/MLAH-da', translation: 'Young (m/f)', example: 'Moja sestra je mlada.' },
      { word: 'Imam braću i sestre', pronunciation: 'EE-mam BRAH-choo ee SES-treh', translation: 'I have brothers and sisters', example: 'Imam dvoje braće i jednu sestru.' },
      { word: 'Jedino dete', pronunciation: 'YEH-dee-noh DEH-teh', translation: 'Only child', example: 'Ja sam jedino dete.' },
    ],
    grammarNote: {
      title: '"Braća" — Tricky Plural',
      body: '"Brat" (one brother) → "braća" (brothers, plural). This looks like a feminine noun but it\'s actually a collective noun. "Imam dva brata" (I have two brothers) uses a different case: genitive after numbers.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Imaš li braću i sestre?', translation: 'Do you have brothers and sisters?' },
      { speaker: 'B', serbian: 'Da, imam dva brata i jednu sestru.', translation: 'Yes, I have two brothers and one sister.' },
      { speaker: 'A', serbian: 'Velika porodica! Živite zajedno?', translation: 'Big family! Do you live together?' },
      { speaker: 'B', serbian: 'Ne, svako živi posebno. Ali viđamo se svake nedelje.', translation: 'No, everyone lives separately. But we see each other every Sunday.' },
    ],
  },
};

import { LessonContent } from './contentTypes';

export const lessonContent: Record<string, LessonContent> = {

  // ═══════════════════════════════════════════════
  // GREETINGS
  // ═══════════════════════════════════════════════
  'greetings-1': {
    scenario: "You've just landed in Belgrade. A friendly local spots you looking confused at the airport and walks over with a big smile. Time to use your first Serbian words!",
    vocabulary: [
      { word: 'Zdravo', pronunciation: 'ZDRAH-voh', translation: 'Hello', example: 'Zdravo! Ja sam Marko.' },
      { word: 'Ćao', pronunciation: 'chow', translation: 'Hi / Bye (informal)', example: 'Ćao, kako si?' },
      { word: 'Doviđenja', pronunciation: 'doh-vee-JEN-ya', translation: 'Goodbye', example: 'Doviđenja i hvala!' },
      { word: 'Dobro jutro', pronunciation: 'DOH-broh YOO-troh', translation: 'Good morning', example: 'Dobro jutro, kako si?' },
      { word: 'Dobro veče', pronunciation: 'DOH-broh VEH-cheh', translation: 'Good evening', example: 'Dobro veče, svima!' },
      { word: 'Laku noć', pronunciation: 'LAH-koo noch', translation: 'Good night', example: 'Laku noć, spavaj lepo.' },
    ],
    grammarNote: {
      title: 'Formal vs Informal',
      body: '"Zdravo" works everywhere. "Ćao" (from Italian "ciao") is very casual — use it with friends. "Dobar dan" (good day) is more formal for shops or offices.',
    },
    culturalTip: "In Belgrade, locals greet with 3 cheek kisses (right-left-right). Don't be surprised — it's warm, not weird!",
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Kako si?', translation: 'Hello! How are you?' },
      { speaker: 'B', serbian: 'Dobro, hvala! A ti?', translation: "Fine, thanks! And you?" },
      { speaker: 'A', serbian: 'I ja sam dobro. Doviđenja!', translation: "I'm fine too. Goodbye!" },
      { speaker: 'B', serbian: 'Ćao!', translation: 'Bye!' },
    ],
  },

  'greetings-2': {
    scenario: "You're at a city hostel mixer. Everyone's introducing themselves. You need to tell people your name, where you're from, and ask about them — in Serbian!",
    vocabulary: [
      { word: 'Zovem se', pronunciation: 'ZOH-vem seh', translation: 'My name is…', example: 'Zovem se Ana.' },
      { word: 'Drago mi je', pronunciation: 'DRAH-goh mee yeh', translation: 'Nice to meet you', example: 'Drago mi je, ja sam Petar.' },
      { word: 'Odakle si?', pronunciation: 'oh-DAK-leh see', translation: 'Where are you from?', example: 'Odakle si? Iz Engleske?' },
      { word: 'Ja sam iz…', pronunciation: 'yah sam eez', translation: 'I am from…', example: 'Ja sam iz Londona.' },
      { word: 'Koliko imaš godina?', pronunciation: 'KOH-lee-koh EE-mash GOH-dee-na', translation: 'How old are you?', example: 'Koliko imaš godina?' },
    ],
    grammarNote: {
      title: '"Zovem se" vs "Ja sam"',
      body: 'Both mean "My name is / I am". "Zovem se" literally means "I call myself" and is the most natural way. "Ja sam Marko" (I am Marko) is also perfectly fine and often used.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Zdravo! Zovem se Emma. A ti?', translation: 'Hi! My name is Emma. And you?' },
      { speaker: 'B', serbian: 'Ja sam Nikola. Drago mi je!', translation: 'I am Nikola. Nice to meet you!' },
      { speaker: 'A', serbian: 'Odakle si, Nikola?', translation: 'Where are you from, Nikola?' },
      { speaker: 'B', serbian: 'Ja sam iz Beograda. A ti?', translation: "I'm from Belgrade. And you?" },
    ],
  },

  'greetings-3': {
    scenario: "You accidentally bump into someone on Knez Mihailova street, spilling their coffee. You need to apologise, thank them for being kind, and make a polite exit.",
    vocabulary: [
      { word: 'Molim', pronunciation: 'MOH-leem', translation: 'Please / You\'re welcome', example: 'Jedno pivo, molim.' },
      { word: 'Hvala', pronunciation: 'HVAH-lah', translation: 'Thank you', example: 'Hvala lepo!' },
      { word: 'Izvinite', pronunciation: 'eez-VEE-nee-teh', translation: 'Excuse me (formal)', example: 'Izvinite, gde je WC?' },
      { word: 'Izvini', pronunciation: 'eez-VEE-nee', translation: 'Sorry (informal)', example: 'Izvini, nije namerno!' },
      { word: 'Žao mi je', pronunciation: 'ZHAH-oh mee yeh', translation: 'I\'m sorry', example: 'Žao mi je zbog svega.' },
      { word: 'Nema na čemu', pronunciation: 'NEH-ma na CHEH-moo', translation: 'You\'re welcome / No worries', example: 'Hvala! — Nema na čemu!' },
    ],
    culturalTip: '"Hvala lepo" (thank you nicely) is more warm than just "hvala". Adding "lepo" makes any expression friendlier — Serbs appreciate the extra effort!',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite! Žao mi je!', translation: 'Excuse me! I am sorry!' },
      { speaker: 'B', serbian: 'Nema problema, stvarno.', translation: 'No problem, really.' },
      { speaker: 'A', serbian: 'Hvala lepo na razumevanju!', translation: 'Thank you very much for understanding!' },
      { speaker: 'B', serbian: 'Nema na čemu. Prijatan dan!', translation: 'Not at all. Have a nice day!' },
    ],
  },

  // ═══════════════════════════════════════════════
  // NUMBERS
  // ═══════════════════════════════════════════════
  'numbers-1': {
    scenario: "You're at a pijaca (open market) in Belgrade. The vendor shouts prices at you in Serbian. You need to understand the numbers 1–10 or you'll definitely get overcharged!",
    vocabulary: [
      { word: 'Jedan / Jedna', pronunciation: 'YEH-dan / YEH-dna', translation: 'One (m/f)', example: 'Jedan kilogram.' },
      { word: 'Dva / Dve', pronunciation: 'dvah / dveh', translation: 'Two (m/f)', example: 'Dva čaja, molim.' },
      { word: 'Tri', pronunciation: 'tree', translation: 'Three', example: 'Tri kafe, hvala.' },
      { word: 'Četiri', pronunciation: 'CHEH-tee-ree', translation: 'Four', example: 'Četiri osobe.' },
      { word: 'Pet', pronunciation: 'pet', translation: 'Five', example: 'Pet evra.' },
      { word: 'Šest / Sedam / Osam / Devet / Deset', pronunciation: 'shest / SEH-dam / OH-sam / DEH-vet / DEH-set', translation: 'Six / Seven / Eight / Nine / Ten', example: 'Deset dinara.' },
    ],
    grammarNote: {
      title: 'Gender in Numbers',
      body: '"Jedan" (1) and "Dva" (2) change based on gender. "Jedan čaj" but "Jedna kafa". "Dva stola" but "Dve stolice". Numbers 3–10 stay the same regardless of gender.',
    },
  },

  'numbers-2': {
    scenario: "You're at a currency exchange in Belgrade wanting to change some euros. The rate is quoted, the total is calculated — all in Serbian. Bigger numbers are essential now!",
    vocabulary: [
      { word: 'Jedanaest – Dvadeset', pronunciation: 'yeh-DAH-na-est … DVA-deh-set', translation: '11–20', example: 'Dvadeset evra.' },
      { word: 'Trideset', pronunciation: 'TREE-deh-set', translation: 'Thirty (30)', example: 'Trideset minuta.' },
      { word: 'Pedeset', pronunciation: 'PEH-deh-set', translation: 'Fifty (50)', example: 'Pedeset dinara.' },
      { word: 'Sto', pronunciation: 'stoh', translation: 'One hundred (100)', example: 'Sto evra, molim.' },
      { word: 'Hiljada', pronunciation: 'HEE-lya-da', translation: 'One thousand (1000)', example: 'Dve hiljade dinara.' },
      { word: 'Milion', pronunciation: 'mee-lee-ON', translation: 'One million', example: 'Milion razloga.' },
    ],
    grammarNote: {
      title: 'Building Numbers',
      body: 'Serbian numbers combine logically: 21 = "dvadeset jedan", 35 = "trideset pet". Just say the tens then the units. No "and" needed between them.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta?', translation: 'How much does it cost?' },
      { speaker: 'B', serbian: 'Sto pedeset dinara.', translation: '150 dinars.' },
      { speaker: 'A', serbian: 'Imam samo dvesta. Imate kusur?', translation: 'I only have 200. Do you have change?' },
      { speaker: 'B', serbian: 'Da, imam pedeset dinara kusur.', translation: 'Yes, I have 50 dinars change.' },
    ],
  },

  'numbers-3': {
    scenario: "You agreed to meet your new Serbian friends at Kalemegdan fortress. The problem: one says '7:30', another says 'half past seven' — in Serbian. You need to understand time!",
    vocabulary: [
      { word: 'Koliko je sati?', pronunciation: 'KOH-lee-koh yeh SAH-tee', translation: 'What time is it?', example: 'Izvinite, koliko je sati?' },
      { word: 'Sat', pronunciation: 'saht', translation: 'Hour / Clock', example: 'Jedan sat.' },
      { word: 'Minut', pronunciation: 'MEE-noot', translation: 'Minute', example: 'Pet minuta.' },
      { word: 'Pola', pronunciation: 'POH-la', translation: 'Half (past)', example: 'Pola osam = 7:30.' },
      { word: 'Podne', pronunciation: 'POD-neh', translation: 'Noon / Midday', example: 'Vidimo se u podne.' },
      { word: 'Ponoć', pronunciation: 'POH-noch', translation: 'Midnight', example: 'Ne spavam do ponoći.' },
    ],
    grammarNote: {
      title: 'How Serbian Time Works',
      body: '"Pola tri" literally means "half three" = 2:30 (halfway TO three). This is confusing at first! "U tri" = at 3:00. "U četvrt do tri" = quarter to three (2:45).',
    },
    dialogue: [
      { speaker: 'A', serbian: 'U koliko sati se vidimo?', translation: 'What time do we meet?' },
      { speaker: 'B', serbian: 'U pola osam, ispred Kalemegdana.', translation: 'At 7:30, in front of Kalemegdan.' },
      { speaker: 'A', serbian: 'Okej! Koliko je sati sada?', translation: 'Okay! What time is it now?' },
      { speaker: 'B', serbian: 'Sada je šest sati i deset minuta.', translation: 'It is now 6:10.' },
    ],
  },

  // ═══════════════════════════════════════════════
  // FOOD & DRINKS
  // ═══════════════════════════════════════════════
  'food-1': {
    scenario: "You walk into a 'kafana' (traditional Serbian tavern) on Skadarlija street. The waiter comes over and you need to order drinks and ask for the bill — all in Serbian.",
    vocabulary: [
      { word: 'Voda', pronunciation: 'VOH-da', translation: 'Water', example: 'Jedna voda, molim.' },
      { word: 'Pivo', pronunciation: 'PEE-voh', translation: 'Beer', example: 'Jedno pivo, hvala.' },
      { word: 'Kafa', pronunciation: 'KAH-fa', translation: 'Coffee', example: 'Domaća kafa, molim.' },
      { word: 'Sok', pronunciation: 'sok', translation: 'Juice', example: 'Sok od jabuke.' },
      { word: 'Račun', pronunciation: 'RAH-choon', translation: 'Bill / Check', example: 'Račun, molim!' },
      { word: 'Gladan/Gladna sam', pronunciation: 'GLAH-dan/GLAH-dna sam', translation: 'I am hungry (m/f)', example: 'Gladan sam, idemo da jedemo!' },
    ],
    culturalTip: 'In Serbian kafanas, no one will rush you out. Staying for hours with one coffee is completely normal — it\'s a cultural institution. The waiter brings the bill only when you ask for "Račun, molim!"',
    dialogue: [
      { speaker: 'A', serbian: 'Šta ćete popiti?', translation: 'What would you like to drink?' },
      { speaker: 'B', serbian: 'Jedno pivo i jednu vodu, molim.', translation: 'One beer and one water, please.' },
      { speaker: 'A', serbian: 'Izvolite. Još nešto?', translation: 'Here you go. Anything else?' },
      { speaker: 'B', serbian: 'Ne, hvala. Račun kada budete mogli!', translation: 'No, thanks. The bill when you can!' },
    ],
  },

  'food-2': {
    scenario: "Your Serbian host has invited you for a traditional Sunday lunch ('ručak'). You're sitting at a table loaded with food and need to know what everything is — and how to compliment the cook!",
    vocabulary: [
      { word: 'Ćevapi', pronunciation: 'cheh-VAH-pee', translation: 'Grilled minced meat rolls', example: 'Deset ćevapa sa lukom.' },
      { word: 'Kajmak', pronunciation: 'KAY-mak', translation: 'Creamy dairy spread', example: 'Ćevapi sa kajmakom su savršeni.' },
      { word: 'Rakija', pronunciation: 'RAH-kee-ya', translation: 'Serbian fruit brandy', example: 'Šljiva rakija je odlična.' },
      { word: 'Hleb', pronunciation: 'hleb', translation: 'Bread', example: 'Da li ima još hleba?' },
      { word: 'Ukusno', pronunciation: 'OO-koos-noh', translation: 'Delicious', example: 'Sve je ukusno, hvala!' },
      { word: 'Supa', pronunciation: 'SOO-pa', translation: 'Soup', example: 'Pileća supa je odlična.' },
    ],
    culturalTip: "Serbian hospitality is extreme — refusing food is almost rude. Say 'Ukusno!' often and your host will be thrilled. The phrase 'Domaće je uvek najbolje' (homemade is always best) will earn you a lifelong friend.",
    dialogue: [
      { speaker: 'A', serbian: 'Hajde, jedi! Ne budi stidljiv!', translation: 'Come on, eat! Don\'t be shy!' },
      { speaker: 'B', serbian: 'Sve je toliko ukusno! Šta je ovo?', translation: 'Everything is so delicious! What is this?' },
      { speaker: 'A', serbian: 'To je kajmak. Probaj sa hlebom!', translation: 'That\'s kajmak. Try it with bread!' },
      { speaker: 'B', serbian: 'Neverovatno! Nikad nisam probao.', translation: 'Incredible! I have never tried it.' },
    ],
  },

  'food-3': {
    scenario: "It's a sunny Saturday morning and you're at the Zeleni Venac market in Belgrade. Vendors are calling out prices and you want to buy fresh vegetables and fruit — in Serbian!",
    vocabulary: [
      { word: 'Koliko košta?', pronunciation: 'KOH-lee-koh KOH-shta', translation: 'How much does it cost?', example: 'Koliko košta kilogram jabuka?' },
      { word: 'Jabuka', pronunciation: 'YAH-boo-ka', translation: 'Apple', example: 'Daj mi dva kilograma jabuka.' },
      { word: 'Paradajz', pronunciation: 'pah-rah-DICE', translation: 'Tomato', example: 'Svež paradajz, molim.' },
      { word: 'Skupo', pronunciation: 'SKOO-poh', translation: 'Expensive', example: 'To je malo skupo.' },
      { word: 'Jeftino', pronunciation: 'YEF-tee-noh', translation: 'Cheap', example: 'Ovde je sve jeftino!' },
      { word: 'Kilogram', pronunciation: 'KEE-loh-gram', translation: 'Kilogram', example: 'Jedan kilogram, molim.' },
    ],
    grammarNote: {
      title: 'Useful Market Phrases',
      body: '"Dajte mi…" (Give me… formal) is the standard market phrase. "Ima li…?" (Do you have…?) is great for asking about stock. Vendors appreciate effort — even broken Serbian gets a smile.',
    },
    dialogue: [
      { speaker: 'A', serbian: 'Koliko košta kilogram paradajza?', translation: 'How much is a kilo of tomatoes?' },
      { speaker: 'B', serbian: 'Sto dvadeset dinara, gazda.', translation: '120 dinars, boss.' },
      { speaker: 'A', serbian: 'Malo skupo. Dajte mi pola kilograma.', translation: 'A bit expensive. Give me half a kilo.' },
      { speaker: 'B', serbian: 'Izvolite! Svež, direktno sa sela!', translation: 'Here you go! Fresh, straight from the village!' },
    ],
  },
};

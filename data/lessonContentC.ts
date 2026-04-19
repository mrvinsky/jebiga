import { LessonContent } from './contentTypes';

export const lessonContentC: Record<string, LessonContent> = {
  // ─── TRAVEL & HOTEL ───────────────────────────────────────────────────────
  'travel-1': {
    scenario: 'Checking in at the hotel.',
    vocabulary: [
      { word: 'Hotel', pronunciation: 'Ho-tel', translation: 'Hotel' },
      { word: 'Soba', pronunciation: 'So-ba', translation: 'Room' },
      { word: 'Rezervacija', pronunciation: 'Re-zer-va-tsi-ya', translation: 'Reservation' },
      { word: 'Ključ', pronunciation: 'Klyoo-ch', translation: 'Key' },
      { word: 'Pasoš', pronunciation: 'Pa-sosh', translation: 'Passport' }
    ],
    grammarNote: {
      title: 'I have (Imam)',
      body: '"Imam" means "I have". E.g. "Imam rezervaciju" (I have a reservation).'
    },
    culturalTip: 'In Serbia, many hotels will ask for your passport to register your stay with the police within 24 hours. The tourist tax is usually separate but small.',
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, imam rezervaciju.', translation: 'Good afternoon, I have a reservation.' },
      { speaker: 'B', serbian: 'Vaš pasoš, molim vas.', translation: 'Your passport, please.' },
      { speaker: 'A', serbian: 'Izvolite. Koji je broj sobe?', translation: 'Here you go. What is the room number?' },
      { speaker: 'B', serbian: 'Soba broj deset.', translation: 'Room number ten.' }
    ]
  },
  'travel-2': {
    scenario: 'At the airport.',
    vocabulary: [
      { word: 'Aerodrom', pronunciation: 'A-e-ro-drom', translation: 'Airport' },
      { word: 'Let', pronunciation: 'Let', translation: 'Flight' },
      { word: 'Kofer', pronunciation: 'Ko-fer', translation: 'Suitcase' },
      { word: 'Karta', pronunciation: 'Kar-ta', translation: 'Ticket' },
      { word: 'Prtljag', pronunciation: 'Prt-lyag', translation: 'Luggage' }
    ],
    grammarNote: {
      title: 'Where is... (Gde je...)',
      body: 'Use "Gde je..." + Nominative to ask where something is. E.g. "Gde je moj kofer?" (Where is my suitcase?)'
    },
    culturalTip: 'Belgrade Nikola Tesla Airport is the main international hub. Taking a taxi? Always use the official taxi voucher desk inside the arrivals terminal to avoid scams.',
    dialogue: [
      { speaker: 'A', serbian: 'Gde je moj prtljag?', translation: 'Where is my luggage?' },
      { speaker: 'B', serbian: 'Tamo, brate.', translation: 'Over there, bro.' },
      { speaker: 'A', serbian: 'Hvala, žurim na let.', translation: 'Thanks, I am hurrying for my flight.' }
    ]
  },

  // ─── SHOPPING ───────────────────────────────────────────────────────────
  'shopping-1': {
    scenario: 'Buying clothes in a store.',
    vocabulary: [
      { word: 'Majica', pronunciation: 'Ma-yi-tsa', translation: 'T-shirt' },
      { word: 'Cipele', pronunciation: 'Tsi-pe-le', translation: 'Shoes' },
      { word: 'Veličina', pronunciation: 'Ve-li-chi-na', translation: 'Size' },
      { word: 'Skupo', pronunciation: 'Sku-po', translation: 'Expensive' },
      { word: 'Jeftino', pronunciation: 'Yef-ti-no', translation: 'Cheap' }
    ],
    grammarNote: {
      title: 'How much is it?',
      body: 'To ask the price, use "Koliko košta?" (How much does it cost?)'
    },
    culturalTip: 'Haggling is generally not expected in regular stores or boutiques, but it might be acceptable at open-air markets or flea markets (Buvljak).',
    dialogue: [
      { speaker: 'A', serbian: 'Izvinite, koliko košta ova majica?', translation: 'Excuse me, how much does this t-shirt cost?' },
      { speaker: 'B', serbian: 'Hiljadu dinara.', translation: 'A thousand dinars.' },
      { speaker: 'A', serbian: 'To je malo skupo. Imate li veću veličinu?', translation: 'That is a bit expensive. Do you have a larger size?' }
    ]
  },
  'shopping-2': {
    scenario: 'Looking for a dress and heels.',
    vocabulary: [
      { word: 'Haljina', pronunciation: 'Ha-lyi-na', translation: 'Dress' },
      { word: 'Suknja', pronunciation: 'Suk-nya', translation: 'Skirt' },
      { word: 'Štikle', pronunciation: 'Shtik-le', translation: 'High heels' },
      { word: 'Lepo', pronunciation: 'Le-po', translation: 'Beautiful' },
      { word: 'Boja', pronunciation: 'Bo-ya', translation: 'Color' }
    ],
    grammarNote: {
      title: 'Gender agreement',
      body: 'Adjectives match the gender of the noun. "Lepa haljina" (beautiful dress - feminine) vs "Lep dan" (beautiful day - masculine).'
    },
    culturalTip: 'Serbian women often dress up for a night out. High heels ("štikle") and stylish dresses are very common in clubs and kafanas.',
    dialogue: [
      { speaker: 'A', serbian: 'Baš je lepa ova haljina. Da li imate crvenu boju?', translation: 'This dress is really beautiful. Do you have it in red color?' },
      { speaker: 'B', serbian: 'Samo trenutak. Da, izvolite.', translation: 'Just a moment. Yes, here you go.' },
      { speaker: 'A', serbian: 'Odlično. Gde su štikle?', translation: 'Excellent. Where are the high heels?' }
    ]
  },
  'shopping-3': {
    scenario: 'Buying men\'s clothing.',
    vocabulary: [
      { word: 'Odelo', pronunciation: 'O-de-lo', translation: 'Suit' },
      { word: 'Šorts', pronunciation: 'Shorts', translation: 'Shorts' },
      { word: 'Pantalone', pronunciation: 'Pan-ta-lo-ne', translation: 'Pants / Trousers' },
      { word: 'Jakna', pronunciation: 'Yak-na', translation: 'Jacket' },
      { word: 'Košulja', pronunciation: 'Ko-shu-lya', translation: 'Shirt' }
    ],
    grammarNote: {
      title: 'Plural clothes',
      body: 'Words like "pantalone" (pants) and "naočare" (glasses) are always plural, just like in English.'
    },
    culturalTip: 'In the summer, Belgrade gets very hot, so "šorts" (shorts) are essential for daytime walking, though you might want pants for upscale dinners.',
    dialogue: [
      { speaker: 'A', serbian: 'Tražim jedno crno odelo.', translation: 'I am looking for a black suit.' },
      { speaker: 'B', serbian: 'A pantalone i košulja?', translation: 'And pants and a shirt?' },
      { speaker: 'A', serbian: 'Da, treba mi i bela košulja.', translation: 'Yes, I also need a white shirt.' }
    ]
  }
};

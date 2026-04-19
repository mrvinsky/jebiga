import { LessonContent } from './contentTypes';

export const lessonContentD: Record<string, LessonContent> = {
  // ─── SERBIAN CULTURE ────────────────────────────────────────────────────────
  'culture-1': {
    scenario: "You're invited to a Serbian family's 'Slava' (patron saint day). It's a huge honor and a massive feast. You need to know what to say and how to act.",
    vocabulary: [
      { word: 'Slava', pronunciation: 'SLA-va', translation: 'Patron saint day', example: 'Srećna slava!' },
      { word: 'Gost', pronunciation: 'gost', translation: 'Guest', example: 'Imamo goste.' },
      { word: 'Poklon', pronunciation: 'PO-klon', translation: 'Gift', example: 'Ovo je mali poklon za vas.' },
      { word: 'Žito', pronunciation: 'ZHI-toh', translation: 'Ceremonial wheat', example: 'Da li ste uzeli žito?' },
      { word: 'Domaćin', pronunciation: 'do-MA-chin', translation: 'Host (male)', example: 'Domaćin je odličan čovek.' },
      { word: 'Domaćica', pronunciation: 'do-MA-chi-tsa', translation: 'Host (female)', example: 'Domaćica je spremila najbolju hranu.' }
    ],
    grammarNote: {
      title: 'Greeting at a Slava',
      body: 'The traditional greeting is "Srećna slava" (Happy Slava). If you are male, you will usually air-kiss your host on the cheeks three times (the traditional Serbian greeting).'
    },
    culturalTip: 'When entering a Serbian home, it is customary to take off your shoes unless the host explicitly tells you "ne izuvaj se". The "Domaćica" (female host) is the backbone of the Slava and usually prepares all the incredible food. Always compliment her cooking—it\'s crucial! Also, always bring a small gift: usually wine, coffee, or chocolates.',
    dialogue: [
      { speaker: 'A', serbian: 'Dobar dan, srećna slava domaćine! Srećna slava domaćice!', translation: 'Good afternoon, happy Slava to the host and hostess!' },
      { speaker: 'B', serbian: 'Hvala! Dobrodošli. Izvolite uđite.', translation: 'Thank you! Welcome. Please come in.' },
      { speaker: 'A', serbian: 'Ovo je mali poklon za vas. Domaćice, hrana miriše savršeno!', translation: 'This is a small gift for you. Hostess, the food smells perfect!' },
      { speaker: 'B', serbian: 'Nije trebalo, hvala puno! Sedite, hoćete li nešto da popijete?', translation: 'You shouldn\'t have, thanks a lot! Have a seat, would you like something to drink?' }
    ]
  },
  'culture-2': {
    scenario: "It is time for the traditional toast. A shot glass of Rakija is placed in front of you. You must follow the 'Rakija Rules'.",
    vocabulary: [
      { word: 'Rakija', pronunciation: 'RA-ki-ya', translation: 'Fruit brandy', example: 'Domaća rakija je najbolja.' },
      { word: 'Šljivovica', pronunciation: 'SHLYI-vo-vi-tsa', translation: 'Plum brandy', example: 'Šljivovica je nacionalno piće.' },
      { word: 'Živeli', pronunciation: 'ZHI-ve-li', translation: 'Cheers', example: 'Živeli, za zdravlje!' },
      { word: 'Oči', pronunciation: 'O-chi', translation: 'Eyes', example: 'Gledaj me u oči.' },
      { word: 'Zdravlje', pronunciation: 'ZDRAV-lye', translation: 'Health', example: 'U tvoje zdravlje!' }
    ],
    grammarNote: {
      title: 'Toasting',
      body: '"Živeli" means "Let\'s live/Cheers". "U zdravlje" or "Za zdravlje" is also used to toast to one\'s health.'
    },
    culturalTip: 'When toasting with Rakija, you MUST look the person directly in the eyes as your glasses clink. To not do so is considered rude and bad luck. Don\'t shoot it like tequila; sip it slowly and appreciate the aroma.',
    dialogue: [
      { speaker: 'A', serbian: 'Da nazdravimo! U tvoje zdravlje.', translation: 'Let us toast! To your health.' },
      { speaker: 'B', serbian: 'Živeli! Gledaj me u oči, to je pravilo.', translation: 'Cheers! Look me in the eyes, that is the rule.' },
      { speaker: 'A', serbian: 'Živeli! Ooh, jaka je!', translation: 'Cheers! Ooh, it is strong!' },
      { speaker: 'B', serbian: 'Prava domaća šljivovica. Polako pij.', translation: 'Real homemade plum brandy. Drink it slowly.' }
    ]
  },
  'culture-3': {
    scenario: "You are experiencing Kafana culture. It is not just a restaurant or a pub; it is the center of social life, sorrows, and celebrations in Serbia.",
    vocabulary: [
      { word: 'Kafana', pronunciation: 'ka-FA-na', translation: 'Traditional tavern', example: 'Idemo u kafanu večeras.' },
      { word: 'Muzika', pronunciation: 'MU-zi-ka', translation: 'Music', example: 'Živa muzika je obavezna.' },
      { word: 'Bakšiš', pronunciation: 'BAK-shish', translation: 'Tip', example: 'Ostavi bakšiš za muziku.' },
      { word: 'Pesma', pronunciation: 'PES-ma', translation: 'Song', example: 'Ovo je moja omiljena pesma.' },
      { word: 'Pevač', pronunciation: 'PE-vach', translation: 'Singer', example: 'Pevač ima super glas.' }
    ],
    grammarNote: {
      title: 'Asking for a song',
      body: '"Može pesma?" (Can we get a song?). You can also say "Daj pesmu za dušu" (Give me a song for the soul).'
    },
    culturalTip: 'In a real Kafana, musicians rove from table to table playing acoustic instruments. If they play at your table, it is customary to give them a "bakšiš" (tip), often by tucking money into their accordion or violin strings.',
    dialogue: [
      { speaker: 'A', serbian: 'Ova kafana ima odličnu atmosferu.', translation: 'This kafana has a great atmosphere.' },
      { speaker: 'B', serbian: 'Slušaj muziku, stižu nam svirači.', translation: 'Listen to the music, the players are coming to us.' },
      { speaker: 'A', serbian: 'Može jedna pesma, za dušu?', translation: 'Can we get a song, for the soul?' },
      { speaker: 'B', serbian: 'Kako da ne. Za vas, može sve.', translation: 'Of course. For you, anything is possible.' }
    ]
  }
};

# Jebiga: Learn Serbian the Real Way 🦅

Jebiga is an edgy, Gamified Serbian language learning web application built with **Next.js 14**, **Firebase**, and **Stripe**. Move past the boring textbook "Dobar dan" and learn how actual Serbs speak, including Street Mode slang, Rakija rules, and Kafana survival.

## 🚀 Features

- **Gamified Lesson Map**: Inspired by Duolingo, featuring linear progression and XP tracking.
- **Street Mode**: Toggle between formal Serbian and authentic street slang with a single switch. Neon styling and authentic dialogue.
- **Jebiga Pro Paywall**: Stripe integration (or custom logic) to lock premium lessons (Culture, Emotions, Daily Life).
- **AI-Powered Evaluation**: Dynamic validation of answers to allow for flexible typing and synonyms rather than rigid comparisons.
- **Firebase Auth & Firestore**: Complete user profile management, XP progress saving, streaks, and level ups.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database / Auth**: Firebase (Firestore, Firebase Authentication)
- **Styling**: Vanilla CSS with dynamic Javascript scoping
- **Payments**: Placeholder ready for Stripe Checkout API
- **Deployment**: Firebase Hosting (Web Frameworks support)

## 📦 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mrvinsky/jebiga.git
   cd trserb
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env.local` file with your Firebase and AI keys.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## 💡 The Curriculum

- **Free Trial**: Greetings, Numbers, Food, Directions, and Street Slang basics.
- **Jebiga Pro**: Weather, Emotions, Family, Scenarios, Shopping, and deep dives into Serbian Culture like the *Slava* and *Kafana*.

*Srećno učenje!* 🇷🇸

# Jebiga: Learn Serbian the Real Way 🦅🇷🇸

Jebiga is an edgy, gamified Serbian language learning application built for those who want to skip the textbook fluff and dive straight into how actual Serbs speak. From **Street Mode** slang to **Kafana** survival rules, Jebiga offers an authentic Balkan experience powered by **Next.js 15**, **Firebase**, and **AI**.

## 🚀 Key Features

- **🗺️ Gamified Lesson Path**: A non-linear learning map where you unlock categories, earn XP, and maintain streaks.
- **⚡ Street Mode**: A dedicated toggle that transforms the UI and content into "Street Mode"—neon aesthetics, raw slang, and the real soul of Belgrade.
- **🌐 Full Bilingual Support (TR/EN)**: Switch between Turkish and English interfaces instantly. Whether you are learning in Turkish or English, the curriculum adapts to your preference.
- **🧔🏻‍♂️ Kafana Uncle (Dayı) AI**: A personalized AI tutor that understands street jargon. Ask questions, practice dialogues, or just chat with the "Uncle" about Serbian culture.
- **🔥 Real-time Sync**: Powered by Firestore `onSnapshot`, your XP, level, and streaks update instantly across all components without refreshing.
- **💎 Jebiga Pro**: Unlock premium tiers for deep dives into Serbian Nightlife, Balkan Drama, Advanced Grammar, and exclusive AI features.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **State Management**: React Context with Real-time Firebase Sync
- **Database & Auth**: Firebase (Firestore, Authentication)
- **AI Engine**: Gemini AI / OpenAI integration for dynamic corrections and Kafana Bot
- **Styling**: Vanilla CSS with modern Glassmorphism and Neon design systems
- **Payments**: Stripe Checkout integration for Pro subscriptions

## 📦 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mrvinsky/jebiga.git
   cd trserb
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Environment Variables**: Create a `.env.local` and add your Firebase credentials and AI API keys.
4. **Launch**:
   ```bash
   npm run dev
   ```
5. **Explore**: Open [http://localhost:3000](http://localhost:3000) and start your journey to becoming a *Pravi Lik*.

## 💡 Curriculum Highlights

- **The Basics**: Greetings, Numbers, and Essential Food.
- **Street & Social**: Slang 101, Nightlife on the *Splavs*, and Belgrade City guides.
- **Survival**: Health & Emergencies, Directions, and Phone Communication.
- **Pro Tiers**: Balkan Emotions, Deep Grammar, and the Art of the *Kafana*.

---
*Srećno učenje, brate!* 🇷🇸🔥  
*Design & Development by [mr.vinsky](https://www.instagram.com/mr.vinsky/)*

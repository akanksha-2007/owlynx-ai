# 🦉 OWLYNX AI
### Your Voice. Your Intelligence. Your Confidence.

**An AI-powered multilingual interview and communication coach that helps students prepare for interviews, express their knowledge naturally, and build confidence.**

<p align="center">
  <img src="https://img.shields.io/badge/Project-OWLYNX%20AI-6C63FF?style=for-the-badge" alt="OWLYNX AI" />
  <img src="https://img.shields.io/badge/Status-Prototype-orange?style=for-the-badge" alt="Prototype" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

---

## 🌟 The Problem

Not every student struggles with knowledge. Sometimes, the real challenge is expressing that knowledge confidently during an interview.

Many students understand technical concepts but feel less comfortable communicating in English. Traditional interview preparation platforms often fail to accommodate natural multilingual communication.

**What if students could practise interviews in the language they are most comfortable with?**

That's where OWLYNX AI comes in.

## 💡 Our Solution

OWLYNX AI is designed to make interview preparation more accessible, interactive, and personalized.

It aims to help students practise technical, HR, and behavioral interviews through multilingual questions, voice-based responses, speech recognition, and intelligent feedback.

Our core philosophy:

> Technical knowledge should matter more than perfect English fluency.

## ✨ Key Features

### Currently implemented prototype

- **Multilingual question bank:** English, Hindi, and Hinglish questions.
- **Personalized practice setup:** Select interview category, difficulty, and language.
- **Dynamic question selection:** Randomized questions with repetition avoidance during practice.
- **Voice recording:** Record spoken answers directly through the browser.
- **Audio playback:** Review recorded responses.
- **Backend API:** Express-based REST API with request validation.

### In development

- **AI Speech Recognition:** Gnani Prisma integration for multilingual and code-mixed speech transcription.
- **Intelligent Answer Evaluation:** Assess technical accuracy, relevance, and completeness.
- **Personalized Feedback:** Identify strengths and suggest improvements.
- **Adaptive Interviews:** Generate contextual follow-up questions.
- **Performance Analytics:** Track progress and identify improvement areas.
- **AI Voice Feedback:** Deliver spoken feedback through text-to-speech.

## 🧠 What Makes OWLYNX Different?

OWLYNX AI focuses on the way students naturally communicate.

For example:

*"Maine Java use kiya hai aur Spring Boot mein REST APIs develop ki hain."*

Instead of treating code-mixed communication as a weakness, our vision is to understand the technical meaning behind the response.

The platform aims to evaluate:
- Conceptual understanding.
- Technical correctness.
- Relevance of the answer.
- Explanation and problem-solving ability.

English fluency and accent should not be mistaken for technical competence.

## 🛠️ Technology Stack

| Component | Technology |
|---|---|
| Frontend | React.js |
| Development Server | Vite |
| Styling | Tailwind CSS |
| Backend | Node.js |
| API Framework | Express.js |
| Request Validation | Zod |
| Voice Recording | Browser MediaRecorder API |
| Audio Processing | FFmpeg |
| Speech Recognition Integration | Gnani Prisma STT |
| Version Control | Git and GitHub |

*Note: Speech recognition integration and AI evaluation are still being completed and tested.*

## 🏗️ Project Architecture

```text
OWLYNX-AI/
│
├── client/
│   └── src/
│       ├── components/
│       │   ├── common/
│       │   ├── dashboard/
│       │   ├── interview/
│       │   ├── voice/
│       │   └── feedback/
│       │
│       ├── pages/
│       ├── hooks/
│       ├── services/
│       ├── context/
│       └── utils/
│
├── server/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── data/
│       ├── middleware/
│       ├── routes/
│       ├── services/
│       │   └── gnani/
│       └── validators/
│
├── README.md
└── .gitignore
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm
- Git
- Modern web browser
- Microphone access

### 1. Clone the repository

```bash
git clone https://github.com/akanksha-2007/owlynx-ai.git

cd owlynx-ai
```

### 2. Install and run the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:

```env
PORT=5000
NODE_ENV=development

CLIENT_ORIGINS=http://localhost:5173,http://localhost:5174

GNANI_API_KEY=your_api_key_here
```

Keep your actual API key private. Never commit your `.env` file.

Start the backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

### 3. Install and run the frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## 🔄 How It Works

```text
User
  |
  v
Interview Setup
  |
  v
Select Category, Difficulty & Language
  |
  v
Interview Question
  |
  v
Record Spoken Answer
  |
  v
Audio Processing & Speech Recognition
  |
  v
AI Evaluation (Planned)
  |
  v
Personalized Feedback (Planned)
```

## 🚀 Roadmap

- [x] React + Vite frontend foundation.
- [x] Express backend foundation.
- [x] Multilingual interview question bank.
- [x] Category and difficulty-based question selection.
- [x] Browser-based voice recording.
- [ ] Complete and test Gnani Prisma speech-to-text integration.
- [ ] Implement AI-powered answer evaluation.
- [ ] Add personalized feedback.
- [ ] Develop adaptive follow-up questions.
- [ ] Integrate text-to-speech feedback.
- [ ] Add performance analytics and progress tracking.
- [ ] Explore resume-based interview preparation.
- [ ] Expand support for additional Indian languages.

## 🔐 Security & Privacy

- API credentials are managed through backend environment variables.
- Audio uploads are validated by the backend.
- Request validation helps prevent invalid input.
- API credentials should never be exposed in frontend code.
- Do not commit private keys, tokens, or `.env` files.

## 🎯 Our Vision

We believe every student has the potential to succeed, regardless of their language or communication background.

OWLYNX AI aims to turn interview preparation into an inclusive learning experience where students can practise naturally, understand their weaknesses, and grow with confidence.

**Because your voice deserves to be heard, and your knowledge deserves to be recognized.**

---

<p align="center">
  <strong>🦉 OWLYNX AI</strong><br/>
  Your Voice. Your Intelligence. Your Confidence.
</p>

<p align="center">
  Built with ❤️ for a more inclusive future of interview preparation.
</p>

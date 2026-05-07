# lowkey cooked

> running on vibes, sleep deprivation, and bad decisions

A chaotic, clever web app built with React + Vite + TypeScript + TailwindCSS v4 (frontend) and Node.js + Express (backend).

## Setup

### Backend (port 3002)

```bash
cd server
npm install
npm start
```

### Frontend (port 5173)

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173

## Stack

- React 18 + Vite 5 + TypeScript
- TailwindCSS v4 (@tailwindcss/vite)
- React Router v6
- Node.js + Express
- cors

## API Endpoints

- `GET /api/jokes` — 46 jokes
- `GET /api/verdict?sleep=N&drama=N&motivation=N&confidence=N` — daily verdict
- `GET /api/football/banter` — Arsenal vs United banter

## Pages

- `/` — Home: Hero, Life Settings, Daily Verdict, Chaos Feed, Random Joke
- `/chaos` — Chaos Mode: Sleep Tracker, Hydration Card, Talking Stage Simulator
- `/roast` — Roast Dashboard: Football Trauma, Chaos Feed, Random Joke
- `/settings` — Fake settings with toggles, dropdowns, sliders, toast
- `/about` — App origin story

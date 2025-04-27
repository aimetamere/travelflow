# Hi, i'm Nicolas de Haan 👋

👀 I am a student a Code University of applied science in Berlin, transitioning from a background in business management. I’m now channeling my problem-solving and analytical skills into web development.
I'm passionate about building real-time, interactive web applications using Next.js, Convex, TypeScript, and Three.js. I began my programming journey by learning the fundamentals of C, which grounded me in low-level logic and performance. Over time, my curiosity led me to explore 3D web development, and I'm now focused on innovating in that space through projects like TravelFlow or a 3D visualisation book. 

## TravelFlow 🌍✈️

Plan your next adventure, together — on a real-time collaborative canvas.

TravelFlow is a modern, real-time travel planning app where friends, teams, or solo adventurers can brainstorm, organize, and map out their trips visually and collaboratively.

Built with 💻 Next.js, TypeScript, Liveblocks, and a scalable whiteboard architecture — TravelFlow redefines how you dream and design your journeys.

# 🚀 Features

* 🧩 Collaborative Canvas: Brainstorm and build travel plans together, live.

* 🗺️ Modular Boards: Create boards for each trip or event — organized your way.

* 🛫 Real-Time Presence: See who's online, collaborating with you, in real-time.

* 🔥 Dynamic Rooms: Each board has its own live space (powered by Liveblocks).

* 📦 Scalable Architecture: Designed for future features (bookings, travel APIs, etc.)

# 📂 Project Structure

```
travelflow/
├── app/
│   ├── board/
│   │   └── [boardId]/
│   │       └── page.tsx      # Dynamic board page (live collaboration per board)
│   └── layout.tsx             # App-wide layout (navigation, providers, etc.)
│   └── page.tsx               # Home page
│
├── components/
│   └── BoardCanvas.tsx        # Canvas component for drawing / planning
│   └── PresenceAvatars.tsx    # Show users online
│   └── Toolbar.tsx            # Controls (tools, zoom, etc.)
│
├── lib/
│   └── liveblocks-config.tsx  # Liveblocks client and context setup
│
├── public/                    # Static assets (images, icons)
│
├── styles/                    # Global styles (Tailwind or custom CSS)
│
├── .env.local                  # Environment variables (API keys, etc.)
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation (you're here)
```

# 📦 Tech Stack

* Next.js — powerful React framework for scalable web apps

* TypeScript — type safety for better code and faster development

* Liveblocks — real-time collaboration made simple

* TailwindCSS (planned) — rapid, clean UI design

* Convex (planned) — real-time backend database

# 📚 Getting Started

Clone the repository:
```
git clone https://github.com/aimetamere/travelflow.git
cd travelflow
```

Install dependencies:
```
npm install
```

Create a .env.local file with your environment variables (for example, your Liveblocks public key):
```
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_public_key_here
```

Run the development server:
```
npm run dev
```

Visit http://localhost:3000 to see TravelFlow in action 🚀

# 🎯 Roadmap

 Liveblocks integration (basic presence, dynamic rooms)

 Full whiteboard canvas (zooming, panning, elements)

 User authentication

 API integrations (flights, accommodations)

 Optimized mobile view

 Public/Private trip sharing

 Offline mode (stretch goal)

(not done)
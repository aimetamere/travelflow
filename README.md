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

# 📚 Project Roadmap: Collaborative Travel Canvas

This document outlines the major milestones and development goals for the Collaborative Travel Canvas project.

---

## 📅 Timeline Overview

| Time Frame   | Key Goals                                           |
|--------------|-----------------------------------------------------|
| 0–6 months   | - MVP ready<br>- User Testing<br>- Core UI finalized |
| 6–18 months  | - API Integration<br>- AI Travel Optimizer<br>- Beta Community |
| 18–36 months | - Public Launch<br>- Mobile App<br>- International Expansion |

---

## 🔹 Immediate Goals (0–6 Months)
- Finalize Core UI/UX Prototype
- Develop MVP (Minimum Viable Product)
- Conduct User Testing with early users
- Refine collaborative features and basic canvas tools

## 🔹 Mid-Term Goals (6–18 Months)
- Integrate APIs for booking and travel services (Booking.com, Airbnb, Google Flights)
- Develop an AI Travel Optimizer to enhance user planning
- Build and manage a Beta Community for extended user feedback

## 🔹 Long-Term Goals (18–36 Months)
- Launch Public Beta Version
- Develop Native Mobile Applications (iOS and Android)
- Expand internationally with multilingual support and local partnerships

---

## 🚀 Vision
Create a seamless, enjoyable, and intelligent travel planning experience that empowers individuals and groups to plan trips collaboratively — combining the flexibility of a canvas board with the power of AI and integrated travel services.

---

# 🧑‍💻 Contributing

We all ❤️ contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your input makes TravelFlow better for everyone. Here’s how to get started:

1. Fork the Repository: Click the "Fork" button on GitHub.

2. Create a Branch: git checkout -b feature/your-awesome-feature.

3. Commit Changes: git commit -m "Add something cool".

4. Push to Your Fork: git push origin feature/your-awesome-feature.

5. Open a Pull Request: Describe your changes and submit!

# 📜 License

TravelFlow is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit—just give credit where credit’s due!

# 🌈 Why TravelFlow?

Travel should be about making memories, not managing chaos. TravelFlow takes the stress out of planning so you can focus on the joy of discovery. Whether you're hiking Machu Picchu, sipping coffee in Paris, or road-tripping across Route 66, TravelFlow is your trusty sidekick.

Join us in building the ultimate travel planning tool. Let’s make every journey unforgettable! 🌏

# 📬 Contact

Got questions, ideas, or just want to talk travel? Reach out!

* GitHub Issues: Report bugs or suggest features here.
* Email: [nicolas.dehaan@icloud.com]. 


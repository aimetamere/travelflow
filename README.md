## Hi, i'm Nicolas de Haan 👋

👀 I am a student a Code University of applied science in Berlin, transitioning from a background in business management. I’m now channeling my problem-solving and analytical skills into web development.
I'm passionate about building real-time, interactive web applications using Next.js, Convex, TypeScript, and Three.js. I began my programming journey by learning the fundamentals of C, which grounded me in low-level logic and performance. Over time, my curiosity led me to explore 3D web development, and I'm now focused on innovating in that space through projects like TravelFlow or a 3D visualisation book. 

## TravelFlow 🌍✈️

# A Real-Time Collaborative Travel Planning Web App

Welcome to TravelFlow, your go-to platform for interactive, real-time travel planning. Whether you’re traveling solo or with friends, plan, organize, and share your journey all in one collaborative space. Built with Next.js, TypeScript, and Convex, TravelFlow brings a smooth, engaging, and modular web experience to life, all while focusing on scalable and real-time collaboration.

## 🚀 Project Overview

TravelFlow is designed to provide a rich, interactive whiteboard experience, where users can plan their trips, organize their boards, and collaborate with others in real time. From brainstorming itineraries to sketching maps, TravelFlow brings travel planning to a whole new level.

The app’s architecture emphasizes modularity, scalability, and seamless collaboration, leveraging Convex for real-time updates, while offering an intuitive interface that makes planning feel like a breeze.

## 🛠️ Development

# Get Started Locally

Clone this repo and follow the steps to run TravelFlow locally on your machine: https://github.com/aimetamere/travelflow.git

```bash
# Start Convex backend
npx convex dev

# In a new terminal, start Next.js frontend
npm run dev
```

Open http://localhost:3000 in your browser to see the app in action.

## Fonts and Styling

TravelFlow uses the Geist font family, which is automatically optimized and loaded using next/font.

## 🔑 Key Features

# Real-Time Collaboration:

Sync your boards and collaborate with others in real time using Convex. Make your travel plans as dynamic and interactive as the world itself.

# Modular and Scalable Components:

A flexible layout for boards and dashboards allows you to scale as your projects grow. Reusable components ensure consistency across the app.

# Custom UI Elements:

From dialogs to tooltips, inputs, and more, the UI is designed to be clean, intuitive, and customizable.

# Liveblocks Integration for Canvas Collaboration:

Work together on a canvas, planning your trips with drag-and-drop functionality, live edits, and seamless updates.

* app/ : Main rounting and layout logic using the App Router. Features nested routes like dashboard and dynamic board pages with decated UI components.
* components/ : Shared UI elements (ui/), modals (modals/), and functional elements (auth/,action.tsx, etc.).
* convex/ : Backedn logic using the Convex platform for real-time data handling, including board and user schema.
* hooks/ : Custom React hooks to abstract API logic and state management. 
* providers/ : Context providers  for global app state, including modals and Convex client setup.
* lib/ : Utility functions.
* store/ : Zustand store for UI state (e.g., rename modal).
* public/ : Static assets like SVGs and placeholders.

# Features

* Modular and reusable dashboard/board components
* Real-time collaboration with Convex
* Clean UI with custom dialogs, tooltips, inputs
* Scalable design pattern with domain separation


## 🗂️ Folder Structure

Here’s how TravelFlow is structured for clarity and scalability:

```
travelflow/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── _components/
│   │       ├── board-list.tsx
│   │       ├── empty-boards.tsx
│   │       ├── empty-favorites.tsx
│   │       ├── invite-button.tsx
│   │       ├── navbar.tsx
│   │       └── new-board-button.tsx
│   └── board/
│       └── [board]/
│           ├── page.tsx
│           └── _components/
│               ├── canvas.tsx
│               ├── info.tsx
│               └── toolbar.tsx
├── components/
│   ├── action.tsx
│   ├── modals/
│   ├── ui/
├── convex/
│   ├── board.ts
│   ├── boards.ts
│   └── schema.ts
├── hooks/
│   └── use-api-mutation.ts
├── providers/
│   ├── convex-client-provider.tsx
│   └── modal-provider.tsx
├── public/
│   ├── *.svg
│   └── placeholders/
├── store/
│   └── use-rename-model.ts
├── README.md
├── tsconfig.json
└── package.json
```

## 🧩 Project Evolution

# From Concept to Code

TravelFlow's journey began with a foundational setup using Convex to handle the backend and Clerk for authentication. From there, we focused on building a functional board system that lets users create, share, and organize their travel plans.

The real magic began when we integrated Liveblocks to power the collaborative canvas. Now, users can sketch, draw, and interact in real time—perfect for group planning!

# What's Next

* Design Refinements: Custom icons, UI polish, and branding to make the app even more user-friendly.

* API Integrations: Soon, users will be able to integrate travel services like Booking, Google Flights, and more, directly onto their boards.

## 🚧 Roadmap

# Now:

* Complete collaborative canvas functionality
* Finalize Liveblocks integration for smoother real-time interaction

# Next:

* Polish UI with custom icons, branding, and theme adjustments

# Soon:

* Start negotiations and integration with travel service APIs for bookings and flight planning

# Later: 

* Full deployment with custom domain and hosting

# Long Term:

* Grow the team to expand TravelFlow's features and global reach 🚀

# Available Scripts 

* npm run dev - Run the development server 
* npm run build - Build the project 
* npm run start - Start production server 

## 📚 Resources

Next.js Documentation = https://nextjs.org/docs

Interactive Next.js Tutorial = https://nextjs.org/learn

Clerk Documentation = https://clerk.com/docs

Tailwind CSS Docs = https://tailwindcss.com/docs/installation/using-vite

## 🌐 Deploy on Vercel

This need to be done 
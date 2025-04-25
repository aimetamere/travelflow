## Hi, i'm Nicolas de Haan 👋

👀 I am a student a Code University of applied science in Berlin, transitioning from a background in business management. I’m now channeling my problem-solving and analytical skills into web development.
I'm passionate about building real-time, interactive web applications using Next.js, Convex, TypeScript, and Three.js. I began my programming journey by learning the fundamentals of C, which grounded me in low-level logic and performance. Over time, my curiosity led me to explore 3D web development, and I'm now focused on innovating in that space through projects like TravelFlow or a 3D visualisation book. 

## Project Structure Overview - TravelFlow

TravelFlow is a full-stack, collaborative whiteboard web app built with Next.js, Typescript, and Convex.
The architecture emphasizes modularity, scability, and real-time collaboration.

## Development

To run the app locally:

```bash
# Start Convex backend
npx convex dev

# In a new terminal, start Next.js frontend
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Key Structure

* app/ : Main rounting and layout logic using the App Router. Features nested routes like dashboard and dynamic board pages with decated UI components.
* components/ : Shared UI elements (ui/), modals (modals/), and functional elements (auth/,action.tsx, etc.).
* convex/ : Backedn logic using the Convex platform for real-time data handling, including board and user schema.
* hooks/ : Custom React hooks to abstract API logic and state management. 
* providers/ : Context providers  for global app state, including modals and Convex client setup.
* lib/ : Utility functions.
* store/ : Zustand store for UI state (e.g., rename modal).
* public/ : Static assets like SVGs and placeholders.

## Features

* Modular and reusable dashboard/board components
* Real-time collaboration with Convex
* Clean UI with custom dialogs, tooltips, inputs
* Scalable design pattern with domain separation


## 🎒 Folder Strucutre 

travelflow/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── _components/
│   │       ├── board-list.tsx
│   │       ├── empty-boards.tsx
│   │       ├── empty-favorites.tsx
│   │       ├── empty-org.tsx
│   │       ├── empty-search.tsx
│   │       ├── invite-button.tsx
│   │       ├── navbar.tsx
│   │       ├── new-board-button.tsx
│   │       ├── org-sidebar.tsx
│   │       ├── search-input.tsx
│   │       ├── board-card/
│   │       │   ├── footer.tsx
│   │       │   ├── index.tsx
│   │       │   └── overlay.tsx
│   │       └── sidebar/
│   │           ├── index.tsx
│   │           ├── item.tsx
│   │           ├── list.tsx
│   │           └── new-button.tsx
│   └── board/
│       └── [board]/
│           ├── page.tsx
│           └── _components/
│               ├── canvas.tsx
│               ├── info.tsx
│               ├── participants.tsx
│               └── toolbar.tsx
├── components/
│   ├── action.tsx
│   ├── confrim-modal.tsx
│   ├── hint.tsx
│   ├── room.tsx
│   ├── auth/
│   │   └── loading.tsx
│   ├── modals/
│   │   └── rename-modal.tsx
│   └── ui/
│       ├── alert-dialog.tsx
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── skeleton.tsx
│       ├── sonner.tsx
│       └── tooltip.tsx
├── convex/
│   ├── _generated/
│   │   ├── api.d.ts
│   │   ├── api.js
│   │   ├── dataModel.d.ts
│   │   ├── server.d.ts
│   │   └── server.js
│   ├── README.md
│   ├── tsconfig.json
│   ├── auth.config.js
│   ├── board.ts
│   ├── boards.ts
│   └── schema.ts
├── hooks/
│   └── use-api-mutation.ts
├── lib/
│   └── utils.ts
├── node_modules/
├── providers/
│   ├── convex-client-provider.tsx
│   └── modal-provider.tsx
├── public/
│   ├── *.svg
│   └── placeholders/
│       └── *.svg
├── store/
│   └── use-rename-model.ts
├── components.json
├── eslint.config.mjs
├── liveblocks.config.ts
├── middleware.ts
├── next-env.d.ts
├── nexxt.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json


## Available Scripts 

* npm run dev - Run the development server 
* npm run build - Build the project 
* npm run start - Start production server 

## 🚧 Project Evolution: From Idea to Reality (and Beyond)

TravelFlow began by laying a solid foundation — connecting the backend with Convex, integrating Clerk for authentication, and ensuring a smooth developer experience. Once the engine was running, the focus shifted to building a responsive layout and a functional board system where users can create boards, invite collaborators, and mark favorites.

Currently, development is centered around the interactive canvas, powered by Liveblocks, enabling both individual and real-time collaborative sessions.

Up next: a design polish — custom icons, a sharp logo, and UI refinements.
Then, we shift gears into travel mode ✈️ — integrating APIs like Booking, Google Flights, and more, so users can plan trips directly on their canvas.

## 🗓️ Roadmap

🔄 Now – Complete the collaborative canvas and Liveblocks integration

🎨 Next – Polish UI, icons, and branding

🔍 Soon – Explore and negotiate API access with travel service providers

🚀 Later – Integrate APIs, refine logic, and prep for deployment

🌐 Launch – Set up custom domain and hosting

👥 Long Term – Form a project team if things get serious 💼

# Learn More

Next.js Documentation = https://nextjs.org/docs

Interactive Next.js Tutorial = https://nextjs.org/learn

Clerk Documentation = https://clerk.com/docs

Tailwind CSS Docs = https://tailwindcss.com/docs/installation/using-vite

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
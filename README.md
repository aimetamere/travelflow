This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# travelflow

# Tech Stack 

- framwork: Next.js
- Styling: Tailwind CSS
- Fonts: To be determine so far // Geist
- Icons: Lucide React
- Auth: Clerk.dev
- Hooks: usehooks-ts

# Folder Strucutre

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


# Available Scripts 

* npm run dev - Run the development server 
* npm run build - Build the project 
* npm run start - Start production server 

# Learn More

Next.js Documentation = https://nextjs.org/docs

Interactive Next.js Tutorial = https://nextjs.org/learn

Clerk Documentation = 

Tailwind CSS Docs = https://tailwindcss.com/docs/installation/using-vite
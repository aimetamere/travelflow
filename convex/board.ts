import { v } from "convex/values";

import { mutation, query } from "./_generated/server";

const images = [
    "/placeholders/1.svg",
    "/placeholders/2.svg",
    "/placeholders/3.svg",
    "/placeholders/4.svg",
    "/placeholders/5.svg",
    "/placeholders/6.svg",
    "/placeholders/7.svg",
    "/placeholders/8.svg",
    "/placeholders/9.svg",
];

export const create = mutation({
    args: {
        orgId: v.string(),
        title: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }
        
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        console.log(randomImage, "TEST")

        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: randomImage,
        });
        return board;
    },
});

export const remove = mutation({
    args: { id: v.id("boards") },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const userId = identity.subject;

        const existingFavorite = await ctx.db
            .query("userFavorites")
            .withIndex("by_user_board", (q) =>
                q
                    .eq("userId", userId)
                    .eq("boardId", args.id)
            )
            .unique();
         if (existingFavorite) {
            await ctx.db.delete(existingFavorite._id);
         }

        await ctx.db.delete(args.id);
    },
});

export const update = mutation({
    args: { id: v.id("boards"), title: v.string() },
    handler: async (convexToJson, args) => {
        const identity = await convexToJson.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const title = args.title.trim();

        if(!title) {
            throw new Error("Title your shit");
        }

        if (title.length > 60) {
            throw new Error("Title cannot be longer than 60 characters")
        }

        const board = await convexToJson.db.patch(args.id, {
            title: args.title,
        });

        return board;
    },
});

export const favorite = mutation({
    args: { id: v.id("boards"), orgId: v.string() },
    handler: async (convexToJson,args) => {
        const identity = await convexToJson.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await convexToJson.db.get(args.id);

        if (!board) {
            throw new Error("Board not found")
        }

        const userId = identity.subject;

        const existingFavorite = await convexToJson.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) =>
            q
                .eq("userId", userId)
                .eq("boardId", board._id)
        )
        .unique();

    if (existingFavorite) {
        throw new Error("Board already in you favorite your cunt");
    }

        await convexToJson.db.insert("userFavorites", {
            userId,
            boardId: board._id,
            orgId: args.orgId,
        });

        return board;
    },
});

export const unFavorite = mutation({
    args: { id: v.id("boards") },
    handler: async (convexToJson,args) => {
        const identity = await convexToJson.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }

        const board = await convexToJson.db.get(args.id);

        if (!board) {
            throw new Error("Board not found")
        }

        const userId = identity.subject;

        const existingFavorite = await convexToJson.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) =>
            q
                .eq("userId", userId)
                .eq("boardId", board._id)
                // check if orgId needed 
        )
        .unique();

    if (!existingFavorite) {
        throw new Error("Board not in favorite");
    }

        await convexToJson.db.delete(existingFavorite._id);

        return board;
    },
});

export const get = query({
    args: { id: v.id("boards") },
    handler: async (ctx, args) => {
        const board = ctx.db.get(args.id);

        return board;
    },
});
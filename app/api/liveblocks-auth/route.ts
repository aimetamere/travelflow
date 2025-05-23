
import { auth, currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient (
    process.env.NEXT_PUBLIC_CONVEX_URL!
);

const liveblocks = new Liveblocks({
    secret: "sk_dev_RBfRS9jyyvH_UrJVjXl5tdFKC3yufiVpqJJHGOaUWMmX67I4ox4s_WOcLnFlumme",
});

export async function POST(request: Request) {
    const authorization = await auth();
    const user = await currentUser();

    console.log("AUTH_INFO", {
        authorization,
        user,
    }); // Debugging line
    
    if (!authorization || !user) {
        return new Response("Unauthorized", { status: 403 });
    }

    const { room } = await request.json();
    const board = await convex.query(api.board.get, { id: room });

    console.log("AUTH_INFO", {
        room,
        board,
        boardOrId: board?.orgId,
        userOrgId: authorization.orgId,
    }); // Debugging line

    if (board?.orgId !== authorization.orgId) {
        return new Response("Unauthorized", { status: 403 });
    }

    const userInfo = {
        name: user.firstName || "Anonymous",
        picture: user.imageUrl!,
    };

    console.log({ userInfo }); // Debugging line

    const session = liveblocks.prepareSession(
        user.id,
        { userInfo }, 
    );

    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    console.log({ status, body }, "ALLOWED"); // Debugging line
    return new Response(body, { status }); 
};



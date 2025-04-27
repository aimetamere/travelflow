"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react"; // npm package  

import { RoomProvider } from "@/liveblocks.config"; // alias to file 

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
    // fallback: NonNullable<ReactNode> | null; // for suspense
};

export const Room = ({
    children,
    roomId,
    fallback,
}: RoomProps) => {
    return ( // initial presence is empty object
        <RoomProvider id={roomId} initialPresence={{}}> 
            <ClientSideSuspense fallback={fallback}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}; 
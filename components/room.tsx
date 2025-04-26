"use client";

import { ReactNode } from "react";
import { ClientSideSuspense } from "@liveblocks/react"; // npm package  

import { RoomProvider } from "@/liveblocks.config"; // alias to file 

interface RoomProps {
    children: ReactNode;
    roomId: string;
};

export const Room = ({
    children,
    roomId,
}: RoomProps) => {
    return ( // initial presence is empty object
        <RoomProvider id={roomId} initialPresence={{}}> 
            <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    );
}; 
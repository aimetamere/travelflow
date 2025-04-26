import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "pk_dev_VfORQ4WjGf-NMe7dAxRYxxovW2qFea3DhobjVreXy8yupHM95KZLm3t52yvafRAw",
});

// Define the types
type Presence = {
  // Example: real-time cursor coordinates
  // cursor: { x: number; y: number };
};

type Storage = {
  // Example: a list
  // animals: LiveList<string>;
};

type UserMeta = {
  id: string;
  info: {
    // Example: 
    // name: string;
    // avatar: string;
  };
};

type RoomEvent = 
  // Example:
  // | { type: "PLAY" }
  // | { type: "REACTION"; emoji: string }
  {};

type ThreadMetadata = {
  // Example: coordinates for threads
  // x: number;
  // y: number;
};

type RoomInfo = {
  // Example:
  // title: string;
  // url: string;
};

// Create RoomContext OUTSIDE declare global
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata, RoomInfo>(client);

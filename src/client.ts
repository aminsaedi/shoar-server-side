import { io, Socket } from "socket.io-client";

import { ServerToClientEvents, ClientToServerEvents } from "./types";

const socket: Socket<ServerToClientEvents, ServerToClientEvents> = io(
  "http://localhost:3000"
);

socket.on("next", (message) => {
  console.log("Received: " + message);
});

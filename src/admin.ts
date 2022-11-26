import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents } from "./types";

import prompt from "prompt";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  "http://localhost:3000",
  {
    auth: {
      token: "montrealAdmin",
    },
  }
);

prompt.start();

async function starter() {
  while (true) {
    const { shoar } = await prompt.get(["shoar"]);
    socket.emit("shoarFromAdmin", shoar as string);
  }
}

starter();

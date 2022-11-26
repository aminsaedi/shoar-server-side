import { createServer } from "http";
import { Server } from "socket.io";
const server = createServer();
const io = new Server(server);
io.on("connection", (socket) => {
    socket.emit("next", "Zan Zendegi Azadi");
});
server.listen(3000, () => console.log("Listening on port 3000..."));

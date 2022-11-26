import { createServer } from "http";
import { Server } from "socket.io";
const server = createServer();
const io = new Server(server, {
    cors: {
        origin: true,
    },
});
io.on("connection", (socket) => {
    socket.on("shoarFromAdmin", (shoar) => {
        if (socket.handshake.auth.token === "montrealAdmin")
            io.emit("next", shoar);
        else {
            console.log("Alert: Someone tries to emit an admin action");
            socket.disconnect(true);
        }
    });
    socket.on("ping", (cb) => cb());
});
server.listen(3000, () => console.log("Listening on port 3000..."));

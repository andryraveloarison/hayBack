"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = void 0;
const initSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("🟢 New client connected:", socket.id);
        socket.on("send_message", (data) => {
            console.log("📨 New message:", data);
            io.emit("receive_message", data);
        });
        socket.on("disconnect", () => {
            console.log("🔴 Client disconnected:", socket.id);
        });
    });
};
exports.initSocket = initSocket;

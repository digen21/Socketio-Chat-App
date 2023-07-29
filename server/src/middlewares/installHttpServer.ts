import http from "http";
import { Express } from "express";
import { Server, Socket } from "socket.io";
import { getUser, addUser, getUserInRoom, deleteUser } from "@helpers/user";

const { PORT } = process.env;

interface User {
  id: string;
  name: string;
  room: string;
}

export default (app: Express) => {
  const server = http.createServer(app);
  const io = new Server(server);

  io.on("connect", (socket) => {
    socket.on("join", ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });

      if (error) return callback(error);

      socket.join(user.room);

      socket.emit("message", {
        user: "admin",
        prompt: `${user.name}, Welcome to room ${user.room}.`,
      });
      socket.broadcast
        .to(user.room)
        .emit("message", { user: "admin", prompt: `${user.name} has joined!` });

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUserInRoom(user.room),
      });

      callback();
    });

    socket.on("sendMessage", ({ message, sentAt }, callback) => {
      const user = getUser(socket.id);

      io.to(user.room).emit("message", {
        user: user.name,
        text: message,
        sentAt,
      });

      callback();
    });

    socket.on("disconnect", () => {
      const user = deleteUser(socket.id);

      if (user) {
        io.to(user.room).emit("message", {
          user: "Admin",
          prompt: `${user.name} has left.`,
        });
        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUserInRoom(user.room),
        });
      }
    });
  });

  server.listen(Number(PORT));
};

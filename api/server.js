const express = require("express");

const server = express();

const UsersRouter = require("../users/userRoutes");

server.use(express.json());

server.use("/api/users", UsersRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;

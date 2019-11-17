const express  = require("express");
const helmet = require("helmet");
const cors  = require("cors");
const userRouter = require("./auth/authRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/auth",userRouter);

module.exports = server;
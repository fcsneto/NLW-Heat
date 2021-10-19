import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import {Server} from "socket.io";
import {router} from "./routes";

const server = express();
server.use(cors());

const serverHttp = http.createServer(server);
const io = new Server(serverHttp, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) =>{
    console.log(`Otaku fedido no soquete ${socket.id}`);
})

server.use(express.json());

server.use(router);

let client_id = process.env.GITHUB_CLIENT_ID;

server.get("/github", (request, response) => {
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${client_id}`)
})


server.get("/signin/callback", (request, response) => {
    const { code } = request.query;

    return response.json(code);
})


export {serverHttp, io};
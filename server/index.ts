import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';


const app = express();
const PORT = 4000;
const CHAT_BOT = 'ChatBot';
const allUsers: Array<{ id: string, username: string, room: string }> = [];
let chatRoom = '';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {

    socket.on('join_room', (data) => {
        const { username, room } = data;
        socket.join(room);

        const __createdtime__ = Date.now();
        socket.to(room).emit('receive_message', {
            message: `${username} has joined the chat room`,
            username: CHAT_BOT,
            __createdtime__
        });

        socket.emit('receive_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            __createdtime__,
        });

        chatRoom = room;
        let chatRoomUsers;
        allUsers.push({ id: socket.id, username, room });
        chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers);

        socket.on('new_message', (data: {message: string, username: string, __createdtime__: number}) => {
            socket.to(room).emit('receive_message', {
            message: data.message,
            username: data.username,
            __createdtime__
        });

        socket.emit('receive_message', {
            message: data.message,
            username: data.username,
            __createdtime__
        });
        })
    });
});




server.listen(PORT, () => 'server is running on port 4000')

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const cors = require('cors')
const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// id do socket e id do usuario conectado caso esteja
const connectedUsers = {};
io.on('connection', socket => {
    const {user} = socket.handshake.query;

    
    connectedUsers[user] = socket.id;
});

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

// middleware para passar informacoes de id do usuario logado e id do socket para o controller
app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
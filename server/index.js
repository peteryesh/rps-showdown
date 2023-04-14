const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log("Server running...");
});

io = require('socket.io')(server, {
    cors: {
        origin:"*"
    }
});

io.on("connection", (socket) => {
    console.log("Connected and Socket ID is ", socket.id);
});

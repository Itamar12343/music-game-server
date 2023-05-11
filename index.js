const io = require("socket.io")(3000, {
    cors: {
        origin: "*"
    }
});


io.on("connection", socket => {
    let prevRoom;

    socket.on("join game", room => {
        if (prevRoom !== room) {
            socket.leave(prevRoom);
            prevRoom = room;
        }
        socket.join(room);
        let numberOfUsers = io.sockets.adapter.rooms.get(room).size;
        socket.emit("room status", { room, numberOfUsers });
    });

});
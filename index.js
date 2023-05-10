const io = require("socket.io")(3000, {
    cors: {
        origin: "*"
    }
});


io.on("connection", socket => {
    let prevRoom;

    socket.on("join game", room => {
        //console.log("leave");
        console.log(room);
        socket.join(room);
        let numberOfUsers = io.sockets.adapter.rooms.get(room).size;
        //console.log(numberOfUsers);
    });

});
function describeServerLogic(io) {
  io.on("connection", function(socket) {
    console.log("ws: a user connected");

    socket.on("disconnect", function() {
      console.log("ws: user disconnected");
    });
  });

  return io;
}

module.exports = describeServerLogic;

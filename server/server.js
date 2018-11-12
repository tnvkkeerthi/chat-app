const express = require("express"),
      http = require("http"),
      path = require("path"),
      publicPath = path.join(__dirname,'../public'),
      socketIO = require("socket.io");

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function(socket){
    console.log("new user connected");
    
     socket.on('disconnect', () => {
               console.log("User was disconnected");
           });
           
});



server.listen(process.env.PORT, process.env.IP, function(){
    console.log("chat app Started");
});

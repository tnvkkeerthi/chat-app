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
    
   // alerting others when new user joins 
    socket.broadcast.emit('newMessage', {
            from : 'admin',
            text : 'new user joined',
            createdAt : new Date().getTime() 
        });
  
  // welcome msg to new user
    socket.emit('newMessage', {
            from : 'admin',
            text : 'welcome user',
            createdAt : new Date().getTime() 
   });
   
    socket.on('createMessage', function(message){
      console.log('create message', message);
      io.emit('newMessage', {
          from : message.from,
          text : message.text,
          createdAt : new Date().getTime()
      });
      
      
        // socket.broadcast.emit('newMessage', {
        //     from : message.from,
        //     text : message.text,
        //     createdAt : new Date().getTime() 
        // });
    });
    
    socket.on('disconnect', () => {
               console.log("User was disconnected");
    });
});




server.listen(process.env.PORT, process.env.IP, function(){
    console.log("chat app Started");
});

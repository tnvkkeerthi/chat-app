const express = require("express"),
      http = require("http"),
      path = require("path"),
      publicPath = path.join(__dirname,'../public'),
      socketIO = require("socket.io"),
      {generateMessage} = require("./utils/message");
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function(socket){
    console.log("new user connected");
    
   
    // alerting others when new user joins 
    socket.broadcast.emit('newMessage', generateMessage('Admin' , 'new user joined'));
  
    // welcome msg from admin to new user
    socket.emit('newMessage', generateMessage('Admin' , 'welcome to chat app'));
   
    socket.on('createMessage', function(message){
      console.log('create message', message);
      io.emit('newMessage', generateMessage(message.from, message.text));
      
      
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

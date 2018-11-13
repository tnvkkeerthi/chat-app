 var socket = io();

socket.on('connect', function(){
       console.log('connected to server');
       
       socket.emit('createMessage', {
           from : 'piku',
           text : 'new text message'
       });
 });
           
 socket.on('disconnect', function(){
      console.log("disconnected from server");
 });

//listen newEmail event     
socket.on('newMessage', function(message) {
    console.log("New message !!", message)
});
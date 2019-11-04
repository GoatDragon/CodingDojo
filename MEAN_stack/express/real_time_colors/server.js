const express = require('express');
const app = express();
app.use(express.static(__dirname + '/static'));
const server = app.listen(1337);
const io = require('socket.io')(server);

var color = 'black'

io.on('connection', function (socket) {
    function emit_color(color){
        io.emit('current_collor', {theColor: color});
    }
    emit_color(color);
    socket.on('red', function () {
        color = 'red'
        emit_color(color);
    })    
    socket.on('green', function () {
        color = 'green'
        emit_color(color);
    })    
    socket.on('blue', function () {
        color = 'blue'
        emit_color(color);
    })
})
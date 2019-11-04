const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var count = 0
io.on('connection', function (socket) {
    socket.emit('plusBack', {counter: count})
    socket.on('plus', function () {
        count++
        io.emit('plusBack', {counter: count})
    })
    socket.on('reset', function () {
        count = 0
        io.emit('plusBack', {counter: count})
    })
})
const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) {
    socket.on('formSend', function (data) {
        data.number = Math.floor(Math.random() * 1000)
        socket.emit('formBack', {returnedData: data})
    });
});

app.get('/', (req,res) => {
    res.redirect('form.html');
});


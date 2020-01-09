const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));

app.get('/hire', (req, res) => {
    res.sendfile('./static/hire.html')
});

app.get('/ignore', (req, res) => {
    res.sendfile('./static/ignore.html')
});


const port = 4512;
app.listen(port, () => console.log(`listening on port ${port}`));
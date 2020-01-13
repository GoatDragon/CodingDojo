const express = require('express');
const app = express();

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UsersMessageBoard', {useNewUrlParser: true});

//allows us to read req.body
app.use(express.urlencoded({extended: true}));


const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
});
const Comment = mongoose.model('Post', CommentSchema);

const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    comments: CommentSchema
});
const Message = mongoose.model('Message', MessageSchema);


app.get('/', (req, res) => {
    Message.find()
        .then(data => res.render('index', {messages: data}));
});

app.post('/newmessage', (req, res) => {
    Message.create(req.body)
        .then(newMessageData => console.log(`Message created: ${newMessageData}`))
        .catch(err => console.log(`error: ${err}`));
    res.redirect('/');
});

app.post('/newcomment', (req, res) => {
    const messageID = req.body.message;
    const comment = new Comment;
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    comment.save()
        .then((newCommentData) => {
            Message.updateOne({_id: messageID}, {
                $push: {comments: newCommentData}
            }).then(result => console.log(result)).catch(err => console.log(err))
            console.log(`Comment created: ${newCommentData}`)
        })
        .catch(err => console.log(`error: ${err}`));
    res.redirect('/');
});


const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
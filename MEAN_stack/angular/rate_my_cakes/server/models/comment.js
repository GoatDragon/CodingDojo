// this file is unused
// comments are contained in the cake model

const mongoose = require('../config/mongoose.js')

const CommentSchema = new mongoose.Schema({
    comment: {type: String, required: true},
    rating: {type: Number, min: 0, max: 5},
}, {timestamps: true});
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment
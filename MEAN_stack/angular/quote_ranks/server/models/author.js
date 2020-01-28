const mongoose = require('../config/mongoose.js')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter a name"],
        minlength: [3, "name must be at least 3 characters"]
    },
    quotes: [{
        quote: {
            type: String,
            required: [true, "please enter a quote"],
            minlength: [3, "quote must be at least 3 characters"]
            },
        rating: {
            type: Number,
            default: 0
        }
    }]
}, {timestamps: true});
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author
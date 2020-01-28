const mongoose = require('../config/mongoose.js')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter a name"],
        minlength: [3, "name must be at least 3 characters"]
    }
}, {timestamps: true});
const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author
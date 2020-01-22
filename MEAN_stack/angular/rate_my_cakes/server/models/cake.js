const mongoose = require('../config/mongoose.js')

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true},
    image: {type: String, default: ""},
    comments: []
}, {timestamps: true});
const Cake = mongoose.model('Cake', CakeSchema);

module.exports = Cake
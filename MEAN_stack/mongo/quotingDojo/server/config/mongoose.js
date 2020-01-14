const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteDB', {useNewUrlParser: true});

module.exports = mongoose;
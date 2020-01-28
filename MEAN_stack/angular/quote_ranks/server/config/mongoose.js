const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoteranks', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
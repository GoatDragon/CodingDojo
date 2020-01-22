const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rateMyCakes', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
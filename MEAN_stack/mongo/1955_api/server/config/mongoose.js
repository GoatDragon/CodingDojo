const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955people', {useNewUrlParser: true});

module.exports = mongoose;
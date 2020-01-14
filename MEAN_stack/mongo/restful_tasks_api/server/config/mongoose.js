const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfulTasksAPI', {useNewUrlParser: true});

module.exports = mongoose;
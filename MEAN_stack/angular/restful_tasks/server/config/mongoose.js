const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restfulTasksAPI', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
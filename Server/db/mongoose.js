var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quotemachine', {useNewUrlParser: true});

module.exports = {mongoose}

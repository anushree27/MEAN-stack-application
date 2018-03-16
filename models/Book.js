var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  todo: String
});

module.exports = mongoose.model('Book', BookSchema);

var mongoose = require('mongoose');
var TodoSchema = new mongoose.Schema({
  todo: String,
  published_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Todo', TodoSchema);

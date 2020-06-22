const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  itemId: String,
  itemImages: [{small: String, medium: String, large: String}]
});

const Image = mongoose.model('Image', imageSchema);

function insertRecords (records) {
  return Image.insertMany(records);
}

function fetchItemImages (itemId) {
  return Image.findOne({ itemId: itemId });
}

function fetchAll(callback) {
  return Image.find({});
}

module.exports = Image;
module.exports.insertRecords = insertRecords;
module.exports.fetchItemImages = fetchItemImages;
module.exports.fetchAll = fetchAll;

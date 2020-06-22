const mongoose = require('mongoose');

function connect() {
  const mongoUri = 'mongodb://localhost/images';
  return mongoose.connect(mongoUri, { useNewUrlParser: true });
}

module.exports = connect;

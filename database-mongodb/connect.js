const mongoose = require('mongoose');

function connect() {
  const mongoUri = 'mongodb://172.31.46.64/images';
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    // user: process.env.MONGO_USERNAME,
    // pass: process.env.MONGO_PASSWORD,
  });
}

module.exports = connect;

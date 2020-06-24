const express = require('express');
const bodyParser = require('body-parser');
const Images = require('../database-mongodb/Images.js');
const connect = require('../database-mongodb/connect.js')

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/itemImage/:itemId', function(req, res) {
  console.log(req.params.itemId);
  Images.fetchItemImages(req.params.itemId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    })
})

connect()
  .then(() => {
    console.log('Connected to database');
  })
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

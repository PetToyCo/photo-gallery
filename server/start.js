const app = require('./index.js');
const connect = require('../database-mongodb/connect.js');
const PORT = 3003;

connect()
  .then(() => {
    console.log('Connected to database');
  })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

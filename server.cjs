const { getBooks } = require('./db/categories.cjs');

const client = require('./db/client.cjs');
client.connect();

const express = require('express');
const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`)
});

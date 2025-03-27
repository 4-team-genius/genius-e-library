const express = require('express');
const client = require('./db/client.cjs');
const routes = require('./routes/index.cjs');

client.connect();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('../client/dist'));

// app.use(routes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { 
  console.log(`listening on PORT ${PORT}`)
});

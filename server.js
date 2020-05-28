const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://new-user_01:2vWNBk.@pJ@b64d@cluster0-pnrrq.mongodb.net/test');

const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

//app.use('/app', express('frontend/expresso/public'));

app.listen(port, () => {
  try {
    console.log(`Listening on port: ${port}`);
  } catch(err) {
    console.error(`My error🔥: ${err}`);
  }
});

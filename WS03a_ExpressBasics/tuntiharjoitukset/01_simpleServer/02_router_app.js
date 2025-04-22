
var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 3009;

const router = require('./routes/root');

const app = express();

app.use('/', router);

app.listen(PORT, function () {
    console.log('Example app listening on port: ' + PORT);
  });
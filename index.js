require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const app = express();

app.use('/', router);

const port = process.env.PORT || 8080;

app.listen(port);

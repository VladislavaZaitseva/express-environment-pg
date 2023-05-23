const express = require('express');
const bodyParser = require('body-parser');
const environment = require('./controller/environment.controller')

const app = express();

app.use(bodyParser.json());

app.use('/environment', environment);

app.use((error, require, response, next) => response.send(error.message));

module.exports = app;
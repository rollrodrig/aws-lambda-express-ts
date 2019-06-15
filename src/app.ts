'use strict';
require('dotenv').config('../.env');
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const API = process.env.API;
const API_VERSION = process.env.API_VERSION;
import hello from './routes/hello';
import login from './routes/login';
app.get('/hello', hello);
app.post(`/${API}/${API_VERSION}/login`, login);
if(parseInt(process.env.LAMBDA) === 0) {
    const PORT = process.env.PORT || 7500;
    const HOST = '0.0.0.0';
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
}
module.exports = app;
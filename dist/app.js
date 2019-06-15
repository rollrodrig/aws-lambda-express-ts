'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config('../.env');
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const API = process.env.API;
const API_VERSION = process.env.API_VERSION;
const hello_1 = __importDefault(require("./routes/hello"));
const login_1 = __importDefault(require("./routes/login"));
app.get('/hello', hello_1.default);
app.post(`/${API}/${API_VERSION}/login`, login_1.default);
if (parseInt(process.env.LAMBDA) === 0) {
    const PORT = process.env.PORT || 7500;
    const HOST = '0.0.0.0';
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
}
module.exports = app;

'use strict';
require('dotenv').config('.env');
const serverless = require('serverless-http');
const app = require('./dist/app');
module.exports.handler = serverless(app);
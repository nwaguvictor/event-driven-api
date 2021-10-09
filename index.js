'use strict';

const express = require('express');
const http = require('http');
const { PORT } = require('./config');
const mongoDB = require('./config/db');


const app = express();
const server = http.createServer(app);

server.listen(PORT, async () => {
    console.log(`::> Application running on port: ${PORT}`);
    await mongoDB();
});

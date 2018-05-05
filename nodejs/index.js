'use strict';

const os = require('os');
const express = require('express');

const Redis = require('ioredis');
const redis = new Redis(6379, 'redis');
redis.set('time', new Date().getTime());

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    redis.get('time', function (err, result) {
        let msg = 'Node Dockerized - Hostname: ' + os.hostname() + ' - Time: ' + result;
        console.log(msg);
        res.send(msg);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
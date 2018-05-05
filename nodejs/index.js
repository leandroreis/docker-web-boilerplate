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
        console.log(12341234);
        res.send('XX Hello world<br/> ' + 'Hostname: ' + os.hostname() + ' Time: ' + result);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
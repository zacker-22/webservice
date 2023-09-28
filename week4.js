const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getDevice');
const getIp = require('./routes/getIp');
const alive = require('./routes/alive');
const getUser = require('./routes/getUser');


const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

app = express();

const server = https.createServer(app, httpsOptions);

app.use(express.json());
app.use('/', startUp);
app.use('/get-device', getDevice);
app.use('/get-ip', getIp);
app.use('/alive', alive);
app.use('/get-user', getUser);


server.listen(port, () => {
    console.log('HTTPS is running on port ' + port + '')
});
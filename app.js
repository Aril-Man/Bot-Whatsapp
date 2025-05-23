const { Client, LocalAuth } = require('whatsapp-web.js')
const express = require('express');
const qrcode = require('qrcode-terminal');
const fs = require("fs");
const { handleChat } = require('./src/controller/chatController');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    puppeteer: {
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--unhandled-rejections=strict"
        ]
    },
    authStrategy: new LocalAuth(),
});
const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING ', percent, message);
});


client.on('qr', async (qr) => {
    qrcode.generate(qr, {small: true})
})

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready',() => {
    console.log('CLIENT READY!!!');
})

client.on('disconnected', () => {
    console.log("CLIENT DISCONNECT");
})

client.on('message', async (message) => {
    console.log(JSON.stringify(message))
    await handleChat(client, message.from, message);
})

app.use(morgan('dev'))
app.locals.client = client;

app.listen(port, () => {
    console.log("Service running in port" , port);
})

module.exports = {
    app
}
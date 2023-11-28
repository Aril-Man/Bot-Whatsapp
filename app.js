const { Client, LocalAuth } = require('whatsapp-web.js')
const express = require('express');
const qrcode = require('qr-image');
const fs = require("fs");
const { handleChat } = require('./src/controller/chatController');


const client = new Client({
    authStrategy: new LocalAuth(),
});
const app = express();
const port = 8080;

client.initialize();

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});


client.on('qr',(qr) => {
    console.log("Generate QR Code...");
    let qrCode = qrcode.image(qr, {type : "png"})
    qrCode.pipe(fs.createWriteStream(process.cwd() + "/public/qr/qr.png"))

    console.log(process.cwd() + "/public/qr/last.qr");
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
    await handleChat(client, message.from, message);
})

app.listen(port, () => {
    console.log("Service running in port" , port);
})
const {
    MessageMedia,
} = require("whatsapp-web.js/src/structures")
const { sleep } = require("../../utils/helper");
const axios = require('axios');

let existNumber = [];

async function handleChat(client, jid, message) {
    
    let replaceMessage = message.body.replace(" ", "");
    let lowerMessage = replaceMessage.toLowerCase();

    try {

        if (lowerMessage.includes("!tanya")) {

            let newChat = lowerMessage.replace("!tanya", "");

            const payloadAI = {
                "model": process.env.MODEL_AI,
                "messages": [
                    {
                        "role": "user",
                        "content": newChat,
                    }
                ]
            }

            let response = await axios.post(
                process.env.URL_AI,
                payloadAI,
                { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + process.env.API_KEY } }
            )
    
            const data = response.data;
            let aiSay = data.choices[0];

            return client.sendMessage(jid, aiSay.message.content)
        }


        if (existNumber.includes(jid)) {
            return null;
        }

        if (jid.includes("@g.us")) {
            return null;
        }

        existNumber.push(jid);

        return client.sendMessage(jid, "Hallo saya asisten nya Azriel, apakah ada yang bisa saya bantu ? \n\n Jika ada silahkan ketik !tanya <pesan>");

    } catch (error) {
        throw error
    }
}

module.exports = {
    handleChat
}
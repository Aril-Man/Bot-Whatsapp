const {
    MessageMedia,
} = require("whatsapp-web.js/src/structures")
const { sleep } = require("../../utils/helper");
const axios = require('axios');

async function handleChat(client, jid, message) {

    let replaceMessage = message.body.replace(" ", "");
    let lowerMessage = replaceMessage.toLowerCase();

    try {

        const payloadAI = {
            "model": process.env.MODEL_AI,
            "messages": [
                {
                    "role": "user",
                    "content": lowerMessage,
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
    } catch (error) {
        throw error
    }
}

module.exports = {
    handleChat
}
const {
    MessageMedia,
} = require("whatsapp-web.js/src/structures")
const {
    flows
} = require("../../utils/flows");
const { sleep } = require("../../utils/helper");

async function handleChat(client, jid, message) {
    let image;
    let replaceMessage = message.body.replace(" ", "");
    let lowerMessage = replaceMessage.toLowerCase();

    try {
        
        // Show product
        if (flows.katalog_produk.category.filter(value => value.name === lowerMessage).length > 0) {
            flows.katalog_produk.category.filter((value) => {
                if (value.name === lowerMessage) {
                    value.product.map( async (data) => {
                        await sleep(2000)
                        image = MessageMedia.fromFilePath(data.path);
                        await client.sendMessage(jid, image, {
                            caption: `*${data.name}*`
                        });
                    })
                }
            })
            return
        }

        if (lowerMessage === "info") {
            image = MessageMedia.fromFilePath("./public/img/best_corp.png")
            await client.sendMessage(jid, image, {
                caption: flows.info_message
            })
        } else if (lowerMessage === "produk") {
            // Send categotry catalog product
            await client.sendMessage(jid, flows.category_product);
        } else if (lowerMessage === "fileproduk"){
            let file = MessageMedia.fromFilePath('./public/files/new-catalog.pdf')
            await client.sendMessage(jid, file, {
                caption : flows.file_catalog
            })
        } else if (lowerMessage === "reseller") {
            // Send message for order
            await client.sendMessage(jid, flows.form_register)
            await sleep(2000)
            await client.sendMessage(jid, flows.message_register)
        } else if (lowerMessage === "bisnis" && jid.includes("@g.us") || !jid.includes("@g.us")) {
            image = MessageMedia.fromFilePath("./public/img/best_corporation_syariah_cover.jpeg")
            await client.sendMessage(jid, image, {
                caption: flows.message_greeting
            })
        }

    } catch (error) {
        throw error
    }
}

module.exports = {
    handleChat
}
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
    try {
        if (replaceMessage === "!info") {
            image = MessageMedia.fromFilePath("./public/img/best_corp.png")
            await client.sendMessage(jid, image, {
                caption: flows.info_message
            })
        }else if (replaceMessage === "!produk") {
            // Send catalog product
            for (let catalog of flows.katalog_produk) {
                image = MessageMedia.fromFilePath(catalog.path)
                await sleep(2000)
                await client.sendMessage(jid, image, {
                    caption: catalog.nama_produk + '\n\n' + catalog.manfaat
                })
            }

            // Send catalog product file
            let fileCatalog = MessageMedia.fromFilePath("./public/files/new-catalog.pdf")
            await await client.sendMessage(jid, fileCatalog, {
                caption: flows.file_catalog
            })
        } else if (replaceMessage === "!order") {
            // Send message for order
            await client.sendMessage(jid, flows.order)
        } else if (replaceMessage === "!bisnis" && jid.includes("@g.us") || !jid.includes("@g.us")) {
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
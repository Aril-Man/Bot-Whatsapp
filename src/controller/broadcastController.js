const xlsx = require('xlsx');
const { sleep, formatPhone } = require('../../utils/helper');
const { flows } = require('../../utils/flows');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js/src/structures');

exports.handleBroadcast = (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(400).send("Please upload an excel file!");
        }

        const client = req.app.locals.client;

        let tempData = xlsx.readFile(req.file.path);
        let workSheet = tempData.Sheets[tempData.SheetNames[0]];
        let data = xlsx.utils.sheet_to_json(workSheet)
        
        data.map( async (phone) => {
            let jid = formatPhone(phone.phone);
            let image = MessageMedia.fromFilePath("./public/img/best_corporation_syariah_cover.jpeg")
            await client.sendMessage(jid, image, {
                caption: flows.message_greeting
            })
            await sleep(2000)
        })

        fs.unlink(req.file.path, (err) => {
            if (err) return res.status(400).send({
                status: false,
                code: 400,
                message: "Failed delete file",
                data: null 
            })
        });
        
        return res.status(200).send({
            status: true,
            code: 200,
            message: "Success send broadcast",
            data: null 
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            status: false,
            code: 500,
            message: "Internal server error",
            data: null  
        })
    }
}
const express = require('express');
const { handleBroadcast } = require('../controller/broadcastController');
const uploadFile = require('../middleware/import');
const router = express.Router();

router.post('/broadcast', uploadFile.single('file') , handleBroadcast);

module.exports = {
    router
}
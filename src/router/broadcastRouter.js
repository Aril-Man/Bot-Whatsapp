const express = require('express');
const { handleBroadcast, broadcastV2 } = require('../controller/broadcastController');
const uploadFile = require('../middleware/import');
const router = express.Router();

router.post('/v.0.1/broadcast', uploadFile.single('file') , handleBroadcast);
router.post('/v.0.2/broadcast', broadcastV2);

module.exports = {
    router
}
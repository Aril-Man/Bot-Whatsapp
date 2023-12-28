const express = require('express');
const router = express.Router();

router.post('/broadcast', (req, res) => {
    return res.status(200).send({data: 'broadcast'});
});

module.exports = {
    router
}
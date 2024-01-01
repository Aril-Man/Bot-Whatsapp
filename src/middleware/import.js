const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    },
});

var uploadFile = multer({
    storage: storage,
});
module.exports = uploadFile;
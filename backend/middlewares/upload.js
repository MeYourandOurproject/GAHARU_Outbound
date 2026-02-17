const multer = require("multer");

// STORAGE CONFIG
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        const uniqueSuffix =
            Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
        cb(null, file.fieldname + "-" + uniqueSuffix);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // max 5MB
    },
});



module.exports = upload;
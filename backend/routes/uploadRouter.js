const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), (req, res) => {
  if (req.file) {
    const imageUrl = `https://api.gaharuoutbound.com/uploads/${req.file.filename}`;
    res.json({ url: imageUrl });
  } else {
    res.status(400).send("Gagal mengunggah gambar.");
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const ArtikelController = require("../controllers/artikelController");
const auth = require("../middlewares/auth");
const multer = require("multer");

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

router.post(
  "/create",
  (req, res, next) => {
    const upload = multer({ storage }).array("picture");
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  ArtikelController.create
);

router.get("/", ArtikelController.getAll);
router.get("/:id", ArtikelController.getById);
router.put(
  "/:id",
  (req, res, next) => {
    const upload = multer({ storage }).array("picture");
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  ArtikelController.update
);
router.delete("/:id", ArtikelController.delete);

module.exports = router;

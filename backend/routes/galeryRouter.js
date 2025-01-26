const express = require("express");
const router = express.Router();
const GaleryController = require("../controllers/galeryController");
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
  auth,
  (req, res, next) => {
    const upload = multer({ storage }).single("picture");
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  GaleryController.create
);

router.get("/", GaleryController.getAll);
router.get("/:id", GaleryController.getById);
router.get("/:title", GaleryController.getByTitle);
router.put("/id", auth, (req, res, next) => {
  const upload = multer({ storage }).single("picture");
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
});
router.delete("/:id", auth, GaleryController.delete);

module.exports = router;

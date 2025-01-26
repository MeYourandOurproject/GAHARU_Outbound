const express = require("express");
const router = express.Router();
const PaketTourController = require("../controllers/paketTourController");
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

router.get("/", PaketTourController.getAll);
router.get("/:slug", PaketTourController.getBySlug);
router.get("/:id", PaketTourController.getById);
// router.get("/:slug", PaketTourController.getBySlug);

// Create route with image upload
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
  PaketTourController.create
);

// Update route with image upload
router.put(
  "/:id",
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
  PaketTourController.update
);

router.delete("/:id", auth, PaketTourController.delete);

module.exports = router;

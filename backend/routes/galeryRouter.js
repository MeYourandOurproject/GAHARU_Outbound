const express = require("express");
const router = express.Router();
const GaleryController = require("../controllers/galeryController");

const upload = require("../middlewares/upload");

router.get("/", GaleryController.getAll);
router.post(
  "/admin",
  upload.fields([{ name: "img_url" }]),
  GaleryController.create,
);
router.delete("/admin/:id", GaleryController.delete);
router.patch("/admin/:id/delete-image", GaleryController.deleteImage);

module.exports = router;

const express = require("express");
const router = express.Router();
const GaleryController = require("../controllers/galeryController");
const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");
const upload = require("../middlewares/upload");

router.get("/", GaleryController.getAll);
router.get("/:id", GaleryController.getById);
router.post(
  "/admin",
  authen,
  author("super_admin", "admin"),
  upload.fields([{ name: "img_url" }]),
  GaleryController.create,
);
(router.put(
  "/admin/:id",
  authen,
  author("super_admin", "admin"),
  GaleryController.update,
),
  router.delete(
    "/admin/:id",
    authen,
    author("super_admin", "admin"),
    GaleryController.delete,
  ));
router.patch(
  "/admin/:id/delete-image",
  authen,
  author("super_admin"),
  GaleryController.deleteImage,
);

module.exports = router;

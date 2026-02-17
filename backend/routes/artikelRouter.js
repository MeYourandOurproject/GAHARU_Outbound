const express = require("express");
const router = express.Router();
const ArtikelController = require("../controllers/artikelController");

const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");

const upload = require("../middlewares/upload");

// ADMIN
router.get(
  "/admin",
  authen,
  author("super_admin", "admin", "author"),
  ArtikelController.getAllAdmin,
);
router.get(
  "/slug/:slug",
  authen,
  author("super_admin", "admin", "author"),
  ArtikelController.getBySlugAdmin,
);
router.post(
  "/admin",
  authen,
  author("super_admin", "admin", "author"),
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "pictures", maxCount: 20 },
  ]),
  ArtikelController.create,
);
router.put(
  "/admin/:id",
  authen,
  author("super_admin", "admin", "author"),
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "pictures", maxCount: 20 },
  ]),
  ArtikelController.update,
);
router.delete("/:id", authen, author("super_admin"), ArtikelController.delete);

// PUBLIC
router.get("/", ArtikelController.getAllPublic);
router.get("/:slug", ArtikelController.getBySlugPublic);

module.exports = router;

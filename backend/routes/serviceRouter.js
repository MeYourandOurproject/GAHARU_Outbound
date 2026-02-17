const express = require("express");
const router = express.Router();

const ServiceController = require("../controllers/serviceController");

const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");

const upload = require("../middlewares/upload");

// ADMIN
router.get(
  "/admin",
  authen,
  author("super_admin", "admin"),
  ServiceController.getAllAdmin,
);
router.get(
  "/slug/:slug",
  author("super_admin", "admin"),
  ServiceController.getBySlugAdmin,
);
router.post(
  "/admin",
  author("super_admin", "admin"),
  upload.fields([{ name: "image", maxCount: 1 }]),
  ServiceController.create,
);
router.put(
  "/admin/:id",
  authen,
  author("super_admin", "admin"),
  upload.fields([{ name: "image", maxCount: 1 }]),
  ServiceController.update,
);
router.delete("/:id",author("super_admin"), ServiceController.delete),


// PUBLIC
router.get("/", ServiceController.getAllPublic);
router.get("/:slug", ServiceController.getBySlugPublic);
// router.get("/:id", ServiceController.getByIdPublic);

module.exports = router;

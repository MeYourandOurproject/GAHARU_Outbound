const express = require("express");
const router = express.Router();

const PriceListController = require("../controllers/priceListController");
const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");
const upload = require("../middlewares/upload");

// ADMIN
router.get(
  "/admin",
  authen,
  author("super_admin", "admin", "author"),
  PriceListController.getAllAdmin,
);
router.get(
  "/slug/:slug",
  authen,
  author("super_admin", "admin", "author"),
  PriceListController.getBySlugAdmin,
);
router.post(
  "/admin",
  authen,
  author("super_admin", "admin", "author"),
  upload.fields([{ name: "image", maxCount: 1 }]),
  PriceListController.create,
);
router.put(
  "/admin/:id",
  authen,
  author("super_admin", "admin"),
  upload.fields([{ name: "image", maxCount: 1 }]),
  PriceListController.update,
);
router.delete(
  "/:id",
  authen,
  author("super_admin"),
  PriceListController.delete,
);

// PUBLIC
router.get("/", PriceListController.getAllPublic);
router.get("/:slug", PriceListController.getBySlugPublic);

module.exports = router;

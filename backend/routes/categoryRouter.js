const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/categoryController");

const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");

// ADMIN
router.get("/admin", authen, author("super_admin", "admin"), CategoryController.getAllAdmin);
// router.get("/admin/:id", authen, author("super_admin", "admin"), CategoryController.getByIdAdmin);
router.post("/admin", authen, author("super_admin", "admin"), CategoryController.create);
router.get("/admin/:slug", authen, author("super_admin", "admin"), CategoryController.getBySlugAdmin);
router.delete("/:id", authen, author("super_admin"), CategoryController.delete),

// PUBLIC
router.get("/", CategoryController.getAllPublic);
router.get("/:slug", CategoryController.getBySlugPublic);
// router.get("/:id", CategoryController.getByIdPublic);

module.exports = router;

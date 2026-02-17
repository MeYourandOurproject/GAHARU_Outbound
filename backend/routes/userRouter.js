const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const authen = require("../middlewares/authenticationHandler");
const author = require("../middlewares/authorizationHandler");


router.post("/login", UserController.login);

router.get("/", authen, author("super_admin", "admin"), UserController.getAll);
router.get("/:id", authen, author("super_admin", "admin"), UserController.getById);
router.put("/:id", authen, author("super_admin", "admin"), UserController.update);
router.post("/", authen, author("super_admin", "admin"), UserController.create);
router.delete("/:id", authen, author("super_admin"), UserController.delete);

module.exports = router;

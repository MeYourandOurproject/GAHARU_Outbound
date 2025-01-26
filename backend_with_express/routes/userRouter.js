const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/create", UserController.create);
router.post("/login", UserController.login);
router.get("/", UserController.getAll);
router.get("/:id", UserController.getById);
router.put("/:id", auth, UserController.update);
router.delete("/:id", auth, UserController.delete);

module.exports = router;

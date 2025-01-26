const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/contactController");
const auth = require("../middlewares/auth");

router.post("/create", auth, ContactController.create);
router.get("/", ContactController.getAll);
router.get("/:id", ContactController.getById);

module.exports = router;

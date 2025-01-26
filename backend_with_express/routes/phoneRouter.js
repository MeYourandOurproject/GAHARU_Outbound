const express = require("express");
const router = express.Router();
const PhoneController = require("../controllers/phoneController");
const auth = require("../middlewares/auth");

router.post("/create", auth, PhoneController.create);
router.get("/", PhoneController.getAll);
router.get("/:id", PhoneController.getById);
router.put("/:id", auth, PhoneController.update);
router.delete("/:id", auth, PhoneController.delete);

module.exports = router;

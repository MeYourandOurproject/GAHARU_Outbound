const express = require("express");
const router = express.Router();
const LegalitasController = require("../controllers/legalitasController");
const auth = require("../middlewares/auth");

router.post("/create", auth, LegalitasController.create);
router.get("/", LegalitasController.getAll);
router.get("/:id", LegalitasController.getById);
router.put("/:id", auth, LegalitasController.update);
router.delete("/:id", auth, LegalitasController.delete);

module.exports = router;

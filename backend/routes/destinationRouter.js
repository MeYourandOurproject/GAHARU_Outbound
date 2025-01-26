const express = require("express");
const router = express.Router();
const DestinationController = require("../controllers/destinationController");
const auth = require("../middlewares/auth");

router.post("/create", auth, DestinationController.create);
router.get("/", DestinationController.getAll);
router.get("/:paket_tour_id", DestinationController.getByPaketTourId);
router.put("/:id", auth, DestinationController.update);
router.delete("/:id", auth, DestinationController.delete);

module.exports = router;

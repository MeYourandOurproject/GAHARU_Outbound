const express = require("express");
const router = express.Router();
const Company_ProfileConteoller = require("../controllers/companyProfileController");
const auth = require("../middlewares/auth");

router.post("/create", auth, Company_ProfileConteoller.create);
router.get("/", Company_ProfileConteoller.getAll);
router.get("/:id", Company_ProfileConteoller.getById);
router.put("/:id", auth, Company_ProfileConteoller.update);
router.delete("/:id", auth, Company_ProfileConteoller.delete);

module.exports = router;

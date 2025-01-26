const express = require("express");
const router = express.Router();
const SocialMediaController = require("../controllers/social_mediaController");
const auth = require("../middlewares/auth");

router.post("/create", auth, SocialMediaController.create);
router.get("/", SocialMediaController.getAll);
router.get("/:id", SocialMediaController.getById);
router.put("/:id", auth, SocialMediaController.update);
router.delete("/:id", auth, SocialMediaController.delete);

module.exports = router;

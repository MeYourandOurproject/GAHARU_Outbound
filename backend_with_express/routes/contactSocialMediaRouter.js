const express = require("express");
const router = express.Router();
const ContactSocialMediaController = require("../controllers/contactSocialMediaController");

router.get("/", ContactSocialMediaController.getAll);

module.exports = router;

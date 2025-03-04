const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const companyProfileRouter = require("./companyProfileRouter");
const legalitasRouter = require("./legalitasRouter");
const contactRouter = require("./contactRouter");
const phoneRouter = require("./phoneRouter");
const socialMediaRouter = require("./socialMediaRouter");
const contactSocialMediaRouter = require("./contactSocialMediaRouter");
const paketTourRouter = require("./paketTourRouter");
const destinationRouter = require("./destinationRouter");
const galeryRouter = require("./galeryRouter");
const artikelRouter = require("./artikelRouter");
const uploadRouter = require("./uploadRouter");

router.use("/users", userRouter);
router.use("/company-profile", companyProfileRouter);
router.use("/legalitas", legalitasRouter);
router.use("/contact", contactRouter);
router.use("/phone", phoneRouter);
router.use("/social-media", socialMediaRouter);
router.use("/contact-social-media", contactSocialMediaRouter);
router.use("/paket-tour", paketTourRouter);
router.use("/destination", destinationRouter);
router.use("/galery", galeryRouter);
router.use("/artikel", artikelRouter);
router.use("/upload", uploadRouter);

module.exports = router;

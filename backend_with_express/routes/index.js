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

module.exports = router;

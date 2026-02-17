const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const galeryRouter = require("./galeryRouter");
const artikelRouter = require("./artikelRouter");
const serviceRouter = require("./serviceRouter");
const categoryRouter = require("./categoryRouter");
const uploadRouter = require("./uploadRouter");
const pricelistRouter = require("./priceListRouter");

router.use("/users", userRouter);
router.use("/galeries", galeryRouter);
router.use("/artikels", artikelRouter);
router.use("/services", serviceRouter);
router.use("/categories", categoryRouter);
router.use("/price-lists", pricelistRouter);
router.use("/uploads", uploadRouter);

module.exports = router;

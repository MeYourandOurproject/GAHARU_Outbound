require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require("./routes");
const { sequelize } = require("./models");
const errorHandler = require("./middlewares/errorhandler");
const path = require("path");
const cors = require("cors");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8081");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors({ origin: "http://localhost:8081" }));
app.use("/api", router);

app.use(errorHandler);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Example app listen on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database");
  }
});

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const router = require("./routes");
const { sequelize } = require("./models");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const cors = require("cors");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allowed origins
const allowedOrigins = ["https://gaharuoutbound.com", "http://localhost:8080"];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    allowedHeaders: ["Content-Type, Authorization"],
    credentials: true,
  })
);

// Handle preflight (OPTIONS) request
app.options("*", cors());

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!, I'm backend from Gaharu Outbound Website");
});

app.use(errorHandler);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Example app listening on port ${port}`);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
});

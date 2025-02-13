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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://gaharuoutbound.com");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors({ origin: "https://gaharuoutbound.com" }));
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!, I'm backend from Gaharu Outbound Website");
});

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

// require("dotenv").config();

// const express = require("express");
// const app = express();
// const port = process.env.PORT;
// const router = require("./routes");
// const { sequelize } = require("./models");
// const errorHandler = require("./middlewares/errorHandler");
// const path = require("path");
// const cors = require("cors");

// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "http://localhost:8080"
//     // "https://frontend.gaharuoutbound.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// app.use(cors({ origin: "http://localhost:8080" }));
// app.use("/api", router);

// let dbConnected = false;

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//     dbConnected = true;
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database", error);
//     dbConnected = false;
//   });

// app.get("/", async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     res.send(`
//       <h1>Hello World!</h1>
//       <p>I'm backend from Gaharu Outbound Website.</p>
//       <p>Database connection: <strong>Connected</strong></p>
//     `);
//   } catch (error) {
//     res.send(`
//       <h1>Hello World!</h1>
//       <p>I'm backend from Gaharu Outbound Website.</p>
//       <p>Database connection: <strong>Not Connected</strong></p>
//       <p>Error: ${error.message}</p>
//     `);
//   }
// });

// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

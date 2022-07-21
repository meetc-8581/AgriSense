const mongoose = require("mongoose");
const express = require("express");
// const config = require("config");
var path = require("path");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");
const farmRouter = require("./routes/farmRouter");
const dataRouter = require("./routes/dataRouter");
const cors = require("cors");
require("dotenv").config();

console.log(process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
  console.error("FATAL ERROR: JWT_SECRET is not defined.");
  process.exit(1);
}

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose
  // .connect("mongodb://localhost/Agrisense_mern", {
  .connect(
    "mongodb+srv://meet:T8iziUMtpSdJ5PpH@cluster0.805id.mongodb.net/Agrisense?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB Agrisense_mern"))
  .catch((err) => console.error("Could not connect to MongoDB"));

app.use(express.static(path.join(__dirname, "./public/build")));

app.get("/", (req, res) => {
  res.sendFile("./public/build/index.html", (err) => {
    res.status(500).send(err);
  });
});

app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/farm", farmRouter);
app.use("/api/data", dataRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port", port);
});

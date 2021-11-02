const mongoose = require("mongoose");
const express = require("express");
const config = require("config");

const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const loginRouter = require("./routes/loginRouter");
const farmRouter = require("./routes/farmRouter");
const dataRouter = require("./routes/dataRouter");
const cors = require("cors");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
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
  .connect("mongodb://localhost/Agrisense_mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Agrisense_mern"))
  .catch((err) => console.error("Could not connect to MongoDB"));

app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/farm", farmRouter);
app.use("/data", dataRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port", port);
});

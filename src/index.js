require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./configs/dbConn");
const PORT = process.env.PORT || 5000;

//Mongo db connection start
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mainRoute = require("./routes/index");
const userRoute = require("./routes/user");

app.use("/", mainRoute);
app.use("/user", userRoute);

app.use("*", (req, res) => {
  res.send("No Page Found");
});
mongoose.set("runValidators", true);
mongoose.connection.once("open", () => {
  console.log("Connected to Mongodb");
  app.listen(PORT, () => {
    console.log(`Listing at Port ${PORT}`);
  });
});

require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//MongoDb

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/restorant_Reservation", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser);

//Routes

app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", (_) => {
  console.log("Connect to Db");
});

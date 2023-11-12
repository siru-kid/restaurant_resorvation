const db = require("mongoose");

db.connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log("Couldn't connect to database", e);
  });

module.exports = db;

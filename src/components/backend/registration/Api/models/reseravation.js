var mongoose = require("mongoose");

var reseravtionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
});

var Reservation = mongoose.model("Reservation", reseravtionSchema);

module.exports.model = Reservation;
module.exports.Schema = reseravtionSchema;

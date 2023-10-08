const mongoose = require("mongoose");
const cardSchema = require("./schemas/card-schema");
const clientSchema = require("./schemas/client-schema");
const paymentSchema = require("./schemas/payment-schema");
const paymentStatusSchema = require("./schemas/payment-status-schema");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.card = mongoose.model("card", cardSchema);
db.client = mongoose.model("client", clientSchema);
db.payment = mongoose.model("payment", paymentSchema);
db.paymentStatus = mongoose.model("payment-status", paymentStatusSchema);

module.exports = db;

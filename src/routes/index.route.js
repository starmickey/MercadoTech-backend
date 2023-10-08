const express = require("express");
const { getPaymentsController } = require("../controllers/getPayments.controller");

const router = express.Router();

router.get("/payments", getPaymentsController);

module.exports = router;

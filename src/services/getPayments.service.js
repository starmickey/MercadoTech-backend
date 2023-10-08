const helper = require("../helpers/db");
const PaymentDTO = require("../dto/PaymentDTO");

async function getPayments(skip, limit) {
  const populateQuery = [
    { path: "card", select: "num" },
    { path: "card", populate: { path: "client", select: "fullname" } },
    { path: "state", select: "name" },
  ];

  return helper.findPopulateNestedSortAndLimit("payment", {}, populateQuery, { date: -1 }, skip, limit)
    .then((payments) => payments.map((payment) => new PaymentDTO(payment)));
}

async function getPaymentsCount() {
  return helper.countDocuments("payment");
}

module.exports = {
  getPayments,
  getPaymentsCount,
};

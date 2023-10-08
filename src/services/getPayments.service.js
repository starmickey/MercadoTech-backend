const helper = require("../helpers/db");
const PaymentDTO = require("../dto/PaymentDTO");

async function getPayments(skip, limit) {
  const populateQuery = [
    { path: "card", select: "num" },
    { path: "card", populate: { path: "client", select: "fullname" } },
    { path: "state", select: "name" },
  ];

  return new Promise((resolve, reject) => {
    helper.findPopulateNestedSortAndLimit("payment", {}, populateQuery, { date: -1 }, skip, limit)
      .then(
        (payments) => resolve(payments.map((payment) => new PaymentDTO(payment))),
        (error) => reject(error)
      );

  })

}

async function getPaymentsCount() {
  return helper.countDocuments("payment");
}

module.exports = {
  getPayments,
  getPaymentsCount,
};

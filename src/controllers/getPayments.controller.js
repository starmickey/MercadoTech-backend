const { getPayments, getPaymentsCount } = require("../services/getPayments.service");

const getPaymentsController = async (req, res) => {
  // our pagination only shows 10 items per page
  const countItems = 10;
  const startItem = req.query.page ? req.query.page * countItems : 0;

  Promise.all([
    getPayments(startItem, 10),
    getPaymentsCount(),
  ])
    .then((result) => {
      const payments = result[0];
      const paymentsCount = result[1];

      return res.status(200).send({
        status: 200,
        payments,

        // this enables the buttons "back" and "next"
        isFirstPage: startItem === 0,
        isLastPage: paymentsCount <= startItem + countItems,
      });
    });
};

module.exports = { getPaymentsController };

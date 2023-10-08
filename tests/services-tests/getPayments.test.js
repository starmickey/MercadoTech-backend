const { getPayments } = require("../../src/services/getPayments.service");

describe("get payments services tests", () => {
  it("limits the array", () => {
    const limit = 1;

    getPayments(0, limit).then((payments) => {
      expect(payments).toHaveLength(limit);
    });
  });

  it("returns consistent dtos", () => {
    getPayments(0, 1).then((payments) => {
      const payment = payments[0];

      expect(payment.id).toBeDefined();
      expect(payment.amount).toBeDefined();
      expect(payment.date).toBeDefined();
      expect(payment.state).toBeDefined();
      expect(payment.card_num).toBeDefined();
      expect(payment.client).toBeDefined();
    });
  });
});

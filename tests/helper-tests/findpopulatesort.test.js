const helper = require("../../src/helpers/db");

describe("find and populate tests", () => {
  it("finds documents", () => {
    helper.findPopulateNestedSortAndLimit("payment", {}, { path: "card", select: "num" }, { date: -1 }, 0, 1)

      .then((payments) => {
        expect(payments).toBeDefined();
      });
  });
  it("populates fields", () => {
    const populateQuery = [
      { path: "card", populate: { path: "client", select: "fullname" } },
    ];

    helper.findPopulateNestedSortAndLimit("payment", {}, populateQuery, { date: -1 }, 0, 1)

      .then((payments) => {
        expect(payments[0].card.client.fullname).toBeDefined();
      });
  });

  it("sorts de resuts", () => {
    helper.findPopulateNestedSortAndLimit("payment", {}, { path: "card", select: "num" }, { date: -1 }, 0, 2)

      .then((payments) => {
        expect(payments[0].date.getFullYear())
          .toBeGreaterThanOrEqual(payments[1].date.getFullYear());
      });
  });

  it("returns the expected length", () => {
    const limit = 2;

    helper.findPopulateNestedSortAndLimit("payment", {}, { path: "card", select: "num" }, { date: -1 }, 0, limit)

      .then((payments) => {
        expect(payments).toHaveLength(limit);
      });
  });
});

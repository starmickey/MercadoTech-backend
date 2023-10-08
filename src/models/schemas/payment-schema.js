const { Schema } = require("mongoose");
const { TypeDecimal, TypeDate, TypeObjectId } = require("../types/types");

module.exports = new Schema(
  {
    amount: {
      type: TypeDecimal,
      required: true,
    },
    state: {
      type: TypeObjectId,
      ref: "payment-status",
      required: true,
    },
    card: {
      type: TypeObjectId,
      ref: "card",
      required: true,
    },
    date: {
      type: TypeDate,
      default: new Date(),
    },
  },
);

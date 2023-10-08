const { Schema } = require("mongoose");
const { TypeString, TypeDate, TypeBoolean } = require("../types/types");

module.exports = new Schema(
  {
    name: {
      type: TypeString,
      required: true,
    },
    enabled: {
      type: TypeBoolean,
      default: true,
    },
    removeDate: {
      type: TypeDate,
      default: null,
    },
  },
);

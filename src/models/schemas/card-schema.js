const { Schema } = require("mongoose");
const { TypeString, TypeObjectId } = require("../types/types");

module.exports = new Schema(
  {
    num: {
      type: TypeString,
      required: true,
    },
    client: {
      type: TypeObjectId,
      required: true,
      ref: "client",
    },
  },
);

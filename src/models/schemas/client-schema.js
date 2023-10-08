const { Schema } = require("mongoose");
const { TypeString } = require("../types/types");

module.exports = new Schema(
  {
    fullname: {
      type: TypeString,
      required: true,
    },
  },
);

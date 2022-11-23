const { Schema, Types } = require("mongoose");

const serviceSchema = new Schema({
  // id: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId()
  // },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  start: {
    type: Date,
  },
  end: {
    type: Date,
  },
});

module.exports = serviceSchema;

const { Schema, Types, model } = require("mongoose");
const serviceSchema = require("./Service");

const scheduleSchema = new Schema({
  service: serviceSchema,
  start: {
    type: Number,
    required: true,
  },
  end: {
    type: Number,
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Schedule = new model("Schedule", scheduleSchema);

module.exports = Schedule;

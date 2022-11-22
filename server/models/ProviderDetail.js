const { Schema, model } = require("mongoose");

const serviceSchema = require("./Service");
const hourSchema = require("./HoursSchema");

const providerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],
  services:[serviceSchema],
  address: {
    type: String,
    required: true,
  },
  HOO: [hourSchema],
});

const ProviderDetail = model("ProviderDetail", providerSchema);

module.exports = ProviderDetail;

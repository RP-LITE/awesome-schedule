const { Schema, model } = require("mongoose");

const providerSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],
});

const ClientDetail = model("ClientDetail", providerSchema);

module.exports = ClientDetail;

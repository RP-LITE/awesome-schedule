const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
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
});

const ClientDetail = model("ClientDetail", clientSchema);

module.exports = ClientDetail;

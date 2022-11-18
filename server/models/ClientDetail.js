const { Schema, model } = require('mongoose');

const serviceSchema = require('./Service');

const providerSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    services: [serviceSchema]
  }
);

const ProviderDetail = model('ClientDetail',providerSchema);

module.exports = ProviderDetail;
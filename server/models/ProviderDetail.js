const { Schema, model } = require('mongoose');

const serviceSchema = require('./Service');
const hourSchema = require('./HousSchema');

const providerSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    services: [serviceSchema],
    HOO: [hourSchema]
  }
);

const ProviderDetail = model('ProviderDetail',providerSchema);

module.exports = ProviderDetail;
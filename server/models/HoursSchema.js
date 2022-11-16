const { Schema, Types } = require('mongoose');

const hourSchema = new Schema({
  day:{
    type:String,
    required:true
  },
  start: {
    type:Date,
    required: true
  },
  end: {
    type: Date,
    required:true
  }
});

module.exports = hourSchema;
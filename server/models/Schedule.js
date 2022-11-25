const { Schema, Types, model } = require("mongoose");

const ProviderDetail = require('./ProviderDetail')
const ClientDetail = require('./ClientDetail');
const serviceSchema = require("./Service");

const scheduleSchema = new Schema({
  service: serviceSchema,
  start: {
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
},
{
  toJSON:{
    virtuals:true
  },
  toObject:{
    virtuals:true
  }
});

scheduleSchema.pre('findOneAndDelete',async function(){
  const sched = await this.model.findOne(this.getQuery());
  await Promise.all([
    ProviderDetail.findOneAndUpdate({user:sched.provider,'schedule._id':sched._id},{
      $pull:{
        schedule:{
          _id:sched._id
        }
      }
    }),
    ClientDetail.findOneAndUpdate({user:sched.provider,'schedule._id':sched._id},{
      $pull:{
        schedule:{
          _id:sched._id
        }
      }
    })
  ])
});

scheduleSchema.virtual('end').get(function(){
  return this.start + this.service.duration;
});

const Schedule = model("Schedule", scheduleSchema);

module.exports = Schedule;

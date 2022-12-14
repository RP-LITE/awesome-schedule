const router = require("express").Router();
const { ClientDetail, ProviderDetail, Schedule } = require("../../../models");

/**
 * Checks a time to see if it is a valid time to schedule for.
 * @param {Minutes} time - The time to check, in minutes
 * @param {Response} res - The response object from express
 * @returns {boolean} - Whether the time is valid or not.
 */
const validScheduleTime = (time,res) => {
  console.log('time',time);
  console.log(Date.now() / 1000 / 60);
  if(time <= Date.now() / 1000 / 60){
    res.status(400).json({message:"Schedule request must be for future"});
    return false;
  }
  return true;
};

const UserDetails = {
  client: ClientDetail,
  provider: ProviderDetail,
};

const getUserSchedule = (userID) => {
  const filterObj = {$or:[{client:userID},{provider:userID}]};
  return Schedule.find(filterObj)
    .populate({
      path:"client",
      populate:{
        path:'client',
        model:'ClientDetail'
      }
    })
    .populate({
      path:"provider",
      populate:{
        path:'provider',
        model:'ProviderDetail'
      }
    });
}

//
/**
 * Get the user/provider's schedule
 * @param {string} type - The type of schedule to get; day, week, or month
 */
router.get("/", async (req, res) => {
  const details = await getUserSchedule(req.user._id)
  res.json(details);
});

/**
 * schedule a new service with a provider
 * @param {GUID} providerID - The id of the provider to schedule with
 * @param {GUID} req.body._id - The id of the service to add
 * @param {Date} req.body.start - The time to start the service
 */
router.post("/:providerID", async (req, res) => {
  try {
    // Get the user that is making the request, and the provider whose service is being used
    console.log('req.body',req.body);
    if (!validScheduleTime(req.body.start,res)) {
      return;
    }
    const [client, provider] = await Promise.all([
      ClientDetail.findOne({ user: req.user._id }).populate("schedule"),
      ProviderDetail.findOne({ user: req.params.providerID }).populate(
        "schedule"
      ),
    ]);
    console.log('client',client);
    const service = provider.services.id(req.body._id);
    if (!service) {
      res.status(400).json({ provider });
      // .send(`no service found for ${req.body._id}`);
    }
    const scheduled = await Schedule.create({
      service,
      start: req.body.start,
      client:client.user,
      provider:provider.user
    });
    client.schedule.push(scheduled);
    provider.schedule.push(scheduled);

    const [updatedClient, updatedProvider] = await Promise.all([
      client.save(),
      provider.save(),
    ]);
    const schedule = await getUserSchedule(req.user._id);
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).send("Invalid scheduling");
  }
});

/**
 * Reschedule a service
 * @param {GUID} scheduleID - The ID of the schedule that to reschedule
 */
router.put("/:scheduleID", async (req, res) => {
  try{
    if (!validScheduleTime(req.body.start,res)) {
      return;
    }
    const schedule = await Schedule.findByIdAndUpdate(
      req.params.scheduleID,
      {
        start:req.body.start
      },
      {new:true}
    );
    res.json(schedule)
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

/**
 * Cancel a service
 * @param {GUID} scheduleID - the schedule ID of the service to cancel.
 */
router.delete("/:scheduleID", async (req, res) => {
  try{
  const schedule = await Schedule.findByIdAndDelete(req.params.scheduleID);
  res.json(schedule);
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

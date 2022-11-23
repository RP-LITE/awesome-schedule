const router = require("express").Router();
const { ClientDetail, ProviderDetail, Schedule } = require("../../../models");

const UserDetails = {
  client: ClientDetail,
  provider: ProviderDetail,
};
//
/**
 * Get the user/provider's schedule
 * @param {string} type - The type of schedule to get; day, week, or month
 */
router.get("/", async (req, res) => {
  const details = await UserDetails[req.user.accountType]
    .findOne({ user: req.user._id })
    .populate("schedule");
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
    const nowMinutes = Date.now() / 1000 / 60; //Current time in minutes.
    if (req.body.start <= nowMinutes) {
      return res.status(400).send("Schedule request must be for future");
    }
    const [client, provider] = await Promise.all([
      ClientDetail.findOne({ user: req.user._id }).populate("schedule"),
      ProviderDetail.findOne({ user: req.params.providerID }).populate(
        "schedule"
      ),
    ]);
    const service = provider.services.id(req.body._id);
    if (!service) {
      res.status(400).json({ provider });
      // .send(`no service found for ${req.body._id}`);
    }
    const scheduled = await Schedule.create({
      service,
      start: req.body.start,
      client,
      provider,
      end: req.body.start + service.duration,
    });
    client.schedule.push(scheduled);
    provider.schedule.push(scheduled);

    const [updatedClient, updatedProvider] = await Promise.all([
      client.save(),
      provider.save(),
    ]);
    res.json(client);
  } catch (err) {
    console.error(err);
    res.status(500).send("Invalid scheduling");
  }
});

/**
 * Reschedule a service
 * @param {GUID} scheduleID - The schedule ID of the service to reschedule
 */
router.put("/:scheduleID", (req, res) => {});

/**
 * Cancel a service
 * @param {GUID} scheduleID - the schedule ID of the service to cancel.
 */
router.delete("/:scheduleID", (req, res) => {});

module.exports = router;

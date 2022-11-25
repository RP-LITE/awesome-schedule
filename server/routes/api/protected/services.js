const router = require("express").Router();
const { ProviderDetail, User } = require("../../../models");

router.get("/providers", async (req, res) => {
  try {
    const providers = await User.find({ accountType: "provider" }).populate(
      "provider"
    );
    res.json(providers);
  } catch (err) {
    console.error(err);
    res.status(500).send("Provider find error");
  }
});

/**
 * Get the services that a provider offers.
 */
router.get("/:providerID", async (req, res) => {
  try {
    const details = await ProviderDetail.findOne({
      user: req.params.providerID,
    })
      .populate("schedule")
      .populate("services");
    res.json(details);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

/**
 * Create a new service offered by the provider
 */
router.post("/", async (req, res) => {
  try {
    if (
      ["name", "duration", "description", "cost"].some(
        (p) => !req.body.hasOwnProperty(p)
      )
    ) {
      return res.status(400).send("Invalid service initialization");
    }

    const detail = await ProviderDetail.findOneAndUpdate(
      {
        user: req.user._id,
      },
      {
        $addToSet: {
          services: req.body,
        },
      },
      {
        new: true,
      }
    ).populate("services");
    res.json(detail);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

/**
 * Edit an offered service
 * @param {GUID} serviceID - The id of the service to edit
 */
router.put("/:serviceID", async (req, res) => {
  try{
    const updateObj = Object.entries(req.body).reduce((memo,[key,val]) => {
      if(val !== undefined && val !== null){
        memo[`services.$.${key}`] = val;
      }
      return memo;
    },{});
    const provider = await ProviderDetail.findOneAndUpdate({user:req.user._id,'services._id':req.params.serviceID},{
      $set:updateObj
    },{new:true});
    res.json(provider);
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

/**
 * Delete a service to stop offering it.
 * @param {GUID} serviceID - id of the service to delete.
 */
router.delete("/:serviceID", async (req, res) => {
  try{
    const provider = await ProviderDetail.findOneAndUpdate(
      {user:req.user._id},
      {
        $pull: {
          services:{ _id:req.params.serviceID }
        }
      },
      {new:true}
    );
    res.json(provider);
  }catch(err){
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();

const { User } = require("../../../models");

const serviceRoutes = require("./services");
const clientRoutes = require("./clients");
const scheduleRoutes = require("./schedule");
// All routes should be below this line

router.use("/service", serviceRoutes);
router.use("/client", clientRoutes);
router.use("/schedule", scheduleRoutes);

/**
 * Delete the user's account
 */
router.delete("/", async ({ user }, res) => {
  try {
    const fullUser = await User.findByIdAndDelete(user._id);

    res.status(200).json(fullUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

/**
 * Get user details
 */
router.get("/", (req, res) => {});

module.exports = router;

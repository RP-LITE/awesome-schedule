const router = require("express").Router();
const { User, ClientDetail, ProviderDetail } = require("../../models");
const { authMiddleware, signToken } = require("../../utils/auth");

const protectedRoutes = require("./protected");

/**
 * Create account route
 */
router.post("/", async ({ body }, res) => {
  try {
    const user = await User.create(body?.user || {});

    if (!user) {
      return res.status(400).json({ message: "Invalid account options" });
    }
    const detailObj = body?.detail || {};
    console.log("detailObj", detailObj);
    const userUpdate = {};
    if (user.accountType === "provider") {
      userUpdate.provider = await ProviderDetail.create({
        ...detailObj,
        user,
      });
    } else {
      userUpdate.client = await ClientDetail.create({ ...detailObj, user });
    }
    if (!userUpdate.client && !userUpdate.provider) {
      return res.status(400).json({ message: "Invalid Account Details" });
    }
    // Need to edit so that password is not sent as part of the response
    const fullUser = await User.findByIdAndUpdate(user.id, userUpdate, {
      new: true,
    })
      .populate("client")
      .populate("provider");
    const token = signToken({
      username: user.username,
      email: user.email,
      accountType: user.accountType,
    });
    res.json({ token, user: fullUser });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

/**
 * Login route
 */
router.post("/login", async ({ body }, res) => {
  try {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.username }],
    })
      .populate("client")
      .populate("provider");

    const correctPw = await user?.isCorrectPassword(body.password);

    if (!correctPw || !user) {
      return res
        .status(400)
        .json({ message: "Username or password is invalid." });
    }
    const token = signToken(user);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

router.use("/", authMiddleware, protectedRoutes);

module.exports = router;

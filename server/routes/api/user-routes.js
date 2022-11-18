const router = require('express').Router();
const { User, ClientDetail } = require('../../models');
const { authMiddleware, signToken } = require('../../utils/auth');

const protectedRoutes = require('./protected');

/**
 * Create account route
 */
router.post('/',async ({ body },res) => {
  const user = await User.create(body?.user || {});

  if (!user) {
    return res.status(400).json({ message: 'Invalid account options' });
  }
  const detailObj
  const clientDetail = await ClientDetail.create({...(body?.detail || {})});
  const token = signToken(user);
  res.json({ token, user });
});

/**
 * Login route
 */
router.post('/login',async (req,res) => {
  const user = await User.findOne({ $or: [{ username: body.username }, { email: body.username }] });

  const correctPw = await user.isCorrectPassword(body.password);

  if (!correctPw || !user) {
    return res.status(400).json({ message: 'Username or password is invalid.' });
  }
  const token = signToken(user);
  res.json({ token, user });
});

router.use('/', authMiddleware, protectedRoutes);

module.exports = router;
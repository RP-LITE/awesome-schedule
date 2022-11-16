const router = require('express').Router();

const { authMiddleware } = require('../../utils/auth');

const protectedRoutes = require('./protected');

/**
 * Create account route
 */
router.post('/',(req,res) => {

  });

/**
 * Login route
 */
router.post('/login',(req,res) => {

});

router.use('/',protectedRoutes);

module.exports = router;
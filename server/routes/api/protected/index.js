const router = require('express').Router();

const serviceRoutes = require('./services');
const clientRoutes = require('./clients');
// All routes should be below this line

router.use('/service',serviceRoutes);
router.use('/client',clientRoutes);
router.use('/schedule',scheduleRoutes);

/**
 * Get user details
 */
router.get('/',(req,res) => {

});

module.exports = router;
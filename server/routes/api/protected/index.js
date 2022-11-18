const router = require('express').Router();

const serviceRoutes = require('./services');
const clientRoutes = require('./clients');
const scheduleRoutes = require('./schedule');
// All routes should be below this line

router.use('/service',serviceRoutes);
router.use('/client',clientRoutes);
router.use('/schedule',scheduleRoutes);

/**
 * Delete the user's account
 */
router.delete('/',(req,res)=>{

})

/**
 * Get user details
 */
router.get('/',(req,res) => {

});

module.exports = router;
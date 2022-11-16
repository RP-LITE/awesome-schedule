const router = require('express').Router();

/**
 * Get the user/provider's schedule
 * @param {string} type - The type of schedule to get; day, week, or month
 */
router.get('/:type',(req,res)=>{

});

/**
 * schedule a new service with a provider
 * @param {GUID} providerID - The id of the provider to schedule with
 */
router.post('/:providerID',(req,res)=>{

});

/**
 * Reschedule a service
 * @param {GUID} scheduleID - The schedule ID of the service to reschedule
 */
router.put('/:scheduleID',(req,res) => {

});

/**
 * Cancel a service
 * @param {GUID} scheduleID - the schedule ID of the service to cancel.
 */
router.delete('/:scheduleID',(req,res) => {

})

module.exports = router;
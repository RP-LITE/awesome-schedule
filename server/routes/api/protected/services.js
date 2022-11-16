const router = require('express').Router();

/**
 * Get the services that a provider offers.
 */
router.get('/',(req,res) => {

});

/**
 * Create a new service offered by the provider
 */
router.post('/',(req,res) => {

});

/**
 * Edit an offered service
 * @param {GUID} serviceID - The id of the service to edit
 */
router.put('/:serviceID',(req,res) => {

});

/**
 * Delete a service to stop offering it.
 * @param {GUID} serviceID - id of the service to delete.
 */
router.delete('/:serviceID',(req,res) => {

});

module.exports = router;
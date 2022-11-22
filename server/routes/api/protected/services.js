const router = require('express').Router();
const {
  ProviderDetail
} = require('../../../models');
/**
 * Get the services that a provider offers.
 */
router.get('/', async (req, res) => {
  try {
    const details = await ProviderDetail.findOne({
        user: req.user._id
      })
      .populate('schedule')
      .populate('services');
    res.json(details);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

/**
 * Create a new service offered by the provider
 */
router.post('/', async (req, res) => {
  try {
    if(['name','duration','description','cost'].some(p => !req.body.hasOwnProperty(p))){
      return res.status(400).send('Invalid service initialization');
    }
    return res.json(req.user);
    const detail = await ProviderDetail.findOneAndUpdate({
      user: req.user._id
    }, {
      $addToSet: {
        services: req.body
      }
    },{
      new:true
    })
      .populate('services');
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
router.put('/:serviceID', (req, res) => {

});

/**
 * Delete a service to stop offering it.
 * @param {GUID} serviceID - id of the service to delete.
 */
router.delete('/:serviceID', (req, res) => {

});

module.exports = router;
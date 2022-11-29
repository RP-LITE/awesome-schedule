const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const fs = require('fs/promises');

router.use('/api', apiRoutes);
console.log('__dirname',__dirname);
(async () => {
  const index = await fs.readFile(path.join(__dirname, '../../client/dist/index.html'),'utf8');
  console.log('index',index);
})();
// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = router;
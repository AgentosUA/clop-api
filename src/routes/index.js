const router = require('express').Router();
const home = require('./home.js');
const second = require('./second.js');

router.use(home);
router.use(second);


module.exports = router;

const router = require('express').Router();
const sheetRoute = require('./sheet.js');
const shopRoute = require('./shop.js');

router.use(sheetRoute);
router.use(shopRoute);

module.exports = router;

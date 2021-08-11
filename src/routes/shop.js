const router = require('express').Router();
const { getUnits, getCategories } = require('../controllers/shop.controller');

router.get('/categories', getCategories);
router.get('/units', getUnits);

module.exports = router;

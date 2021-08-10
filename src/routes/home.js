const router = require('express').Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getAll);

module.exports = router;

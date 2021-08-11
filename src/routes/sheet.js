const router = require('express').Router();
const { setTable } = require('../controllers/sheet.controller.js');

router.get('/update-table', setTable);

module.exports = router;

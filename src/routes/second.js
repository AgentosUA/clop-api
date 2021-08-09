const router = require('express').Router();

router.get('/second', (req, res) => res.json({ message: 'second' }));

module.exports = router;

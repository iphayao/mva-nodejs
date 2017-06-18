var express = require('express');
var router = express.Router();

/* GET place listing. */
router.get('/', function(req, res, next) {
    res.render('places', {title: 'Places'});
});

module.exports = router;
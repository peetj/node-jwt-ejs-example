var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

/* POST home page. */
router.post('/', function (req, res, next) {
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

    // return the information including token as JSON
    res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
    });
});


module.exports = router;
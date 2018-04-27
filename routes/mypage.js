var express = require('express');
var router = express.Router();

/* GET mypage page. */
router.get('/', function(req, res, next) {
  res.render('mypage', { title: 'MyPage' });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello User-A');
});

router.get('/getUserInfo',function(req, res, next){
	var user = new User();
	var params = URL.parse(req.url, true).query;
	let d = user.getUserInfo(params.id);
	var respond = {status:1,data:d}
	res.send(JSON.stringify(respond))
})

module.exports = router;

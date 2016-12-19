var express = require('express');
var router = express.Router();
var User = require('./user');
var URL = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo',function(req, res, next){
	var user = new User();
	var params = URL.parse(req.url, true).query;


	if(params.id == 1){
		user.name = '高岗';
		user.age = '28'
		user.city = 'peking'
	}else{
		user.name = '离线';
		user.age = '35'
		user.city = 'Canton'
	}

	var respond = {status:1,data:user}
	res.send(JSON.stringify(respond))
})

module.exports = router;

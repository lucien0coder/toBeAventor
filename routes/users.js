var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./model/user');

/* GET users listing. */
var data;
router.get('/', function(req, res, next) {
  // res.send('Hello User-A first');
  res.header("Access-Control-Allow-Origin", "*");
  console.log('/users before next')
  data = 'users from next before'
  next();
},function(req, res){
  res.send('Hello from '+data)
});

router.get('/getUserInfo',function(req, res, next){
	var user = new User();
	var params = URL.parse(req.url, true).query;
	console.log()
	if(1 == params.id){
		let d = user.getUserInfo(params.id);
		var respond = {status:1,data:d}
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(respond))
	}else{
		res.header("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify({'id':'isNull'}))
	}
})

module.exports = router;

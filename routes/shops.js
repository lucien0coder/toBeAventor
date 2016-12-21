var express = require('express')
var router = express.Router();


router.get('/', function(req, res, next) {
	//读取店铺json文件，显示店铺列表
	res.render('shops',{title:'纳爱斯到货上架',shopName:'鸿明杂货店'})
})

module.exports = router;
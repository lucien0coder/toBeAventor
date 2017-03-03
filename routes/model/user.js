let fs = require('fs');


//用户实体
function User(){
	this.name;
	this.sex;
	this.loco;
	this.uStatus;//用户状态；正常，

	this.getUserInfo = function(id){
		let rs;
		let data = fs.readFileSync('./data/users.json','utf8');
		return data;
	}
}

module.exports = User;
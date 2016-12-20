let fs = require('fs');


//用户实体
function User(){
	this.name;
	this.sex;
	this.loco;
	this.uStatus;//用户状态；正常，

	this.getUserInfo = function(id){
		let rs;
		let data = fs.readFile('./data/users.json','utf8',function(err,data){
			if(err){
				console.log(err)
			}else{
				let users = JSON.parse(data)
				for(let u of users){
					if(u.id == id){
						rs = u
						break
					}				
				}
				return rs;
			}
		});
	}
}

module.exports = User;
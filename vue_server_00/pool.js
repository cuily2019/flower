const mysql =require('mysql');
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'flower',
	connectionLimit:20
});
//导出连接池对象
module.exports=pool;
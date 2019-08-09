//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");//跨域
const session = require("express-session");
//2:引入自定义模块
const pool=require("./pool")
 //创建服务器
 var server = express();
 //为服务器配置监听端口
 server.listen(3000);
  //2.2:跨域
 server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
 }))
 //2.3:session
 server.use(session({
   secret:"128位字符串",
   resave:true, 
   saveUninitialized:true
 }))

 //2.9:指定静态目录
 server.use(express.static("public"))

 //3:完成第一个功能用户登录
 server.get("/denglu",(req,res)=>{
  //1:参数
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //1.1:正则表达式验证用户名或密码
  //2:sql
  var sql = "SELECT id FROM flower_user WHERE uname = ? AND upwd = md5(?)";
  //3:json
  pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      if(result.length==0){
         res.send({code:-1,msg:"用户名或密码有误"});
      }else{
         //??缺少一步
         // 把当前登录用户的uid保存到session对象
         req.session.uid=result[0].id;
         res.send({code:1,msg:"登录成功"});
      }
  })
})
//完成第二个功能注册功能
server.get('/zhuce',function(req,res){
  //1.参数
  var obj=req.query;
  //2.sql
  pool.query("SELECT id FROM flower_user WHERE uname=?",[obj.uname],function(err,result){
    if(err)throw err;
    if(result.length!=0){
      res.send("用户名已被占用")
    }else{
      pool.query("SELECT id FROM flower_user WHERE phone=?",[obj.phone],function(err,result){
        if(err)throw err;
        if(result.length!=0){
          res.send("手机号已被注册")
        }else{
          pool.query("INSERT INTO flower_user VALUES(null,?,md5(?),?)",[obj.uname,obj.upwd,obj.phone],(err,result)=>{
            if(err){
              throw err;
            }
            if (result.affectedRows>0)
            {
              res.send({code:200,msg:'reg success'})
            }
          })
        }
      })
    }
  })
})

//完成第三个功能:商品显示
server.get("/shouye",(req,res)=>{
   var sql = "SELECT id,price,title,img_url FROM flower_product";
   pool.query(sql,(err,result)=>{
       if(err)throw err;
       var obj=result

       res.send(obj)
   });
});  

//完成第四个功能花语大全
server.get("/flowerlist",(req,res)=>{
  //1:参数
  var sql="SELECT * FROM flower_language";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var obj=result;
    res.send(obj);
  })
})
server.get("/crticle",(req,res)=>{
  //1:参数
  var sql="SELECT * FROM flower_arcicle";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    var obj=result;
    res.send(obj);
  })
})

// 完成第五个功能，根据id传递参数获取响应数据
server.get("/spxq",function(req,res){
  var fid=req.query.id
  pool.query("select * from flower_product where id=?",[fid],(err,result)=>{
    if(err){throw err}
    res.send(result)
  })
})

//完成第六个功能保存用户登录的id值判断用户是否登录
server.get("/mine",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send("请登录");
    return;
  }
  pool.query("SELECT * FROM flower_user WHERE id=?",[uid],(err,result)=>{
    if(err)throw err;
    res.send(result);
    
  })
})
//根据登录用户传递对应的地址
server.get("/dizhi",(req,res)=>{
  var uid=req.session.uid;
  pool.query("SELECT * FROM flower_dizhi WHERE fid=?",[uid],(err,result)=>{
    if(err)throw err
    res.send(result)
  })
})
//添加地址
server.get("/tianjia",(req,res)=>{
  var count=req.query.value
  var id=req.session.uid
  if(!id){
    res.send("请登录")
    return
  }else{
    pool.query("INSERT INTO flower_dizhi VALUES(null,?,?)",[id,count],(err,result)=>{
      if(err)throw err;
      res.send(result)
    })
  }
  
})
//实现第七个功能删除
server.get("/del",(req,res)=>{
  console.log(req.query)
  var $id=req.query.id;
  pool.query("DELETE FROM flower_dizhi WHERE id=?",[$id],(err,result)=>{
    if(err)throw err;
    res.send(result)
  })
})

// 完成第八个功能，添加购物车
server.get("/addcart",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){
    res.send("请登录")
    return
  }
  var id=req.query.id
  pool.query("SELECT img_url,price,title_1 FROM flower_product where id=?",[id],(err,result)=>{
    if(err)throw err
    if(result.length>0){
      var img=result[0].img_url
      var price=result[0].price
      var title=result[0].title_1
      pool.query("SELECT img_url FROM flower_cart WHERE img_url=?",[img],(err,result)=>{
        if(err)throw err
        if(result.length>0){
          pool.query("SELECT count FROM flower_cart WHERE img_url=?",[img],(err,result)=>{
            if(err)throw err;
            var count=parseInt(result[0].count)+1
            pool.query("UPDATE flower_cart SET count=? where img_url=?",[count,img],(err,result)=>{
              if(err)throw err
              res.send(result)
            })
          })
        }else{
          pool.query("INSERT INTO flower_cart VALUES(null,?,?,?,1,?)",[img,price,title,uid],(err,result)=>{
            if(err)throw err;
            console.log(result)
            res.send(result)
            return
          })
        }
      })
      
    }
  })
})





//5:完成第三个功能:
//92~106 复制
//先登录操作成功后再查询购物车
//查询指定用户购物车列表
server.get("/cart",(req,res)=>{
  //1:参数(无参数)
  var uid = req.session.uid;
  if(!uid){
    res.send({code:-1,msg:"请登录"});
    return;
  }
  //2:sql
  var sql = "SELECT id,img_url,title,price,count FROM xz_cart WHERE uid = ?";
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result})
  })
  //3:json
})

// 功能四
server.get('/delete',(req,res)=>{
  //1:参数购物车id
  var id=req.query.id;
  //2:sql 删除指定数据
  var sql="delete from xz_cart where id=?"
  //3:json
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    console.log(result);
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

//功能五:删除多个选中商品130~144
server.get('/delAll',(req,res)=>{
   //1:参数 1,2,3
  var ids =req.query.ids;
  //2:sql
  var sql=`DELETE FROM xz_cart WHERE id IN (${ids})`;
  //3:json
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})

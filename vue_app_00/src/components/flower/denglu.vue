<template>
  <div class="container">
    <div class="tipslogin">
        <span>登录</span>
    </div>
    <!--淘宝logo图片-->
    <div class="imgdiv">
      <img src="../../assets/logo.jpg" class="logo">
    </div>

    <!--操作区域-->
    <div class="operateDiv">
      <!--01账号-->
      <mt-field placeholder="手机号/邮箱/会员名" v-model="uname"></mt-field>
      <!--02密码-->
      <mt-field placeholder="请输入密码" type="password" v-model="upwd" class="myinput"></mt-field>
      <div>
        <mt-button size="large" class="mybutton" @click="login">登录</mt-button>
      </div>
      <div class="registerDiv"><a href="http://127.0.0.1:8080/#/zhuce">立即注册</a></div>
    </div>
  </div>
</template>
<script>
    export default {
    data(){
        return {
            uname:"jerry",
            upwd:"123",
        }
    },
    created() {
       
    },
    methods: {
      login(){
        if(!this.uname){
          this.$messagebox("","请输入用户名");
        }else if(!this.upwd){
          this.$messagebox("","请输入密码");
        };
        // 完成登录
        // 1.获取用户名和密码
        var uname=this.uname;
        var upwd=this.upwd;
        // 2.创建一个正则表达式字母数字字下划线3——12
        var reg=/^[a-z0-9_]{3,12}$/i;
        // 3.验证用户名出错提示
        if(!reg.test(uname)){
            this.$toast("用户名格式不正确");
            return;
        }
        // 4.验证密码出错提示
        if(!reg.test(upwd)){
            this.$toast("密码格式不正确");
            return;
        }
        // 5.发送ajax请求
        var url ="denglu";
        var obj={uname:uname,upwd:upwd};
        this.axios.get(url,{params:obj}).then(result=>{
            if(result.data.code>0){
                this.$router.push("/")
            }else{
                this.$messagebox("提示","用户名或密码有误")
            }
        });
      },
    },
}
</script>
<style>
     /*顶部登录按钮 */
    .tipslogin {
      display: flex;
      justify-content:center;
      align-items: center;
      height: 52px;
      background:#fff;  
      border-bottom:1px solid rgb(238, 238, 238) ;
      color:#aaa;
      font-size:16px;
      margin-bottom:20px;
    }

    /* 图片 logo 根样式 */
    .imgdiv {
      display: flex;
      justify-content: center;
    }

    /* 图片样式 */
    .logo{
      width: 80px;
      height: 80px;
    }

   /* 输入框底边框样式 */
    .mint-cell-wrapper  {
      border-bottom: 1px solid pink;
      border-top:1px solid pink;
    }    

    /* 操作区域的样式*/
    .operateDiv {
      padding-left: 20px;
      padding-right: 20px;
    }
    
    /* 立即注册样式 */
    .registerDiv {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #75758A;
    }

    /* 登录短信验证按钮边距 */
    .mybutton {
      margin-top: 20px;
    }

    /* 修改默认 butoon 的样式*/
    .mint-button--default {
      background: -webkit-linear-gradient(left,pink,#FF4465) no-repeat;
      border-radius: 25px;
      color: #fff;
      height: 48px;
    }
    /* 同上 */
    .mint-button--primary {
      border-radius: 25px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #ff5000;
      color: #ff5000
    }
    /* 修改默认弹框的样式*/
    .mint-msgbox{
      border-radius: 8px;
      width: 70%
    }
    /* 弹出框内容样式 */
    .mint-msgbox-content {
      min-height: 50px;
      font-size: 18px;
    }
    /* 弹出内容居中 */
    .mint-msgbox-message{
      line-height: 50px;
    }
    /* 弹出框确定按钮样式 */
    .mint-msgbox-btns{
      height: 60px;
    }
    /* 弹出框确定按钮字体 */
    .mint-msgbox-confirm {
      color: #f40;
    }
</style>
<template>
    <div>
        <mt-field placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field placeholder="请输入手机号" v-model="phone"></mt-field>
        <mt-field placeholder="请输入密码" v-model="upwd"></mt-field>
        <mt-field placeholder="请再次输入密码" v-model="upwd1"></mt-field>
        <div>
            <mt-button size="large" class="mybutton" @click="zhuce">注册</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                uname:'',
                upwd:'',
                phone:'',
                upwd1:''
            }
        },
        methods: {
            zhuce(){
                if(!this.uname){
                    this.$messagebox("","请输入用户名");
                    return;
                }else if(!this.upwd){
                    this.$messagebox("","请输入密码");
                    return;
                }else if(this.upwd != this.upwd1){
                    this.$messagebox("","密码不一致");
                    return;
                }else if(!this.phone){
                    this.$messagebox("","请输入手机号");
                    return;
                }
                // 完成登录
                // 1.获取用户名和密码
                var uname=this.uname;
                var upwd=this.upwd;
                var phone=this.phone;
                // 2.创建一个正则表达式字母数字字下划线3——12
                var reg=/^[a-z0-9_]{3,12}$/i;
                var regp=/^[1][3-8][0-9]{9}$/;
                console.log(reg.test(uname))
                console.log(reg.test(upwd))
                console.log(regp.test(phone))
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
                if(!regp.test(phone)){
                    this.$toast("手机号码格式不正确")
                }
                // 5.发送ajax请求
                var url ="zhuce";
                var obj={uname:uname,phone:phone,upwd:upwd};
                this.axios.get(url,{params:obj}).then(result=>{
                    if(result.data.code>0){
                        this.$router.push("denglu")
                    }else{
                        this.$messagebox("提示",result.data)
                    }
                    
                });
            },
        }
    }
</script>
<style>
    
</style>
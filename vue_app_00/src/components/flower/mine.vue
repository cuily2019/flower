<template>
    <div class="all">
        <div class="top">
            个人中心
        </div>
        <div id="d1" @click="dl"></div>
        <div id="d2">
            <div class="imgtext" v-if="user!=''">
                <img src="../../assets/user.png">
                <div>
                    <p class="text_top">{{user.uname}}_{{user.phone}}</p>
                    <p class="text_bottom">
                        <img src="../../assets/jsfen.png">
                        <span>积分：200</span>
                    </p>
                </div>
                <div class="zhanghao" @click="zhanghao">切换账号</div>
            </div>
            <ul class="list">
                <li>
                    <a href="#"><img src="../../assets/fk.png"></a>
                    <p>待付款</p>
                </li>
                <li>
                    <a href="#"><img src="../../assets/fh.png"></a>
                    <p>待发货</p>
                </li>
                <li>
                    <a href="#"><img src="../../assets/sh.png"></a>
                    <p>待收货</p>
                </li>
                <li>
                    <a href="#"><img src="../../assets/dd.png"></a>
                    <p>我的订单</p>
                </li>
            </ul>
            <div class="dz" @click="dizhi">
                <img src="../../assets/dz.png" class="dzimg">
                <p>地址管理</p>
                <img src="../../assets/right.png" id="img1" >
            </div>
            <div class="dz" @click="kefu">
                <img src="../../assets/kf.png" class="dzimg">
                <p>在线客服</p>
                <img src="../../assets/right.png" id="img2" >
            </div>
            <div class="dz" @click="lianxi">
                <img src="../../assets/lx.png" class="dzimg">
                <p>联系我们</p>
                <img src="../../assets/right.png" id="img3" >
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                user:""
            }
        },
        methods:{
            loadMore(){
                var url="mine"
                this.axios.get(url).then(result=>{
                    if(result.data=="请登录"){
                        d1.innerHTML=`
                            <div class="denglu">您还没有登录</div>
                            <div class="denglu">点击登录<div>
                        `
                        d2.innerHTML=``
                    }else{
                        this.user=result.data[0]
                    }
                    var a=result.data
                })
            },
            dl(){
                this.$router.push("denglu")
            },
            zhanghao(){
                this.$router.push("denglu")
            },
            dizhi(){
                this.$router.push("dizhi")
            },
            kefu(){
                this.$messagebox.prompt("请输入您的问题或意见").then(({value,action})=>{
                   console.log(value);
                   console.log(action);
                   if(action=="confirm"){
                       if(!value){
                           this.$toast("您输入的内容为空")
                       }else{
                            this.$toast("感谢您的提问，我们将在一个工作日内将回答发送到您的手机")
                       }
                   }
                   
               }).catch(err=>{
                   console.log(err)
               })
            },
            lianxi(){
                this.$messagebox("电话","18812312345").then((action)=>{
                    console.log(action)
                    if(action=="confirm"){
                        this.$toast("欢迎您的来电")
                    }
                })
            }
        },
        created(){
            this.loadMore()
        }
    }
</script>
<style>
    .all{
        background-color:#f6f6f6;
    }
    .top{
        width:100%;
        height:45px;
        text-align:center;
        line-height:45px;
        border-bottom:1px solid #ccc;
        background-color:#fff;
    }
    .imgtext{
        width:100%;
        height:95px;
        padding:15px;
        display:flex;
        background-color:#fff;
    }
    .imgtext>img{
        width:65px;
        height:65px;
        margin-right:30px;
    }
    .zhanghao{
        padding:5px;
        background-color:#f45;
        border-radius:1.5rem;
        height:30px;
        margin-left:20px;
        margin-top:20px;
        color:pink;
    }
    .text_top{
        margin-top:5px;
        color:#333;
        font-weight:700;
        font-size:16px;
        margin-bottom:10px;
    }
    .text_bottom>img{
        width:16px;
        height:16px;
        margin-right:20px;
    }
    .text_bottom>span{
        color:#333;
        font-weight:700;
        font-size:16px;
    }
    .list{
        width:100%;
        margin-top:10px;
        margin-bottom:10px;
        display:flex;
        list-style:none;
        justify-content:space-around;
        padding:5% 0%;
        background-color:#fff;
    }
    .list>li{
        display:flex;
        flex-direction:column;
    }
    .list>li>p{
        margin-top: 8px;
        font-size: 12px;
    }
    .list>li>a>img{
        height:26px;
    }
    .dz{
        width:100%;
        background-color:#fff;
        padding:15px;
        display:flex;
        border-bottom:1px solid #eee;
    }
    .dz>img:last-child{
        margin-left:63%;
    }
    .dzimg{
        height:21px;
        margin-right:20px;
    }
    .denglu{
        width:100%;
        font-size:20px;
        text-align:center;
        padding-top:10px;
        color:#e6e6e6;
        background-color:#fff;
    }
</style>
<template>
    <div class="product_app">
        <!--顶部轮播图-->
        <div class="wlb" id="lb">
            <ul class="nlb">
                <li><a href=""><img src="../../assets/l1.jpg" alt=""></a></li>
                <li><a href=""><img src="../../assets/l2.jpg" alt=""></a></li>
                <li><a href=""><img src="../../assets/l3.jpg" alt=""></a></li>
                <li><a href=""><img src="../../assets/l4.jpg" alt=""></a></li>
            </ul>
        </div>
        <!--顶部导航图片-->
        <div class="topimg">
            <ul>
                <li>
                    <a href="#"><img src="http://127.0.0.1:3000/img/1.jpg" alt=""></a>
                </li>
                <li>
                    <a href="#"><img src="http://127.0.0.1:3000/img/2.png" alt=""></a>
                </li>
                <li>
                    <a href="#"><img src="http://127.0.0.1:3000/img/3.png" alt=""></a>
                </li>
                <li>
                    <a href="#"><img src="http://127.0.0.1:3000/img/4.jpg" alt=""></a>
                </li>
            </ul>
        </div>

        <!-- 人气首推 -->
        <p class="renqi">人气首推</p>
        <div class="top-r">
            <div class="top-1" @click="top_img1">
                <img src="http://127.0.0.1:3000/img/i1.png" alt="">
                <div class="top-text">
                    <p>恋你久久</p>
                    <p>￥139.00</p>
                </div>
            </div>
            <div class="top-1" @click="top_img2">
                <img src="http://127.0.0.1:3000/img/i3.png" alt="">
                <div class="top-text">
                    <p>今生挚爱</p>
                    <p>￥219.00</p>
                </div>
            </div>
            <div class="top-1" @click="top_img3">
                <img src="http://127.0.0.1:3000/img/i17.png" alt="">
                <div class="top-text">
                    <p>情话微甜</p>
                    <p>￥179.00</p>
                </div>
            </div>
        </div>

        <!-- 送花对象 -->
        <p class="songhua">送花对象</p>
        <div class="top-r">
            <div class="top-1">
                <img src="http://127.0.0.1:3000/img/d.png" alt="">
            </div>
            <div class="top-1">
                <img src="http://127.0.0.1:3000/img/e.png" alt="">
            </div>
            <div class="top-1">
                <img src="http://127.0.0.1:3000/img/f.png" alt="">
            </div>
        </div>

        <!-- 商品详情循环 -->
        <div class="goods-item" v-for="(item,i) of list" :key="i" @click="path(item.id)">
            <img :src="'http://127.0.0.1:3000/img/'+item.img_url">
            <div class="title">{{item.title}}</div>
            <div class="info">
                <span class="price">￥{{item.price}}</span>
            </div>
        </div>

        <img src="http://127.0.0.1:3000/img/nav.png" class="bottomimg" alt="">

        <div class="bottom_text">
            <a href="http://127.0.0.1:8080/#/Home">花语大全</a>
        </div>
        <p class="bottom_1">Copyright © 2007~2019 花多彩(中国鲜花礼品网)版权所有</p>
        <p class="bottom_1 mar-b">中国鲜花网领先品牌，鲜花速递专家！</p>
    </div>
</template>
<script>
    export default {
        //轮播图
        data(){
            return{
                list:[]
            }
        },
        methods:{
            /*传递id跳转到spxq页面 */
            path(id){
                var url="spxq"
                this.$router.push({
                    path:url,
                    query:{
                        id
                    }
                })
            },

            loadMore(){ //加载更多数据
                var url="shouye";
                // 将当前页码+1 
                
                // 创建参数对象
                this.axios.get(url).then(result=>{
                    // 数据覆盖
                    // this.list=result.data.data
                    // 数据追加
                    var rows=this.list.concat(result.data);
                    this.list=rows;
                    // console.log(rows)
                })
            },
            top_img1(){
                this.$router.push("spxq?id=1")
            },
            top_img2(){
                this.$router.push("spxq?id=3")
            },
            top_img3(){
                this.$router.push("spxq?id=17")
            }
        },
        created() {
            this.loadMore();
            
        },
    }
</script>
<style scoped>
    /*总的样式*/
    .product_app{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
    /**轮播 */
    .wlb{
        width:410px;
        height:247px;
        display:flex;
        padding:0px;
        overflow:hidden;
    }
    .nlb{
        width:1656px;
        height:247px;
        display:flex;
        list-style-type:none;
        padding:0px;
    }
    .nlb>li>a>img{
        width:410px;

    }
    .renqi{
        color:#F00;
        font-size:14px;
        background-color:#fff;
        width:100%;
    }
    .songhua{
        color:#000;
        font-size:14px;
        background-color:#fff;
        width:100%;
    }
    .top-r{
        width:100%;
        float:left;
        justify-content:space-between;
        display:flex;
        background-color:#fff;
        margin-bottom:5px;
    }
    .top-1{
        width:32%;
        position:relative;
        transition:box-shadow 0.3s linear 0s;
        box-shadow:3px 3px 10px #aaa;
    }
    .top-1>img{
        width:100%;
    }
    .top-text{
        width:128px;
        position:absolute;
        top:88px;
        left:0px;
        opacity:0.4;
        background-color:#000;
        z-index:9;
        height:40px;
        padding:5px 0px;
        text-align:center;
    }
    .top-text>p{
        color:#fff;
        font-size:13px;

    }
    .top-text>p+p{
        margin-top:3px;
    }
    /*顶部导航图片*/
    .topimg,.topimg>ul{
        display:flex;
        justify-content:space-between;
        list-style-type:none;
        height:75px;
        background-color:#fff;
        margin-bottom:5px;
        padding-left:5px;
    }

    .topimg>ul>li>a>img{
        width:75%;
        justify-content:space-between;
        
    }
    /*商品*/
    .product_app .goods-item{
        width:49%;
        box-sizing:border-box;/**改变计算盒子模型方式 */
        margin:2px 0;
        padding:2px;
        display:flex;/**弹性布局 */
        flex-direction:column;/**让内容纵向排列 */
        min-height:247px;
        border-radius:5px;
    }  
    .goods-item:hover{
        transition:box-shadow 0.3s linear 0s;
        box-shadow:3px 3px 10px #aaa;
    }
    .product_app{
        background-color:#F2F2F2;
    }
    .goods-item,.goods-item>img{
        background-color:#fff;
    }
    .product_app .goods-item img{
        width:100%;
    } 
    /*商品价格*/
    .price{
        color:#f00;
    }
    /*商品标题*/
    .title{
        color:#333;
    }
    .jiazai{
        float:right;
        margin-left:340px;
        color:#aaa;
        font-size:14px;
        margin-top:5px;
        margin-bottom:5px;
    }
    .bottomimg{
        width:100%;
        margin-top:15px;
    }
    .bottom_text{
        width:100%;
        text-align:center;
        padding:10px;
        background-color:#eee;
    }
    .bottom_text>a{
        text-decoration:none;
        color:#5F5F5F;
        margin:10px auto;
    }
    .bottom_1{
        width:406px;
        display:block;
        font-size:12px;
        text-align: center;
        padding: 4px 0;
        color: #CECECE;
    }
    .mar-b{
        margin-bottom:50px;
    }
    /**底部导航栏 */
     /*修改tabbar 默认文字颜色 */
    .mint-tabbar>.mint-tab-item{
        color:#333;
    }
    /*修改tabbar 选中文字颜色 */
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color:transparent;
        color:#FF6F89 ;
    }
    a{
        text-decoration:none
    }
    .bottom_tab{
        width:100%;
        height:56px;
        display:flex;
    }
</style>
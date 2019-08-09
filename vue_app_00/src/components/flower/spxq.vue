<template>
    <div>
        <!-- 商品详情循环 -->
        <div v-if='!pro==""' >
            <!-- 顶部导航栏 -->
            <div class="top_text">
                <a href="/"><img src="../../assets/left.png" class="f_l"></a>
                <span>{{pro.title}}</span>
            </div>
            <!-- 顶部大图片 -->
            <img :src="'http://127.0.0.1:3000/img/'+pro.img_url" class="top_img">
            <!-- 图片下方文字 -->
            <div class="title">{{pro.title_1}}</div>
            <div class="price">￥{{pro.price}}</div>
            <div class="cart" @click="cart">加入购物车</div>
            <div class="clear"></div>
            <div class="text">
                <p class="count_1">
                    <span class="count_1_1">花语</span>
                    <span class="count_1_2">{{pro.flower_content_1}}</span>
                </p>
                <p class="count_2">
                    <span class="count_1_1">花材</span>
                    <span class="count_1_2">{{pro.flower_content_2}}</span>
                </p>
                <p  class="count_3">
                    <span class="count_1_1">包装</span>
                    <span class="count_1_2">{{pro.flower_content_3}}</span>
                </p>
                <p class="count_4">
                    <span class="count_1_1">赠送</span>
                    <span class="count_1_2">{{pro.flower_content_4}}</span>
                </p>
            </div>
            <div v-if="pro.img_3!=null">
                <div class="text_img">图文详情</div>
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_1" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_2" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_3" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_4" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_5" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_6" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_7" class="w_100">
            </div>
            <div v-else>
                <div class="text_img">图文详情</div>
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_1" class="w_100">
                <img :src="'http://127.0.0.1:3000/img/'+pro.img_2" class="w_100">
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                pro:"",
            }
        },
        methods:{
            loadMore(){
                var id=this.$route.query.id;
                var url="spxq/?id="+id;
                // 将当前页码+1 
                
                // 创建参数对象
                this.axios.get(url).then(result=>{
                    // 数据覆盖
                    // this.list=result.data.data
                    // 数据追加
                    this.pro=result.data[0]
                    //var rows=this.list.concat(result.data);
                    //this.list=rows;
                    // console.log(rows)
                })
            },
            cart(){
                var id=this.$route.query.id;
                var url="addcart"
                this.axios.get(url,{params:{id}}).then(result=>{
                    if(result.data=="请登录"){
                        this.$router.push("denglu")
                    }else{
                        console.log(result)
                        if(result.data.affectedRows>0){
                            this.$toast("添加成功")
                        }
                    }
                })
            }
        },
        created() {
            this.loadMore();
        },
    }
</script>

<style>
    *{
        box-sizing:border-box;
    }
    /**顶部文字 */
    .top_text{
        width:100%;
        height:45px;
        text-align:center;
        line-height:45px;
        
    }
    /**顶部图片 */
    .top_img{
        width:100%;
        height:452px;
        border-top:1px solid #dfdcdc;
        border-bottom:1px solid #dfdcdc;
        
    }
    /**顶部导航栏做标签 */
    .f_l{
        float:left;
        margin-top:10px;
        margin-left:15px;
    }
    /**题目 */
    .title{
        font-size:15px;
        font-weight:700;
        margin:8px 15px;

    }
    /*价格 */
    .price{
        font-weight: 700;
        font-size: 24px;
        color:#f46;
        margin:0 15px;
    }
    /**内容 */
    .text{
       background-color:#f5f5f5;
       padding:20px 0;
    }
    /**下方第一块内容 */
    .count_1{
        width:100%;
        height:80px;
        padding:8px 15px;
        background:#fff;
    }
    .count_1_1{
        width:28px;
        margin-right:15px;
        display:block;
        float:left;
        color:#999;
        font-size:14px;
        height:100%;
    }
    .count_1_2{
        font-size:14px;
        display:block;

    }
     /**下方第二块内容 */
    .count_2{
        width:100%;
        height:58px;
        padding:8px 15px;
        background:#fff;
    }
     /**下方第三块内容 */
    .count_3{
        width:100%;
        height:37px;
        padding:8px 15px;
        background:#fff;
    }
     /**下方第四块内容 */
    .count_4{
        width:100%;
        height:37px;
        padding:8px 15px;
        background:#fff;
    }
    /**图片加文字 */
    .text_img{
        width:100%;
        padding:12px 15px;
    }
    .w_100{
        width:100%;
    }
    /**加入购物车 */
    .cart{
        padding:10px;
        float:right;
        background-color:#f45;
        color:#fff;
        font-size:15px;
        border-radius:0.5rem;
        margin-top:-40px;
        margin-bottom:20px;
        margin-right:20px;
        
    }
    /**清除浮动 */
    .clear{
        clear:both
    }
</style>
<template>
    <div>
        <div class="top_text">
            <a href="/"><img src="../../assets/left.png" class="f_l"></a>
            <span>地址管理</span>
        </div>
        <div id="d1">
            <div class="dizhi" v-for="(item,i) of list" :key="i" >
                地址：{{item.dzhi}}
                <span @click="del(item)" class="del">删除</span>
            </div>
        </div>
        <div class="img_text"  id="d2">
            
        </div>
        <div class="bottom">
            <p @click="tianjia">添加地址</p>
        </div>
        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[]
            }
        },
        methods:{
            loadMore(){
                var url="dizhi"
                this.axios.get(url).then(result=>{
                    var arr=result.data
                    this.list=arr
                    
                    if(arr.length<=0){
                        d2.innerHTML=`
                            <div class="img_ba"></div>
                            <p>试着添加地址试一试</p>
                        `
                        d1.innerHTML=``
                    }
                })
            },
            tianjia(){
                this.$messagebox.prompt("请输入您的地址").then(({value,action})=>{
                    if(action=="confirm"){
                        if(!value){
                            this.$toast("您输入的地址为空")
                        }else{
                            var url="dizhi"
                            this.$router.push({
                                path:url,
                                query:{
                                    value
                                }
                            })
                            if(this.$route.query!=""){
                                var $value=this.$route.query.value
                                var url="tianjia?value="+$value
                                this.axios.get(url).then(result=>{
                                    if(result.data=="请登录"){
                                        this.$router.push("denglu")
                                    }else{
                                        if(result.data.affectedRows>0){
                                            this.$toast("添加成功")
                                            this.loadMore()
                                        }
                                    }
                                })
                            }
                            

                        }
                    }
                })
            },
            del(a){
                var id=a.id
                
                var url="del"
                this.axios.get(url,{params:{id}}).then(result=>{
                    if(result.data.affectedRows>0){
                        this.$toast("删除成功")
                        this.loadMore()
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
    /**顶部文字 */
    .top_text{
        width:100%;
        height:45px;
        text-align:center;
        line-height:45px;
        border-bottom:1px solid #ddd;
        position:relative;
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
    /* 图片*/
    .img_text{
        padding:30px;
        text-align:center;
    }
    .img_text>img{
        width:60px;
        margin-bottom:10px;
    }
    .img_text>p{
        color:#e6e6e6;
    }

    .bottom{
        width:100%;
        text-align:center;
        position:absolute;
        bottom:10px;
    }
    .bottom>p{
        color:#fff;
        background-color:#f45;
        width:80%;
        margin-left:10%;
        padding:10px;
        text-align:center;
        border-radius:1.5rem;
        font-weight:700;
        font-size:14px;
    }
    .dizhi{
        width:100%;
        padding:15px;
        border:1px solid #e5e5e5;
        color:#666;
        font-size:15px;

    }
    .del{
        background-color:#f45;
        padding:5px;
        border-radius:0.5rem;
        color:#fff;
        font-size:12px;
        float:right;
    }
    .img_ba{
        background:url("../../assets/dzhi.png") no-repeat;
        width:60px;
        height:60px;
        margin-bottom:10px;
        margin-left:40%;
    }
</style>
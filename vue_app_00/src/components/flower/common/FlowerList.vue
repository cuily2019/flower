<template>
    <div class="flowerList_app">
        <div class="leftimgandtxt" v-for="(item,i) of list" :key="i">
        <!--左侧照片-->
            <img :src="'http://127.0.0.1:3000/img/'+item.img_url" class="imgstyle">
            <!-- 右侧文字 -->
            <div class="righttxt">
                <span class="title">{{item.title}}</span>
                <span class="class1">{{item.class1}}</span>
            </div>
        </div>
        <!-- 下方推荐文章 -->
        <div class="flowerList_crticle">
            <div class="crticle">推荐文章</div>
            <div class="content1" v-for="(item,i) of list1" :key="i">
            <span class="content">{{item.content}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[],
                list1:[]       
            }
        },
        created() {
            this.loadMore();
            this.loadMore1();
            
        },
        methods:{
            loadMore(){
                //1:创建url
                var url="flowerlist";
                //2:发送axios请求
                this.axios.get(url).then(result=>{
                    
                    this.list=result.data;
                    
                }) 
            },
            loadMore1(){
               //1:创建url
                var url="crticle";
                //2:发送ajax请求
                this.axios.get(url).then(result=>{
                    
                    this.list1=result.data;
                    
                }) 
            },
            itemdoClick(id){
                
            }
        }
    }
</script>
<style scoped>
    /*最外层父元素样式*/
    .flowerList_app{       
        display:block;
        /*水平方向两端对齐 */
        justify-content:space-between;
        /*给面板顶部设置内边距和顶部导航分离 */
        padding-top:42px; 
        /*背景颜色 */
        background-color:#fff;
        /*字体颜色 */
        color:#333;      
    }
    /* 图片与文字总体样式*/
    .leftimgandtxt{
        /*弹性布局 */
        display:flex;
        /*上下内边距 */
        padding:13px 0;
        /*边框*/
        border-top:0.5px solid #ddd;
    }
    /*图片的样式 */
    .imgstyle{
        /*图片宽度和高度*/
        width:90px;
        height:65px;
        /*左右外边距 */
        margin:0 10px;
    }
    /*右边文字样式 */
    .righttxt{
        display:flex;/*弹性布局*/
        flex-direction:column;/*纵向排列 */
        justify-content:center;/*居中 */
        margin-left:7px;/*左外边距 */
    }
    /*第一行字体样式 */
    .title{
        font-size:15px;/*字体大小 */
    }
    /*第二行字体样式 */
    .class1{
        margin-top: 10px;/*上外边距 */
        font-size: 11px;/*字体大小 */
        line-height: 11px;/*行高 */
        padding-top:22px;/*上内边距 */
    }
    /*下放推荐文章外层父元素样式 */
    .flowerList_crticle{
        display: flex;/*弹性布局 */
        flex-direction:column;/*纵向排列*/
        justify-content:center;/*居中 */
        padding-bottom:55px;/*下内边距 */
    }
    /*推荐文章样式 */
    .crticle{
        font-size: 15px;/*字体大小 */
        line-height: 15px;/*行高 */
        padding: 13px 11px;/*内边距*/
        background-color:#F2F2F2;/*背景颜色 */
        color:#333;/*字体颜色 */
    }
    /*推荐文章标题样式 */
    .content1{
        border-bottom:1px solid #F2F2F2;
    }
    /*文章样式 */
    .content{
        height: 39px;/*高度 */
        line-height: 39px;/*行高*/
        padding: 0 11px;/*左右内边距 */
        /*white-space: nowrap;*//**段落中文本不进行换行 */
        font-size:14px;/*字体大小 */
    }
</style>
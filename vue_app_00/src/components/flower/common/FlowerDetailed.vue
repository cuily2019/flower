<template>
    <div class="flowerDetailed-app">
    <!-- 顶部导航栏 -->
        <div class="page-wrap">
            <huatitlebar leftFirstText="首页>" leftSecondText="花语大全>" rightText="文章分类>" :shouye="myshouye" :fenlei="myfenlei"></huatitlebar>          
        </div>
        <div class="flowerDetailed" v-for="(item,i) of list" :key="i">
            <!-- 分类 -->
            <p class="p1"></p>
            <div class="title">           
                <span class="toptxt">{{item.title}}</span>
                <span style="font-size:10px;">{{item.class1}}</span>
            </div>
            <!-- 图片上方文字 -->
            <div class="content" > 
                <p>{{item.content1}}</p>
                <!-- 图片 -->
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url1">
                <span class="smalltitle">{{item.content2}}</span>
                <span>{{item.content3}}</span>
                <span>{{item.content4}}</span>
                <span>{{item.content5}}</span>
                <span class="maxtitle">{{item.content6}}</span>
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url2">
                <span class="smalltitle">{{item.content7}}</span>
                <span>{{item.content8}}</span>
                <span>{{item.content9}}</span>
                <span>{{item.content10}}</span>
                <span class="maxtitle">{{item.content11}}</span>
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url3">
                <span class="smalltitle">{{item.content12}}</span>
                <span>{{item.content13}}</span>
                <span>{{item.content14}}</span>
                <span>{{item.content15}}</span>
                <span class="maxtitle">{{item.content16}}</span>
                <img :src="'http://127.0.0.1:3000/img/'+item.img_url4">
                <span class="smalltitle">{{item.content17}}</span>
                <span>{{item.content18}}</span>
                <span>{{item.content19}}</span>
                <span>{{item.content20}}</span>
                
            </div>
        </div>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="active" fixed>
            <mt-tab-item id="message" @click.native="changeState(0)">
                <tabbaricon
                    :selectedImage="require('../../../assets/ic_home_selected.png')"
                    :normalImage="require('../../../assets/ic_home_normal.png')"
                    :focused="currentIndex[0].isSelect">
                </tabbaricon>首页            
            </mt-tab-item>
            <mt-tab-item id="message2" @click.native="changeState(1)" >
                <tabbaricon
                    :selectedImage="require('../../../assets/ic_sort_selected.png')"
                    :normalImage="require('../../../assets/ic_sort_normal.png')"
                    :focused="currentIndex[1].isSelect">
                </tabbaricon>分类            
            </mt-tab-item>
            <mt-tab-item id="message3" @click.native="changeState(2)">
                <tabbaricon
                    :selectedImage="require('../../../assets/ic_phone_selected.png')"
                    :normalImage="require('../../../assets/ic_phone_normal.png')"
                    :focused="currentIndex[2].isSelect">
                </tabbaricon>电话            
            </mt-tab-item>
            <mt-tab-item id="message4" @click.native="changeState(3)">
                <tabbaricon
                    :selectedImage="require('../../../assets/ic_cart_selected.png')"
                    :normalImage="require('../../../assets/ic_cart_normal.png')"
                    :focused="currentIndex[3].isSelect">
                </tabbaricon>购物车            
            </mt-tab-item>
            <mt-tab-item id="message5" @click.native="changeState(4)">
                <tabbaricon
                    :selectedImage="require('../../../assets/ic_my_selected.png')"
                    :normalImage="require('../../../assets/ic_my_normal.png')"
                    :focused="currentIndex[4].isSelect">
                </tabbaricon>我的          
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    // 引入子组件
    import HuaTitleBar from './HuaTitleBar.vue'
    import TabBarIcon from './TabBarIcon.vue'
    export default {
        data(){
            return{
                //子组件id
                active:"message",
                //使用数据保存图片焦点状态
                currentIndex:[
                    {isSelect:true},
                    {isSelect:false},
                    {isSelect:false},
                    {isSelect:false},
                    {isSelect:false}
                ],
                list:[],
            }
        },
        created() {
            this.loadMore();
        },
        methods: {
            myshouye(){
                
            },
            myfenlei(){
                
            },
            changeState(n){
                //1.n当前按钮下标
                //2.创建循环数据
                for(var i=0;i<this.currentIndex.length;i++){
                //3.如果当前下标与参数下标一致 true
                    if(n==i){
                        this.currentIndex[i].isSelect=true;
                    }else{//4.其他元素 false
                        this.currentIndex[i].isSelect=false;
                    }
                }   
            },
            loadMore(){
                //1.创建url
                var url="flowerlist";
                //2.发送axios请求
                 this.axios.get(url).then(result=>{
                    
                    this.list=result.data;
                }) 
            }          
        },
        components:{
             "huatitlebar":HuaTitleBar,
             "tabbaricon":TabBarIcon
        }
        
    }
</script>
<style scoped>
    /*最外层父元素样式 */
    .flowerDetailed-app{
        display:flex;/*弹性布局 */
        flex-direction:column;/*纵向排列 */
        justify-content:center;  
    }
    /*标题样式 */
    .title{ 
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:14px 0;
        font-size:15px;
        border-bottom:0.5px solid #ddd;
        margin-top:42px;
        background:#fff;
        padding:14px 10px;
        width:355px;height:41px;
    }
    .p1{
        height:5px;
        background-color:#ddd;
    }
    /*文字样式 */
    .toptxt{
        margin-bottom:10px;
    }
    /*.flowerDetailed{ 
       
       */
    .content{
        display:flex;
        flex-direction:column;
        justify-content:center;
         padding:30px;
    }
    .flowerDetailed div p{
        font: 14px/1.5 "微软雅黑";
        color: #333;
        margin-bottom:40px;
    }
     .flowerDetailed div img{
         width:315px;height:317px;
     }
     .flowerDetailed div span{
         font: 14px/1.5 "微软雅黑";
         color: #333;
     }
     .smalltitle,.maxtitle{
         margin-top:20px;
     }
     .maxtitle{
         margin-bottom:20px;
     }
     /*修改tabbar 默认文字颜色 */
    .mint-tabbar>.mint-tab-item{
        color:#333;
    }
    /*修改tabbar 选中文字颜色 */
    .mint-tabbar>.mint-tab-item.is-selected{
        background-color:transparent;
        color:#FF6F89 ;
    }
</style>
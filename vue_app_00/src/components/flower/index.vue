<template>
    <div>
        <!-- 面板-->
        <!-- 首页 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="message1">
                <shouye></shouye>   
            </mt-tab-container-item>
        </mt-tab-container>

        <!-- 花语大全 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="message2">
                <home></home>
             </mt-tab-container-item>
        </mt-tab-container>     
        
        <!-- 电话页面 -->
        

        <!-- 我的页面 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="message5">
                <mine></mine>
            </mt-tab-container-item>
        </mt-tab-container>

        <!--  底部导航栏 -->
        <mt-tabbar v-model="active" fixed class="bottom_tab">
            <mt-tab-item id="message1" @click.native="changeState(0)">
                <tabbaricon
                    :selectedImage="require('../../assets/ic_home_selected.png')"
                    :normalImage="require('../../assets/ic_home_normal.png')"
                    :focused="currentIndex[0].isSelect">
                </tabbaricon>首页            
            </mt-tab-item>
            <mt-tab-item id="message2" @click.native="changeState(1)" >
                <tabbaricon
                    :selectedImage="require('../../assets/ic_sort_selected.png')"
                    :normalImage="require('../../assets/ic_sort_normal.png')"
                    :focused="currentIndex[1].isSelect">
                </tabbaricon>花语            
            </mt-tab-item>
            <mt-tab-item id="message3" @click.native="changeState(2)">
                <tabbaricon
                    :selectedImage="require('../../assets/ic_phone_selected.png')"
                    :normalImage="require('../../assets/ic_phone_normal.png')"
                    :focused="currentIndex[2].isSelect">
                </tabbaricon>电话            
            </mt-tab-item>
            <mt-tab-item id="message4" @click.native="changeState(3)">
                <tabbaricon
                    :selectedImage="require('../../assets/ic_cart_selected.png')"
                    :normalImage="require('../../assets/ic_cart_normal.png')"
                    :focused="currentIndex[3].isSelect">
                </tabbaricon>购物车            
            </mt-tab-item>
            <mt-tab-item id="message5" @click.native="changeState(4)">
                <tabbaricon
                    :selectedImage="require('../../assets/ic_my_selected.png')"
                    :normalImage="require('../../assets/ic_my_normal.png')"
                    :focused="currentIndex[4].isSelect">
                </tabbaricon>我的          
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import shouye from './shouye_child.vue'
import TabBarIcon from './common/TabBarIcon.vue'
import home from './huayu.vue'
import mine from './mine.vue'
    export default {
        //轮播图
        data(){
            return{
                //子组件id
                active:"message1",
                //使用数据保存图片焦点状态
                currentIndex:[
                    {isSelect:true},
                    {isSelect:false},
                    {isSelect:false},
                    {isSelect:false},
                    {isSelect:false}
                ]
            }
        },
        watch:{
            active(now,old){
                console.log(now,old)
                if(now=="message3"){
                    this.active=old;
                    this.currentIndex.map((el,i)=>{
                        el.isSelect=false
                    })
                    this.currentIndex[old.slice(old.length-1)-1].isSelect=true
                    this.$messagebox("电话","18812312345").then((action)=>{
                        console.log(action)
                        if(action=="confirm"){
                            this.$toast("欢迎您的来电")
                        }
                    })
                }
                //this.$messageBox("21113")
            }
        },
        methods:{
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
            }
        },
        
        components:{
            "tabbaricon":TabBarIcon,
            "shouye":shouye,
            "home":home,
            "mine":mine,
        }
    }
</script>
<style scoped>
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
    
</style>
//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from"./components/HelloWorld.vue"
import denglu from "./components/flower/denglu.vue"
import shouye from "./components/flower/index.vue"
import zhuce from "./components/flower/zhuce.vue"
import mine from "./components/flower/mine.vue"
import Home from "./components/flower/huayu.vue"
import HuaTitleBar from "./components/flower/common/HuaTitleBar.vue"
import FlowerList from "./components/flower/common/FlowerList.vue"
import TabBarIcon from "./components/flower/common/TabBarIcon.vue"
import FlowerDetailed from './components/flower/common/FlowerDetailed.vue'
import spxq from "./components/flower/spxq.vue"
import dizhi from "./components/flower/dizhi.vue"

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/a',component:HelloContainer},
    {path:'/',component:shouye},
    {path:'/denglu',component:denglu},
    {path:'/zhuce',component:zhuce},
    {path:'/Home',component:Home},
    {path:'/HuaTitleBar',component:HuaTitleBar},
    {path:'/FlowerList',component:FlowerList},
    {path:'/TabBarIcon',component:TabBarIcon},
    {path:'/FlowerDetailed',component:FlowerDetailed},
    {path:'/spxq',component:spxq},
    {path:'/mine',component:mine},
    {path:'/dizhi',component:dizhi},
    
  ]
})

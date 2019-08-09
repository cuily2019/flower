import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不动保存原来的位置
//原因：引入有序
//第三方组件库在下面引入
//1.引入mint-ui库中所有组件：完整引入
import MintUI from 'mint-ui'
//2.单独引入mint-ui样式文件
import'mint-ui/lib/style.css'
//3.将mint-ui组件库中组件注册vue实例中
Vue.use(MintUI);
//4.引入图标字体样式文件
import'./font/iconfont.css'
// 5.引入axios.js文件
import axios from './axios'
// 6.引入vuex
import Vuex from 'vuex'
// 7.注册vuex组件
Vue.use(Vuex)
// 8.创建store
var store=new Vuex.Store({
  // Vuex中全局共享的数据
  state:{cartCount:0},
  // 修改vuex中全局共享的数据
  mutations:{
    // 购物车数量+1
    increment(state){
      state.cartCount++;
    },
    // 购物车数量增加指定值
    updateCount(state,c){
      state.cartCount+=c
    }
  },
  // 获取vuex中全局共享的数据
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }

})
// 9.将store保存vue实例
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),//创建一个根组件
  store
}).$mount('#app')//挂在到id为app的元素上
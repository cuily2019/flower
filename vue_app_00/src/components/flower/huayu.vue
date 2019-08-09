<template>
    <div class="hua_container">
        <div class="page-wrap">
            <huatitlebar leftFirstText="首页>" leftSecondText="花语大全>" rightText="文章分类>" :shouye="myshouye" :fenlei="myfenlei"></huatitlebar> 
        </div>    
        <mt-tab-container>
            <mt-tab-container-item>
                <flowerList></flowerList>
             </mt-tab-container-item>
        </mt-tab-container>      
        
        
    </div>
</template>
<script>
import HuaTitleBar from './common/HuaTitleBar.vue'
import FlowerList from './common/FlowerList.vue'
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            myshouye(){
                
            },
            myfenlei(){
                
            },
        },
        components:{
            "huatitlebar":HuaTitleBar,
            "flowerList":FlowerList,
        }
    }
</script>
<style scoped>

</style>
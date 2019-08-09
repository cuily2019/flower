<template>
    <div class="Title">
            <!-- 左侧文字 -->
            <div class="left-head" @click="shouye">
                <span>{{leftFirstText}}</span>
                <span class="huayu">{{leftSecondText}}</span>  
            </div>
            <!-- 右侧文字 -->
        <div class="right-head" @click="fenlei">
            <span>{{rightText}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            leftFirstText:{dafault:""},
            leftSecondText:{dafault:""},
            rightText:{dafault:""},
            shouye:{type:Function},
            fenlei:{type:Function}
        },
        data(){
            return{}
        }
    }
</script>
<style>
    .Title{
        display:flex;
        position:fixed;
        background-color:#fff;
        z-index:999;
        width:100%;height:41px;
        justify-content:space-between;
        align-items:center;
        font-size:14px;
        border-bottom:1px solid #ddd;
    }
    .left-head,.right-head{
        display:inline-block;
        display:flex;
    }
    .left-head{
        margin-left:10px;
    }
    .huayu{
        margin-left:2px;
    }
    .right-head{
        margin-right:10px;
    }
</style>
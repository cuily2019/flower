<template>
    <div class="tabbar">
        <!--<h1>TabBarIcon.vue</h1>-->
        <img :src="focused?selectedImage:normalImage" class="imgstyle">
    </div>
</template>
<script>
    export default {
        props:{
            focused:false,
            selectedImage:{default:""},
            normalImage:{default:""}
        },
        data(){
            return{}
        }
    }
</script>
<style>
    .tabbar{
        height:30px;
    }
    .imgstyle{
        width:30px;height:30px;
    }
    
</style>
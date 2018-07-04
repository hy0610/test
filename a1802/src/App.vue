<template>
  <div>
    <navbar>

      <i class="iconfont icon-category" @click="isshow=!isshow"></i>



    </navbar>
    <sidebar :show="isshow" @mhevent="isshow=false"></sidebar>

    <section>
    <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navbar from "./components/common/navbar"
import sidebar from "./components/common/sidebar"
export default {
     
        data(){
          return{
            isshow:false
          }
        },


        components:{
          navbar,
          sidebar
        }
      
}
</script>

<style>

  
  *{
    padding: 0px;
    margin: 0px
  }
  html,body{
    height: 100%
  }

  section{
    position: relative;
    top: 50px;
    

  }
</style>

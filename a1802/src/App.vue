<template>
  <div>
    <ul>
      <router-link to="/detail1" tag="li" activeClass="abc">首页</router-link>
      <router-link to="/detail2" tag="li" activeClass="abc">家具</router-link>
      <router-link to="/detail3" tag="li" activeClass="abc">数码</router-link>
      <router-link to="/detail" tag="li" activeClass="abc">酷装备</router-link>
      <router-link to="/detail4" tag="li" activeClass="abc">美妆</router-link>
      <router-link to="/detail5" tag="li" activeClass="abc">秒杀</router-link>
      </ul>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>

*{
  padding: 0;
  margin:0;
}
ul{
  width: 100%;
  height: 40px;
  background: red;
  position: fixed;
  top: 0;
  z-index: 1
}
  
  li{
    list-style: none;
    width: 16%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    float: left;
  }

  .abc{
      border-bottom:5px solid #ce1b27;
  }
 
</style>




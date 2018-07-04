<template>
  <div>
    <ul>
    	<router-link tag="li" to="/film/nowplaying" activeClass="active">正在热映 </router-link>
    	<router-link tag="li" to="/film/comingsoon" activeClass="active">即将上映11 </router-link> 
	 </ul>
   	 <router-view></router-view>
  </div>
</template>


<script type="text/javascript">


export default {
 
}


</script>



<style type="text/css" scoped>
  
	ul{
		display: flex
	}
	li{
		flex:1;
		text-align: center;
		height: 40px;
		line-height: 40px;	
		list-style: none	
	}

	.active{
		border-bottom:5px solid red;
	}

</style>
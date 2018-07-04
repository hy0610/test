<template>
	<nav>
  <div class="left"> 
   
    <slot></slot>
     <span>卖座电影</span>
  </div>
  <div class="right">
  	<span>大连</span>
  	 <i class="iconfont icon-account"></i>
  </div>

</nav>

</template>


<script type="text/javascript">


export default {
 
}



</script>



<style type="text/css" scoped>
  
nav {
 	position: fixed;
 	top: 0;
 	left: 0;
 	width: 100%;
 	height: 50px;
 	background: black;
 	color: white;
 	line-height: 50px;
 	font-size: 14px;
  z-index: 1
}

.left{
	float: left;
	margin-left: 10px;
}
.left span{
	margin-left: 10px;
}
.right{
	float: right;
	margin-right: 10px;
}
.right span{
	margin-right: 10px;
}


</style>
<template>
  	<div>
   		<p></p>
   		<p></p>  
   		<span></span>
   		<span></span>
   		<span></span>
   		<div></div>
   		<div></div>
 	</div>
</template>

<script>

import axios from "axios";
export default {
 

 data(){
		return {
			list:[],
			looplist:[]
		}
	},
 	mounted(){
			
 		axios.get("ajax/wap/getgdsinfo.jsp?id=01904577&tj=").then(res=>{
 			console.log(res.data)
 			this.list = res.data.gimgitems
 			
 		})
}
}
</script>

<style scoped>
  
</style>

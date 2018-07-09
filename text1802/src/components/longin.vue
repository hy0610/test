<template>
	<div>
		帐号	<input type="text" name="">
		密码<input type="password" name="">
		<button>登录</button>
	</div>
</template>

<script type="text/javascript">

	import axios from "axios"
	export default{
		
	mounted(){
			
 		// axios.get("/login").then(res=>{
 			
 		// 	console.log(res.body)	
 		// })
 		fetch("/login").then(res=>res.json()).then(res=>{				
				console.log(res)	
			})
}
	}
</script>



<style type="text/css" lang="scss" scoped>
	
</style>
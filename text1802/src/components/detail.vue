<template>
  <div id="detial-1">
  		
   		<ul>
			<li v-for="data in list" @click="handleClick(data.p_gdsid)" :key="data.id">
				<a href=""><img :src="data.p_img"></a>
				<div class="aaa">
				<a href="">{{data.p_gdsname}}</a>
				<p>{{data.p_gdstitle}}</p>
				<span>￥{{data.p_mprice}}</span>
				</div>
			</li>
		</ul>
  </div>
</template>

<script>

import mhrouter from "../router"
import axios from "axios"
export default {
	
	data(){
		return {
			list:[],
			looplist:[]
		}
	},
 	mounted(){
			
 		axios.get("/ajax/wap/getresult.jsp?pageno=1&productsort=019007&order=4&psize=48&pprice=&brand=&shopd1=&iftkt=").then(res=>{
 			
 			this.list = res.data.products 			
 		})
},	
 	methods:{
			handleClick(id){
							
				mhrouter.push(`/list/${id}`) 
			}
		}

}
</script>

<style scoped lang="scss">
	*{
   	padding: 0;
   	margin: 0;
   }
  	#detial-1{
  		overflow: hidden;
  	}
 
 
   ul{
   	list-style: none;
   
   	
   }

   li{
   width: 100%;
   height: 156px;
	border-bottom: 1px solid #Ccc;
	padding-top: 20px;
   }
   li:nth-child(odd){
   	position:relative;
	   	img{
	   		width: 136px;
	   		height: 136px;
	   		float: left;
	   	}
	   	.aaa{
	   		margin-left: 150px;
	   	}
	   	a{
	   		text-decoration: none;
	   		font-size: 14px;
	   		color: #663704;
	   	}
	   	p{
	   		font-size: 18px;
	   		color: red;
	   		margin-top:5px;

	   	}
	   	span{
	   		color: #ed3d00;
	   		font-size: 16px;
	   		display:block;
	   		position:absolute;
	   		bottom:20px;
	   		left:150px;
	   		
	   	}

   }

   li:nth-child(even){
   		position:relative;
	   	img{
	   		width: 136px;
	   		height: 136px;
	   		float: right;
	   	}
	   	.aaa{
	   		margin-left: 10px;
	   	}
	   	a{
	   		text-decoration: none;
	   		font-size: 14px;
	   		color: #663704;
	   	
	   	}
	   	p{
	   		font-size: 18px;
	   		color: red;
	   		margin-top:5px;

	   	}
	   	span{
	   		color: #ed3d00;
	   		font-size: 16px;
	   		
	   		display:block;
	   		position:absolute;
	   		bottom:20px;
	   		left:10px;
	   	}

   }
  
</style>

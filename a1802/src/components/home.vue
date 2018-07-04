<template>
  <div>

  	<swipe class="my-swipe">
  	  <swipe-item class="slide1" v-for="data in looplist" :key="data.id">
  	  	<img :src="data.imageUrl">
  	  </swipe-item>
  	 
  	</swipe>
    <ul>
    	<li v-for="data in list" :key="data.id">
    		
    		<img :src="data.cover.origin">
    		<h3>{{data.name}}</h3>
    	</li>
    </ul>
  </div>
</template>


<script type="text/javascript">

import "vue-swipe/dist/vue-swipe.css"

import { Swipe, SwipeItem } from 'vue-swipe'


import axios from "axios"

export default {


	
	data(){
		return {
			list:[],
			looplist:[]
		}
	},

	components:{
		"swipe" : Swipe,
		"swipe-item": SwipeItem
	},
 	mounted(){
 		// axios.get("/v4/api/billboard/home?__t=1530621435161").then(res=>{
 		// 	console.log(res.data)


 		// }).catch(error=>{
 		// 	console.log(error)
 		// })


			fetch("/v4/api/billboard/home?home?__t=1530621435161").then(res=>res.json()).then(res=>{
				 console.log(res);

				 this.looplist = res.data.billboards
				
			})

 		axios.get("v4/api/film/now-playing?__t=1530621435167&page=1&count=5").then(res=>{
 			console.log(res.data)

 			this.list = res.data.data.films
 		})
 	}
}


</script>



<style type="text/css" scoped>
  li{
  	padding: 10px;
  }
  img{
  	width: 100%
  }

  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
  
   
  }
   .slide1 img{
   	width: 100%
   }
  

</style>
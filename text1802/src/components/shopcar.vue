<template>
	<div id="box">
		<swipe class="my-swipe" :auto="2000">
		  <swipe-item class="slide1" v-for="data in looplist" :key="data.id">
		  	<img :src="data.pmpic"/>
		  </swipe-item>
		  
		</swipe>
		
		<ul class="pmlist">
			<li v-for="data in list" :key="data.id"  @click="detial(data.pmurl)">
				<img :src="data.pmpic"/>
				
			</li>
		</ul>
		<ul class="tjlist">
			<li v-for="data in tjlist" :key="data.id"  @click="detial(data.pmurl)">
				<img :src="data.pmpic"/>
				
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

	// require('vue-swipe/dist/vue-swipe.css');//vue-swipe css 引入
 
 	import "vue-swipe/dist/vue-swipe.css"
	import { Swipe, SwipeItem } from 'vue-swipe';
	import { Indicator } from 'mint-ui';
	import axios from "axios";//
	export default{

		data(){
			return {
				list:[],
				looplist:[],
				tjlist:[]
			}
		},

		components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem //注册局部组件
		},
		methods:{
			detial(pmu){
				  window.location.href = pmu
			}
		},

		mounted(){
			Indicator.open('正在加载中...');
			fetch("/ajax/wap/getzttm2016.jsp").then(res=>res.json()).then(res=>{
				console.log(res);
				this.looplist  =res.lblist;
				console.log(this.looplist);
				this.list =  res.pmlist;
				console.log(res.pmlist);
				Indicator.close();
				this.tjlist=res.tjlist
			})
			
		}
	}
</script>



<style type="text/css" lang="scss" scoped>
	#box{
		background-color: #eee;
	}
	.pmlist{
		li{
			float:left;
			width: 50%;
			img{
				width:96%;
				margin:2% 2% 0;
			}
		}
	}


	.my-swipe {
	  height: 200px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  margin:5px 0 5px;
	}

	.slide1 {
	  background-color: #0089dc;
	  color: #fff;
	}

	.slide2 {
	  background-color: #ffd705;
	  color: #000;
	}

	.slide3 {
	  background-color: #ff2d4b;
	  color: #fff;
	}

	.my-swipe {
		img{
			width:100%;
		}
	}
</style>
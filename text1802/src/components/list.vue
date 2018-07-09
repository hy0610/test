<template>
  	<div>
		<swipe class="my-swipe" :auto="1000" :showIndicators="false">
		  <swipe-item class="slide1"  v-for="data in list" :key="data.id"><img :src="data.gimgitem"/></swipe-item>		  
		</swipe>
				<p>{{title.pgdsname}}</p>
				<p>{{title.pgdsename}}</p>
				<p>{{title.shoptxt}}</p>
				<p>{{title.pgdstitle}}</p>

		选择规格：<ul>

			<li v-for="data in looplist" class="specifications">{{data.skuname}}</li>
		</ul>

		<div class="aa">
		<p>商品数量：</p><span>-</span><span>1</span><span>+</span>
		</div>


		<ul class="list">
			<li v-for="data in listone">
				<span>{{data.crname}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.stime}}</span>
				<p>{{data.ctxt}}</p>
			</li>
		</ul>




		<ul class="recommended">
			<li v-for="data in listtwo">
				<img :src="data.pabout_pic">
				<p>{{data.pabout_title}}</p>
				<span>￥{{data.pabout_price}}</span>

			</li>
		</ul>
				
 	</div>
</template>

<script>
	import "vue-swipe/dist/vue-swipe.css"
	import { Swipe, SwipeItem } from 'vue-swipe';
	import axios from "axios";
export default {
 data(){
		return {
			list:[],
			title:'',
			looplist:[],
			listone:[],
			listtwo:[]
		}
	},
	components:{
			"swipe":Swipe,
			"swipe-item":SwipeItem 
		},
 	mounted(){
			
 		axios.get(`/ajax/wap/getgdsinfo.jsp?id=${this.$route.params.id}&tj=`).then(res=>{
 			
 			this.list = res.data.gimgitems
 		
 			this.title=res.data

 			this.looplist = res.data.gdssku

 			this.listone = res.data.coms

 			this.listtwo = res.data.gabouts
 			
 		})

 		
}
}
</script>

<style scoped>
  .my-swipe {
  height: 400px;

 
}
	
	p:nth-child(3){
		color: #adadad;
		font-size: 12px
	}
	p:nth-child(4){
		color: #adadad;
		font-size: 12px
	}
	p:nth-child(5){
		color: red;
		font-size: 12px
	}
	li{
		list-style: none;
	}
	.specifications{
		width:71px ;
		height:28px;
		border-radius: 10px;
		border:1px solid #ccc;
		line-height: 28px;
		text-align: center;
		float: left;
		margin:5px;

	}

	.aa{
		margin-top: 230px;
		overflow: hidden;

	}
	.aa p{
		float: left
	}
	.aa span{
		width: 34px;
		height: 33px;
		border:1px solid #ccc;
		border-radius: 5px;
		display: block;
		float: left;
		line-height: 34px;
		text-align: center;
		margin-top: 10px

	}
	.list{
	
	}
	.list li{
		border-bottom: 1px solid #ededed;
		padding: 5px;
		font-size: 14px;
		margin-left: -38px;
	}

	.recommended{
		background: #f4f4f4;
		margin-left: -38px;
		overflow: hidden;
		display:flex ;
	}
	.recommended li{
		flex:1
	}

	.recommended li img{
		width: 95px;
		height: 95px;
	}
	.recommended p{
		font-size: 12px;
	}
	.recommended span{
		font-size: 12px;
		color:red;
		text-align: center;
		display: block;
	}
</style>

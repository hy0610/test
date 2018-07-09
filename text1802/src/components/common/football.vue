<template>
	<section id="football">
		<ul class="submt">
			<li><a href="/login">登录</a></li>
			<li><a href="/regester">注册</a></li>
			<li><a href="#top" target="_self">返回顶部</a></li>
		</ul>
		<div class="tel">
			<p>客服热线:400-108-5518(工作日9:00-18:00)</p>
			<p>Copyright ©2017 京030072</p>
		</div>
	</section>
 
</template>

<script type="text/javascript">
	export default{
		
	}
	//		客服热线:400-108-5518(工作日9:00-18:00)
	//	     Copyright ©2017 京030072	
</script>



<style type="text/css" lang="scss" scoped>
	*{
		margin:0;
		padding:0;
	}
	#football{
	
		height:120px;
		background: #eeeeee;
		
		overflow: hidden;
		.submt{
			list-style: none;
			height: 70px;
			display:flex;
			li{
				flex:1;
				height:70px;
				a{
					display: block;
					height: 70px;
					line-height: 70px;
					text-decoration: none;
					color:#999;
					text-align: center;  
					width: 100%;
					font-size: 16px;
				}
				
			}
		}
		.tel{
			height: 50px;
			font-size: 14px;
			color:#999;
			p{
				text-align: center;
				margin-bottom: 10px;
			}
		}
	}

</style>
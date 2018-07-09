<template>
	<div id="header">
		<a name="top" id="top"></a>
		<header class="p_header">

			<div class="logo">
				<a href="/home"><img src="./img/d1_logo.png" /></a>
			</div>
			<div class="search">
				<div id="sbut"><img src="./img/search.png" /></div>
				<input name="keyword" id="keyword" autocomplete="off" role="combobox" aria-haspopup="true" type="text" class="keys">
			</div>
			<div class="myuser">
				<a href="/longin"><img src="./img/my.png" alt="" /></a>
			</div>
			<div class="carth">
				<a href="/shopcar"><img src="./img/cart.png" alt="" /></a>
			</div>

		</header>
		<ul class="nav">

			<router-link to="/home" class="lianjie" activeClass="active" tag="li">首页</router-link>

			<router-link to="/Del1" class="lianjie" activeClass="active" tag="li">女士</router-link>

			<router-link to="/Del2" class="lianjie" activeClass="active" tag="li">数码</router-link>

			<router-link to="/Del3" class="lianjie" activeClass="active" tag="li">家居</router-link>

			<router-link to="/Detail" class="lianjie" activeClass="active" tag="li">酷装备</router-link>

			<router-link to="/Del4" class="lianjie" activeClass="active" tag="li">身体护理</router-link>

		</ul>
	</div>
</template>

<script type="text/javascript">
	import { mapState } from "vuex";
	export default {

		computed: {

			...mapState(["title"])

		}

	}
</script>

<style type="text/css" lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	#header {
		.p_header {
			height: 40px;
			line-height: 40px;
			display: flex;
			.logo {
				height: 36px;
				margin: 2px;
				flex: 3;
				a {
					display: block;
					height: 36px;
					margin: 0;
					padding: 0;
					img {
						height: 36px;
					}
				}
			}
			.search {
				flex: 5;
				position: relative;
				height: 24px;
				margin-top: 10px;
				overflow: hidden;
				border: 1px solid #000;
				border-radius: 3px;
				#keyword {
					width: 85%;
					border: 0;
					position: absolute;
					top: 2px;
					height: 20px;
					left: 2px;
					outline: none;
				}
				#sbut {
					width: 18%;
					position: absolute;
					z-index: 2;
					border: 0;
					background: #000;
					height: 24px;
					right: 0;
					line-height: 24px;
					text-align: center;
					img {
						height: 24px;
					}
				}
			}
			.myuser {
				flex: 1;
				a {
					display: block;
					height: 40px;
					text-align: center;
					img {
						height: 28px;
						margin-top: 8px;
					}
				}
			}
			.carth {
				flex: 1;
				a {
					display: block;
					height: 40px;
					text-align: center;
					img {
						height: 26px;
						margin-top: 9px;
					}
				}
			}
		}
		.nav {
			height: 36px;
			line-height: 36px;
			display: flex;
			font-size: 12px;
			text-align: center;
			background: #f66;
			color: #fff;
			.lianjie {
				display: block;
				height: 36px;
				line-height: 36px;
				text-decoration: none;
				color: #fff;
				flex: 1;
				
			}
			.active {
				display: block;
				height: 36px;
				line-height: 36px;
				text-decoration: none;
				color: #fff;
				flex: 1;
				border-bottom: 4px solid #f00;
				box-sizing: border-box;
			}
		}
	}
</style>
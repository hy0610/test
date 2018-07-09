<template>
	<div>
		<navbar></navbar>
		
		<section>
			<router-view></router-view>
		</section>
		<football></football>
	</div>
</template>

<script type="text/javascript">
	import navbar from "./components/common/navbar";
	import football from "./components/common/football";
	export default {
		data() {
			return {}
		},
		components: {
			navbar,
			football
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	html,
	body {
		height: 100%;
	}
	
	ul {
		list-style: none;
	}
	
	section {
		position: relative;
		top: 0px;
	}
</style>
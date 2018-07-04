<template>
	<transition name="bounce">
  		<aside v-show="show">
		   	<ul @click="handleClick()">
		      <router-link to="/home" tag="li" activeClass="abc">home</router-link>
		      <router-link to="/film" tag="li" activeClass="abc">film</router-link>
		      <router-link to="/card" tag="li" activeClass="abc">card</router-link>
		    </ul>
		   
 		</aside>
  </transition>
</template>


<script type="text/javascript">


export default {
 	props:["show"],

  methods:{
    handleClick(){
    this.$emit("mhevent")
    }
  }
}


</script>



<style type="text/css" scoped>
  
aside{
	position: fixed;
	width: 75%;
	height: 100%;
	top:50px;
	left:0px;
	background: black;
	color: white;
	font-size: 14px;
  z-index: 1
}
li{
	padding: 10px;
}

.bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform:translateX(-100%);
        opacity: 0;
      }
      100% {
        transform:translateX(0px);
        opacity: 1;
      }
    }

</style>
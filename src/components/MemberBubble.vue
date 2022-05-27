<!-- The bubble in the side menu -->
<template>
	<!-- When clicked, we just pass an event to the MemberList to bubble the click -->
	<div class= "back" @click= "$emit('passToMemberList')">
		<img :src="srcPath" alt= ""/>
	</div>
</template>

<script>
	export default {
		name: "MemberBubble",
		props: {
			src: String,
		},
		data() {
			return {
				srcPath: require(`@/assets/img/${this.src}`),
			}
		},
	}

</script>

<style scoped>
	@import '@/assets/style/style-data';
	img {
		width: 55px;
		height: 55px;
		margin: 7.5px 0;
		background: var(--dark-blue);
		border-radius: 50%;
	}
	.back {
		display: grid;
		place-items: center;
		width: 100%;
		cursor: pointer;
	}

	.back:hover img {
		padding: 2px;
		box-shadow: 0 0 10px var(--vue-green);
		transition: all .3s;
		transition-timing-function: ease-in;
	}
	/* The actually active component */
	.active img {
		padding: 0;
		background: var(--vue-green);
		box-shadow: 0 0 10px var(--dark-green);
	}
	.active:hover img{
		box-shadow: 0 0 20px var(--dark-green);
		transition: all .3s;
		transition-timing-function: ease-in;
	}
</style>
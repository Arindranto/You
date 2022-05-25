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
		width: 70px;
		height: 70px;
		padding: 3px;
		margin: 5px 0;
		background: var(--dark-blue);
		border-radius: 50%;
	}
	.back {
		display: grid;
		place-items: center;
		width: 100%;
		cursor: pointer;
	}
	.back:hover {
		background: var(--dark-blue);
	}
	.back:hover img {
		padding: 0;
		background: var(--vue-blue);
	}
	/* The actually active component */
	.active img {
		padding: 0;
		background: var(--vue-green);
		box-shadow: 0 0 10px #ffffff;
	}
	.active:hover {
		background: var(--vue-green);
	}
</style>
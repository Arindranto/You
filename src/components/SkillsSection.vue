<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<h3>SkillsSection</h3>
		<div id= "#content">

		</div>
	</section>
</template>

<script>
	export default {
		props: {

		},
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

	section {
		font-family: var(--title-font);
		color: #ffffff;
	}	
	#content {
		/* Container */
		border: solid 2px #ffffff;
		padding: 25px;
		border-radius: 10px;
		color: #ffffff;
	}
	.vue-green {
		color: var(--vue-green);
	}
</style>
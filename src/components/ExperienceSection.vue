<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<p>ExperienceSection</p>
		
	</section>
</template>

<script>
	/* props:
			* personalInfo: to get the information needed to be displayed such as firstname, lastname, etc... 
	*/
	export default {
		
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
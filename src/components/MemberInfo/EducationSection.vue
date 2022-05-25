<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<h1>{{ educationInfo.college }} {{ educationInfo.lycee }} </h1>
	
	</section>
</template>

<script>
	/* props:
			* EducationInfo: to get the information needed to be displayed such as firstname, lastname, etc... 
	*/
	export default {
		props: {
			educationInfo: {
				required: true,
				default: {
					college: "tsisy",
					lycee: "vide"
				}
			}
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
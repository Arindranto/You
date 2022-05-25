<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<h1><span class= "vue-green">{{ personalInfo.firstname }}</span> {{ personalInfo.lastname.toUpperCase() }}</h1>
		<div id= "#content">
			{{ personalInfo.age }} years old <span class= "vue-green">{{personalInfo.description}}</span>
		</div>
	</section>
</template>

<script>
	/* props:
			* personalInfo: to get the information needed to be displayed such as firstname, lastname, etc... 
	*/
	export default {
		props: {
			personalInfo: {
				required: true,
				default: {
					firstname: 'Firstname',
					lastname: 'Lastname',
					description: 'Description',
					age: 18,
					photo: 'logo.png',
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
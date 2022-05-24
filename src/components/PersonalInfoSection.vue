<!-- A simple PersonalInfoSection test -->
<template>
	<div>
			<h2><span class= 'vue-green'>{{personalInfo.firstname}}</span> {{personalInfo.lastname}}</h2>
	</div>
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
					birthdate: 'January 01st, 1970',
					photo: 'logo.png',
				}
			}
		},
		data() {
			const fullname= this.personalInfo.firstname + ' ' + this.personalInfo.lastname.toUpperCase();
			return {
				fullname,
			}
		},
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

	.vue-green {
		color: var(--vue-green);
	}
</style>
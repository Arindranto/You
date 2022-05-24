<!-- The base of a ProfileThing -->
<template>
	<div>
			<h2>{{fullname}}</h2>
	</div>
</template>

<script>
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
	
</style>
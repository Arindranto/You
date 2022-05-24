<!-- The base of a ProfileThing -->
<template>
	<div>
			<h2>HOME</h2>
		<h2>
			Personnal Informations
		</h2>
		<h2>		
		</h2>
	</div>
</template>

<script>
	export default {
		props: {
			personalInfo: {
				type: Object,
				required: true,
				default: {
					firstname: 'Firstname',
					lastname: 'Lastname',
					birthdate: 'January 01st, 1970',
					photo: 'logo.png',
				}
			}
		}
	}
</script>

<style scoped>
	
</style>
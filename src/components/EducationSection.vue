<!-- ContactInfoSection  -->
<template>
	<section>
		<h3>EducationSection</h3>
		<div id= "#content">
			<li>2019 ~ 2022 : {{educationInfo.universityDiploma}}<br>{{educationInfo.universitySchool}}</li>
			<li>2019 : {{educationInfo.collegeDiploma}}<br>{{educationInfo.collegeSchool}}</li>
		</div>
	</section>
</template>

<script>
	/* props:
			* personalInfo: to get the information needed to be displayed such as firstname, lastname, etc... 
	*/
	export default {
		props: {
			educationInfo: {
				required: true,
				default: {
					universitySchool: 'ISPM',
					collegeSchool: 'NDF',
					universityDiploma: 'L3',
					collegeDiploma: 'BACC'
					
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
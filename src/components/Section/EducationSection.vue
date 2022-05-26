<!-- EducationSection-->
<template>
	<section>
		<h3>Education :</h3>
		<div id= "#content">
			<li>2019 ~ 2022 : {{educationInfo.universityDiploma}}<br>{{educationInfo.universitySchool}}</li>
			<br>
			<li>2019 : {{educationInfo.collegeDiploma}}<br>{{educationInfo.collegeSchool}}</li>
			
			
		</div>
	</section>
	
</template>

<script>
  export default {
    props: {
      educationInfo: {
        required: true,
        default: {
          universitySchool: 'School',
          universityGrade: 'Grade',
          universityDuration: 'Duration',
          collegeSchool: 'School',
          collegeGrade: 'Grade',
          collegeDuration: 'Duration'

        }
      }
    },
  }
</script>

<style scoped>
	@import '@/assets/style/style-data';
	
	h3 {
		color: var(--vue-green)
	}
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
 
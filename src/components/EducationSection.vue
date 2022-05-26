<!-- EducationSection-->
<template>
	<section>
		<h3>EducationSection</h3>
		<div id= "#content">
      <li>{{educationInfo.universityDuration}}:{{educationInfo.universityGrade}}<br>{{educationInfo.universitySchool}}</li>
      <li>{{educationInfo.collegeDuration}}:{{educationInfo.collegeGrade}}<br>{{educationInfo.collegeSchool}}</li>
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
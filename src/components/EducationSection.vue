<!-- EducationSection  -->
<template>
	<section>
		<h3>EducationSection</h3>
		<div id= "#content">
      <!--<li>{{educationInfo.university.duration}}:{{educationInfo.university.grade}}<br>{{educationInfo.university.school}}</li>-->
      <!--<li>{{educationInfo.college.duration}}:{{educationInfo.college.grade}}<br>{{educationInfo.college.school}}</li>-->
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
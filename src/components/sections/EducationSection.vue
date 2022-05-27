<!-- EducationSection-->
<template>
	<section v-if= "educationInfo !== undefined && Object.keys(educationInfo).length">
		<h2 class= "vue-green">EDUCATION{{Object.keys(educationInfo).length === 1? "": "S"}}</h2>
		<div>
			<!-- <li>2019 ~ 2022 : {{educationInfo.universityDiploma}}<br>{{educationInfo.universitySchool}}</li>
			<li>2019 : {{educationInfo.collegeDiploma}}<br>{{educationInfo.collegeSchool}}</li> -->
			<!-- UNIVERSITIES -->
			<ul v-if= "'university' in educationInfo">
				<h3 class= "vue-green">Universit{{educationInfo.university.length == 1? "y": "ies"}}:</h3>
				<li v-for= "(univ, i) in educationInfo.university" :key= "i">
					<h4 class= "duration">{{univ.duration}}</h4>
					<h3>{{univ.school}}</h3>
					<h5 v-if= "'grade' in univ">{{univ.grade}}</h5>
				</li>
			</ul>
			<!-- HIGH SCHOOL -->
			<ul v-if= "'highschool' in educationInfo">
				<h3 class= "vue-green">High School{{educationInfo.highschool.length == 1? "": "s"}}:</h3>
				<li v-for= "(hs, i) in educationInfo.highschool" :key= "i">
					<h4 class= "duration">{{hs.duration}}</h4>
					<h3>{{hs.school}}</h3>
					<h5 v-if= "'grade' in hs">{{hs.grade}}</h5>
				</li>
			</ul>
			<!-- COLLEGE -->
			<ul v-if= "'college' in educationInfo">
				<h3 class= "vue-green">College{{educationInfo.college.length == 1? "": "s"}}:</h3>
				<li v-for= "(cl, i) in educationInfo.college" :key= "i">
					<h4 class= "duration">{{cl.duration}}</h4>
					<h3>{{cl.school}}</h3>
					<h5 v-if= "'grade' in cl">{{cl.grade}}</h5>
				</li>
			</ul>
		</div>
	</section>
	
</template>

<script>
  export default {
    props: {
			educationInfo: {
				required: true,
				default: {
					university: [
						{
							school: "University",
							year: "2022"
						}
					]
				}
			}
		},
  }
</script>

<style scoped>
	@import '@/assets/style/style-data';
	
	h3 {
		/* Education title */
		text-shadow: 0 0 10px var(--vue-green);
	}
	h3.vue-green {
		/* Section title: University, etc */
		margin-top: 15px;
		text-shadow: 0 0 0;
		border-bottom: solid 3px var(--vue-green) ;
	}
	h2 {
		/* School names */
		line-height: 25px;
	}
	section {
		/* The component itself is in a section */
		font-family: var(--title-font);
		color: #ffffff;
	}
	ul {
		/* Each section is in an unordered list */
		list-style: none;
		/*background: blue;*/
	}
	li {
		/* Each member of the list */
		margin-left: 20px;
	}
	span {
		display: block;
	}
	.vue-green {
		color: var(--vue-green);
	}
	.duration {
		margin-top: 15px;
	}
</style>
 
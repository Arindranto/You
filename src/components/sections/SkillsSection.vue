<!-- SkillsInfoSection -->
<template>
	<section v-if= "skillsInfo !== undefined && Object.keys(skillsInfo).length">
		<h2 class= "vue-green">SKILL{{Object.keys(skillsInfo).length === 1? "": "S"}}</h2>
		<div id= "#content">
			<!-- FRAMEWORKS -->
      <ul v-if= "'framework' in skillsInfo">
        <h3 class= "vue-green">Framework{{ skillsInfo.framework.length == 1? "": "s" }}</h3>
				<li v-for= "(skill, index) in skillsInfo.framework" :key= "index">
					<h3>{{skill}}</h3>
				</li>
      </ul>
      <!-- PROGRAMING LANGAGES -->
      <ul v-if= "'programmation' in skillsInfo">
        <h3 class= "vue-green">Programing language{{ skillsInfo.programmation.length == 1? "": "s" }}</h3>
				<li v-for= "(skill, index) in skillsInfo.programmation" :key= "index">
					<h3>{{skill}}</h3>
				</li>
      </ul>
      <!-- MODELIZATION -->
      <ul v-if= "'modelization' in skillsInfo">
				<h3 class= "vue-green">Modelization technique{{ skillsInfo.modelization.length == 1? "": "s" }}</h3>
				<li v-for= "(skill, index) in skillsInfo.modelization" :key= "index">
					<h3>{{skill}}</h3>
				</li>
      </ul>
      <!-- DBS -->
      <ul v-if= "'db' in skillsInfo">
        <h3 class= "vue-green">Database{{ skillsInfo.db.length == 1? "": "s" }}</h3>
				<li v-for= "(skill, index) in skillsInfo.db" :key= "index">
					<h3>{{skill}}</h3>
				</li>
      </ul>
      <!-- OFFICE AUTOMATION -->
      <ul v-if= "'officeAutomation' in skillsInfo">
        <h3 class= "vue-green">Office Automation Tool{{ skillsInfo.officeAutomation.length == 1? "": "s" }}</h3>
				<li v-for= "(skill, index) in skillsInfo.officeAutomation" :key= "index">
					<h3>{{skill}}</h3>
				</li>
      </ul>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
      skillsInfo: {
        required: true,
        default: {
          framework: [''],
					programmation: [''],
					modelization: [''],
					bd: [''],
					officeAutomation: ['']

        }
      }
    },
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

	h3.vue-green {
		margin-top: 15px;
		border-bottom: solid 3px var(--vue-green);
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
	ul {
		list-style: none;
	}
	li{
		padding-left: 20px;
	}
	li:first-of-type {
		margin-top: 15px;
	}
</style>
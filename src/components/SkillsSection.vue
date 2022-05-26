<!-- SkillsInfoSection -->
<template>
	<section>
		<h3>SkillsSection</h3>
		<div id= "#content">
      <ul>
        Framework :
        <li v-for= "(skill, index) in skillsInfo.framework" :key= "index">{{skill}}</li>
      </ul>
      <ul>
        Programing Language :
        <li v-for= "(skill, index) in skillsInfo.programmation" :key= "index">{{skill}}</li>
      </ul>
      <ul>
        Modelization :
        <li v-for= "(skill, index) in skillsInfo.modelization" :key= "index">{{skill}}</li>
      </ul>
      <ul>
        Database :
        <li v-for= "(skill, index) in skillsInfo.bd" :key= "index">{{skill}}</li>
      </ul>
      <ul>
        Office Automation :
        <li v-for= "(skill, index) in skillsInfo.officeAutomation" :key= "index">{{skill}}</li>
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
<!-- SkillsInfoSection -->
<template>
	<section>
		<h3>Skills :</h3>
		<div id= "#content">
      <ul>
		<br>
        Framework :
		
        <li v-for= "(skill, index) in skillsInfo.framework" :key= "index">- {{skill}}</li>
      </ul>
      <ul>
		<br>
        Programing Language :
        <li v-for= "(skill, index) in skillsInfo.programmation" :key= "index">- {{skill}}</li>
      </ul>
      <ul>
		<br>
        Modelization :
        <li v-for= "(skill, index) in skillsInfo.modelization" :key= "index">- {{skill}}</li>
      </ul>
      <ul>
		<br>
        Database :
		<br>
        <li v-for= "(skill, index) in skillsInfo.bd" :key= "index">- {{skill}}</li>
      </ul>
      <ul>
		<br>
        Office Automation :
        <li v-for= "(skill, index) in skillsInfo.officeAutomation" :key= "index">- {{skill}}</li>
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
	ul {
		padding-left: 15px;
		list-style: none;
	}
	ul li{
		padding-left: 15px;
	}
</style>
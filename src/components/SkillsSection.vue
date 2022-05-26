<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<h3>SkillsSection</h3>
		<div id= "#content">
			<li>Framework : {{skillsInfo.framework}}</li>
			<li>Programming Language : {{skillsInfo.programmation}}</li>
            <li>Modelization : {{skillsInfo.modelization}}</li>
            <li>Database : {{skillsInfo.bd}}</li>
            <li>Office Automation : {{skillsInfo.officeAutomation}}</li>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			skillsInfo: {
				required: true,
				default: {
					framework: "Framework",
                    programmation: "Programmation",
                    modelization: "Modelization",
                    bd: "BD",
                    officeAutomation: "OfficeAutomation"
					
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
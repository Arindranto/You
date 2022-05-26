<!-- ExperienceInfoSection  -->
<template>
	<section>
		<h3>Experience :</h3>
		<div id= "#content">
      <li v-for= "(exp, index) in experienceInfo.project" :key= "index">{{exp}}</li>
	
		</div>
	</section>
</template>

<script>
	export default {
		props: {
      experienceInfo: {
        required: true,
        default: {
          project:['']
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
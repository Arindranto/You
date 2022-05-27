<!-- ExperienceInfoSection  -->
<template>

	<!-- key: value pairs where keys are the name of the project -->
	<!-- Object.keys(nameOfTheObject) return the keys in an Object in an array -->
	<section v-if= "experienceInfo !== undefined && Object.keys(experienceInfo).length">
		<h2 class= 'vue-green'>EXPERIENCE{{ Object.keys(experienceInfo).length === 1? "": "S" }}</h2>
		<ul>
			<li v-for= "(value, key) in experienceInfo" :key= "key">
				<h3 class= 'key'>{{key}}</h3>
				<h4>{{experienceInfo[key].description}}</h4>
				<h5 v-for= "(tech, i) in experienceInfo[key].techs" :key= "i" >
					{{tech + (i === experienceInfo[key].techs.length - 1? "": " | ")}}
				</h5>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		props: {
      experienceInfo: {
        required: true,
        default: undefined
      }
    },
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';
	h4, h5:nth-of-type(1) {
		margin-left: 20px;
	}
	h5 {
		display: inline;
	}
	section {
		font-family: var(--title-font);
		color: #ffffff;
	}
	ul {
		list-style: none;
	}
	.vue-green {
		color: var(--vue-green);
	}
	.key {
		margin-top: 15px;
		color: var(--vue-green);
		border-bottom: solid 3px var(--vue-green) ;
	}
</style>
<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<div class="section-child">
			<img :src="photo" alt="tsy hita" srcset="" >
		</div>
		<div id= "#content" class="section-child">
			<h1><span class= "vue-green">{{firstname }}</span> {{ lastname }}</h1>
			<span class= "vue-green">{{description}}</span>
			<p>{{age }} years old</p>
			<p>{{faculty}}</p>
		</div>	
	</section>
</template>

<script>
	/* props:
			* personalInfo: to get the information needed to be displayed such as firstname, lastname, etc... 
	*/
	export default {
		props: {
			personalInfo: {
				required: true,
				default: {
					firstname: 'Firstname',
					lastname: 'Lastname',
					description: 'Description',
					faculty: 'Info',
					age: 18,
					photo: 'logo.png',
				
				}
			}
		},
		data() {
		/* We added default so no need to check it */
      const faculty= this.personalInfo.faculty
      const firstname = this.personalInfo.firstname;
      const lastname = this.personalInfo.lastname.toUpperCase();
      const photo= require(`@/assets/img/${this.personalInfo.photo}`);  // Require the image from the assets
      const description= this.personalInfo.description;
      const age= this.personalInfo.age;
      
      return {
        faculty, photo, description, firstname, lastname, age
      }
    },
	
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

	section {
		font-family: var(--title-font);
		color: #ffffff;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(auto-fill, 200px);
		
	}	

	#content {
		/* Container */
		border: solid 2px #ffffff;
		padding: 25px;
		border-radius: 10px;
		color: #ffffff;
	}
	img{
		width: 200px;
		background-color: var(--vue-green);
		border-radius: 30px;
	}
	.vue-green {
		color: var(--vue-green);
	}
</style>
<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<div class="child">
			<img :src="require(`@/assets/img/${this.personalInfo.photo}`)" alt="tsy miseho" srcset="">
		</div>
		<div class="child">
			<h1><span class= "vue-green">{{ personalInfo.firstname }}</span> {{ personalInfo.lastname.toUpperCase() }}</h1>
			
			<div id= "#content">
				<span class= "vue-green">{{personalInfo.description}}</span>
				<br><br>
				<p>{{ personalInfo.age }} years old</p>
				<p>{{personalInfo.faculty}}</p>
				<p>{{personalInfo.email}}</p>
				<p>{{personalInfo.tel}}</p>
			</div>
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
          tel: '0333333333',
          email: 'test@gmail.com'
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
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(auto-fill, 250px);
		
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
		padding: 0;
		background-color: var(--dark-blue);
		border-radius: 30px;
		box-shadow: 0 0 10px rgb(20, 38, 39);
	}
	.vue-green {
		color: var(--vue-green);
	}
</style>
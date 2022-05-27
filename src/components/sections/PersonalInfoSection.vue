<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<div class="child">
			<img :src="img" alt="unfound" srcset="">
		</div>
		<div class="child">
			<h1><span class= "vue-green">{{ personalInfo.firstname }}</span><br/>{{ personalInfo.lastname.toUpperCase() }}</h1>
			
			<!-- <div class= "content"> -->
				" <span class= "vue-green">{{personalInfo.description}}</span> "
				<br><br>
				<p>{{ personalInfo.age }} years old</p>
				<p>{{personalInfo.faculty}}</p>
				<p>{{personalInfo.email}}</p>
				<p>{{personalInfo.tel}}</p>
			<!-- </div> -->
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
		computed: {
			img() {
				// Return the image thing
				return require(`@/assets/img/${this.personalInfo.photo}`);
			}
		}

	
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

	section {
		position: relative;
		font-family: var(--title-font);
		color: #ffffff;
		display: grid;
		justify-content: start;
		grid-column-gap: 20px;
		grid-template-columns: 1fr 3fr;
	}	

	.content {
		/* Container */
		position: absolute;
		border: solid 2px #ffffff;
		border-radius: 10px;
		color: #ffffff;
	}

	img{
		width: 200px;
		height: 225px;
		padding: 0;
		background-color: var(--dark-blue);
		border-radius: 30px;
		box-shadow: 0 0 10px rgb(20, 38, 39);
	}
	.vue-green {
		color: var(--vue-green);
	}
</style>
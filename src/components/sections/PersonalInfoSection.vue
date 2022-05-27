<!-- A simple PersonalInfoSection test -->
<template>
	<section>
		<div class="img">
			<img :src="img" alt="unfound" srcset="">
		</div>
		<div class="info">
			<div class= "title">
				<h1><span class= "vue-green">{{ personalInfo.firstname }}</span><br/>{{ personalInfo.lastname.toUpperCase() }}</h1>
				<h3>" <span class= "vue-green">{{personalInfo.description}}</span> "</h3>
			</div>
			<div class= "content">
				<br><br>
				<h3>{{ personalInfo.age }} years old</h3>
				<h3>{{personalInfo.faculty}}</h3>
				<h3>{{personalInfo.email}}</h3>
				<h3>{{personalInfo.tel}}</h3>
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

	.info{
		display: grid;
		grid-template-columns: repeat(1, minmax(200px));
	}
	section {
		position: relative;
		font-family: var(--title-font);
		color: #ffffff; 
		display: grid;
		grid-column-gap: 20px;
		grid-template-columns: 1fr 3fr;
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
	.content {
		/* Container */
		position: absolute;
		bottom: 40px;
	}
	.img {
		display: grid;
		place-items: center;
	}
</style>
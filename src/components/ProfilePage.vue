<!-- The base of a ProfileThing -->
<template>
	<div id= "container">
		<PersonalInfoSection :personalInfo= "personalInfo" />
		<button @click= '$emit("goHome", null)' >Back</button>
	</div>
</template>

<script>
	/*
		components:
			* PersonalInfoSection
			* EducationSection
			* SkillSection
			* ExperienceSection
		props:
			* id: to get the concerned member from the memberList in members-data.js
		data:
			* personalInfo: an object with the informations from memberList to pass to the PersonalInfoSection
	*/
	import PersonalInfoSection from '@/components/PersonalInfoSection';
	import memberList from '@/datas/members-data'

	export default {
		name: 'ProfilePage',
		components: {
			PersonalInfoSection,
		},
		props: {
			id: {
				type: Number,
				default: 0
			}
		},
		data() {
			let member= memberList[this.id];	// Get the member data as an object

			let personalInfo= {
				firstname: member.personalInfo.firstname,
				lastname: member.personalInfo.lastname,
				faculty: member.personalInfo.faculty,
				photo: member.assets.photo
			}
			return {
				personalInfo,
			}
		},
	}
</script>

<style scoped>
	/* To be changed */
	* {
		color: #ffffff;
		font-family: "ubuntu";
	}
	#container {
		display: grid;
		place-items: center;
	}
	button {
		height: 45px;
		width: 100px;
		cursor: pointer;
		color: rgb(255, 255, 255);
		background-color: var(--vue-green);
		border: none;
		font-size: 20px;
		border-radius: 15px;
	}
		button:hover {
		background-color: var(--dark-green);
		
	}
</style>
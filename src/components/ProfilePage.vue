<!-- The base of a ProfileThing -->
<template>
	<div id= "container">
		<!-- SIDEBAR -->
		<div id= "sidebar">
			<MemberList @passToProfilePage= "passToApp" :selected= "id" />
			<button class="back-btn" @click= "passToApp(null)">
				<div id= "back-arrow">
				</div>
			</button>
		</div>

		<!-- SECTIONS GO HERE -->
		<div class="grid">
			<PersonalInfoSection class="grid-child" :personalInfo= "personalInfo" />
			
			<EducationSection class="grid-child" :educationInfo= "educationInfo"/>
		
			<SkillsSection class="grid-child" :skillsInfo= "skillsInfo"/>
			
			<ExperienceSection class="grid-child" :educationInfo= "educationInfo"/>
		</div>
	</div>
</template>

<script>
	/*
		components:
			* PersonalInfoSection
			* EducationSection
			* SkillsSection
			* ExperienceSection
		props:
			* id: to get the concerned member from the memberList in members-data.js
		data:
			* personalInfo: an object with the informations from memberList to pass to the PersonalInfoSection
	*/
	import PersonalInfoSection from '@/components/PersonalInfoSection';
	import EducationSection from '@/components/EducationSection';
	import SkillsSection from '@/components/SkillsSection';
	import ExperienceSection from '@/components/ExperienceSection';
	import MemberList from '@/components/MemberList';
	import memberList from '@/datas/members-data';

	export default {
		name: 'ProfilePage',
		components: {
			PersonalInfoSection,
			EducationSection,
			SkillsSection,
			ExperienceSection,
			MemberList
		},
		props: {
			id: {
				type: Number,
				default: 0
			}
		},
		
		computed: {
			// Because it's computed everytime
			personalInfo() {
				let member= memberList[this.id];	// Get the member data as an object
				
				let me= {
					firstname: member.personalInfo.firstname,
					lastname: member.personalInfo.lastname,
					age: member.personalInfo.age,
					description: member.assets.description,
					faculty: member.personalInfo.faculty,
					photo: member.assets.photo
				}
				return me;
			},
			educationInfo() {
				let member= memberList[this.id];
				let me= {
					universitySchool: member.educationInfo.university.school,
          universityGrade: member.educationInfo.university.grade,
          universityDuration: member.educationInfo.university.duration,
          collegeSchool: member.educationInfo.college.school,
          collegeGrade: member.educationInfo.college.grade,
          collegeDuration: member.educationInfo.college.duration,
				}
				return me;
			},
			skillsInfo() {
				let member= memberList[this.id];
				let me= {
					framework: member.skillsInfo.framework,
					programmation: member.skillsInfo.programmation,
					modelization: member.skillsInfo.modelization,
					bd: member.skillsInfo.bd,
					officeAutomation: member.skillsInfo.officeAutomation
				}
				return me;
			},
		},
		methods: {
			passToApp(id) {
				this.$emit('passToApp', id);
			}
		}
	}
</script>

<style scoped>
	/* To be changed */
	@import '@/assets/style/style-data';

	* {
		color: #ffffff;
	}
	
	#container {
		position: absolute;
		height: 100%;
		width: 100%;
		padding-left: 110px;
		padding-right: 110px;
	}
	#sidebar {
		position: absolute;
		text-align: center;
		left: 0;
		background: var(--vue-blue);
		width: 70px;
		height: 100%;
		padding-top: 20px;
		position: fixed;
		z-index: 1000;
	}
	.back-btn {
		position: absolute;
		display: grid;
		place-items: center;
		bottom: 20px;
		left: 10px;
		height: 50px;
		width: 50px;
		border: solid 5px var(--vue-green);
		border-radius: 50%;
		cursor: pointer;
		color: black;
		font-weight: 900;
		font-size: 20px;
		background: rgba(0,0,0,0);
	}
	#back-arrow {
		width: 25px;
		height: 25px;
		border-bottom: solid 7px var(--vue-green);
		border-left: solid 7px var(--vue-green);
		border-radius: 5px;
		transform: translateX(3.5px) rotate(45deg);
	}
	.back-btn:hover {
		border-color: var(--dark-blue);
		transition: all .2s;
		transition-timing-function: ease-in;
	}
	.back-btn:hover #back-arrow{
		border-left-color: var(--dark-blue);
		border-bottom-color:  var(--dark-blue);
		transition: all .2s;
		transition-timing-function: ease-in;
	}
	/*Grid positionning */
	.grid-child {
		max-width: 700px;
		border: var(--vue-green) solid 3px;
		border-radius: 20px;
		padding: 10px;
	}
	.grid-child:nth-child(1){
		background-color: var(--vue-blue);

	}
	.grid {
		margin-top: 10px;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: repeat(auto-fill, 600px);
		
	}


</style>
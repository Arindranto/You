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
			
			<ExperienceSection class="grid-child" :experienceInfo= "experienceInfo"/>
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
	import PersonalInfoSection from '@/components/sections/PersonalInfoSection';
	import EducationSection from '@/components/sections/EducationSection';
	import SkillsSection from '@/components/sections/SkillsSection';
	import ExperienceSection from '@/components/sections/ExperienceSection';
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
						photo: member.assets.photo,
						tel: member.personalInfo.tel,
						email: member.personalInfo.email
					}
				return me;
			},
			educationInfo() {
				return memberList[this.id].educationInfo;
			},
			skillsInfo() {
				return memberList[this.id].skillsInfo;
			},
			experienceInfo() {
				return memberList[this.id].experienceInfo;
			},
		},
		methods: {
			passToApp(id) {
				this.$emit('passToApp', id);
			}
		}
	}
</script>

<style>
	/* To be changed */
	@import '@/assets/style/style-data';

	h2 {
		/* All section titles */
		text-align: center;
		text-shadow: 0 0 50px var(--vue-green);
	}
	* {
		list-style: none;
		color: #ffffff;
	}

	#container {
		position: absolute;
		display: flex;
		justify-content: center;
		height: auto;
		width: 100%;
		/* To set an auto overflow */
		min-width: 720px;
		padding-left: 70px;	/* for the side bar */
		/*padding-right: 110px;*/
	}
	#sidebar {
		position: fixed;
		left: 0;
		background: var(--vue-blue);
		width: 70px;
		height: 100%;
		padding-top: 20px;
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
		transition: all .1s;
		transition-timing-function: ease-in;
	}
	.back-btn:hover #back-arrow{
		border-left-color: var(--dark-blue);
		border-bottom-color:  var(--dark-blue);
		transition: all .1s;
		transition-timing-function: ease-in;
	}
	/*Grid positionning */
	.grid {
		padding: 25px;
		width: 100%;
		display: grid;
		grid-gap: 10px;
	}
	.grid-child {
		padding: 20px;
		border-radius: 23px;
		border: 2.5px solid var(--vue-green);
		box-shadow: 0 0 5px var(--dark-green);
	}
	.grid-child:nth-child(1){
		/* The personalInfo section */
		/*position: sticky;
		top: 0;*/
		background-color: var(--vue-blue);
	}
</style>
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
		<PersonalInfoSection class="personInfo" :personalInfo= "personalInfo" />
		<EducationSection :educationInfo= "educationInfo" />

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
	import PersonalInfoSection from '@/components/MemberInfo/PersonalInfoSection.vue';
	import EducationSection from '@/components/MemberInfo/EducationSection.vue';
	import MemberList from '@/components/MemberList'
	import memberList from '@/datas/members-data';

	export default {
		name: 'ProfilePage',
		components: {
			PersonalInfoSection,
			EducationSection,
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
					photo: member.assets.photo,
					college: member.educationInfo.college
				}
				return me;
			},
			educationInfo() {
				let member= memberList[this.id];	// Get the member data as an object

				let me= {

					college: member.educationInfo.college,
					lycee: member.educationInfo.lycee,
				}
				return me;
			}
			
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
	}
	#sidebar {
		position: absolute;
		text-align: center;
		left: 0;
		background: var(--vue-blue);
		width: 80px;
		height: 100%;
		padding-top: 20px;
	}
	.back-btn {
		position: absolute;
		display: grid;
		place-items: center;
		bottom: 20px;
		left: 10px;
		height: 60px;
		width: 60px;
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
	}
	.back-btn:hover #back-arrow{
		border-left-color: var(--dark-blue);
		border-bottom-color:  var(--dark-blue);
	}
	.personInfo {
	animation: andrana 0.2s;
	justify-content: center;
	align-self: center;
    }
	@keyframes andrana{
		0%{
			transform: translateX(400px) ;
			}
		100%{
			transform: translatex(0);
			}
	}


</style>
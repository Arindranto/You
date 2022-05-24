<!-- The base of a ProfileThing -->
<template>
	<div>
		<PersonalInfoSection :personalInfo= "personalInfo" />
	</div>
</template>

<script>
	/*
		components:
			* PersonalInfoSection
			* EducationSection
			* SkillSection
			* ExperienceSection
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
				birthdate: member.personalInfo.birthdate,
				photo: member.assets.photo
			}
			return {
				personalInfo,
			}
		},
		/*computed: {
			// member: memberList[this.id],	// Get the member data as an object
			personalInfo() {
				let member= memberList[this.id];
				console.log('Computing');
				return  {
					firstname: member.personalInfo.firstname,
					lastname: member.personalInfo.lastname,
					birthdate: member.personalInfo.birthdate,
					photo: member.assets.photo
				}
			}
		}*/
	}
</script>

<style scoped>
	* {
		color: #ffffff;
	}
</style>
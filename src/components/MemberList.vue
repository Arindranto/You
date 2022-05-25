<template>
  <!-- 
    To generate the list of member cards,
    we use the v-for option to iterate over the memberList Array imported from @/datas/MemberList.js
    * emit toggleDisplay when a card is clicked, index is the id of the member to be displayed in the ProfilePage
  -->
  <div v-if= "selected === null" id= "list">
    <!-- null means HOME PAGE -->
    <MemberCard v-for= "(member, index) in members" :key= "index" :id= "`card-${index}`" :info= "member" @passToMemberList= "passToHomePage(index)" /> <!-- pass with the index as an id to the HomePage -->
  </div>
  <!----------------------------------------------------->
  <div v-else id= "list">
    <!-- PROFILE PAGE WITH A SELECTED ID -->
    <!-- The active one will be the one with the correct id -->
    <MemberBubble :class='{active: index === selected}'  v-for= "(member, index) in members" :key= "index" :id= "`card-${index}`" :src= "member.photo" @passToMemberList= "passToProfilePage(index)" />  <!-- pass with the index as an id to the ProfilePage -->
  </div>
</template>

<script>
  /*
    components:
      * MemberCard: to display the MemberCard in the template
    datas:
      * members: get the appropriate datas in the MemberList such as firstname, etc... to pass to the MemberCards
  */
  import MemberCard from '@/components/MemberCard'; // Card member
  import MemberBubble from '@/components/MemberBubble';
  import memberList from '@/datas/members-data';  // Importing the list memberList of type Array

  export default {
    name: "MemberList",
    components: {
      MemberCard,
      MemberBubble,
    },
    props: {
      selected: {
        default:null
      }
    },
    emits: ['passToHomePage', 'passToProfilePage'], // Needed to declare emits here
    data() {
      // Take firstname, lastname, description and photo path
      let members= [];  // To get the appropriate informations
      let i= 0;
      for (let member of memberList) {  // MemberList is an array so we use the of operator
        members.push({
          id: i,
          firstname: member.personalInfo.firstname,
          lastname: member.personalInfo.lastname,
          college: member.educationInfo.college,
          lycee: member.educationInfo.lycee,
          description: member.assets.description,
          photo: member.assets.photo
        });
        i++;
      }
      return {
        members,
      }
    },
    methods: {
      passToHomePage(id) {
        this.$emit('passToHomePage', id);
      },
      passToProfilePage(id) {
        this.$emit('passToProfilePage', id);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* NB: TO BE MODIFIED */
  @import '@/assets/style/style-data';
  #list {
    /*position: absolute;*/

    width: 100%;
    height: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>

<template>
  <div id= "list">
    <!-- 
      To generate the list of member cards,
      we use the v-for option to iterate over the memberList Array imported from @/datas/MemberList.js
    -->
    <MemberCard v-for= "(member, index) in members" :key= "index" :id= "`card-${index}`" :info= "member" @clickOn= "passer" />
  </div>
</template>

<script>
  /*
    components:
      * MemberCard: to display the MemberCard in the template
    datas:
      * members: contains the elements in memberList
  */
  import MemberCard from '@/components/MemberCard'; // Card member
  import memberList from '@/datas/members-data';  // Importing the list memberList of type Array

  export default {
    name: "MemberList",
    components: {
      MemberCard,
    },
    emits: ['smth'],
    data() {
      // Take firstname, lastname, description and photo path
      let members= [];  // To get the appropriate informations
      let i= 0;
      for (let member of memberList) {  // MemberList is an array so we use the of operator
        members.push({
          id: i,
          firstname: member.personalInfo.firstname,
          lastname: member.personalInfo.lastname,
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
      passer(id) {
        alert("alert " + id);
        this.$emit('toggleDisplay', id);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* NB: TO BE MODIFIED */
  #list {
    /*position: absolute;*/

    width: 100%;
    height: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
</style>

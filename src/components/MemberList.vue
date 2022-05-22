<template>
  <div id= "list">
    <!-- 
      To generate the list of member cards,
      we use the v-for option to iterate over the memberList Array imported from @/datas/MemberList.js
    -->
    <MemberCard v-for= "(member, index) in members" :key= "index" :id= "`card-${index}`" :info= "member" @click= "viewProfile(index)"/>
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
    data() {
      // const member= {firstname: "Andria", lastname: "Safidy", description: "Fullstack developper", photo: "logo.png"};
      const members= memberList;
      return {
        members,
      }
    },
    methods: {
      viewProfile(index) {
        // Open the profile vue for the clicked person
        alert(index); 
      },
    },
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

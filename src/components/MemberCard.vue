<template>
  <div class="hello">
    <img :src="PHOTO" alt= "Img not found" height= 100 width= 100 />
    <div class= "name">{{ FULLNAME }}</div>
    <div class= "description">{{ DESCRIPTION }}</div>
  </div>
</template>

<script>
  import memberList from '@/datas/MemberList'

  export default {
    name: 'MemberCard', // Optional name for the component
    // Props definition
    props: {
      memberId: {
        // Required id number that is from the memberList variable
        type: Number,
        required: true,
      }
    },
    data() {
      // Data to use in the templates
      const MEMBER= memberList[this.memberId];
      const FULLNAME= MEMBER.firstname + " " + MEMBER.lastname.toUpperCase(), DESCRIPTION= MEMBER.description, PHOTO= require(`@/assets/img/${MEMBER.photo}`);
      return {
        MEMBER, FULLNAME, DESCRIPTION, PHOTO
      }
    },
    // Getting the image path using imgPath method as computed property
    /*OPTIONS API*/
    // computed: {
    //   /*getMemberImgPath: function() {
    //     // Before ES 6
    //     return require(`@/assets/img/${memberList[this.memberId].photo}`);
    //   },*/

    //   // And so on...

    //   getMemberImgPath() {
    //     // ES 6
    //     return require(`@/assets/img/${memberList[this.memberId].photo}`); // Require the image in the assets
    //   },
    //   getMemberName() {
    //     return memberList[this.memberId].fullname;
    //   },
    //   getMemberDescription() {
    //     return memberList[this.memberId].description;
    //   }
    // },
    /*COMPOSITION API*/
    /*setup(props) {
      const getMemberImgPath= require(`@/assets/img/${memberList[this.memberId].photo}`);  // Get the image path in the assets
      return {
        getMemberImgPath,
      }
    }*/
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

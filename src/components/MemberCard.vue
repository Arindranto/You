<template>
  <!-- Class to manage a singular member card
    "hovered" class is linked to "hovered" data (this.hovered) to toggle it on mouseover and mouseout events,
    Template consists of:
      * the image
      * fullname (firstname + lastname)
      * description
   -->
  <div class= "container" :class= "{hovered: hovered}" @mouseover= "toggleHovered" @mouseout= "toggleHovered">
    <img :src="photo" alt= "Image not found" class= "photo" />
    <div class= "name">{{ fullname }}</div>
    <div class= "description">{{ description }}</div>
  </div>
</template>

<script>
  /* 
    The main script use the Options API style for VueJS.
    props: and object that must consists of:
      * 'firstname' and 'lastname'
      * 'photo' reference in the @/assets/img folder
      * 'description'
    data:
      * hovered: linked to the template to toggle the 'hovered' class
      * firstname, fullname, photo, description: to manage the props above in the template
    methods:
      * toggleHovered(): the method called to change the value of the 'hovered' data (this.hovered)
  */
  export default {
    name: 'MemberCard', // Optional name for the component
    // Props definition
    props: {
      info: {
        // Required id number that is from the memberList variable
        default: {
          firstname: "Firstname",
          lastname: "LastName",
          description: "Description",
          photo: "logo.png"
        }, // To prevent errors
      }
    },
    data() {
      // Data to use in the templates
      let hovered= false;
      /* We added default so no need to check it */
      // if (!('firstname' in this.info && 'lastname' in this.info && 'photo' in this.info && 'description' in this.info))
      //   console.log('Nothing to show');
      // else {
        const fullname= this.info.firstname + ' '+ this.info.lastname.toUpperCase();
        const firstname = this.info.firstname;
        const lastname = this.info.lastname.toUpperCase();
        const photo= require(`@/assets/img/${this.info.photo}`);  // Require the image from the assets
        const description= this.info.description;
        const id= this.info.id
        return {
          fullname, photo, description, id, hovered, firstname, lastname
        }
      // }
    },
    methods: {
      // The needed methods to manage the Vue
      toggleHovered() {
        // Toggle the hovered properties for the card
        this.hovered= !this.hovered
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
    NB: TO BE CHANGED
  */
  @import '@/assets/style/colors.css'; /* Importing the base colors */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

  .description, .name, img {
    position: absolute;
    margin: 5px 10px;
  }
  .container {
    /* the main container */
    position: relative;
    height: 350px;
    width: 215px;
    margin: 10px;
    font-weight: 100;



    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #ffffff;
    background: var(--vue-blue);
    box-shadow: 0 0 40px rgb(0, 0, 0, 0.5);
    border-radius: 20px;
    cursor: pointer;
    transition: all .1s;
    transition-timing-function: ease-in;
  }
  .container::before{
    /*  */
    content:"";
    border-radius: 20px 20px 0 0;
    position: absolute;
    height: 30%;
    width: 100%;
    background: var(--vue-green);

  }
  img {
    /* the image */
    top: 3%;
    height: 50%;
    width: 80%;
    object-fit: cover;
    border-radius: 50%;
    background: var(--dark-blue);
  }
  .name {
    /* the fullname text */
    top: 53%;
    height: 75px;
    margin: 15px;
    display: grid;
    place-items: center;
    letter-spacing: 1px;
    font-size: 17px;
    font-weight: 900;
    vertical-align: center;
  }
  .description {
    /* the description text */
    top: 85%;
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  /* Configuration for the .hovered class mentionned above (on hover) */
  .hovered {
    /* .container:hover */
    width: 220px;
    height: 354px;
    margin: 8px;
    background:  var(--vue-green);
    color: var(--dark-blue);
    box-shadow: 0 10px 40px var(--dark-green);
  }

  /*.hovered > img{
     img on card hover 
    background: white;
  }*/
</style>

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
        const photo= require(`@/assets/img/${this.info.photo}`);  // Require the image from the assets
        const description= this.info.description;
        const id= this.info.id
        return {
          photo, description, id, hovered
        }
      // }
    },
    methods: {
      // The needed methods to manage the Vue
      toggleHovered() {
        // Toggle the hovered properties for the card
        this.hovered= !this.hovered
      }
    },
    computed: {
      fullname() {
        // Returns the fullname of the person
        return this.info.firstname + ' ' + this.info.lastname.toUpperCase();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
    NB: TO BE CHANGED
  */
  @import '@/assets/style/colors.css'; /* Importing the base colors */

  .description, .name, img {
    position: absolute;
    margin: 5px 10px;
  }
  .container {
    /* the mainn container */
    position: relative;
    height: 350px;
    width: 220px;
    margin: 10px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    color: #ffffff;

    background: var(--vue-blue);
    border: solid 1px #ffffff;
    border-radius: 20px;

    cursor: pointer;
    transition: all .2s;
    transition-timing-function: ease-in;
  }
  img {
    /* the image */
    top: 3%;
    height: 50%;
    width: 75%;
    padding: 15px;
    margin: 15px;

    background: var(--dark-blue);
  }
  .name {
    /* the fullname text */
    top: 55%;
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
    top: 83%;
    font-weight: bold;
  }
  /* Configuration for the .hovered class mentionned above (on hover) */
  .hovered {
    /* .container:hover */
    width: 224px;
    height: 354px;
    margin: 8px;

    background: #ffffff;
    color: var(--dark-green);
    box-shadow: 0 0 20px var(--vue-green);
  }
  .hovered > img{
    /* img on card hover */
    background: var(--vue-green);
  }
</style>

<template>
  <!-- 
    To contain the main app
    HomePage and ProfilePage for the one page app
    We use v-if to render the correct page
  -->
  <div>
    <HomePage v-if= "id === null" @passToApp= "update" />
    <ProfilePage v-else :id= "id" @passToApp="update" />
  </div>
</template>

<script>
  /*
    components:
      * HomePage
      * ProfilePage
    data:
      * profileMode: the Boolean to track either we are in profileMode or not, false by default
  */
  import HomePage from '@/components/HomePage';
  import ProfilePage from "@/components/ProfilePage";

  export default {
    name: 'App',
    components: {
      HomePage,
      ProfilePage
    },
    data() {
      let id= null; // To check if we are in profile mode
      return {
        id,
      }
    },
    methods: {
      update(id) {
        // Updating the id so that it shows the appropriate member or the HOME PAGE if id === null
        this.id= id;
      }
    }
  }
</script>

<style>
  /* NB: TO BE MODIFIED */
  @import '@/assets/style/style-data'; /* Importing the base colors */

  * {
    /* GENERAL SETTINGS */
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  }
  body {
    position: absolute;

    width: 100%;
    height: 100%;
    
    background: var(--dark-blue);
  }
</style>

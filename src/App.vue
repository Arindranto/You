<template>
  <!-- 
    To contain the main app
    HomePage and ProfilePage for the one page app
  -->
  <div>
    <HomePage v-if= "!profileMode" @toggleProfileMode= "toggleMode" />
    <ProfilePage v-else :id= "id"/>
  </div>
</template>

<script>
  /*
    components:
      * HomePage
      * ProfilePage
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
      let profileMode= false;
      return {
        profileMode,
      }
    },
    methods: {
      toggleMode(id) {
        this.profileMode= true;
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
    font-family: rounded-arial, arial, sans-serif;
  }
</style>

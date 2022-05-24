<template>
  <!-- 
    To contain the main app
    HomePage and ProfilePage for the one page app
  -->
  <HomePage />
  <ProfilePage id= 2 />
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
    }
  }
</script>

<style>
  /* NB: TO BE MODIFIED */
  @import '@/assets/style/colors'; /* Importing the base colors */

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

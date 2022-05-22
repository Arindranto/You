<template>
  <!-- 
    To contain the main app
    A router-view is used to display the appropriate component according to the given route
  -->
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    // We have no component as we use a router-view to display the appropriate component according to the route
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

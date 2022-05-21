<template>
  <!-- 
    To contain the main app
  -->
  <h1>"<span class= "vue-green">HELLO WORLD</span>" from the <span class= "vue-green">TEAM</span>!</h1>
  <div id= "main">
    <MemberList/>
  </div>
</template>

<script>
  /*
    components:
      * MemberList: the list of member cards
  */
  // @ === source path
  import MemberList from '@/components/MemberList'

  export default {
    name: 'App',
    components: {
      // Components to include in the templates
      MemberList,
    },
  }
</script>

<style>
  /* NB: TO BE MODIFIED */
  @import '@/assets/style/colors.css'; /* Importing the base colors */

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
  h1 {
    font-size: max(3vw, 25px);
    letter-spacing: 2px;

    height: 40px;
    margin: 30px;
    text-align: center;

    color: #ffffff;
  }
  .vue-green{
    color: var(--vue-green);
  }
  #main {
    /* The container of the application */
    position: absolute;

    display: grid;
    place-items: center;

    height: calc(100% - 100px);
    width: 100%;
  }
</style>

<!-- THE HOME PAGE 
  content:
    * title
    * MemberList object
-->
<template>
  <div id= "main" :class= "{hidden: hidden}">
    <!-- Title -->
    <h1>"<span class= "vue-green">HELLO WORLD</span>" from the <span class= "vue-green">TEAM</span>!</h1>
    <!-- The member list -->
      <MemberList @toggleDisplay= "toggleHideClass" />
  </div>
</template>

<script>
  /* data:
      * hidden: to toggle the hidden class
    methods:
      * toggleHideClass: changes the hidden data and emits the toggleProfileMode to the App
  */
	import MemberList from '@/components/MemberList';

	export default {
		components: {
			MemberList,
		},
    data() {
      let hidden= false;
      return {
        hidden,
      }
    },
    methods: {
      toggleHideClass(id) {
        /* emit the event to the App to toggle the profileMode */
        this.hidden= !this.hidden;
        this.$emit('toggleProfileMode', id);
      }
    }
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

  /* To change */

  @keyframes hideIt {
    /* Animation (doesn't work yet) */
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
	h1 {
    font-family: var(--title-font);
    font-size: max(3vw, 25px);
    letter-spacing: 2px;
    text-align: center;

    color: #ffffff;
  }
  .vue-green{
    /* Special span in h1 */
    color: var(--vue-green);
  }
  #main {
    /* The container of the application */
    position: absolute;

    display: grid;
    grid-template-rows: 100px auto;
    place-items: center;

    height: 100%;
    width: 100%;
  }
  .hidden {
    animation-name: hideIt;
    animation-duration: 2s;
  }
</style>
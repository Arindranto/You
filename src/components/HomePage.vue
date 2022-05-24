<!-- THE HOME PAGE -->
<template>
	<!-- Title -->
  <div :class= "{hidden: hidden}">
    <h1>"<span class= "vue-green">HELLO WORLD</span>" from the <span class= "vue-green">TEAM</span>!</h1>
    <!-- The member list -->
    <div id= "main">
      <MemberList @toggleDisplay= "toggleHideClass" />
    </div>
  </div>
</template>

<script>
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
        this.hidden= !this.hidden;
      }
    }
	}
</script>

<style scoped>
	@import '@/assets/style/colors';

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
  .hidden {
    display: none;
  }
</style>
<!-- THE HOME PAGE -->
<template>
	<!-- Title -->
  <div id= "main" :class= "{hidden: hidden}">
    <h1>"<span class= "vue-green">HELLO WORLD</span>" from the <span class= "vue-green">TEAM</span>!</h1>
    <!-- The member list -->
      <MemberList @toggleDisplay= "toggleHideClass" />
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
        setTimeout(2000);
        console.log('To toggle profile mode');
        this.$emit('toggleProfileMode', id);
      }
    }
	}
</script>

<style scoped>
	@import '@/assets/style/style-data';

  @keyframes hideIt {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }
	h1 {
    font-size: max(3vw, 25px);
    letter-spacing: 2px;

    height: 40px;

    color: #ffffff;
  }
  .vue-green{
    color: var(--vue-green);
  }
  #main {
    /* The container of the application */
    position: absolute;

    display: grid;
    grid-template-rows: 120px auto;
    place-items: center;

    height: 100%;
    width: 100%;
  }
  .hidden {
    animation-name: hideIt;
    animation-duration: 2s;
  }
</style>
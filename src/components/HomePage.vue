<!-- THE HOME PAGE -->
<template>
	<!-- Title -->
  <h1>"<span class= "vue-green">HELLO WORLD</span>" from the <span class= "vue-green">TEAM</span>!</h1>
  <!-- The member list -->
  <div id= "main">
    <MemberList />
  </div>
</template>

<script>
	import MemberList from '@/components/MemberList';

	export default {
		components: {
			MemberList,
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
</style>
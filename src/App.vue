<template>
  <MemberCard :memberId= 0 />
</template>

<script>
  // @ === source path
  import MemberCard from '@/components/MemberCard'

  export default {
    name: 'App',
    components: {
      // Components to include in the templates
      MemberCard,
    }
  }
</script>

<style>
</style>

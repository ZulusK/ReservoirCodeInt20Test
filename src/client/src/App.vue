<template lang="pug">
  div#app
    app-header
    router-view

</template>

<script>
  import AppHeader from '%/elements/Header';

  export default {
    name: 'App',
    components:{
      AppHeader
    }
  }
</script>

<style>
</style>

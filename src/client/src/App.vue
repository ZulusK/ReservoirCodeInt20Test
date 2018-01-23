<template lang="pug">
  div#app
    app-login(ref="login")
    app-header
    router-view

</template>

<script>
  import AppHeader from '%/elements/Header';
  import AppLogin from '%/auth/Login';
  import {EventBus} from "@eventBus";
  import Utils from '@utils';
  export default {
    name: 'App',
    components: {
      AppHeader,
      AppLogin
    },
    methods: {
      addEventHandlers () {
        EventBus.$on('login', this.$refs.login.toggle);
        EventBus.$on('logout', Utils.logout);
      },
      removeEventHandlers () {
        EventBus.$off('login', this.$refs.login.toggle);
        EventBus.$off('logout', Utils.logout);
      }
    },
    mounted () {
      this.addEventHandlers();
    },
    // beforeDestroy () {
    //   this.removeEventHandlers();
    // }
  }
</script>

<style>
</style>

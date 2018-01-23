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
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';

  export default {
    mixins: [AuthMixin, MessageMixin],
    name: 'App',
    components: {
      AppHeader,
      AppLogin
    },
    methods: {
      addEventHandlers () {
        EventBus.$on('login', this.$refs.login.toggle);
        EventBus.$on('logout', this.logout);
      },
      removeEventHandlers () {
        EventBus.$off('login', this.$refs.login.toggle);
        EventBus.$off('logout', this.logout);
      }
    },
    mounted () {
      this.addEventHandlers();
    },
    beforeDestroy () {
      this.removeEventHandlers();
    }
  }
</script>

<style>
</style>

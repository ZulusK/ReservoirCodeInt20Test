<template lang="pug">
  div#app
    b-loading(:active="UI.isLoading")
    app-login(ref="login")
    app-register(ref="register")
    app-header
    router-view

</template>

<script>
  import AppHeader from '%/elements/Header';
  import AppLogin from '%/auth/Login';
  import AppRegister from '%/auth/Register';
  import {EventBus} from "@eventBus";
  import Utils from '@utils';
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';

  export default {
    mixins: [AuthMixin, MessageMixin],
    name: 'App',
    data(){
      return{

      }
    },
    components: {
      AppHeader,
      AppLogin,
      AppRegister
    },
    methods: {
      addEventHandlers () {
        EventBus.$on('login', this.$refs.login.toggle);
        EventBus.$on('register', this.$refs.register.toggle);
        EventBus.$on('logout', this.logout);
      },
      removeEventHandlers () {
        EventBus.$off('login', this.$refs.login.toggle);
        EventBus.$off('register', this.$refs.register.toggle);
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

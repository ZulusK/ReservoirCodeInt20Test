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
        UI:{
          isLoading:false
        }
      }
    },
    components: {
      AppHeader,
      AppLogin,
      AppRegister
    },
    methods: {
      loadStart(){
        this.UI.isLoading=true;
      },
      loadEnd(){
        this.UI.isLoading=false;
      },
      addEventHandlers () {
        EventBus.$on('login', this.$refs.login.toggle);
        EventBus.$on('register', this.$refs.register.toggle);
        EventBus.$on('logout', this.logout);
        EventBus.$on('load-start', this.loadStart);
        EventBus.$on('load-end', this.loadEnd);
      },
      removeEventHandlers () {
        EventBus.$off('login', this.$refs.login.toggle);
        EventBus.$off('register', this.$refs.register.toggle);
        EventBus.$off('logout', this.logout);
        EventBus.$off('load-start', this.loadStart);
        EventBus.$off('load-end', this.loadEnd);
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

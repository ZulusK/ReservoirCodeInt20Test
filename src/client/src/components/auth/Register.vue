<template lang="pug">
  b-modal.modal(
  v-if="isNotLogged",
  :active.sync="UI.isShown",
  scroll="keep",
  animation="zoom-out",
  width="400px")
    div.box.has-text-centered
      figure.avatar
        img.avatar-image(v-if="isInvalidUsername" src="/static/img/user.png", width="140px", alt="")
      h3.title.has-text-grey Sign up
      p.subtitle.has-text-grey Join us now
      form.has-text-left
        input-text(label="username", ref="username",placeholder="Your username",:rules="{required:true}", icon="account", type="text")
        input-text(label="password", ref="password",placeholder="Your password", :rules="{required:true}",icon="lock", :reveal="true", type="password")
      br
      a.button.is-block.is-info.is-medium(@click="registerHandler()") Send
      hr
      p.has-text-grey.is-size-6 Are you already registered?
        a(@click="$emit('register'); UI.isShown=false") Login
</template>

<script>
  import InputText from '%/elements/InputText';
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';

  export default {
    mixins: [AuthMixin, MessageMixin],
    name: "register",
    components: {
      InputText
    },
    data () {
      return {
        UI: {
          isShown: false
        }
      }
    },
    methods: {
      isValidCredentials () {
        return (!this.$refs.username || this.$refs.username.isValid) && (!this.$refs.password || this.$refs.password.isValid);
      },
      toggle () {
        this.UI.isShown = !this.UI.isShown;
      },
      async registerHandler () {
        if (this.isValidCredentials()) {
          if (await this.register(this.credentials)) {
            this.UI.isShown = false;
          }
        } else {
          this.showErrorBox("Looks like, there are some problems with your input");
        }
      }
    },
    computed: {
      isInvalidUsername () {
        return !(this.$refs.username && this.$refs.username.data);
      },
      credentials () {
        return {
          username: this.$refs.username.data,
          password: this.$refs.password.data
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~material-colors/dist/colors";

  .ripple {
    color: $md-amber-200;
  }

  .avatar {
    margin-top: -70px;
  }

  .avatar-image {
    background-color: white;
    border-radius: 50%;
    border: 5px white solid;
    box-sizing: content-box;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
  }

  .box {
    margin-top: 70px;
  }

  .ripple {
    color: $md-light-blue-900;
  }

  .modal {
    z-index: 1000;
  }
</style>

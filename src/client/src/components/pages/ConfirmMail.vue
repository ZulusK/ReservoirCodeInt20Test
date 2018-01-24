<template lang="pug">
  section.hero.is-info.is-fullheight(v-if="isNotLogged")
    div.hero-body
      div.container.has-text-centered
        div.column.is-6.is-offset-3.content
          h1.title Attention!
          p
            | We send mail with activation code to your email.
            br
            | If you don't receive it, you can send code again
            br
            | Just enter your email in form below
          div.box
            input-text(label="email", ref="email",placeholder="Your email",:rules="{required:true, email:true}", icon="email", type="email", :button="true", :value="email")
            div.field.is-grouped.is-grouped-centered
              div.control
                button.button.is-link(@click.stop="handleSend") Send again
</template>
<script>
  import InputText from '%/elements/InputText';
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';
  import {EventBus} from "@eventBus";

  export default {
    mixins: [AuthMixin, MessageMixin],
    name: "ConfirmMail",
    components: {
      InputText
    },
    data () {
      return {
        email: null
      }
    },
    methods: {
      isValidCredentials () {
        return (!this.$refs.email || this.$refs.email.isValid);
      },
      async handleSend(){
        if (this.isValidCredentials()) {
          if (await this.sendActivationCode(this.credentials)) {

            this.$router.push({name: "ConfirmMail", query: {email: this.credentials.email}});
          }
        } else {
          this.showErrorBox("Looks like, there are some problems with your input");
        }
      }
    },
    computed: {},
    props: [],
    beforeRouteUpdate(to,from){
      this.email = to.query.email || "";
      console.log(this.email)
    },
    mounted () {
      this.email = this.$route.query.email || "";
      console.log(this.email)
    }
  }
</script>
<style scoped lang="scss">
</style>

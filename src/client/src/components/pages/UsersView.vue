<template lang="pug">
  div(v-if="isAdmin()")
</template>
<script>
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';
  import {EventBus} from "@eventBus";
  import MemeCard from '%/memes/MemeCard';
  import MemeMixin from '@meme-mixin';

  export default {
    mixins: [AuthMixin, MessageMixin, MemeMixin],
    name: "UsersView",
    data () {
      return {}
    },
    methods: {
      loadStart () {
        this.UI.isLoading = true;
      },
      loadEnd () {
        this.UI.isLoading = false;
      },
      addEventHandlers () {
        // EventBus.$on('load-meme-random-start', this.loadStart);
        // EventBus.$on('load-meme-random-end', this.loadEnd);
      },
      removeEventHandlers () {
        // EventBus.$off('load-meme-random-start', this.loadStart);
        // EventBus.$off('load-meme-random-end', this.loadEnd);
      },
      loadUsersHandle(){

      }
    },
    mounted () {
      this.addEventHandlers();
      this.loadUsersHandle();
    },
    beforeDestroy () {
      this.removeEventHandlers();
    },
    computed: {},
    props: [],
    created () {

    }
  }
</script>
<style scoped lang="scss">
</style>

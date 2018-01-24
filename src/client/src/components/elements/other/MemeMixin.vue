<script>
  import MemeAPI from '#/Meme';
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';
  import {EventBus} from "@eventBus";

  export default {
    mixins: {
      MessageMixin, AuthMixin
    },
    name: "MemeMixin",
    data () {
      return {}
    },
    methods: {
      async loadMemes (query) {
        EventBus.$emit('load-memes-start');
        let result = false;
        try {
          const response = await MemeAPI.load(query);
          console.log(response.data)
          if (response.data.success) {
            result = response.data;
          } else {
            this.showErrorBox(response.message)
          }
        } catch (err) {
          this.showErrorBox(err.response.data.message || err.message);
        }
        EventBus.$emit('load-memes-end');
        return result;
      },
      async voteForBestMeme (winner, loser) {
        await this.checkTimeOfTokens();
        if (this.isNotLogged()) return
        let result = false;
        try {
          const response = await MemeAPI.vote({winnerId: winner._id, loserId: loser._id});
          console.log(response.data)
          if (response.data.success) {
            result = response.data.items;
            this.showSuccessBox("Voted")
          } else {
            this.showErrorBox(response.message)
          }
        } catch (err) {
          this.showErrorBox(err.response.data.message || err.message);
        }
        return result;
      },
      async load2RandomMeme () {
        await this.checkTimeOfTokens();
        if (this.isNotLogged()) return
        EventBus.$emit('load-meme-random-start');
        let result = false;
        try {
          const response = await MemeAPI.random2();
          console.log(response.data)
          if (response.data.success) {
            result = response.data.items;
          } else {
            this.showErrorBox(response.message)
          }
        } catch (err) {
          this.showErrorBox(err.response.data.message || err.message);
        }
        EventBus.$emit('load-meme-random-end');
        return result;
      }
    },
    computed: {},
  }
</script>

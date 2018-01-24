<script>
  import MemeAPI from '#/Meme';
  import MessageMixin from '@messages-mixin';
  import AuthMixin from '@auth-mixin';
  import {EventBus} from "@eventBus";

  export default {
    mixins: {
      MessageMixin,AuthMixin
    },
    name: "MemeMixin",
    data () {
      return {}
    },
    methods: {
      async load2RandomMeme () {
        await this.checkTimeOfTokens();
        if(this.isNotLogged()) return
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

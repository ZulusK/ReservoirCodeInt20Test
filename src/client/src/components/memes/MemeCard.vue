<template lang="pug">
  div.card
    div.card-header
      div.card-header-title(v-html= "meme.title")
    div.card-image
      figure.image
        img(v-if="isImage", :src="meme.content", alt="Meme's image")
        video(v-else, controls)
          source(:src="meme.content", )
          | Your browser does not support HTML5 video.

</template>

<script>
  export default {
    name: "MemeCard",
    data () {
      return {}
    },
    props: {
      "meme": {
        type: Object,
        required: true
      }
    },
    computed: {
      isImage () {
        return this.meme && this.meme.content.match(/.+(gif|jpg|jpeg|raw|png)/)
      }
    }
  }
</script>

<style scoped>

</style>

<template lang="pug">
  div.card
    div.card-header
      div.card-header-title(v-html= "meme.title")
    div.card-image
      figure.logo-image-container
        img.logo-image(v-if="isImage", :src="meme.content", alt="Meme's image")
        video(v-else, controls,  width="320" height="240")
          source(:src="meme.content", )
          | Your browser does not support HTML5 video.

</template>


<script>
  export default {
    name: "MemePrev",
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
  .logo-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0px;
  }

  .logo-image-container {
    margin: auto;
    height: 256px;
  }
</style>

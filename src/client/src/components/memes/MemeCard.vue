<template lang="pug">
  div.card
    div.card-header
      div.card-header-title(v-html= "meme.title")
    div.card-image
      figure.image
        img(:src="meme.content", alt="Meme's image")

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
    }
  }
</script>

<style scoped>

</style>

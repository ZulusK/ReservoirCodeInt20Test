<template lang="pug">
  b-field(
  :type="hasError? 'is-danger': text?'is-success':''",
  :message="errorMessage")
    b-input(
    :type="type",
    :icon="icon",
    :name="label",
    :placeholder="placeholder",
    v-model="text",
    :v-validate="rules",
    :password-reveal="reveal")
</template>
<script>
  export default {
    name: "InputText",
    data () {
      return {
        text: null
      }
    },
    methods: {},
    computed: {
      errorMessage () {
        return this.hasError ? errors.first(this.label) : ''
      },
      hasError () {
        return this.errors.has(this.label);
      }
    },
    props: {
      "rules": {
        type: String
      },
      "icon": {
        type: String
      },
      "label": {
        type: String,
        required: true
      },
      "placeholder": {
        type: String,
      },
      "type": {
        type: String,
        default: "text"
      },
      "reveal":{
        type:Boolean,
        default:false
      }
    },
    created () {

    }
  }
</script>
<style scoped lang="scss">
</style>

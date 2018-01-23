<template>
  <b-modal :active.sync="UI.isShown"
           class="modal"
           scroll="keep"
           animation="zoom-out"
           width="400px">
    <div class="box has-text-centered">
      <figure class="avatar">
        <template>
          <img src="/static/img/user.png" width="140px" class="avatar-image" alt=""/>
        </template>
      </figure>
    </div>

  </b-modal>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        UI: {
          isShown: false
        }
      }
    },
    methods: {
      toggle () {
        this.UI.isShown = !this.UI.isShown;
      }
    }
  }
</script>

<style scoped>

</style>

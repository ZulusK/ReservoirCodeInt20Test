<script>
  export default {
    methods: {
      showErrorBox (msg) {
        this.$toast.open({
          duration: 5000,
          message: msg || "Something is going wrong",
          position: 'is-top',
          queue: false,
          type: 'is-danger'
        })
      },
      showSuccessBox(msg) {
        this.$toast.open({
          duration: 5000,
          message: msg || "All is ok",
          position: 'is-top',
          queue: false,
          type: 'is-success'
        })
      },
    },
  }
</script>

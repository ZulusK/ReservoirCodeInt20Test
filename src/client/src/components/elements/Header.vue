<template lang="pug">
  header
    nav.navbar.is-white(role="navigation" aria-label="main navigation")
      div.container
        div.navbar-brand
          p.navbar-item.brand-text Int20Test
            div.navbar-burger.burger(data-target="navMenu")
              span
              span
              span
        div#navMenu.navbar-menu
          div.navbar-start
              header-link(v-for="(link, i) in links", :key="i", :link="link",
              v-if="!('condition' in link) || link.condition()")
</template>

<script>
  import links from '%/elements/header-links/index';
  import HeaderLink from '%/elements/header-links/HeaderLink'

  export default {
    components: {
      HeaderLink
    },
    name: "app-header",
    data () {
      return {
        UI: {
          isShown: true
        },
        links
      }
    }
  }
</script>

<style scoped>

</style>


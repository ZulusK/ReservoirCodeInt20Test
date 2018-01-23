<template lang="pug">
  a(ref="btn",  @click="hasHandler?link.handler():''").navbar-item
    router-link(:to="link.to||{}").has-text-black
      b-icon(
      :class="link.icon.class",
      v-if="hasIcon",
      :pack="link.icon.pack||'fa'",
      :icon="link.icon.name",
      :size="link.icon.size||'is-small'")
      span  {{link.title}}
    ui-ripple-ink(trigger="btn").ripple
    ui-tooltip(v-if="hasTooltip",trigger="btn", position="bottom center") {{link.tooltip}}
</template>

<script>
  export default {
    name: "PlainLink",
    props: {
      "link": {
        type: Object,
        required: true
      }
    },
    computed: {
      hasChildren () {
        return this.link.children && this.link.children.length > 0;
      },
      hasTooltip () {
        return this.link.tooltip && this.link.tooltip.length > 0;
      },
      hasIcon () {
        return this.link.icon;
      },
      hasHandler () {
        return this.link.handler;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~material-colors/dist/colors";

  .ripple {
    color: rgba(0, 0, 0, .3)
  }

  .no-decoration {
    text-decoration: none;
  }
</style>

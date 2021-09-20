<template>
  <router-link class="game-tile" :to="page.path">
    <img class="image" :src="image" />
    <div class="name">{{ page.frontmatter.name }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    page: Object,
  },
  computed: {
    image() {
      return this.page.path + "main-tile.png";
    },
  },
};
</script>

<style lang="stylus" scoped>
.game-tile
  display block
  width 231px
  box-shadow 0 0 5px black
  .image
    display block
  .name
    padding 5px 0 5px 10px
    background-color $tileColor
    color $textColor
</style>

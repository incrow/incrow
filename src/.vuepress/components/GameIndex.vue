<template>
  <div class="game-tile-carousel">
    <game-tile v-for="page in posts" :key="page.title" :page="page" />
  </div>
</template>

<script>
import GameTile from "./GameTile.vue";

export default {
  components: {
    GameTile,
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter((x) => x.path.startsWith("/games/"))
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style lang="stylus" scoped>
.game-tile-carousel
  display flex
  flex-direction row
  .game-tile
    margin-right 8px
</style>

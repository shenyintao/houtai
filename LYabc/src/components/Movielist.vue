<template>
  <movieList :movies="movies"  @select="movieDetail"></movieList>
</template>

<script>
export default {
  name: 'Movielist',
  methods: {
    // 转入电影详情页
    movieDetail (item) {
      console.log(`${item.moveId}`)
      this.$router.push({
        path: `/Movielist/${item.moveId}`
      })
    }
  }
}
</script>

<style scoped>

</style>

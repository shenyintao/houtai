<template>
    <div id="news">
      <h2>新闻列表</h2>
      <ul id="xwList">
        <router-link to="/news/01" tag="li">新闻列表01</router-link>
        <router-link to="/news/02" tag="li">新闻列表02</router-link>
        <li v-for="(item,index) in movies"  :key="index" @click="selectItem(item)">
          111111
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    selectItem (item) {
      // console.log(item.moveId);
      // var item = item.moveId;
      this.$emit('select', item)
    }
  }
}
</script>

<style scoped lang="less">
  #xwList{
    list-style-type: none;
    li{
      color: red;
    }
  }

</style>

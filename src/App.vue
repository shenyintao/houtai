<template>
  <div id="app">
    <!-- <Nav/> -->
    <!-- <Test/> -->
    <Home/>
  </div>
</template>

<script>
// import Test from './components/test'
// import Nav from './components/Nav'
import Home from './components/Home'

export default {
  name: 'App',
  components:{
    // Test,
    // Nav
    Home
  }
}
</script>

<style>
*{
  padding:0;
  margin:0
}
.el-main{
  border:1px solid #E4E7ED !important;
}
.el-button{
  padding:12px 16px !important;
}
.el-input{
  width:200px !important;
  margin-left:20px;
}
#search-button{
  margin-left:-4px !important;
}
.el-table{
  margin-top:10px;
}
.el-pagination{
  margin-top:20px;
}
</style>

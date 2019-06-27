<template>
<div>
  <el-button type="primary">通过</el-button>
        <el-button type="primary">拒绝</el-button>
        <el-button type="primary">拉黑</el-button>
        <el-button type="primary">刷新</el-button>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="聊天号/平台"
      width="250">
    </el-table-column>
    <el-table-column
      prop="shopName"
      label="店铺名">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
      name:"Check",
    data() {
      return {
        input:'',
        tableData: [
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            shopName:"哈哈哈哈哈啊哈哈",

          }, 
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            shopName:"哈哈哈哈哈啊哈哈",
            
          }, 
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            shopName:"哈哈哈哈哈啊哈哈",
            
          }, 
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            shopName:"哈哈哈哈哈啊哈哈",
            
          }, 
        ]
      }
    }
  }
</script>
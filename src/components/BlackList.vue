<template>
<div>
  <el-row>
    <el-button type="primary">修改</el-button>
    <el-button type="primary">解封</el-button>
    <el-button type="primary">个人信息</el-button>
    <el-button type="primary">订单信息</el-button>
    <el-button type="primary" @click="open">刷新</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" id="search-button">搜索</el-button>
  </el-row>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%" @row-click="ceshi" ref="tb">
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
      prop="username"
      label="聊天号"
      width="250">
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
      prop="money"
      label="活动资金/冻结资金"
      width="180">
    </el-table-column>
    <el-table-column
      prop="believe"
      label="信用"
      width="80">
    </el-table-column>
    <el-table-column
      prop="vip"
      label="VIP积分"
      width="80">
    </el-table-column>
    <el-table-column
      prop="date"
      label="注册时间"
      width="140">
    </el-table-column>
    <el-table-column
      prop="reason"
      label="封号原因"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="封号时间">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    name:"BlackList",
    data() {
      return {
        input:'',
        tableData: [
          {
            id: '1',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            money:1000,
            believe:500,
            vip:998,
            date:"2018-10-11",
            reason:"傻逼",
            time:"2018-10-11"
          }, 
          {
            id: '12',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            money:1000,
            believe:500,
            vip:998,
            date:"2018-10-11",
            reason:"傻逼",
            time:"2018-10-11"
          }, 
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            money:1000,
            believe:500,
            vip:998,
            date:"2018-10-11",
            reason:"傻逼",
            time:"2018-10-11"
          }, 
          {
            id: '10',
            name: '王小虎',
            username: '上海市普陀区金沙江路 1518 弄',
            phone:"18358534723",
            email:"897702336@qq.com",
            money:1000,
            believe:500,
            vip:998,
            date:"2018-10-11",
            reason:"傻逼",
            time:"2018-10-11"
          }, 
        ]
      }
    },
    methods:{
      ceshi(event){
        console.log(event);
      },
      open(){
        console.log('123')
      }
    }
  }
</script>
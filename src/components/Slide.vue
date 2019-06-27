<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="商家黑名单" name="first">
      <BlackList/>
    </el-tab-pane>
    <el-tab-pane label="商家账号管理" name="second">
      <AccountManagement/>
    </el-tab-pane>
    <el-tab-pane label="商家注册审核" name="third">
        <Check/>
    </el-tab-pane>
    <el-tab-pane label="刷手黑名单" name="fourth">
       <SpongemanBlackList/> 

    </el-tab-pane>
    <el-tab-pane label="刷手账号管理" name="fifth">
        <SpongemanAccountManagement/>
    </el-tab-pane>
    <el-tab-pane label="刷手注册审核" name="sixth">
        <SpongemanCheck/>
    </el-tab-pane>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </el-tabs>
</template>
<script>
import BlackList from './BlackList'
import AccountManagement from './AccountManagement'
import Check from './Check'
import SpongemanBlackList from './Spongeman_BlackList'
import SpongemanAccountManagement from './Spongeman_AccountManagement'
import SpongemanCheck from './Spongeman_Check'
  export default {
    data() {
      return {
        activeName: 'first',
      };
    },
    components:{
      BlackList,
      AccountManagement,
      Check,
      SpongemanBlackList,
      SpongemanAccountManagement,
      SpongemanCheck
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>


<template>
  <el-row class="tac">   
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-home"></i>
            <span>后台</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="handleClick">员工管理</el-menu-item>
            <el-menu-item index="1-2" @click="handleClick">角色权限管理</el-menu-item>
            <el-menu-item index="1-3">菜单管理</el-menu-item>
          </el-menu-item-group>    
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-office-building"></i>
            <span>商家</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">注册检验</el-menu-item>
            <el-menu-item index="2-2">用户管理</el-menu-item>
            <el-menu-item index="2-3">黑名单</el-menu-item>
          </el-menu-item-group>
            
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-coordinate"></i>
            <span>刷手</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">注册检验</el-menu-item>
            <el-menu-item index="3-2">用户管理</el-menu-item>
            <el-menu-item index="3-3">黑名单</el-menu-item>
          </el-menu-item-group>
            
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-tickets"></i>
            <span>订单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">A单</el-menu-item>
            <el-menu-item index="4-2">B单</el-menu-item>
            <el-menu-item index="4-3">S单</el-menu-item>
          </el-menu-item-group>
            
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-warning"></i>
            <span>举报</span>
          </template>
          <el-menu-item-group>
            <template slot="title">商家举报</template>
            <el-menu-item index="5-1">B单</el-menu-item>
            <el-menu-item index="5-2">S单</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">刷手举报</template>
            <el-menu-item index="5-3">B单</el-menu-item>
            <el-menu-item index="5-4">S单</el-menu-item>
          </el-menu-item-group>             
        </el-submenu>
      </el-menu>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b" >
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span>公告</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">公告</el-menu-item>
          </el-menu-item-group>
            
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name:'NavList',
    data(){
      return {
      
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(key,keyPath){
        console.log(key._uid,key);
      }
    }
  }
</script>

<style scoped>
.el-aside{
  background: red !important;
}
</style>


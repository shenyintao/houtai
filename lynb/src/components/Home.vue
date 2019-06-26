<template>
  <div id="home">
    <div class="nav">
      头部导航栏
    </div>
    <div class="middle clear">
      <div class="rotation-box">
        轮播图
      </div>
      <section class="login-box">
        <button>登录</button>
        <button>注册</button>
      </section>
    </div>
    <div class="cont-box middle clear">
      产品内容
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="less">
@import "~@/assets/less/middle";
#home{
  .middle{
    .rotation-box{
      width: 800px;
      height: 500px;
      border: 1px solid red;
      box-sizing: border-box;
      float: left;
    }
    .login-box{
      width: 400px;
      height: 500px;
      border: 1px solid red;
      box-sizing: border-box;
      float: left;
    }
  }
  .cont-box{
    height: 800px;
    margin-top: 20px;
    border: 1px solid red;
    box-sizing: border-box;
  }
}
</style>

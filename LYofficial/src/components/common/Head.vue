<template>
    <div id="header">
      <div class="middle clear">
        <ul class="nav-list">
          <li>亲，欢迎回来！</li>
          <li>查看购物车</li>
          <li>用户中心</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #header{
    background: #f4f4f4;
    border-bottom: 1px solid #ccc;
    .nav-list{
      float: right;
      height: 30px;
      li{
        float: left;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        cursor: pointer;
      }
      li:nth-of-type(1){
        margin-right: 16px;
        cursor: auto;
      }
      li:nth-of-type(2){
        margin-right: 8px;
        &:hover{
          color: red;
        }
        &::before{
          content: '';
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 5px;
          transform: translateY(16%);
          background: url("../../assets/img/trolley.png") no-repeat -4px -4px;
          vertical-align: center;
        }
      }
      li:nth-of-type(3){
        margin-right: 8px;
        &:hover{
          color: red;
        }
        &::before{
          content: '';
          display: inline-block;
          width: 8px;
          height: 14px;
          margin-right: 5px;
          transform: translateY(20%);
          background: url("../../assets/img/user.png") no-repeat;
        }
      }
      li:nth-of-type(4){
        margin-right: 8px;
        &:hover{
          color: red;
        }
        &::before{
          content: '';
          display: inline-block;
          width: 8px;
          height: 14px;
          margin-right: 5px;
          transform: translateY(20%);
          background: url("../../assets/img/phone.png") no-repeat;
        }
      }
    }
  }

</style>

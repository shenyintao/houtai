<template>
  <div id="footer">
    <div class="footer-top">
      <div class="middle">
        <div class="tedian">
          <ul class="tedianList clear">
            <li>
              <img src="../../assets/img/pics1.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/img/pics2.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/img/pics3.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/img/pics4.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/img/pics5.jpg" alt="">
            </li>
          </ul>
        </div>
        <div class="dibu clear">
          <div class="lianxi">
            <p>官方热线</p>
            <p>400-123-456</p>
            <p>客服邮箱:</p>
            <p>12345678@163.com</p>
          </div>
          <dl class="about-list">
            <dt>公司简介</dt>
            <dd>
              <a href="javascript:;">账户自助服务</a>
            </dd>
            <dd>
              <a href="javascript:;">新用户注册</a>
            </dd>
            <dd>
              <a href="javascript:;">怎样下订单</a>
            </dd>
          </dl>
          <dl class="about-list">
            <dt>联系我们</dt>
            <dd>
              <a href="javascript:;">账号&nbsp; & &nbsp;密码问题</a>
            </dd>
            <dd>
              <a href="javascript:;">缺货登记</a>
            </dd>
          </dl>
          <dl class="about-list">
            <dt>隐私保护</dt>
            <dd>
              <a href="javascript:;">退换货原则和流程</a>
            </dd>
            <dd>
              <a href="javascript:;">服务保障承诺</a>
            </dd>
            <dd>
              <a href="javascript:;">验货与签收</a>
            </dd>
          </dl>
          <dl class="about-list">
            <dt>免责条款</dt>
            <dd>
              <a href="javascript:;">支付方式</a>
            </dd>
            <dd>
              <a href="javascript:;">在线支付介绍</a>
            </dd>
            <dd>
              <a href="javascript:;">汇款单招领</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="footer-btm">
      <div class="middle">
        <p>&copy;2005-2013&nbsp;艺购商城版权所有，并保留所有权利&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;广东省东莞市茶山镇茶山村东岳路95号五楼&nbsp;&nbsp;E-mail：123456789qq.com
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #footer{
    margin-top: 62px;
    .footer-top{
      background: #fff;
      padding-top: 18px;
      box-shadow: 0 4px 2px -2px #ccc inset;
      .middle{
        .tedian{
          width: 980px;
          border: 1px solid #ccc;
          margin: 0 auto;
          .tedianList{
            height: 63px;
            li{
              float: left;
            }
          }
        }
        .dibu{
          margin-top: 18px;
          padding-bottom: 44px;
          .lianxi{
            width: 214px;
            border-right: 1px solid #e8e8e8;
            float: left;
            p{
              text-indent: 14px;
              &:nth-of-type(1){
                font-size: 20px;
                font-weight: bold;
                color: #836e5d;
              }
              &:nth-of-type(2){
                font-size: 20px;
                font-weight: bold;
                font-style: italic;
                color: #83b30c;
              }
              &:nth-of-type(3){
                font-size: 12px;
                color: #999;
              }
              &:nth-of-type(4){
                font-style: italic;
                font-weight: bold;
                font-size: 16px;
                color: #83b30c;
                margin-top: 4px;
              }
            }
          }
          .about-list{
            float: left;
            dt{
              font-size: 14px;
              color: #958176;
            }
            dd{
              a{
                font-size: 12px;
                color: #959595;
              }
            }
            &:nth-of-type(1){
              margin-left: 82px;
              dt:before{
                content: '';
                display: inline-block;
                width: 24px;
                height: 23px;
                background: url("../../assets/img/footer1.png") no-repeat;
                transform: translateY(26%);
                margin-right: 6px;
              }
              dd{
                text-indent: 14px;
              }
            }
            &:nth-of-type(2){
              margin-left: 82px;
              dt:before{
                content: '';
                display: inline-block;
                width: 24px;
                height: 23px;
                background: url("../../assets/img/footer2.png") no-repeat;
                transform: translateY(26%);
                margin-right: 6px;
              }
              dd{
                text-indent: 14px;
              }
            }
            &:nth-of-type(3){
              margin-left: 82px;
              dt:before{
                content: '';
                display: inline-block;
                width: 24px;
                height: 23px;
                background: url("../../assets/img/footer3.png") no-repeat;
                transform: translateY(26%);
                margin-right: 6px;
              }
              dd{
                text-indent: 14px;
              }
            }
            &:nth-of-type(4){
              margin-left: 82px;
              dt:before{
                content: '';
                display: inline-block;
                width: 24px;
                height: 23px;
                background: url("../../assets/img/footer4.png") no-repeat;
                transform: translateY(26%);
                margin-right: 6px;
              }
              dd{
                text-indent: 14px;
              }
            }
          }
        }
      }
    }
    .footer-btm{
      height: 34px;
      line-height: 34px;
      background: #836e5d;
      p{
        width: 742px;
        font-size: 12px;
        color: #dfdad7;
        margin: 0 auto;
      }
    }
  }
</style>

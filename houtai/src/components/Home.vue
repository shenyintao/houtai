<template>
  <div id="home">
    <h1>logo</h1>
    <Rtcount :listData="listData"></Rtcount>
    <div class="rt-box">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Rtcount from '@/components/common/Rtcount'
let listData = {
  firstList: [
    {
      title: '后台',
      count: [
        {
          countTitle: '员工管理',
          url: 'one'
        },
        {
          countTitle: '角色权限管理',
          url: 'two'
        },
        {
          countTitle: '菜单管理',
          url: 'three'
        }
      ]
    },
    {
      title: '商家',
      count: [
        {
          countTitle: '注册核验',
          url: 'one'
        },
        {
          countTitle: '用户管理',
          url: 'three'
        },
        {
          countTitle: '黑名单',
          url: 'two'
        }
      ]
    },
    {
      title: '刷手',
      count: [
        {
          countTitle: '注册核验',
          url: 'one'
        },
        {
          countTitle: '用户管理',
          url: 'two'
        },
        {
          countTitle: '黑名单',
          url: 'three'
        }
      ]
    },
    {
      title: '订单',
      count: [
        {
          countTitle: 'A单',
          url: 'one'
        },
        {
          countTitle: 'B单',
          url: 'two'
        },
        {
          countTitle: 'S单',
          url: 'three'
        }
      ]
    },
    {
      vIf: true,
      title: '举报',
      count: [
        {
          countTitle: '商家举报',
          smCount: [
            {
              countSmTitle: 'B单',
              url: 'one'
            },
            {
              countSmTitle: 'S单',
              url: 'two'
            }
          ]
        },
        {
          countTitle: '刷手举报',
          smCount: [
            {
              countSmTitle: 'B单',
              url: 'one'
            },
            {
              countSmTitle: 'S单',
              url: 'two'
            }
          ]
        }
      ]
    },
    {
      title: '公告',
      count: [
        {
          countTitle: '系统消息',
          url: 'one'
        }
      ]
    }
  ]
}
export default {
  name: 'home',
  data () {
    return {
      listData
    }
  },
  components: {
    Rtcount
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#home {
  .rt-box {
    float: left;
  }
}
</style>

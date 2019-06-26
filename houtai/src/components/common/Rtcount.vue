<template>
  <div id="rtcount">
    <ul class="one-list">
      <li v-for="(item, i) in listData.firstList" :class="{'active' : i ===index}" @click="open(i)" :key="i">
        {{ item.title }}
        <div v-if="item.vIf === true" class="count-box" :style="{ 'display' : i === index ? 'block' : 'none'}">
          <div class="count-sm-box" v-for="(items, k) in item.count" @click="smOpen(k)" :key="k">
            <div>
              {{ items.countTitle }}
              <div v-for="(smCount, j) in items.smCount" :key="j" :style="{ 'display' : k === smIndex ? 'block' : 'none'}">
                <router-link :to="smCount.url" tag="p">
                  {{ smCount.countSmTitle }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="count-box" :style="{ 'display' : i === index ? 'block' : 'none'}">
          <router-link class="count-sm-box" v-for="(items, k) in item.count" :to="items.url" :key="k" tag="p">
            {{ items.countTitle }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'rtcount',
  props: ['listData'],
  data () {
    return {
      index: -1,
      smIndex: -1
    }
  },
  methods: {
    open (i) {
      this.index = i
    },
    smOpen (k) {
      this.smIndex = k
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#rtcount{
  .one-list{
    float: left;
    height: 1000px;
    background: #545c64;
    li{
      width: 160px;
      // height: 50px;
      line-height: 40px;
      font-size: 14px;
      background: #545c64;
      color: #fff;
      position: relative;
      cursor: pointer;
      &::before{
        display: inline-block;
        content: '';
        width: 14px;
        height: 14px;
        margin-left: 10px;
        background: #ccc;
        transform: translateY(10%)
      }
      &::after{
        display: inline-block;
        content: '';
        width: 8px;
        height: 8px;
        border: 2px solid #ccc;
        border-top: none;
        border-left: none;
        position: absolute;
        top: 12px;
        right: 10px;
        transform: rotate(45deg)
      }
      &.active{
        background: #323a42;
      }
      &:hover{
        background: #323a42;
      }
      .count-box{
        display: none;
        p{
          width: 160px;
          height: 40px;
          text-indent: 30px;
          background: #545c64;
          &:hover{
            background: #3A434B;
          }
        }
        .count-sm-box{
          background: #545c64;
          text-indent: 30px;
          &:hover{
            background: #3A434B;
            p{
              background: #545c64;
              &:hover{
                background: #434C54;
              }
            }
          }
          p{
            text-indent: 50px;
          }
        }
      }
    }
  }
  .right-box{
    float: left;
  }
}
</style>

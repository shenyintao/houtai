<template>
  <div id="home">
    <Head></Head>
    <div id="header-box">
      <div class="middle">
        <img class="logo" src="../assets/img/logo2.png" alt="">
        <div class="search">
          <input class="search-ipt" type="text">
          <button class="search-btn">
            <img class="btn" src="../assets/img/search.jpg" alt="">
          </button>
        </div>
      </div>
    </div>
    <div id="main">
      <div id="main-box">
        <div class="bg-top">
          <div class="middle">
            <ul class="nav-list">
              <li class="active">首页</li>
              <li>团购促销</li>
              <li>名师荟萃</li>
              <li>艺品驿站</li>
            </ul>
          </div>
        </div>
        <div class="bg-btm"></div>
        <div class="middle banner-box">
          <img class="list-title" src="../assets/img/list_title.png" alt="">
          <div class="lt-list-box">
            <ul class="lt-list one clear" v-for="(items, i) in ltListData" :key="i">
              <li v-for="(item, g) in items.ltData" :key="g">
                <a :href="item.url" target="_blank">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="rotation-box" @mouseenter="stop()" @mouseleave="go()">
            <ul class="rotation-list clear">
              <li v-for="(item, i) in listData" :style="{ 'display' : i === index ? 'block' : 'none' }" :key="i">
                <img :src="item.img" alt="" @click="goBanner(item)">
              </li>
            </ul>
            <ul class="rotation-dian">
              <li v-for="(item, k) in listData" :class="{ 'active' : k === index }" @click="change(k)" :key="k">
                {{ item.title }}
              </li>
            </ul>
          </div>
          <div class="section-box">
            <dl class="section-list">
              <dt>
                <img class="title-pic" src="../assets/img/title.png" alt="">
              </dt>
              <dd class="clear" v-for="(item, i) in sectionData" :key="i">
                <a :href="item.url" target="_blank">
                  <img :src="item.Img" alt="">
                  <div class="rt-cont">
                    <p class="rt-cont-title">
                      <a :href="item.url" target="_blank">
                        {{ item.Title }}
                      </a>
                    </p>
                    <p>
                      {{ item.smTitle }}
                    </p>
                  </div>
                </a>
              </dd>
            </dl>
            <p class="more">
              <a href="javascript:;">
                查看更多>>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="mian-btm-box">
        <div class="middle">
          <div class="product-box">
            <div class="product-title clear">
              <h3>精品推荐</h3>
              <a href="javascript:;">查看更多>></a>
            </div>
            <ul class="product-list clear">
              <li v-for="(item, i) in compList" :key="i">
                <div class="click-box" @click="goJptj(item)">
                      <div class="product-pic-box">
                        <img :src="item.Img" alt="">
                        <div class="zzc">{{ item.Zzc }}</div>
                      </div>
                      <div class="product-cont-box clear">
                        <p>
                          <a href="javascript:;">{{ item.Title }}</a>
                        </p>
                        <p>点击量：{{ item.cs }}</p>
                        <p>{{ item.djs }}</p>
                        <p>商城价：￥{{ item.Money }}元</p>
                        <p>购买</p>
                      </div>
                    </div>
                <div class="xiangq">
                  <p>排期次数：</p>
                  <p>累计销量：</p>
                  <p>点击次数：{{ item.cs }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/components/common/Head'
import Foot from '@/components/common/Foot'
export default {
  name: 'Home',
  components: {
    Head,
    Foot
  },
  data () {
    return {
      index: 0,
      timer: null,
      djs: '',
      getTimes: new Date(),
      clearIndex: null,
      listData: [],
      sectionData: [],
      productJptj: [],
      ltListData: []
    }
  },
  watch: {
    getTimes: {
      handler () {
        this.productJptj = this.productJptj.filter(t => {
          t.Time = t.Time.replace(new RegExp('/', 'gm'), '/')
          var ends = (new Date(t.Time)).getTime()
          return ends > this.getTimes
        })
      },
      deep: true
    }
  },
  computed: {
    compList () {
      let listDate = this.productJptj.map(t => {
        let sDate = new Date(t.Time)
        let leftTime = sDate.getTime() - this.getTimes.getTime()
        // 定义变量 d,h,m,s保存倒计时的时间
        if (leftTime >= 0) {
          // var d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
          let h = Math.floor(leftTime / 1000 / 60 / 60)
          let m = Math.floor(leftTime / 1000 / 60 % 60)
          let s = Math.floor(leftTime / 1000 % 60)
          if (h < 10) {
            h = '0' + h
          }
          if (m < 10) {
            m = '0' + m
          }
          if (s < 10) {
            s = '0' + s
          }
          return {
            ...t,
            djs: h + ':' + m + ':' + s
          }
        } else {
          //
          return {
            ...t,
            djs: '已下架'
          }
        }
      })
      return listDate
    }
  },
  methods: {
    getLbtData () {
      this.$http.get(this.$url + 'lbtData').then((res) => {
        this.listData = this.listData.concat(res.data.data)
      }).catch((error) => {
        console.log(error + '数据获取错误')
      })
    },
    getSection () {
      this.$http.get(this.$url + 'section').then((res) => {
        this.sectionData = this.sectionData.concat(res.data.data)
      }).catch((error) => {
        console.log(error + '数据获取错误')
      })
    },
    getProduct () {
      this.$http.get(this.$url + 'product').then((res) => {
        this.productJptj = this.productJptj.concat(res.data.data)
      }).catch((error) => {
        console.log(error + '数据获取错误')
      })
    },
    subTime () {
      this.getTimes = new Date() // 直接等于当前时间
      this.clearIndex = setTimeout(this.subTime, 1000)
    },
    getLtData () {
      this.$http.get(this.$url + 'ltlist').then((res) => {
        this.ltListData = this.ltListData.concat(res.data.data)
      }).catch((error) => {
        console.log(error + '数据获取错误')
      })
    },
    goBanner (item) {
      window.open(item.url)
    },
    goJptj (item) {
      let model = this.productJptj.find(t => {
        return t.id === item.id
      })
      model.cs = model.cs + 1
      window.open(item.url)
    },
    delets () {
      if (this.djs < 0) {
        console.log('---------->删除li')
        let index = this.productJptj.indexOf(this.productJptj)
        this.productJptj.splice(index, 1)
      }
    },
    change (k) {
      this.index = k
    },
    autoPlayt () {
      this.index++
      if (this.index === this.listData.length) {
        this.index = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlayt, 2500)
    },
    stop () {
      clearInterval(this.timer)
    },
    go () {
      setInterval(this.play())
    }
  },
  mounted () {
    this.subTime()
  },
  beforeDestroy () {
    if (this.clearIndex != null) {
      clearTimeout(this.clearIndex)
      this.clearIndex = null
    }
  },
  created () {
    this.getLbtData()
    this.getSection()
    this.getProduct()
    this.getLtData()
    this.play()
    this.delets()
  }
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/middle";
  #home{
    #header-box{
      height: 112px;
      background: url("../assets/img/top_bg.jpg");
      .logo{
        margin-top: 10px;
        float: left;
      }
      .search{
        height: 30px;
        border: 1px solid rgba(204, 204, 204, .3);
        background: rgba(250, 250, 250, .3);
        border-radius: 4px;
        float: right;
        margin: 36px 8px 0 0;
        padding: 4px;
        .search-ipt{
          width: 350px;
          height: 29px;
          float: left;
          border: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          text-indent: 10px;
        }
        .search-btn{
          border: none;
          cursor: pointer;
        }
      }
    }
    #main{
      #main-box{
        position: relative;
        .bg-top{
          height: 40px;
          /* background: -webkit-linear-gradient(#9bd457, #90ca4b, #85c23d); !* Safari 5.1 - 6.0 *!
          background: -o-linear-gradient(#9bd457, #90ca4b, #85c23d); !* Opera 11.1 - 12.0 *!
          background: -moz-linear-gradient(#9bd457, #90ca4b, #85c23d); !* Firefox 3.6 - 15 *!
          background: linear-gradient(#9bd457, #90ca4b, #85c23d); */
          background: url("../assets/img/top_bg.png");
          .middle{
            .nav-list{
              position: relative;
              left: 230px;
              z-index: 10;
              li{
                height: 38px;
                line-height: 38px;
                float: left;
                font-size: 16px;
                color: #fff;
                padding: 0 16px;
                margin: 2px 12px 0;
                cursor: pointer;
                &:hover{
                  background: #98d960;
                }
                &.active{
                  background: #98d960;
                }
              }
            }
          }
        }
        .bg-btm{
          height: 360px;
          background: url("../assets/img/banner_bg.jpg");
          z-index: -2;
        }
        .banner-box{
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          .list-title{
            position: absolute;
            top: -7px;
            left: 0;
          }
          .lt-list-box{
            width: 202px;
            height: 360px;
            margin-top: 40px;
            background: #fff;
            box-shadow: 0px 1px 1px 1px #b5b5af;
            float: left;
            position: absolute;
            z-index: 2;
            .lt-list{
              padding: 14px 0 12px 12px;
              border-bottom: 1px solid #ccc;
              li{
                width: 88px;
                text-indent: 18px;
                margin-top: 5px;
                float: left;
                &:nth-of-type(1){
                  width: 100%;
                  font-weight: bold;
                  text-indent: 0;
                  font-size: 14px;
                  margin-top: -4px;
                  a{
                    &:hover{
                      color: #000;
                      text-decoration: none;
                    }
                  }
                }
                a{
                  font-size: 12px;
                  color: #000;
                  &:hover{
                    color: red;
                    text-decoration: underline;
                  }
                }
              }
              &:last-of-type{
                border-bottom: none;
              }
            }
          }
          .rotation-box{
            height: 360px;
            margin: 40px 0 0 202px;
            position: relative;
            .rotation-list{
              li{
                position: absolute;
                cursor: pointer;
                img{
                  width: 555px;
                  height: 360px;
                }
              }
            }
            .rotation-dian{
              position: absolute;
              left: 0;
              bottom: 0;
              z-index: 10;
              li{
                width: 110px;
                height: 33px;
                line-height: 33px;
                font-size: 12px;
                color: #fff;
                background: rgba(204, 204, 204, .6);
                float: left;
                margin-right: 1px;
                text-align: center;
                cursor: pointer;
                &:last-of-type{
                  margin-right: 0;
                }
              }
              li.active{
                background: rgba(96, 96, 96, .6);
              }
            }
          }
          .section-box{
            width: 246px;
            height: 432px;
            background: url("../assets/img/section_bg.png");
            position: absolute;
            top: -19px;
            right: 0;
            .section-list{
              padding: 0 20px 0 20px;
              dt{
                .title-pic{
                  margin: 24px auto 12px;
                }
              }
              dd{
                border-bottom: 1px dashed #d1ceb9;
                padding: 18px 0 18px 0;
                font-size: 12px;
                color: #836e5d;
                cursor: pointer;
                a{
                  img{
                    width: 76px;
                    height: 64px;
                    border: 1px solid #c5d1b9;
                    padding: 2px;
                    float: left;
                  }
                  .rt-cont{
                    float: left;
                    margin-left: 10px;
                    p{
                      width: 110px;
                      line-height: 20px;
                      &:nth-of-type(1){
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        a{
                          color: #5d9b1e;
                          font-weight: bold;
                          font-size: 12px;
                        }
                      }
                      &:nth-of-type(2){
                        color: #836e5d;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        overflow : hidden;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                      }
                    }
                  }
                }
                &:last-of-type{
                  border-bottom: none;
                }
              }
            }
            .more{
              float: right;
              margin-right: 20px;
              a{
                font-size: 12px;
                color: #5d9b1e;
                &:hover{
                  color: red;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
      #mian-btm-box{
        .middle{
          .product-box{
            margin-top: 26px;
            border: 1px solid #ccc;
            box-shadow: 0px 1px 2px #ccc;
            .product-title{
              height: 40px;
              line-height: 40px;
              border-bottom: 1px solid #ccc;
              background: #f6f6f6;
              h3{
                float: left;
                width: 202px;
                height: 41px;
                line-height: 41px;
                text-align: center;
                background: #7dac0b;
                color: #fff;
                font-size: 20px;
                font-weight: normal;
              }
              a{
                float: right;
                font-size: 12px;
                color: #898989;
                margin-right: 20px;
                &:hover{
                  color: red;
                  text-decoration: underline;
                }
              }
            }
            .product-list{
              padding: 30px 30px 0;
              background: #fff;
              li{
                width: 206px;
                float: left;
                margin: 0 30px 30px 0;
                border: 1px solid transparent;
                position: relative;
                cursor: pointer;
                &:nth-of-type(4n){
                  margin-right: 0;
                }
                .click-box{
                  .product-pic-box{
                    width: 192px;
                    height: 182px;
                    border: 1px solid #ccc;
                    padding: 6px;
                    position: relative;
                    img{
                      width: 100%;
                      height: 100%;
                    }
                    .zzc{
                      width: 192px;
                      height: 30px;
                      line-height: 30px;
                      font-size: 12px;
                      background: rgba(0, 0, 0, .5);
                      position: absolute;
                      bottom: 6px;
                      left: 6px;
                      color: #fff;
                      text-align: center;
                      overflow: hidden;
                      text-overflow:ellipsis;
                      white-space: nowrap;
                    }
                  }
                  .product-cont-box{
                    padding-bottom: 10px;
                    p{
                      &:nth-of-type(1){
                        height: 36px;
                        line-height: 36px;
                        text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        a{
                          font-size: 12px;
                          color: #836e5d;
                        }
                      }
                      &:nth-of-type(2){
                        font-size: 12px;
                        color: #5d9b1e;
                        margin-left: 10px;
                        float: left;
                      }
                      &:nth-of-type(3){
                        font-size: 12px;
                        color: red;
                        float: right;
                        margin-right: 10px;
                      }
                      &:nth-of-type(4){
                        font-size: 12px;
                        color: #5d9b1e;
                        float: left;
                        margin-left: 10px;
                      }
                      &:nth-of-type(5){
                        width: 50px;
                        height: 18px;
                        line-height: 18px;
                        border-radius: 2px;
                        text-align: center;
                        font-size: 12px;
                        color: #fff;
                        float: right;
                        margin-right: 10px;
                        background: linear-gradient(#95c800, #82b500, #689b00);
                        background: -webkit-linear-gradient(#95c800, #82b500, #689b00); /* Safari 5.1 - 6.0 */
                        background: -o-linear-gradient(#95c800, #82b500, #689b00); /* Opera 11.1 - 12.0 */
                        background: -moz-linear-gradient(#95c800, #82b500, #689b00); /* Firefox 3.6 - 15 */
                      }
                    }
                  }
                }
                .xiangq{
                  display: none;
                }
                &:hover{
                  border: 1px solid red;
                  .xiangq{
                    width: 150px;
                    height: 255px;
                    display: block;
                    background: #fff;
                    border: 1px solid #ccc;
                    -box-sizing: border-box;
                    padding: 10px;
                    position: absolute;
                    right: -180px;
                    top: 0;
                    z-index: 10;
                    p{
                      font-size: 14px;
                      height: 20px;
                      line-height: 20px;
                      border-bottom: 1px solid #ccc;
                    }
                  }
                  .product-pic-box{
                    border-color: transparent;
                    border-bottom-color: #ccc;
                  }
                }
                &:nth-of-type(4n){
                  .xiangq{
                    right: 214px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

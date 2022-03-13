<!-- home -->
<template>
  <div class="page-group" v-if="productdata">
    <!-- 你的html代码 -->
    <div class="page page-current" id="xindex">
      <!-- <header class="bar bar-nav tit" id="shopImg"></header> -->
      <!-- 页尾 -->
      <nav class="bar bar-tab">
        <p class="buttons-row endpage">
          <a class="button endpage-a external indexAOne" id="complaints" @click="feedback"
            ><span class="endpage-span">消费反馈</span></a
          >
          <a class="button endpage-a external indexATwo" id="infosearch" @click="search"
            ><span class="endpage-span-search">企业信息</span></a
          >
        </p>
      </nav>

      <div class="content-box">
        <div class="left"></div>
        <div class="content contentDivOne native-scroll right" @scroll="scrollEvent">
          <!-- 图片幻灯片 -->
          <div class="header-img">
            <img class="left" src="@assets/img/t_logo.jpg" />
            <img class="right" src="@assets/img/bar_logo.jpg" />
          </div>
          <!-- 表单列表 -->
          <div class="list-block liststyle">
            <ul class="productdata">
              <li class="brandName">
                <div class="item-content tab1-div indexItemContentTwo">
                  <div class="liststyle-div2">
                    <div class="item-title label indexItemTitle">品牌/型号 :&nbsp;</div>
                    <div class="item-input indexItemInput">
                      <p class="brandname liststyle">{{ productdata.productName }}</p>
                    </div>
                  </div>
                </div>
              </li>

              <li class="productdate">
                <div class="item-content indexItemContentTwo">
                  <div class="liststyle-div2">
                    <div class="item-title label indexItemTitle">检验日期 :&nbsp;</div>
                    <div class="item-input indexItemInput">
                      <p class="productDate liststyle">{{ productdata.inspectionDate.replace(/\-/g, '.') }}</p>
                    </div>
                  </div>
                </div>
              </li>
              <!-- Date -->
              <li v-if="productdata&&productdata.serialNo " class="infor" >
                <div class="item-content indexItemContentTwo">
                  <div class="liststyle-div2">
                    <div class="item-title label indexItemTitle">序列号 :&nbsp;</div>
                    <div class="item-input indexItemInput">
                      <p class="Infor liststyle">{{ productdata.serialNo }}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="productart">
                <div class="item-content indexItemContentFour">
                  <div class="liststyle-div2">
                    <div class="item-title label indexItemTitle">外观状态描述 :&nbsp;</div>
                    <div class="item-input indexItemInput">
                      <p class="productArt liststyle">{{ productdata.remarkTitle }}</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="new-spec">
                <div class="item-content indexItemContentTwo">
                  <div class="liststyle-div2">
                    <div class="item-title label indexItemTitle">鉴定结论 :&nbsp;</div>
                    <div class="item-input indexItemInput">
                      <p class="spec-val liststyle">{{ productdata.inspectionResult }}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="songjian">送检样品部分实物图</div>

          <!-- Slider -->

          <div class="indexBanner">
            <van-swipe indicator-color="#ff6600" :width="370" v-if="productdata" height="10" class="my-swipe" :autoplay="2000">
              <van-swipe-item
                class="van-swipe-item"
                v-for="(image, index) in productdata.bannerImg.split(',')"
                :key="index"
              >
                <img v-lazy="baseUrl + image" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="songjian"></div>

          <div class="c-clear-left">
            <div class="tabs">
              <div id="tab1" class="tab active" v-if="tabIndex == 0">
                <div class="richTextContent" id="richtext" style="display: block">
                  <span v-html="productdata.productRemark"></span>
                </div>
              </div>
            </div>
          </div>

          <img class="bottom-biao" src="@assets/img/d_Logo.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductQuery, getBaseUrl } from '@api/user'
export default {
  data() {
    return {
      list: [],
      tabIndex: 0,
      productdata: null,
      headerfixed: false,
      sn: '',
      isShow: false,
      images: []
    }
  },

  computed: {
    baseUrl() {
      return localStorage.getItem('baseUrl')
    }
  },
  created() {
    // if (this.$route.query && this.$route.query.sn) {
    this.sn = this.$route.query.sn
    this._getBaseUrl()
    this._getProductQuery()
    // } else {
    //   this.$router.push('/wxm')
    // }
  },
  mounted() {},

  methods: {
    _getBaseUrl() {
      if (location.hostname === 'localhost') {
        getBaseUrl().then(res => {
          if (res.code == 0) {
            localStorage.setItem('baseUrl', res.data)
          }
        })
      } else {
        localStorage.setItem('baseUrl', `https://${location.hostname}/img`)
      }
    },
    _getProductQuery() {
      let param = {
        productNo: this.sn
      }
      getProductQuery(param).then(res => {
        if (res.code == 0 && res.data) {
          this.productdata = res.data
          document.title = this.productdata.productName + '鉴定信息'
        } else {
          this.$router.push({
            path: '/wxm',
            query: {
              sn: this.sn
            }
          })
        }
      })
    },
    onShow() {
      this.isShow = !this.isShow
    },
    feedback() {
      this.$router.push({ path: '/complaints', query: { sn: this.productdata.productNo } })
    },
    search() {
      this.$router.push({
        path: '/enterprise',
        query: {
          sn: this.productdata.productNo,
          productName: this.productdata.productName,
          produceEnterprise: this.productdata.produceEnterprise,
          needTips: this.productdata.needTips,
          needQrCode: this.productdata.needQrCode
        }
      })
    },
    scrollEvent(e) {
      console.log(e.srcElement.scrollTop)
      if (e.srcElement.scrollTop > 375) {
        this.headerfixed = true
      } else {
        this.headerfixed = false
      }
      if (e.srcElement.scrollTop + e.srcElement.clientHeight == e.srcElement.scrollHeight) {
        console.log('嘿嘿我在底部触发了')
      }
    },

    //微信函数
    imagePreview(curSrc, srcList) {
      //这个检测是否参数为空
      if (!curSrc || !srcList || srcList.length == 0) {
        return
      }
      //这个使用了微信浏览器提供的JsAPI 调用微信图片浏览器
      WeixinJSBridge.invoke('imagePreview', {
        current: curSrc,
        urls: srcList
      })
    },
    switchTab(item) {
      this.tabIndex = item
    }
  }
}
</script>
<style lang="scss" scoped>
.my-swipe {
  height: 5.25rem;
  width: 100%;
}
/deep/.van-swipe__indicator {
  width: 0.2667rem;
  height: 0.2667rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;

  img {
    text-align: center;
    height: 5.95rem;
    width: 5.95rem;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 5.25rem;
  text-align: center;
  background-color: transparent;
}
.tit {
  height: 1.7333rem;
  background-image: url(~@assets/img/top0.jpg);
  background-repeat: round;
  background-size: cover;
}
.baccol {
  background-color: #e0e3e6;
}
.baccol-div {
  height: auto;
  margin: auto;
  font-family: 'microsoft yahei';
  padding: 0 0.48rem;
}
.baccol-span {
  height: auto;
  padding: 0.2rem 0 0.025rem;
}
.baccol-span1 {
  padding: 0 0 0.2rem;
}
.n-product-name {
  border: 1px solid #ea6200;
  border-radius: 0.11rem;
  text-align: center;
  display: inline-block;
  height: 0.53rem;
  line-height: 0.53rem;
  width: 1.6rem;
  color: #ea6200;
  font-size: 0.35rem;
}
.n-enterprise-name {
  border-radius: 0.11rem;
  text-align: center;
  display: inline-block;
  height: 0.53rem;
  line-height: 0.53rem;
  width: 1.6rem;
  font-size: 0.35rem;
  border: 1px solid #484848;
  color: #484848;
}
.n-name-content {
  font-size: 0.4rem;
  line-height: 0.64rem;
  color: #43439b;
  font-weight: 600;
  padding-left: 0.064rem;
  word-wrap: break-word;
}
.companyNameImg {
  font-size: 0.35rem;
  margin-left: 4px;
}
.liststyle-div2 {
  display: table;
  padding: 0px;
  margin-left: 0px;
  color: #43439b;
  font-weight: 500 !important;
  line-height: 0.6rem;
  font-size: 0.38rem !important;
}
.indexItemContentThree {
  padding: 0 0.5067rem !important;
  min-height: unset !important;
  margin: 0.16rem 0 !important;
}
.songjian {
  margin: 10px 0 10px 15px;
  color: #43439b !important;
  line-height: 0.8rem;
  font-size: 0.38rem !important;
}
.indexItemTitle {
  width: 17% !important;
  display: table-cell !important;
  vertical-align: unset !important;
  color: #43439b !important;
  line-height: 0.6rem;
  font-size: 0.38rem !important;
}
.indexItemInput {
  font-size: 0.32rem !important;
}
.list-block .item-content {
  box-sizing: border-box;
  padding-left: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-block .item-title.label {
  width: 35%;
  flex-shrink: 0;
  margin: 0.0569rem 0;
}
.buttons-tab .button {
  color: black;
  font-size: 0.37rem;
  height: 1.28rem;
  line-height: 1.28rem;
  border: 0;
  border-bottom: 5px solid transparent;
  border-radius: 0;
  width: 33.33%;
  float: left;
}
.buttons-tab .button.active {
  color: #0475d7;
  border-color: #0475d7;
  z-index: 100;
}

.list-block {
  margin: 0.933rem 0;
  font-size: 0.4533rem;
}
.liststyle {
  margin: 0px;
  // margin-bottom: 4px;
}

.richTextContent {
  width: 100%;
  font-size: 0.32rem;
  padding: 0 0.2rem;
  p {
    margin-top: 5px;
    margin-right: 0;
    margin-bottom: 5px;
    margin-left: 0;
    text-indent: 0;
    line-height: 24px;
    font-weight: bold;
  }
}
.endpage {
  margin: 0px;
  height: 100%;
}
.indexAOne {
  top: 0 !important;
  border-color: #a8aba4 !important;
  border-radius: 0px !important;
}
.endpage-a {
  border-radius: 0;
  height: 100%;
  line-height: 1.1333rem;
}
.indexATwo {
  top: 0 !important;
  border-color: #eb6100 !important;
  background-color: #eb6100 !important;
  border-radius: 0px !important;
}
.endpage-span {
  color: #323232;
  font-size: 0.4rem;
}
.endpage-span-search {
  font-size: 0.4rem;
  color: white;
}
.bottom-biao {
  height: 50px;
  float: right;
  margin-left: auto;
  margin-right: 20px;
}
.content-box {
  display: flex;
  padding-bottom: 40px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  .left {
    width: 180px;
    background-image: url(~@assets/img/WechatIMG52.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .right {
    position: relative;
  }
}
.contentDivOne {
  background-color: white !important;
  background-image: url(~@assets/img/c_bg.jpg);
  background-size: 300px 300px;
  background-position: 30% 45%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: left;
  // top: 65px !important;

  .header-img {
    display: flex;
    padding: 20px 0 10px 0;
    justify-content: center;
    align-items: center;
    .left {
      margin-right: 10px;
       height: 60px;
      width: 60px;
    }
    .right {
         width: 70%;
    }
  }
  .c-clear-left {
    margin-top: 30px;
  }
  。 .indexBanner {
    display: flex;
    width: 100%;
    align-items: center;
    justify-items: center;
    margin: 0.4rem 0.0rem 0.2rem 0.0rem;
    padding-top: 0.4rem;
    padding-left: 0rem;
  }
}
.tab2-div2 img {
  max-width: 100%;
}
.tab2-img {
  display: block;
  margin: auto;
  max-height: 90px;
}
.tab2-div3 {
  height: 1.067rem;
  background-color: #005bac;
}
.tab2-span3 {
  color: white;
  line-height: 1.067rem;
  padding-left: 20px;
  font-size: 0.37rem;
}
.tab2-span {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.4267rem;
  font-weight: bold;
  margin-top: 6px;
  margin-bottom: 20px;
}
.tab2-div {
  height: 0.6667rem;
  background-color: #fff;
}

.tab2-span2 {
  display: block;
  font-size: 0.4rem;
  color: #666;
  padding: 0px 19px;
  ::v-deep {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.showWrap-content {
  ::v-deep {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
.tab2-div4 {
  height: 3.4667rem;
  background: #fff;
  ::v-deep {
    img {
      height: 100%;
      width: 100%;
    }
  }
}

.tab3-ul {
  background-color: white;
  height: auto;
  margin-top: 0px;
  margin-bottom: 15px;
  border-left: 1px solid #bfbfbf;
  padding-left: 14px;
  margin-left: 25px;
  list-style-type: none;
}
.ishowIcons {
  display: block;
  float: right;
  padding-top: 6%;
  padding-bottom: 9%;
  transform: rotate(180deg);
}
.showIcons {
  padding: 14px;
  padding-left: 8px;
  span {
    font-weight: bold;
    color: #000;
    font-size: 0.3733rem;
  }
}
</style>

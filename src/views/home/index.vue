<!-- home -->
<template>
  <div class="page-group" v-if="productdata">
    <!-- 你的html代码 -->
    <div class="page page-current" id="xindex">
      <header class="bar bar-nav tit" id="shopImg"></header>
      <!-- 页尾 -->
      <nav class="bar bar-tab">
        <p class="buttons-row endpage">
          <a class="button endpage-a external indexAOne" id="complaints" @click="feedback"
            ><span class="endpage-span">消费反馈</span></a
          >
          <a class="button endpage-a external indexATwo" id="infosearch" @click="search"
            ><span class="endpage-span-search">防伪查询</span></a
          >
        </p>
      </nav>
      <div class="content contentDivOne native-scroll" @scroll="scrollEvent">
        <!-- 图片幻灯片 -->
        <!-- Slider -->
        <div class="indexBanner">
          <van-swipe indicator-color="#ff6600" v-if="productdata" height="10" class="my-swipe" :autoplay="3000">
            <van-swipe-item
              class="van-swipe-item"
              v-for="(image, index) in productdata.bannerImg.split(',')"
              :key="index"
            >
              <img v-lazy="baseUrl + image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 滚动图片信息 -->
        <div class="baccol">
          <div class="baccol-div">
            <div class="baccol-cdiv">
              <div class="baccol-span">
                <span class="n-product-name">产品名称</span>
                <span v-if="productdata" class="n-name-content productname"> {{ productdata.productName }}</span>
              </div>
            </div>
            <div>
              <div class="baccol-span1">
                <span class="n-enterprise-name">企业名称</span>
                <span class="n-name-content companyNameImg">{{ productdata.inspectionEnterprise }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 标签页 -->
        <div class="buttons-tab fixed-tab" :class="headerfixed ? 'buttons-fixed' : ''" data-offset="65">
          <a @click="switchTab(0)" class="tab-link button tabstyle" :class="tabIndex == 0 ? 'active' : ''">产品信息</a>
          <a
            @click="switchTab(1)"
            class="tab-link button tabstyle"
            :class="tabIndex == 1 ? 'active' : ''"
            id="companyid"
            >企业信息</a
          >
          <a @click="switchTab(2)" class="tab-link button tabstyle" :class="tabIndex == 2 ? 'active' : ''" id="origin"
            >追溯信息</a
          >
        </div>

        <div class="c-clear-left">
          <div class="tabs">
            <div id="tab1" class="tab active" v-if="tabIndex == 0">
              <!-- 表单列表 -->
              <div class="list-block liststyle">
                <ul class="productdata">
                  <li class="brandName" style="display: none">
                    <div class="item-content tab1-div indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">产品品牌 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="brandname liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="country-of-origin">
                    <div class="item-content indexItemContentThree">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">原产地 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="CountryOfOrigin liststyle">{{ productdata.sourceArea }}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="productdate" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">生产日期 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productDate liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="period" style="display: none">
                    <div class="item-content indexItemContentThree">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">保质期 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="Period liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Date -->
                  <li class="productcompany">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">生产企业 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productCompany liststyle">{{ productdata.produceEnterprise }}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="productinsert" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">储存环境 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productInsert liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="productpeili" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">配料信息 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productPeili liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="productsta" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">执行标准 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productSta liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="infor" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">标准内容 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="Infor liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="productart" style="display: none">
                    <div class="item-content indexItemContentFour">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">生产工艺 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="productArt liststyle" style="display: none"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="new-spec" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">规格型号 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="spec-val liststyle"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="new-unit" style="display: none">
                    <div class="item-content indexItemContentTwo">
                      <div class="liststyle-div2">
                        <div class="item-title label indexItemTitle">单位 :&nbsp;</div>
                        <div class="item-input indexItemInput">
                          <p class="unit-val liststyle"></p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="richTextContent" id="richtext" style="display: block">
                <p>委托单位：{{ productdata.trustCompany }}</p>
                <p v-if="productdata.serialNo">序列号：{{ productdata.serialNo }}</p>
                <p>检验日期：{{ productdata.inspectionDate.replace(/\-/g, '.') }}</p>
                <p>检验结论：{{ productdata.inspectionResult }}</p>
                <span v-html="productdata.productRemark"></span>
              </div>
            </div>
            <div id="tab2" v-if="tabIndex == 1" class="tab active">
              <div class="tab2-div"></div>
              <div class="tab2-div2">
                <img
                  class="tab2-img"
                  id="logo"
                  src="https://trace.cciccloud.com/trace-backend/images/2021-11-17/910612857824215040.jpg"
                  onclick="showImg(this)"
                />
                <span class="companyname tab2-span">{{ productdata.inspectionEnterprise }}</span>
                <span v-html="productdata.enterpriseInfo" class="businessElectronicFile tab2-span2"> </span>
                <div class="bot"></div>
              </div>
              <div class="tab2-div3">
                <span class="tab2-span3"> 资质信息</span>
              </div>
              <div
                class="tab2-div4"
                id="imgcontend"
                v-html="productdata.qualificationInfo"
                style="text-align: center"
              ></div>
            </div>
            <!-- 流程列表 -->
            <div id="tab3" v-if="tabIndex == 2" class="tab autoheigth active">
              <ul class="tab3-ul" id="ullist">
                <li style="width: 95%">
                  <img
                    v-if="isShow"
                    src="@assets/img/dot2.jpg"
                    style="position: absolute; left: 15px; margin-top: 14px; width: 21px; height: 21px"
                    width="28px"
                    height="28px"
                  />
                  <img
                    v-else
                    src="@assets/img/dot1.jpg"
                    style="position: absolute; left: 15px; margin-top: 14px; width: 21px; height: 21px"
                    width="28px"
                    height="28px"
                  />
                  <div
                    class="showIcons"
                    style="padding: 14px; padding-left: 8px"
                    butnum="0004351623_11284"
                    compk="b7269300aad64660b6faae8aa2850f51"
                    @click="onShow"
                  >
                    <span>委托方简介</span>
                    <div style="float: right">
                      <span
                        class="Icons"
                        style="color: #666; font-weight: bold; padding-right: 8px; font-size: 0.3733rem"
                        >收起</span
                      ><img
                        class="showIcon"
                        :class="isShow ? 'ishowIcons' : ''"
                        src="@assets/img/data3.jpg"
                        pk="ca772ae2058349e2be9537535b530aec"
                      />
                    </div>
                  </div>
                  <div style="border-bottom: 1px solid #bfbfbf; height: 1px; position: absolute; width: 85%"></div>
                  <div
                    style="display: black; margin: 0.1rem; border-radius: 10px; margin-top: 10px"
                    class="showWrap"
                    v-if="isShow"
                  >
                    <div
                      style="
                        height: 32px;
                        border-radius: 10px 10px 0px 0px;
                        background-color: #005bac;
                        border: 1px solid #005bac;
                      "
                    >
                      <img
                        src="@assets/img/1.jpg"
                        style="height: 100%; padding: 5px; padding-left: 13px; float: left"
                      /><span
                        style="
                          display: block;
                          float: left;
                          color: white;
                          font-weight: bold;
                          line-height: 32px;
                          padding-left: 12px;
                          font-size: 0.32rem;
                        "
                        >{{ productdata.inspectionDate }} 记录</span
                      >
                    </div>
                    <div
                      style="
                        border-radius: 0px 0px 10px 10px;
                        border-bottom: 1px solid #bfbfbf;
                        border-left: 1px solid #bfbfbf;
                        border-right: 1px solid #bfbfbf;
                        padding-top: 5px;
                        padding-left: 10px;
                        padding-right: 10px;
                      "
                    >
                      <div class="showWrap-content" v-html="productdata.trustInfo"></div>
                      <div style="margin-bottom: 10px"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
    if (this.$route.query && this.$route.query.sn) {
      this.sn = this.$route.query.sn
      this._getBaseUrl()
      this._getProductQuery()
    } else {
      this.$router.push('/wxm')
    }
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
          document.title = this.productdata.productName + '追溯信息'
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
        path: '/authen',
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
  height: 5.95rem;
}
/deep/.van-swipe__indicator {
  width: 0.2667rem;
  height: 0.2667rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    height: 5.95rem;
  }
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
  color: #000;
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
  min-height: unset;
}
.indexItemContentThree {
  padding: 0 0.5067rem !important;
  min-height: unset !important;
  margin: 0.16rem 0 !important;
}
.indexItemTitle {
  width: 17% !important;
  display: table-cell !important;
  vertical-align: unset !important;
  color: #000 !important;
  font-weight: 600 !important;
  font-size: 0.32rem !important;
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
  margin-bottom: 4px;
}

.richTextContent {
  width: 100%;
  font-size: 0.32rem;
  padding: 0 0.5rem;
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
.contentDivOne {
  background-color: white !important;
  top: 65px !important;
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

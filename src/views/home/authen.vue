<template>
  <div class="page page-current" id="page-1638439708413">
    <div class="content search-div" style="top: 1.5rem; top: 0.8rem; position: relative; z-index: 10">
      <img class="authen-comp-logo" src="@assets/img/logo.jpg" />
      <div class="authen-content-frame">
        <div class="auth-search-item">
          <input class="auth-search-txt" v-model="code" type="text" /><input
            class="auth-search-btn"
            @click="authSearch"
            type="button"
            value="查询"
          />
        </div>
        <div class="auth-tips-item">
          <p class="auth-tips">如何获取防伪编码：您可以在商品外包装上找到防伪贴纸，刮开涂层，获得4位防伪编码。</p>
        </div>
        <div class="auth-msg-item">
          <p class="auth-search-result" v-if="matchStatus != 0">查询结果</p>
          <div class="auth-result-frame">
            <img class="c-w100p auth-img-false" v-if="matchStatus == 3" src="@assets/img/infoBg-false.jpg" />
            <img class="c-w100p auth-img-ok" v-if="matchStatus == 1" src="@assets/img/infoBg-ture.jpg" />
            <img class="c-w100p auth-img-warn" v-if="matchStatus == 2" src="@assets/img/infoBg-warn.jpg" />
            <span v-if="matchStatus == 3" class="auth-result-fail">此次查询无效 请仔细核对4位防伪编码输入是否正确</span>
            <span class="auth-result-ok" v-if="matchStatus == 1">查询有效，验证成功</span>
            <div class="auth-result-warn" v-if="matchStatus == 2">
              防伪码首次查询时间 <span class="auth-query-time">{{ firstIdentifyTime }}</span
              >，查询次数 <span class="auth-query-count">{{ identifyCount }}</span
              >次，谨防假冒。
            </div>
          </div>
        </div>
        <div class="auth-info-item">
          <p class="auth-info-num" v-if="matchStatus != 0">
            溯源号码：<span class="auth-serinum">{{ $route.query.sn }}</span>
          </p>
          <p class="auth-product-name" v-if="matchStatus == 1 || matchStatus == 2">
            产品名称：<span class="auth-pro-name">{{ $route.query.productName }}</span>
          </p>
          <p class="auth-comp-name" v-if="matchStatus == 1 || matchStatus == 2">
            企业名称：<span class="auth-com-name">{{ $route.query.produceEnterprise }}</span>
          </p>
        </div>
        <!-- <div class="auth-contact-item">
							<div class="auth-qrcode-frame c-none">
								<img class="auth-qrcode-img" src="img/qrCode.jpg" />
								<span class="auth-qrcode-des">扫码获取更多帮助</span>
							</div>
							<p class="c-mrg-0">如需咨询，请拨打&nbsp;
								<a class="auth-contact-phone" href="tel:0512-67998073">0512 - 67998073</a>
							</p>
							<p class="c-mrg-0">（工作日时间 08:45 - 17:00）</p>
						</div> -->
      </div>
    </div>
    <div class="auth-contact-item">
      <p class="c-mrg-0">
        如需咨询，请拨打&nbsp;
        <a class="auth-contact-phone dh">01058619556(购买3日未激活)客服时间：工作日9:00~12:00/13:30-17:30</a>
      </p>
      <p class="c-mrg-0">（工作日时间 09:00 - 16:30）</p>
      <div class="auth-qrcode-frame" v-if="matchStatus != 0" style="margin-top: 10px">
        <img class="auth-qrcode-img" src="@assets/img/qrCode.jpg" />
        <span class="auth-qrcode-des">扫码获取更多帮助</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getIdentify } from '@api/user'

export default {
  data() {
    return {
      code: '',
      match: false,
      matchStatus: 0,
      identifyCount: '',
      firstIdentifyTime: '',
      productNo: this.$route.query.sn
    }
  },
  methods: {
    authSearch() {
      if (!this.code) {
        alert('请输入正确的验证码!')
        return
      }
      let param = {
        code: this.code,
        productNo: this.productNo
      }
      getIdentify(param).then(res => {
        if (res.code == 0) {
          if (res.data.match && res.data.identifyCount == 0) {
            this.match = res.data.match
            this.matchStatus = 1
          } else if (res.data.match && res.data.identifyCount != 0) {
            this.match = res.data.match
            this.identifyCount = res.data.identifyCount
            this.firstIdentifyTime = res.data.firstIdentifyTime
            this.matchStatus = 2
          } else {
            this.match = res.data.match
            this.matchStatus = 3
          }
        } else {
          this.match = false
          this.matchStatus = 0
        }
      })
    }
  }
}
</script>

<style></style>

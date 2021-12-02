<template>
  <div class="page page-current" id="xindex">
    <!-- 标题 -->
    <header class="bar bar-nav tit"></header>
    <div class="content contentDivOne1 native-scroll">
      <div class="center">
        <div class="retult-title">查询结果</div>
        <div class="ts"><span style="padding-right: 0.2rem">追溯码</span> <span id="traceCode" class="err">3456</span></div>
        <div class="zt" style="display: none">
          <span class="states"></span>，<span class="prompt">追溯码属于</span><span class="serviceProvider"></span>
        </div>
        <div class="not" style="display: block">没有找到该追溯码的相关信息</div>
        <div class="bottom">建议拨打<span class="dh">0512-67998073</span>让客服帮助你</div>
        <!-- <span class="ds-b">抱歉  sorry ！</span> -->
        <div class="auth-qrcode-frame" style="margin-top: 0.8rem">
          <img class="auth-qrcode-img" src="@assets/img/qrCode.jpg" />
          <span class="auth-qrcode-des">扫码获取更多帮助</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.contentDivOne1 {
  background-color: white !important;
  top: 65px !important;
}
.content {
  display: flex;
  flex-direction: column;
}
.err {
    color: #f00;
}
.tit {
  height: 65PX;
  margin: 8PX 8PX 0 8PX;
  background-repeat: round;
  background-image: url(~@assets/img/top1.jpg);
  background-size: cover;
}

.retult-title {
  color: #1557f1;
  border-bottom: 1px solid #1557f1;
  padding: 0.4rem 0 0.341rem;
  margin: 0 8PX;
  font-weight: 600;
  letter-spacing: 1.2;
  font-size: 0.4693rem;
  text-align: center;
}
.ts {
  padding: 0.5333rem 0.48rem 0.48rem;
}
.not {
  display: none;
  padding: 0 0.48rem 0.48rem 0.48rem;
}
.bottom {
  padding: 0 0.48rem 0.64rem 0.48rem;
}
.auth-qrcode-img {
  width: 2.133rem;
  display: block;
  margin: 0 auto;
}
.auth-qrcode-frame {
  text-align: center;
}
.auth-qrcode-des {
  font-size: 0.24rem;
  color: #333;
  display: block;
}
.dh {
  color: #0090ff;
}
</style>

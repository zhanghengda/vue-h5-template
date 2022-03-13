<template>
  <div class="page page-current" id="xindex">
    <!-- 标题 -->
     <div class="header-imgbox">
          <img
                  class="tab2-img1"
                  id="logo"
                  src="@assets/img/t_logo.jpg"
                 
                /> 
                <img
                  class="tab2-img"
                  id="logo"
                  src="@assets/img/bar_logo.jpg"
                 
                />
               
               </div>
    <div class="content contentDivOne1 native-scroll">
      <div class="center">
        <div class="retult-title">查询结果</div>
        <div class="ts">
          <span style="padding-right: 0.2rem">追溯码</span>
          <span id="traceCode" class="err">{{ $route.query.sn || '--' }}</span>
        </div>
        <div class="zt" style="display: none">
          <span class="states"></span>，<span class="prompt">追溯码属于</span><span class="serviceProvider"></span>
        </div>
        <div class="not" style="display: block">没有找到该追溯码的相关信息</div>
        <!-- <div class="bottom">建议拨打<span class="dh">0512-67998073</span>让客服帮助你</div> -->
        <!-- <span class="ds-b">抱歉  sorry ！</span> -->
        <!-- <div class="auth-qrcode-frame" style="margin-top: 0.8rem">
          <img class="auth-qrcode-img" src="@assets/img/qrCode.jpg" />
          <span class="auth-qrcode-des">扫码获取更多帮助</span>
        </div> -->
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
  top: 85px !important;
}
.content {
  display: flex;
  flex-direction: column;
}
.err {
  color: #f00;
}
 .header-imgbox
  {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .tab2-img1
    {
      height: 50px;
      width: 50px;
      margin: 0 5px 0 15px;
    }
  }
  .tab2-div2 img {
  max-width: 100%;
}
.tab2-img {
  display: block;
  margin: 0 auto 0 15px;
  max-height: 40px;

}
.tit {
  height: 65px;
  margin: 8px 8px 0 8px;
  background-image: url(~@assets/img/top1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.retult-title {
  color: #1557f1;
  border-bottom: 1px solid #1557f1;
  padding: 0.4rem 0 0.341rem;
  margin: 0 8px;
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

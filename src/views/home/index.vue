<!-- home -->
<template>
 <div class="page-group">
        <!-- 你的html代码 -->
        <div class="page page-current" id="xindex">
            <!-- 标题 -->
            <header class="bar bar-nav tit" id="shopImg" style="background-image: url(&quot;https://trace.cciccloud.com/trace-backend/images/2021-11-17/910612857824215040.jpg&quot;);">

            </header>
            <!-- 页尾 -->
            <nav class="bar bar-tab">
                <p class="buttons-row endpage">
                    <a href="complaints.html?serial_num=1102347000035519268168064&amp;product_pk=845310746102333440" class="button endpage-a external indexAOne" id="complaints"><span class="endpage-span">消费反馈</span></a>
                    <a class="button endpage-a external indexATwo" id="infosearch" href="authen.html?serial_num=1102347000035519268168064"><span class="endpage-span-search ">防伪查询</span></a>
                </p>
            </nav>

            <div class="content contentDivOne native-scroll">
                <!-- 图片幻灯片 -->
                <!-- Slider -->
                <div class="indexBanner">
                    <div id="slide" style="overflow: hidden;">
                    <div class="slidesjs-container" style="overflow: hidden; position: relative; width: 414px; height: 246.1px;"><div class="slidesjs-control" style="position: relative; left: 0px; width: 414px; height: 246.1px;"><div class="page slidesjs-slide" slidesjs-index="0" style="position: absolute; top: 0px; left: -414px; width: 100%; z-index: 0; backface-visibility: hidden; text-align: center; display: block;"><a href=""><img src="https://trace.cciccloud.com/trace-backend/images/2021-05/845310746869891072.JPG" style="height:100%"></a></div><div class="page slidesjs-slide" slidesjs-index="1" style="position: absolute; top: 0px; left: 0px; width: 100%; z-index: 10; display: block; backface-visibility: hidden; text-align: center;"><a href=""><img src="https://trace.cciccloud.com/trace-backend/images/2021-05/845310751932416000.JPG" style="height:100%"></a></div><div class="page slidesjs-slide" slidesjs-index="2" style="position: absolute; top: 0px; left: 414px; width: 100%; z-index: 0; display: block; backface-visibility: hidden; text-align: center;"><a href=""><img src="https://trace.cciccloud.com/trace-backend/images/2021-05/845310752750305280.JPG" style="height:100%"></a></div></div></div><ul class="slidesjs-pagination" style="margin-left: -29.5px;"><li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="0" class="">1</a></li><li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="1" class="active">2</a></li><li class="slidesjs-pagination-item"><a href="#" data-slidesjs-item="2" class="">3</a></li></ul></div>
                </div>
                <!-- 滚动图片信息 -->
                <div class="baccol">
                    <div class="baccol-div">
                        <div class="baccol-cdiv">
                            <!-- <span class="productname baccol-span"></span> -->
                            <div class="baccol-span">
                                <span class="n-product-name">产品名称</span>
                                <span class="n-name-content productname"> GUCCI(古驰)鞋子</span>
                            </div>
                        </div>
                        <div>
                            <!-- <span class="companyNameImg baccol-span1"></span> -->
                            <div class="baccol-span1">
                                <span class="n-enterprise-name">企业名称</span>
                                <span class="n-name-content companyNameImg">中国检验认证集团奢侈品鉴定中心</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 标签页 -->
                <div class="buttons-tab fixed-tab" data-offset="65">
                    <a href="#tab1" class="tab-link active button tabstyle">产品信息</a>
                    <a href="#tab2" class="tab-link button tabstyle" id="companyid">企业信息</a>
                    <a href="#tab3" class="tab-link button tabstyle" id="origin">追溯信息</a>
                </div>

                <div class="c-clear-left">
                    <div class="tabs">
                        <div id="tab1" class="tab active">
                            <!-- 表单列表 -->
                            <div class="list-block liststyle">
                                <ul class="productdata">
                                    <!-- Text inputs -->
                                    <!--                       <li  class="producttype" >
                          <div class="item-content indexItemContent">
                              <div class="liststyle-div2">
                                  <div class="item-title label indexItemTitle">产品类别 :&nbsp;</div>
                                  <div class="item-input indexItemInput">
                                      <p class="productType liststyle"></p>
                                  </div>
                              </div>
                          </div>
                      </li>
 -->
                                    <li class="brandName" style="display: none;">
                                        <div class="item-content tab1-div indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">产品品牌 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="brandname liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="country-of-origin">
                                        <div class="item-content indexItemContentThree">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">原产地 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="CountryOfOrigin liststyle">意大利</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="productdate" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">生产日期 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="productDate liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="period" style="display: none;">
                                        <div class="item-content indexItemContentThree">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">保质期 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="Period liststyle" style="display: none;"></p>
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
                                                    <p class="productCompany liststyle">中国检验认证集团奢侈品鉴定中心</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- Switch (Checkbox) -->
                                    <li class="productinsert" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">储存环境 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="productInsert liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="productpeili" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">配料信息 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="productPeili liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="productsta" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">执行标准 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="productSta liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="infor" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">标准内容 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="Infor liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="productart" style="display: none;">
                                        <div class="item-content indexItemContentFour">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">生产工艺 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="productArt liststyle" style="display: none;"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="new-spec" style="display: none;">
                                        <div class="item-content indexItemContentTwo">
                                            <div class="liststyle-div2">
                                                <div class="item-title label indexItemTitle">规格型号 :&nbsp;</div>
                                                <div class="item-input indexItemInput">
                                                    <p class="spec-val liststyle"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="new-unit" style="display: none;">
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
                            <div class="richTextContent" id="richtext" style="display: block;"><p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-indent:0;line-height:24px"><strong><span style="letter-spacing: 0px; font-size: 14px; font-family: sans-serif;">委托单位：</span></strong><span style="font-family: arial, helvetica, sans-serif;"><strong><span style="letter-spacing: 0px; font-size: 14px;">琦谜奢宝</span></strong></span></p><p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-indent:0;line-height:24px"><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">检验日期：</span>2021.05.21</span></strong></p><p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-indent:0;line-height:24px"><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">检验结论：送检样品符合品牌</span></span></strong><strong><span style="font-family: Calibri;letter-spacing: 0;font-size: 14px">/</span></strong><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">制造商公示的技术信息和工艺特征。</span></span></strong></p><p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-indent:0;line-height:24px"><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">备注：</span></span></strong><strong><span style="font-family: Calibri;letter-spacing: 0;font-size: 14px">1</span></strong><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">、检验结果仅对送检样品负责，若标签损毁、标签涂改，显示内容无效。</span></span></strong></p><p style="margin-top:5px;margin-right:0;margin-bottom:5px;margin-left:0;text-indent:0;line-height:24px"><strong><span style="font-family: Calibri;letter-spacing: 0;font-size: 14px">2</span></strong><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">、若对显示的内容和结论持有异议，需在检验日期后</span></span></strong><strong><span style="font-family: Calibri;letter-spacing: 0;font-size: 14px">15</span></strong><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">日内提出，逾期不予受理。</span></span></strong></p><p style="margin: 5px 0px; text-indent: 0px; line-height: 24px;"><strong><span style="font-family: Calibri;letter-spacing: 0;font-size: 14px">3</span></strong><strong><span style="letter-spacing: 0;font-size: 14px"><span style="font-family:sans-serif">、客户信息及样品均由委托单位提供，检验结果不涉及样品品质检测等信息。</span></span></strong></p></div>
                        </div>
                        <div id="tab2" class="tab">
                            <div class="tab2-div"></div>
                            <div class="tab2-div2">
                                <img class="tab2-img" id="logo" src="" onclick="showImg(this)">
                                <span class="companyname tab2-span"></span>
                                <div class="hb-box">
                                    <div class="hz-info dz-box">
                                        <span class="hz-left">地址 : </span>
                                        <span class="dz"></span>
                                    </div>
                                    <div class="hz-info dh-box">
                                        <span class="hz-left">电话 : </span>
                                        <span class="dh">江苏省</span>
                                    </div>
                                    <div class="hz-info js-box">
                                        <span class="hz-left">介绍 : </span>
                                        <span class="js">江苏省</span>
                                    </div>
                                    <div class="hz-info xc-box">
                                        <span class="hz-left">宣传图片 : </span>
                                        <div class="hz-img xctp"></div>
                                    </div>
                                </div>
                                <span class="businessElectronicFile tab2-span2">
                    </span>
                                <div class="bot"></div>
                            </div>
                            <div class="tab2-div3">
                                <span class="tab2-span3"> 资质信息</span>
                            </div>
                            <div class="tab2-div4" id="imgcontend" style="text-align: center;">
                            </div>
                        </div>
                        <!-- 流程列表 -->
                        <div id="tab3" class="tab autoheigth">
                            <ul class="tab3-ul" id="ullist">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

       
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>
<style lang="scss" scoped>

</style>

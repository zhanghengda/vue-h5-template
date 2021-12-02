<template>
  <div class="page">
    <div class="page-group">
      <div class="page page-current complaintPageCurrent" id="page-1638355118935">
        <!-- 标题栏 -->
        <header class="bar bar-nav complaintHeader">
          <button class="button button-link button-nav pull-left complaintHeaderIn">
            <div>
              <a href="#" onclick="javascript :history.back(-1);"
                ><span class="icon icon-left complaints-a complaintA"></span>
                <span class="complaints-span">返回</span></a
              >
            </div>
          </button>
          <h1 class="title complaints-h1">消费反馈</h1>
        </header>
        <!-- 内容区 -->
        <div class="content complaintContent">
          <div class="list-block complaintListBlock">
            <ul>
              <!-- Text inputs -->
              <li>
                <div class="item-content complaintItemContent">
                  <!-- <div class="item-media"><i class="icon icon-form-name"></i></div> -->
                  <div class="item-inner">
                    <div class="item-input">
                      <input
                        type="text"
                        datatype="s5-16"
                        errormsg="昵称至少5个字符,最多16个字符！"
                        class="complaintItemInput"
                        placeholder="反馈人姓名"
                        id="co-name"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-content complaintItemContent">
                  <!-- <div class="item-media"><i class="icon icon-form-email"></i></div> -->
                  <div class="item-inner">
                    <div class="item-input">
                      <input type="text" placeholder="联系电话" class="complaintItemInput" id="co-phonenum" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-content complaintItemContent">
                  <!-- <div class="item-media"><i class="icon icon-form-email"></i></div> -->
                  <div class="item-inner">
                    <div class="item-input">
                      <input type="email" placeholder="邮箱" class="complaintItemInput" id="co-email" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="align-top">
                <div class="item-content complaintItemContent complaint-height-auto">
                  <!-- <div class="item-media"><i class="icon icon-form-comment"></i></div> -->
                  <div class="item-inner">
                    <div class="item-input">
                      <textarea placeholder="反馈内容" class="complaintItemInput" id="co-content"></textarea>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="complaintItemInfor">
            <span id="complaintssuccess"></span>
          </div>
          <span class="complaints-span2" id="complaintsbutton" type="button">提交</span>
        </div>

        <div id="complaintshow" class="complaintShowDiv">
          <div class="complaintShowDivTwo">
            <div class="complaintShowDivThree"><span>反馈成功</span></div>
            <div class="complaintShowDivFour">
              <div id="showcomplaints" class="complaintShowDivFive"><span>OK</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style></style>

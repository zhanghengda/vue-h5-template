<template>
  <div class="page">
    <div class="page-group">
      <div class="page page-current complaintPageCurrent" id="page-1638355118935">
        <!-- 标题栏 -->
        <header class="bar bar-nav complaintHeader">
          <button class="button button-link button-nav pull-left complaintHeaderIn">
            <div>
              <a href="#" @click="gohome"
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
                        v-model="name"
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
                      <input
                        type="text"
                        v-model="phone"
                        placeholder="联系电话"
                        class="complaintItemInput"
                        id="co-phonenum"
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
                      <input type="email" v-model="email" placeholder="邮箱" class="complaintItemInput" id="co-email" />
                    </div>
                  </div>
                </div>
              </li>
              <li class="align-top">
                <div class="item-content complaintItemContent complaint-height-auto">
                  <!-- <div class="item-media"><i class="icon icon-form-comment"></i></div> -->
                  <div class="item-inner">
                    <div class="item-input">
                      <textarea
                        v-model="content"
                        placeholder="反馈内容"
                        class="complaintItemInput"
                        id="co-content"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="complaintItemInfor">
            <span v-if="errorStatus" id="complaintssuccess">{{ msg }}</span>
          </div>
          <span class="complaints-span2" id="complaintsbutton" type="button" @click="subfeedback">提交</span>
        </div>

        <div id="complaintshow" v-if="feedbackok" class="complaintShowDiv">
          <div class="complaintShowDivTwo">
            <div class="complaintShowDivThree"><span>反馈成功</span></div>
            <div class="complaintShowDivFour">
              <div id="showcomplaints" @click="ok" class="complaintShowDivFive"><span>OK</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { feedback } from '@api/user'

export default {
  data() {
    return {
      /** 产品编号 */
      productNo: this.$route.query.sn,
      /** 反馈人姓名 */
      name: '',
      /** 联系电话 */
      phone: '',
      /** 邮箱 */
      email: '',
      /** 反馈内容 */
      content: '',
      images: [],
      feedbackok: false,
      msg: '',
      errorStatus: false
    }
  },
  created() {},
  methods: {
    ok() {
      this.name = ''
      /** 联系电话 */
      this.phone = ''
      /** 邮箱 */
      this.email = ''
      /** 反馈内容 */
      this.content = ''
      this.feedbackok = false
      this.$router.push({
        path: '/home',
        query: {
          sn: this.productNo
        }
      })
    },
    // 验证手机号
    isPhoneNo(phone) {
      var pattern = /^1[34578]\d{9}$/
      return pattern.test(phone)
    },
    gohome() {
      this.$router.go(-1)
    },
    // 验证邮箱
    isEmail(email) {
      var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
      return pattern.test(email)
    },
    subfeedback() {
      if (!this.name) {
        this.errorStatus = true
        this.msg = '反馈人姓名不可以为空'
        return
      }
      if (!this.content) {
        this.errorStatus = true
        this.msg = '反馈内容不可以为空'
        return
      }
      if (!this.phone && !this.email) {
        this.errorStatus = true
        this.msg = '电话与邮箱至少填一项'
        return
      }
      if (this.phone && !this.isPhoneNo(this.phone)) {
        this.errorStatus = true
        this.msg = '请输入正确的手机号码'
        return
      }
      if (this.email && !this.isEmail(this.email)) {
        this.errorStatus = true
        this.msg = '请输入正确的邮箱地址'
        return
      }

      let param = {
        name: this.name,
        phone: this.phone,
        productNo: this.productNo,
        email: this.email,
        content: this.content
      }
      feedback(param).then(res => {
        if (res.code == 0) {
          this.name = ''
          /** 联系电话 */
          this.phone = ''
          /** 邮箱 */
          this.email = ''
          /** 反馈内容 */
          this.content = ''
          this.feedbackok = true
        }
      })
    }
  }
}
</script>

<style></style>

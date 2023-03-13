<!-- home -->
<template>
  <div class="page-group page-detail page-play">
    <div class="page page-current">
      <div style="display: contents">
        <nav mode="pill" class="sc-15orno7-0 jJDKTa1">
          <div class="sc-jaa1t8-0 jJDKTa1" :style="'width:' + (zhankai ? '64px' : '34px')">
            <img
              src="@assets/img/back.png"
              v-if="zhankai"
              @click="openmenu"
              alt="home"
              decoding="async"
              class="nav-img back"
            />
            <img
              v-if="!zhankai"
              src="@assets/img/back.png"
              @click="openmenu"
              alt="home"
              decoding="async"
              class="nav-img back1"
            />
            <a class="sc-jaa1t8-1 bxeyFq" v-if="zhankai" href="/" title="Online Games on Fgame">
              <img src="@assets/img/home.png" alt="home" decoding="async" class="nav-img" />
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="palygame" v-if="!start" @click="start = true">
      <div class="play-box" v-if="productdata && productdata.href">
        <img :src="baseUrl + productdata.logoUrl" alt="home" decoding="async" class="play-icon" />
        <div class="meng"></div>
        <div class="top">
          <img src="@assets/img/startgame.png" alt="home" decoding="async" class="play-img" /> <span>Play Now</span>
        </div>
      </div>
    </div>
    <iframe
      id="iframe"
      v-if="start && productdata && productdata.href"
      :src="productdata.href"
      style="height: 100%"
      width="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { getProductQuery, getlikelist, getinfo, getBaseUrl } from '@api/user'
import { baseUrl } from '@/config'

export default {
  data() {
    return {
      list: [],
      tabIndex: 0,
      start: false,
      zhankai: true,
      loading: true,
      refreshing: false,
      finished: false,
      productdata: null,
      value: 5,
      headerfixed: false,
      sn: '',
      isShow: false,
      images: []
    }
  },

  computed: {
    baseUrl() {
      return baseUrl
    }
  },
  created() {
    if (!this.$route.query || !this.$route.query.id) {
      this.$router.push('/')
    }
    this._getinfo()
    this._getProductQuery()
  },
  mounted() {},
  methods: {
    _getBaseUrl() {
      getBaseUrl().then(res => {
        if (res.code == 0) {
          localStorage.setItem('baseUrl', res.data)
        }
      })
    },
    openmenu() {
      this.zhankai = !this.zhankai
    },
    toplay() {
      if (this.productdata) {
      }
    },
    onLoad() {
      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      }
      this._getProductQuery()
    },

    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },

    _getinfo() {
      let param = {
        id: this.$route.query.id
      }
      getinfo(param).then(res => {
        if (res.code == 0 && res.data) {
          this.productdata = res.data
          console.log('productdata', this.productdata)
        } else {
        }
      })
    },

    _getProductQuery() {
      let param = {
        id: this.$route.query.id
      }
      getlikelist(param).then(res => {
        if (res.code == 0 && res.data) {
          // this.list = res.data.records

          this.list = res.data
          if (this.list.length < res.data) {
            this.list = [...this.list, res.data]
          }
          setTimeout(() => {
            // 加载状态结束
            this.loading = false

            // 数据全部加载完成
            if (this.list.length >= res.data) {
              this.finished = true
            }
          }, 1000)

          console.log('productdata', this.productdata)
        } else {
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>

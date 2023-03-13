<!-- home -->
<template>
  <div class="page-group">
    <div class="page page-current">
      <div style="display: contents">
        <nav mode="pill" class="sc-15orno7-0 jJDKTa2">
          <div class="sc-11jy73d-3 jZlJdu">
            <a class="sc-woh2fi-0 jEYJia sc-11jy73d-0 kGUlke" href="/" title="Fgame" aria-label="Fgame">
              <img src="@assets/img/logo.png" alt="home" decoding="async" class="nav-img"
            /></a>
          </div>
          <div class="sc-jaa1t8-0 bubVge">
            <a class="sc-jaa1t8-1 bxeyFq" href="/" title="Online Games on Fgame">
              <img src="@assets/img/home.png" alt="home" decoding="async" class="nav-img" />
            </a>
            <a class="sc-jaa1t8-1 bxeyFq" @click="$router.push('/classify')" title="Online Games on Fgame">
              <img src="@/assets/img/nav.png" alt="home" decoding="async" class="nav-img" />
            </a>
          </div>
        </nav>
      </div>
      <div class="dpZqXq">
        <header class="sc-1x70ym-0 cOJizt sc-al88rd-5 fmliAM">
          <div class="sc-1ercfrx-2 dWoUha">
            <div class="sc-1ercfrx-3 iAEuVe">
              <h1 class="sc-1ercfrx-4 kiEtEc">{{ $route.query.name }}</h1>
            </div>
            <span class="sc-1ercfrx-6 qcNIQ">by Blumgi</span>
          </div>
        </header>
        <a
          @click="todetail(item)"
          v-for="(item, index) in list"
          :key="index"
          class="sc-wr3rvk-0 jcoQuw sc-963fcq-2 dgMzoz sc-al88rd-2 global-cq"
          :class="index == 0 ? 'ecpZbI' : index == 2 ? 'fcNZuN' : 'ldqLLW'"
        >
          <img
            :src="baseUrl + item.logoUrl"
            alt="Crazy Cars"
            loading="eager"
            decoding="async"
            class="sc-18mcksl-1 jQcWfv"
          />
          <span class="sc-963fcq-0 ibRKmB global-cq-title">
            {{ item.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getProductQuery, getBaseUrl } from '@api/user'
import { baseUrl } from '@/config'
export default {
  data() {
    return {
      list: [],
      tabIndex: 0,
      loading: true,
      refreshing: false,
      finished: false,
      productdata: null,
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
    this._getProductQuery()
  },
  mounted() {},

  methods: {
    todetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id
        }
      })
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

    _getProductQuery() {
      if (!this.$route.query || !this.$route.query.categoryId) {
        return
      }
      let param = {
        pageNum: 1,
        pageSize: 20,
        categoryId: this.$route.query.categoryId
      }
      getProductQuery(param).then(res => {
        if (res.code == 0 && res.data) {
          this.list = res.data.records
          if (this.list.length < res.data.total) {
            this.list = [...this.list, res.data.records]
          }
          setTimeout(() => {
            // 加载状态结束
            this.loading = false

            // 数据全部加载完成
            if (this.list.length >= res.data.total) {
              this.finished = true
            }
          }, 1000)

          console.log('productdata', this.productdata)
        } else {
        }
      })
    },
    onShow() {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="scss" scoped></style>

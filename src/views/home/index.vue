<!-- home -->
<template>
  <div ref="scrollDiv" @scroll="scroll" class="page-group">
    <div ref="content" class="page page-current">
      <div style="display: contents">
        <nav mode="pill" class="sc-15orno7-0 jJDKTa">
          <div class="sc-11jy73d-3 jZlJdu">
            <a class="sc-woh2fi-0 jEYJia sc-11jy73d-0 kGUlke" href="/" title="Fgame" aria-label="Fgame">
              <img src="@assets/img/logo.png" alt="home" decoding="async" class="nav-img" />
            </a>
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
      <div>
        <div class="jiSkSr">
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
            <div v-if="item.tags" :class="item.tags == 'hot' ? 'hot' : 'new'">{{ item.tags }}</div>
            <span class="sc-963fcq-0 ibRKmB global-cq-title">
              {{ item.name }}
            </span>
          </a>
        </div>

        <div class="bottom-nav">
          <img
            src="@/assets/img/Fgame@2x.png"
            alt="Crazy Cars"
            loading="eager"
            decoding="async"
            class="sc-18mcksl-1 jQcWfv"
          />
          <span class="name">Free Online Game</span>
        </div>
        <div class="sc-etrfs6-3 gExmnf">
          <a class="sc-etrfs6-2 leEuAa" @click="$router.push('/about')" rel="noopener nofollow" target="_blank"
            >About</a
          >
          <a class="sc-etrfs6-2 leEuAa" @click="$router.push('/service')" rel="noopener nofollow" target="_blank"
            >Terms of service
          </a>
          <a class="sc-etrfs6-2 leEuAa" @click="$router.push('/policy')" rel="noopener nofollow" target="_blank"
            >Privacy statement
          </a>
        </div>
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
      pageNum: 1,
      isShow: false,
      images: []
    }
  },

  computed: {
    baseUrl() {
      return location.hostname === 'localhost' ? baseUrl : ''
    }
  },

  watch: {
    $route(to, from) {
      if ((from.path == '/about' || from.path == '/service' || from.path == '/policy') && to.path == '/home') {
        let recruitScrollY = this.$refs.content.scrollHeight
        let scrollElem = this.$refs.scrollDiv
        scrollElem.scrollTo({ top: recruitScrollY, behavior: 'smooth' })
      }
    }
  },
  created() {
    this._getProductQuery()
  },
  mounted() {
    console.log('ssss')
  },
  methods: {
    scroll(e) {
      console.log('eee', e)
    },
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
      this.pageNum = 1
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    },

    _getProductQuery() {
      let _this = this
      let param = {
        pageNum: this.pageNum,
        pageSize: 200,
        categoryId: -1
      }
      getProductQuery(param).then(res => {
        if (res.code == 0 && res.data) {
          if (_this.list == 0) {
            this.list = res.data.records
          } else {
            _this.list = [..._this.list, ...res.data.records]
          }
          this.pageNum++
          setTimeout(() => {
            // 加载状态结束
            _this.loading = false

            // 数据全部加载完成
            if (res.data.records == 0) {
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

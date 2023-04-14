<!-- home -->
<template>
  <div ref="scrollDiv" class="page-group">
    <div ref="content" class="page page-current">
      <div style="display: contents">
        <nav mode="pill" class="sc-15orno7-0 jJDKTa" :style="{ top: getHeight + 'px' }">
          <div class="sc-11jy73d-3 jZlJdu">
            <a
              class="sc-woh2fi-0 jEYJia sc-11jy73d-0 kGUlke"
              @click="$router.push('/home')"
              title="Fgame"
              aria-label="Fgame"
            >
              <img src="@assets/img/logo.png" alt="home" decoding="async" class="nav-img" />
            </a>
          </div>
          <div class="sc-jaa1t8-0 bubVge">
            <a class="sc-jaa1t8-1 bxeyFq" href="/" title="Online Games on Fgame">
              <img src="@assets/img/home.png" alt="home" decoding="async" class="nav-img" />
            </a>
          </div>
        </nav>
      </div>
      <div>
        <div class="jiSkSr">
          <a
            @click="todetail(item)"
            v-for="(item, index) in games"
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
        <div class="game-content native-scroll">
          <div class="item" @click="tocategory(item)" v-for="(item, index) in catetorys">
            <img :src="baseUrl + item.imgUrl" loading="eager" decoding="async" class="logo" />
            <p>{{ item.category }}</p>
          </div>
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
import { mapGetters } from 'vuex'
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
      height: '30px',
      pageNum: 1,
      isShow: false,
      images: [],
      isflag: true
    }
  },

  computed: {
    baseUrl() {
      return location.hostname === 'localhost' ? baseUrl : ''
    },
    getHeight() {
      let ele = document.getElementById('aswift_3_host')
      if (ele) {
        this.height = 16 + 94
      }
      this.height = 16
      return this.height
    },
    ...mapGetters(['games', 'catetorys'])
  },
  beforeRouteLeave(to, from, next) {
    let position = window.scrollY //记录离开页面的位置
    let scrollElem = this.$refs.content
    console.log('position', scrollElem.scrollHeight)
    // if (position == null) position = 0
    this.$store.commit('changeRecruitScrollY', scrollElem.scrollHeight) //离开路由时把位置存起来
    next()
  },
  watch: {
    $route(to, from) {
      if ((from.path == '/about' || from.path == '/service' || from.path == '/policy') && to.path == '/home') {
        let recruitScrollY = this.$store.state.recruitScrollY
        console.log('recruitScrollY', recruitScrollY)

        let scrollElem = this.$refs.scrollDiv
        scrollElem.scrollTo({ top: recruitScrollY, behavior: 'smooth' })
      }
    }
  },
  created() {
    // this._getProductQuery()
    this.isflag = false
  },
  mounted() {
    console.log('ssss')
  },
  methods: {
    todetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id
        }
      })
    },
    tocategory(item) {
      this.$router.push({
        path: '/classifyList',
        query: {
          categoryId: item.id,
          name: item.category
        }
      })
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
          this.list = res.data.records
        } else {
        }
      })
    }
  }
}
</script>

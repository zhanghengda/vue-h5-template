<template>
  <div class="page page-current" id="xindex">
    <!-- 标题 -->
    <van-nav-bar class="nav-classify" title="Game Category" left-arrow @click-left="onClickLeft" />
    <div class="game-content native-scroll">
      <div class="item" @click="tocategory(item)" v-for="(item, index) in catetorys">
        <img :src="baseUrl + item.imgUrl" loading="eager" decoding="async" class="logo" />
        <p>{{ item.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getcatetorys, getlikelist, getinfo, getBaseUrl } from '@api/user'
import { mapGetters } from 'vuex'

import { baseUrl } from '@/config'

export default {
  data() {
    return {
      list: []
    }
  },
  computed: {
    baseUrl() {
      return location.hostname === 'localhost' ? baseUrl : ''
    },
    ...mapGetters(['catetorys'])
  },
  created() {
    // this._getcatetorys()
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
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
    _getcatetorys() {
      getcatetorys().then(res => {
        if (res.code == 0 && res.data) {
          this.list = res.data
        } else {
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-classify {
  background: #546aff;
  /deep/.van-icon {
    color: #333;
    font-size: 18px;
  }
  /deep/.van-nav-bar__title {
    color: #333;
  }
}
/deep/.van-hairline--bottom::after {
  border-bottom-width: 0rem;
}
.game-content {
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-direction: column;
  background: #546aff;
  .item {
    height: 60px;
    height: 60px;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;

    border-bottom: 1px solid #4084b5;

    display: flex;

    justify-content: flex-start;
    align-items: center;
    .logo {
      height: 40px;
      width: 40px;
      border-radius: 3px;
      margin-right: 20px;
    }
  }
}
</style>

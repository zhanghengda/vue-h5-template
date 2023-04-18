<template>
  <div class="page page-current" id="xindex">
    <!-- 标题 -->
    <van-nav-bar class="nav-classify" title="Game News" left-arrow @click-left="onClickLeft" />
    <div class="game-content native-scroll">
      <p class="title">{{ info.title }}</p>
      <p class="time">{{ info.updateTime }}</p>
      <p class="content" v-html="info.content"></p>
    </div>
  </div>
</template>

<script>
import { getBloginfo, getlikelist, getinfo, getBaseUrl } from '@api/user'
export default {
  data() {
    return {
      info: []
    }
  },
  created() {
    this._getBloginfo()
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    _getBloginfo() {
      let cdata = {
        id: this.$route.query.id
      }
      getBloginfo(cdata).then(res => {
        if (res.code == 0 && res.data) {
          this.info = res.data
        } else {
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.page-current {
  background: #a2ffca;
  height: 100%;

  p {
    color: #333;
  }

  .game-content {
    padding: 20px;
  }

  .time {
    margin-bottom: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
.nav-classify {
  background: #a2ffca;
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
  background: #a2ffca;
  .item {
    height: 48px;
    line-height: 48px;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
  }
}
</style>

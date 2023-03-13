<template>
  <div class="page page-current" id="xindex">
    <!-- 标题 -->
    <van-nav-bar title="Game Category" left-arrow @click-left="onClickLeft" />
    <div class="game-content native-scroll">
      <div class="item" @click="tocategory(item)" v-for="(item, index) in list">
        <p>{{ item.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getcatetorys, getlikelist, getinfo, getBaseUrl } from '@api/user'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this._getcatetorys()
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
.game-content {
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-direction: column;

  .item {
    height: 48px;
    line-height: 48px;
    margin-left: 20px;
    font-size: 24px;
    color: #212121;

    border-bottom: 1px solid #ffffff;
  }
}
</style>

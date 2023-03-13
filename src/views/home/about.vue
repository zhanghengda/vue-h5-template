<template>
  <div class="page page-current">
    <van-nav-bar title="About FGames" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <h2 class="title">About FGames</h2>
      <p>FGames is a free browser gaming platform founded in 2020 by a small group of friends.</p>
      <p>
        Our mission is simple - to create a browser-gaming platform that works seamlessly for users around the world,
        and rewards developers both big and small.
      </p>
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
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;

  .content {
    padding: 20px;

    background: #ffffff;
    height: calc(100% - 140px);
    overflow: auto;
    color: #333333;
    margin: 20px auto;
    border-radius: 8px;
    width: calc(100% - 74px);

    .title {
      font-size: 22px;
      text-align: center;
    }
    p {
      font-size: 14px;
      line-height: 26px;
    }
  }
}
</style>

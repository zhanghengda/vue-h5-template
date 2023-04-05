<template>
  <div class="layout-content">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<script>
export default {
  name: 'AppLayout',
  data() {
    return {}
  },
  components: {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.layout-content {
  height: 100%;
  background: #87dff5;
  background-repeat: round;
  background-size: cover;
}
</style>

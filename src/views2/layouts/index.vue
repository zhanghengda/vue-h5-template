<template>
  <div class="page-group">
    <div class="page page-current">
      <div class="layout-content">
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </div>
    </div>
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
<style lang="scss" scoped></style>

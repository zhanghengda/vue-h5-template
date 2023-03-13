<template>
  <div id="app">
    <layout />
  </div>
</template>
<script>
import layout from '@/views/layouts/index.vue'

export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>

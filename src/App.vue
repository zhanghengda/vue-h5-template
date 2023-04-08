<template>
  <div id="app">
    <layout />
  </div>
</template>
<script>
import layout from '@/views/layouts/index.vue'
import { getProductQuery, getcatetorys, getBaseUrl } from '@api/user'

export default {
  name: 'App',
  components: {
    layout
  },
  created() {
    this._getProductQuery()
    this._getcatetorys()
  },
  methods: {
    _getProductQuery() {
      let param = {
        pageNum: 1,
        pageSize: 300,
        categoryId: -1
      }
      getProductQuery(param).then(res => {
        if (res.code == 0 && res.data) {
          this.$store.dispatch('setGames', res.data.records)
        } else {
        }
      })
    },
    _getcatetorys() {
      getcatetorys().then(res => {
        if (res.code == 0 && res.data) {
          this.$store.dispatch('SET_Catetorys', res.data)
        } else {
        }
      })
    }
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

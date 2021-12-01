<template>
  <nav class="bar bar-tab">
    <p class="buttons-row endpage">
      <a
        href="complaints.html?serial_num=1102347000741150643104039&amp;product_pk=790873522749571072"
        class="button endpage-a external indexAOne"
        id="complaints"
        ><span class="endpage-span">消费反馈</span></a
      >
      <a
        class="button endpage-a external indexATwo"
        id="infosearch"
        href="authen.html?serial_num=1102347000741150643104039"
        ><span class="endpage-span-search">防伪查询</span></a
      >
    </p>
  </nav>
</template>
<script>
export default {
  name: 'TabBar',
  props: {
    defaultActive: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      active: this.defaultActive
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

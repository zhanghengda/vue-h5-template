<template>
  <div v-append.sync="adhtml"></div>
</template>

<script>
export default {
  name: 'Advertising',
  props: {
    adhtml: String
  }
}
</script>

<style scoped></style>

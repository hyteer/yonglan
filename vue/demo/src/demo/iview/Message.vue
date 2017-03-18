<template>
    <i-button type="primary" @click="info">显示普通提醒</i-button>
</template>
<script>
export default {
  methods: {
    info () {
      this.$Message.info('这是一条普通的提醒')
    }
  }
}
</script>

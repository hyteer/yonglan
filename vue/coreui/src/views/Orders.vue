<template>
  <div class="orders">
    <h3>{{ header }}</h3>
    just for demonstrate...
  </div>
</template>

<script>
export default {
  name: 'orders',
  label: '订单管理',
  data () {
    return {
      header: '订单管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

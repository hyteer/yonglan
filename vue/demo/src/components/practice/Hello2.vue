<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h3>Hello2</h3>
    just for demonstrate...
  </div>
</template>

<script>
export default {
  name: 'hello2',
  data () {
    return {
      msg: 'Hello2 Home'
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

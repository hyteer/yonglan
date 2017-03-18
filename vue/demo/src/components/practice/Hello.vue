<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    Hello,just for demonstrate...
  </div>
</template>

<script>
export default {
  name: 'button-counter',
  data () {
    return {
      msg: 'Hello Demo'
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

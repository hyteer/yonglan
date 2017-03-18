<template>
  <div class="iview">
    <h2>{{ title }}</h2>
    <p>{{ msg }}</p>
    <ul>
    <li><router-link to="/iview/basic">Basic</router-link></li>
    <li><router-link to="/iview/button">Button</router-link></li>
    <li><router-link to="/iview/message">Message</router-link></li>
  </ul>
    <div id="demo-container">
    <router-view class="child"></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: 'iview',
  data () {
    return {
      title: 'iview demo',
      msg: 'some iview demos...'
    }
  }
}
</script>

<style scoped>
#demo-container { margin: 10px 10px; }
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; margin: 10px 10px;}
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px; }
.v-link-active { color: #bbb; }
a.router-link-active {
  color: #abc;
}
</style>

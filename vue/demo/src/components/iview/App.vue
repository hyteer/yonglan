<template>
  <div class="iview-demo">
    <h3>{{ title }}</h3>
    <p>{{ msg }}</p>
    <router-view class="child"></router-view>
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

<template>
  <header class="app-header navbar">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'navbar',
  created () {
    this._navbar = true
  }
}
</script>

<style scoped>
header.navbar,header.navbar .navbar-brand { height: 44px; }


</style>

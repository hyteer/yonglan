<template>
  <div class="advanced">
    <h3>{{ msg }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data () {
    return {
      msg: 'Advanced Demo',
      content: 'some advanced vue demos...'
    }
  }
}
</script>

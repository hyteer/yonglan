<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p>{{content}}</p>
    <h3>v-for</h3>
    <ul>
      <li v-for="name in names">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'basic',
  data () {
    return {
      msg: 'Demo Basic',
      content: 'some advanced vue demos...',
      names: ['YT', 'Sherry', 'Daisy']
    }
  }
}
</script>

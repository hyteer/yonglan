<template>
  <div class="counter">
  <h3>Counter Demo</h3>
  <p>{{ count }}</p>
  <button @click="add">+</button>
  <button @click="decrement">-</button>
  <button v-on:click="add">v-on + </button>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'counter',
  computed: {
    count () {
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  },
  methods: {
    add () {
      this.$store.commit('increment', 3)
    },
    ...mapActions([
      'decrement'
    ])
  }
  /*
  methods: {
    add () {
      this.$store.commit('increment', 3)
    },
    minus () {
      this.$store.commit('decrement', 3)
    }
  }
  */
}
/*
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
*/
</script>

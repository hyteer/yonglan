<template>
  <div class="counter">
  <h3>Counter Demo</h3>
  <p>{{ count }}</p>
  <i-button @click="add">+</i-button>
  <i-button type="primary" @click="decrement">-</i-button>
  <i-button v-on:click="add">v-on + </i-button>

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
      this.$store.commit('increment', 2)
      this.debugLog("add action2...")
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

<template>
  <div class="testing">
  <h3>{{ title }}</h3>
  <p>{{ count }}</p>
  <i-button @click="add">+</i-button>
  <i-button type="primary" @click="decrement">-</i-button>
  <i-button v-on:click="incrementAsync">Async Add</i-button>
  <i-button @click="asyncLog">Async Log</i-button>
  <i-button @click="demoAwait">Await Demo</i-button>
  <i-button @click="getUsers">Get Users</i-button>

  <h3>Outouts...</h3>
  <p>data: {{ users }}</p>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'testing',
  data () {
    return {
      title: 'Testing demo',
      msg: 'test axios...',
      apiData: '',
      users: ''
    }
  },
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
    getUsers () {
      this.http('/api/users/').then(response => this.users = response.data);
    },
    ...mapActions([
      'decrement',
      'incrementAsync',
      'asyncLog',
      'demoAwait'
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

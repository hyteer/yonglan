<template>
  <div class="testing">
  <h3>{{ title }}</h3>
  <p>{{ count }}</p>
  <i-button @click="add">+</i-button>
  <i-button type="primary" @click="decrement">-</i-button>
  <i-button v-on:click="incrementAsync">Async Add</i-button>
  <i-button @click="asyncLog">Async Log</i-button>
  <i-button @click="demoAwait">Await Demo</i-button>
  <i-button @click="getUsers">Get Users</i-button><br>
  <i-button @click="changeSidebar">Change Sidebar</i-button>

  <h3>Outouts...</h3>
  <p>data: {{ users }}</p>
  <div id="testdiv" v-bind:style="styleObject" @click="changeColor">test div</div>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'testing',
  data () {
    return {
      title: 'Testing demo',
      sidebarFlag: true,
      msg: 'test axios...',
      styleObject: {
        width: '50%',
        color: 'red',
        background: '#404a7c',
        fontSize: '13px'
      },
      apiData: '',
      users: ''
    }
  },
  computed: {
    count () {
      console.log(this.$store.state.count)
      return this.$store.state.count
    },
    sidebar () {
      if(this.sidebarFlag){
        console.log("sidebar flag is True now")
      }else{
        console.log("sidebar flag is False now")
      }
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
    changeColor () {
      console.log("Change color...")
      this.styleObject.background = '#475514'
    },
    changeSidebar () {
      console.log("change sidebar state...")
      this.sidebarFlag = !this.sidebarFlag
      if(this.sidebarFlag){
        console.log("sidebar is True now")
        this.styleObject.width = '50%'
        this.styleObject.background = '#475514'
      }else{
        console.log("sidebar is False now")
        this.styleObject.width = '80%'
        this.styleObject.background = '#8c408e'
      }
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

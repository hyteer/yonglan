<template>
  <div class="axios-demo">
    <h2>{{ title }}</h2>
    <p>{{ msg }}</p>
    <div>
      <i-button @click="req">Test</i-button>
      <i-button @click="getUsers">getUsers</i-button>
      <i-button @click="getData">getData</i-button>
    </div>
    <p>Reap Data {{ resp }}</p>
    <p>API data: {{ apiData }} </p>
    <p>Users: {{ users }} </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios',
  data () {
    return {
      title: 'Axios demo',
      msg: 'test axios...',
      apiData: '',
      users: '',
      resp: ''

    }
  },
  computed: {
    //respData: 'response data...'
  },
  methods: {
    req () {
      let self = this
      console.log("start requesting...")
      var http = axios.create({
        baseURL: 'http://localhost:8000/',
        timeout: 2000,
        headers: {'yt-debug': 'foobar'}
      })
      http.get('/api/')
      .then(function (response) {
        self.debugLog('request success...')
        self.myresp = response.data
        self.resp = response.data
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    getUsers () {
      this.http('/api/users/').then(response => this.users = response.data);
    },
    getData: function () {
      console.log("conf:",this.conf)
      return this.http.get('/api/').then(response => this.apiData = response.data);
    }
  }
}
</script>

<style scoped>
nav { margin-bottom: 30px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px; }
.v-link-active { color: #bbb; }
a.router-link-active {
  color: #abc;
}
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/iview">Iview</router-link></li>
                <li><router-link to="/hello">Hello</router-link></li>
                <li><router-link to="/basic">Basic</router-link></li>
                <li><router-link to="/testing">Testing</router-link></li>
                <li><router-link to="/axios">Axios</router-link></li>
                <li><router-link to="/event">Event</router-link></li>
                <li><router-link to="/count">Counter</router-link></li>
            </ul>
        </nav>
        <div id="child-container">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>

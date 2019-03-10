<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">vue page色々</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/uni-3/web-audio-demo" target="_blank">
        <span class="mr-2">source on github</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/counter">Counter</router-link>|
          <router-link to="/qiita-org">Qiita Org</router-link>
        </div>
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

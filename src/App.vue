<template>
  <div id="app">
    <layoutHeader></layoutHeader>
    <layoutPage></layoutPage>
    <!-- <router-view/> -->
    <layoutFooter></layoutFooter>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutFooter from '@/components/layout/Footer.vue'
import LayoutPage from '@/components/layout/Page.vue'

export default {
  name: 'App',
  components: { LayoutHeader, LayoutFooter, LayoutPage },
  data: function() {
    return {
     type: ""
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

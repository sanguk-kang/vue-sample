<template>
  <div>
      <layoutNav v-if="this.viewNav"></layoutNav>
      <router-view/>
      <layoutAside v-if="this.viewAside"></layoutAside>
  </div>
</template>

<script>
import LayoutNav from '@/components/layout/Nav.vue'
import LayoutAside from '@/components/layout/Aside.vue'

export default {
  name: "Page",
  components: { LayoutNav, LayoutAside },
  props: [],
  watch: {
    '$route' (to) {
      this.viewNav = to.meta.asideEnable;
      this.viewAside = to.meta.navEnable;
    }
  },
  data: function() {
    return {
     msg: "Page Page",
     viewNav: false,
     viewAside: false
    }
  },
  methods: {    
  },
  created() {
    console.log('page created >>>>>')
  },
  mounted() {
  },
  destroyed() {
  }
}
</script>

<style lang="scss">

</style>
<template>
  <div>
      <h1>{{msg}}</h1>
      <button type="button" class="btn btn-secondary" @click="test">TEST</button>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  props: ['sides'],
  data: function() {
    return {
     msg: "Main Page"
    }
  },
  methods: {   
    test() {
      console.log("111111", this.sides);
      this.$router.push({name : "Login"});
    } 
  },
  created() {

  },
  mounted() {
  },
  destroyed() {
  }
}
</script>

<style lang="scss">

</style>
<template>
  <div>
      <backlogCreate></backlogCreate>
  </div>
</template>

<script>
import backlogCreate from '@/components/backlog/BacklogCreate.vue'

export default {
  name: "BacklogCreate",
  components: { backlogCreate },
  data: function() {
    return {
    }
  },
  methods: {    
  },
  created() {
    console.log("created");
  }
}
</script>

<style lang="scss">

</style>
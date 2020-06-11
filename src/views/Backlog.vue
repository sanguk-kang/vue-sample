<template>
  <div class="backlog">
    <h1>Backlog page</h1>
    <backlogList v-if="pageList.list" @pageMove="pageMove"></backlogList>
    <backlogSbst v-else></backlogSbst>
  </div>
</template>

<script>
import backlogList from '@/components/backlog/BacklogList.vue'
import backlogSbst from '@/components/backlog/BacklogSbst.vue'

export default {
  name: 'Backlog',
  components: { backlogList, backlogSbst },
  data: function() {
    return {
     dataList: [],
     pageList: {
       list: true,
       sbst: false
     },
     sbstObj: {}
    }
  },
  methods: {
    // 
    pageMove(page) {
      console.log(">> pageMove", page)
      if (page == "list") {
        this.pageList= {
          list: true,
          sbst: false
        }
     } else {
       this.pageList= {
          list: false,
          sbst: true
        }
     }
    }
  },
  created() {

  }
}
</script>

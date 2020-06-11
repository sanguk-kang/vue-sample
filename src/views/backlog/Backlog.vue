<template>
  <div class="backlog">
    <h1>Backlog page</h1>
    <div align="right">
      <button type="button" class="btn btn-dark" @click="search">Search</button>
    </div>
    <backlogList v-if="viewType" :backList="dataList"></backlogList>
    <noDataPage v-else></noDataPage>
    <div align="right">
      <button type="button" class="btn btn-dark" @click="add">add</button>
    </div>
  </div>
</template>

<script>
import axios from "@/api/axios";
import backlogList from '@/components/backlog/BacklogList.vue'
import noDataPage from "@/components/common/NoDataPage.vue";

export default {
  name: 'Backlog',
  components: { backlogList, noDataPage },
  data: function() {
    return {
     dataList: [],
     viewType: false
    }
  },
  methods: {
    /**
     * 조회
     */
    search() {
      // api 호출
      let type = this;
      axios.getApi('/v1/backlogs').then(res => {
        this.dataList = res.data;
        type.viewType = true;
      });
    },
    /**
     * 등록
     */
    add() {
      console.log("데이터 추가");
      this.$router.push({ name: "BacklogCreate"});
    }
  },
  created() {
      this.search()
  }
}
</script>

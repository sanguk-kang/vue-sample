<template>
  <div>
      <div v-if="viewResult">
        <backlogSbst v-if="viewType" :backlogSbst="dataObj" @deleteLog="deleteBacklog" @change="changeView"></backlogSbst>
        <backlogUpdate v-else :backlogSbst="dataObj" @change="changeView" @update="updateBacklog"></backlogUpdate>
      </div>
  </div>
</template>

<script>
import axios from "@/api/axios";
import backlogSbst from '@/components/backlog/BacklogSbst.vue'
import backlogUpdate from '@/components/backlog/BacklogUpdate.vue'

export default {
  name: 'BacklogSbst',
  components: { backlogSbst, backlogUpdate },
  data: function() {
    return {
     dataObj: {},
     pageId: "",
     viewType: false,
     viewResult: false
    }
  },
  methods: {
    getSearch() {
      // 조회 API
      let uri = '/v1/backlogs/' + this.pageId
      axios.getApi(uri).then(res => {
        console.log("get result", res.data);
        this.dataObj = res.data
        this.viewResult = true; // 조회 이후 화면 오픈
        this.viewType = true; // 조회 화면
      });
    },
    deleteBacklog() {
      console.log(123);
      // 삭제 API
      let uri = '/v1/backlogs/' + this.pageId
      axios.deleteApi(uri).then(res => {
        console.log("delete result", res);
        alert('삭제완료');
        this.$router.push({ name: "Backlog"});
      });
    },
    changeView(arg) {
      this.viewType = arg;
    },
    updateBacklog(updateObj) {
      // 업데이트 API
      let uri = '/v1/backlogs/'
      axios.putApi(uri, updateObj).then(res => {
        console.log("postApi 결과", res)
        if (res.status === 200 || res.status === 201) {
          alert("저장 성공");
          this.getSearch();
        } else {
          alert("저장 실패");
        }
      });
    }
  },
  created() {
    console.log("query: ", this.$route.query.id)
    this.pageId = this.$route.query.id;
    this.getSearch();
  }
}
</script>
<template>
  <div class="demo">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">SUMMARY</th>
            <th scope="col">ASSIGNEE</th>
            <th scope="col">POINT</th>
            <th scope="col">UPDATE TIME</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataList" :key="item.id" @click="sbstbtn(item)">
            <th scope="row">{{item.id}}</th>
            <td align="left">{{item.summary}}</td>
            <td>{{item.assignee}}</td>
            <td>{{item.point}}</td>
            <td>{{dateConvert(item.update_time)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import StringUtils from "@/utils/StringUtils.js";

export default {
  name: 'BacklogList',
  components: {},
  props: [ 'backList' ],
  data: function() {
    return {
        dataList: []
    }
  },
  methods: {
    /**
     * TO-OD
     * 날짜 변환
     */
    dateConvert(date) {
      var pageTime = "";
      if (!StringUtils.isEmpty(date)) {
        console.log(date.substring(0, 8));
        StringUtils.numberToDateChange(date.substring(0, 8));
        pageTime = StringUtils.numberToDateChange(date.substring(0, 8));
      }
      return pageTime;
    },
    sbstbtn(item) {
      console.log(item);
      this.$router.push({ name: "BacklogSbst", query: {id: item.id } });
    }
  },
  mounted() {
  },
  created() {
    this.dataList = StringUtils.deepObjectCopy(this.backList);
    console.log(this.dataList);
  }
}
</script>


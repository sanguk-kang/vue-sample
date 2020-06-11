<template>
  <div>
      <label for="basic-url">백로그 신규 화면</label>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Id</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.id" maxlength="10">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Summary</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.summary" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Assignee</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.assignee" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Watcher</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.watcher" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Point</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.point" maxlength="3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Start Date</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.start_time" maxlength="8">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">End Date</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="input" v-model="backLogData.end_time" maxlength="8">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Dod</label>
        <div class="col-sm-10">
          <b-form-textarea
            id="textarea"
            v-model="backLogData.dod"
            placeholder=""
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <b-form-textarea
            id="textarea"
            v-model="backLogData.description"
            placeholder=""
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </div>
      </div>
      <div align="right">
        <button type="button" class="btn btn-primary" @click="save">SAVE</button>&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary" @click="cancel">CANCEL</button>
      </div>
  </div>
</template>

<script>
import axios from "@/api/axios";
import StringUtils from "@/utils/StringUtils.js";

export default {
  name: "BacklogCreate",
  data: function() {
    return {
      msg: "",
      backLogData : {
        id: "",
        summary: "",
        assignee: "",
        watcher: "",
        point: 0,
        start_time: "",
        end_time: "",
        dod: "",
        description: ""
      }
    }
  },
  methods: {  
    save() {
      console.log("저장", this.backLogData);
      if (StringUtils.isEmpty(this.backLogData.id)) {
        alert("ID는 필수값 입니다.");
      }

      if (isNaN(this.backLogData.point)) {
        alert("포인트는 숫자만 입력 가능합니다.")
        return;
      }

      if (isNaN(this.backLogData.start_time) || isNaN(this.backLogData.end_time)) {
        alert("날짜는 숫자만 입력 가능합니다.")
        return;
      }

      // 저장
      axios.postApi("/v1/backlogs", this.backLogData).then(res => {
        console.log("postApi 결과", res)
        if (res.status === 200 || res.status === 201) {
          alert("저장 성공");
          this.$router.push({ name: "Backlog" });
        } else {
          alert("저장 실패");
        }
      });
    },
    cancel() {
      this.$router.push({ name: "Backlog" });
    }
  },
  created() {    
  }
}
</script>

<style lang="scss">

</style>

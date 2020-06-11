<template>
  <div>
      <div>
        <div class="form-group row ">
          <label for="inputPassword" class="col-sm-2 col-form-label">ID</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.id">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Summary</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.summary">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Assignee</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.assignee">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Watcher</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.watcher">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Point</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.point">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">CREATE DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.create_time">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">UPDATE DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.update_time">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">START DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.start_time">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">END DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" readonly v-model="dataObj.end_time">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Dod</label>
        <div class="col-sm-10">
          <b-form-textarea
            id="textarea"
            v-model="dataObj.dod"
            placeholder=""
            rows="3"
            max-rows="6"
            readonly
            ></b-form-textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <b-form-textarea
            id="textarea"
            v-model="dataObj.description"
            placeholder=""
            rows="3"
            max-rows="6"
            readonly
            ></b-form-textarea>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-secondary" @click="back">BACK</button>&nbsp;&nbsp;
        <b-button variant="outline-primary" @click="updateLog">UPDATE</b-button>&nbsp;&nbsp;
        <b-button variant="danger" @click="deleteLog">DELETE</b-button>
      </div>
  </div>
</template>

<script>
import StringUtils from "@/utils/StringUtils.js";

export default {
  name: 'BacklogSbst',
  props: [ 'backlogSbst' ],
  components: {  },
  data: function() {
    return {
     dataObj: {},
     visible: false
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "Backlog"});
    },
    updateLog() {
      console.log("업데이트");
      this.$emit('change', false);
    },
    deleteLog() {
      console.log("삭제");
      this.$emit('deleteLog');
    },
    convertChange() {
      // console.log(StringUtils.numberToDateChange(date));
    }
  },
  created() {
    if (!StringUtils.isEmpty(this.backlogSbst)) {
      this.dataObj = StringUtils.deepObjectCopy(this.backlogSbst);
    }
  }
}
</script>
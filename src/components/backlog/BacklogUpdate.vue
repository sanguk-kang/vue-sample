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
          <input type="text" class="form-control" placeholder="" v-model="dataObj.summary" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Assignee</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" v-model="dataObj.assignee" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Watcher</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" v-model="dataObj.watcher" maxlength="50">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Point</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" v-model="dataObj.point" maxlength="3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">START DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" v-model="dataObj.start_time" maxlength="8">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">END DATE</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" placeholder="" v-model="dataObj.end_time" maxlength="8">
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
            ></b-form-textarea>
        </div>
      </div>
      <div>
        <b-button variant="outline-primary" @click="saveLog">SAVE</b-button>&nbsp;&nbsp;
        <b-button variant="danger" @click="cancelLog">CANCEL</b-button>
      </div>
  </div>
</template>

<script>
import StringUtils from "@/utils/StringUtils.js";

export default {
  name: 'backlogUpdate',
  props: [ 'backlogSbst' ],
  components: {  },
  data: function() {
    return {
     dataObj: {},
     visible: false
    }
  },
  methods: {
    saveLog() {
      console.log("업데이트");
      this.$emit('update', this.dataObj);
    },
    cancelLog() {
      this.$emit('change', true);
    }
  },
  created() {
    if (!StringUtils.isEmpty(this.backlogSbst)) {
      this.dataObj = StringUtils.deepObjectCopy(this.backlogSbst);
    }
  }
}
</script>
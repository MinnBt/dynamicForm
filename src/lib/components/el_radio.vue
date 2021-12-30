<template>
  <div class="el_radio_wrapper">
    <el-form-item :label="item.title">
      <el-radio-group v-model="value">
        <el-radio v-for="it in item.selectObj" :key="it.id" :label="it.id">{{it.name}}</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "el_radio",
  props:{
    item:{}
  },
  data(){
    return{
      value:[]
    }
  },
}
</script>

<style scoped>

</style>

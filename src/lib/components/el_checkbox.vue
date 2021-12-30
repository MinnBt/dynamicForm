<template>
  <div class="el_checkbox_wrapper">
    <el-form-item :label="item.title">
      <el-checkbox-group v-model="value">
        <el-checkbox v-for="it in item.selectObj" :key="it.id" :label="it.id">{{it.name}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>

  </div>
</template>

<script>
export default {
  name: "el_checkbox",
  props:{
    item:{}
  },
  data(){
    return{
      value:[]
    }
  },
  methods:{
    onChangeFirstValue(){

    }
  },
}
</script>

<style scoped>

</style>

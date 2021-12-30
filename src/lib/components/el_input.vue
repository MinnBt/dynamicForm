<template>
  <div v-if="item">
    <el-form-item :label="item.title" >
          <el-input clearable v-model="value" :placeholder="item.prompt_msg"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "self_input",
  props:{
    item:{}
  },
  data(){
    return{
      value:''
    }
  },
  methods:{
    onChangeFirstValue(){

    }
  }
}
</script>

<style scoped lang="scss">



</style>

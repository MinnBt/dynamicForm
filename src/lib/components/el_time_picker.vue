<template>
  <div v-if="item">
    <el-form-item :label="item.title" >
      <el-time-picker
        type="date"
        @change="onChangeFirstValue"
        :placeholder="item.prompt_msg"
        v-model="value"
        format="HH-mm-ss"
        value-format="HH-mm-ss"
        style="width: 100%;"
      ></el-time-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "el_time_picker",
  props:{
    item:{}
  },
  data(){
    return{
      value:''
    }
  },
  methods:{
    onChangeFirstValue(val){
      this.$emit('changeComponent',{id:this.item.id,val:val})
    }
  }
}
</script>

<style scoped lang="scss">



</style>

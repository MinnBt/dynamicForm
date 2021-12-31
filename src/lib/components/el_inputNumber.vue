<template>
  <div v-if="item">
    <el-form-item :label="item.title" >
      <el-input-number clearable v-model="value" :step="item.step||1"  @change="onChangeFirstValue"></el-input-number>
<!--      <el-input-number v-model="num" :step="2"></el-input-number>-->
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "self_inputNumber",
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

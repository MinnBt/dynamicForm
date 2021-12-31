<template>
  <div v-if="item">
    <el-form-item :label="item.title" >
          <el-input clearable v-model="value" :placeholder="item.prompt_msg"   @change="onChangeFirstValue"></el-input>
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
    onChangeFirstValue(val){
      this.$emit('changeComponent',{id:this.item.id,val:val})
    }
  }
}
</script>

<style scoped lang="scss">



</style>

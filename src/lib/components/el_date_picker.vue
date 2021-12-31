<template>
  <div v-if="item">
    <el-form-item :label="item.title" >
      <el-date-picker
        type="date"
        @change="onChangeFirstValue"
        :placeholder="item.prompt_msg"
        v-model="value"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        style="width: 100%;"
      ></el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "el_date_picker",
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

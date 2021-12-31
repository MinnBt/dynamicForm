<template>
  <div class="el_checkbox_wrapper">
    <el-form-item :label="item.title">
      <el-checkbox-group v-model="value" @change="onChangeFirstValue">
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
    onChangeFirstValue(val){
      this.$emit('changeComponent',{id:this.item.id,val:val})
    }
  }
}
</script>

<style scoped>

</style>

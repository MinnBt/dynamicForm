<template>
  <div v-if="item">
    <el-form-item :label="item.title">
          <el-select
            v-model="value"
            clearable
            style="width: 100%"
            :placeholder="item.prompt_msg"
            @change="onChangeFirstValue"
          >
            <el-option
              v-for="it in item.selectObj"
              :key="it.id"
              :label="it.name"
              :value="it.id">
            </el-option>
          </el-select>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "self_select",
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
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">



</style>

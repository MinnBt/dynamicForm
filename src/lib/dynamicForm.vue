<template>
  <div class="g-container">
    <el-form ref="form"
             :model="form"
             :size="form.formConfig.size"
             :label-width="form.formConfig.lableWidth+'px'"
             :label-position="form.formConfig.labelPosition"
             >
        <component
          v-for="(item, number) in form.freedomConfig"
          :key="item.id"
          :is="item.type"
          :item="item"
          :number="number"
          @changeComponent="changeComponentHandle"
        ></component>

      <el-form-item>
        <el-button v-for="(item,index) in form.formConfig.buttons" :key="index" :type="item.type" @click="changeButs(item)">{{item.text}}</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import * as itemElements from './components/itemElement'
export default {
  name: "lm-dynamic-form",
  components: itemElements,
  props:{
    form:{
      type:Object
    }
  },
  methods:{
    changeComponentHandle(val){
      this.$emit('getCommom',val)
    },
    changeButs(val){
     this.$emit('changBtns',val);
    }
    //
  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div id="app">
    <lm-dynamic-form :form="form" @getCommom="changegetCommom" @changBtns="changBtns"></lm-dynamic-form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      form:{
        "formConfig":{
          'lableWidth':120,
          "size":'small',
          "labelPosition":'right',
          "buttons":[{text:'保存',type:'primary'},{text:'取消',type:''}]
        },
        "freedomConfig": [{
          "id": 10,
          "name": "check_type",
          "isRules":false,
          "type": "el_select",
          "title": "审核类型",
          "prompt_msg": "请填写审核类型",
          "selectObj": [{
            "id": 1,
            "name": "预审核"
          }, {
            "id": 2,
            "name": "患者审核"
          }],
          "val": null,
          "rank": 0
        },
          {
            "id": 11,
            "isRules":true,
            "name": "check_type",
            "type": "el_input",
            "title": "输入内容",
            "prompt_msg": "请填写审核类型",
            "selectObj": [],
            "val": null,
            "rank": 0
          },
          {
            "id": 12,
            "isRules":true,
            "name": "check_type",
            "type": "el_checkbox",
            "title": "活动性质",
            "prompt_msg": "请填写审核类型",
            "selectObj": [
              {
                "id": 1,
                "name": "A"
              },
              {
                "id": 2,
                "name": "B"
              }
            ],
            "val": null,
            "rank": 0
          },
          {
            "id": 13,
            "isRules":true,
            "name": "check_type",
            "type": "el_radio",
            "title": "特殊资源",
            "prompt_msg": "请填写审核类型",
            "selectObj": [
              {
                "id": 1,
                "name": "A"
              },
              {
                "id": 2,
                "name": "B"
              }
            ],
            "val": null,
            "rank": 0
          },
          {
            "id": 14,
            "isRules":true,
            "name": "check_type",
            "type": "el_textarea",
            "title": "输入内容",
            "prompt_msg": "请填写审核类型",
            "selectObj": [],
            "val": null,
            "rank": 0
          },
          {
            "id": 15,
            "isRules":true,
            "name": "check_type",
            "type": "el_date_picker",
            "title": "输入内容",
            "prompt_msg": "请填写审核类型",
            "selectObj": [],
            "val": null,
            "rank": 0
          },
          {
            "id": 16,
            "isRules":true,
            "name": "check_type",
            "type": "el_inputNumber",
            "title": "计数器",
            "prompt_msg": "请填写审核类型",
            "selectObj": [],
            "val": null,
            "step": 1,
            "rank": 0
          },
          {
            "id": 17,
            "isRules":true,
            "name": "check_type",
            "type": "el_time_picker",
            "title": "时间",
            "prompt_msg": "请填写审核类型",
            "selectObj": [],
            "val": null,
            "step": 1,
            "rank": 0
          },
          ]
      },


    }
  },
  methods:{
    changegetCommom(val){
     let findData = this.form.freedomConfig.find(item=> item.id==val.id)
      findData.val=val.val
      console.log(findData);
    },
    changBtns(v){
      console.log(v);
    }
  }
}
</script>

<style lang="scss">
 #app{
   width: 40%;
 }
</style>

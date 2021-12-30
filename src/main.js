import Vue from 'vue'
import App from './App.vue'
import dynamicForm from './lib/index'
Vue.use(dynamicForm)

new Vue({
  el: '#app',
  render: h => h(App)
})

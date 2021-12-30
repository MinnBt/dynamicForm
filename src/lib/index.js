
import dynamicForm from './dynamicForm'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const dynamic = {
  install(Vue, options) {
    Vue.component(dynamicForm.name, dynamicForm)
     Vue.use(ElementUI);
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(dynamic);
}
export default dynamic

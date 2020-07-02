
import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import main from '@/pages/main'
 
Vue.use(Router)
 
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: '首页', component: main },
  ]
})
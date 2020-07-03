import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import 'echarts/map/js/china.js';

Vue.config.productionTip = false


Vue.use(ElementUI);


Vue.prototype.$echarts = echarts;


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')